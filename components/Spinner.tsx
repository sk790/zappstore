import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Spinner = ({ size, color }: { size: number; color: string }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", // Optional: semi-transparent background
  },
});

export default Spinner;
