import { HomeRouter, ProductProvider, CartProvider } from "./src";

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <HomeRouter />
      </CartProvider>
    </ProductProvider>
  );
}
