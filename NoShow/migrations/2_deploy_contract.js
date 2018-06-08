/**
 * Created by KEUNU on 2018. 6. 8..
 */
const NoShow = artifacts.require('./NoShow.sol')

module.exports = (deployer) => {
    deployer.deploy(NoShow)
};

