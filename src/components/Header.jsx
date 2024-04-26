import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.brandContainer}>
          <Image source={require('../../assets/icons/logo.png')} />
          <View>
            <Text style={style.heading}>Piring Terbang</Text>
            <Text style={style.subheading}>Cepat datangnya puas makannya</Text>
          </View>
        </View>

        <FontAwesomeIcon icon={faMoon} style={style.themeIcon} size={40}/>
      </View>

      <View style={style.searchContainer}>
        <TextInput placeholder="Silahkan kak" style={style.search} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    rowGap: 15,
    paddingVertical: 10,
    paddingBottom: 18,
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
    alignItems: 'center',
  },

  search: {
    backgroundColor: 'white',
    width: 280,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    color: 'grey',
    fontSize: 13,
  },

  themeIcon: {
    color: 'white',
  }
});
