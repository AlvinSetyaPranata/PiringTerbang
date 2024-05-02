import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from '../screens/Beranda';
import Keranjang from '../screens/Keranjang';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartShopping, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import Profil from '../screens/Profil';


export default function Router() {
  
  const BottomBarIcon = (name, color) => {
    return <FontAwesomeIcon icon={name} color={color} size={20} />
  }

  const Tabs = createBottomTabNavigator();


  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false, tabBarIcon: ({color}) => BottomBarIcon(faHome, color), tabBarActiveTintColor: 'red'}}
      />
      <Tabs.Screen
        name="Keranjang"
        component={Keranjang}
        options={{headerShown: false, tabBarIcon: ({color}) => BottomBarIcon(faCartShopping, color), tabBarActiveTintColor: 'red'}}
      />
      <Tabs.Screen
        name="Profil"
        component={Profil}
        options={{headerShown: false, tabBarIcon: ({color}) => BottomBarIcon(faUser, color), tabBarActiveTintColor: 'red'}}
      />
    </Tabs.Navigator>
  );
}
