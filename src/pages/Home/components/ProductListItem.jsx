import { useContext } from "react";
import { CartContext } from "../../../App";
import HeartLogo from "../../../assets/heart";

export default function ProductListItem({ product }) {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (item) => {
    const duplicate = cart
      ? cart.some((obj) => {
          return obj.id == item.id;
        })
      : false;

    duplicate ? setCart([...cart]) : setCart([...cart, item]);
  };

  return (
    <li className="product--card">
      <img src={product.images[0]} alt="product image" />

      <section className="product--card__bottom">
        <section className="product--info">
          <p className="product--title">{product.title}</p>
          <p className="product--price">{`£${product.price}`}</p>
        </section>

        <section className="product--btns">
          <button className="fav">
            <HeartLogo />
          </button>
          <button className="atc" onClick={() => addToCart(product)}>
            Add To Cart
          </button>
        </section>
      </section>
    </li>
  );
}
