import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../assets/colors";
import fonts from "../../assets/fonts";
import { ScaledSheet } from "react-native-size-matters";
import IsTablet from "./IsTablet";
export default function CustomButton({
  text,
  onPress,
  type = "PRIMARY",
  navigation,
  containerStyle,
  textStyle,
}) {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={[
          !IsTablet ? styles.mainbuttonMobile : styles.mainbutton,
          styles[`mainbutton_${type}`],
          containerStyle,
        ]}
      >
        <Text
          style={[
            !IsTablet ? styles.buttonTextMobile : styles.buttonText,
            styles[`buttonText_${type}`],
            textStyle,
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = ScaledSheet.create({
  mainbutton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 6,
    marginVertical: 5,
    alignSelf: "center",
    borderRadius: 5,
  },
  mainbuttonMobile: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: '7@vs',
    paddingVertical: '4@vs',
    marginVertical: 5,
    alignSelf: "center",
    borderRadius: '8@s',
  },
  mainbutton_PRIMARY: {
    backgroundColor: colors.primary,
    fontFamily: "Poppins-SemiBold",
  },
  mainbutton_TERTIARY: {},
  buttonTextMobile: {
    color: colors.textWhite,
    fontSize: "10@vs",
    letterSpacing: 1,
    fontFamily: fonts.PoppinsSemiBold,
  },
  buttonText: {
    color: colors.textWhite,
    fontSize: "10@vs",
    paddingHorizontal: "5@s",
    letterSpacing: 1,
    fontFamily: fonts.PoppinsSemiBold,
  },
  buttonText_TERTIARY: {
    color: "#4C6870",
    fontFamily: fonts.PoppinsSemiBold,
  },
});
