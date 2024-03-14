import trashCan from "../../../assets/trashcan.svg";
import useCart from "../../../hooks/useCart.js";

export default function CartTotal() {
  const { clearCart, total } = useCart();

  return (
    <section className="cart-sidebar__total-clear">
      <p className="product--price">{`TOTAL: £${total}`}</p>
      <button className="cart-sidebar__clear-all" onClick={() => clearCart()}>
        <img src={trashCan} alt="trash-can-logo" />
      </button>
    </section>
  );
}
