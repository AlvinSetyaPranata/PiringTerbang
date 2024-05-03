import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


export default function Header({ navigation, icon, title, subtitle}) {


  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View style={styles.brandContainer}>
          {
            typeof icon != 'number' 
            ? 
            <FontAwesomeIcon icon={icon} size={40} color="white" />
              :
            <Image source={icon} style={{width: 40, height: 40}}/>
          }
          <View>
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.subheading}>{subtitle}</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.profileButton}
        onPress={() => navigation.navigate("Akun")}
      >
        <Text>AL</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "red",
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
  },

  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    minWidth: 236,
    overflow: 'hidden'
  },

  heading: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },

  subheading: {
    color: "yellow",
    fontSize: 14,
  },

  profileButton: {
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
