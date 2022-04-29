import { View, TextInput, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import CommonStyle from "../../../styles";
import colors from "../../../assets/colors";
import { Icon } from "react-native-elements";
const index = ({
  placeholderText,
  inputStyle,
  secureText,
  multiLine,
  password,
  search,
  placeholderTextColor,
  inputTextStyle,
}) => {
  const [showPassword, setShowPassword] = useState(!secureText ? true : false);
  const [text, setText] = useState("");
  return (
    <View style={[CommonStyle.textInputStyles, inputStyle]}>
      {text.length ? (
        <View />
      ) : (
        search && (
          <View style={CommonStyle.searchIconContainer}>
            <Icon
              name="search"
              type="evilIcons"
              style={CommonStyle.searchIcon}
              size={30}
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
        value={text}
        onChangeText={(value) => setText(value)}
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
                style={{ fontSize: 18 }}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default index;
