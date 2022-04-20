import { HardhatUserConfig } from 'hardhat/types/config';
import "@nomiclabs/hardhat-ethers"
import '@nomiclabs/hardhat-waffle';
import "@nomiclabs/hardhat-web3"
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

let config: HardhatUserConfig = {
    defaultNetwork: 'hardhat',
    solidity: '0.8.9',
    networks: {
        hardhat: {
            chainId: 1337,
            forking: {
                url: process.env.ALCHEMY!,
            },
            loggingEnabled: true,
            blockGasLimit: 0x1fffffffffffff,
            accounts: getHardhatAccounts(),
            gas: 120e9,
        }
    },
    mocha: {
        timeout: 300000,
    },
};
export default config;

function getHardhatAccounts() {
    return [
        '0x27f64677f87074404da76c1dd2530c3491322d13a19b8195f1a6b2af3b0e633f',
        '0xaa5128d076bb1c37995dd1a29f41eb0827a81197c050fc9ef48b68b48858e421',
        '0xaffa804effc545c554fe69095fe54d2e9a35ecee306927f7f5705a2813371764',
        '0x04bc5bba9fb367671ace1d3bcd22b76aa46391c4e266696d097f92300b1255b0',
        '0xf777056a824fccb33ee3defb18fc72e6aaf07b3a4adc375846c31f44a28c8b5c',
        '0xd0fa751517a4b51a8ce1d6d6af728545036267a40f7113caa26e3c125b999133',
        '0x7704913c3470efcb31542243fc93cf373feacd51949c17619d1845ae38d8f2c9',
        '0x4f6444467e19b8820302e1c4f15327eada2c5a0de0a558d410b5892a792ef3f4',
        '0x87f9eb25c79595091ccd68afc8e626096f70879d0577e713d30599d989b1068a',
        '0xe9573bcde02426534e407f8bfbe1a432654751c5ed98beb6a7b0e51452b842b7',
        '0x3690113487a6396c826ada3db6149276f803ef292be09279fcf500683ef519f5',
        '0x1a072772881920b76c56e075bccac4d2932587286413252e01fecb88e6646ad4',
        '0x65cb28e7e8024d85d4f7669edb096b88526ab5bc05760e9e1ad2e393e865329c',
        '0x8c12c5a434ac536d7ed0ea83dbdb28ceb6688355f8ada9634c51c4d9cb402ead',
        '0xdd4a638fbdc4560634cf03431f563361f273c2b8cd3dd8e28ba39eaacca9aece',
        '0x59f2c59ac9500dd3d49e999c11a08fbc5e8d23300e36ebb50e030c4eeeaf6ef1',
        '0x967f1eec32ee0d9ad573f199d7256fdf819eba9ad2b7af3ed7f89ffc7d411341',
        '0xe7a2199ccfb047e8f4681c325b5a2d26c76fc9330b9b4dcd6c0530d534cca8d5',
        '0x0294dc87a9cb81d5f8ece7e7672eb3760c58b819547b216fc834ecb720e0af75',
        '0xfa8861e1aa0e4ae1273919290976a18ab27a24916e54964c823a56df25cf2f4f'
    ]
        .map(x => {
            const A_LOT_OF_ETH = "100000000000000000000000000000000000000000"
            return {
                privateKey: x,
                balance: A_LOT_OF_ETH,
            }
        })
}