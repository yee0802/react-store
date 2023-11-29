import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../App.jsx";
import cartLogo from "../../../assets/cart.svg";

export default function CartSideBar() {
  const [total, setTotal] = useState(0.0);
  const { cart } = useContext(CartContext);

  document.onclick = (e) => {
    if (e.target.id !== "cart-sidebar" && e.target.id !== "cart") {
      const cartBtn = document.getElementById("cart");
      const sidebar = document.getElementById("cart-sidebar");

      cartBtn.classList.remove("active");
      sidebar.classList.remove("active");
    }
  };

  const totalPrice = () => {
    if (cart) {
      let num = 0;
      cart.forEach((item) => (num += item.price));
      setTotal(num);
    }
  };

  useEffect(totalPrice, [cart]);

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
              <li className="cart-sidebar__list--item" key={idx}>
                <p>{item.title}</p>
                <p className="product--price">{`£${item.price}`}</p>
              </li>
            ))
          ) : (
            <li>
              <p>Empty Cart</p>
            </li>
          )}
        </ul>
        <section className="cart-sidebar__checkout">
          <p className="product--price">{`£${total}`}</p>
          <button className="checkout-btn">CHECKOUT</button>
        </section>
      </section>
    </>
  );
}
