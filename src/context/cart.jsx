import { createContext } from "react";
import { useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0.0);

  const totalPrice = () => {
    if (cart) {
      let num = 0;
      cart.forEach((item) => (num += item.quantity * item.price));
      setTotal(num);
    } else {
      setTotal(0.0);
    }
  };

  useEffect(totalPrice, [cart]);

  const clearCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    setCart,
    clearCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
