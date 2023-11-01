import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProductContent } from "../screens";
import { Text } from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import { StackParamList } from "../router";

type CardProps = {
  product: ProductContent;
};

const ProductCard: React.FC<CardProps> = ({ product }) => {
  const firstImage = product.images[0];
  const firstVariant = product.variants[0];

  type ProductScreenNavigationProp = NativeStackNavigationProp<
    StackParamList,
    "Product"
  >;
  const navigation = useNavigation<ProductScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Product", product);
      }}
    >
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
