import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabs from "./MainTabs";
import Profil from "../screens/stacks/Profil";
import Detail from "../screens/stacks/Detail";
import Pembayaran from "../screens/stacks/Pembayaran";

export default function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Utama">
      <Stack.Screen
        name="Utama"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Akun"
        component={Profil}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pembayaran"
        component={Pembayaran}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
