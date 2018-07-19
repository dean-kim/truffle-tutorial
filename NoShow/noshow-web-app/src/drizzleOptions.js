import NoShow from "./contracts/NoShow.json";


const drizzleOptions = {
    web3: {
        block: false,
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:7545"
        }
    },
    contracts: [
        NoShow
    ],
    events: {
        NoShow: ["MadeReservation", "BreakReservation", "KeepPromise"]
    }
};

export default drizzleOptions