import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import Colors from "../../utils/Colors";
import ItemsCard from "../../components/ItemsCard";
import AppButton from "../../components/AppButton";
import Icon from "react-native-vector-icons/Ionicons";

export default function SelectItems({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleConfirm = () => {
    if (isChecked) {
      navigation.navigate("SelectDateTime");
    } else {
      alert("Please select an item");
    }
  };

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ left: 20, top: 20 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Icon name="arrow-back-circle" size={35} color={Colors.primary} />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.headerText}>Lunch</Text>
        <View style={{ flex: 1 }}></View>
        <Image
          source={require("../../assets/images/lunch.jpg")}
          style={styles.headerImage}
        />
      </View>
      <Text style={styles.itemTypeText}>Select Veg or Non-Veg</Text>
      <ItemsCard
        itemType="Veg Items"
        items="Sukhi bhaji, rassa bhaji, dal fry, rice, 2 chapati"
        isChecked={isChecked}
        onPress={handleCheckboxClick}
      />
      <AppButton title="Confirm" onPress={handleConfirm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 10,
  },
  headerImage: {
    width: 100,
    height: 200,
    resizeMode: "contain",
  },
  headerText: {
    fontFamily: "serif",
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 50,
  },
  itemTypeText: {
    alignSelf: "center",
    fontSize: 23,
    color: Colors.darkGrey,
  },
});
