import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/Navbar";
import { AuthContext } from "@/context/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, router } from "expo-router";
import { CardView, LogoutButtonView } from "@/components/CardView";
import Spinner from "@/components/Spinner";

const profile = () => {
  const { user, setUserInfo } = useContext(AuthContext);
  const [fullName, setfullName] = useState(user?.fullName);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState(user?.password);
  const [address, setAddress] = useState(user?.address);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    setUserInfo(null);
    router.push("/login");
  };
  if (!user) {
    return <Redirect href="/login" />;
  }

  const handleUpdate = async () => {
    setLoading(true);
    const res = await fetch(
      "https://zappstore-backend.onrender.com/api/user/update-profile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          mobile: user.mobile,
          password: password,
          address: address,
        }),
      }
    );
    const data = await res.json();
    if (data.user) {
      setLoading(false);
      setUserInfo(data.user);
      Alert.alert("Update Profile", "Profile updated successfull.");
    }
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Navbar title="Profile" />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/profile.webp")}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginTop: 20,
              }}
            />
            <CardView>
              <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
                Full Name
              </Text>
              <TextInput
                placeholder={user?.fullName}
                style={{
                  width: "100%",
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                }}
                value={fullName}
                onChangeText={setfullName}
              />
            </CardView>
            <CardView>
              <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Email</Text>
              <TextInput
                style={{
                  width: "100%",
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                }}
                value={email}
                onChangeText={setEmail}
              />
            </CardView>
            <CardView>
              <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
                Password
              </Text>
              <TextInput
                style={{
                  width: "100%",
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                }}
                value={password}
                onChangeText={setPassword}
              />
            </CardView>

            <CardView>
              <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
                Mobile
              </Text>
              <TextInput
                style={{
                  width: "100%",
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                }}
                value={user?.mobile}
                editable={false}
              />
            </CardView>
            <CardView>
              <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
                Address
              </Text>
              <TextInput
                style={{
                  width: "100%",
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                }}
                value={address}
                onChangeText={setAddress}
              />
            </CardView>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
            <LogoutButtonView>
              <TouchableOpacity onPress={handleUpdate} disabled={loading}>
                <Text
                  style={{
                    color: "gray",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {loading ? <Spinner size={25} color="#00896AFF" /> : "Update"}
                </Text>
              </TouchableOpacity>
            </LogoutButtonView>
            <LogoutButtonView>
              <TouchableOpacity onPress={handleLogout} disabled={loading}>
                <Text
                  style={{
                    color: "gray",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {loading ? <Spinner size={25} color="#007AFF" /> : "Logout"}
                </Text>
              </TouchableOpacity>
            </LogoutButtonView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default profile;
