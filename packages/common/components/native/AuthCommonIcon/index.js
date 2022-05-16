import { View, Text } from "react-native";
import React from "react";
import CommonStyle from "../../../styles";
import DeviceInfo from "react-native-device-info";
const index = () => {
  const isTab = DeviceInfo.isTablet();
  return (
    <View
      style={!isTab ? CommonStyle.commonIconMobile : CommonStyle.commonIcon}
    />
  );
};

export default index;
