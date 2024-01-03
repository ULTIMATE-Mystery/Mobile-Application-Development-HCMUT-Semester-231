import React from 'react';
import { View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { RootScreens } from '@/Screens';

const BottomBar = (props: {
  activeScreen: RootScreens; // Pass the active screen as a prop
  onNavigate: (screen: RootScreens) => void;
}) => {
  const { activeScreen, onNavigate } = props;

  const handlePress = (screen: RootScreens) => {
    if (activeScreen !== screen) {
      onNavigate(screen);
    }
  };

  const getBackgroundImage = () => {
    switch (activeScreen) {
      case RootScreens.SCANHISTORY:
        return require('../../assets/image/bottom1.png');
      case RootScreens.MAIN:
        return require('../../assets/image/bottom2.png');
      case RootScreens.SETTING:
        return require('../../assets/image/bottom3.png');
      default:
        return require('../../assets/image/bottom2.png'); // Default background image
    }
  };

  return (
    <ImageBackground
      source={getBackgroundImage()}
      style={styles.bottomBar}
      resizeMode="cover"
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeScreen === RootScreens.SCANHISTORY && styles.activeButton,
          ]}
          onPress={() => handlePress(RootScreens.SCANHISTORY)}
        >
          {/* You can customize the icon for each button */}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeScreen === RootScreens.MAIN && styles.activeButton,
          ]}
          onPress={() => handlePress(RootScreens.MAIN)}
        >
          {/* Icon for second button */}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeScreen === RootScreens.SETTING && styles.activeButton,
          ]}
          onPress={() => handlePress(RootScreens.SETTING)}
        >
          {/* Icon for third button */}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  activeButton: {
    backgroundColor: 'transparent',
  },
});

export default BottomBar;
