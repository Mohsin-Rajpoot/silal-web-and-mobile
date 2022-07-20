import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import HeaderBack from "../../components/native/HeaderBack";
import CommonStyle from "../../styles/index";
import HeaderHeading from "../../components/headerHeading";
import CustomText from "../../components/CustomText";
import styles from "./style";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import Button from "../../components/native/AuthButton";
import AuthCustomText from "../../components/native/AuthCustomText";
import { useTranslation } from "react-i18next";
import DeviceInfo from "react-native-device-info";
import colors from "../../assets/colors";
const Verification = ({ route, navigation }) => {
  const { params } = route?.params;
  const { t } = useTranslation();
  const isTab = DeviceInfo.isTablet();
  const [code, setCode] = useState("");

  const goToChangePassword = () => {
    navigation.navigate("ChangePassword");
  };
  const goSignUpDetail = () => {
    navigation.navigate("Login", {
      params: { signUp: true, signupEmail: true },
    });
  };
  const goSellerInformation = () => {
    navigation.navigate("SellerInformation");
  };
  const goChooseAccount = () => {
    navigation.navigate("ChooseAccount");
  };
  const goToConformationAccount = () => {
    navigation.navigate("ConformationAccount");
  };
  const goToSignUpForm = () => {
    navigation.navigate("SignUpForm");
  };
  const goBack = () => {
    navigation.pop();
  };
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      <HeaderBack
        name={params.active == 3 ? t("Reset_password") : t("verification")}
        onGoBack={goBack}
      />
      {console.log("-----Params", params)}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexGrow: 1 }}>
          <HeaderHeading
            headingName={`${
              params?.active == 3
                ? t("enter_6_digit_code")
                : t("Verification_code")
            }`}
          />
          <AuthCustomText
            fisrtText={
              params?.active == 3
                ? t("we_will_email_you_code")
                : ` ${t("Verification_email_detail")} ${
                    params?.active == 1
                      ? t("mobile_number")
                      : params?.active == 2
                      ? t("email_text")
                      : ""
                  } `
            }
            SecondText={
              params?.active == 1
                ? params.phone
                : params?.active == 2
                ? "willie.jennings@example.com"
                : ""
            }
          />

          {/* <View style={{ flex: 1 }}> */}
          <OTPInputView
            autoFocusOnLoad={true}
            pinCount={
              params?.active == 1
                ? 6
                : params?.active == 2
                ? 6
                : params?.active == 3
                ? 6
                : 6
            }
            style={styles.optStyling}
            codeInputHighlightStyle={{ borderColor: colors.primary }}
            codeInputFieldStyle={
              !isTab ? styles.optContainerMobile : styles.optContainer
            }
            handleChange={(value) => setCode(value)}
          />
          <CustomText
            label={t("resend_code") + " 3:23"}
            textStyle={styles.timerCode}
          />
          {/* </View> */}
          <View style={{ flex: 1 }} />
          <Button
            name={params?.active == 3 ? t("Submit") : t("Verify")}
            onPress={() => {
              params.active == 3
                ? goToChangePassword()
                : params?.active == 2
                ? goChooseAccount()
                : params?.activeTab == 5
                ? goSellerInformation()
                : params?.activeTab == 4
                ? goSignUpDetail()
                : params?.active == 1
                ? goToConformationAccount()
                : goToSignUpForm();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Verification;
