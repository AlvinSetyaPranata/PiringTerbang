import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function KepalaDescOnly() {
  return (
    <View style={styles.container}>
        <View style={styles.headerBrand}>
            <FontAwesomeIcon icon={faCartShopping} color='white' size={40} />
            <View style={styles.headerScreenDisplay}>
                <Text style={styles.headerScreenTitle}>Keranjang Anda</Text>
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
        paddingHorizontal: 35,
        paddingTop: 45,
        paddingBottom: 30
    },

    headerBrand: {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center'
    },

    headerScreenDisplay: {
        rowGap: 2,
        textAlign: 'left'
    },

    headerScreenTitle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
    },

    headerScreenSubtitle: {
        fontSize: 14,
        color: 'yellow'
    }
})