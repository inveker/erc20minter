import { assert, expect } from "chai";
import { ethers } from "hardhat";
import ERC20Minter from "../scripts/ERC20Minter";


describe('ERC20Minter', () => {
    it('test', async () => {
        const tokenAddress = '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B';
        const [user] = await ethers.getSigners();
        const token = await ethers.getContractAt('IERC20', tokenAddress);
        const initialBalance = await token.balanceOf(await user.getAddress());
        await ERC20Minter.mint(await user.getAddress(), tokenAddress, ethers.utils.parseEther('100'));
        const resultBalance = await token.balanceOf(await user.getAddress());
        assert(resultBalance.gt(initialBalance), 'Not minted');
    })
});