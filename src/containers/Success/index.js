import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";

import Colors from "../../utils/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

export default function Success({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: Colors.primary }}>
        <Image
          source={require("../../assets/images/sanspots.png")}
          style={styles.headerImage}
        />
      </View>
      <Animatable.View animation="fadeInUp" style={styles.bodyContainer}>
        <TouchableOpacity
          style={{ left: 20, marginTop: 30 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-circle" size={35} color={Colors.primary} />
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/success.png")}
          style={styles.successImage}
        />
        <Text style={styles.congratulationsText}>Congratulations!!</Text>
        <Text style={styles.bodyTextStyle}>
          Your order has been placed successfully
        </Text>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 3,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bodyTextStyle: {
    fontFamily: "serif",
    fontWeight: "600",
    color: Colors.darkGrey,
    fontSize: 18,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  congratulationsText: {
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 25,
    color: Colors.darkGrey,
    marginVertical: 20,
    alignSelf: "center",
  },
  headerImage: {
    width: 250,
    height: 200,
    top: 20,
    resizeMode: "contain",
    alignSelf: "center",
  },
  successImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 50,
  },
});
