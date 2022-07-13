import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import styles from "./style";
import IsTablet from "../IsTablet";
import { verticalScale } from "react-native-size-matters";
import colors from "../../../assets/colors";
const index = ({ name, backIcon, onGoBack }) => {
  return (
    <View style={styles.mainContainer}>
      {backIcon ? (
        <View />
      ) : (
        <View style={styles.backIconContainer}>
          <TouchableOpacity activeOpacity={0.6} onPress={onGoBack}>
            <Icon type="entypo" name="chevron-left" size={verticalScale(20)} color={colors.black} />

          </TouchableOpacity>
        </View>
      )}
      <View style={styles.headingContainer}>
        <Text style={!IsTablet ? styles.headerText : styles.heading}>
          {name}
        </Text>
      </View>
    </View>
  );
};

export default index;

