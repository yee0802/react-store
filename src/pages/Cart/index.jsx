import { useContext } from "react";
import { CartContext } from "../../App.jsx";
import CartSidebarList from "./components/CartList.jsx";
import "./index.css";
import CartTotal from "./components/CartTotal.jsx";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <main className="cart-page container">
      <h1>Shopping Bag ({cart.length})</h1>
      <CartSidebarList cart={cart} setCart={setCart} />
      <CartTotal />
      <button className="checkout-btn">Checkout</button>
    </main>
  );
}
