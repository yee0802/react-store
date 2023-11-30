import CartSidebarList from "./components/CartSidebarList.jsx";
import CartSidebarBasket from "./components/CartSidebarBasket.jsx";
import CartSidebarHeader from "./components/CartSidebarHeader.jsx";
import "./index.css";

export default function CartSidebar({ cart }) {
  return (
    <section id="cart-sidebar">
      <CartSidebarHeader cart={cart} />
      <CartSidebarList cart={cart} />
      <CartSidebarBasket cart={cart} />
    </section>
  );
}
