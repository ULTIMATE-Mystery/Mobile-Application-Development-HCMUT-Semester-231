import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { RootScreens } from "..";
import { useNavigation } from "@react-navigation/native";

export const Home = (props: {
  onNavigate: (screen: RootScreens) => void;
}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [inputID, setInputID] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // Handle QR code result
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const handleIDSubmit = () => {
    // Here you would navigate to the MAIN screen with the input ID
    navigation.navigate(RootScreens.GETID);;
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.overlay}>
        <Text style={styles.scanText}>Hướng camera về phía mã QR</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nhập mã ID"
        placeholderTextColor="#666" // Placeholder text color
        value={inputID}
        onChangeText={setInputID}
        onSubmitEditing={handleIDSubmit} // Handle 'enter' key press
        returnKeyType="go" // Set the return key to 'go' to indicate submission
        keyboardType="default" // Use the default keyboard
      />
      {scanned && (
        <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
          <Text style={styles.buttonText}>Tap to Scan Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  scanText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    position: 'absolute',
    bottom: '20%',
    left: '10%',
    right: '10%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    color: '#000',
  },
  button: {
    position: 'absolute',
    bottom: '10%',
    alignSelf: 'center',
    backgroundColor: '#007bff',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});