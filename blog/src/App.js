import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./Home";
import Logo from "./Logo";
import Full from "./Full";

function App() {
  return (
    <>
      <Logo />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="full" element={<Full />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
