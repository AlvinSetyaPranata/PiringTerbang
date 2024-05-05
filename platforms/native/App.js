import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import React from "react";
import Router from "./src/routers/Router";
import { useColorScheme } from "react-native";

export default function App() {
  const scheme = useColorScheme();

  const myDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "rgb(255, 45, 85)",
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  };

  return (
    <NavigationContainer theme={scheme == "dark" ? myDarkTheme : DefaultTheme}>
      <Router />
    </NavigationContainer>
  );
}
