import React, { FC } from "react";
import { Text as RNText, StyleSheet } from "react-native";
import { COLORS } from "./Colors";

type TextProps = Pick<
  React.ComponentProps<typeof RNText>,
  "style" | "children"
> & {
  fontType: "Title" | "Text";
};

function getStyle(fontType: TextProps["fontType"]) {
  switch (fontType) {
    case "Title":
      return styles.title;
    case "Text":
      return styles.text;
    default:
      break;
  }
}

const Text: FC<TextProps> = ({ style, children, fontType }) => {
  const computedStyle = getStyle(fontType);

  return <RNText style={[style, computedStyle]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  text: {
    color: COLORS.white,
    fontSize: 14,
  },
});

export default Text;
