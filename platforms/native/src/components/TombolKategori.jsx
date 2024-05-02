import {StyleSheet, Text, Pressable, View} from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function TombolKategori({catagoryName, icon}) {
  return (
    <View style={style.container}>
      <Pressable style={style.catagoryButton}>
        <FontAwesomeIcon icon={icon} size={22}/>
      </Pressable>
      <Text style={style.catagoryText}>{catagoryName}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    rowGap: 10,
  },
  catagoryButton: {
    borderRadius: 100,
    color: 'black',
    backgroundColor: 'yellow',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catagoryText: {
    fontSize: 12
  },
});
