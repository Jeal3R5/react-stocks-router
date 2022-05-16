import { Link } from "react-router-dom";
import stocks from "../data";

export default function Dashboard() {
  return (
    <div className="stocks">
      {stocks.map(({ name, symbol }) => (
        <Link key={symbol} to={`/stocks/${symbol}`}>
          <h2>
            {name} ** {symbol} ** <br />
            <br />
          </h2>
        </Link>
      ))}
    </div>
  );
}
