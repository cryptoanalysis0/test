const chart = LightweightCharts.createChart(document.getElementById('chart'), {
  width: window.innerWidth * 0.9,
  height: 500,
});
const lineSeries = chart.addLineSeries();

async function fetchData() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly');
  const data = await res.json();
  const prices = data.prices.map(p => ({
    time: Math.floor(p[0] / 1000),
    value: p[1],
  }));
  lineSeries.setData(prices);
}
fetchData();
