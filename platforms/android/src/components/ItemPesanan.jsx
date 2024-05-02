import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';

export default function ItemPesanan() {

    const [orderCount, setOrderCount] = useState(0)
    const [messegeActive, setMessegeActive] = useState(false)


  return (
    <View style={styles.cartContainer}>
      <View style={styles.headingSection}>
        <Image
          style={styles.itemImage}
          source={{uri: 'https://asd.jpg'}}
          alt="item-image"
        />
        <View styles={styles.itemDisplay}>
          <View style={styles.itemDisplayUpper}>
            <Text style={styles.itemName}>Nasi Goreng nyam-nyam</Text>
            <Pressable onPress={() => setMessegeActive(v => !v)}>
                <Text style={styles.expandButton}>{messegeActive ? '-' : '+'}</Text>
            </Pressable>
          </View>
          <View style={styles.itemDisplayLower}>
            <Text style={styles.itemPrice}>Rp.100.000</Text>
            <View style={styles.addSubControll}>
              <Pressable onPress={() => setOrderCount(v => v - 1)}>
                <Text style={styles.controll}>-</Text>
              </Pressable>
              <TextInput keyboardType="numeric" style={styles.itemCount} defaultValue={orderCount.toString()}/>
              <Pressable onPress={() => setOrderCount(v => v + 1)}>
                <Text style={styles.controll}>+</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {
        messegeActive ?
          <TextInput placeholder='contoh: Jangan lupa sayurnya ya say :3' style={styles.orderMessege} multiline={true}/>
            :
          ''
      }
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
  },

  headingSection: {
    flexDirection: 'row',
    columnGap: 7,
  },

  itemImage: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
  },

  itemDisplayUpper: {
    flexDirection: 'row',
    columnGap: 70,
    alignItems: 'center'
  },

  itemDisplayLower: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },

  itemCount: {
    width: 50,
    textAlign: 'center'
  },

  addSubControll: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  controll: {
    fontSize: 18,
    fontWeight: 'bold'
},
orderMessege: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
}
});
