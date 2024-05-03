import React from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import TombolKategori from "../../components/TombolKategori";
import Kartu from "../../components/Kartu";
import {
  faCake,
  faMortarPestle,
  faMugHot,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";


export default function Beranda({navigation}) {
  return (
    <ScrollView style={style.container}>
      <Header navigation={navigation} title="Piring Terbang" subtitle="Cepat sampainya, Puas porsinya" icon={require('../../../assets/brand-icon.png')}/>

      {/* end header */}
      <View style={style.content}>
        <ScrollView contentContainerStyle={style.catagoriesContainer} horizontal={true} space>
          <TombolKategori catagoryName="Makanan" icon={faUtensils} />
          <TombolKategori catagoryName="Minuman" icon={faMugHot} />
          <TombolKategori catagoryName="Penyetan" icon={faMortarPestle} />
          <TombolKategori catagoryName="Kue" icon={faCake} />
        </ScrollView>

        <Text style={style.contentHeader}>Baru dimasak, nih!</Text>
        <View style={style.cardContainer}>
          <Kartu imageURL="https://www.teakpalace.com/image/cache/catalog/artikel/gambar-makanan-paling-enak-sate-kambing-1000x750h.jpg.webp" name="Sate Madura" price={20000} />
          <Kartu imageURL="https://www.teakpalace.com/image/cache/catalog/artikel/gambar-makanan-paling-enak-sate-kambing-1000x750h.jpg.webp" name="Sate Madura" price={20000} />
          <Kartu imageURL="https://www.teakpalace.com/image/cache/catalog/artikel/gambar-makanan-paling-enak-sate-kambing-1000x750h.jpg.webp" name="Sate Madura" price={20000} />
          <Kartu imageURL="https://www.teakpalace.com/image/cache/catalog/artikel/gambar-makanan-paling-enak-sate-kambing-1000x750h.jpg.webp" name="Sate Madura" price={20000} />
          <Kartu imageURL="https://www.teakpalace.com/image/cache/catalog/artikel/gambar-makanan-paling-enak-sate-kambing-1000x750h.jpg.webp" name="Sate Madura" price={20000} />
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  
  headerContainer: {
    backgroundColor: "red",
    paddingTop: 45,
    paddingBottom: 20,
    paddingHorizontal: 2,
    rowGap: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
  },

  brandContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 10,
  },

  heading: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },

  subheading: {
    color: "yellow",
    fontSize: 14,
  },

  themeIcon: {
    color: "white",
    marginRight: 10,
  },

  content: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    paddingBottom: 100
  },

  catagoriesContainer: {
    justifyContent: "space-evenly",
    columnGap: 30,
  },

  cardContainer: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 30,
    rowGap: 40,
  },

  contentHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 40,
  },
});
