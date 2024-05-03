import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Profil({navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} />
        </Pressable>
      </View>
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

  backButtonContainer: {
    paddingTop: "16%",
    paddingLeft: 25,
    width: "100%",
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
