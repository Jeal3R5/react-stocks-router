import stocks from "../data";

export default function Stock() {
  return (
    <>
      <h1>{stocks[0].name}</h1>
      <div>Symbol: {stocks[0].symbol}</div>
      <br />
      <div>Last Price: {stocks[0].lastPrice}</div>
      <br />
      <div>Change: {stocks[0].change}</div>
      <br />
      <div>High: {stocks[0].high}</div>
      <br />
      <div>Low: {stocks[0].low}</div>
      <br />
      <div>Open: {stocks[0].open}</div>
    </>
  );
}
