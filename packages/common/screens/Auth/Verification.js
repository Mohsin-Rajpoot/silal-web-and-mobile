import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderBack from "../../components/native/HeaderBack";
import CommonStyle from "../../styles/index"; 
const Verification = () => {
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      <HeaderBack name="OTP" />
    </SafeAreaView>
  );
};

export default Verification;
