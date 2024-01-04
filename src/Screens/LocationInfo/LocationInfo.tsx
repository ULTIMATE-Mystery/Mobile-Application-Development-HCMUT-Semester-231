import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, Image, StyleSheet } from "react-native";
import { RootScreens } from "..";
import BottomBar from "@/Components/BottomBar";
import TopBar from "@/Components/TopBar";

type LocationDetail = {
  id: number;
  name: string;
  image: string;
  address: string;
  mapImage: string;
};

// Trực tiếp đặt mảng locationInfo ở đây
const locationInfo: LocationDetail[] = [
  {
    id: 1,
    name: "Tòa A1",
    image: "",
    address: "Đi thẳng vào từ cổng chính...",
    mapImage: "../../../assets/images/title.png",
  },
  {
    id: 2,
    name: "Tòa A2",
    image: "",
    address: "Từ cổng chính đi thẳng, rẽ phải...",
    mapImage: "../../../assets/images/title.png",
  },
  // Thêm các thông tin địa điểm khác nếu cần
];

type LocationInfoProps = {
  onNavigate: (screen: RootScreens) => void;
  route: { params: { id: number } };
};

export const LocationInfo = (props: LocationInfoProps) => {
  const [locationDetail, setLocationDetail] = useState<LocationDetail | null>(null);

  useEffect(() => {
    const { id } = props.route.params;
    const foundLocation = locationInfo.find((location) => location.id === id);

    if (foundLocation) {
      setLocationDetail(foundLocation);
    }
  }, [props.route.params]);

  if (!locationDetail) {
    // Handle loading state or error state
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TopBar />
      </View>
      <StatusBar barStyle="light-content" />

      {/* Location details */}
      <View style={styles.locationDetails}>
        <Text style={styles.locationName}>{locationDetail.name}</Text>
        <Text style={styles.locationAddress}>{locationDetail.address}</Text>
        <Image source={{ uri: locationDetail.mapImage }} style={styles.locationImage} />
        <Image source={{ uri: locationDetail.image }} style={styles.image} />
        {/* Add other details as needed */}
      </View>

      {/* Bottom Bar */}
      <View style={styles.bottombar}>
        <BottomBar
          activeScreen={RootScreens.LOCATIONINFO}
          onNavigate={props.onNavigate}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image:{
    height: 100,
    width: 100,
  },
  topbar: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  locationDetails: {
    flex: 8,
    paddingHorizontal: 16,
    paddingTop: 16,
    alignItems: 'center',
  },
  bottombar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  locationImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  locationName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  locationAddress: {
    fontSize: 16,
    color: '#555', // Màu chữ tối ưu hơn
    marginBottom: 16,
  },
});

export default LocationInfo;
