import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
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
      <StatusBar
        backgroundColor={Colors.white}
        barStyle="dark-content"
      />

      <TouchableOpacity
        style={{ left: 20, marginTop: 50 }}
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
      <View style={styles.buttonPosition}>
        <AppButton title="Confirm" onPress={handleConfirm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonPosition: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20,
  },
  headerImage: {
    width: 130,
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
    marginTop: 20,
    alignSelf: "center",
    fontSize: 23,
    color: Colors.darkGrey,
  },
});
