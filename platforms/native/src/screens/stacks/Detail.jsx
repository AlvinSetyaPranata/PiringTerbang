import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import TombolKembali from "../../components/TombolKembali";
import TombolRating from "../../components/TombolRating";
import { faCartShopping, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const { width } = Dimensions.get("window");

export default function Detail() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      stickyHeaderIndices={[0]}
    >
      <TombolKembali />
      <View style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          source={{
            uri: "https://www.teakpalace.com/image/cache/catalog/artikel/gambar-makanan-paling-enak-sate-kambing-1000x750h.jpg.webp",
          }}
        />
      </View>

      <View style={styles.productContentContainer}>
        <Text style={styles.productName}>Sate Madura</Text>
        <Text style={styles.productDesc}>
          Merupakan sate yang dibumbui dengan bumbu khas dari madura, yang
          dimana dagingnya menggunakan daging kambing yang dimana sangat
          menambah cita rasa kuliner dari madura, sangat cocok bagi anda yang
          suka dengan makanan berlemak
        </Text>

        <View style={styles.likeContainer}>
          <TombolRating icon={faThumbsUp} />
          <TombolRating icon={faThumbsDown} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.addToCart}>
          <FontAwesomeIcon icon={faCartShopping} color="white"/>
          <Text style={styles.addToCartText}>Tambah ke keranjang</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  productImageContainer: {
    marginTop: 30,
    alignItems: "center",
  },

  productImage: {
    width: "90%",
    height: 200,
  },

  productContentContainer: {
    paddingHorizontal: "5%",
    marginTop: 20,
  },

  productName: {
    fontSize: 28,
    fontWeight: "bold",
  },

  productDesc: {
    marginTop: 5,
  },

  likeContainer: {
    paddingHorizontal: "1%",
    paddingVertical: 14,
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 10,
    alignItems: 'center',
    width: "100%"
  },

  addToCart: {
    backgroundColor: "red",
    width: 250,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10,
    borderRadius: 10,
    flexDirection: 'row'
  },

  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});
