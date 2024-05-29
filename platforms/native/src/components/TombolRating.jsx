import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function TombolRating({icon}) {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={icon} size={12}/>
      <Text style={styles.count}>2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray'
    },

    count: {
        fontSize: 14
    }
});
