import { Link } from "react-router-dom";
import CartTotal from "./CartTotal";

export default function CartSidebarBasket() {
  return (
    <section className="cart-sidebar__basket">
      <CartTotal />
      <Link to="/cart">
        <button className="view-cart-btn">View Cart</button>
      </Link>
      <button className="checkout-btn">Checkout</button>
    </section>
  );
}
