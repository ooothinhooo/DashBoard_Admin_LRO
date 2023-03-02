import "./App.css";
import { Layout } from "./components/index.js";
import "./App.css";
import { useEffect, useState, StrictMode, useContext } from "react";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Layout /> */}
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </>
  );
}

export default App;
