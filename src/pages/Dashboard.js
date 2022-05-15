import { Link } from "react-router-dom";
import stocks from "../data";

export default function Dashboard() {
  return (
    <div className="stocks">
      {stocks.map(({ name, symbol }) => (
        <Link key={symbol} to={`/stocks/${symbol}`}>
          <h2>
            {name} ** {symbol} **
          </h2>
        </Link>
      ))}
    </div>
  );
}

// function Dashboard(props){
//   return props.stocks.map((stock) => <Link to={`/stock/${stock.symbol}`}><h3>{stock.name}</h3></Link>)
// }

// export default Dashboard