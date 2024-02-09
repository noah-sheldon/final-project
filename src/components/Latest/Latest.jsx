import './Latest.css'
import React, { useState, useEffect } from 'react';

const Latest = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(null);

  const apiKey = 'fca_live_tL8hRYWmucQJ0vkodjxyS90TOBweprVAZb51VwFB'; 
  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${fromCurrency}`)
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
          <option value="JPY">JPY</option>
          <option value="BGN">BGN</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="GBP">GBP</option>
          <option value="HUF">HUF</option>
          <option value="PLN">PLN</option>
          <option value="RON">RON</option>
          <option value="SEK">SEK</option>
          <option value="CHF">CHF</option>
          <option value="ISK">ISK</option>
          <option value="NOK">NOK</option>
          <option value="HRK">HRK</option>
          <option value="RUB">RUB</option>
          <option value="TRY">TRY</option>
          <option value="AUD">AUD</option>
          <option value="BRL">BRL</option>
          <option value="CAD">CAD</option>
          <option value="CNY">CNY</option>
          <option value="HKD">HKD</option>
          <option value="IDR">IDR</option>
          <option value="ILS">ILS</option>
          <option value="INR">INR</option>
          <option value="KRW">KRW</option>
          <option value="MXN">MXN</option>
          <option value="MYR">MYR</option>
          <option value="NZD">NZD</option>
          <option value="PHP">PHP</option>
          <option value="SGD">SGD</option>
          <option value="THB">THB</option>
          <option value="ZAR">ZAR</option>
        </select>
        <span>=</span>
        <input type="text" value={amount * (exchangeRate || 0)} disabled />
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
          <option value="BGN">BGN</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="GBP">GBP</option>
          <option value="HUF">HUF</option>
          <option value="PLN">PLN</option>
          <option value="RON">RON</option>
          <option value="SEK">SEK</option>
          <option value="CHF">CHF</option>
          <option value="ISK">ISK</option>
          <option value="NOK">NOK</option>
          <option value="HRK">HRK</option>
          <option value="RUB">RUB</option>
          <option value="TRY">TRY</option>
          <option value="AUD">AUD</option>
          <option value="BRL">BRL</option>
          <option value="CAD">CAD</option>
          <option value="CNY">CNY</option>
          <option value="HKD">HKD</option>
          <option value="IDR">IDR</option>
          <option value="ILS">ILS</option>
          <option value="INR">INR</option>
          <option value="KRW">KRW</option>
          <option value="MXN">MXN</option>
          <option value="MYR">MYR</option>
          <option value="NZD">NZD</option>
          <option value="PHP">PHP</option>
          <option value="SGD">SGD</option>
          <option value="THB">THB</option>
          <option value="ZAR">ZAR</option>
        </select>
      </div>
    </div>
  );
};

export default Latest;

