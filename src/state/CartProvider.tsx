import React, { createContext, useContext, useReducer } from "react";
import { ProductContent } from "../screens";

const initialState = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  emptyCart: () => {},
};

type CartItem = ProductContent & { variantIndex: number };

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  emptyCart: () => void;
}>(initialState);

const cartReducer = (state: CartItem[], action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.product];
    case "REMOVE_FROM_CART":
      return state.filter((product) => product.id !== action.id);
    case "EMPTY_CART":
      return [];
    default:
      return state;
  }
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product: CartItem) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART" });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart, CartItem };
