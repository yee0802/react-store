import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import CartSidebar from "./components/CartSidebar/CartSidebar";
import SavedItems from "./pages/SavedItems";
import Cart from "./pages/Cart";
import { CartContext, SavedContext } from "./Contexts";
import "./App.css";

function App() {
  const [cart, setCart] = useState("");
  const [favourites, setFavourites] = useState("");

  return (
    <>
      <div className="app-container">
        <CartContext.Provider value={{ cart, setCart }}>
          <Header />
          <SavedContext.Provider value={{ favourites, setFavourites }}>
            <CartSidebar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/saved-items" element={<SavedItems />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </SavedContext.Provider>
        </CartContext.Provider>
      </div>
    </>
  );
}

export { App, CartContext };
