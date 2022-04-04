import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";

import colors from "../../../../assets/colors";
import fonts from "../../../../assets/fonts";
const CountryPick = ({ item }) => {
  console.log("=====Item", item);
  const [callingCode] = item?.callingCodes;
  return (
    <View>
      <TouchableOpacity style={styles.main} activeOpacity={0.6}>
        <Text style={styles.codeText}>{callingCode}</Text>
        <Image
          source={{ uri: "https://flagcdn.com/as.svg" }}
          style={styles.imageSize}
          resizeMode="contain"
        />
        <Text style={styles.countryText}>{item?.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountryPick;

const styles = ScaledSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "5@ms",
    marginHorizontal: "2@ms",
  },
  imageSize: {
    width: 40,
    height: 20,
    resizeMode: "contain",
  },
  codeText: {
    fontSize: "14@ms",
    color: colors.black,
  },
  countryText: {
    fontSize: "12@ms",
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
});
