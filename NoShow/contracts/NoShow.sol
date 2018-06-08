pragma solidity ^0.4.22;

contract NoShow {
    // 예약하는 손님
    address public client;
    // 식당 주인
    address public owner;
    // 예약금
    uint public reservationFee;
    // 노쇼가 아닐 경우 환불
    mapping(address => uint) public pendingReturns;
    // 예약 기록을 남김
    event MadeReservation(address reserver, uint amount);
    // 지켜지지 않은 예약을 기록
    event BreakReservation(address reserver, uint amount);
    // 지켜진 예약을 기록
    event KeepPromise(address reserver, uint amount);
    // 함수 호출자를 손님으로 한정하는 modifier 선언
    modifier onlyClient {
        require(msg.sender != owner);
        _;
    }
    // 함수 호출자를 식당 주인으로 한정하는 modifier 선언
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    // 계약 생성자
    constructor() public {
        owner = msg.sender;
    }
    // 예약 기능
    function reservation() public payable onlyClient {
        //require(msg.sender != owner);
        client = msg.sender;
        reservationFee = msg.value;
        emit MadeReservation(client, reservationFee);
        pendingReturns[client] = reservationFee;
    }
    // 예약이 지켜지지 않았을 경우 실행하는 함수
    function withdraw() public onlyOwner {
        uint amount = pendingReturns[client];
        if (amount > 0) {
            pendingReturns[client] = 0;
        }
        emit BreakReservation(msg.sender, amount/2);
        client.transfer(amount/2);
        owner.transfer(amount/2);
    }
    // 예약이 지켜졌을 경우 실행하는 함수
    function clientCome() public onlyOwner {
        uint amount = pendingReturns[client];
        if (amount > 0) {
            pendingReturns[client] = 0;
        }
        emit KeepPromise(msg.sender, amount);
        client.transfer(amount);
    }
}