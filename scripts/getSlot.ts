import {execSync} from 'child_process';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

const tokenAddress = process.argv[2];
const holderAddress = process.argv[3];

const rawResult = execSync(`npx slot20 balanceOf --rpc "${process.env.ALCHEMY}" ${tokenAddress} ${holderAddress} -v`);

console.log(`Slot = ${rawResult}`);