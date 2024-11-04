import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "@/context/authContext";
import { Ionicons } from "@expo/vector-icons";

const menu = () => {
  const { user, setUserInfo } = useContext(AuthContext);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    setUserInfo(null);
    router.push("/login");
  };

  const menuItems = [
    { label: "Change Language", color: "#985", icon: "home" },
    { label: "Suggestions", color: "#2365f2", icon: "home" },
    {
      label: "Upload KYC",
      color: "#2365f2",
      extra: "Not Verified",
      icon: "home",
      extraColor: "red",
    },
    { label: "Support", color: "#2365f2", icon: "home" },
    { label: "Privacy Policy", color: "#2365f2", icon: "home" },
    { label: "Terms and Conditions", color: "#2365f2", icon: "home" },
    { label: "Contact Us", color: "#2365f2", icon: "home" },
    { label: "Rate Us", color: "#2365f2", icon: "home" },
  ];

  return (
    <ScrollView contentContainerStyle={{ padding: 30 }}>
      <View style={{ flexDirection: "row", marginBottom: 1 }}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
          }}
          style={{ width: 75, height: 75, borderRadius: 100 }}
        />
        <View style={{ justifyContent: "center", paddingLeft: 10 }}>
          <Text style={{ fontWeight: "bold" }}>
            {user?.fullName || "Anonymous"}
          </Text>
          <TouchableOpacity onPress={() => router.push("/(usertab)/profile")}>
            <Text style={{ fontWeight: "500", color: "blue" }}>
              Edit my profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {menuItems.map((item, index) => (
        <View key={index} style={styles.menuItem}>
          <Ionicons name={item.icon as any} size={24} color={item.color} />
          <Text
            style={{
              fontWeight: "bold",
              color: item.color,
              fontSize: 16,
              paddingLeft: 10,
            }}
          >
            {item.label}
          </Text>
          {item.extra && (
            <View
              style={[styles.statusBadge, { backgroundColor: item.extraColor }]}
            >
              <Text style={styles.badgeText}>{item.extra}</Text>
            </View>
          )}
        </View>
      ))}

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  statusBadge: {
    padding: 3,
    borderRadius: 8,
    marginLeft: 5,
  },
  badgeText: {
    color: "white",
    fontSize: 10,
  },
  logoutButton: {
    padding: 10,
    backgroundColor: "teal",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default menu;
