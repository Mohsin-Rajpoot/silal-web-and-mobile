import {
  View,
  Pressable,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CustomText from "../../../components/CustomText";
import styles from "../style";
import TextInput from "../../../components/native/TextInput";
import DropDownPicker from "react-native-dropdown-picker";
import { Icon } from "react-native-elements";
import colors from "../../../assets/colors";
import { useTranslation } from "react-i18next";
import { ScaledSheet, moderateScale, scale } from "react-native-size-matters";
import moment from "moment";
import fonts from "../../../assets/fonts";
import DateTimePicker from "@react-native-community/datetimepicker";
import IsTablet from "../../../components/native/IsTablet";
const ThirdPage = () => {
  const { t } = useTranslation();
  const paymentData = [
    { title: "Cash_payment", active: false, id: 0 },
    { title: "bank_wires", active: false, id: 1 },
    { title: "Card_payment", active: false, id: 2 },
    { title: "Apple_pay", active: false, id: 3 },
  ];
  const [active, setActive] = useState(0);
  const [payment, setPayment] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [show, setShow] = useState(false);
  const [paymentSelect, setPaymentSelect] = useState(paymentData);
  const [startTime, setStartTime] = useState(new Date());
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const onStartChange = (event, selectedDate, setTime, time) => {
    const currentDate = selectedDate || time;
    setShow(Platform.OS === "ios");
    setTime(currentDate);
  };
  const selectPaymentMethod = (index) => {
    const data = [...paymentSelect];
    data[index] = { ...data[index], active: !data[index].active };
    setPaymentSelect(data);
  };
  return (
    <View style={styles.firstPageMainContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          <CustomText
            label={t("select_type")}
            textStyle={styles.formTextHeading}
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <View
          style={
            !IsTablet
              ? styles.accountMainContainerMobile
              : styles.accountMainContainer
          }
        >
          <TouchableOpacity activeOpacity={0.6} onPress={() => setActive(0)}>
            <View
              style={[
                active == 0 && !IsTablet
                  ? styles.accountSelectionMobile
                  : !IsTablet
                  ? styles.accountSelectionInActiveMobile
                  : active == 0 && IsTablet
                  ? styles.accountSelection
                  : styles.accountSelectionInActive,
              ]}
            >
              <View
                style={[
                  active == 0 && !IsTablet
                    ? styles.outerRadiocontainerMobile
                    : !IsTablet
                    ? styles.outerRadiocontainerInactiveMobile
                    : active == 0 && IsTablet
                    ? styles.outerRadiocontainer
                    : styles.outerRadiocontainerInactive,
                ]}
              >
                <View
                  style={[
                    active == 0
                      ? styles.customRadio
                      : styles.customRadioInactive,
                  ]}
                />
              </View>
              <View style={styles.accountTextContainer}>
                <CustomText
                  label={t("Store")}
                  textStyle={styles.accountTitles}
                />
                <CustomText
                  label="Some text for clarification to distinguish the concepts and more information"
                  textStyle={styles.accountSelectionDec}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={() => setActive(1)}>
            <View
              style={[
                active == 1 && !IsTablet
                  ? styles.accountSelectionMobile
                  : !IsTablet
                  ? styles.accountSelectionInActiveMobile
                  : active == 1 && IsTablet
                  ? styles.accountSelection
                  : styles.accountSelectionInActive,
              ]}
            >
              <View
                style={[
                  active == 1 && !IsTablet
                    ? styles.outerRadiocontainerMobile
                    : !IsTablet
                    ? styles.outerRadiocontainerInactiveMobile
                    : active == 1 && IsTablet
                    ? styles.outerRadiocontainer
                    : styles.outerRadiocontainerInactive,
                ]}
              >
                <View
                  style={[
                    active == 1
                      ? styles.customRadio
                      : styles.customRadioInactive,
                  ]}
                />
              </View>
              <View style={styles.accountTextContainer}>
                <CustomText
                  label={t("Restaurant")}
                  textStyle={styles.accountTitles}
                />
                <CustomText
                  label="Some text for clarification to distinguish the concepts and more information"
                  textStyle={styles.accountSelectionDec}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} onPress={() => setActive(2)}>
            <View
              style={[
                active == 2 && !IsTablet
                  ? styles.accountSelectionMobile
                  : !IsTablet
                  ? styles.accountSelectionInActiveMobile
                  : active == 2 && IsTablet
                  ? styles.accountSelection
                  : styles.accountSelectionInActive,
              ]}
            >
              <View
                style={[
                  active == 2 && !IsTablet
                    ? styles.outerRadiocontainerMobile
                    : !IsTablet
                    ? styles.outerRadiocontainerInactiveMobile
                    : active == 2 && IsTablet
                    ? styles.outerRadiocontainer
                    : styles.outerRadiocontainerInactive,
                ]}
              >
                <View
                  style={[
                    active == 2
                      ? styles.customRadio
                      : styles.customRadioInactive,
                  ]}
                />
              </View>
              <View style={styles.accountTextContainer}>
                <CustomText
                  label={t("Service")}
                  textStyle={styles.accountTitles}
                />
                <CustomText
                  label="Some text for clarification to distinguish the concepts and more information"
                  textStyle={styles.accountSelectionDec}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <CustomText
            label={t("main_category")}
            textStyle={styles.formTextHeading}
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Groceries"
          style={styles.dropDownStyle}
          placeholderStyle={styles.dropDownPlaceHolder}
          dropDownContainerStyle={styles.dropdownContainer}
          iconContainerStyle={{ backgroundColor: "red" }}
        />
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          <CustomText
            label={t("Accept_payment")}
            textStyle={styles.formTextHeading}
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <View>
          <View style={styles.paymentMainContainer}>
            {paymentSelect.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={
                    !IsTablet && item.active
                      ? styles.paymentInnerContainerMobileActive
                      : !IsTablet
                      ? styles.paymentInnerContainerMobile
                      : IsTablet && item.active
                      ? styles.paymentInnerContainerActive
                      : styles.paymentInnerContainer
                  }
                  onPress={() => selectPaymentMethod(index)}
                >
                  <View
                    style={[
                      item.active && !IsTablet
                        ? styles.checkBackgroundMobile
                        : !IsTablet
                        ? styles.checkBackgroundInactiveMobile
                        : item.active
                        ? styles.checkBackground
                        : styles.checkBackgroundInactive,
                    ]}
                  >
                    {item.active ? (
                      <Icon
                        name="check"
                        type="feather"
                        color={colors.white}
                        size={!IsTablet ? 15 : 26}
                      />
                    ) : (
                      <View style={styles.checkBackgroundInactive} />
                    )}
                  </View>
                  <CustomText
                    label={t(item.title)}
                    textStyle={styles.paymentText}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          <CustomText
            label={t("store_description")}
            textStyle={styles.formTextHeading}
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <TextInput
          placeholderText={
            "Briefly describe what service / product you are posting. This information will be visible on your business profile and available to customers. Max 180 characters."
          }
          inputStyle={styles.detailInput}
          multiLine={true}
        />
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          <CustomText
            label={t("working_hours")}
            textStyle={styles.formTextHeading}
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <>
            <CustomText
              fontSize={12}
              textStyle={styles.fromText}
              fontFamily={fonts.LatoRegular}
              label={t("From")}
            />
            <Pressable
              style={
                !IsTablet
                  ? styles.dropDownContainerMobile
                  : styles.dropDownContainer
              }
              onPress={() => setShow(true)}
            >
              <CustomText
                fontSize={10}
                label={
                  startTime ? moment(startTime).format("h:mm A") : "Start Time"
                }
              />
              <Icon type="antdesign" name="caretdown" size={moderateScale(7)} />
            </Pressable>
          </>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={startTime ? new Date(startTime) : new Date()}
              mode={"time"}
              display="default"
              onChange={(event, selectedDate) =>
                onStartChange(event, selectedDate, setStartTime, startTime)
              }
            />
          )}
          <CustomText
            fontSize={12}
            textStyle={styles.fromText}
            marginLeft={4}
            fontFamily={fonts.LatoRegular}
            label={t("To")}
          />
          <View />
          <Pressable
            style={
              !IsTablet
                ? styles.dropDownContainerMobile
                : styles.dropDownContainer
            }
            onPress={() => setShow(true)}
          >
            <CustomText
              fontSize={10}
              label={
                startTime ? moment(startTime).format("h:mm A") : "Start Time"
              }
            />
            <Icon type="antdesign" name="caretdown" size={moderateScale(10)} />
          </Pressable>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={startTime ? new Date(startTime) : new Date()}
              mode={"time"}
              display="default"
              onChange={(event, selectedDate) =>
                onStartChange(event, selectedDate, setStartTime, startTime)
              }
            />
          )}
        </View>
        <View style={{ height: 50 }} />
      </ScrollView>
    </View>
  );
};

export default ThirdPage;
