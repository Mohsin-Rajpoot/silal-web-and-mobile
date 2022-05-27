import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useRef } from "react";
import HeaderHeading from "../../components/headerHeading";
import HeaderBack from "../../components/native/HeaderBack";
import CommonIcon from "../../components/native/AuthCommonIcon";
import AuthButton from "../../components/native/AuthButton";
import { useTranslation } from "react-i18next";
import CustomText from "../../components/CustomText";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";
import Toast from "react-native-easy-toast";
import IsTablet from "../../components/native/IsTablet";
const GettingStarted = ({ navigation, route }) => {
  const { t } = useTranslation();
  const toastRef = useRef();
  const data = route?.params;
  const goToSignUpForm = () => {
    navigation.navigate("SignUpForm");
  };
  const goToMainStack = () => {
    setTimeout(() => {
      navigation.navigate("MainStack");
    }, 500);
  };
  const goBack = () => {
    navigation.pop();
  };
  const showToast = () => {
    return toastRef.current.show(
      <View style={styles.ToastMainView}>
        <Ionicons name="md-checkmark-circle" style={styles.IconToast} />
        <Text style={styles.ToastParagraph}>
          Questionnaire sent successfully
        </Text>
        <TouchableOpacity
          onPress={() => {
            toastRef.current.close(), alert("undo");
          }}
        >
          <Text style={styles.ActionToast}>OK</Text>
        </TouchableOpacity>
      </View>,
      3000
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              data?.params?.gettingStarted
                ? showToast() & goToMainStack()
                : goToSignUpForm();
            }}
            buttonStyling={!IsTablet ? styles.formButtonMobile : null}
          />
        </View>
        <Toast
          ref={toastRef}
          style={styles.Tost}
          position="top"
          fadeInDuration={750}
          fadeOutDuration={800}
          opacity={1}
          textStyle={{ color: "red" }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default GettingStarted;
