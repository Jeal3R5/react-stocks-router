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



// function Stock(){
//   const symbol = stocks.match.symbol;

//   const stock = stocks.find((stock) => stock.symbol === symbol);

//   return (
//     <div>
//       <h1>{stock.name}</h1>
//       <h4>{stock.symbol}</h4>
//       <h4>Last Price: {stock.lastPrice}</h4>
//       <h4>Change: {stock.change}</h4>
//       <h4>High: {stock.high}</h4>
//       <h4>Low: {stock.low}</h4>
//       <h4>Open: {stock.open}</h4>
//     </div>
//   );
// }

// export default Stock