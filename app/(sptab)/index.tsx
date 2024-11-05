import { ScrollView } from "react-native";
import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import { AuthContext } from "@/context/authContext";
import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const { user } = useContext(AuthContext);
  if(!user){
    return <Redirect href="/login" />
  }
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Navbar title="ZappStore" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default index;
