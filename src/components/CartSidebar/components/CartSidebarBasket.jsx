import { Link } from "react-router-dom";
import CartTotal from "../../../pages/Cart/components/CartTotal";
import CheckoutBtn from "../../CheckoutBtn";

export default function CartSidebarBasket({ cart }) {
  return (
    <section className="cart-sidebar__basket">
      <CartTotal />
      <Link to="/cart">
        <button
          className="view-cart-btn"
          onClick={() => {
            const cartBtn = document.getElementById("cart-btn");
            const sidebar = document.getElementById("cart-sidebar");

            cartBtn.classList.remove("active");
            sidebar.classList.remove("active");
          }}
        >
          View Cart
        </button>
      </Link>
      <CheckoutBtn cart={cart} />
    </section>
  );
}
