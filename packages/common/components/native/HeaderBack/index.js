import { View, Text } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./style";
const index = ({ name }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.backIconContainer}>
        <AntDesign name="left" style={styles.icon} />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{name}</Text>
      </View>
    </View>
  );
};

export default index;
