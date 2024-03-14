import CartList from "../../pages/Cart/components/CartList.jsx";
import CartSidebarBasket from "./components/CartSidebarBasket.jsx";
import CartSidebarHeader from "./components/CartSidebarHeader.jsx";
import { useContext } from "react";
import CartContext from "../../context/cart.js";
import "./index.css";

export default function CartSidebar() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <aside id="cart-sidebar">
      <CartSidebarHeader cart={cart} />
      <CartList cart={cart} setCart={setCart} />
      <CartSidebarBasket cart={cart} />
    </aside>
  );
}
