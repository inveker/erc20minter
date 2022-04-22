import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';
import SLOT_BY_TOKEN from '../constants/SLOT_BY_TOKEN';

export default class ERC20Minter {
    public static async mint(recipientAddress: string, tokenAddress: string, amount: BigNumber) {
        if(SLOT_BY_TOKEN[tokenAddress] === undefined) throw Error('Token not registred');
        const index = ethers.utils.solidityKeccak256(
            ["uint256", "uint256"],
            SLOT_BY_TOKEN[tokenAddress](recipientAddress)
        );
        await this.setStorageAt(tokenAddress, index, this.toBytes32(amount).toString());
    }

    private static  async setStorageAt(address: string, index: string, value: string) {
        await ethers.provider.send("hardhat_setStorageAt", [address, index, value]);
        await ethers.provider.send("evm_mine", []);
    }

    private static toBytes32(bn) {
        return ethers.utils.hexlify(ethers.utils.zeroPad(bn.toHexString(), 32));
    }
}