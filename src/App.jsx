import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import CartSidebar from "./components/CartSidebar/CartSidebar";

const CartContext = createContext();

function App() {
  const [cart, setCart] = useState("");

  return (
    <>
      <div className="app-container">
        <CartContext.Provider value={{ cart, setCart }}>
          <Header />
          <CartSidebar cart={cart} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
        </CartContext.Provider>
      </div>
    </>
  );
}

export { App, CartContext };
