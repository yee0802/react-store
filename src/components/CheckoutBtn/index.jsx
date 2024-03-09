import { useState } from "react";
import api from "../../api";
import "./index.css";

export default function CheckoutBtn(props) {
  const { cart } = props;
  const [checkoutMessage, setCheckoutMessage] = useState([]);

  return (
    <>
      {checkoutMessage && (
        <p className="checkout-btn--error-msg">{checkoutMessage}</p>
      )}

      <button
        className="checkout-btn"
        onClick={async () => {
          if (cart.length === 0) {
            setCheckoutMessage("Error: Cannot checkout with an empty cart");
            return;
          }

          const cartData = cart.map(({ id, quantity }) => ({ id, quantity }));

          try {
            const res = await api.post("/create-checkout-session", cartData);

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
        }}
      >
        Checkout
      </button>
    </>
  );
}
