export default function MarketCard({market}) {

  return (
    <div>
      <h3>{market.question}</h3>
      <p>YES: {market.yesPrice}</p>
      <p>NO: {market.noPrice}</p>
    </div>
  )

}
