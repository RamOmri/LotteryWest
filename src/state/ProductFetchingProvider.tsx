import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductContent } from "../screens";
import fetchData from "./fetchData";

const initialState = {
  products: [],
  loading: false,
  error: null,
  fetchProducts: () => {},
};

const DataFetchingContext = createContext<{
  products: ProductContent[];
  loading: boolean;
  error: any | null;
  fetchProducts: () => void;
}>(initialState);

const DataFetchingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductContent[]>([]);
  const [loading, setLoading] = useState(false);
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
      value={{ products, loading, error, fetchProducts }}
    >
      {children}
    </DataFetchingContext.Provider>
  );
};

// Define a custom hook to consume the data fetching context
export const useDataFetching = () => {
  return useContext(DataFetchingContext);
};
