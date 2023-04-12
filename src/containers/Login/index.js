import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";

import Colors from "../../utils/Colors";
import InputBox from "../../components/InputBox";
import AppButton from "../../components/AppButton";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const openEyeIcon = require("../../assets/images/open-eye-icon.png");
  const closedEyeIcon = require("../../assets/images/closed-eye-icon.png");
  const [eyeIcon, setEyeIcon] = useState(closedEyeIcon);

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handleEyeIcons = () => {
    setIsPasswordHidden(!isPasswordHidden);

    if (eyeIcon === closedEyeIcon) {
      setEyeIcon(openEyeIcon);
    } else {
      setEyeIcon(closedEyeIcon);
    }
  };

  const validatePassword = () => {
    const re =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return re.test(password);
  };

  const validateEmail = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = () => {
    console.log("email", validateEmail());
    console.log("pass", validatePassword());
    if (validateEmail() && validatePassword()) {
      setEmailErrorMessage("");
      setPasswordErrorMessage("");

      navigation.navigate("Home");
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
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={4000}
          style={styles.image}
          source={require("../../assets/images/sanspots.png")}
        />
      </View>

      <Text style={styles.welcomeHeading}>Welcome!</Text>
      <Text
        style={[
          styles.welcomeHeading,
          { fontSize: 25, paddingTop: 0, marginBottom: 40 },
        ]}
      >
        Log In to Sanspots.
      </Text>

      <Animatable.View animation="fadeInUp" style={styles.footer}>
        <View style={styles.inputBoxContainer}>
          <Image
            style={styles.inputBoxIcon}
            source={require("../../assets/images/email-icon.png")}
          />
          <InputBox
            placeholder="Email ID"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        {emailErrorMessage ? (
          <Text style={styles.errorMessage}>{emailErrorMessage}</Text>
        ) : null}
        <View style={styles.inputBoxContainer}>
          <Image
            style={styles.inputBoxIcon}
            source={require("../../assets/images/password-icon.png")}
          />

          <InputBox
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={isPasswordHidden}
          />
          <TouchableOpacity onPress={handleEyeIcons}>
            <Image onPress style={[styles.inputBoxIcon]} source={eyeIcon} />
          </TouchableOpacity>
        </View>
        {passwordErrorMessage ? (
          <Text style={styles.errorMessage}>{passwordErrorMessage}</Text>
        ) : null}

        <TouchableOpacity onPress={() => console.log("Forgot Password")}>
          <Text
            style={{
              textAlign: "right",
              marginRight: 44,
              marginBottom: "8%",
              color: Colors.primary,
              fontWeight: "500",
              top: 15,
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <AppButton title="Login" onPress={handleLogin} />

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "#8f8f8f" }}>New to Sanspots?{"  "}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: Colors.primary, fontWeight: "500" }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },

  inputBoxIcon: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    marginRight: 10,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    resizeMode: "contain",
  },
  inputBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
  },
  footer: {
    flex: 2.5,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 40,
  },

  welcomeHeading: {
    fontFamily: "serif",
    fontWeight: "bold",
    color: Colors.white,
    fontSize: 40,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  errorMessage: {
    color: Colors.red,
    marginLeft: 50,
    marginTop: -10,
  },
});
