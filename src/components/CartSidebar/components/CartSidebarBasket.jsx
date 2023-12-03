import { useEffect, useState } from "react";
import trashCan from "../../../assets/trashcan.svg";

export default function CartSidebarBasket(props) {
  const [total, setTotal] = useState(0.0);

  const { cart, setCart } = props;

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

  const clearCart = () => {
    cart.forEach((item) => (item.quantity = 0));
    setCart("");
  };

  return (
    <section className="cart-sidebar__basket">
      <section className="cart-sidebar__total-clear">
        <p className="product--price">{`TOTAL: £${total}`}</p>
        <button className="cart-sidebar__clear-all" onClick={() => clearCart()}>
          <img src={trashCan} alt="trash-can-logo" />
        </button>
      </section>

      <button className="checkout-btn">Checkout</button>
    </section>
  );
}
