import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
      </div>

      <Routes>
        <Route path="/" />
      </Routes>
    </>
  );
}

export default App;
