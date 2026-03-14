class SettlementEngine {

  resolveMarket(market, outcome) {

    market.resolved = true
    market.outcome = outcome
    market.resolvedAt = Date.now()

    return market
  }

}

module.exports = SettlementEngine
