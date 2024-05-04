
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './src/routers/Router';
import { useColorScheme } from 'react-native';

export default function App() {
  const scheme = useColorScheme()

  
  return (
    <NavigationContainer theme={scheme == 'dark' ? DarkTheme : DefaultTheme}>
      <Router/>
    </NavigationContainer>
  );
}


