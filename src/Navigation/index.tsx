import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { GetIdContainer } from "@/Screens/GetId";
import { RootScreens } from "@/Screens";
import { HistoryContainer
 } from "@/Screens/History";
import { SettingContainer } from "@/Screens/Setting";
import { LocationInfoContainer } from "@/Screens/LocationInfo";
export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.GETID]: undefined;
  [RootScreens.SCANHISTORY]: undefined;
  [RootScreens.SETTING]: undefined;
  [RootScreens.LOCATIONINFO]: undefined;
  [RootScreens.ACCOUNT]: undefined;
  [RootScreens.REGISTER]: undefined;

};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={RootScreens.WELCOME}
          component={WelcomeContainer}
        />
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{}}
        />
        <RootStack.Screen
          name={RootScreens.GETID}
          component={GetIdContainer}
          options={{}}
        />
        <RootStack.Screen
          name={RootScreens.SCANHISTORY}
          component={HistoryContainer}
          options={{}}
        />
        <RootStack.Screen
          name={RootScreens.SETTING}
          component={SettingContainer}
          options={{}}
        />
        <RootStack.Screen
          name={RootScreens.LOCATIONINFO}
          component={LocationInfoContainer}
          options={{}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
