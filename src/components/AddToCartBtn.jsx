import { useContext } from "react";
import { CartContext } from "../App";

export default function AddToCartBtn({ product }) {
  const { setCart } = useContext(CartContext);

  const addToCart = (item) => {
    setCart((currentCart) => {
      const duplicateIndex = currentCart.findIndex((obj) => obj.id === item.id);

      if (duplicateIndex !== -1) {
        const newCart = currentCart.slice();

        newCart[duplicateIndex] = {
          ...newCart[duplicateIndex],
          quantity: newCart[duplicateIndex].quantity + 1,
        };
        return newCart;
      } else {
        return currentCart.concat({ ...item, quantity: 1 });
      }
    });
  };

  return (
    <button className="atc" onClick={() => addToCart(product)}>
      Add To Cart
    </button>
  );
}
