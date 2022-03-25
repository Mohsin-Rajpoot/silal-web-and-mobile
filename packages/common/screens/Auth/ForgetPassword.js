import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import CommonStyle from "../../styles";
import HeaderBack from "../../components/native/HeaderBack";
import HeaderHeading from "../../components/headerHeading";
import CustomText from "../../components/CustomText";
import styles from "./style";
import TextInput from "../../components/native/TextInput";
import Button from "../../components/native/AuthButton";
const ForgetPassword = ({ navigation }) => {
  const goVerification = () => {
    navigation.navigate("Verification", {
      params: {
        active: 3,
      },
    });
  };
  const goBack = () => {
    navigation.pop();
  };
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <HeaderBack name="Reset Password" onGoBack={goBack} />
        <View style={{ marginVertical: 20 }}>
          <HeaderHeading
            headingName="Enter your email"
            headingDetail="We will email your a code to reset password"
          />
        </View>
        <View style={CommonStyle.CommonView}>
          <CustomText label="Email" textStyle={styles.phoneNumberText} />
          <TextInput placeholderText="email.example@gmail.com" />
        </View>
        <Button name="Reset" onPress={goVerification} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;
