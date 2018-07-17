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

    beforeEach(async () => {
        noshow = await NoShow.new({from: ownerAccount});
    });

    it("sets an contract owner", async () => {
        assert.equal(await noshow.owner.call(), ownerAccount);
    });

    it("client made reservation", async () => {
        let reservationFee = 10;
        let tx = await noshow.reservation(ownerAccount, reservationFee, {from: clientAccount, value: reservationFee});
        truffleAssert.eventEmitted(tx, 'MadeReservation', (ev) => {
            // Every uint256 returned from Solidity to JavaScript is an object of type BigNumber and can be converted to a number or string.
            // uint and int are aliases for uint256 and int256, respectively.
            return ev.owner === ownerAccount && ev.reserver === clientAccount && ev.amount.toNumber() === reservationFee;
        });

        assert.equal(web3.eth.getBalance(noshow.address).toNumber(), reservationFee);
        let balance = await noshow.pendingReturns.call(clientAccount);
        assert.equal(balance.toNumber(), reservationFee)
    });

    it("owner can't made reservation", async () => {
        let reservationFee = 10;
        try {
            await noshow.reservation(ownerAccount, reservationFee);
            assert.fail();
        } catch (err) {
            assert.ok(/revert/.test(err.message));
        }
    });

    it("if client kept reservation, owner would refund reservation fee", async () => {
        let reservationFee = 10;
        let reservationTx = await noshow.reservation(ownerAccount, reservationFee, {from: clientAccount, value: reservationFee});
        let keepReservationTx = await noshow.clientCome(clientAccount, reservationFee, {from: ownerAccount, value: reservationFee});
        truffleAssert.eventEmitted(keepReservationTx, 'KeepPromise', (ev) => {
            return ev.owner === ownerAccount && ev.reserver === clientAccount && ev.amount.toNumber() === reservationFee;
        });
        let balance = await noshow.pendingReturns.call(clientAccount);
        assert.equal(balance.toNumber(), 0)

    });

    it("client can't made confirm reservation", async () => {
        let reservationFee = 10;
        try {
            await noshow.clientCome(clientAccount, reservationFee, {from: clientAccount, value: reservationFee});
            assert.fail();
        } catch (err) {
            assert.ok(/revert/.test(err.message));
        }
    });

    it("if client don't kept reservation, client would pay a fine", async () => {
        let reservationFee = 10;
        let reservationTx = await noshow.reservation(ownerAccount, reservationFee, {from: clientAccount, value: reservationFee});
        let breakReservationTx = await noshow.withdraw(clientAccount, reservationFee, {from: ownerAccount, value: reservationFee});
        truffleAssert.eventEmitted(breakReservationTx, 'BreakReservation', (ev) => {
            return ev.owner === ownerAccount && ev.reserver === clientAccount && ev.amount.toNumber() === reservationFee * 0.5;
        });
        let balance = await noshow.pendingReturns.call(clientAccount);
        assert.equal(balance.toNumber(), 0)

    });

    it("client can't made confirm noShow", async () => {
        let reservationFee = 10;
        try {
            await noshow.withdraw(clientAccount, reservationFee, {from: clientAccount, value: reservationFee});
            assert.fail();
        } catch (err) {
            assert.ok(/revert/.test(err.message));
        }
    });

});