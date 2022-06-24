import { View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import HeaderBack from "../../components/native/HeaderBack";
import CommonStyle from "../../styles";
import IsTablet from "../../components/native/IsTablet";
import { useTranslation } from "react-i18next";
import CustomText from "../../components/CustomText";
import styles from "./style";
import TextInput from "../../components/native/TextInput";
import { verticalScale } from "react-native-size-matters";
import AuthButton from "../../components/native/AuthButton";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";

const SellerInformation = ({ navigation }) => {
  const { t } = useTranslation();
  const init = {
    password: "",
    email: "",
    error: "",
  };
  const [text, setText] = useState(init);
  const goBack = () => {
    navigation.navigate("Login", {
      params: { signUp: true, signupEmail: true },
    });
  };
  const moveForward = () => {
    navigation.navigate("GettingStarted");
  };
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <HeaderBack
          name={!IsTablet ? t("SellerInformation") : ""}
          onGoBack={goBack}
        />
        {!IsTablet ? (
          <View />
        ) : (
          <CustomText
            label={t("SellerInformation")}
            textStyle={styles.SellerInformationTitle}
          />
        )}
        <View style={{ margin: verticalScale(5) }}>
          <View style={{ flexDirection: "row", marginTop: verticalScale(10) }}>
            <CustomText
              label={!IsTablet ? t("FirstNameMobile") : t("FirstName")}
              textStyle={
                !IsTablet
                  ? styles.formTextHeadingMobile
                  : styles.formTextHeading
              }
            />
            <CustomText label="*" textStyle={styles.star} />
          </View>
          <TextInput
            placeholderText={!IsTablet ? "" : t("enter_full_name")}
            onChangeText={(value) => {
              setText({ ...text, email: value });
            }}
            value={text.email}
            isTab={IsTablet}
          />
          <View style={{ flexDirection: "row", marginTop: verticalScale(10) }}>
            <CustomText
              label={!IsTablet ? t("SecondName") : t("LastName")}
              textStyle={
                !IsTablet
                  ? styles.formTextHeadingMobile
                  : styles.formTextHeading
              }
            />
            <CustomText label="*" textStyle={styles.star} />
          </View>
          <TextInput
            placeholderText={!IsTablet ? "" : t("enter_full_name")}
            onChangeText={(value) => {
              setText({ ...text, email: value });
            }}
            value={text.email}
            isTab={IsTablet}
          />
          <View style={{ flexDirection: "row", marginTop: verticalScale(10) }}>
            <CustomText
              label={t("PersonalEmail")}
              textStyle={
                !IsTablet
                  ? styles.formTextHeadingMobile
                  : styles.formTextHeading
              }
            />
            <CustomText label="*" textStyle={styles.star} />
          </View>
          <TextInput
            placeholderText={!IsTablet ? "" : t("email_address")}
            onChangeText={(value) => {
              setText({ ...text, email: value });
            }}
            value={text.email}
            isTab={IsTablet}
          />
          <View style={{ flexDirection: "row", marginTop: verticalScale(10) }}>
            <CustomText
              label={!IsTablet ? t("PersonID") : t("ID_Number")}
              textStyle={
                !IsTablet
                  ? styles.formTextHeadingMobile
                  : styles.formTextHeading
              }
            />
            <CustomText label="*" textStyle={styles.star} />
          </View>
          <TextInput
            placeholderText={!IsTablet ? "" : t("yourID")}
            onChangeText={(value) => {
              setText({ ...text, email: value });
            }}
            value={text.email}
            isTab={IsTablet}
          />
        </View>
        <View style={{ height: verticalScale(!IsTablet ? 260 : 200) }} />
        <View style={styles.outerContainer}>
          {!IsTablet ? (
            <View />
          ) : (
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.backIconInnerContainer}
              onPress={goBack}
            >
              <Icon
                name="arrowleft"
                type="antdesign"
                color={colors.black}
                size={28}
              />

              <CustomText label={t("back")} textStyle={styles.backText} />
            </TouchableOpacity>
          )}
          <View style={{ width: "40%" }}>
            <AuthButton
              name={t("Next_step")}
              buttonStyling={
                !IsTablet
                  ? [
                      styles.formButtonMobile,
                      {
                        backgroundColor: colors.primaryGreenColor,
                        padding: verticalScale(10),
                      },
                    ]
                  : styles.formButton
              }
              onPress={moveForward}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SellerInformation;
