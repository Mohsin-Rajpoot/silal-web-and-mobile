import { View, Text } from "react-native";
import React from "react";
import styles from "./style";

const index = ({ fisrtText, SecondText }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.fistsText}>
        {fisrtText} <Text style={styles.secondText}>{SecondText}</Text>{" "}
      </Text>
    </View>
  );
};

export default index;
