// migrations/2_deploy_contracts.js
const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
    const name = "MyToken";
    const symbol = "MTK";
    const initialSupply = web3.utils.toWei('1000', 'ether'); // Example supply in wei

    deployer.deploy(MyToken, name, symbol, initialSupply);
};
