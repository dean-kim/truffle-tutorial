pragma solidity ^0.4.4;


contract NoShow {
    address public owner;
    function NoShow() public {
    // constructor
        owner = msg.sender;
    }
}
