import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductContent } from "../screens";
import fetchData from "./fetchData";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  fetchProducts: () => {},
};

const DataFetchingContext = createContext<{
  products: ProductContent[];
  isLoading: boolean;
  error: any | null;
  fetchProducts: () => void;
}>(initialState);

const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductContent[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    const data = fetchData(); // TODO: use api to fetch data from the server
    try {
      //   const response = await fetch("content-fetching-ap.com");
      //   const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <DataFetchingContext.Provider
      value={{ products, isLoading, error, fetchProducts }}
    >
      {children}
    </DataFetchingContext.Provider>
  );
};

const useFetchProducts = () => {
  return useContext(DataFetchingContext);
};

export { ProductProvider, useFetchProducts };
