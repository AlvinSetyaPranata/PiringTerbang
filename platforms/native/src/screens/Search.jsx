import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Search() {
  return (
    <View>
      <TextInput placeholder="Silahkan kak" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "grey",
    fontSize: 13,
  },
});
