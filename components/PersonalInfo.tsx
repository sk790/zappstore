import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // Import the image picker
import React, { useContext, useState } from "react";
import { CardView, LogoutButtonView } from "./CardView";
import { AuthContext } from "@/context/authContext";
import Spinner from "./Spinner";

const PersonalInfo = () => {
  const { user } = useContext(AuthContext);
  const [state, setState] = useState({
    loading: false,
    profileImage: null,
  });

  const pickImage = async (): Promise<void> => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "You need to enable permission to access photos."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setState((prevState: any) => ({
        ...prevState,
        profileImage: result.assets[0].uri,
      }));
    }
  };

  const handleUpdate = () => {
    // Update logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={
            state.profileImage
              ? { uri: state.profileImage }
              : require("../assets/images/profile.webp")
          }
          style={styles.profileImage}
        />
      </TouchableOpacity>

      {/* Multiple Card Views for each input */}
      <CardView>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder={user?.fullName || "Enter full name"}
          style={styles.input}
          // value={state.fullName}
          // onChangeText={(text) => setState({ ...state, fullName: text })}
        />
      </CardView>

      <CardView>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder={user?.email || "Enter email"}
          style={styles.input}
          // value={state.email}
          // onChangeText={(text) => setState({ ...state, email: text })}
        />
      </CardView>

      <CardView>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter password"
          secureTextEntry
          style={styles.input}
          // value={state.password}
          // onChangeText={(text) => setState({ ...state, password: text })}
        />
      </CardView>

      <CardView>
        <Text style={styles.label}>Mobile</Text>
        <TextInput
          placeholder="Enter mobile number"
          style={styles.input}
          value={user?.mobile}
          editable={false}
        />
      </CardView>

      <CardView>
        <Text style={styles.label}>Mobile</Text>
        <TextInput
          placeholder="Enter mobile number"
          style={styles.input}
          value={user?.mobile}
          editable={false}
        />
      </CardView>

      <CardView>
        <Text style={styles.label}>Mobile</Text>
        <TextInput
          placeholder="Enter mobile number"
          style={styles.input}
          value={user?.mobile}
          editable={false}
        />
      </CardView>

      <CardView>
        <Text style={styles.label}>Mobile</Text>
        <TextInput
          placeholder="Enter mobile number"
          style={styles.input}
          value={user?.mobile}
          editable={false}
        />
      </CardView>

      <CardView>
        <Text style={styles.label}>Mobile</Text>
        <TextInput
          placeholder="Enter mobile number"
          style={styles.input}
          value={user?.mobile}
          editable={false}
        />
      </CardView>

      <LogoutButtonView>
        <TouchableOpacity onPress={handleUpdate} disabled={state.loading}>
          <Text style={styles.updateButtonText}>
            {state.loading ? <Spinner size={25} color="#00896AFF" /> : "Update"}
          </Text>
        </TouchableOpacity>
      </LogoutButtonView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingVertical: 5,
  },
  updateButtonText: {
    color: "gray",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default PersonalInfo;
