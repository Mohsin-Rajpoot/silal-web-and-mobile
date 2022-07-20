import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import * as userAction from "../../store/SellerReducers/User/actions";
import Loader from "../../Loader";
import Toast from "react-native-simple-toast";
const Verification = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.User);
  const { params } = route?.params;
  const { t } = useTranslation();
  const isTab = DeviceInfo.isTablet();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  console.log("----Loading", loading);

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

  const phone_numberVerification_SignUp = (data) => {
    if (data.length < 4) {
      setError(t("validCode"));
    } else {
      dispatch(
        userAction.verify_phone_after_signup({
          data,
          cb: (res) => {
            if (res.http_status_code == 200) {
              Toast.show(t("Account_verified"));
              goSignUpDetail();
            } else if (res.http_status_code == 401) {
              Toast.show(t("Enter_validCode"));
            }
          },
        })
      );
    }
  };
  const phone_numberVerification_AfterLogin = (data) => {
    if (data.length < 4) {
      setError(t("validCode"));
    } else {
      dispatch(
        userAction.userPhoneVerification_LOGIN_Saga({
          data,
          cb: (res) => {
            if (res.http_status_code == 200) {
              Toast.show(t("Account_verified"));
            } else if (res.http_status_code == 401) {
              Toast.show(t("Enter_validCode"));
            }
          },
        })
      );
    }
  };
  const email_numberVerification_AfterLogin = (data) => {
    if (data.length < 4) {
      setError(t("validCode"));
    } else {
      dispatch(
        userAction.userEmailVerification({
          data,
          cb: (res) => {
            if (res.http_status_code == 200) {
              Toast.show(t("Account_verified"));
            } else if (res.http_status_code == 401) {
              Toast.show(t("Enter_validCode"));
            }
          },
        })
      );
    }
  };
  const email_numberVerification_SignUp = (data) => {
    if (data.length < 5) {
      setError(t("validCode"));
    } else {
      dispatch(
        userAction.verify_email_after_signup({
          data,
          cb: (res) => {
            if (res.http_status_code == 200) {
              Toast.show(t("Account_verified"));
              goSellerInformation();
            } else if (res.http_status_code == 401) {
              Toast.show(t("Enter_validCode"));
            }
          },
        })
      );
    }
  };

  const resend_verification_code = (data) => {
    console.log("---data api hit");
    setCode("");
    dispatch(userAction.userSignUpSaga({ data }));
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
                ? params.email
                : ""
            }
          />

          {/* <View style={{ flex: 1 }}> */}
          <OTPInputView
            keyboardType="email-address"
            autoFocusOnLoad={true}
            pinCount={
              params?.active == 1
                ? 5
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
            onCodeChanged={(value) => setCode(value)}
          />
          {error.length > 1 ? (
            <CustomText label={error} textStyle={CommonStyle.errorMessage} />
          ) : (
            <View />
          )}
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => resend_verification_code(params.phone)}
            >
              <CustomText
                label={t("resend_code") + " "}
                textStyle={styles.timerCode}
              />
            </TouchableOpacity>
            <TimerOTP />
          </TouchableOpacity>
          {/* </View> */}
          {loading ? <Loader /> : <View />}
          <View style={{ flexGrow: 1 }} />
          {console.log("-----Code", code)}
          <Button
            name={params?.active == 3 ? t("Submit") : t("Verify")}
            onPress={() => {
              params.active == 3
                ? goToChangePassword()
                : params?.active == 2 && params.isLogin == true
                ? email_numberVerification_AfterLogin({
                  otp:code,
                  email:params.email
                })
                : params?.active == 2 && params.email
                ? email_numberVerification_SignUp({
                    otp: code,
                    email: params.email,
                  })
                : params?.activeTab == 5
                ? goSellerInformation()
                : params?.activeTab == 4
                ? goSignUpDetail()
                : params.active == 1 && params.isLogin == true
                ? phone_numberVerification_AfterLogin({
                    otp: code,
                    phone: params.phone,
                  })
                : params?.active == 1
                ? phone_numberVerification_SignUp({
                    otp: code,
                    phone: params.phone,
                  })
                : goToSignUpForm();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const TimerOTP = ({ phone, resend }) => {
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(0);
  const [isDisable, setDisable] = useState(true);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setDisable(false);
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds]);
  return (
    <Text style={styles.timerCode}>
      {minutes === 0 && seconds === 0 ? (
        " "
      ) : (
        <Text textStyle={styles.timerCode}>
          {minutes}:{seconds < 10 ? `0${seconds}s` : `${seconds}s`}
        </Text>
      )}
    </Text>
  );
};

export default Verification;
