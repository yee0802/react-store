export default function CartPageHeader({ cart }) {
  return (
    <header className="cart-page__header">
      <h1>SHOPPING CART</h1>
      <div className="cart-page__header--item-count">{cart.length}</div>
    </header>
  );
}
