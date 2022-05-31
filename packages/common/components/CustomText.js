import React from "react";
import { Text, View } from "react-native";
import { moderateScale,verticalScale,scale } from "react-native-size-matters";
import fonts from '../assets/fonts'
const CustomText = (props) => {
  return (
    <View style={[props.container]}>
     {props.label &&<Text
        style={[
          {
            fontSize: moderateScale(props.fontSize || 14),
            color: props.color || "black",
            fontFamily:props.fontFamily || fonts.PoppinsRegular,
            marginTop:verticalScale(props.marginTop || 0),
            marginBottom:verticalScale(props.marginBottom || 0),
            marginLeft:scale(props.marginLeft || 0),
            alignSelf:props.alignSelf || "flex-start",
            marginRight:verticalScale(props.marginRight||0)
          },
          props.textStyle,
        ]}
      >
        {props.label}
        {props.children}
      </Text>}
    </View>
  );
};

export default CustomText;
