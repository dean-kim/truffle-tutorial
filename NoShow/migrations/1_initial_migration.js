// const NoShow = artifacts.require('./NoShow.sol')
//
// module.exports = (deployer) => {
//     deployer.deploy(NoShow)
// };

const Migrations = artifacts.require("./Migrations.sol");
module.exports = (deployer) => {
    deployer.deploy(Migrations);
};