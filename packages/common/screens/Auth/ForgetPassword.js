import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import CommonStyle from "../../styles";
import HeaderBack from "../../components/native/HeaderBack";
import HeaderHeading from "../../components/headerHeading";
import CustomText from "../../components/CustomText";
import styles from "./style";
import TextInput from "../../components/native/TextInput";
import Button from "../../components/native/AuthButton";
import { useTranslation } from "react-i18next";
const ForgetPassword = ({ navigation }) => {
  const { t } = useTranslation();
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
        <HeaderBack name={t("Reset_password")} onGoBack={goBack} />
        <View style={{ marginVertical: 20 }}>
          <HeaderHeading
            headingName={t("enter_your_email")}
            headingDetail={t("we_will_email_you_code")}
          />
        </View>
        <View style={CommonStyle.CommonView}>
          <CustomText label={t("email")} textStyle={styles.phoneNumberText} />
          <TextInput placeholderText="email.example@gmail.com" />
        </View>
        <Button name={t("Reset")} onPress={goVerification} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;
