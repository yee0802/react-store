import CartList from "../../pages/Cart/components/CartList.jsx";
import CartSidebarBasket from "./components/CartSidebarBasket.jsx";
import CartSidebarHeader from "./components/CartSidebarHeader.jsx";
import "./index.css";
import { useContext } from "react";
import { CartContext } from "../../App.jsx";

export default function CartSidebar() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <aside id="cart-sidebar">
      <CartSidebarHeader cart={cart} />
      <CartList cart={cart} setCart={setCart} />
      <CartSidebarBasket cart={cart} setCart={setCart} />
    </aside>
  );
}
