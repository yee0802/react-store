import CartSidebarList from "./components/CartSidebarList.jsx";
import CartSidebarBasket from "./components/CartSidebarBasket.jsx";
import CartSidebarHeader from "./components/CartSidebarHeader.jsx";
import "./index.css";
import { useContext } from "react";
import { CartContext } from "../../App.jsx";

export default function CartSidebar() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <section id="cart-sidebar">
      <CartSidebarHeader cart={cart} />
      <CartSidebarList cart={cart} setCart={setCart} />
      <CartSidebarBasket cart={cart} setCart={setCart} />
    </section>
  );
}
