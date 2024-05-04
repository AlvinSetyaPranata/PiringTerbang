import { Pressable, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavigationContext } from "@react-navigation/native";

export default function TombolKembali() {
  const navigation = useContext(NavigationContext);

  return (
    <View style={styles.backButtonContainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} size={20} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    paddingTop: "12%",
    paddingBottom: "3%",
    paddingLeft: 25,
    width: "100%",
    backgroundColor: 'white'
  },
});
