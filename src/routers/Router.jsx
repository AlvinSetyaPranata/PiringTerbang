import React from 'react'
import Home from '../views/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function Router() {
  const Tabs = createBottomTabNavigator()
  
  return (
    <Tabs.Navigator initialRouteName='Home'>
      <Tabs.Screen name="Home" component={Home} options={{headerShown: false}}/>
    </Tabs.Navigator>
  )
}
