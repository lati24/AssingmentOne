var Web3 = require('web3');
const fs = require('fs');

const web3 = new Web3( new Web3.providers.HttpProvider("HTTp://127.0.0.1:8545"))
web3.eth.handleRevert = true;

(async function () {
    try {

        let txObject = {from: '0x7e42923928a8F30C7d70A490A6e7eBAf0900A24E', gas: 4800000, gaslimit: 310000000000};
        let countJSON = JSON.parse(fs.readFileSync('./artifacts/contracts/Count_Attendance.sol/Count_Attendance.json','utf8'));
        let countABI = countJSON.abi;
        let countBytecode = countJSON.bytecode;
        let Count = new web3.eth.Contract(countABI);

        let countInstance = await Count.deploy({data: countBytecode, arguments: []}).send(txObject);
        console.log('count address', countInstance.options.address);
        console.log('done')
    } catch (e) {
        console.log(e);
    }
})();