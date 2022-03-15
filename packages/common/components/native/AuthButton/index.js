import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
const index = ({ name, onPress, changeColor }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={[changeColor ? styles.button1: styles.button]}>
        <Text style={[changeColor? styles.buttonText1: styles.buttonText]}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default index;
