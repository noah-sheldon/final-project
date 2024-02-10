import React from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/bg-img.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "93vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
          <CardContent>
            <Typography
              variant="h2"
              elevation={2}
              gutterBottom
              sx={{ color: "#4591A7" }}
            >
              <b>fx - Change</b>
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: "30px" }}>
              Stay informed about currency exchange rates, historical trends,
              and the latest forex news.
            </Typography>

            <Button
              component={Link}
              to="/currency-converter"
              variant="contained"
              color="primary"
              style={{
                marginRight: 10,
                marginBottom: 10,
                backgroundColor: "#8C5D42",
              }}
            >
              Currency Converter
            </Button>
            <Button
              component={Link}
              to="/historical-charts"
              variant="contained"
              color="primary"
              style={{
                marginRight: 10,
                marginBottom: 10,
                backgroundColor: "#8C5D42",
              }}
            >
              Historical Data
            </Button>
            <Button
              component={Link}
              to="/forex-news"
              variant="contained"
              color="primary"
              style={{
                marginRight: 10,
                marginBottom: 10,
                backgroundColor: "#8C5D42",
              }}
            >
              Forex News
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
