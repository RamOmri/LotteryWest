import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useCart, CartItem } from "../state";
import Button from "../components/Button";
import { Container } from "../components";
import { Text } from "../styles";

const Cart: React.FC = () => {
  const { cart, removeFromCart, emptyCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    cart.forEach((product) => {
      const { variants } = product;
      price += variants[product.variantIndex].price;
    });
    setTotalPrice(price);
  }, [cart]);

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <View style={styles.itemDescription}>
        <Text fontType="SmallTitle">{item.title}</Text>
        <Text fontType="Text">
          Price: ${item.variants[item.variantIndex].price}
        </Text>
      </View>
      <Button label="Remove" onPress={() => removeFromCart(item.id)} />
    </View>
  );

  return (
    <Container>
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.totalPriceContainer}>
        <Text fontType="SmallTitle">Total Price: ${totalPrice}</Text>
      </View>
      <Button
        label="Checkout"
        onPress={() => {
          alert("Check out complete");
          emptyCart();
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  itemDescription: {
    marginRight: 10,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  totalPriceContainer: {
    paddingVertical: 10,
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Cart;
