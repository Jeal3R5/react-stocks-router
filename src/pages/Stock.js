import stocks from "../data";

export default function Stock() {
  return (
    <div className="oneStock">
      <h1>{stocks[0].name}</h1>
      <div>
        <strong>Symbol: </strong>
        {stocks[0].symbol}
      </div>
      <br />
      <div>
        <strong>Last Price: </strong>
        {stocks[0].lastPrice}
      </div>
      <br />
      <div>
        <strong>Change: </strong>
        {stocks[0].change}
      </div>
      <br />
      <div>
        <strong>High: </strong>
        {stocks[0].high}
      </div>
      <br />
      <div>
        <strong>Low: </strong>
        {stocks[0].low}
      </div>
      <br />
      <div>
        <strong>Open: </strong>
        {stocks[0].open}
      </div>
    </div>
  );
}
