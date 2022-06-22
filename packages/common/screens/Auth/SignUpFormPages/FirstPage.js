import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomText from "../../../components/CustomText";
import styles from "../style";
import TextInput from "../../../components/native/TextInput";
import PhoneInput from "react-native-phone-number-input";
import CommonStyle from "../../../styles";
import colors from "../../../assets/colors";
import { useTranslation } from "react-i18next";
import IsTablet from "../../../components/native/IsTablet";
import { verticalScale } from "react-native-size-matters";
const FirstPage = () => {
  const { t } = useTranslation();
  const [text, setText] = useState("");

  return (
    <View style={styles.firstPageMainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", marginTop: 25 }}>
          <CustomText
            label={!IsTablet ? t("ownerName") : t("business_name")}
            textStyle={
              !IsTablet ? styles.formTextHeadingMobile : styles.formTextHeading
            }
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <View style={{ width: !IsTablet ? "100%" : "50%" }}>
          <TextInput placeholderText={t("Enter_name")} isTab={IsTablet} />
        </View>
        <View style={{ flexDirection: "row", marginTop: verticalScale(10) }}>
          <CustomText
            label={t("owner_name")}
            textStyle={
              !IsTablet ? styles.formTextHeadingMobile : styles.formTextHeading
            }
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <TextInput placeholderText={t("enter_full_name")} isTab={IsTablet} />
        <View style={{ height: 10 }} />
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <CustomText
            label={t("Owner_phone")}
            textStyle={
              !IsTablet ? styles.formTextHeadingMobile : styles.formTextHeading
            }
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <PhoneInput
          containerStyle={
            !IsTablet
              ? CommonStyle.phoneNumberInputMobile
              : CommonStyle.phoneNumberInput
          }
          textContainerStyle={
            !IsTablet ? styles.textContainerMobile : styles.textContainer
          }
          textInputProps={{ fontSize: 12, padding: 0, marginTop: 0 }}
          countryPickerButtonStyle={
            !IsTablet
              ? styles.countyPickerContainerMobile
              : styles.countyPickerContainer
          }
          textInputStyle={{ color: colors.gray }}
          codeTextStyle={styles.codeText}
          defaultCode="RU"
          layout="second"
          onChangeText={(value) => setText(value)}
          // onChangeFormattedText={(value) => setText(value)}
          value={text}
          placeholder={t("phone_number")}
        />

        <View style={{ flexDirection: "row", marginTop: verticalScale(10) }}>
          <CustomText
            label={t("business_email")}
            textStyle={
              !IsTablet ? styles.formTextHeadingMobile : styles.formTextHeading
            }
          />
          <CustomText label={!IsTablet ? " " : "*"} textStyle={styles.star} />
        </View>
        <TextInput placeholderText={"example@example.com"} isTab={IsTablet} />

        <View style={{ flexDirection: "row", marginTop: verticalScale(10) }}>
          <CustomText
            label={t("Business_profile")}
            textStyle={
              !IsTablet ? styles.formTextHeadingMobile : styles.formTextHeading
            }
          />
          {!IsTablet ? (
            <CustomText label=" " textStyle={styles.star} />
          ) : (
            <CustomText label={t("optional")} textStyle={styles.optionalText} />
          )}
        </View>
        <TextInput
          placeholderText={"https://www.instagram.com/silal.app"}
          isTab={IsTablet}
        />

        <View style={{ flexDirection: "row", marginTop: verticalScale(10) }}>
          <CustomText
            label={!IsTablet ? t("anotherUserProfile") : t("socialMediaWeb")}
            textStyle={
              !IsTablet ? styles.formTextHeadingMobile : styles.formTextHeading
            }
          />
         {!IsTablet ? (
            <CustomText label=" " textStyle={styles.star} />
          ) : (
            <CustomText label={t("optional")} textStyle={styles.optionalText} />
          )}
        </View>
        <TextInput
          placeholderText={"https://www.facebook.com/silal.app"}
          isTab={IsTablet}
        />

        <View style={{ flexDirection: "row", marginTop: verticalScale(10) }}>
          <CustomText
            label={t("BusinessTexId")}
            textStyle={
              !IsTablet ? styles.formTextHeadingMobile : styles.formTextHeading
            }
          />
          <CustomText label={!IsTablet ? " " : "*"} textStyle={styles.star} />
        </View>
        <TextInput placeholderText={t("000-000-000")} isTab={IsTablet} />
      </ScrollView>
    </View>
  );
};

export default FirstPage;
