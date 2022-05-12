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
  const [page, setPage] = useState(1);
  {
    console.log("--------PAge", page);
  }
  useEffect(() => {
    lor(setOrientation);

    return () => {
      rol();
    };
  }, []);
  const onAccept = () => {
    if (page + 1 != 3) {
      ref?.current?.goToSlide(page + 1);
      setPage(page + 1);
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
          {(!isTab && page == 1) || page == 2 ? (
            isTab && page ? (
              <View />
            ) : (
              <View style={styles.backIcon}>
                <Icon
                  name="chevron-back-sharp"
                  type="ionicon"
                  size={24}
                  color={colors.primary}
                />
              </View>
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
        dotStyle={page == 3 ? null : styles.dot}
        onSlideChange={(index) => setPage(index)}
        activeDotStyle={page == 3 ? null : styles.underScore}
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
            {page == 3 ? (
              <>
                <View style={{ width: "65%" }}>
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
                    width: "65%",
                    alignSelf: "center",
                    marginVertical: 10,
                    marginBottom: 10,
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
                  <AuthButton name={t("signup")} onPress={goToSignUp} />
                  <AuthButton
                    name={t("login")}
                    changeColor={true}
                    onPress={goToLogin}
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
