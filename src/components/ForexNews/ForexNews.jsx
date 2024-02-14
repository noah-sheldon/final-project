import { useState } from "react";
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
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const ForexNews = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [newsData, setNewsData] = useState([]);

  const formatDate = (date) => {
    return dayjs(date).format("YYYY-MM-DDTHH:mm:ss[Z]");
  };

  const formatDateSimple = (date) => {
    return dayjs(date).format("YYYY-MM-DD");
  };

  const handleShowNews = async () => {
    const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
    const formattedFromDate = fromDate ? formatDate(fromDate) : "";
    const formattedToDate = toDate ? formatDate(toDate) : "";
    const apiUrl = `https://gnews.io/api/v4/search?q=forex+${selectedCurrency}&token=${apiKey}&lang=${selectedLanguage}&from=${formattedFromDate}&to=${formattedToDate}`;

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
    <div className="container mt-5">
      <FormControl>
        <Select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          displayEmpty
          sx={{ marginRight: "20px", marginBottom: "30px", width: "200px" }}
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
          sx={{ marginRight: "20px", marginBottom: "30px", width: "200px" }}
        >
          <MenuItem value="" disabled>
            Select Language
          </MenuItem>
          <MenuItem disabled value="fr">
            French
          </MenuItem>
          <MenuItem value="en">English</MenuItem>
          <MenuItem disabled value="de">
            German
          </MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="From Date"
                value={fromDate}
                onChange={(newValue) => setFromDate(newValue)}
                minDate={dayjs("2019-01-01")}
                maxDate={dayjs()}
              />
              <DatePicker
                label="To Date"
                value={toDate}
                onChange={(newValue) => setToDate(newValue)}
                minDate={dayjs("2019-01-01")}
                maxDate={dayjs()}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        sx={{ backgroundColor: "#4591A7" }}
        onClick={handleShowNews}
        className="mt-3"
      >
        Show News
      </Button>

      <div className="row mt-3 mb-5">
        {newsData.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card>
              <img src={article.image} className="card-img-top" alt="News" />
              <CardContent>
                <Typography variant="h6">{article.title}</Typography>
                <Typography variant="body2">{article.description}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Source: {article.source.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Published at: {formatDateSimple(article.publishedAt)}
                </Typography>
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
