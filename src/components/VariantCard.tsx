import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ProductVariant } from "../screens";
import { COLORS } from "../styles";

type VariantCardProps = {
  variants: ProductVariant[];
};

const VariantCard: React.FC<VariantCardProps> = ({ variants }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null
  );

  const handlePress = (variant: ProductVariant) => {
    setSelectedVariant(variant);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {variants.map((variant, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(variant)}
            style={[
              styles.card,
              selectedVariant === variant && styles.selectedCard,
            ]}
          >
            <Text
              style={[
                styles.text,
                selectedVariant === variant && styles.selectedText,
              ]}
            >
              variant {index} - ${variant.price}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "grey",
    padding: 10,
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedCard: {
    backgroundColor: COLORS.yellow,
  },
  text: {
    color: COLORS.white,
  },
  selectedText: {
    color: "black",
  },
});

export default VariantCard;
