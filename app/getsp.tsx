import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext } from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import SpCard from "@/components/SpCard";
import NoService from "@/components/NoService";
import { AuthContext } from "@/context/authContext";

const getsp = () => {
  const { service } = useLocalSearchParams();
  const { user } = useContext(AuthContext);

  if (!user.address) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>
          Please update your address fist
        </Text>
        <Link
          href={"/(usertab)/profile"}
          style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}
        >
          <Text
            style={{
              color: "blue",
              fontSize: 16,
            }}
          >
            Go to profile
          </Text>
        </Link>
      </View>
    );
  }

  const sp = [
    {
      provider: {
        name: "Saurabh",
        email: "saurabh@123",
        password: "password",
        role: "sp",
        location: "Roorkee",
        profile:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s?height=200&width=200",
      },
      service: {
        serviceType: "Plumber",
        image:
          "https://5.imimg.com/data5/SELLER/Default/2024/1/378182076/YK/TG/SZ/32250902/electrical-work-service-for-hotel-500x500.png?width=200&height=200",
        description:
          "I am a professional electrician and I can fix your electrics",
        price: 50,
        available: false,
        rating: 5.6,
        reviews: [],
      },
    },
    {
      provider: {
        name: "Savan",
        email: "saurabh@123",
        password: "password",
        role: "sp",
        location: "Saharanpur",
        profile:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s?height=200&width=200",
      },
      service: {
        serviceType: "Electrician",
        image:
          "https://5.imimg.com/data5/SELLER/Default/2024/1/378182076/YK/TG/SZ/32250902/electrical-work-service-for-hotel-500x500.png?width=200&height=200",
        description:
          "I am a professional electrician and I can fix your electrics",
        price: 50,
        available: false,
        rating: 3.5,
        reviews: [],
      },
    },
    {
      provider: {
        name: "Prabhat",
        email: "saurabh@123",
        password: "password",
        role: "sp",
        location: "Laksar",
        profile:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s?height=200&width=200",
      },
      service: {
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
    },
  ];

  const filteredSp = sp.filter(
    (s) =>
      s.provider.location === user.address && s.service.serviceType === service
  );
  return (
    <View className="justify-center">
      {filteredSp.length !== 0 ? (
        <>
          <Text className="text-2xl text-center" style={{ marginTop: 20 }}>
            Available Service Providers for nearby {user.address}
          </Text>
          <FlatList
            data={filteredSp}
            renderItem={({ item }) => (
              <SpCard>
                <View className="flex-row gap-4 mx-2">
                  <Image
                    source={{ uri: item.provider?.profile }}
                    style={{ width: 100, height: 100 }}
                  />
                  <View className="flex-1 flex-col">
                    <Text>Name: {item.provider?.name}</Text>
                    <Text>Location: {item.provider?.location}</Text>
                    <Text>
                      Available:
                      {item.service.available ? (
                        <Text> yes</Text>
                      ) : (
                        <Text> no</Text>
                      )}
                    </Text>
                    <Text>Rating: {item.service.rating}</Text>
                    <View className="flex flex-row gap-2">
                      <TouchableOpacity
                        disabled={!item.service.available}
                        className="p-2 rounded-lg bg-blue-500"
                        onPress={() => {
                          router.push({
                            pathname: "/booking",
                            params: {
                              bookingDetails: item.provider?.name,
                            },
                          });
                        }}
                      >
                        <Text style={{ color: "white" }}>Book Now</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        className="bg-blue-500 p-2  rounded-lg"
                        onPress={() => {
                          router.push({
                            pathname: "/spprofile",
                            params: { name: item.provider?.name },
                          });
                        }}
                      >
                        <Text className="text-white">View Profile</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </SpCard>
            )}
          />
        </>
      ) : (
        <NoService />
      )}
    </View>
  );
};

export default getsp;
