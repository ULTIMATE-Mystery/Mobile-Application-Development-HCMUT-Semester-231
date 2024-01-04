import React from "react";
import { ImageBackground, Platform, StatusBar, TextInput } from 'react-native';
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RootScreens } from "..";
import BottomBar from "@/Components/BottomBar";
import { Button } from "native-base";

export const Setting = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
    <View style={styles.container}>
        <View style={styles.top}> 
          <View style={styles.head}>
            <Button style={styles.btnback}>Trở về</Button>
            <Image source={require('../../../assets/image/Logo.png')} style={styles.logo} />
          </View>
          <View style={styles.ttitle}>
            <Image source={require('../../../assets/image/bi_gear-fill.png')} style={styles.icon}/>
            <Text style={styles.title}>Cài đặt</Text>
          </View>
        </View>

        <View style={styles.languageNotification}>
          <View style={styles.languageContainer}>
            <Text style={styles.label}>Ngôn ngữ:</Text>
            <Text style={styles.language}>Vi/En</Text>
          </View>
          <View style={styles.notificationContainer}>
            <Text style={styles.label}>Thông báo:</Text>
            <Text style={styles.notificationCount}>(0)</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.profileEdit}>
          <Text style={styles.profileEditText}>Chỉnh sửa hồ sơ</Text>
        </TouchableOpacity>


        <View style={styles.bottom}>
        <ImageBackground source={require('../../../assets/image/setting.png')} style={styles.bottombg}/>
        <View style={styles.bottombar}>
          <BottomBar
            activeScreen={RootScreens.SETTING}
            onNavigate={props.onNavigate}
            />
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1488D8',
    backgroundColor: '#fff',
  },
  top:{
    backgroundColor: '#1488D8',
    justifyContent: 'center',
  },
  head:{
    flexDirection: 'row'
  },
  btnback:{
    width: 40,
    height: 20,
    backgroundColor: ""
  },
  logo: {
    width: 150,
    height:150,
    resizeMode: 'contain',
  },
  ttitle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    color: '#FFFFFF',
    marginBottom: 10,
    fontFamily: 'Montserrat-Bold',
  },

  icon:{
    height: 24,
    width: 24,
    marginRight: 10,
  },
  languageNotification: {
    marginBottom: 20,
  },
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  language: {
    color: '#fff',
    fontSize: 16,
  },
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationCount: {
    color: '#fff',
    fontSize: 16,
  },
  profileEdit: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileEditText: {
    color: '#1488D8',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
  bottom:{
    backgroundColor: '8ED1FF',
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottombg:{
    bottom:0,
    resizeMode: 'contain',
  },
  bottombar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
