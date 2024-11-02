import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const spprofile = () => {
  const { name } = useLocalSearchParams();
  return (
    <View>
      <Text>{name} ki profile</Text>
    </View>
  );
};

export default spprofile;
