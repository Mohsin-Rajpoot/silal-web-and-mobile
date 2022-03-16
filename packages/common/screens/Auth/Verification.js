import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import HeaderBack from "../../components/native/HeaderBack";
import CommonStyle from "../../styles/index";
import HeaderHeading from "../../components/headerHeading";
import CustomText from "../../components/CustomText";
import styles from "./style";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import Button from "../../components/native/AuthButton";
import AuthCustomText from "../../components/native/AuthCustomText";
const Verification = ({ route, navigation }) => {
  const { params } = route?.params;

  const [code, setCode] = useState("");
  const detail = "We will email your a code to reset password";
  const goToChangePassword = () => {
    navigation.navigate("ChangePassword");
  };
  const goGettingStarted = () => {
    navigation.navigate("GettingStarted");
  };
  const goChooseAccount = () => {
    navigation.navigate("ChooseAccount");
  };
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      <HeaderBack name="Verification" />

      <HeaderHeading
        headingName={`${
          params?.active == 3 ? "Enter 6-digit code" : "Verification code"
        }`}
      />
      <AuthCustomText
        fisrtText={
          params?.active == 3
            ? detail
            : ` We have sent the code verification to your ${
                params?.active == 1
                  ? "mobile number"
                  : params?.active == 2
                  ? "email"
                  : ""
              } `
        }
        SecondText={
          params?.active == 1
            ? "+7(934) 455 34 45"
            : params?.active == 2
            ? "willie.jennings@example.com"
            : ""
        }
      />

      <View style={{ flex: 1 }}>
        <OTPInputView
          autoFocusOnLoad={true}
          pinCount={params?.active == 1 ? 5 : params?.active == 2 ? 6 : 5}
          style={styles.optStyling}
          codeInputFieldStyle={styles.optContainer}
          handleChange={(value) => setCode(value)}
        />
        <CustomText label="Resend code 3:23" textStyle={styles.timerCode} />
      </View>
      <Button
        name={params?.active == 3 ? "Submit" : "Verify"}
        onPress={() => {
          params.active == 3
            ? goToChangePassword()
            : params?.active == 1
            ? goChooseAccount()
            : goGettingStarted();
        }}
      />
    </SafeAreaView>
  );
};

export default Verification;
