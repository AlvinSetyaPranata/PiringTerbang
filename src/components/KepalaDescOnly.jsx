import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function KepalaDescOnly() {
  return (
    <View style={styles.container}>
        <View style={styles.headerBrand}>
            <Image style={styles.headerScreenImage} source={{uri: 'https://apa.png'}}  alt="Image"/>
            <View style={styles.headerScreenDisplay}>
                <Text style={styles.headerScreenTitle}> Keranjang Anda</Text>
                <Text style={styles.headerScreenSubtitle}>Berikut isi pesanan anda</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        backgroundColor: 'red',
        padding: 20
    },

    headerBrand: {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center'
    },

    headerScreenImage: {
        height: 20,
        width: 20
    },

    headerScreenDisplay: {
        rowGap: 5,
        alignItems: 'flex-start'
    },

    headerScreenTitle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },

    headerScreenSubtitle: {
        fontSize: 14,
        color: 'yellow'
    }
})