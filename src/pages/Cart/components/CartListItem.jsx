import x from "../../../assets/x-icon.svg";
import plusIcon from "../../../assets/plus-icon.svg";
import minusIcon from "../../../assets/minus-icon.svg";

export default function CartListItem(props) {
  const { item, cart, setCart } = props;

  const removeCartItem = (item) => {
    setCart((currentCart) => {
      const cartItemIndex = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      const newCart = currentCart.slice();

      newCart.splice(cartItemIndex, 1);
      return newCart;
    });
  };

  return (
    <li className="cart-sidebar__list--item">
      <button
        className="cart-sidebar__delete-btn"
        title="Remove Item"
        onClick={() => removeCartItem(item)}
      >
        <img src={x} alt="close-icon" />
      </button>

      <img
        className="cart-sidebar__image"
        src={item.imageURL}
        alt="product-image"
      />
      <section className="cart-title-desc">
        <p className="cart-sidebar__list--item__title">{item.title}</p>
        <span className="cart-item-desc">{item.description}</span>
      </section>
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
        <p className="product--price">{`£${item.quantity * item.price}`}</p>
      </section>
    </li>
  );
}
