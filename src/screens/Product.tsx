import { Image } from "react-native";
import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../router";
import { Container, VariantCard, Button } from "../components";
import { Text } from "../styles";
import { useCart } from "../state";
import { useNavigation } from "@react-navigation/native";

type ProductVariant = {
  description: string;
  price: number;
};

type ImageSource = React.ComponentProps<typeof Image>["source"];
type ProductContent = {
  id: number;
  images: [ImageSource, ImageSource];
  title: string;
  variants: ProductVariant[];
};

type ProductScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  "Product"
>;
type ProductScreenRouteProp = RouteProp<StackParamList, "Product">;

const Product: React.FC = () => {
  const route = useRoute<ProductScreenRouteProp>();
  const product = route.params;
  const { addToCart, cart } = useCart();

  const [variantIndex, setVariantIndex] = useState(0);
  const { variants } = product;

  const navigation = useNavigation<ProductScreenNavigationProp>();

  return (
    <Container>
      <View style={styles.section}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {product.images.map((image, index) => (
            <Image key={index} source={image} style={styles.image} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.section}>
        <VariantCard
          variants={product.variants}
          onSelectVariant={(index) => setVariantIndex(index)}
        />
        <Text style={styles.title} fontType="Title">
          {product.title}
        </Text>
        <View style={styles.textContainer}>
          <Text fontType="Text">{variants[variantIndex].description}</Text>
        </View>
      </View>
      <Button
        disabled={cart.some((cartProduct) => cartProduct.id === product.id)}
        label="Purchase"
        onPress={() => {
          addToCart({ ...product, variantIndex });
          navigation.pop();
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: "100%",
    resizeMode: "cover",
  },
  section: {
    flex: 1,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
  },
  textContainer: {
    padding: 16,
  },
});

export { ProductContent, ProductVariant, Product };
