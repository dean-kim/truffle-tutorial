/**
 * Created by KEUNU on 2018. 6. 8..
 */
const NoShow = artifacts.require('./contracts.sol')

module.exports = (deployer) => {
    deployer.deploy(NoShow)
};

