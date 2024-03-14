import CartList from "../../pages/Cart/components/CartList.jsx";
import CartSidebarBasket from "./components/CartSidebarBasket.jsx";
import CartSidebarHeader from "./components/CartSidebarHeader.jsx";
import useCart from "../../hooks/useCart.js";
import "./index.css";

export default function CartSidebar() {
  const { cart, setCart } = useCart();

  return (
    <aside id="cart-sidebar">
      <CartSidebarHeader cart={cart} />
      <CartList cart={cart} setCart={setCart} />
      <CartSidebarBasket cart={cart} />
    </aside>
  );
}
