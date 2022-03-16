import { View, Text } from "react-native";
import React, { useState } from "react";
import CustomText from "../../../components/CustomText";
import styles from "../style";
import TextInput from "../../../components/native/TextInput";
import PhoneInput from "react-native-phone-number-input";
import CommonStyle from "../../../styles";
import colors from "../../../assets/colors";
const FirstPage = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.firstPageMainContainer}>
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        <CustomText
          label="Owner/manager name (private)"
          textStyle={styles.formTextHeading}
        />
        <CustomText label="*" textStyle={styles.star} />
      </View>
      <TextInput placeholderText={"Enter full name"} />
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
        layout="first"
        onChangeText={(value) => setText(value)}
        // onChangeFormattedText={(value) => setText(value)}
        value={text}
        placeholder="Phone Number"
      />
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        <CustomText label="Business name" textStyle={styles.formTextHeading} />
        <CustomText label="*" textStyle={styles.star} />
      </View>
      <TextInput placeholderText={"Enter full name"} />
    </View>
  );
};

export default FirstPage;
