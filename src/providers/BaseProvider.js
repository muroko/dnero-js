import { serialize, SmartContractTransaction } from "../transactions/index";

export class BaseProvider {
    constructor(chainId) {
        this._chainId = chainId;

        this._isProvider = true;
    }

    perform(method, params) {
        // Subclasses will implement this
    }

    getChainId() {
        return this._chainId;
    }

    async getAccount(address, preview = false) {
        const params = {
            address: address,
            preview: preview
        };

        return await this.perform("dnero.GetAccount", params);
    }

    async getTransactionCount(address, preview = false) {
        const params = {
            address: address,
            preview: preview
        };

        let account = null;
        try {
            account = await this.perform("dnero.GetAccount", params);
        }
        catch (e) {
            // Default when the account is not null
            account = {};
            account.sequence = 0;
        }

        return parseInt(account.sequence);
    }

    async sendTransaction(signedTransaction) {
        return await this.perform("dnero.BroadcastRawTransaction", { tx_bytes: signedTransaction });
    }

    async callSmartContract(transaction) {
        const rawTxBytes = serialize(transaction, null);

        return await this.perform("dnero.CallSmartContract", { sctx_bytes: rawTxBytes });
    }

    async getTransaction(transactionHash) {
        const params = { hash: transactionHash };
        return await this.perform("dnero.GetTransaction", params);
    }

    async getBlock(blockHash) {
        const params = { hash: blockHash };
        return await this.perform("dnero.GetBlock", params);
    }

    async getBlockByHeight(blockHeight) {
        const params = { height: blockHeight };
        return await this.perform("dnero.GetBlockByHeight", params);
    }

    async getBlockNumber() {
        try {
            let status = await this.perform("dnero.GetStatus", {});
            return parseInt(status.current_height);
        } catch (e) {
            throw new Error(e);
        }
    }
}
