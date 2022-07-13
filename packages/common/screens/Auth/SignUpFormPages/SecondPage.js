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
import { verticalScale } from "react-native-size-matters";

const SecondPage = () => {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
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
            label={t("Business_address")}
            textStyle={styles.formTextHeading}
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>

        <TextInput placeholderText={t("addressLine")} isTab={IsTablet} />
        <View style={{ height: verticalScale(10) }} />
        <TextInput placeholderText={t("addressLine1")} isTab={IsTablet} />
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <CustomText
            label={t("BusinessLocation")}
            textStyle={styles.formTextHeading}
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <View
          style={{
            flexDirection: !IsTablet ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: !IsTablet ? "100%" : "65%",
            }}
          >
            <View
              style={{
                width: !IsTablet ? "48%" : "48%",
                marginBottom: verticalScale(!IsTablet ? 8 : 5),
              }}
            >
              <TextInput
                placeholderText={t("Longitude")}
                inputStyle={styles.addressInput}
                isTab={IsTablet}
              />
            </View>
            <View
              style={{
                width: !IsTablet ? "48%" : "48%",
                marginBottom: verticalScale(!IsTablet ? 8 : 5),
              }}
            >
              <TextInput
                placeholderText={t("Latitude")}
                inputStyle={styles.addressInput}
                isTab={IsTablet}
              />
            </View>
          </View>
          <View
            style={{
              width: !IsTablet ? "100%" : "32%",
              marginBottom: verticalScale(!IsTablet ? 8 : 5),
            }}
          >
            <TextInput
              placeholderText={t("GPS_location")}
              inputStyle={styles.addressInput}
              isTab={IsTablet}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: !IsTablet ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: !IsTablet ? "column" : "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: !IsTablet ? "100%" : "65%",
     
            }}
          >
            <View
              style={{
                width: !IsTablet ? "100%" : "48%",
                marginBottom: verticalScale(!IsTablet ? 8 : 5),
              }}
            >
              <View
                style={
                  !IsTablet
                    ? [
                        styles.addressInputContainerMobile,
                        { marginBottom: verticalScale(5) },
                      ]
                    : styles.addressInputContainer
                }
              >
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder={t("Region")}
                  style={
                    !IsTablet
                      ? styles.dropDownStyleMoBile
                      : styles.dropDownStyle13
                  }
                  placeholderStyle={styles.dropDownPlaceHolder}
                  dropDownContainerStyle={styles.dropdownContainer}
                  iconContainerStyle={{ backgroundColor: "red" }}
                />
              </View>
            </View>
            <View
              style={{
                width: !IsTablet ? "100%" : "48%",
                marginBottom: verticalScale(!IsTablet ? 8 : 5),
              }}
            >
              <View
                style={
                  !IsTablet
                    ? [
                        styles.addressInputContainerMobile,
                        { marginBottom: verticalScale(5) },
                      ]
                    : styles.addressInputContainer
                }
              >
                <DropDownPicker
                  open={open1}
                  value={value}
                  items={items}
                  setOpen={setOpen1}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder={t("city")}
                  style={
                    !IsTablet
                      ? styles.dropDownStyleMoBile
                      : styles.dropDownStyle13
                  }
                  placeholderStyle={styles.dropDownPlaceHolder}
                  dropDownContainerStyle={styles.dropdownContainer}
                  iconContainerStyle={{ backgroundColor: "red" }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: !IsTablet ? "100%" : "32%",
              marginBottom: verticalScale(!IsTablet ? 8 : 5),
            }}
          >
            <View
              style={
                !IsTablet
                  ? [styles.addressInputContainerMobile, { marginBottom: 0 }]
                  : styles.addressInputContainer
              }
            >
              <DropDownPicker
                open={open2}
                value={value}
                items={items}
                setOpen={setOpen2}
                setValue={setValue}
                setItems={setItems}
                placeholder={t("Town")}
                style={
                  !IsTablet
                    ? styles.dropDownStyleMoBile
                    : styles.dropDownStyle13
                }
                placeholderStyle={styles.dropDownPlaceHolder}
                dropDownContainerStyle={styles.dropdownContainer}
                iconContainerStyle={{ backgroundColor: "red" }}
              />
            </View>
          </View>
        </View>
        {/* <View style={styles.addressContainer}>
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
        </View> */}
        <View style={{ height: verticalScale(!IsTablet ? 20 : 40) }} />
        <CustomText label={t("Notes")} textStyle={styles.formTextHeading} />
        <TextInput
          placeholderText={t("Anything")}
          isTab={IsTablet}
          multiLine={true}
          inputStyle={{ height: verticalScale(120), alignItems: "flex-start" }}
        />
      </ScrollView>
    </View>
  );
};

export default SecondPage;
