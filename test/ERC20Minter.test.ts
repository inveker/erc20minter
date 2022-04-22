import { assert } from "chai";
import { ethers } from "hardhat";
import SLOT_BY_TOKEN from "../constants/SLOT_BY_TOKEN";
import ERC20Minter from "../scripts/ERC20Minter";

describe('ERC20Minter', () => {
    for(const tokenAddress of Object.keys(SLOT_BY_TOKEN)) {
        it(`Mint token ${tokenAddress}`, async () => {
            const [user] = await ethers.getSigners();
            const token = await ethers.getContractAt('IERC20', tokenAddress);
            const initialBalance = await token.balanceOf(await user.getAddress());
            await ERC20Minter.mint(await user.getAddress(), tokenAddress, ethers.utils.parseEther('100'));
            const resultBalance = await token.balanceOf(await user.getAddress());
            assert(resultBalance.gt(initialBalance), 'Not minted');
        });
    }
});