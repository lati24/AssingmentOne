const webhooklink = process.env.webhooklink;

var web3js;
const getWalletprovider = async function() {
    console.log('getWalletprovider method invoked')
    web3js = new web3js(Web3.givernProvider || webhooklink);
    return web3js;
}

module.exports = {
    getWalletprovider
};