import React, { useEffect } from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage/NoPage";
import Home from "./components/Home/Home";
import ForexNews from "./components/ForexNews/ForexNews";
import Historic from "./components/Historic/Historic";
import Layout from "./components/Layout/Layout";
import Latest from "./components/Latest/Latest";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} style={{height: '100%'}}>
            <Route path="/" element={<Home />} />
            <Route path="currency-converter" element={<Latest />} />
            <Route path="historical-charts" element={<Historic />} />
            <Route path="forex-news" element={<ForexNews />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
