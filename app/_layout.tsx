import "../global.css";
import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "../context/authContext";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(usertab)"
          options={{ headerShown: false, title: "Home" }}
        />
        <Stack.Screen
          name="(sptab)"
          options={{ headerShown: false, title: "Home" }}
        />

        <Stack.Screen
          name="index"
          options={{ headerShown: true, title: "Home" }}
        />
        <Stack.Screen
          name="login"
          options={{ headerShown: true, title: "Login" }}
        />
        <Stack.Screen
          name="signup"
          options={{ headerShown: true, title: "Signup" }}
        />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
