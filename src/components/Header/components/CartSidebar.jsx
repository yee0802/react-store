import { useState } from "react";
import cartLogo from "../../../assets/cart.svg";
export default function CartSideBar() {
  const [cart, setCart] = useState("");

  document.onclick = (e) => {
    if (e.target.id !== "cart-sidebar" && e.target.id !== "cart") {
      const cartBtn = document.getElementById("cart");
      const sidebar = document.getElementById("cart-sidebar");

      cartBtn.classList.remove("active");
      sidebar.classList.remove("active");
    }
  };

  return (
    <>
      <img
        id="cart"
        src={cartLogo}
        alt="cart-logo"
        onClick={() => {
          const cartBtn = document.getElementById("cart");
          const sidebar = document.getElementById("cart-sidebar");

          cartBtn.classList.toggle("active");
          sidebar.classList.toggle("active");
        }}
      />
      <section id="cart-sidebar">
        <h1>CART</h1>
        <ul className="cart-sidebar__list">
          {cart ? (
            cart.map((item, idx) => (
              <li key={idx}>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </li>
            ))
          ) : (
            <li>
              <p>Empty Cart</p>
            </li>
          )}
        </ul>
        <section className="cart-sidebar__checkout">
          <p>{`£0.00`}</p>
          <button className="checkout-btn">CHECKOUT</button>
        </section>
      </section>
    </>
  );
}
