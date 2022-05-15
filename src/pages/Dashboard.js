import { Link } from "react-router-dom";
import stocks from "../data";

export default function Dashboard(props) {
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

