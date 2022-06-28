import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  I18nManager,
  ScrollView,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./style";
import { screens } from "../../assets/Data";
import {
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from "react-native-responsive-screen-hooks";
import AuthButton from "../../components/native/AuthButton";
import DropDownPicker from "react-native-dropdown-picker";
import Preference from "react-native-preference";
import RNRestart from "react-native-restart";
import { useTranslation } from "react-i18next";
import colors from "../../assets/colors";
import fonts from "../../assets/fonts";
import { Icon } from "react-native-elements";
import DeviceInfo from "react-native-device-info";
import { verticalScale } from "react-native-size-matters";
const OnBoarding = ({ navigation }) => {
  const { t } = useTranslation();
  const isTab = DeviceInfo.isTablet();

  const getLang = Preference.get("languageValue");
  const [orientation, setOrientation] = useState("portrait");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(getLang);
  const [items, setItems] = useState([
    { label: t("English"), value: "en" },
    { label: t("Arabic"), value: "ar" },
    { label: t("hebrew"), value: "he" },
  ]);
  const ref = useRef(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    lor(setOrientation);

    return () => {
      rol();
    };
  }, []);
  const goBack = () => {
    if (page - 1 >= 0) {
      ref?.current?.goToSlide(page - 1);
      setPage(page - 1);
    } else {
      //   navigation.navigate("Registration");
    }
  };
  const goToSignUp = () => {
    navigation.navigate("Login", { params: { signUp: true } });
  };
  const goToLogin = () => {
    navigation.navigate("Login", { params: { signUp: false } });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          {page == 3 ? (
            <View />
          ) : (
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {!isTab && (page == 1 || page == 2) ? (
                isTab && page == 3 ? (
                  <View />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => goBack()}
                  >
                    <View style={styles.backIcon}>
                      <Icon
                        name="chevron-left"
                        type="entypo"
                        size={verticalScale(22)}
                        color={colors.primary}
                      />
                    </View>
                  </TouchableOpacity>
                )
              ) : (
                <View />
              )}

              <TouchableOpacity activeOpacity={0.6} onPress={() => setPage(3)}>
                <Text
                  style={!isTab ? styles.skipbuttonMobile : styles.skipbutton}
                >
                  {!isTab && page == 2 ? "" : t("skip")}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={{ flex: 1 }}>
            <AppIntroSlider
              showNextButton={false}
              showDoneButton={false}
              ref={ref}
              data={screens}
              keyExtractor={(item, index) => {
                item?.id + index.toString();
              }}
              dotStyle={page == 3 || (!isTab && page == 2) ? null : styles.dot}
              onSlideChange={(index) => setPage(index)}
              activeDotStyle={
                page == 3 || (!isTab && page == 2) ? null : styles.underScore
              }
              renderItem={({ item, index }) => (
                <View style={styles.screenContainer}>
                  <View style={{ height: verticalScale(70) }} />
                  <View
                    style={!isTab ? styles.imageViewMobile : styles.imageView}
                  />
                  <View
                    style={
                      !isTab
                        ? styles.onBoardingDetailconatinerMobile
                        : styles.onBoardingDetailconatiner
                    }
                  >
                    <Text
                      style={!isTab ? styles.headingMobile : styles.heading}
                    >
                      {item?.heading}
                    </Text>
                    <Text style={!isTab ? styles.bodyMobile : styles.body}>
                      {item?.body}
                    </Text>
                  </View>
                  {!isTab && page == 2 ? (
                    <>
                      <View style={{ flex: 1 }} />
                      <AuthButton
                        textStyle={{ fontSize: verticalScale(14) }}
                        buttonStyling={styles.letsGoButton}
                        name={t("letsGo")}
                        onPress={() => setPage(3)}
                        isTab={isTab}
                      />
                    </>
                  ) : (
                    <View />
                  )}
                  {page == 3 ? (
                    <>
                      <View style={{ height: verticalScale(10) }} />
                      <View
                        style={{
                          width: !isTab ? "90%" : "65%",
                          justifyContent: "center",
                          flexDirection: "row",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: verticalScale(14),
                            color: colors.black,
                            alignSelf: "flex-start",
                            fontFamily: fonts.bold,
                          }}
                        >
                          {t("ChangeLanguage")}
                        </Text>
                      </View>

                      <View
                        style={{
                          width: !isTab ? "90%" : "65%",
                          alignSelf: "center",
                          marginBottom: 25,
                          marginBottom: 5,
                        }}
                      >
                        <DropDownPicker
                          open={open}
                          value={value}
                          items={items}
                          setOpen={setOpen}
                          setValue={setValue}
                          setItems={setItems}
                          placeholder="Select Language"
                          style={styles.dropDownStyle12}
                          placeholderStyle={styles.dropDownPlaceHolder}
                          dropDownContainerStyle={styles.dropdownContainer}
                          iconContainerStyle={{ backgroundColor: "red" }}
                          onChangeValue={(language) => {
                            i18n.changeLanguage(language).then(() => {
                              I18nManager.forceRTL(
                                language === "ar" || language === "he"
                              );
                              RNRestart.Restart();
                            });
                            Preference.setWhiteList([]);
                            Preference.set("languageValue", language);
                          }}
                        />
                      </View>
                      <View style={{ height: verticalScale(50) }} />
                      <View
                        style={{
                          flex: 0.6,
                          justifyContent: "flex-end",
                          width: "100%",
                        }}
                      >
                        <AuthButton
                          textStyle={{ fontSize: verticalScale(14) }}
                          buttonStyling={
                            !isTab ? styles.letsGoButton : styles.button
                          }
                          name={t("signup")}
                          onPress={goToSignUp}
                          isTab={isTab}
                        />
                        <AuthButton
                          textStyle={{ fontSize: verticalScale(14) }}
                          buttonStyling={
                            !isTab
                              ? [
                                  styles.letsGoButton,
                                  { backgroundColor: colors.blurPrimary },
                                ]
                              : styles.button1
                          }
                          name={t("login")}
                          changeColor={true}
                          onPress={goToLogin}
                          isTab={isTab}
                        />
                        
                      </View>
                    </>
                  ) : (
                    <View />
                  )}
                </View>
              )}
            />
          </View>
        
        </View>
          <View style={{height:verticalScale(10)}}/>
      </ScrollView>
     
    </SafeAreaView>
  );
};

export default OnBoarding;
