import "./App.css";
import { Route, Routes } from "react-router-dom";
import stocks from "./data";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Stock from "./pages/Stock";

function App() {
  //console.log(stocks);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
