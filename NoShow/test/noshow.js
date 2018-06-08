/**
 * Created by KEUNU on 2018. 5. 17..
 */
const NoShow = artifacts.require("./NoShow.sol");

const fee = 10 ** 15;

contract("NoShow", accounts => {
    const [firstAccount] = accounts;

    it("sets an owner", async () => {
        const noshow = await NoShow.new(firstAccount, fee);
        assert.equal(await noshow.owner.call(), firstAccount);
    });
});
