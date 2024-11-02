import { View, Text } from "react-native";
import React from "react";

const SpCard = ({ children }: any) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        // marginRight:10,
        backgroundColor: "white",
        paddingVertical: 12,
        borderRadius: 10,
        shadowColor: "#000",
        // width: "100%",
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

export default SpCard;
