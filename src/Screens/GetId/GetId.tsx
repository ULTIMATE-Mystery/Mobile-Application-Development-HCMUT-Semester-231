import React from "react";
import { Platform, StatusBar, TextInput, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BottomBar from "@/Components/BottomBar";
import TopBar from "@/Components/TopBar";
import { useNavigation } from "@react-navigation/native";
import { RootScreens } from "..";

export const GetId = (props: {
  onNavigate: (screen: RootScreens) => void;
}) => {
  const navigation = useNavigation();

  const handleExactID = () => {
    navigation.navigate(RootScreens.LOCATIONINFO);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8ED1FF', '#8ED1FF', '#FFFFFF']}
        style={styles.container}
      >
        <View style={styles.topbar}>
          <TopBar />
        </View>
        <StatusBar barStyle="light-content" />

        {/* Input Section */}
        <View style={styles.inputContainer}>
          <View style={styles.whiteBg}>
            <Text style={styles.inputLabel}>Mã ID bên dưới QR</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Nhập ID vào đây"
                placeholderTextColor="#ccc"
              />
              <View style={styles.hr}></View>
            </View>
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handleExactID}>
            <Text style={styles.submitButtonText}>Nhập</Text>
          </TouchableOpacity>
        </View>

        {/* Image Section */}
        <Image source={require('../../../assets/image/ScanningErr.png')} style={styles.illustration1} />

        {/* Bottom Bar */}
        <View style={styles.bottombar}>
          <BottomBar
            activeScreen={RootScreens.GETID}
            onNavigate={props.onNavigate}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1488D8',
  },
  inputContainer: {
    marginVertical: 15,
    paddingHorizontal: 25,
    width: '100%',
  },
  inputLabel: {
    fontSize: 20,
    color: '#000',
    marginVertical: 5,
    marginLeft: 10,
    fontFamily: 'Montserrat-Bold',
  },
  whiteBg: {
    backgroundColor: '#fff',
    borderRadius: 5
  },
  inputWrapper: {
    backgroundColor: '#fff',
    borderWidth: 0,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'stretch',
    borderColor: '#fff',
    borderBottomColor: '#000',
    borderBottomWidth: 0,
  },
  input: {
    fontSize: 16,
    color: 'black',
    paddingTop: 8,
    alignSelf: 'stretch',
    borderWidth: 0,
  },
  hr: {
    height: 1,
    backgroundColor: '#000',
    marginTop: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#1488D8',
    borderRadius: 8,
    paddingVertical: 5,
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: '40%',
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
  },
  illustration1: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  bottombar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  topbar: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
