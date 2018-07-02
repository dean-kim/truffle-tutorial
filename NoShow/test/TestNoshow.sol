pragma solidity ^0.4.4;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/NoShow.sol";

contract TestNoshow {
    uint public initialBalance = 10 ether;
    address client;
    uint reservationFee;

    // 계약의 배포자 확인.
    function testSettingAnOwnerDuringCreation() public {
        NoShow noshow = new NoShow();
        Assert.equal(noshow.owner(), this, "An owner is different than a deployer");
    }
    // 계약 배포자 확인.
    function testSettingAnOwnerOfDeployedContract() public {
        NoShow noshow = NoShow(DeployedAddresses.NoShow());
        Assert.equal(noshow.owner(), msg.sender, "An owner is different than a deployer");
    }
    // 예약 기능, 예약을 호출한 사람은 이용자만 가능함.
    function testCanMakeAReservationByClient() public {
        NoShow noshow = NoShow(DeployedAddresses.NoShow());
        noshow.reservation.value(100)();
        Assert.equal(noshow.client(), this, "reservation only client can call");
    }
    // 예약을 지키지 않았을 때 주인이 호출하는 기능.
    function testCanWithdrawByOwner() public {
//        NoShow noshow = NoShow(DeployedAddresses.NoShow());
//        noshow.reservation.value(100)();
        NoShow noshow = new NoShow();
        noshow.reservation.value(100)();
        noshow.withdraw();
        Assert.equal(noshow.owner(), this, "withdraw only owner can call");
    }

}
