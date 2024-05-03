import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from "./MainTabs";
import Akun from "../screens/Akun";

export default function Router() {
  

  const Stack = createNativeStackNavigator()

  return (
   <Stack.Navigator initialRouteName="Utama">
    <Stack.Screen name="Utama" component={MainTabs} options={{headerShown: false}}/>
    <Stack.Screen name="Akun" component={Akun} options={{headerShown: false}}/>
   </Stack.Navigator>
  );
}
