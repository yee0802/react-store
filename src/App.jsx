import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/cart.jsx";
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
import Account from "./pages/Account";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="app-container">
        <AuthProvider>
          <CartProvider>
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
                path="/account"
                element={
                  <PrivateRoute>
                    <Account />
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
          </CartProvider>
        </AuthProvider>
      </div>
    </>
  );
}
