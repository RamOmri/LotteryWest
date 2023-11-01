import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text, COLORS } from "../styles";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, disabled && { backgroundColor: "grey" }]}
    >
      <Text fontType="SmallTitle">{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    padding: 16,
    margin: 5,
    backgroundColor: COLORS.yellow,
  },
});

export default Button;
