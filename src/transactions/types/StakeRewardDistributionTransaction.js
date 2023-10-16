import _ from 'lodash';
import TxInput from '../common/TxInput'
import TxOutput from '../common/TxOutput'
import TxType from '../common/TxType'
import Coins from '../common/Coins'
import EthereumTx from '../common/EthereumTx'
import BigNumber from "bignumber.js"
import RLP from 'eth-lib/lib/rlp';
import Bytes from 'eth-lib/lib/bytes';
import BaseTransaction from "../common/BaseTransaction";
import {gasPriceDefault, StakePurpose} from "../../constants/index";

export default class StakeRewardDistributionTransaction extends BaseTransaction{
    constructor(tx){
        super(tx);

        let {holder, beneficiary, splitBasisPoint, gasPrice, sequence} = tx;

        if(_.isNil(gasPrice)){
            gasPrice = gasPriceDefault;
        }

        let feeInDTokenWeiBN = BigNumber.isBigNumber(gasPrice) ? gasPrice : (new BigNumber(gasPrice));
        this.fee = new Coins(new BigNumber(0), feeInDTokenWeiBN);

        this.holder = new TxInput(holder, null, null, sequence);

        this.beneficiary = new TxOutput(beneficiary, null, null);

        this.splitBasisPoint = splitBasisPoint;


        if(_.isNil(sequence)){
            this.setSequence(1);
        }
    }

    setSequence(sequence){
        const input = this.holder;
        input.sequence = sequence;
    }

    getSequence(){
        const input = this.holder;
        return input.sequence;
    }

    setFrom(address){
        const input = this.holder;
        input.address = address;
    }

    setSignature(signature){
        let input = this.holder;
        input.setSignature(signature);
    }

    signBytes(chainID){
        // Detach the existing signature from the source if any, so that we don't sign the signature
        let sig = this.holder.signature;

        this.holder.signature = "";

        let encodedChainID = RLP.encode(Bytes.fromString(chainID));
        let encodedTxType = RLP.encode(Bytes.fromNumber(this.getType()));
        let encodedTx = RLP.encode(this.rlpInput());
        let payload = encodedChainID + encodedTxType.slice(2) + encodedTx.slice(2);

        // For ethereum tx compatibility, encode the tx as the payload
        let ethTxWrapper = new EthereumTx(payload);
        let signedBytes = RLP.encode(ethTxWrapper.rlpInput()); // the signBytes conforms to the Ethereum raw tx format

        // Attach the original signature back to the source
        this.holder.signature = sig;

        return signedBytes;
    }

    getType(){
        return TxType.DepositStakeV2;
    }

    rlpInput(){
        let rlpInput = [
            this.fee.rlpInput(),
            this.holder.rlpInput(),
            this.beneficiary.rlpInput(),
            (this.splitBasisPoint === 0 ? Bytes.fromNat("0x0") : Bytes.fromNumber(this.splitBasisPoint)),
        ];

        return rlpInput;
    }
}
