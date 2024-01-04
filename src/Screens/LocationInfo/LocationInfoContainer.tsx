import React from "react";
import { LocationInfo } from "./LocationInfo";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type LocationInfoScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.LOCATIONINFO
>;

export const LocationInfoContainer = ({
  navigation,
}: LocationInfoScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <LocationInfo onNavigate={onNavigate} />;
};
