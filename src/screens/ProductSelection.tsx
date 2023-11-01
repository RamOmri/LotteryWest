import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Container, ProductCard } from "../components";
import { Text } from "../styles";
import { useFetchProducts } from "../state";

const ProductSelection = () => {
  const { products } = useFetchProducts();

  return (
    <Container>
      <Text fontType="Title">Lottery West Product Selection</Text>
      <ScrollView style={styles.scrollContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    padding: 8,
  },
});

export default ProductSelection;
