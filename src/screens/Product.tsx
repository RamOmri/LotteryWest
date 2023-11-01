import { Image } from "react-native";
import React from "react";

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

export { ProductContent };
