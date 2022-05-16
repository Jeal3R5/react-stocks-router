import stocks from "../data";
import { useParams } from "react-router-dom";

function Stock() {
  const { symbol } = useParams();
  console.log(symbol);
  const stock = stocks.find((stock) => stock.symbol === symbol);

  return (
    <div className="singleStock">
      <h1>{stock.name}</h1>
      <h3>{stock.symbol}</h3>
      <h4>Last Price: {stock.lastPrice}</h4>
      <h4>Change: {stock.change}</h4>
      <h4>High: {stock.high}</h4>
      <h4>Low: {stock.low}</h4>
      <h4>Open: {stock.open}</h4>
    </div>
  );
}

export default Stock;