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
  onSelectVariant: (index: number) => void;
};

const VariantCard: React.FC<VariantCardProps> = ({
  variants,
  onSelectVariant,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    variants[0]
  );

  const handlePress = (index: number) => {
    onSelectVariant(index);
    setSelectedVariant(variants[index]);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {variants.map((variant, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
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
