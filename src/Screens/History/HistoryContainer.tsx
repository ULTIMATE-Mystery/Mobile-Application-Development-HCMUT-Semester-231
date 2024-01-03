import React from "react";
import { History } from "./History";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type HistoryScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.SCANHISTORY
>;

export const HistoryContainer = ({
  navigation,
}: HistoryScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <History onNavigate={onNavigate} />;
};
