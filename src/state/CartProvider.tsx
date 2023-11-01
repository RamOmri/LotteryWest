import React, { createContext, useContext, useReducer } from "react";
import { ProductContent } from "../screens";

const initialState = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
};

const CartContext = createContext<{
  cart: ProductContent[];
  addToCart: (product: ProductContent) => void;
  removeFromCart: (id: string) => void;
}>(initialState);

// Handle cart actions
const cartReducer = (state: ProductContent[], action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.product];
    case "REMOVE_FROM_CART":
      return state.filter((product) => product.id !== action.id);
    default:
      return state;
  }
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product: ProductContent) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
