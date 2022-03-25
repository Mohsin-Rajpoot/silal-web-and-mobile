import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomText from "../../../components/CustomText";
import styles from "../style";
import TextInput from "../../../components/native/TextInput";
import PhoneInput from "react-native-phone-number-input";
import CommonStyle from "../../../styles";
import colors from "../../../assets/colors";
import DropDownPicker from "react-native-dropdown-picker";
const SecondPage = () => {
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
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          <CustomText
            label="Owner/manager phone number"
            textStyle={styles.formTextHeading}
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <PhoneInput
          containerStyle={CommonStyle.phoneNumberInput}
          textContainerStyle={styles.textContainer}
          textInputProps={{ fontSize: 12, padding: 0, marginTop: 0 }}
          countryPickerButtonStyle={styles.countyPickerContainer}
          textInputStyle={{ color: colors.gray }}
          codeTextStyle={styles.codeText}
          defaultCode="RU"
          layout="second"
          onChangeText={(value) => setText(value)}
          // onChangeFormattedText={(value) => setText(value)}
          value={text}
          placeholder="Phone Number"
        />
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          <CustomText
            label="Business address"
            textStyle={styles.formTextHeading}
          />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <TextInput placeholderText={"Street name"} />
        <View style={styles.addressContainer}>
          <View style={styles.addressInputContainer}>
            <TextInput
              placeholderText={"Office/building number"}
              inputStyle={styles.addressInput}
            />
          </View>
          <View>
            <View style={styles.addressInputContainer}>
              <TextInput
                placeholderText={"ZIP code"}
                inputStyle={styles.addressInput}
              />
            </View>
          </View>
          <View style={styles.addressInputContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="City"
            style={styles.dropDownStyle1}
            placeholderStyle={styles.dropDownPlaceHolder}
            dropDownContainerStyle={styles.dropdownContainer}
            iconContainerStyle={{ backgroundColor: "red" }}
          />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <CustomText
            label="Business profile on social media"
            textStyle={styles.formTextHeadingOptional}
          />
          <CustomText label="(optional)" textStyle={styles.optionalText} />
        </View>
        <TextInput
          placeholderText={"https://www.instagram.com/business_profile.com"}
        />
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          <CustomText
            label="Business website "
            textStyle={styles.formTextHeadingOptional}
          />
          <CustomText label="(optional)" textStyle={styles.optionalText} />
        </View>
        <TextInput placeholderText={"https://www.iselectrics.com"} />
      </ScrollView>
    </View>
  );
};

export default SecondPage;
