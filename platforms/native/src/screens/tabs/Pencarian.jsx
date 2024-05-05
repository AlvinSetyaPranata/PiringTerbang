import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function Pencarian() {
  return (
    <View>
      <Header icon={faMagnifyingGlass} title="Pencarian" subtitle="Temukan seleramu!" />
      <View style={styles.search}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="gray" />
        <TextInput  />
      </View>
      
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
