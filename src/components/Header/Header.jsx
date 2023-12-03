import { useContext } from "react";
import { CartContext } from "../../App";
import { Link } from "react-router-dom";
import cartLogo from "../../assets/cart.svg";
import HeartLogo from "../../assets/heart";
import "./index.css";

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="app-header">
      <Link to="/" className="header__h1">
        <h1>Stylish</h1>
      </Link>

      <section className="header__links">
        <section className="fav-link-container">
          <Link className="fav-link" to="/favourite-items">
            <HeartLogo />
          </Link>
        </section>

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
    </header>
  );
}
