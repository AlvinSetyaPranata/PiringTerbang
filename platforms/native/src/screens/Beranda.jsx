import React from "react";
import { View, StyleSheet, ScrollView, Text, Image, Pressable } from "react-native";
import TombolKategori from "../components/TombolKategori";
import Kartu from "../components/Kartu";
import {
  faCake,
  faMortarPestle,
  faMugHot,
  faUtensils,
  faMoon,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


export default function Beranda({navigation}) {
  return (
    <ScrollView>
      <View style={style.headerContainer}>
        <View style={style.header}>
          <View style={style.brandContainer}>
            <Image source={require("../../assets/icons/logo.png")} />
            <View>
              <Text style={style.heading}>Piring Terbang</Text>
              <Text style={style.subheading}>
                Cepat datangnya puas makannya
              </Text>
            </View>
          </View>

          <FontAwesomeIcon icon={faMoon} style={style.themeIcon} size={25} />
        </View>

        <View style={style.searchContainer}>
          <Pressable style={style.search} onPress={() => navigation.navigate("search")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} color="grey" />
            <Text style={style.searchPlaceholder}>Silahkan kak</Text>
          </Pressable>
        </View>
      </View>

      {/* end header */}
      <View style={style.content}>
        <ScrollView contentContainerStyle={style.catagoriesContainer} horizontal={true} space>
          <TombolKategori catagoryName="Makanan" icon={faUtensils} />
          <TombolKategori catagoryName="Minuman" icon={faMugHot} />
          <TombolKategori catagoryName="Penyetan" icon={faMortarPestle} />
          <TombolKategori catagoryName="Kue" icon={faCake} />
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
    paddingBottom: 30,
    paddingHorizontal: 2,
    rowGap: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
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

  searchContainer: {
    alignItems: "center",
  },

  search: {
    backgroundColor: "white",
    width: 280,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,

    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
  },

  searchPlaceholder: {
    color: "grey",
    fontSize: 13,
  },

  themeIcon: {
    color: "white",
    marginRight: 10,
  },

  content: {
    paddingVertical: 30,
    paddingHorizontal: 20
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
