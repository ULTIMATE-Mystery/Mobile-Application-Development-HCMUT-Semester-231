import React from "react";
import * as Localization from "expo-localization";
import AppLoading from 'expo-app-loading';
import { i18n, Language } from "@/Localization";
import { NativeBaseProvider } from "native-base";
import { store, persistor } from "@/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApplicationNavigator } from "./Navigation";
import {useFonts} from 'expo-font';

i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = Language.ENGLISH;

export default function App() {
  let [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../assets/font/static/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/font/static/Montserrat-Bold.ttf'),
    'Montserrat-ExtraBold': require('../assets/font/static/Montserrat-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
