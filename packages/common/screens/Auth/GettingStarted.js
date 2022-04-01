import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import React from "react";
import HeaderHeading from "../../components/headerHeading";
import HeaderBack from "../../components/native/HeaderBack";
import CommonIcon from "../../components/native/AuthCommonIcon";
import AuthButton from "../../components/native/AuthButton";
import { useTranslation } from "react-i18next";
import CustomText from "../../components/CustomText";
import styles from "./style";
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
              <>
                <HeaderHeading
                  headingName={"Wait for the information to be verified"}
                  headingDetail={
                    "Verification usually takes up to 1 hour. We suggest you familiarize yourself with the instructions for working with the application."
                  }
                  headerStyle={styles.headingDetail}
                />
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                  <Text style={styles.checkout_text}>Checkout our</Text>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.checkoutInnerText}>
                      {" "}
                      Terms of Service
                    </Text>
                  </TouchableOpacity>

                  <Text style={styles.checkout_text}> and</Text>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.checkoutInnerText}> FAQS</Text>
                  </TouchableOpacity>
                </View>
              </>
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
