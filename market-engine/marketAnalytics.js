class MarketRegistry {

  constructor() {
    this.markets = []
  }

  createMarket(question) {

    const market = {
      id: this.markets.length + 1,
      question: question,
      yesPool: 0,
      noPool: 0,
      resolved: false,
      createdAt: Date.now()
    }

    this.markets.push(market)

    return market
  }

  getMarkets() {
    return this.markets
  }

}

module.exports = MarketRegistry
