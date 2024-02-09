import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Container from "@mui/material/Container";

export const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <Container max-width={false} sx={{ mt: 4, pb: 6, height: "70vh" }}> */}
        <Outlet />
      {/* </Container> */}
      {/* <Container max-width={false} disableGutters sx={{ mb: 0, width: "100%" }}> */}
        {/* <Footer /> */}
      {/* </Container> */}
    </>
  );
};

export default Layout;
