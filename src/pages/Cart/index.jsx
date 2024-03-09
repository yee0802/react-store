import { useContext } from "react";
import { CartContext } from "../../App.jsx";
import CartSidebarList from "./components/CartList.jsx";
import "./index.css";
import CartTotal from "./components/CartTotal.jsx";
import CheckoutBtn from "../../components/CheckoutBtn";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <main className="cart-page container">
      <h1>Shopping Bag ({cart.length})</h1>
      <CartSidebarList cart={cart} setCart={setCart} />
      <CartTotal />
      <CheckoutBtn cart={cart} />
    </main>
  );
}
