import _ from 'lodash';
import HttpProvider from "./HttpProvider";
import {SmartContractTransaction} from "../transactions/index";

function transactionToParams(transaction, dryRun, isAsync) {
    if (transaction instanceof SmartContractTransaction) {
        const params = {
            "to": transaction.toOutput.address || null,
            "amount":
                {
                    "dtokenwei": transaction.fromInput.coins.dtokenWei.toString(10) || "0"
                },
            "gas_price": transaction.gasPrice.toString(),
            "gas_limit": transaction.gasLimit,
            "data": transaction.rawData.slice(2),
            "sequence": `${transaction.getSequence()}`,
            "dryrun": dryRun,
            "async": isAsync,
        };

        return params;
    } else {
        //TODO throw error
    }
}

export default class PartnerVaultHttpProvider extends HttpProvider {
    constructor(chainId, url, vaultUrl) {
        super(chainId, url);

        this.vaultUrl = vaultUrl;
        this.partnerId = null;
        this.userId = null;
        this.accessToken = null;
        this.isDryrun = false;
        this.isAsync = false;
    }

    setDryrun(isDryrun) {
        this.isDryrun = isDryrun;
    }

    setAsync(isAsync) {
        this.isAsync = isAsync;
    }

    setPartnerId(partnerId) {
        this.partnerId = partnerId;
    }

    setUserId(userId) {
        this.userId = userId;
    }

    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }

    async sendTransaction(transaction) {
        let params = transactionToParams(transaction, this.isDryrun, this.isAsync);
        params = Object.assign(params, {
            userid: this.userId,
            partner_id: this.partnerId,
        });

        const requestBody = {
            jsonrpc: "2.0",
            id: (this._nextId++),
            method: "dnero.SmartContractTx",
            params: [params]
        };
        const requestBodyStr = JSON.stringify(requestBody);
        const reqOpts = _.merge({
            method: 'POST',
            body: requestBodyStr,
            headers: {
                "x-access-token": this.accessToken,
                "Content-Type": "application/json"
            }
        }, HttpProvider.extraRequestOpts);

        const response = await fetch(this.vaultUrl, reqOpts);

        const responseJson = await response.json();

        return responseJson;
    }
}
