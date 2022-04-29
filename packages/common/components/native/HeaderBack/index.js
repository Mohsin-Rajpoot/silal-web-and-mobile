import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./style";
const index = ({ name, backIcon , onGoBack}) => {
  return (
    <View style={styles.mainContainer}>
      {backIcon ? (
        <View />
      ) : (
        <View style={styles.backIconContainer}>
          <TouchableOpacity activeOpacity={0.6} onPress={onGoBack}>
          <AntDesign name="left" style={styles.icon} />
          </TouchableOpacity>
          
        </View>
      )}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{name}</Text>
      </View>
    </View>
  );
};

export default index;
