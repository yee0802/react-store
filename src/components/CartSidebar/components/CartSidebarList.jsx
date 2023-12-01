export default function CartSidebarList(props) {
  const { cart, setCart } = props;

  const removeCartItem = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    cart.length > 1 ? setCart(updatedCart) : setCart("");
  };

  return (
    <>
      <button className="cart-sidebar__clear-all" onClick={() => setCart("")}>
        Clear All
      </button>
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
    </>
  );
}
