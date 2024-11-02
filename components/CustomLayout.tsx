import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CustomLayout = ({ children }: any) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomLayout;
