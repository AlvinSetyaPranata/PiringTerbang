import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Kartu() {
  return (
    <Pressable style={styles.container}>
      <Image style={styles.productImage} source={{uri: 'https://test.jpg'}} alt='none'/>
      <Text style={styles.productName}>Nasi Goreng Ayam</Text>
      <Text style={styles.productPrice}>Rp. 12000</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 130,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray'

  },

  productName: {
    fontSize: 13,
    marginTop: 10
  },

  productPrice: {
    fontSize: 12,
    marginTop: 5,
  },

  productImage: {
    minHeight: 100
  }
})