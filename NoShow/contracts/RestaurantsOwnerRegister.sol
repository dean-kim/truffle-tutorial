pragma solidity ^0.4.22;

contract RestaurantsOwnerRegister {
    // 계약 배포자
    address public contractOwner;
    // 레스토랑 주인 주소
    address public restaurantOwner;
    // 레스토랑 주인들의 주소들
    address[] public restaurantOwners;
    // 레스토랑 등록비
    uint public registerFee = 1;
    // 레스토랑 주인의 정보(등록비 납부, 레스토랑 이름)
    struct RestaurantOwner {
        bool is_payed;
        string restaurantName;
    }
    // 레스토랑 주인의 정보(등록비 납부 유무, 레스토랑 이름)를 레스토랑 주인의 주소에 등록
    mapping(address => RestaurantOwner) public restaurantOwnerInfo;

    // 등록비 납부 기록
    event MadeRegister(address contractOwner, address restaurantOwner, uint registerFee);

    // 레스토랑 등록은 계약의 배포자가 아닌 레스토랑 주인만 가능하도록 제한함.
    modifier onlyRestaurantOwner {
        require(msg.sender != contractOwner);
        _;
    }

    constructor() public {
        contractOwner = msg.sender;
    }

    // 이미 등록된 레스토랑 주인인지 검증
    function checkRestaurantOwnerExists(address _restaurantOwner) public constant onlyRestaurantOwner returns(bool){
        for(uint256 i = 0; i < restaurantOwners.length; i++){
            if(restaurantOwners[i] == _restaurantOwner) return true;
        }
        return false;
    }

    // 레스토랑 등록 기능
    function registerRestaurant(address _restaurantOwner, string _restaurantName) public payable onlyRestaurantOwner {
        require(!checkRestaurantOwnerExists(msg.sender));
        require(msg.value == 1);
        restaurantOwners.push(_restaurantOwner);
        restaurantOwnerInfo[msg.sender].is_payed = true;
        restaurantOwnerInfo[msg.sender].restaurantName = _restaurantName;
        contractOwner.transfer(registerFee);
    }
}
