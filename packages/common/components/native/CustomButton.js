import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../assets/colors";

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
          styles.mainbutton,
          styles[`mainbutton_${type}`],
          containerStyle,
        ]}
      >
        <Text
          style={[styles.buttonText, styles[`buttonText_${type}`], textStyle]} >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainbutton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 6,
    marginVertical: 5,
    alignSelf: "center",
    borderRadius: 5,
  },
  mainbutton_PRIMARY: {
    backgroundColor: colors.primary,
    fontFamily: "Poppins-SemiBold",
  },
  mainbutton_TERTIARY: {},
  buttonText: {
    color: "#fff",
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: "Poppins-SemiBold",
  },
  buttonText_TERTIARY: {
    color: "#4C6870",
    fontFamily: "Poppins-SemiBold",
  },
});
