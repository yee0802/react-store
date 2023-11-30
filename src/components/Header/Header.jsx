import { useContext } from "react";
import { CartContext } from "../../App";
import cartLogo from "../../assets/cart.svg";
import CartSidebar from "../CartSidebar/CartSidebar";

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="app-header">
      <h1>REACT STORE</h1>

      <section className="header__links">
        <section
          id="cart"
          onClick={() => {
            const cartBtn = document.getElementById("cart-btn");
            const sidebar = document.getElementById("cart-sidebar");

            cartBtn.classList.toggle("active");
            sidebar.classList.toggle("active");
          }}
        >
          <img id="cart-btn" src={cartLogo} alt="cart-logo" />
          <figure className="cartlogo-total-items">{cart.length}</figure>
        </section>
      </section>

      <CartSidebar cart={cart} />
    </header>
  );
}
