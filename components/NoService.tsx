import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

const NoService = () => {
  return (
    <SafeAreaView>
      <View className="flex items-center flex-col justify-center mt-52">
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcV9XSSmOqlVRTqvy8J_RrX8WclK4kJEGm4A&s",
          }}
          style={{ width: 200, height: 200, marginTop: 100 }}
        />
        <Text
          className="text-2xl"
          style={{ fontWeight: "bold", marginTop: 10 }}
        >
          No Service Available
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NoService;
