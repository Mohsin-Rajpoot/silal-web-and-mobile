import { View, Text } from "react-native";
import React from "react";
import HeaderBack from "../../components/native/HeaderBack";
import CommonStyle from "../../styles";
import HeaderHeading from "../../components/headerHeading";
import CustomText from "../../components/CustomText";
import TextInput from "../../components/native/TextInput";
import styles from "./style";
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from "../../components/native/AuthButton";
const ChangePassword = () => {
  return (
    <View style={CommonStyle.mainContainer}>
      <HeaderBack />
      <HeaderHeading headingName="Create a new password" />
      <View style={CommonStyle.CommonView}>
        <CustomText label="Password" textStyle={styles.phoneNumberText} />
        <TextInput placeholderText="Enter password" />
        <CustomText
          label="Confirm Password"
          textStyle={styles.phoneNumberText}
        />
        <TextInput placeholderText="Confirm password" />
        <View style={styles.changePassword}>
          <CustomText
            label="Your password should contain :"
            textStyle={styles.phoneNumberText}
          />

          <View style={styles.passwordWaring}>
            <AntDesign name="checkcircleo" style={styles.passwordWarningText} />
            <Text style={styles.passwordWarningText}>8 to 20 characters</Text>
          </View>
          <View style={styles.passwordWaring}>
            <AntDesign name="checkcircleo" style={styles.passwordWarningText} />
            <Text style={styles.passwordWarningText}>
              Letters, numbers, special characters
            </Text>
          </View>
        </View>

        <Button name="Change Password" />
      </View>
    </View>
  );
};

export default ChangePassword;
