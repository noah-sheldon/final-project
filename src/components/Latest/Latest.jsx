import './Latest.css'
import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(null);

  const apiKey = 'fca_live_tL8hRYWmucQJ0vkodjxyS90TOBweprVAZb51VwFB'; // Replace with your Freecurrencyapi.com API key

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`https://freecurrencyapi.com/api/v2/latest?apikey=${apiKey}&base_currency=${fromCurrency}`)
        .then((res) => res.json())
        .then((data) => {
          setExchangeRate(data.data[toCurrency]);
        });
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleFromCurrencyChange(e) {
    setFromCurrency(e.target.value);
  }

  function handleToCurrencyChange(e) {
    setToCurrency(e.target.value);
  }

  return (
    <div className="currency-converter-container">
      <h2>Currency Converter</h2>
      <div className="currency-input-container">
        <input type="number" value={amount} onChange={handleFromAmountChange} />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          {/* Add more currency options here */}
        </select>
        <span>=</span>
        <input type="text" value={amount * (exchangeRate || 0)} disabled />
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currency options here */}
        </select>
      </div>
    </div>
  );
};

export default CurrencyConverter;
