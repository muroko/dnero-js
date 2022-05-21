require('isomorphic-fetch');
const BigNumber = require('bignumber.js');
const dnerojs = require('..');
const Wallet = dnerojs.Wallet;
const {SendTransaction, DepositStakeV2Transaction, WithdrawStakeTransaction} = dnerojs.transactions;
const {HttpProvider} = dnerojs.providers;
const {ChainIds} = dnerojs.networks;
const {StakePurpose} = dnerojs.constants;

function createHttpProvider(chainId){
    const provider = new HttpProvider(chainId);
    return provider;
}

function createSendTransaction(){
    const ten18 = (new BigNumber(10)).pow(18); // 10^18, 1 Dnero = 10^18 DneroWei, 1 Gamma = 10^ DTokenWei
    const dneroWeiToSend = (new BigNumber(0));
    const dtokenWeiToSend = (new BigNumber(0.0001)).multipliedBy(ten18);
    const senderAddr =  "0x59c32D1F9fF59FE524aaA34B703C0aC8Fad4d4d0";
    const receiverAddr = "0xB91f6163E6f1A60b6d932dcD1C190BD364e0df05";
    const txData = {
        from: senderAddr,
        outputs: [
            {
                address: receiverAddr,
                dneroWei: dneroWeiToSend,
                dtokenWei: dtokenWeiToSend,
            }
        ]
    }

    let tx = new SendTransaction(txData);

    return tx;
}

function createDepositDneroStakeTransaction(){
    const ten18 = (new BigNumber(10)).pow(18); // 10^18, 1 Dnero = 10^18 DneroWei, 1 Gamma = 10^ DTokenWei
    const dneroWeiToStake = (new BigNumber(10000)).multipliedBy(ten18);
    const source =  "0x59c32D1F9fF59FE524aaA34B703C0aC8Fad4d4d0";
    const holderSummary = "0x51bB30dDC5C2b42ca042Bf58b283fcA4B0a59307a746f3fe492607c743c52a1fb729cb432e6b3971fb51fb08ea66c5c3042bab805d98a06c4c503a8621c937c292d8d2ac8c0b6eef8ec400936bbce9895656f30220218d00e70fa05981a2335779415bdcbf36d46702cd0ee794ff251ab0ad8713058507380a935bece580ff0d8521d15ed888e934fbaabe346f320bc9817f455107bc5c47fbf8147b5fea266624cb0c24da5563b790fbe94fa377d6a8eec532e45f6f25e9f5aebe299476f5268bb7c1336dfb46861b1b0dd4e33267db5a27c70100086038c6be37c58db09f02361a04bd01";

    const txData = {
        source: source,
        holderSummary: holderSummary,
        amount: dneroWeiToStake,
        purpose: StakePurpose.StakeForSentry
    }

    let tx = new DepositStakeV2Transaction(txData);

    return tx;
}

function createDepositDTokenStakeTransaction(){
    const ten18 = (new BigNumber(10)).pow(18); // 10^18, 1 Dnero = 10^18 DneroWei, 1 Gamma = 10^ DTokenWei
    const dtokenWeiToStake = (new BigNumber(10000)).multipliedBy(ten18);
    const source =  "0x95944D0F9C86794284ABc375616C83B0E6A1A8B7";
    const holderSummary = "0xE8a650b6e34650F4bE29EB5dC97a60263085Cea1967fe5db763d7017c552e0417cc85f590cbf13a9b773b280cc380be8573ca85bcc2927a40a4d9309fb3deb033e1b46de907db461ec28deb55eb5c5ac3956060dda7cedf672aae33507752a8817fe3e88071622f7ff337f605c9d362c1c0b28fd10b8613d3d3bb10c3ffb1d87506df7b85a29e19f5f686db620b283ed3372d46108cb6d20ce3a6d6717480839f6ff76d847f20487d6da9a1af994be02b4e2ddcac86311941faaec73bd4a6206fd154f6f751e7c114c12b74d17c7c202140d9db54a2171c27968295080de97d1a6d5000501b5a662240c576a7fb0c7dd2c3692b8f039e41484c8c49cda74d957bed39bc374";

    const txData = {
        source: source,
        holderSummary: holderSummary,
        amount: dtokenWeiToStake,
        purpose: StakePurpose.StakeForEliteEdge
    }

    let tx = new DepositStakeV2Transaction(txData);

    return tx;
}

function createDepositDTokenStakeTransaction2(){
    const ten18 = (new BigNumber(10)).pow(18); // 10^18, 1 Dnero = 10^18 DneroWei, 1 Gamma = 10^ DTokenWei
    const dtokenWeiToStake = (new BigNumber(10000)).multipliedBy(ten18);
    const source =  "0x95944D0F9C86794284ABc375616C83B0E6A1A8B7";
    const holderSummary = "0xB2c82D239DD88c2bFF05345583d01846a7E8172C8e5fb6d5662bce16fbdb3a1360d97da398a91d8f86abf6d862820d6505e39f6d099ceb5979fec38bc5cad8d6b959c43498f8f022fbbc8e5f570c124da6e37d00f089cfc3137329847ecbbcbfcafbbb7926eb7f58872a76911461f71825c01be5031f01bf3a041a665ab3ee6442ea67ff64bd99585acf04544c3f34c1669f20928df1f3a57eb52bd2768f1a79d6755cd849f313e27c91e4cb74839beb909705318fc4d9d2d03087bf714402fc62e3802e16504b3e3b7ba3238cc55f2919324804b6c4678e8f2f98b0b54201d4036438a200efc8c265f970bb177208d5d09418fcc7cb1397285b7a571e9dd60e9513397315";

    const txData = {
        source: source,
        holderSummary: holderSummary,
        amount: dtokenWeiToStake,
        purpose: StakePurpose.StakeForEliteEdge
    }

    let tx = new DepositStakeV2Transaction(txData);

    return tx;
}

function createWithdrawStakeTransaction(){
    const source =  "0x59c32D1F9fF59FE524aaA34B703C0aC8Fad4d4d0";
    const holder = "0x8f3bc1b9adf6e543efe1f4021025aa974a8ee819";

    const txData = {
        source: source,
        holder: holder,
        purpose: StakePurpose.StakeForSentry
    }

    let tx = new WithdrawStakeTransaction(txData);

    return tx;
}



//
//
// test('should create a SendTransaction', () => {
//     const sendTx = createSendTransaction();
//
//     expect(sendTx).not.toBe(null);
// });
//
// test('should sign a SendTransaction', () => {
//     const provider = createHttpProvider(ChainIds.Mainnet);
//     const privateKey = "0x19f66b5f75f0cf6fe4fbbcca24aba2031031affef8b596b922b9dfd669f8f5ae";
//     const wallet = new Wallet(privateKey, provider);
//     const transaction = createSendTransaction();
//     const signedRawTxBytes = wallet.signTransaction(transaction);
//
//     expect(signedRawTxBytes).not.toBe(null);
// });
//
// test('should send 0.0001 DTOKEN to 0xB91f6163E6f1A60b6d932dcD1C190BD364e0df05 [via signer]', async () => {
//     const provider = new HttpProvider(ChainIds.Privatenet);
//     provider.setBroadcastAsync(true);
//     const privateKey = "0xc88b2d8a81ceea76b41e005556c1c77c0062a5ba0566a1fe214770f485adde4f";
//     const wallet = new Wallet(privateKey, provider);
//     const transaction = createSendTransaction();
//     const result = await wallet.sendTransaction(transaction);
//
//     expect(result.hash).not.toBe(null);
// });
//
//
//
//
//
// test('should create a DepositStakeTransaction (Dnero)', () => {
//     const sendTx = createDepositDneroStakeTransaction();
//
//     expect(sendTx).not.toBe(null);
// });
//
// test('should sign a DepositStakeTransaction (Dnero)', () => {
//     const provider = createHttpProvider(ChainIds.Mainnet);
//     const privateKey = "0x19f66b5f75f0cf6fe4fbbcca24aba2031031affef8b596b922b9dfd669f8f5ae";
//     const wallet = new Wallet(privateKey, provider);
//     const transaction = createDepositDneroStakeTransaction();
//     const signedRawTxBytes = wallet.signTransaction(transaction);
//
//     expect(signedRawTxBytes).not.toBe(null);
// });
//
//
//
// test('should create a WithdrawStakeTransaction', () => {
//     const sendTx = createWithdrawStakeTransaction();
//
//     expect(sendTx).not.toBe(null);
// });
//
// test('should sign a WithdrawStakeTransaction', () => {
//     const provider = createHttpProvider(ChainIds.Mainnet);
//     const privateKey = "0x19f66b5f75f0cf6fe4fbbcca24aba2031031affef8b596b922b9dfd669f8f5ae";
//     const wallet = new Wallet(privateKey, provider);
//     const transaction = createWithdrawStakeTransaction();
//     const signedRawTxBytes = wallet.signTransaction(transaction);
//
//     expect(signedRawTxBytes).not.toBe(null);
// });


test('should create a DepositStakeTransaction (Dtoken)', () => {
    const sendTx = createDepositDTokenStakeTransaction();

    expect(sendTx).not.toBe(null);
});

test('should sign a DepositStakeTransaction (Dtoken)', () => {
    const provider = createHttpProvider(ChainIds.Mainnet);
    const privateKey = "0x19f66b5f75f0cf6fe4fbbcca24aba2031031affef8b596b922b9dfd669f8f5ae";
    const wallet = new Wallet(privateKey, provider);
    const transaction = createDepositDTokenStakeTransaction();
    const signedRawTxBytes = wallet.signTransaction(transaction);

    expect(signedRawTxBytes).not.toBe(null);
});

test('should stake 10000 DTOKEN to 0xE8a650b6e34650F4bE29EB5dC97a60263085Cea1 [via signer]', async () => {
    const provider = new HttpProvider(ChainIds.EliteEdgeTestnet);
    const privateKey = "0x19f66b5f75f0cf6fe4fbbcca24aba2031031affef8b596b922b9dfd669f8f5ae";
    const wallet = new Wallet(privateKey, provider);
    const transaction = createDepositDTokenStakeTransaction();
    const result = await wallet.sendTransaction(transaction);

    expect(result.hash).not.toBe(null);
});

test('should stake 10000 DTOKEN to 0xB2c82D239DD88c2bFF05345583d01846a7E8172C [via signer]', async () => {
    const provider = new HttpProvider(ChainIds.EliteEdgeTestnet);
    const privateKey = "0x19f66b5f75f0cf6fe4fbbcca24aba2031031affef8b596b922b9dfd669f8f5ae";
    const wallet = new Wallet(privateKey, provider);
    const transaction = createDepositDTokenStakeTransaction2();
    const result = await wallet.sendTransaction(transaction);

    expect(result.hash).not.toBe(null);
});
