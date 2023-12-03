import x from "../../../assets/x-icon.svg";
import plusIcon from "../../../assets/plus-icon.svg";
import minusIcon from "../../../assets/minus-icon.svg";

export default function CartSidebarList(props) {
  const { cart, setCart } = props;

  const removeCartItem = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    item.quantity = 0;
    cart.length > 1 ? setCart(updatedCart) : setCart("");
  };

  return (
    <>
      <ul className="cart-sidebar__list">
        {cart.length > 0 ? (
          cart.map((item, idx) => (
            <li className="cart-sidebar__list--item" key={idx}>
              <button
                className="cart-sidebar__delete-btn"
                title="Remove Item"
                onClick={() => removeCartItem(item)}
              >
                <img src={x} alt="close-icon" />
              </button>

              <img
                className="cart-sidebar__image"
                src={item.images[0]}
                alt="product-image"
              />
              <p className="cart-sidebar__list--item__title">{item.title}</p>
              <section className="cart-sidebar__prices-quantity">
                <section className="cart-item__quantity">
                  <button
                    onClick={() => {
                      item.quantity--;

                      if (item.quantity === 0) {
                        const idx = cart.indexOf(item);
                        if (idx > -1) cart.splice(idx, 1);
                      }

                      setCart([...cart]);
                    }}
                  >
                    <img src={minusIcon} alt="minus-button" />
                  </button>

                  <p>{item.quantity ? item.quantity : "0"}</p>
                  <button
                    onClick={() => {
                      item.quantity++;

                      setCart([...cart]);
                    }}
                  >
                    <img src={plusIcon} alt="plus-button" />
                  </button>
                </section>

                <p className="product--individual-price">{`£${item.price}`}</p>
                <p className="product--price">
                  {`£${item.quantity * item.price}`}
                </p>
              </section>
            </li>
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
