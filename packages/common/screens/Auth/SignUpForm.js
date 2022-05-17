import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import PagerView from "react-native-pager-view";
import FirstPage from "./SignUpFormPages/FirstPage";
import HeaderBack from "../../components/native/HeaderBack";
import Header from "./SignUpFormPages/Molecules/Header";
import SecondPage from "./SignUpFormPages/SecondPage";
import styles from "./style";
import CustomText from "../../components/CustomText";
import AuthButton from "../../components/native/AuthButton";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";
import ThirdPage from "./SignUpFormPages/ThirdPage";
import { useTranslation } from "react-i18next";

import IsTablet from "../../components/native/IsTablet";
const SignUpForm = ({ navigation }) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [page, setPage] = useState(0);
  const isTab = IsTablet;
  const goprev = () => {
    if (page > 0) {
      const newStep = Math.max(0, page - 1);
      ref.current?.setPageWithoutAnimation(newStep);
      setPage(newStep);
    } else {
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "AuthStack" }],
        });
      }, 400);
    }
  };
  const moveForward = () => {
    const nextStep = Math.min(4, page + 1);

    if (nextStep === 3) {
      goToGettingStarted();
    } else {
      ref.current?.setPageWithoutAnimation(nextStep);
      setPage(nextStep);
    }
  };
  const goToGettingStarted = () => {
    navigation.navigate("GettingStarted", {
      params: {
        gettingStarted: true,
      },
    });
  };
  return (
    <>
      <HeaderBack name={`${t("Step")} ${page + 1}/3`} />
      {!isTab ? (
        <CustomText
          label={t("questionnaire")}
          textStyle={styles.questionnaire}
        />
      ) : (
        <View />
      )}
      <View style={styles.headerContainer}>
        <Header
          label={!isTab ? t("basicInfo") : t("Basic_information")}
          textStyle={styles.headerText}
          textStyleInActive={styles.headerTextInactive}
          page={0}
          active={page}
        />
        <Header
          label={t("Contacts")}
          textStyleInActive={styles.headerTextInactive}
          textStyle={styles.headerText}
          page={1}
          active={page}
        />
        <Header
          label={t("Detail")}
          textStyleInActive={styles.headerTextInactive}
          textStyle={styles.headerText}
          page={2}
          active={page}
        />
      </View>

      <PagerView
        style={{ flex: 1, margin: 10 }}
        initialPage={0}
        scrollEnabled={false}
        ref={ref}
      >
        <View key="1">
          <FirstPage />
        </View>
        <View key="2">
          <SecondPage />
        </View>
        <View key="3">
          <ThirdPage />
        </View>
      </PagerView>
      <View style={styles.outerContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={goprev}
          style={styles.backIconInnerContainer}
        >
          <Icon
            name="arrowleft"
            type="antdesign"
            color={colors.black}
            size={28}
          />

          <CustomText label={t("back")} textStyle={styles.backText} />
        </TouchableOpacity>

        <AuthButton
          name={page == 2 ? t("Submit") : t("Next_step")}
          buttonStyling={styles.formButton}
          onPress={moveForward}
        />
      </View>
    </>
  );
};

export default SignUpForm;
