import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ProductContent } from "../screens";
import { Text } from "../styles";
import { LinearGradient } from "expo-linear-gradient";

type CardProps = {
  product: ProductContent;
};

const ProductCard: React.FC<CardProps> = ({ product }) => {
  const firstImage = product.images[0];
  const firstVariant = product.variants[0];

  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <ImageBackground source={firstImage} style={styles.image}>
          <LinearGradient
            colors={["transparent", "black"]}
            style={styles.gradient}
          >
            <Text fontType="SmallTitle">{product.title}</Text>
            <Text fontType="Text">Starts from ${firstVariant.price}</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  gradient: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
});

export default ProductCard;
