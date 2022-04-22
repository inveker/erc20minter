import {execSync, spawn, spawnSync} from 'child_process';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

const tokenAddress = process.argv[2];
const holderAddress = process.argv[3];



const child = spawnSync(`npx slot20 balanceOf --rpc "${process.env.ALCHEMY}" ${tokenAddress} ${holderAddress} -v`, {shell: true});
const slotIndex: string = child.stdout.toString().trim();
const rawLog = child.stderr.toString();
const outData = rawLog.substring(rawLog.length-20);




console.log(`${outData.includes('format (key, slot)')}`);
console.log(`${outData.includes('format (slot, key)')}`);
console.log(`${slotIndex}`);

// child.stdout.on('data', function (data) {
//     slotIndex = 1;
//    });
//    child.stderr.on('data', function (data) {
//     outData.push(data);
//    });