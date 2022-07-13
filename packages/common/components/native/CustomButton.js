import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import colors from "../../assets/colors";
import fonts from "../../assets/fonts";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import IsTablet from "./IsTablet";
import { Icon } from "react-native-elements";

export default function CustomButton({
  text,
  onPress,
  type = "PRIMARY",
  containerStyle,
  textStyle,
  leftIcon,
  iconName,
  iconType,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[
        !IsTablet ? styles.mainbuttonMobile : styles.mainbutton,
        styles[`mainbutton_${type}`],
        containerStyle,
      ]}
    >
      {leftIcon && (
        <Icon
          size={verticalScale(14)}
          color={colors.textWhite}
          type={iconType}
          name={iconName}
        />
      )}
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
    padding: "4@s",
    alignSelf: "center",
    borderRadius: "8@s",
    flexDirection: "row",
    alignItems: "center",
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
    marginTop: verticalScale(1),
  },
  buttonText: {
    color: colors.textWhite,
    fontSize: "10@vs",
    paddingHorizontal: "5@s",
    letterSpacing: 1,
    fontFamily: fonts.PoppinsSemiBold,
  },
  buttonText_TERTIARY: {
    color: colors.textPrimeColor,
    fontFamily: fonts.PoppinsSemiBold,
    marginHorizontal: verticalScale(4),
  },
});
