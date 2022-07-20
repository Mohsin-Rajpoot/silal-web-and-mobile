import { View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import * as userAction from "../../store/SellerReducers/User/actions";
import Loader from "../../Loader";
import axios from "axios";
const SellerInformation = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.User);
  const init = {
    first_name: "",
    last_name: "",
    id_number: "",
    error: "",
  };
  const [information, setInformation] = useState(init);
  const goBack = () => {
    navigation.navigate("Login", {
      params: { signUp: true, signupEmail: true },
    });
  };
  const moveForward = () => {
    navigation.navigate("GettingStarted");
  };
  const add_personalInformation = (data) => {
    if (data.first_name.length == 0) {
      setInformation({ ...information, error: "Enter name" });
    } else if (data.last_name.length == 0) {
      setInformation({ ...information, error: "" });
    } else if (data.id_number.length == 0) {
      setInformation({ ...information, error: "enter name" });
    } else {
      setInformation({ ...information, error: "" });
      dispatch(
        userAction.addPersonalInformation({
          data,
          cb: (res) => {
            console.log("------DataInformation", res);
          },
        })
      );
    }
  };

  useEffect(async () => {
    var data = JSON.stringify({
      first_name: "Saad",
      last_name: "Butt",
      id_number: 767857,
    });

    var config = {
      method: "post",
      url: "https://seller.dev.silal.app//api/v1/personal_info",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiIsImlhdCI6MTY1NzY5NTIyMCwiZXhwIjoxNjY1NDcxMjIwfQ.eyJiZWFyZXIgY29uZmlybWF0aW9uIjoiMzExNjU3Njg0NDIwMjMxOTIyIn0.ipN6xY74h8DkDrpaTRYjuoACWMGWEf1peHZ7utKtdveBAzSkfmWUUIIFWDpz30AvzNnUqPOgaNasdutRUDPOiw",
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      const response = await axios(config);
      console.log("-----REsponse", response);
    } catch (error) {
      console.log("-----REsponseERRir", error);
    }
  }, []);

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
              setInformation({ ...information, first_name: value });
            }}
            value={information.first_name}
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
              setInformation({ ...information, last_name: value });
            }}
            value={information.last_name}
            isTab={IsTablet}
          />
          {/* <View style={{ flexDirection: "row", marginTop: verticalScale(10) }}>
            <CustomText
              label={t("PersonalEmail")}
              textStyle={
                !IsTablet
                  ? styles.formTextHeadingMobile
                  : styles.formTextHeading
              }
            />
            <CustomText label="*" textStyle={styles.star} />
          </View> */}
          {/* <TextInput
            placeholderText={!IsTablet ? "" : t("email_address")}
            onChangeText={(value) => {
              setText({ ...text, email: value });
            }}
            value={text.email}
            isTab={IsTablet}
          /> */}
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
              setInformation({ ...information, id_number: value });
            }}
            value={information.id_number}
            isTab={IsTablet}
          />
        </View>
        {information.error.length > 1 ? (
          <CustomText
            label={information.error}
            textStyle={CommonStyle.errorMessage}
          />
        ) : (
          <View />
        )}
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
              onPress={() => add_personalInformation(information)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SellerInformation;
