import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { faClockFour, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export default function Histori({navigation}) {

  return (
    <View>
        <Header icon={faClockFour} navigation={navigation} title="Histori" subtitle="Riwayat belanja anda" />
    </View>
  )
}

const styles = StyleSheet.create({})