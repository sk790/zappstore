import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  PermissionsAndroid,
} from "react-native";
import { Link, Redirect, router } from "expo-router";
import { AuthContext } from "@/context/authContext";
import Spinner from "@/components/Spinner";
import Geolocation from "react-native-geolocation-service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const { setUserInfo, } = useContext(AuthContext);

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };
  if (user?.role === "user") {
    return <Redirect href="/(usertab)/" />;
  }
  if (user?.role === "sp") {
    return <Redirect href="/(sptab)/" />;
  }
  const handleLogin = async () => {
    if (!validatePhoneNumber(mobileNumber)) {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 10-digit phone number."
      );
      return;
    }
    setLoading(true);
    const res = await fetch(
      "https://zappstore-backend.onrender.com/api/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: mobileNumber,
          password,
        }),
      }
    );
    const data = await res.json();
    if (data.user) {
      setLoading(false);
      setUserInfo(data.user);
      router.push("/(usertab)/");
    } else {
      setLoading(false);
      Alert.alert(
        "Invalid credentials",
        "Please check your credentials and try again"
      );
    }
  };

  const continueWithGoogle = () => {};
  

  return (
    <SafeAreaView className="flex-1 pt-32 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.content}>
            <Text className="text-3xl font-bold text-center text-teal-500 pb-5">Welcome Back</Text>

            <Text style={styles.inputLabel}>Mobile Number</Text>

            <View style={styles.phoneInputContainer}>
              <View style={styles.countryCode}>
                <Image
                  source={{ uri: "https://flagcdn.com/w20/in.png" }}
                  style={styles.flag}
                />
                <Text style={styles.countryCodeText}>+91</Text>
              </View>
              <TextInput
                style={styles.phoneInput}
                placeholder="Enter mobile number"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
                maxLength={10}
              />
            </View>

            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              placeholder="Enter Password"
              style={{
                borderColor: "#CCCCCC",
                borderWidth: 1,
                padding: 10,
                borderRadius: 5,
                marginBottom: 15,
              }}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: "#007AFF",
                padding: 10,
                borderRadius: 5,
              }}
              onPress={handleLogin}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                {loading ? <Spinner size={25} color="white" /> : "Login"}
              </Text>
            </TouchableOpacity>
            <Link href={"/signup"} style={{ textAlign: "center" }}>
              <Text style={styles.loginText}>
                Create a new account? <Text style={styles.link}>signup</Text>
              </Text>
            </Link>
          </View>
          <TouchableOpacity onPress={continueWithGoogle}>
            <Text
              style={{
                textAlign: "center",
                color: "#00A3E0",
                backgroundColor: "white",
              }}
            >
              Continue with google
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 80,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#00A3E0",
    marginBottom: 20,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  accountTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  accountTypeButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    marginHorizontal: 5,
  },
  selectedAccountType: {
    borderColor: "#00A3E0",
    backgroundColor: "#F0F9FF",
  },
  accountTypeText: {
    marginTop: 5,
    color: "#CCCCCC",
  },
  selectedAccountTypeText: {
    color: "#00A3E0",
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  phoneInputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    marginBottom: 20,
  },
  countryCode: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: "#CCCCCC",
  },
  flag: {
    width: 20,
    height: 15,
    marginRight: 5,
  },
  countryCodeText: {
    fontWeight: "bold",
  },
  phoneInput: {
    flex: 1,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 4,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "#00A3E0",
    borderColor: "#00A3E0",
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 14,
    color: "#666666",
  },
  link: {
    color: "#00A3E0",
  },
  signUpButton: {
    backgroundColor: "#00A3E0",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  signUpButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    color: "#666666",
    paddingTop:10
  },
});
