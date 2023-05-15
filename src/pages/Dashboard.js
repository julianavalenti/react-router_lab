import React from "react";
import { Link } from "react-router-dom";

function Dashboard({ stockData }) {
  let stocks = stockData.map((d, i) => {
    return (
      <Link key={i} to={`/stocks/${d.symbol}`}>
        <li>{d.name}</li>
      </Link>
    );
  });

  return <ul>{stocks}</ul>;
}

export default Dashboard;
