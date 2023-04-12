import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";

import Colors from "../../utils/Colors";
import AppButton from "../../components/AppButton";

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleTimePicker = () => {
    setShowTimePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(Platform.OS === "ios");
    if (selectedTime) {
      const currentTime = selectedTime || time;
      setTime(currentTime);
    }
  };

  const handleConfirm = () => {
    const currentDate = new Date();
    if (date.getDate() > currentDate.getDate()) {
      navigation.navigate("Success");
    } else if (date.getMonth() > currentDate.getMonth()) {
      navigation.navigate("Success");
    } else if (date.getFullYear() > currentDate.getFullYear()) {
      navigation.navigate("Success");
    } else {
      if (time.toLocaleTimeString() < currentDate.toLocaleTimeString()) {
        Alert.alert("Invalid Time", "Please select a valid time.");
      } else {
        navigation.navigate("Success");
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

      <Animatable.View animation="fadeInUp" style={styles.footer}>
        <TouchableOpacity
          style={{ left: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-circle" size={35} color={Colors.primary} />
        </TouchableOpacity>
        <Text style={styles.footerHeadingTextStyle}>SELECT DATE & TIME</Text>
        <Text style={styles.footerTextStyle}>Delivery Date & Time</Text>

        {showDatePicker && (
          <DateTimePicker
            testID="datePicker"
            value={date}
            mode="date"
            display="spinner"
            minimumDate={new Date()}
            onChange={handleDateChange}
          />
        )}

        {showTimePicker && (
          <DateTimePicker
            testID="timePicker"
            value={time}
            mode="time"
            display="spinner"
            onChange={handleTimeChange}
          />
        )}

        <View style={styles.dateTimeWrapper}>
          <TouchableOpacity
            style={styles.dateTimeComponents}
            onPress={handleDatePicker}
          >
            <Image
              source={require("../../assets/images/calendar.png")}
              style={styles.icon}
            />
            <Text style={styles.datetimeText}>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dateTimeComponents}
            onPress={handleTimePicker}
          >
            <Image
              source={require("../../assets/images/time.png")}
              style={[styles.icon, { width: 35 }]}
            />
            <Text style={styles.datetimeText}>
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ position: "absolute", bottom: 20, left: 0, right: 0 }}>
          <AppButton title="Confirm & Continue" onPress={handleConfirm} />
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
  dateTimeComponents: {
    flexDirection: "row",
    width: "47%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    marginVertical: 40,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  dateTimeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    right: 13,
  },
  image: {
    width: 250,
    resizeMode: "contain",
  },
  footer: {
    flex: 2.5,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
  },
  footerHeadingTextStyle: {
    alignSelf: "center",
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 50,
  },
  footerTextStyle: {
    fontFamily: "serif",
    fontSize: 20,
    marginTop: 50,
    marginLeft: 20,
    color: Colors.darkGrey,
  },
});
