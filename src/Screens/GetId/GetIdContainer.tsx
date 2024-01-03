import React from "react";
import { GetId } from "./GetId";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type GetIdScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.GETID
>;

export const GetIdContainer = ({
  navigation,
}: GetIdScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <GetId onNavigate={onNavigate} />;
};
