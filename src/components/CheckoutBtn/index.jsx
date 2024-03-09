import api from "../../api";
import "./index.css";

export default function CheckoutBtn(props) {
  const { cart } = props;

  return (
    <>
      <button
        className="checkout-btn"
        onClick={async () => {
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
          }
        }}
      >
        Checkout
      </button>
    </>
  );
}
