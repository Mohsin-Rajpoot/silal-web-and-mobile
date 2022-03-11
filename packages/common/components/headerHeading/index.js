import { Text, View } from "react-native";
import CustomText from "../CustomText";
import styles from "./style";
import React from "react";

const HeaderHeading = ({ headingName, headingDetail, children }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <CustomText label={headingName} textStyle={styles.headingName} />
      <CustomText label={headingDetail} textStyle={styles.headingDetail} />
      {children}
    </View>
  );
};

export default HeaderHeading;
