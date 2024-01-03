import { Home } from "./Home";
import React, { useState, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreens } from "..";
import { RootStackParamList } from "@/Navigation";

import { useLazyGetUserQuery } from "@/Services";

export const HomeContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Home data={data} isLoading={isLoading} />;
  
};