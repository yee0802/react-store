import { useState } from "react";
import api from "../../api";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";

export default function CheckoutBtn({ cart }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useAuth();
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const handleCheckout = async () => {
    if (!token) {
      const cartBtn = document.getElementById("cart-btn");
      const sidebar = document.getElementById("cart-sidebar");

      cartBtn.classList.remove("active");
      sidebar.classList.remove("active");

      return navigate("/login", { state: { from: location } });
    }

    if (cart.length === 0) {
      setCheckoutMessage("Error: Cannot checkout with an empty cart");
      return;
    }

    const cartData = cart.map(({ id, quantity }) => ({ id, quantity }));

    try {
      const res = await api.post("/create-checkout-session", cartData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      window.location.href = res.data.url;
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
      setCheckoutMessage(
        `Error: ${err.message ?? "Unknown error creating checkout"}`
      );
    }
  };

  return (
    <>
      {checkoutMessage && (
        <p className="checkout-btn--error-msg">{checkoutMessage}</p>
      )}

      <button className="checkout-btn" onClick={() => handleCheckout()}>
        Checkout
      </button>
    </>
  );
}
