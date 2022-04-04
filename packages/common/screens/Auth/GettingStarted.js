import { View, ScrollView } from "react-native";
import React from "react";
import HeaderHeading from "../../components/headerHeading";
import HeaderBack from "../../components/native/HeaderBack";
import CommonIcon from "../../components/native/AuthCommonIcon";
import AuthButton from "../../components/native/AuthButton";
import { useTranslation } from "react-i18next";
const GettingStarted = ({ navigation, route }) => {
  const { t } = useTranslation();
  const data = route?.params;
  const goToSignUpForm = () => {
    navigation.navigate("SignUpForm");
  };
  const goToMainStack = () => {
    navigation.navigate("MainStack");
  };
  const goBack = () => {
    navigation.pop();
  };
  return (
    <>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexGrow: 1 }}>
          <HeaderBack name={t("Registration")} onGoBack={goBack} />

          <View style={{ width: "70%", alignSelf: "center" }}>
            {data?.params?.gettingStarted ? (
              <View />
            ) : (
              <HeaderHeading
                headingName={t("Fill_out_questionnaire")}
                headingDetail={t("questionnaire_detail")}
              />
            )}
            <CommonIcon />
            {data?.params?.gettingStarted ? (
              <HeaderHeading
                headingName={"Wait for the information to be verified"}
                headingDetail={
                  "Verification usually takes up to 1 hour. We suggest you familiarize yourself with the instructions for working with the application."
                }
              />
            ) : (
              <View />
            )}
          </View>
        </View>
        <View style={{ marginBottom: 30 }}>
          <AuthButton
            name={data?.params?.gettingStarted ? "How to work" : t("Start")}
            onPress={() => {
              data?.params?.gettingStarted ? goToMainStack() : goToSignUpForm();
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default GettingStarted;
