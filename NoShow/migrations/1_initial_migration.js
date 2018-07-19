// const contracts = artifacts.require('./contracts.sol')
//
// module.exports = (deployer) => {
//     deployer.deploy(contracts)
// };

const Migrations = artifacts.require("Migrations.sol");
module.exports = (deployer) => {
    deployer.deploy(Migrations);
};