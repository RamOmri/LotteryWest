import React, { ReactNode } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { COLORS } from "../styles";

type ContainerProps = {
  children: ReactNode;
  style?: React.ComponentProps<typeof View>["style"];
};

const Container = ({ children, style }: ContainerProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.blue,
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
});

export default Container;
