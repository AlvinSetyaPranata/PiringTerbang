import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TombolKembali from "../../components/TombolKembali";

export default function Profil() {

  return (
    <View style={styles.container}>
      <TombolKembali />
      
      <View style={styles.profileImage}>
        <Text>AL</Text>
      </View>

      <Text style={styles.profileName}>Alvin Setya Pranata</Text>
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
});
