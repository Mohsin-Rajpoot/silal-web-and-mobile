import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors";
import fonts from "../../assets/fonts";
import { ScaledSheet } from "react-native-size-matters";
import IsTablet from "./IsTablet";
const StatisticWhiteBoxTitle = ({ navigation, Title }) => {
  return <Text style={styles.titleInWhiteDiv}>{Title}</Text>;
};

export default StatisticWhiteBoxTitle;

const styles = ScaledSheet.create({
  titleInWhiteDiv: {
    fontSize: !IsTablet ? "11@vs" : "9@vs",
    fontFamily: fonts.LatoMedium,
    color: colors.textPrimeColor,
    alignSelf: "center",
  },
});
