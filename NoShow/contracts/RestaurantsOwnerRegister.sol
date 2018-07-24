pragma solidity ^0.4.22;

contract RestaurantsOwnerRegister {
    address public contractOwner;
    address[] public restaurantOwners;
    uint public registerFee = 1;
    struct RestaurantOwner {
        bool is_payed;
        string restaurantName;
    }
    // The address of the Restaurant Owner and => Restaurant the Owner info
    mapping(address => RestaurantOwner) public restaurantOwnerInfo;

    constructor() public {
        contractOwner = msg.sender;
    }
}
