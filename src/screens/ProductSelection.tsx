import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Container, ProductCard } from "../components";
import { Text } from "../styles";
import { useFetchProducts, useCart } from "../state";

const ProductSelection = () => {
  const { products, isLoading, error } = useFetchProducts();

  return (
    <Container>
      <Text fontType="Title">Lottery West Product Selection</Text>
      <ScrollView style={{ width: "100%", padding: 8 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} /> // Render a ProductCard for each product
        ))}
      </ScrollView>
    </Container>
  );
};

export default ProductSelection;
