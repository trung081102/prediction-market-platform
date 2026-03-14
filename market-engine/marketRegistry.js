class MarketAnalytics {

  calculateVolume(trades) {

    let volume = 0

    trades.forEach(t => {
      volume += t.amount
    })

    return volume
  }

  calculateProbability(yesPool, noPool) {

    const total = yesPool + noPool

    if (total === 0) {
      return { yes:0.5, no:0.5 }
    }

    return {
      yes: yesPool / total,
      no: noPool / total
    }

  }

}

module.exports = MarketAnalytics
