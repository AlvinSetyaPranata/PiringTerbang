import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import Kepala from '../components/Kepala';
import TombolKategori from '../components/TombolKategori';
import Kartu from '../components/Kartu';

export default function Beranda() {
  return (
    <ScrollView>
      <Kepala />
      <View style={style.content}>
        <View style={style.catagoriesContainer}>
         <TombolKategori catagoryName="Makanan" />
         <TombolKategori catagoryName="Minuman" />
         <TombolKategori catagoryName="Penyetan"/>
         <TombolKategori catagoryName="Kuah"/>
        </View>

        <Text>Baru dimasak, nih!</Text>
        <View style={style.cardContainer}>
          <Kartu />
          <Kartu />
          <Kartu />
          <Kartu />
          <Kartu />
          <Kartu />
          <Kartu />
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  content: {
    padding: 30,
  },

  catagoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    columnGap: 30,
  },

  cardContainer: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 30,
    rowGap: 40
  }
});
