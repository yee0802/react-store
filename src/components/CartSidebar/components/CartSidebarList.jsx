export default function CartSidebarList({ cart }) {
  return (
    <ul className="cart-sidebar__list">
      {cart ? (
        cart.map((item, idx) => (
          <li className="cart-sidebar__list--item" key={idx}>
            <p>{item.title}</p>
            <p className="product--price">{`£${item.price}`}</p>
          </li>
        ))
      ) : (
        <li>
          <p>Empty Cart</p>
        </li>
      )}
    </ul>
  );
}
