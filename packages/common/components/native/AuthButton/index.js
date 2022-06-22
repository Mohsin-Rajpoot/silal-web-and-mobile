import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import DeviceInfo from "react-native-device-info";
const Button = ({ name, onPress, changeColor, buttonStyling }) => {
  const isTab = DeviceInfo.isTablet();
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View
        style={[
          buttonStyling
            ? buttonStyling
            : changeColor
            ? styles.button1
            : !isTab
            ? styles.buttonMobile
            : styles.button,
        ]}
      >
        <Text style={[changeColor ? styles.buttonText1 : styles.buttonText]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
