import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  I18nManager,
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
const OnBoarding = ({ navigation }) => {
  const { t, i18n } = useTranslation();
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
            (isTab && page == 3) || (!isTab && page == 0) ? (
              <View />
            ) : (
              <TouchableOpacity activeOpacity={0.6} onPress={() => goBack()}>
                <View style={styles.backIcon}>
                  <Icon
                    name="chevron-back-sharp"
                    type="ionicon"
                    size={24}
                    color={colors.primary}
                  />
                </View>
              </TouchableOpacity>
            )
          ) : (
            <View />
          )}
          <TouchableOpacity activeOpacity={0.6} onPress={() => setPage(3)}>
            <Text style={styles.skipbutton}>Skip</Text>
          </TouchableOpacity>
        </View>
      )}
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
            <Image
              source={item.image}
              resizeMode="center"
              style={styles.screenImage}
            />
            <View style={styles.onBoardingDetailconatiner}>
              <Text style={styles.heading}>{item?.heading}</Text>
              <Text style={styles.body}> {item?.body}</Text>
            </View>
            {!isTab && page == 2 ? (
              <>
                <View style={{ flex: 0.6 }} />
                <AuthButton
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
                <View
                  style={{
                    width: !isTab ? "90%" : "65%",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
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
                    marginVertical: 5,
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
                    style={styles.dropDownStyle1}
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
                <View style={{ flex: 0.6, justifyContent: "flex-end" }}>
                  <AuthButton
                    buttonStyling={!isTab ? styles.buttonMobile : styles.button}
                    name={t("signup")}
                    onPress={goToSignUp}
                    isTab={isTab}
                  />
                  <AuthButton
                    buttonStyling={
                      !isTab ? styles.button1Mobile : styles.button1
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
    </SafeAreaView>
  );
};

export default OnBoarding;
