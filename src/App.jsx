import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/index";
import "./App.css";

const CartContext = createContext();

function App() {
  const [cart, setCart] = useState("");

  return (
    <>
      <div className="app-container">
        <CartContext.Provider value={{ cart, setCart }}>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </CartContext.Provider>
      </div>
    </>
  );
}

export { App, CartContext };
