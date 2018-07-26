import NoShow from "./contracts/NoShow.json";
import RestaurantsOwnerRegister from "./contracts/RestaurantsOwnerRegister.json"


const drizzleOptions = {
    web3: {
        block: false,
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:7545"
        }
    },
    contracts: [
        NoShow,
        RestaurantsOwnerRegister
    ],
    events: {
        NoShow: ['MadeReservation', 'BreakReservation', 'KeepPromise'],
        RestaurantsOwnerRegister: ['MadeRegister']
    }
};

export default drizzleOptions