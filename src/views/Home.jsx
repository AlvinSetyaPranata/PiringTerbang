import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import CategoryButton from '../components/CategoryButton';

export default function Home() {
  return (
    <View>
      <Header />
      <View style={style.content}>
        <View style={style.catagoriesContainer}>
         <CategoryButton catagoryName="Makanan" />
         <CategoryButton catagoryName="Minuman" />
         <CategoryButton catagoryName="Penyetan"/>
         <CategoryButton catagoryName="Kuah"/>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  content: {
    padding: 30,
  },

  catagoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    columnGap: 30
  },
});
