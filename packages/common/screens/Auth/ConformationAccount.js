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
import { verticalScale } from "react-native-size-matters";
import colors from "../../assets/colors";
const ConformationAccount = ({ navigation, route }) => {
  const { t } = useTranslation();
  const toastRef = useRef();
  const data = route?.params;
  console.log("------Routes", data);
  const goToSignUpForm = () => {
    navigation.navigate("SignUpForm", data);
  };

  const goToChoseAccount = () => {
    navigation.navigate("ChooseAccount");
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
          {!IsTablet ? (
            <HeaderBack name={t("Welcome")} onGoBack={goBack} />
          ) : (
            <View />
          )}

          <View
            style={{ width: !IsTablet ? "90%" : "70%", alignSelf: "center" }}
          >
            <CommonIcon />
            <CustomText label={t("opps")} textStyle={styles.oppsText} />
            <CustomText label={t("OppsDetail")} textStyle={styles.opsDetail} />
            <View
              style={{
                flexDirection: !IsTablet ? "column" : "row",
                alignItems: "center",
                marginVertical: verticalScale(50),
                alignSelf: "center",
              }}
            >
              <CustomText
                label={t("SellerInviteId")}
                textStyle={styles.sellerIdText}
              />
              <CustomText
                label={"#908432812"}
                textStyle={[styles.sellerIdText, { color: colors.primary }]}
              />
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 30 }}>
          <AuthButton
            name={t("CreatebussinessAccount")}
            onPress={goToSignUpForm}
            buttonStyling={
              !IsTablet ? styles.formButtonMobile : styles.formButton1
            }
          />
          <AuthButton
            name={t("contactBusinessowner")}
            onPress={goToSignUpForm}
            buttonStyling={
              !IsTablet
                ? [
                    styles.formButtonMobile,
                    { backgroundColor: colors.Primary20 },
                  ]
                : [styles.formButton1, { backgroundColor: colors.Primary20 }]
            }
            changeColor={true}
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

export default ConformationAccount;
