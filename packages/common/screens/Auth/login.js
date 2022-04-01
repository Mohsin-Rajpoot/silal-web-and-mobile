import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import LoginSignUpButton from "../../components/native/LoginSignUp";
import CommonStyle from "../../styles";
import styles from "./style";
import Button from "../../components/native/AuthButton";
import PhoneInput from "react-native-phone-number-input";
import TextInput from "../../components/native/TextInput";

import HeaderBack from "../../components/native/HeaderBack";
import colors from "../../assets/colors";
import { useTranslation } from "react-i18next";
const Login = ({ navigation, route }) => {
  const { t } = useTranslation();
  const data = route?.params;
  const [active, setActive] = useState(1);
  const [text, setText] = useState("");
  const goForgerPassword = () => {
    navigation.navigate("ForgetPassword");
  };
  const goBack = () => {
    navigation.pop();
  };
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      <HeaderBack
        name={data?.params?.signUp ? t("signup") : t("login")}
        onGoBack={goBack}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <LoginSignUpButton active={active} setActive={setActive} />

        <View style={styles.innerContainer}>
          {active == 2 ? (
            <View>
              <Text style={styles.phoneNumberText}>{t("email")}</Text>
              <TextInput placeholderText="email.example@gmail.com" />
              <Text style={styles.phoneNumberText}>{t("Password")}</Text>
              <TextInput
                placeholderText={t("Enter_password")}
                secureText={true}
                password={true}
              />
            </View>
          ) : active == 1 ? (
            <View>
              <Text style={styles.phoneNumberText}>{t("phone_number")}</Text>
              <PhoneInput
                containerStyle={CommonStyle.phoneNumberInput}
                textContainerStyle={styles.textContainer}
                textInputProps={{ fontSize: 12, padding: 0, marginTop: 0 }}
                countryPickerButtonStyle={styles.countyPickerContainer}
                textInputStyle={{ color: colors.black }}
                codeTextStyle={styles.codeText}
                defaultCode="RU"
                layout="second"
                onChangeText={(value) => setText(value)}
                // onChangeFormattedText={(value) => setText(value)}
                value={text}
                placeholder={t("phone_number")}
              />
            </View>
          ) : (
            <View />
          )}
        </View>
        <View style={{ flexGrow: 1 }} />
        <Button
          changeColor={true}
          name={
            data?.params?.signUp
              ? t("next")
              : active == 2
              ? t("login")
              : t("Continue")
          }
          onPress={() =>
            navigation.navigate("Verification", {
              params: {
                activeTab: data?.params?.signUp ? 4 : null,
                active: active,
              },
            })
          }
        />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginVertical: 15,
          }}
        >
          {data?.params?.signUp ? (
            <View style={{ justifyContent: "center" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.signUpDetailText}>
                  {t("by_signing_up")}
                </Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={styles.termCondition}>
                    {" "}
                    {t("Terms-of-services")}{" "}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.signUpDetailText}>{t("and")}</Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={styles.termCondition}>
                    {" "}
                    {t("Privacy-policy")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Text style={styles.bottomText}>{t("trouble_sign_in")}</Text>
          )}

          {data?.params?.signUp ? (
            <View />
          ) : (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                active == 2 && goForgerPassword();
              }}
            >
              <Text style={styles.nestedBottomText}>
                {" "}
                {active == 1 ? t("contactus") : t("forget_password")}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
