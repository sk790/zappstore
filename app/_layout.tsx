import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import "../global.css";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: true }} />
    </Stack>
  );
};

export default RootLayout;
