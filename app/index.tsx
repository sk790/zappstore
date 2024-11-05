import { View, Text } from "react-native";
import React from "react";
import {useContext} from "react"
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "@/context/authContext";

const Home = () => {
  const { user, setUserInfo } = useContext(AuthContext);
  AsyncStorage.getItem("user").then((value) => {
    if (value) {
      setUserInfo(JSON.parse(value));
    }
  });

  if (user && user.role === "sp") {
    return <Redirect href="/(sptab)/" />;
  } else if (user && user.role === "user") {
    return <Redirect href="/(usertab)/" />;
  } else {
    return <Redirect href="/login" />;
  }
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
