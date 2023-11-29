import CartSideBar from "./components/CartSidebar";

export default function Header() {
  return (
    <header className="app-header">
      <h1>REACT STORE</h1>

      <section className="header__links">
        <p>CATEGORIES</p>
        <CartSideBar />
      </section>
    </header>
  );
}
