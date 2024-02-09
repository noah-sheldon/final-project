import React, { useEffect } from "react";
import "./App.css";
// import Header from "./components/Header/Header";
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
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="latest" element={<Latest />} />
            <Route path="historic" element={<Historic />} />
            <Route path="forex-news" element={<ForexNews />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
