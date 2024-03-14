import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CartContext from "./context/cart.js";
import { AuthProvider, PrivateRoute } from "./context/auth.jsx";
import Header from "./components/Header";
import Home from "./pages/Home/";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import CartSidebar from "./components/CartSidebar";
import SavedItems from "./pages/SavedItems";
import Cart from "./pages/Cart";
import PaymentCancelled from "./pages/PaymentCancelled";
import PaymentSuccessful from "./pages/PaymentSuccessful";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className="app-container">
        <AuthProvider>
          <CartContext.Provider value={{ cart, setCart }}>
            <Header />
            <CartSidebar />

            <Routes>
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route
                path="/payment-cancelled"
                element={
                  <PrivateRoute>
                    <PaymentCancelled />
                  </PrivateRoute>
                }
              />
              <Route
                path="/payment-successful"
                element={
                  <PrivateRoute>
                    <PaymentSuccessful />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <p>In progress...</p>
                  </PrivateRoute>
                }
              />
              <Route
                path="/saved-items"
                element={
                  <PrivateRoute>
                    <SavedItems />
                  </PrivateRoute>
                }
              />
            </Routes>
          </CartContext.Provider>
        </AuthProvider>
      </div>
    </>
  );
}
