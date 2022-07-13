import { View, Text } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import styles from "../../style";
import IsTablet from "../../../../components/native/IsTablet";
const Header = ({ label, textStyle, active, page, textStyleInActive }) => {
  return (
    <View>
      <CustomText
        label={label}
        textStyle={[active >= page ? textStyle : textStyleInActive]}
      />
      <View
        style={[
          active >= page && !IsTablet
            ? styles.SignformHeaderMobile
            : active >= page && IsTablet
            ? styles.SignformHeader
            : !IsTablet
            ? styles.SignUpHeaderInactiveMobile
            : styles.SignUpHeaderInactive,
        ]}
      />
    </View>
  );
};

export default Header;
