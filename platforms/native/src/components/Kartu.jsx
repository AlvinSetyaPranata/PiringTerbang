import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Kartu({ imageURL, name, price }) {
  return (
    <Pressable style={styles.container}>
      <Image
        style={styles.productImage}
        source={{ uri: imageURL }}
        alt="product-image"
      />

      <View style={styles.desc}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>Rp.{price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 145,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    rowGap: 20
  },

  productName: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: "700"
  },

  productPrice: {
    fontSize: 12,
    marginTop: 5,
    color: 'red'
  },

  productImage: {
    minHeight: 100,
    alignSelf: 'stretch',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  desc: {
    padding: 10,
    justifyContent: 'space-between',
  }
});
