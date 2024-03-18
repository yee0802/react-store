import { useContext } from "react";
import { CartContext } from "../context/cart.jsx";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
