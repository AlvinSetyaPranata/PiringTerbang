import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import ItemPesanan from '../../components/ItemPesanan';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Keranjang({navigation}) {
  
  return (
    <ScrollView>
      <Header icon={faCartShopping} title="Keranjang" subtitle="Buruan, keburu diambil orang lho!"/>
      <View style={styles.contentContainer}>
        <View style={styles.orderTotalContainer}>
          <View style={styles.orderTotalDisplay}>
            <Text style={styles.orderTotalTitle}>Total harga</Text>
            <Text style={styles.orderTotalSubtitle}>Rp.500.000</Text>
          </View>
          <Pressable style={styles.orderButton} onPress={() => navigation.navigate('Pembayaran')}>
            <Text style={styles.orderButtonTitle}>Pesan Sekarang</Text>
          </Pressable>
        </View>
        <Text style={styles.orderListSectionName}>Makanan</Text>
        <View style={styles.orderList}>
            <ItemPesanan />
            <ItemPesanan />
            <ItemPesanan />
            <ItemPesanan />
            <ItemPesanan />
            <ItemPesanan />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 30,
    paddingHorizontal: 20
  },

  orderTotalContainer: {
    borderRadius: 10,
    padding: 14,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  orderTotalDisplay: {
    rowGap: 2,
  },

  orderTotalTitle: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },

  orderTotalSubtitle: {
    fontSize: 12,
    color: 'red',
  },

  orderButton: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
  },

  orderButtonTitle: {
    color: 'black',
    fontSize: 12,
    fontWeight: "600"
  },

  orderList: {
    marginTop: 20,
    paddingBottom: 100,
    rowGap: 20
},

orderListSectionName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: 40
  }
});
