const countJSON = require('../../blockchain/artifacts/contracts/Count_Attendance.sol/Count_Attendance.json');
const walletInstance = require('./walletProvider');

const getWeb3Obj = async () => {
    return await walletInstance.getWalletprovider();
}

const getInstance = async () => {
    const web3 = await getWeb3Obj();
    const Count = await new web3.eth.Contract(countJSON.abi, process.env.countAddress);
    return(Count);
}

const getTxObject = async (fromAddress, value, gas='6721975') => {
    const web3 = await getWeb3Obj();
    return {
        from: fromAdress,
        value: web3.utils.toWei(web3.utils.BN(value)),
        gas: '6721975'
    }
}

module.exports = {getInstance, getWeb3Obj, getTxObject}