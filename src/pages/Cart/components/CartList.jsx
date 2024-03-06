import CartListItem from "./CartListItem";

export default function CartList(props) {
  const { cart, setCart } = props;

  return (
    <>
      <ul className="cart-sidebar__list">
        {cart.length > 0 ? (
          cart.map((item, idx) => (
            <CartListItem item={item} cart={cart} setCart={setCart} key={idx} />
          ))
        ) : (
          <li>
            <p>Your shopping cart is empty</p>
          </li>
        )}
      </ul>
    </>
  );
}
