import { useContext } from "react";
import { CartContext } from "../../App.jsx";
import CartSidebarList from "./components/CartList.jsx";
import CartTotal from "./components/CartTotal.jsx";
import CheckoutBtn from "../../components/CheckoutBtn";
import CartPageHeader from "./components/CartPageHeader.jsx";
import "./index.css";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <main className="cart-page container">
      <CartPageHeader cart={cart} />
      <CartSidebarList cart={cart} setCart={setCart} />
      <CartTotal />
      <CheckoutBtn cart={cart} />
    </main>
  );
}
