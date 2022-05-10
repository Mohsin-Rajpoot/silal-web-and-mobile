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
import PhoneNumber from "../../components/native/PhoneNumberInput";
import HeaderBack from "../../components/native/HeaderBack";
import colors from "../../assets/colors";
import { useTranslation } from "react-i18next";
import * as userAction from "../../store/User/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader";
const Login = ({ navigation, route }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.User);
  console.log("Loading", loading);
  const data = route?.params;
  const init = {
    password: "",
    email: "",
    error: "",
  };
  const [active, setActive] = useState(1);
  const [text, setText] = useState(init);

  // const rules = [
  //   {
  //     isValid: validateEmail(text.email),
  //     message: 'Email should be valid',
  //   },
  //   {
  //     isValid: validatePassword(text.password),
  //     message: 'Password should be greater than 8 and must contain atleast one capital alphabet, one small alphabet and one digit',
  //   }
  // ]

  const goForgerPassword = () => {
    navigation.navigate("ForgetPassword");
  };
  const goBack = () => {
    navigation.pop();
  };
  const loginFunction = (data) => {
    var rePass = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,9})$/;
    if (re.test(text.password) === false) {
      return setText({
        ...text,
        error:
          "Password should be greater than 8 and must contain atleast one capital alphabet, one small alphabet and one digit",
      });
    } else if (rePass.test(text.email) === false) {
      return setText({ ...text, error: "Email should be valid" });
    } else {
      dispatch(userAction.userLoginSaga(data));
    }
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
              <TextInput
                placeholderText="email.example@gmail.com"
                onChangeText={(value) => {
                  setText({ ...text, email: value });
                }}
                value={text.email}
              />
              {text.error ? (
                <Text style={styles.errorMessage}>{text.error}</Text>
              ) : (
                <View />
              )}
              <Text style={styles.phoneNumberText}>{t("Password")}</Text>
              <TextInput
                placeholderText={t("Enter_password")}
                secureText={true}
                password={true}
                onChangeText={(value) => setText({ ...text, password: value })}
                value={text.password}
              />
            </View>
          ) : active == 1 ? (
            <View>
              <Text style={styles.phoneNumberText}>{t("phone_number")}</Text>
              <PhoneInput
                containerStyle={CommonStyle.phoneNumberInput}
                textContainerStyle={styles.textContainer}
                textInputProps={{
                  fontSize: 12,
                  padding: 0,
                  marginTop: 0,
                  maxLength: 10,
                }}
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
        {loading && <Loader />}
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
          onPress={() => {
            loginFunction(text);
            setTimeout(() => {
              navigation.navigate("Verification", {
                params: {
                  activeTab: data?.params?.signUp ? 4 : null,
                  active: active,
                },
              });
            }, 1000);
          }}
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
