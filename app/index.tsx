import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "@/context/authContext";
import * as Location from "expo-location";

const Home = () => {
  const [location, setLocation] = useState<null | any>(null);
  const [errorMsg, setErrorMsg] = useState<String | null>(null);

  const { user, setUserInfo } = useContext(AuthContext);
  AsyncStorage.getItem("user").then((value) => {
    if (value) {
      setUserInfo(JSON.parse(value));
    }
  });
  useEffect(() => {
    (async () => {
      // Request location permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        // return;
      }

      // Get current location
      let loc = await Location.getCurrentPositionAsync({});
      // console.log(loc.coords);
      const res = await fetch(
        "https://zappstore-backend.onrender.com/api/user/update-location",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            coords: loc.coords,
            mobile: user?.mobile,
          }),
        }
      );
      const data = await res.json();
      if (data.user) {
        setUserInfo(data.user);
        AsyncStorage.setItem("user", JSON.stringify(data.user));
      }
    })();
  }, []);

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
