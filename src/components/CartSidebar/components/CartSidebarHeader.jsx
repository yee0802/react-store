import chevronRight from "../../../assets/chevron-right.svg";

export default function CartSidebarHeader({ cart }) {
  return (
    <header className="cart-sidebar-header">
      <img
        className="cart-sidebar-close-btn"
        src={chevronRight}
        alt="chevron-right"
        onClick={() => {
          const cartBtn = document.getElementById("cart-btn");
          const sidebar = document.getElementById("cart-sidebar");

          cartBtn.classList.remove("active");
          sidebar.classList.remove("active");
        }}
      />
      <h1>CART</h1>
      <figure className="cart-total-items">{cart.length}</figure>
    </header>
  );
}
