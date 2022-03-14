import { View, Text } from "react-native";
import React from "react";
import HeaderHeading from "../../components/headerHeading";
import HeaderBack from "../../components/native/HeaderBack";
import CommonIcon from "../../components/native/AuthCommonIcon";

const GettingStarted = () => {
  return (
    <View>
      <HeaderBack name={"Registration"} />

      <HeaderHeading
        headingName={"Fill out a questionnaire"}
        headingDetail={
          "In order to register on the platform, please tell us in detail about your business and wait till for verification"
        }
      />
      <CommonIcon />
    </View>
  );
};

export default GettingStarted;
