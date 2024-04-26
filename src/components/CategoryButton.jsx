import {StyleSheet, Text, Pressable, View} from 'react-native';
import React from 'react';

export default function CategoryButton({catagoryName}) {
  return (
    <View style={style.container}>
      <Pressable style={style.catagoryButton}>
        <Text>Food</Text>
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
    backgroundColor: 'red',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catagoryText: {
    fontSize: 12
  },
});
