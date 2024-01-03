import React from "react";
import { Platform, StatusBar } from 'react-native';
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { StatusBar } from "expo-status-bar";
import { RootScreens } from "..";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export const Welcome = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1488D8', '#1488D8', '#FFFFFF']}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <Image source={require('../../../assets/image/maproute.png')} style={styles.illustration1} />
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/image/Logo.png')} style={styles.logo} />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.shadow}>
            <Text style={styles.greeting}>Chào bạn!</Text>
          </View>
          <View style={styles.shadow}>
            <Text style={styles.description}>
              Chúng tôi là <Text style={styles.boldText}>BKWAI</Text> - Ứng dụng tìm kiếm thông tin thông qua mã QR
            </Text>
          </View>
          <View style={styles.shadow}>
            <Text style={styles.slogan}>Quét để khám phá - Bản đồ khuôn viên trường chỉ qua một lần chạm</Text>
          </View>
        </View>

        <Image source={require('../../../assets/image/personwithmap.png')} style={styles.illustration2} />
        <TouchableOpacity
          style={[styles.button, styles.shadow]}
          onPress={() => props.onNavigate(RootScreens.MAIN)}
        >
        <Text style={styles.buttonText}>Bắt đầu ngay</Text>
        <Ionicons name="arrow-forward" size={45} color="#1488D8" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  illustration1: {
    marginTop: '11%',
    marginLeft: "-17%",
    position: 'absolute',
    width: 300, // Set the width as needed.
    height: '25%', // Set the height as needed.
    resizeMode: 'contain',   
  },
  logoContainer: {
    marginTop: '20%',
    width: '100%', // Takes the full width of the screen
    alignItems: 'center', // Centers the logo horizontally
  },
  textContainer: {
    marginTop: '10%',
    paddingHorizontal: 25, // Adjust padding as needed
    width: '100%', // Ensures the container takes the full width
  },
  greeting: {
    fontSize: 32,
    color: '#fff',
    marginBottom: '4%',
    textAlign: 'justify',
    fontFamily: 'Montserrat-Bold',
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'justify', // Justify the description text
    marginBottom: 20,
    fontFamily: 'Montserrat-Regular',
  },
  slogan: {
    fontSize: 23,
    color: '#fff',
    textAlign: 'justify', 
    fontFamily: 'Montserrat-Bold',
  },
  illustration2: {
    width: '90%', // Take the full width of the screen
    height: '40%', // Fixed height
    resizeMode: 'contain',
    position: 'absolute', // Position absolutely to take it out of the flow
    bottom: '1%', // Adjust this to place the image vertically where you want it
    left: '20%', // Start from the left edge
    alignSelf: 'center', // Center the image in the available space
  },
  button: {
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 35,
    paddingRight: 35,
    borderRadius: 45,
    bottom: '8%',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center', // Align items in the button
    justifyContent: 'center', // Center button content
    borderColor: '#1488D8',
    borderWidth: 2,
    alignSelf: 'center', // Center the button in the container
  },
  logo:{
    
  },
  buttonText: {
    fontSize: 30,
    color: 'black', // Adjust text color to match your design.
    fontFamily: 'Montserrat-Bold',
    marginRight: 8,
  },

  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  boldText: {
    fontWeight: '900',
  },
});