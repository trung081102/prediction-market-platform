class OrderBook {

  constructor() {
    this.orders = []
  }

  addOrder(userId, marketId, side, amount, price) {

    const order = {
      id: this.orders.length + 1,
      userId,
      marketId,
      side,
      amount,
      price,
      timestamp: Date.now()
    }

    this.orders.push(order)

    return order
  }

  getOrders(marketId) {
    return this.orders.filter(o => o.marketId === marketId)
  }

}

module.exports = OrderBook
