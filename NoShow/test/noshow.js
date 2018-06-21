/**
 * Created by KEUNU on 2018. 5. 17..
 */
const NoShow = artifacts.require("./NoShow.sol");
const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');


contract("NoShow", async (accounts) => {
    let noshow;
    const ownerAccount = accounts[0];
    const clientAccount = accounts[1];
    const anotherClientAccount = accounts[2];
    // console.log(clientAccount);

    beforeEach(async () => {
        noshow = await NoShow.new({from: ownerAccount});
    });

    it("sets an contract owner", async () => {
        assert.equal(await noshow.owner.call(), ownerAccount);
    });

    it("client made reservation", async () => {
        let reservationFee = 10;
        let tx = await noshow.reservation({from: clientAccount, value: reservationFee});
        truffleAssert.eventEmitted(tx, 'MadeReservation', async (ev) => {
            return ev.reserver === clientAccount && ev.amount === reservationFee;
        });
        // truffleAssert.eventEmitted(tx, 'MadeReservation');

        assert.equal(web3.eth.getBalance(noshow.address).toNumber(), reservationFee);
    });

});





// contract("NoShow", accounts => {
//     const [firstAccount] = accounts;
//
//     it("sets an contract owner", async () => {
//         const noshow = await NoShow.new();
//         assert.equal(await noshow.owner.call(), firstAccount);
//     });
// });
//
// const FINNEY = 10**15;
//
// contract("NoShow", accounts => {
//     const [firstAccount, secondAccount] = accounts;
//
//     it("accepts donations", async () => {
//         const noshow = await NoShow.new();
//         await noshow.reservation({ from: secondAccount, value: 10 * FINNEY });
//         assert.equal(await noshow.raised.call(), 30 * FINNEY);
//     });
// });
