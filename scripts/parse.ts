import axios from 'axios';



async function parseTokens() {
    let page = 1;
    const lastPage = 19;
    const tokenAddresses = [];
    for (let i = page; i <= lastPage; i++) {
        const res = await axios.get('https://etherscan.io/tokens?p=' + i)
        const reg = new RegExp(`<a.*?href=['"]\/token\/(.*?)['"]`, 'g')

        let match = reg.exec(res.data);
        while (match != null) {
            tokenAddresses.push(match[1]);
            match = reg.exec(res.data);
        }
    }
    console.log(tokenAddresses.length);
}

// parseTokens();


async function parseTokenHolder(tokenAddress: string) {
    console.log(`https://bloxy.info/token_holders_results/${tokenAddress.toLowerCase()}`)
    const res = await axios.get(`https://bloxy.info/token_holders_results/${tokenAddress.toLowerCase()}`)
        const reg = new RegExp(`<a.*?href=['"]\/address\/(.*?)['"]`, 'g')
        let match = reg.exec(res.data);
            console.log(match[1]);
}
parseTokenHolder('0xdAC17F958D2ee523a2206206994597C13D831ec7')