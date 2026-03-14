class TradeEngine {

  constructor() {
    this.trades = []
  }

  executeTrade(marketId, side, amount, price) {

    const trade = {
      id: this.trades.length + 1,
      marketId: marketId,
      side: side,
      amount: amount,
      price: price,
      timestamp: Date.now()
    }

    this.trades.push(trade)

    return trade
  }

  getTrades() {
    return this.trades
  }

}

module.exports = TradeEngine
