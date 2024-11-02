import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import {useContext} from 'react'

const index = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-red-500 text-center">index</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
