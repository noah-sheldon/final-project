import React from 'react';
import './Table.css';

const Table = ({ title, currencyFrom, currencyTo, exchangeRate }) => {
  const amounts = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000, 50000];

  return (
    <div className="table-container">
      <h2 className="table-title">{title}</h2>
      <table>
        <tbody>
          {amounts.map((amount) => (
            <tr key={amount}>
              <td>{amount.toLocaleString()} {currencyFrom}</td>
              <td>{(amount * exchangeRate).toLocaleString()} {currencyTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
