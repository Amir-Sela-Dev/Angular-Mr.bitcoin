
import axios from "axios"
// import { storageService } from "./storage.service.js"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}



async function getRate() {
    // let rate = storageService.load('rate')
    // if (rate) return rate
    try {
        let rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        console.log('rate:', rate)
        // storageService.save('rate', rate.data)
        return rate.data
    }
    catch (err) {
        // throw new Error('Err', err)
    }
}

async function getMarketPriceHistory() {
    // let pricesHistory = storageService.load('prices-history')
    try {
        let pricesHistory = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true`)
        // storageService.save('prices-history', pricesHistory.data)
        return pricesHistory.data
    }
    catch (err) {
        // throw new Error('Err', err)
    }
}
// {
//     x: timestamp
//     y: value in USdollar
// }

async function getAvgBlockSize() {
    try {
        const blockSizeAvgs = await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=1months&format=json&cors=true`)
        // console.log(blockSizeAvgs)
        return blockSizeAvgs.data
    }
    catch (err) {
        // throw new Error('Err', err)
    }
}
// {
//     x: timestamp
//     y: avarege block size in MB
// }
