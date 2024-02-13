import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  TablePagination,
  Container,
  Typography,
  Box,
} from "@mui/material";

const Historic = () => {
  const [data, setData] = useState([]);
  const [inputCurrency, setInputCurrency] = useState("EUR");
  const [outputCurrency, setOutputCurrency] = useState("USD");
  const [timeframe, setTimeframe] = useState("30min");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_FIN_APP_API_KEY;
      const symbol = `${inputCurrency}${outputCurrency}`;
      const apiUrl = `https://financialmodelingprep.com/api/v3/historical-chart/${timeframe}/${symbol}?from=2024-02-05&to=2024-02-09&apikey=${apiKey}`;
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    console.log(rowsPerPage);
    console.log(page);
    setPage(page);
    setRowsPerPage(rowsPerPage);
  }, [page, rowsPerPage]);

  return (
    <Container>
      <Paper
        style={{
          padding: "20px",
          marginTop: "40px",
          marginBottom: "40px",
          // backgroundColor: "#C3CDCC",
        }}
      >
        <Box>
          <FormControl>
            <InputLabel id="input-currency-label">Currency 1</InputLabel>
            <Select
              labelId="input-currency-label"
              id="input-currency"
              value={inputCurrency}
              onChange={(e) => setInputCurrency(e.target.value)}
              style={{ marginTop: "20px",marginRight: "10px",  marginBottom: "20px", width: "200px", height: "50px" }}
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

          <FormControl>
            <InputLabel id="output-currency-label" >Currency 2</InputLabel>
            <Select
              labelId="output-currency-label"
              id="output-currency"
              value={outputCurrency}
              onChange={(e) => setOutputCurrency(e.target.value)}
              style={{ marginTop: "20px",marginRight: "10px",  marginBottom: "20px", width: "200px", height: "50px" }}
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

          <FormControl>
            <InputLabel id="timeframe-label" >Timeframe</InputLabel>
            <Select
              labelId="timeframe-label"
              id="timeframe"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              style={{ marginTop: "20px",marginRight: "10px",  marginBottom: "5px", width: "200px", height: "50px" }}
            >
              <MenuItem value="1min">1 Minute</MenuItem>
              <MenuItem value="5min">5 Minutes</MenuItem>
              <MenuItem value="15min">15 Minutes</MenuItem>
              <MenuItem value="30min">30 Minutes</MenuItem>
              <MenuItem value="1hour">1 Hour</MenuItem>
              <MenuItem value="4hour">4 Hours</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" color="info" style={{ marginTop: "20px",marginRight: "10px", width: "200px", height: "50px" }} onClick={fetchData}>
            Submit
          </Button>
          {data.length ? (
            <div>
              <LineChart
                width={800}
                height={400}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                style={{ marginTop: "30px" }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis type="number" domain={["dataMin", "dataMax"]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="open" stroke="#8884d8" />
                <Line type="monotone" dataKey="close" stroke="#82ca9d" />
                <Line type="monotone" dataKey="low" stroke="#ff7f0e" />
                <Line type="monotone" dataKey="high" stroke="#ff0000" />
              </LineChart>

              <BarChart
                width={800}
                height={200}
                data={data}
                style={{ marginTop: "30px" }}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="volume" fill="#8884d8" />
              </BarChart>

              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell align="right">Open</TableCell>
                      <TableCell align="right">Close</TableCell>
                      <TableCell align="right">Low</TableCell>
                      <TableCell align="right">High</TableCell>
                      <TableCell align="right">Volume</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? data.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : data
                    ).map((row) => (
                      <TableRow key={row.date}>
                        <TableCell component="th" scope="row">
                          {row.date}
                        </TableCell>
                        <TableCell align="right">{row.open}</TableCell>
                        <TableCell align="right">{row.close}</TableCell>
                        <TableCell align="right">{row.low}</TableCell>
                        <TableCell align="right">{row.high}</TableCell>
                        <TableCell align="right">{row.volume}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <TablePagination
                  component="div"
                  count={data.length}
                  page={page}
                  onChangePage={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableContainer>
            </div>
          ) : (
            <div>
              <Typography variant="h6" gutterBottom sx={{ marginTop: 5 }}>
                Select Currency 1, Currency 2 and Timeframe to view Intraday
                moments
              </Typography>
            </div>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default Historic;
