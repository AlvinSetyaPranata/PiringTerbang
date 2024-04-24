import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../views/Home'

export default function Router() {
  const Stack = createNativeStackNavigator()
  
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
