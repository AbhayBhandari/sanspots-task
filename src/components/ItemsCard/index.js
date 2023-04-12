import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Colors from "../../utils/Colors";

export default function Card({
  itemType,
  items,
  isChecked,
  setIsChecked,
  onPress,
}) {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={onPress}>
          <View style={[styles.checkbox, { borderWidth: isChecked ? 0 : 1 }]}>
            {isChecked && (
              <Icon name="checkcircle" size={24} color={Colors.primary} />
            )}
          </View>
        </TouchableOpacity>
        <Text style={styles.itemTypeText}>{itemType}</Text>
      </View>
      <Text style={styles.itemsText}>{items}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 130,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "center",
    padding: 16,
    marginVertical: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  checkbox: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderColor: Colors.primary,
    marginRight: 16,
  },
  itemsText: {
    fontSize: 16,
    marginTop: 10,
  },
  itemTypeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
  },
});
