import "../global.css";
import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "../context/authContext";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(usertab)" options={{ headerShown: false }} />
        <Stack.Screen name="(sptab)" options={{ headerShown: false }} />

        <Stack.Screen
          name="index"
          options={{ headerShown: true, title: "Home" }}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: true,
            title: "Login",
            headerTintColor: "teal",
          }}
        />
        <Stack.Screen
          name="signup"
          options={{ headerShown: true, title: "Signup" }}
        />
        <Stack.Screen
          name="(screens)/menu"
          options={{ headerShown: true, title: "Settings" }}
        />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
