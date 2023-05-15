import React from 'react';
import { useParams } from 'react-router-dom';

const Stock = ({ stockData }) => {
  const { symbol } = useParams();
  const stock = stockData.find((d) => d.symbol === symbol);

  return (
    <div>
      <h3>Name: {stock.name}</h3>
      <h3 className="price">Price: {stock.lastPrice}</h3>
    </div>
  );
};

export default Stock;
