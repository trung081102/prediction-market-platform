class PriceOracle {

  constructor() {
    this.prices = {}
  }

  updatePrice(marketId, yesPrice, noPrice) {

    this.prices[marketId] = {
      yes: yesPrice,
      no: noPrice,
      updatedAt: Date.now()
    }

  }

  getPrice(marketId) {
    return this.prices[marketId] || { yes:0.5, no:0.5 }
  }

}

module.exports = PriceOracle
