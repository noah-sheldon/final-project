import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Layout = () => {
  const location = useLocation();
  const [footerShow, setfooterShow] = useState(location.pathname !== "/");

  useEffect(() => {
    setfooterShow(location.pathname !== "/");
  }, [location.pathname]);

  return (
    <>
      <Paper sx={{ width: "100%", height: "auto", display: "block" }}>
        <Box sx={{ width: "100%", height: "7vh" }}>
          <Navbar />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Outlet />
        </Box>
        <Box sx={{ width: "100%" }}>{footerShow && <Footer />}</Box>
      </Paper>
    </>
  );
};

export default Layout;
