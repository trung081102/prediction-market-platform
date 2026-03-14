class RiskManager {

  validateTrade(balance, amount) {

    if (amount > balance) {
      return {
        allowed: false,
        reason: "insufficient_balance"
      }
    }

    return {
      allowed: true
    }

  }

}

module.exports = RiskManager
