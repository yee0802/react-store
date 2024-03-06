import { useContext, useEffect, useState } from "react";
import trashCan from "../../../assets/trashcan.svg";
import { CartContext } from "../../../Contexts";

export default function CartTotal() {
  const [total, setTotal] = useState(0.0);

  const { cart, setCart } = useContext(CartContext);

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
    setCart([]);
  };

  return (
    <section className="cart-sidebar__total-clear">
      <p className="product--price">{`TOTAL: £${total}`}</p>
      <button className="cart-sidebar__clear-all" onClick={() => clearCart()}>
        <img src={trashCan} alt="trash-can-logo" />
      </button>
    </section>
  );
}
