import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { faClockFour } from '@fortawesome/free-solid-svg-icons'


export default function Histori() {

  return (
    <View>
        <Header icon={faClockFour} title="Histori" subtitle="Riwayat belanja anda" />
    </View>
  )
}

const styles = StyleSheet.create({})