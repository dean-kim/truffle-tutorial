/**
 * Created by KEUNU on 2018. 6. 8..
 */
const NoShow = artifacts.require("NoShow");
const RestaurantsOwnerRegister = artifacts.require("RestaurantsOwnerRegister");

module.exports = (deployer) => {
    deployer.deploy(NoShow);
    deployer.deploy(RestaurantsOwnerRegister);
};

