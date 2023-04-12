import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../../utils/Colors";

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: "90%",
    height: 100,
    alignSelf: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginVertical: 20,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "serif",
    color: Colors.white,
    textAlign: "center",
  },
});
