import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
const index = ({ name }) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default index;
