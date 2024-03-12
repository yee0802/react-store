import { useContext } from "react";
import { CartContext } from "../../context/Contexts";
import { Link } from "react-router-dom";
import shoppingBagLogo from "../../assets/shopping-bag.svg";
import cartLogo from "../../assets/cart.svg";
import HeartLogo from "../../assets/heart";
import userIcon from "../../assets/user-icon.svg";
import "./index.css";

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="app-header">
      <Link to="/" className="header__h1">
        <h1>Stylish</h1>
      </Link>

      <section className="header__links">
        <section className="profile-link-container">
          <Link className="profile-link" to="/profile">
            <img src={userIcon} alt="user-icon" />
          </Link>
        </section>

        <section className="products-link-container">
          <Link className="products-link" to="/products">
            <img src={shoppingBagLogo} alt="shopping-bag-icon" />
          </Link>
        </section>

        <section className="fav-link-container">
          <Link className="fav-link" to="/saved-items">
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
