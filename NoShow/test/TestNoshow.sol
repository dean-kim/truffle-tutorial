pragma solidity ^0.4.4;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/NoShow.sol";

contract TestNoshow {
    function testSettingAnOwnerDuringCreation() public {
        NoShow noshow = new NoShow();
        Assert.equal(noshow.owner(), this, "An owner is different than a deployer");
    }
}
