import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "@/context/authContext";
import { Redirect } from "expo-router";
import Navbar from "@/components/Navbar";
import PersonalInfo from "@/components/PersonalInfo";
import ServiceInfo from "@/components/ServiceInfo";
import ShopInfo from "@/components/ShopInfo";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("Personal Info");

  const tabs = ["Personal Info", "Service Info", "Shop Info"];

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navbar title="Profile" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flex: 1, backgroundColor: "white" }}
      >
        {tabs.map((tab) => (
          <View
            style={{
              borderBottomColor: activeTab === tab ? "#007aff" : "transparent",
              borderBottomWidth: 2,
            }}
          >
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={{
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: activeTab === tab ? "bold" : "normal",
                  color: activeTab === tab ? "#007aff" : "#333",
                }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Tab Content with Vertical Scroll */}
      <ScrollView contentContainerStyle={{ backgroundColor: "white" }}>
        {activeTab === "Personal Info" && <PersonalInfo />}
        {activeTab === "Service Info" && <ServiceInfo />}
        {activeTab === "Shop Info" && <ShopInfo />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
