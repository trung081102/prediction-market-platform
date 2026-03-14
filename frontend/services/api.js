export async function fetchMarkets() {

  const res = await fetch("http://localhost:5000/markets")

  const data = await res.json()

  return data
}
