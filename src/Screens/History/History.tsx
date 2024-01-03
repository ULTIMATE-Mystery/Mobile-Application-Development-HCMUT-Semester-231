import React from "react";
import { Platform, StatusBar, FlatList } from 'react-native';
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RootScreens } from "..";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import BottomBar from "@/Components/BottomBar";
import TopBar from "@/Components/TopBar";

export const History = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1488D8', '#1488D8', '#FFFFFF']}
        style={styles.container}
      >
        <View style={styles.topbar}>
          <TopBar/>
        </View>
        <StatusBar barStyle="light-content" />

        {/* Input Section */}
        
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
    marginTop: '20%',
    paddingHorizontal: 25,
    width: '100%',
  },
  inputLabel: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
    fontFamily: 'Montserrat-Bold',
  },
  whiteBg:{
    backgroundColor: '#fff',
    borderRadius: 5
  },
  inputWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'stretch',
    borderColor: '#fff',
    borderBottomColor: '#000',
  },
  input: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 12,
    alignSelf: 'stretch',
  },
  submitButton: {
    backgroundColor: '#1488D8',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: '40%', // Adjust as needed
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
  topbar:{
    flex: 1,
    justifyContent: 'flex-start'
  }
});
