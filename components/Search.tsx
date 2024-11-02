import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        backgroundColor: "white",
        paddingVertical:12,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          gap:5
        }}
      >
        <Ionicons name="search" size={25} color="gray" />
        <TextInput placeholder="What you looking for?" />
      </View>
    </View>
  );
};

export default Search;
