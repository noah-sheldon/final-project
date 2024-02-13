// import React, { useState, useEffect } from "react";
import currencies from "../../data/currencies";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  MenuItem,
  FormControl,
  Select,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
  TextField,
} from "@mui/material";
import AdapterDateFns from "@mui/material/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const ForexNews = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [newsData, setNewsData] = useState([]);

  const handleShowNews = async () => {
    const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
    const apiUrl = `https://gnews.io/api/v4/search?q=forex+${selectedCurrency}&token=${apiKey}&lang=${selectedLanguage}&from=${fromDate}&to=${toDate}`;

    try {
      // Fetch data from the API
      const response = await fetch(apiUrl);
      const data = await response.json();
      setNewsData(data.articles || []);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  return (
    <div className="container mt-3">
      <FormControl>
        <Select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          displayEmpty
          sx={{ marginRight: "20px", marginBottom: "30px" }}
        >
          <MenuItem value="" disabled>
            Select Currency
          </MenuItem>
          {currencies.map((currency) => (
            <MenuItem key={currency.label} value={currency.label}>
              {currency.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <Select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          displayEmpty
          sx={{ marginRight: "20px", marginBottom: "30px" }}
        >
          <MenuItem value="" disabled>
            Select Language
          </MenuItem>
          <MenuItem value="fr">French</MenuItem>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="de">German</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="From Date"
              value={fromDate}
              onChange={(newValue) => setFromDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="To Date"
              value={toDate}
              onChange={(newValue) => setToDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>

      <Button variant="contained" color="primary" onClick={handleShowNews}>
        Show News
      </Button>

      <div className="row mt-3">
        {newsData.map((article, index) => (
          <div key={index} className="col-md-4">
            <Card>
              <img src={article.image} className="card-img-top" alt="News" />
              <CardContent>
                <Typography variant="h6">{article.title}</Typography>
                <Typography variant="body2">{article.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  sx={{ backgroundColor: "#4591A7", color: "white" }}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForexNews;
