import {
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import Colors from "../../utils/Colors";
import InputBox from "../../components/InputBox";
import AppButton from "../../components/AppButton";

export default function Register({ navigation }) {
  //hiding or showing password
  const openEyeIcon = require("../../assets/images/open-eye-icon.png");
  const closedEyeIcon = require("../../assets/images/closed-eye-icon.png");
  const [eyeIcon, setEyeIcon] = useState(closedEyeIcon);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [mobileErrorMessage, setMobileErrorMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [addressErrorMessage, setAddressErrorMessage] = useState("");

  //eye icon to hide or showing password
  const handleEyeIcons = () => {
    setIsPasswordHidden(!isPasswordHidden);

    if (eyeIcon === closedEyeIcon) {
      setEyeIcon(openEyeIcon);
    } else {
      setEyeIcon(closedEyeIcon);
    }
  };

  const validatePassword = () => {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return regex.test(password);
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateMobile = () => {
    const regex = /^[0-9]{10}$/;
    return regex.test(mobile);
  };

  const handleSubmit = () => {
    if (
      validateEmail() &&
      validatePassword() &&
      validateMobile() &&
      address &&
      name
    ) {
      setEmailErrorMessage("");
      setPasswordErrorMessage("");
      setMobileErrorMessage("");
      setNameErrorMessage("");
      setAddressErrorMessage("");
      Alert.alert("Sanspots", "Registration Successful!", [
        { text: "OK", onPress: () => navigation.navigate("Login") },
      ]);
    } else {
      if (!validateEmail()) {
        setEmailErrorMessage("Please enter a valid email address");
      } else {
        setEmailErrorMessage("");
      }
      if (!validatePassword()) {
        setPasswordErrorMessage("Please enter a valid password");
      } else {
        setPasswordErrorMessage("");
      }
      if (!validateMobile()) {
        setMobileErrorMessage("Please enter a valid mobile number");
      } else {
        setMobileErrorMessage("");
      }
      if (!name) {
        setNameErrorMessage("Fill your name");
      } else {
        setNameErrorMessage("");
      }
      if (!address) {
        setAddressErrorMessage("Fill your address");
      } else {
        setAddressErrorMessage("");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/sanspots-gradient.png")}
        style={styles.headerImage}
      />
      <Text style={styles.selectedTypeHeading}>Registration</Text>

      <View style={styles.labelInputBoxWrapper}>
        <Text style={styles.label}>Name</Text>
        <InputBox
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={{ fontSize: 18 }}
        />
        {nameErrorMessage ? (
          <Text style={styles.errorMessage}>{nameErrorMessage}</Text>
        ) : null}
      </View>

      <View style={styles.labelInputBoxWrapper}>
        <Text style={styles.label}>Email</Text>
        <InputBox
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{ fontSize: 18 }}
        />
        {emailErrorMessage ? (
          <Text style={styles.errorMessage}>{emailErrorMessage}</Text>
        ) : null}
      </View>

      <View style={styles.labelInputBoxWrapper}>
        <Text style={styles.label}>Mobile</Text>
        <InputBox
          placeholder="Mobile"
          value={mobile}
          onChangeText={setMobile}
          style={{ fontSize: 18 }}
        />
        {mobileErrorMessage ? (
          <Text style={styles.errorMessage}>{mobileErrorMessage}</Text>
        ) : null}
      </View>

      <View style={styles.labelInputBoxWrapper}>
        <Text style={styles.label}>Full Address</Text>
        <InputBox
          placeholder="Full Address"
          value={address}
          onChangeText={setAddress}
          style={{ fontSize: 18 }}
        />
        {addressErrorMessage ? (
          <Text style={styles.errorMessage}>{addressErrorMessage}</Text>
        ) : null}
      </View>

      <View style={styles.labelInputBoxWrapper}>
        <Text style={styles.label}>Set Password</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <InputBox
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={{ fontSize: 18 }}
            secureTextEntry={isPasswordHidden}
          />
          <TouchableOpacity onPress={handleEyeIcons}>
            <Image onPress style={[styles.icon]} source={eyeIcon} />
          </TouchableOpacity>
        </View>
        {passwordErrorMessage ? (
          <Text style={styles.errorMessage}>{passwordErrorMessage}</Text>
        ) : null}
      </View>

      <AppButton title="SUBMIT" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: 250,
    marginTop: -70,
    marginBottom: -50,
    resizeMode: "contain",
    alignSelf: "center",
  },
  label: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "600",
    marginLeft: 5,
  },
  labelInputBoxWrapper: {
    borderWidth: 1,
    borderColor: Colors.primary,
    marginHorizontal: 20,
    borderRadius: 7,
    padding: 5,
    marginBottom: 22,
    height: 70,
  },
  selectedTypeHeading: {
    marginBottom: 30,
    alignSelf: "center",
    fontSize: 22,
    color: Colors.primary,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginLeft: 5,
    marginTop: 3,
  },
  errorMessage: {
    color: Colors.red,
    marginVertical: 3,
  },
});
