import _ from 'lodash';

const ChainIds =  {
    Mainnet: 'mainnet',
    Testnet: 'testnet',
    TestnetSapphire: 'testnet_sapphire',
    Privatenet: 'privatenet',
    EliteEdgeTestnet: 'testnet_amber'
};

const Mainnet = {
    chainId: ChainIds.Mainnet,
    chainIdNum: 5647,
    name: "Mainnet",
    //rpcUrl: "https://dnero-bridge-rpc.dnerochain.xyz/rpc",
	rpcUrl: "https://eth-rpc-api.dnerochain.xyz/rpc",
    ethRpcUrl: "https://eth-rpc-api.dnerochain.xyz/rpc",
    explorerUrl: "https://explorer.dnerochain.xyz",
    explorerApiUrl: "https://explorer-api.dnerochain.xyz",
    color: "#1BDED0",
    blockchain: {
        mainchainID : 5647,
        mainchainIDStr : ChainIds.Mainnet,

        __LEGACY__mainchainDTokenTokenBankAddr : "0x3c5f7cE61561AA7A8e8919733aC250C84835427f",
        __LEGACY__mainchainDNC20TokenBankAddr : "0x0F1C0a95F5409546Be4E6C56351c8eA5AC8Cdd04",
        __LEGACY__mainchainDNC721TokenBankAddr : "0x551c097e520584689FC8daf4D7b3905fa6bfA54c",
        __LEGACY__mainchainDNC1155TokenBankAddr : "0x356E1ed03Ed7f12d85b666515A7e36952090e609",

        mainchainDTokenTokenBankAddr : "0x1169B30901E4591Ee8A0781af0C9003f608D6b8b",
        mainchainDNC20TokenBankAddr : "0x9f904dE01990e3Ba1AD93629604099D13706ec36",
        mainchainDNC721TokenBankAddr : "0xc85acE39701E02Dd27Df799988b39384AAe64774",
        mainchainDNC1155TokenBankAddr : "0x5907D8e36785fa08E23A7955285EfFf3503909bd",

        crossChainTransferFeeInDToken : 10,

        subchains: [
            {
                name: 'Playground',
                subchainID : 360888,
                subchainIDStr : "tsub360888",
                subchainRPC : "https://tsub360888-rpc.dnerochain.xyz/rpc",
                subchainDTokenTokenBankAddr : "0x5a443704dd4B594B382c22a083e2BD3090A6feF3",
                subchainDNC20TokenBankAddr : "0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D",
                subchainDNC721TokenBankAddr : "0x8Be503bcdEd90ED42Eff31f56199399B2b0154CA",
                subchainDNC1155TokenBankAddr : "0x47c5e40890bcE4a473A49D7501808b9633F29782",

                crossChainTransferFeeInDToken : 10,

                explorerUrl: 'https://tsub360888-explorer.dnerochain.xyz'
            },
            {
                name: 'Lavita',
                subchainID : 360890,
                subchainIDStr : "tsub360890",
                subchainRPC : "https://tsub360890-rpc.dnerochain.xyz/rpc",
                subchainDTokenTokenBankAddr : "0x5a443704dd4B594B382c22a083e2BD3090A6feF3",
                subchainDNC20TokenBankAddr : "0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D",
                subchainDNC721TokenBankAddr : "0x8Be503bcdEd90ED42Eff31f56199399B2b0154CA",
                subchainDNC1155TokenBankAddr : "0x47c5e40890bcE4a473A49D7501808b9633F29782",

                crossChainTransferFeeInDToken : 10,

                explorerUrl: 'https://tsub360890-explorer.dnerochain.xyz'
            },
            {
                name: 'Space Junk',
                subchainID : 360889,
                subchainIDStr : "tsub360889",
                subchainRPC : "https://tsub360889-rpc.dnerochain.xyz/rpc",
                subchainDTokenTokenBankAddr : "0x5a443704dd4B594B382c22a083e2BD3090A6feF3",
                subchainDNC20TokenBankAddr : "0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D",
                subchainDNC721TokenBankAddr : "0x8Be503bcdEd90ED42Eff31f56199399B2b0154CA",
                subchainDNC1155TokenBankAddr : "0x47c5e40890bcE4a473A49D7501808b9633F29782",

                crossChainTransferFeeInDToken : 10,

                explorerUrl: 'https://tsub360889-explorer.dnerochain.xyz'
            }
        ]
    }
};

const Testnet = {
    chainId: ChainIds.Testnet,
    chainIdNum: 5651,
    name: "Testnet",
    rpcUrl: "https://dnero-bridge-rpc-testnet.dnerochain.xyz/rpc",
    ethRpcUrl: "https://eth-rpc-api-testnet.dnerochain.xyz/rpc",
    explorerUrl: "https://explorer-testnet.dnerochain.xyz",
    explorerApiUrl: "https://explorer-testnet-api.dnerochain.xyz",
    color: "#FF4A8D",
    blockchain: {
        mainchainID : 5651,
        mainchainIDStr : ChainIds.Testnet,

        mainchainDTokenTokenBankAddr : "0xA906CB988bC8D37091B5962685E0bb5160039AC6",
        mainchainDNC20TokenBankAddr : "0x73b72cCBf9CefF04032cd7CA52AC64aE310985af",
        mainchainDNC721TokenBankAddr : "0x0A7111590CF9C547a1AA25A9a6c85a15aC86b7C8",
        mainchainDNC1155TokenBankAddr : "0xd3cF92dd341Ded226aa8a02C47296bAA23CFaaff",

        crossChainTransferFeeInDToken : 10,

        subchains: [
            {
                name: 'Replay Demo',
                subchainID : 360777,
                subchainIDStr : "tsub360777",
                subchainRPC : "https://testnet-tsub360777-rpc.dnerochain.xyz/rpc",
                subchainDTokenTokenBankAddr : "0x5a443704dd4B594B382c22a083e2BD3090A6feF3",
                subchainDNC20TokenBankAddr : "0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D",
                subchainDNC721TokenBankAddr : "0x8Be503bcdEd90ED42Eff31f56199399B2b0154CA",
                subchainDNC1155TokenBankAddr : "0x47c5e40890bcE4a473A49D7501808b9633F29782",

                crossChainTransferFeeInDToken : 10,

                explorerUrl: 'https://testnet-tsub360777-explorer.dnerochain.xyz'
            }
        ]
    }
};

const Privatenet = {
    chainId: ChainIds.Privatenet,
    chainIdNum: 5652,
    name: "Smart Contracts Sandbox",
    rpcUrl: "https://dnero-node-rpc-smart-contract-sandbox.dnerochain.xyz/rpc",
    explorerUrl: "https://smart-contracts-sandbox-explorer.dnerochain.xyz",
    explorerApiUrl: "https://smart-contracts-sandbox-explorer.dnerochain.xyz:7554",
    color: "#7157FF",
};

const networks = {
    [ChainIds.Mainnet]: Mainnet,
    [ChainIds.Testnet]: Testnet,
    [ChainIds.Privatenet]: Privatenet,
}

const getNetworkForChainId = (chainId) => {
    //TODO throw if unknown
    return networks[chainId];
}

const getRPCUrlForChainId = (chainId) => {
    return _.get(getNetworkForChainId(chainId), 'rpcUrl');
}

const getExplorerUrlForChainId = (chainId) => {
    return _.get(getNetworkForChainId(chainId), 'explorerUrl');
}

const getExplorerApiUrlForChainId = (chainId) => {
    return _.get(getNetworkForChainId(chainId), 'explorerApiUrl');
}

const getBlockchainInfoForChainId = (chainId) => {
    return _.get(getNetworkForChainId(chainId), 'blockchain');
}

export {
    Mainnet,
    Testnet,
    Privatenet,

    ChainIds,

    getRPCUrlForChainId,
    getExplorerUrlForChainId,
    getExplorerApiUrlForChainId,
    getNetworkForChainId,
    getBlockchainInfoForChainId
};

