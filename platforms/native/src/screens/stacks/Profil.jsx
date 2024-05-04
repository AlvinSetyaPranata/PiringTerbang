import { StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import TombolKembali from "../../components/TombolKembali";
import GrupOpsi from "../../components/GrupOpsi";

export default function Profil() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <TombolKembali />

      <View style={styles.profileImage}>
        <Text>AL</Text>
      </View>

      <Text style={styles.profileName}>Alvin Setya Pranata</Text>

      <View style={styles.contentContainer}>
        <GrupOpsi title="Pengaturan Umum">
          <View style={styles.optionContainer}>
            <Text style={styles.themeToogleTitle}>Mode malam</Text>
            <Switch
              value={darkMode}
              onChange={() => setDarkMode((state) => !state)}
            />
          </View>
        </GrupOpsi>

        <GrupOpsi title="Data Personal"></GrupOpsi>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  profileImage: {
    borderRadius: 100,
    width: 100,
    height: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  profileName: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
  },

  contentContainer: {
    paddingTop: 60,
    rowGap: 40
  },

  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },

  themeToogleTitle: {
    fontSize: 16,
  },
});
