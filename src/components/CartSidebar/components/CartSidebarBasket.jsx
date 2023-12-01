import { useEffect, useState } from "react";

export default function CartSidebarBasket({ cart }) {
  const [total, setTotal] = useState(0.0);

  const totalPrice = () => {
    if (cart) {
      let num = 0;
      cart.forEach((item) => (num += item.quantity * item.price));
      setTotal(num);
    } else {
      setTotal(0.0);
    }
  };

  useEffect(totalPrice, [cart]);

  return (
    <section className="cart-sidebar__basket">
      <p className="product--price">{`£${total}`}</p>
      <button className="checkout-btn">CHECKOUT</button>
    </section>
  );
}
