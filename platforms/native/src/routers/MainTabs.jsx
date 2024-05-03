import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCartShopping,
  faClock,
  faHome,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Beranda, Histori, Keranjang, Pencarian } from "../screens/tabs";


export default function MainTabs() {
  const BottomBarIcon = (name, color) => {
    return <FontAwesomeIcon icon={name} color={color} size={20} />;
  };


  const Tabs = createBottomTabNavigator()
  const tabStyle = {
    width: 290,
    position: "absolute",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 0,
    marginHorizontal: 35,
    height: 50,
    paddingVertical: 2,
    alignItems: "center",
  };

  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen
        name="Beranda"
        component={Beranda}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => BottomBarIcon(faHome, color),
          tabBarActiveTintColor: "red",
          tabBarStyle: tabStyle,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="Keranjang"
        component={Keranjang}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => BottomBarIcon(faCartShopping, color),
          tabBarActiveTintColor: "red",
          tabBarStyle: tabStyle,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Pencarian}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => BottomBarIcon(faMagnifyingGlass, color),
          tabBarActiveTintColor: "red",
          tabBarStyle: tabStyle,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="Histori"
        component={Histori}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => BottomBarIcon(faClock, color),
          tabBarActiveTintColor: "red",
          tabBarStyle: tabStyle,
          tabBarLabel: () => null,
        }}
      />
    </Tabs.Navigator>
  );
}
