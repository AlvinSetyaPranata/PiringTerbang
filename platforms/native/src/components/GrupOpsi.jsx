import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GrupOpsi({ title, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.groupName}>{title}</Text>

      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
  },

  groupName: {
    fontWeight: "700",
    fontSize: 18,
    color: "gray",
  },

  childrenContainer: {
    marginTop: 15,
  },
});
