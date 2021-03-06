import _ from 'lodash';
import { BaseProvider } from "./BaseProvider";
import { getRPCUrlForChainId, ChainIds } from "../networks/index";

function getResult(response) {
    if (response.error) {
        const error = new Error(response.error.message);
        error.code = response.error.code;
        error.data = response.error.data;
        throw error;
    }

    return response.result;
}

export default class HttpProvider extends BaseProvider {
    constructor(chainId, url) {
        if (chainId === null || chainId === undefined) {
            chainId = ChainIds.Mainnet;
        }

        super(chainId);

        if (url === null || url === undefined) {
            url = getRPCUrlForChainId(chainId);
        }

        this.url = url;
        this._nextId = 0;
        this.isBroadcastAsync = false;

        this._reqLogger = null;
    }

    setRequestLogger(reqLogger){
        this._reqLogger = reqLogger;
    }

    setBroadcastAsync(isAsync) {
        this.isBroadcastAsync = isAsync;
    }

    prepareRequest(method, params) {
        // Do any extra processing needed to params, etc
        switch (method) {
            case "dnero.GetAccount":
                return [method, params];

            case "dnero.BroadcastRawTransaction":
                return [(this.isBroadcastAsync ? 'dnero.BroadcastRawTransactionAsync' : 'dnero.BroadcastRawTransaction'), params];

            case "dnero.GetBlock":
                return [method, params];

            case "dnero.GetBlockByHeight":
                return [method, params];

            case "dnero.GetTransaction":
                return [method, params];

            case "dnero.CallSmartContract":
                return [method, params];

            case "dnero.GetStatus":
                return [method, params];

            default:
                break;
        }

        return null;
    }

    async send(method, params) {
        const requestBody = {
            jsonrpc: "2.0",
            id: (this._nextId++),
            method: method,
            params: params,
        };

        const reqOpts = _.merge({
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            }
        }, HttpProvider.extraRequestOpts);

        const reqStartTime = new Date().getTime();
        const response = await fetch(this.url, reqOpts);

        const responseText = await response.text();

        if(this._reqLogger || HttpProvider.requestLogger){
            const reqLogger = this._reqLogger || HttpProvider.requestLogger;
            const requestTime = new Date().getTime() - reqStartTime;
            let uri = new URL(response.url);
            uri.path = uri.pathname;
            const req = Object.assign({}, reqOpts, {
                url: response.url,
                uri: uri
            });
            reqLogger({
                request: req,
                response: {
                    status: response.status,
                    statusCode: response.status,
                    url: response.url,
                    uri: uri,
                    body: responseText,
                    request: req,
                    timingPhases: {
                        total: requestTime
                    }
                }
            });
        }

        return getResult(JSON.parse(responseText));
    }

    perform(method, params) {
        const args = this.prepareRequest(method, params);

        return this.send(args[0], args[1])
    }
}

HttpProvider.extraRequestOpts = null;
HttpProvider.requestLogger = null;
