import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import { SwapHoriz, ShowChart, Announcement } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer
      style={{
        marginBottom: 0,
        backgroundColor: "#4591A7",
        paddingTop: "30px",
        width: "100%",
      }}
    >
      <Container>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            component={Link}
            to="/currency-converter"
            label="Currency Converter"
            icon={<SwapHoriz />}
          />
          <BottomNavigationAction
            component={Link}
            to="/historical-charts"
            label="Historical Charts"
            icon={<ShowChart />}
          />
          <BottomNavigationAction
            component={Link}
            to="/forex-news"
            label="Forex News"
            icon={<Announcement />}
          />
        </BottomNavigation>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ height: "100px", width: "100%", pt: 5, color: "white" }}
        >
          <b>fx - Change © {new Date().getFullYear()}</b>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
