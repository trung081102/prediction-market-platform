const Market = require("../models/Market")

let markets = [
  new Market(1, "Will Bitcoin exceed $100k in 2026?", 0.55, 0.45),
  new Market(2, "Will Ethereum ETF be approved?", 0.60, 0.40)
]

exports.getMarkets = (req,res)=>{
  res.json(markets)
}

exports.createMarket = (req,res)=>{
  const { question } = req.body

  const newMarket = new Market(
    markets.length + 1,
    question,
    0.5,
    0.5
  )

  markets.push(newMarket)

  res.json(newMarket)
}
