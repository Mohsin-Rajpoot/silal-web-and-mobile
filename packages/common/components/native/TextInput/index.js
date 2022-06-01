import { View, TextInput, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import CommonStyle from "../../../styles";
import colors from "../../../assets/colors";
import { Icon } from "react-native-elements";
import { verticalScale, moderateScale } from "react-native-size-matters";
import IsTablet from "../IsTablet";
const index = ({
  placeholderText,
  inputStyle,
  secureText,
  multiLine,
  password,
  search,
  placeholderTextColor,
  inputTextStyle,
  keyboardType,
  onChangeText,
  value, 
  isTab
}) => {
  const [showPassword, setShowPassword] = useState(!secureText ? true : false);
  const [text, setText] = useState("");
  return (
    <View style={[ !isTab?  CommonStyle.textInputStylesMobile : CommonStyle.textInputStyles, inputStyle]}>
      {text.length ? (
        <View />
      ) : (
        search && (
          <View style={CommonStyle.searchIconContainer}>
            <Icon
              name="search"
              type="evilIcons"
              style={CommonStyle.searchIcon}
              size={!IsTablet ? verticalScale(22): verticalScale(22)}
              color={colors.gray_light}
            />
            
          </View>
        )
      )}
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : colors.light_grey
        }
        style={inputTextStyle ? inputTextStyle : CommonStyle.inputTextStyle}
        secureTextEntry={!showPassword}
        multiline={multiLine}
        value={ value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={false}
      />
      {secureText && (
        <>
          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            >
              <Icon
                name={showPassword ? "eye" : "eye-off"}
                type="feather"
                color={colors.light_grey}
                size={moderateScale(17)}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default index;
