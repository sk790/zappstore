import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import SpCard from "@/components/SpCard";
import NoService from "@/components/NoService";

const getsp = () => {
  const { service } = useLocalSearchParams();

  const sp = [
    {
      service: {
        provider: {
          name: "Saurabh",
          email: "saurabh@123",
          password: "password",
          role: "sp",
          location: "Roorkee",
          profile:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s?height=200&width=200",
        },
        serviceType: "Plumber",
        image:
          "https://5.imimg.com/data5/SELLER/Default/2024/1/378182076/YK/TG/SZ/32250902/electrical-work-service-for-hotel-500x500.png?width=200&height=200",
        description:
          "I am a professional electrician and I can fix your electrics",
        price: 50,
        available: true,
        rating: 5.6,
        reviews: [],
      },
    },
    {
      service: {
        provider: {
          name: "Savan",
          email: "saurabh@123",
          password: "password",
          role: "sp",
          location: "Saharanpur",
          profile:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s?height=200&width=200",
        },
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
      service: {
        provider: {
          name: "Prabhat",
          email: "saurabh@123",
          password: "password",
          role: "sp",
          location: "Laksar",
          profile:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s?height=200&width=200",
        },
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

  const filteredSp = sp.filter((s) => s.service.serviceType === service);
  return (
    <View className="justify-center">
      {filteredSp.length !== 0 ? (
        <>
          <Text className="text-2xl text-center" style={{ marginTop: 20 }}>
            Available Service Providers
          </Text>
          <FlatList
            data={filteredSp}
            renderItem={({ item }) => (
              <SpCard>
                <View className="flex-row gap-4 mx-2">
                  <Image
                    source={{ uri: item.service.provider.profile }}
                    style={{ width: 100, height: 100 }}
                  />
                  <View className="flex-1 flex-col">
                    <Text>Name: {item.service.provider.name}</Text>
                    <Text>Location: {item.service.provider.location}</Text>
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
                        className="bg-blue-500 p-2  rounded-lg"
                        onPress={() => {
                          router.push({
                            pathname: "/booking",
                            params: {
                              bookingDetails: item.service.provider.name,
                            },
                          });
                        }}
                      >
                        <Text className="text-white">Book Now</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        className="bg-blue-500 p-2  rounded-lg"
                        onPress={() => {
                          router.push({
                            pathname: "/spprofile",
                            params: { name: item.service.provider.name },
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
