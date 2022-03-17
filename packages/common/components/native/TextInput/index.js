import { View, TextInput } from "react-native";
import React from "react";
import CommonStyle from "../../../styles";
import colors from "../../../assets/colors";
const index = ({ placeholderText ,  inputStyle}) => {
  return (
    <View style={[CommonStyle.textInputStyles,inputStyle]}>
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={colors.light_grey}
        style={CommonStyle.inputTextStyle}
        
      />
    </View>
  );
};

export default index;
