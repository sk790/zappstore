import { View, Text } from "react-native";
import React from "react";

export const CardView = ({ children }: any) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        backgroundColor: "white",
        paddingVertical: 12,
        borderRadius: 10,
        shadowColor: "#000",
        width: "80%",
        marginTop: 20,
        paddingHorizontal: 10,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      {children}
    </View>
  );
};

export const LogoutButtonView = ({ children }: any) => {
  return (
    <View
      style={{
        // marginHorizontal: 10,
        backgroundColor: "white",
        paddingVertical: 12,
        borderRadius: 30,
        shadowColor: "#000",
        width: "80%",
        marginTop: 20,
        paddingHorizontal: 10,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      {children}
    </View>
  );
};
