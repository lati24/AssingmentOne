const hre = require('hardhat');

async function main(){ }

// To handle errors properly and to be able to use async/await everywhere
main.catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
