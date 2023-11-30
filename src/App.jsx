import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/";
import "./App.css";
import Products from "./pages/Products";

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
            <Route path="/products" element={<Products />} />
          </Routes>
        </CartContext.Provider>
      </div>
    </>
  );
}

export { App, CartContext };
