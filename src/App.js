import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import StockData from './pages/Stockdata';
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard stockData={StockData} />} />
          <Route path="/stocks/:symbol" element={<Stock stockData={StockData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
