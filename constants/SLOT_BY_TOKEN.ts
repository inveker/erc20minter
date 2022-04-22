interface ISLOT_BY_TOKEN {
    [key: string]: (key: string)=>[string, number] | [number, string];
}

const SLOT_BY_TOKEN: ISLOT_BY_TOKEN = {
    '0x6b175474e89094c44da98b954eedeac495271d0f': (key: string) => [key, 2], // DAI
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': (key: string) => [key, 9], // USDC
    '0xdAC17F958D2ee523a2206206994597C13D831ec7': (key: string) => [key, 2], // USDT
    '0x853d955aCEf822Db058eb8505911ED77F175b99e': (key: string) => [key, 0], // FRAX
    '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490': (key: string) => [3, key], // 3CRV
    '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B': (key: string) => [15, key], // FRAX3CRV
    '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA': (key: string) => [15, key], // LUSD3CRV
    '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c': (key: string) => [15, key], // ALUSD3CRV
    '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0': (key: string) => [key, 2], // LUSD
    '0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9': (key: string) => [key, 1], // ALUSD
    '0x8e595470Ed749b85C6F7669de83EAe304C2ec68F': (key: string) => [key, 14], // CYDAI
    '0x76Eb2FE28b36B3ee97F3Adae0C69606eeDB2A37c': (key: string) => [key, 14], // CYUSDC
    '0x48759F220ED983dB51fA7A8C0D2AAb8f3ce4166a': (key: string) => [key, 14], // CYUSDC
    //$generate-flag
};

export default SLOT_BY_TOKEN;