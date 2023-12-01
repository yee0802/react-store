export default function CartSidebarList(props) {
  const { cart, setCart } = props;

  const removeCartItem = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <ul className="cart-sidebar__list">
      {cart ? (
        cart.map((item, idx) => (
          <li className="cart-sidebar__list--item" key={idx}>
            <button
              className="cart-sidebar__delete-btn"
              title="Remove Item"
              onClick={() => removeCartItem(item)}
            >
              X
            </button>
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
