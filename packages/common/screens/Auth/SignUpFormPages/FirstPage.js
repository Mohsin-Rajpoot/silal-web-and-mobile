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
const FirstPage = () => {
  const { t } = useTranslation();
  const [text, setText] = useState("");

  return (
    <View style={styles.firstPageMainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <CustomText
            label={t("owner_name")}
            textStyle={styles.formTextHeading}
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <TextInput placeholderText={t("enter_full_name")} />
        <View style={{ height: 30 }} />
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <CustomText
            label={t("Owner_phone")}
            textStyle={styles.formTextHeading}
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

        <View style={{ flexDirection: "row", marginTop: 25 }}>
          <CustomText
            label={t("business_name")}
            textStyle={styles.formTextHeading}
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <TextInput placeholderText={t("Enter_name")} />
      </ScrollView>
    </View>
  );
};

export default FirstPage;
