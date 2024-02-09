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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
          <CardContent>
            <Typography variant="h2" gutterBottom>
              Currency Dashboard
            </Typography>
            <Button
              component={Link}
              to="/currency-converter"
              variant="contained"
              color="primary"
              style={{ marginRight: 10 }}
            >
              Currency Converter
            </Button>
            <Button
              component={Link}
              to="/historical"
              variant="contained"
              color="primary"
              style={{ marginRight: 10 }}
            >
              Historical Data
            </Button>
            <Button
              component={Link}
              to="/forex-news"
              variant="contained"
              color="primary"
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
