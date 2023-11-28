import cartLogo from "../assets/cart.svg";

export default function Header() {
  return (
    <header className="app-header">
      <h1>REACT STORE</h1>

      <section className="header__links">
        <p>CATEGORIES</p>
        <img src={cartLogo} alt="cart-logo" />
      </section>
    </header>
  );
}
