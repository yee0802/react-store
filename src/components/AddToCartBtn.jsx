import { useContext } from "react";
import { CartContext } from "../App";

export default function AddToCartBtn({ product }) {
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
    <button className="atc" onClick={() => addToCart(product)}>
      Add To Cart
    </button>
  );
}
