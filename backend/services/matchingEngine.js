function matchOrders(buyOrders, sellOrders) {

  const trades = []

  buyOrders.forEach(buy => {

    sellOrders.forEach(sell => {

      if (buy.marketId === sell.marketId && buy.amount === sell.amount) {

        trades.push({
          marketId: buy.marketId,
          amount: buy.amount,
          price: buy.price,
          timestamp: Date.now()
        })

      }

    })

  })

  return trades
}

module.exports = matchOrders
