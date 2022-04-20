import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';

const SLOT_BY_TOKEN = {
    '0x6b175474e89094c44da98b954eedeac495271d0f': (key: string) => [key, 2], // DAI
    '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B': (key: string) => [15, key], // FRAX3CRV
};

export default class ERC20Minter {
    public static async mint(recipientAddress: string, tokenAddress: string, amount: BigNumber) {
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