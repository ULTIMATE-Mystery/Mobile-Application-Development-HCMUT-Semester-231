import React from "react";
import { Setting } from "./Setting";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type SettingScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.SETTING
>;

export const SettingContainer = ({
  navigation,
}: SettingScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Setting onNavigate={onNavigate} />;
};
