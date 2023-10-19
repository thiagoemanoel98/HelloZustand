import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { AvailableProducts } from "./src/components/AvailableProducts/AvailableProducts";
import { CartProducts } from "./src/components/CartProducts/CartProducts";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AvailableProducts />
      <CartProducts />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
