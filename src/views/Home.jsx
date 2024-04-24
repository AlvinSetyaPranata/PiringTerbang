import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.brandContainer}>
          <Icon name="bars" size={30} color="#900" />

          <View>
            <Text style={style.heading}>Piring Terbang</Text>
            <Text style={style.subheading}>Cepat datangnya puas makannya</Text>
          </View>
        </View>

        <Text>Hello</Text>
      </View>

      <View style={style.searchContainer}>
        <TextInput placeholder="kak" style={style.search} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    rowGap: 10,
    paddingVertical: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  brandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 10,
  },

  heading: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },

  subheading: {
    color: 'yellow',
    fontSize: 14,
  },

  searchContainer: {
    alignItems: "center",
},

search: {
    backgroundColor: 'white',
    width: 250,
    borderRadius: 10,
    paddingHorizontal: 5
  },
});
