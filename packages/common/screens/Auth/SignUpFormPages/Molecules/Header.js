import { View, Text } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import styles from "../../style";
const Header = ({ label, textStyle, active, page, textStyleInActive }) => {
  return (
    <View>
      <CustomText
        label={label}
        textStyle={[active >= page ? textStyle : textStyleInActive]}
      />
      <View
        style={[
          active >= page ? styles.SignformHeader : styles.SignUpHeaderInactive,
        ]}
      />
    </View>
  );
};

export default Header;
