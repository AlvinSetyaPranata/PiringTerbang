import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Beranda from '../screens/Beranda'



export default function Router() {
  const Tabs = createBottomTabNavigator()


  return (
    <Tabs.Navigator initialRouteName='Home'>
      <Tabs.Screen name="Beranda" component={Beranda} options={{headerShown: false}}/>
    </Tabs.Navigator>
  )
}
