// TopBar.tsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <Image source={require('../../assets/image/Logo.png')} style={styles.logo} />
      <Image source={require('../../assets/image/Vector.png')} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: '#1488D8', // Background color for the top bar
  },
  logo:{
    width: 130,
    height: 150,
    resizeMode: 'contain',
  
},
  icon: {
    width: 30,
    height:150,
    resizeMode: 'contain',
  },
});

export default TopBar;
