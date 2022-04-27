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
const ThirdPage = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [payment, setPayment] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [show, setShow] = useState(false);
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
        <View style={styles.accountMainContainer}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => setActive(0)}>
            <View
              style={[
                active == 0
                  ? styles.accountSelection
                  : styles.accountSelectionInActive,
              ]}
            >
              <View
                style={[
                  active == 0
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
                  label="Some text for clarification to distinguish the concepts"
                  textStyle={styles.accountSelectionDec}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={() => setActive(1)}>
            <View
              style={[
                active == 1
                  ? styles.accountSelection
                  : styles.accountSelectionInActive,
              ]}
            >
              <View
                style={[
                  active == 1
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
                  label="Some text for clarification to distinguish the concepts"
                  textStyle={styles.accountSelectionDec}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} onPress={() => setActive(2)}>
            <View
              style={[
                active == 2
                  ? styles.accountSelection
                  : styles.accountSelectionInActive,
              ]}
            >
              <View
                style={[
                  active == 2
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
                  label="Some text for clarification to distinguish the concepts"
                  textStyle={styles.accountSelectionDec}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
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
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.paymentInnerContainer}
              onPress={() => setPayment(0)}
            >
              <View
                style={[
                  payment == 0
                    ? styles.checkBackground
                    : styles.checkBackgroundInactive,
                ]}
              >
                {payment == 0 ? (
                  <Icon
                    name="check"
                    type="feather"
                    color={colors.white}
                    style={{ margin: 1.5 }}
                  />
                ) : (
                  <View style={styles.checkBackgroundInactive} />
                )}
              </View>
              <CustomText
                label={t("Cash_payment")}
                textStyle={styles.paymentText}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.paymentInnerContainer}
              onPress={() => setPayment(1)}
            >
              <View
                style={[
                  payment == 1
                    ? styles.checkBackground
                    : styles.checkBackgroundInactive,
                ]}
              >
                {payment == 1 ? (
                  <Icon
                    name="check"
                    type="feather"
                    color={colors.white}
                    style={{ margin: 1.5 }}
                  />
                ) : (
                  <View style={styles.checkBackgroundInactive} />
                )}
              </View>
              <CustomText
                label={t("bank_wires")}
                textStyle={styles.paymentText}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.paymentMainContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.paymentInnerContainer}
              onPress={() => setPayment(2)}
            >
              <View
                style={[
                  payment == 2
                    ? styles.checkBackground
                    : styles.checkBackgroundInactive,
                ]}
              >
                {payment == 2 ? (
                  <Icon
                    name="check"
                    type="feather"
                    color={colors.white}
                    style={{ margin: 1.5 }}
                  />
                ) : (
                  <View style={styles.checkBackgroundInactive} />
                )}
              </View>
              <CustomText
                label={t("Card_payment")}
                textStyle={styles.paymentText}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setPayment(3)}
              style={styles.paymentInnerContainer}
            >
              <View
                style={[
                  payment == 3
                    ? styles.checkBackground
                    : styles.checkBackgroundInactive,
                ]}
              >
                {payment == 3 ? (
                  <Icon
                    name="check"
                    type="feather"
                    color={colors.white}
                    style={{ margin: 2 }}
                  />
                ) : (
                  <View style={styles.checkBackgroundInactive} />
                )}
              </View>
              <CustomText
                label={t("Apple_pay")}
                textStyle={styles.paymentText}
              />
            </TouchableOpacity>
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
              style={styles.dropDownContainer}
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
            style={styles.dropDownContainer}
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
      </ScrollView>
    </View>
  );
};

export default ThirdPage;
