import BigNumber from "bignumber.js";
import TxType from "../transactions/common/TxType";

const StakePurpose = {
    StakeForValidator: 0,
    StakeForSentry: 1,
    StakeForEliteEdge: 2
};

const DneroBaseDerivationPath = "m/44'/500'/0'/0/";
const DerivationPaths = {
    Default: `${DneroBaseDerivationPath}0`,
    Dnero: DneroBaseDerivationPath,
    Ethereum: "m/44'/60'/0'/0/",
    EthereumOther: "m/44'/60'/0'/",
    EthereumLedgerLive: "m/44'/60'/"
}

const AddressZero = "0x0000000000000000000000000000000000000000";
const HashZero = "0x0000000000000000000000000000000000000000000000000000000000000000";

const Zero = new BigNumber(0);
const One = new BigNumber(1);
const Ten18 = (new BigNumber(10)).pow(18); // 10^18, 1 Dnero = 10^18 DneroWei

const gasPriceDefault = (new BigNumber(0.3)).multipliedBy(Ten18);
const gasPriceSmartContractDefault = (new BigNumber(0.000004)).multipliedBy(Ten18);
const gasLimitDefault = 10000000;

export {
    StakePurpose,
    TxType,

    AddressZero,
    HashZero,

    Zero,
    One,
    Ten18,

    DerivationPaths,

    gasPriceDefault,
    gasPriceSmartContractDefault,
    gasLimitDefault
};

