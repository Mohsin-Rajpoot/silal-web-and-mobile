import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomText from "../../../components/CustomText";
import styles from "../style";
import TextInput from "../../../components/native/TextInput";
import DropDownPicker from "react-native-dropdown-picker";
import { Icon } from "react-native-elements";
import colors from "../../../assets/colors";
const ThirdPage = () => {
  const [active, setActive] = useState(0);
  const [payment, setPayment] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  return (
    <View style={styles.firstPageMainContainer}>
      <ScrollView>
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          <CustomText label="Select type" textStyle={styles.formTextHeading} />
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
                <CustomText label="Store" textStyle={styles.accountTitles} />
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
                  label="Restaurant"
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
                <CustomText label="Service" textStyle={styles.accountTitles} />
                <CustomText
                  label="Some text for clarification to distinguish the concepts"
                  textStyle={styles.accountSelectionDec}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          <CustomText label="Category" textStyle={styles.formTextHeading} />
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
            label="Accepted payment methods"
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
              <CustomText label="Cash payment" textStyle={styles.paymentText} />
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
              <CustomText label="Bank wires" textStyle={styles.paymentText} />
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
              <CustomText label="Card payment" textStyle={styles.paymentText} />
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
                label="Apple Pay, Google Pay"
                textStyle={styles.paymentText}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          <CustomText
            label=" Store description"
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
      </ScrollView>
    </View>
  );
};

export default ThirdPage;
