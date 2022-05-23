import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomText from "../../../components/CustomText";
import styles from "../style";
import TextInput from "../../../components/native/TextInput";
import PhoneInput from "react-native-phone-number-input";
import CommonStyle from "../../../styles";
import colors from "../../../assets/colors";
import DropDownPicker from "react-native-dropdown-picker";
import { useTranslation } from "react-i18next";
import IsTablet from "../../../components/native/IsTablet";

const SecondPage = () => {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "New York", value: "New York" },
    { label: "Banana", value: "banana" },
  ]);
  return (
    <View style={styles.firstPageMainContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <CustomText
            label={t("Business_Phone")}
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
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <CustomText
            label={t("Business_address")}
            textStyle={styles.formTextHeading}
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        {!IsTablet ? (
          <View style={styles.addressInputContainerMobile}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder={t("city")}
              style={styles.dropDownStyle12}
              placeholderStyle={styles.dropDownPlaceHolder}
              dropDownContainerStyle={styles.dropdownContainer}
              iconContainerStyle={{ backgroundColor: "red" }}
            />
          </View>
        ) : (
          <View />
        )}
        <TextInput placeholderText={t("Street_name")} />
        <View style={styles.addressContainer}>
          <View
            style={
              !IsTablet
                ? styles.addressInputContainerMobile1
                : styles.addressInputContainer
            }
          >
            <TextInput
              placeholderText={t("office/number")}
              inputStyle={styles.addressInput}
            />
          </View>
          {!IsTablet ? <View style={{ width: 10 }} /> : <View />}
          <View>
            <View
              style={
                !IsTablet
                  ? styles.addressInputContainerMobile1
                  : styles.addressInputContainer
              }
            >
              <TextInput
                placeholderText={t("zip_code")}
                inputStyle={styles.addressInput}
              />
            </View>
          </View>
          {IsTablet ? (
            <View style={styles.addressInputContainer}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={t("city")}
                style={styles.dropDownStyle12}
                placeholderStyle={styles.dropDownPlaceHolder}
                dropDownContainerStyle={styles.dropdownContainer}
                iconContainerStyle={{ backgroundColor: "red" }}
              />
            </View>
          ) : (
            <View />
          )}
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <CustomText
            label={t("business_email")}
            textStyle={styles.formTextHeading}
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <TextInput placeholderText={t("email_address")} />
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <CustomText
            label={t("Business_profile")}
            textStyle={styles.formTextHeadingOptional}
          />
          <CustomText label={t("optional")} textStyle={styles.optionalText} />
        </View>
        <TextInput
          placeholderText={"https://www.instagram.com/business_profile.com"}
        />
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          <CustomText
            label={t("Business_website")}
            textStyle={styles.formTextHeadingOptional}
          />
          <CustomText label={t("optional")} textStyle={styles.optionalText} />
        </View>
        <TextInput placeholderText={"https://www.iselectrics.com"} />
      </ScrollView>
    </View>
  );
};

export default SecondPage;
