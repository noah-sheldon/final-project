import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage/NoPage";
import Home from "./components/Home/Home";
import ForexNews from "./components/ForexNews/ForexNews";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path="historical" element={<Historical />} /> */}
          <Route path="forex-news" element={<ForexNews />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
