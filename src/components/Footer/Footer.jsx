import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <footer
      style={{ marginBottom: 0, backgroundColor: "#f5f5f5", padding: "20px" }}
    >
      <Container>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ height: "100px", width: "100", pt: 5 }}
        >
          fx-Change © {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
