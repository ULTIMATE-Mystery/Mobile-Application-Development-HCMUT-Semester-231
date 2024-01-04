import React, { useState } from "react";
import { View, Text, StatusBar, FlatList, StyleSheet,ListRenderItemInfo,TouchableOpacity } from "react-native";
import { RootScreens } from "..";
import BottomBar from "@/Components/BottomBar";
import TopBar from "@/Components/TopBar";
import { useNavigation } from "@react-navigation/native";

type ScanHistoryItem = {
  id: number;
  date: string;
  result: string;
};


export const History = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const [scanHistory, setScanHistory] = useState<ScanHistoryItem[]>([
    { id: 1, date: "2024-01-04", result: "Tòa A1" },
    { id: 2, date: "2024-01-04", result: "Tòa A2" },
    // ... thêm dữ liệu lịch sử quét khác
  ]);
  const navigation = useNavigation();

  const handlePressInfo = () => {
    navigation.navigate(RootScreens.LOCATIONINFO);
  };
  const renderItem = ({ item }: ListRenderItemInfo<ScanHistoryItem>) => (
    <View style={styles.historyItem}>
      <TouchableOpacity style={styles.bottombar} onPress={handlePressInfo}>

      <Text style={styles.historyResult}>{item.result}</Text>
      <Text style={styles.historyDate}>{item.date}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TopBar />
      </View>
      <StatusBar barStyle="light-content" />

      {/* Lịch sử quét */}
      <View style={styles.historyContainer}>
        <Text style={styles.title}>Lịch sử quét</Text>
        <FlatList
          data={scanHistory}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>

      {/* Bottom Bar */}
      <View style={styles.bottombar}>
        <BottomBar
          activeScreen={RootScreens.SCANHISTORY}
          onNavigate={props.onNavigate}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  topbar: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  historyContainer: {
    flex: 8, 
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  bottombar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    justifyContent: 'center',
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  historyDate: {
    fontSize: 16,
  },
  historyResult: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1488D8', // Màu sắc tùy thuộc vào kết quả quét
  },
});

// export default History;