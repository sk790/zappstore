import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import SpCard from "@/components/SpCard";
import NoService from "@/components/NoService";
import { AuthContext } from "@/context/authContext";
import MapView, { Marker } from "react-native-maps";
import Loading from "@/components/Loading";

const getsp = () => {
  const { service } = useLocalSearchParams();
  const { user } = useContext(AuthContext);
  const [sp, setSp] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);

  const centralLatitude = 29.9079687;
  const centralLongitude = 77.9444166;
  const rangeInKm = 10; // desired range in kilometers

  const latitudeDelta = rangeInKm / 110.574;
  const longitudeDelta =
    rangeInKm / (111.32 * Math.cos((centralLatitude * Math.PI) / 180));

  useEffect(() => {
    const getSp = async () => {
      setLoading(true);
      const res = await fetch(
        "https://zappstore-backend.onrender.com/api/sp/get-sp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ service: service }),
        }
      );
      const data = await res.json();
      if (data) {
        setLoading(false);
        setSp(data);
        console.log(data.sp.length);
        
      } else {
        setLoading(false);
        console.log("error");
      }
    };
    getSp();
  }, [service]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {sp && sp.sp.length > 0 ? (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: centralLatitude,
              longitude: centralLongitude,
              latitudeDelta: latitudeDelta,
              longitudeDelta: longitudeDelta,
            }}
          >
            {sp?.sp.map((sp: any) => (
              <Marker
                key={sp._id}
                coordinate={{
                  latitude: sp.provider.location.latitude,
                  longitude: sp.provider.location.longitude,
                }}
                onPress={() => {
                  router.push({
                    pathname: "/spprofile",
                    params: { sp: JSON.stringify(sp) },
                  });
                }}
                title={"tittle"}
                description={`Location of ${sp.provider?.fullName}`}
              />
            ))}
          </MapView>
        </View>
      ) : (
        <NoService />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default getsp;
