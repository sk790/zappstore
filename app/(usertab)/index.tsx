import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/Navbar";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import SliderBanner from "@/components/Banner";
import { AuthContext } from "@/context/authContext";
import Search from "@/components/Search";
import { Redirect, router } from "expo-router";

const Home = () => {
  const { user, loadUser, location } = useContext(AuthContext);
  useEffect(() => {
    loadUser();
  }, [user]);
  if (!user) {
    return <Redirect href="/login" />;
  }

  const services = [
    {
      provider: "5d5d6d8a5d5d6d8a5d5d6d8a",
      serviceType: "Electrician",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/1/378182076/YK/TG/SZ/32250902/electrical-work-service-for-hotel-500x500.png?width=200&height=200",
      description:
        "I am a professional electrician and I can fix your electrics",
      price: 50,
      available: true,
      rating: 4.5,
      reviews: [],
    },
    {
      provider: "5d5d6d8a5d5d6d8a5d5d6d8a",
      serviceType: "Plumber",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/1/378182076/YK/TG/SZ/32250902/electrical-work-service-for-hotel-500x500.png?width=200&height=200",
      description:
        "I am a professional electrician and I can fix your electrics",
      price: 50,
      available: true,
      rating: 4.5,
      reviews: [],
    },
    {
      provider: "5d5d6d8a5d5d6d8a5d5d6d8a",
      serviceType: "Machanic",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/1/378182076/YK/TG/SZ/32250902/electrical-work-service-for-hotel-500x500.png?width=200&height=200",
      description:
        "I am a professional electrician and I can fix your electrics",
      price: 50,
      available: true,
      rating: 4.5,
      reviews: [],
    },
    {
      provider: "5d5d6d8a5d5d6d8a5d5d6d8a",
      serviceType: "Electrician",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/1/378182076/YK/TG/SZ/32250902/electrical-work-service-for-hotel-500x500.png?width=200&height=200",
      description:
        "I am a professional electrician and I can fix your electrics",
      price: 50,
      available: true,
      rating: 4.5,
      reviews: [],
    },
  ];
  // useEffect(() => {
    
  //   router.push({ pathname: "/spprofile", params: { service:"Plumber" } });
  // },[])
  const getSp = (service: string) => {
    router.push({ pathname: "/getsp", params: { service } });
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Navbar title="ZappStore" />
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
              Welcome, {user && user.fullName ? user.fullName : user.mobile}
              {user?.role === "sp" ? " (SP)" : " (User)"}
            </Text>
            <View
              style={{
                backgroundColor: "white",
                padding: 5,
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Text style={styles.title}>What Are You</Text>
              <Text style={styles.title}>Looking For</Text>
              <Text style={styles.title}>Today</Text>
            </View>
          </View>
          <Search />
          <View style={{ flex: 1, flexDirection: "column" }}>
            <SliderBanner />
            <Text style={styles.categoriesTitle}>Most Used Services</Text>
            <View style={styles.categoriesContainer}>
              <FlatList
                data={services}
                horizontal
                showsHorizontalScrollIndicator={false}
                // keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.categoryItem}
                    onPress={() => {
                      getSp(item.serviceType);
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        width: 100,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 5,
                        backgroundColor: "white",
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={styles.categoryIcon}
                      />
                      <Text style={styles.categoryText}>
                        {item.serviceType}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                contentContainerStyle={styles.listContainer}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    // paddingHorizontal: 10,
  },
  categoryItem: {
    // backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  categoryText: {
    fontSize: 12,
    color: "#333",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  logo: {
    width: 100,
    height: 30,
  },
  placeholder: {
    width: 24,
  },
  content: {
    padding: 16,
  },
  greeting: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  notificationIcon: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  bannerContainer: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  bannerImage: {
    width: "100%",
    height: 150,
  },
  bannerContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    justifyContent: "center",
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 12,
  },
  bookNowButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  bookNowText: {
    color: "#fff",
    fontWeight: "bold",
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  categoriesContainer: {
    paddingVertical: 10,
  },
  categoryIcon: {
    width: 90,
    height: 60,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
