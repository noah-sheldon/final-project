import { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Grid,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";

const Latest = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("GBP");
  const [toCurrency, setToCurrency] = useState("USD");
  const [conversionRates, setConversionRates] = useState({});
  const [resultFromTo, setResultFromTo] = useState(null);
  const [resultToFrom, setResultToFrom] = useState(null);

  useEffect(() => {
    const fetchConversionRates = async () => {
      try {
        const apiKey = import.meta.env.VITE_FREE_CURR_API;
        const response = await axios.get(
          `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${fromCurrency}`
        );
        setConversionRates(response.data.data);
      } catch (error) {
        console.error("Error fetching conversion rates:", error);
      }
    };

    fetchConversionRates();
  }, [fromCurrency]);

  useEffect(() => {
    if (conversionRates[toCurrency]) {
      const convertedValueFromTo = amount * conversionRates[toCurrency];
      setResultFromTo(convertedValueFromTo.toFixed(4));

      const convertedValueToFrom = amount / conversionRates[toCurrency];
      setResultToFrom(convertedValueToFrom.toFixed(6));
    } else {
      setResultFromTo(null);
      setResultToFrom(null);
    }
  }, [amount, toCurrency, conversionRates]);

  const handleAmountChange = (event) => {
    const newAmount = parseFloat(event.target.value);
    setAmount(isNaN(newAmount) ? 0 : newAmount);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  return (
    <Container>
      <Paper
        style={{
          padding: "20px",
          marginTop: "40px",
          marginBottom: "40px",
          backgroundColor: "#7FC1DB",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Currency Converter
        </Typography>
        <TextField
          label="Amount"
          type="number"
          variant="outlined"
          fullWidth
          value={amount}
          onChange={handleAmountChange}
          style={{ marginBottom: "10px" }}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl
              variant="outlined"
              fullWidth
              style={{ marginBottom: "10px" }}
            >
              <InputLabel id="from-currency-label">From Currency</InputLabel>
              <Select
                label="From Currency"
                value={fromCurrency}
                onChange={handleFromCurrencyChange}
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="JPY">JPY</MenuItem>
                <MenuItem value="BGN">BGN</MenuItem>
                <MenuItem value="CZK">CZK</MenuItem>
                <MenuItem value="DKK">DKK</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>
                <MenuItem value="HUF">HUF</MenuItem>
                <MenuItem value="PLN">PLN</MenuItem>
                <MenuItem value="RON">RON</MenuItem>
                <MenuItem value="SEK">SEK</MenuItem>
                <MenuItem value="CHF">CHF</MenuItem>
                <MenuItem value="ISK">ISK</MenuItem>
                <MenuItem value="NOK">NOK</MenuItem>
                <MenuItem value="HRK">HRK</MenuItem>
                <MenuItem value="RUB">RUB</MenuItem>
                <MenuItem value="TRY">TRY</MenuItem>
                <MenuItem value="AUD">AUD</MenuItem>
                <MenuItem value="BRL">BRL</MenuItem>
                <MenuItem value="CAD">CAD</MenuItem>
                <MenuItem value="CNY">CNY</MenuItem>
                <MenuItem value="HKD">HKD</MenuItem>
                <MenuItem value="IDR">IDR</MenuItem>
                <MenuItem value="ILS">ILS</MenuItem>
                <MenuItem value="INR">INR</MenuItem>
                <MenuItem value="KRW">KRW</MenuItem>
                <MenuItem value="MXN">MXN</MenuItem>
                <MenuItem value="MYR">MYR</MenuItem>
                <MenuItem value="NZD">NZD</MenuItem>
                <MenuItem value="PHP">PHP</MenuItem>
                <MenuItem value="SGD">SGD</MenuItem>
                <MenuItem value="THB">THB</MenuItem>
                <MenuItem value="ZAR">ZAR</MenuItem>
              </Select>
            </FormControl>
            {resultFromTo !== null && (
              <>
                <Typography variant="h6" gutterBottom>
                  {`${amount} ${fromCurrency} = ${resultFromTo} ${toCurrency}`}
                </Typography>
                <TableContainer
                  component={Paper}
                  style={{ backgroundColor: "#B3BFB5" }}
                >
                  <Typography variant="h6" gutterBottom>
                    Conversion Table: {fromCurrency} to {toCurrency}
                  </Typography>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Amount</TableCell>
                        <TableCell>{toCurrency}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000, 50000,
                      ].map((amount) => (
                        <TableRow key={amount}>
                          <TableCell>{amount}</TableCell>
                          <TableCell>
                            {(amount * conversionRates[toCurrency]).toFixed(4)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              variant="outlined"
              fullWidth
              style={{ marginBottom: "10px" }}
            >
              <InputLabel id="to-currency-label">To Currency</InputLabel>
              <Select
                label="To Currency"
                value={toCurrency}
                onChange={handleToCurrencyChange}
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="JPY">JPY</MenuItem>
                <MenuItem value="BGN">BGN</MenuItem>
                <MenuItem value="CZK">CZK</MenuItem>
                <MenuItem value="DKK">DKK</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>
                <MenuItem value="HUF">HUF</MenuItem>
                <MenuItem value="PLN">PLN</MenuItem>
                <MenuItem value="RON">RON</MenuItem>
                <MenuItem value="SEK">SEK</MenuItem>
                <MenuItem value="CHF">CHF</MenuItem>
                <MenuItem value="ISK">ISK</MenuItem>
                <MenuItem value="NOK">NOK</MenuItem>
                <MenuItem value="HRK">HRK</MenuItem>
                <MenuItem value="RUB">RUB</MenuItem>
                <MenuItem value="TRY">TRY</MenuItem>
                <MenuItem value="AUD">AUD</MenuItem>
                <MenuItem value="BRL">BRL</MenuItem>
                <MenuItem value="CAD">CAD</MenuItem>
                <MenuItem value="CNY">CNY</MenuItem>
                <MenuItem value="HKD">HKD</MenuItem>
                <MenuItem value="IDR">IDR</MenuItem>
                <MenuItem value="ILS">ILS</MenuItem>
                <MenuItem value="INR">INR</MenuItem>
                <MenuItem value="KRW">KRW</MenuItem>
                <MenuItem value="MXN">MXN</MenuItem>
                <MenuItem value="MYR">MYR</MenuItem>
                <MenuItem value="NZD">NZD</MenuItem>
                <MenuItem value="PHP">PHP</MenuItem>
                <MenuItem value="SGD">SGD</MenuItem>
                <MenuItem value="THB">THB</MenuItem>
                <MenuItem value="ZAR">ZAR</MenuItem>
              </Select>
            </FormControl>
            {resultToFrom !== null && (
              <>
                <Typography variant="h6" gutterBottom>
                  {`${amount} ${toCurrency} = ${resultToFrom} ${fromCurrency}`}
                </Typography>
                <TableContainer
                  component={Paper}
                  style={{ backgroundColor: "#9EC4B5" }}
                >
                  <Typography variant="h6" gutterBottom>
                    Conversion Table: {toCurrency} to {fromCurrency}
                  </Typography>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Amount</TableCell>
                        <TableCell>{fromCurrency}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000, 50000,
                      ].map((amount) => (
                        <TableRow key={amount}>
                          <TableCell>{amount}</TableCell>
                          <TableCell>
                            {(amount / conversionRates[toCurrency]).toFixed(6)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Latest;
