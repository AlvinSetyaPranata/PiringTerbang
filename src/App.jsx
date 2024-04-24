/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './routers/Router';

export default function App() {

  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}


