class LiquidityManager {

  constructor() {
    this.pools = {}
  }

  addLiquidity(marketId, side, amount) {

    if (!this.pools[marketId]) {
      this.pools[marketId] = { yes: 0, no: 0 }
    }

    this.pools[marketId][side] += amount

    return this.pools[marketId]
  }

  getPool(marketId) {
    return this.pools[marketId] || { yes:0, no:0 }
  }

}

module.exports = LiquidityManager
