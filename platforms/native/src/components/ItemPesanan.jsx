import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMinus, faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ItemPesanan() {
  const [orderCount, setOrderCount] = useState(0);
  const [messegeActive, setMessegeActive] = useState(false);
  const [messegeContent, setMessegeContent] = useState("")

  return (
    <View style={styles.cartContainer}>
      <View style={styles.headingSection}>
        <Image
          style={styles.itemImage}
          source={{ uri: "https://asd.jpg" }}
          alt="item-image"
        />
        <View styles={styles.itemDisplay}>
          <View style={styles.itemDisplayUpper}>
            <Text style={styles.itemName}>Nasi Goreng nyam-nyam</Text>
            <Pressable onPress={() => setMessegeActive((v) => !v)}>
              <Text style={styles.expandButton}>
                {messegeActive ? (
                  <FontAwesomeIcon icon={faMinus} size={10} />
                ) : (
                  <FontAwesomeIcon icon={faPencil} size={10} />
                )}
              </Text>
            </Pressable>
          </View>
          <View style={styles.itemDisplayLower}>
            <Text style={styles.itemPrice}>Rp.100.000</Text>
            <View style={styles.addSubControll}>
              <Pressable style={styles.addSubButton} onPress={() => setOrderCount((v) => v - 1)}>
                <FontAwesomeIcon icon={faMinus} size={10} />
              </Pressable>
              <TextInput
                keyboardType="numeric"
                style={styles.itemCount}
                defaultValue={orderCount.toString()}
              />
              <Pressable style={styles.addSubButton} onPress={() => setOrderCount((v) => v + 1)}>
                <FontAwesomeIcon icon={faPlus} size={10} />
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {messegeActive ? (
        <TextInput
          placeholder="contoh: Jangan lupa sayurnya ya say :3"
          style={styles.orderMessege}
          multiline={true}
          onChange={(e) => setMessegeContent(e.target.value)}
          value={messegeContent}
        />
      ) : (
        ""
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 5,
    paddingBottom: 0,
    justifyContent: 'center'
  },

  headingSection: {
    flexDirection: "row",
    columnGap: 7,
  },

  itemImage: {
    width: 60,
    height: 60,
    backgroundColor: "red",
  },

  itemDisplayUpper: {
    flexDirection: "row",
    columnGap: 70,
    alignItems: "center",
  },

  itemDisplayLower: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },

  itemCount: {
    width: 50,
    textAlign: "center",
  },

  addSubControll: {
    flexDirection: "row",
    alignItems: "center",
  },

  addSubButton: {
    justifyContent: 'center'
  },

  controll: {
    fontSize: 18,
    fontWeight: "bold",
  },
  orderMessege: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
});
