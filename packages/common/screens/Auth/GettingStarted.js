import { View, ScrollView } from "react-native";
import React from "react";
import HeaderHeading from "../../components/headerHeading";
import HeaderBack from "../../components/native/HeaderBack";
import CommonIcon from "../../components/native/AuthCommonIcon";
import AuthButton from "../../components/native/AuthButton";

const GettingStarted = ({ navigation, route }) => {
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
          <HeaderBack name={"Registration"} onGoBack={goBack} />

          <View style={{ width: "70%", alignSelf: "center" }}>
            {data?.params?.gettingStarted ? (
              <View />
            ) : (
              <HeaderHeading
                headingName={"Fill out a questionnaire"}
                headingDetail={
                  "In order to register on the platform, please tell us in detail about your business and wait till for verification"
                }
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
            name={data?.params?.gettingStarted ? "How to work" : "Start"}
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
