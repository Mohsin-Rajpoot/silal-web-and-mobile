import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import LoginSignUpButton from "../../components/native/LoginSignUp";
import CommonStyle from "../../styles";
import styles from "./style";
import Button from "../../components/native/AuthButton";
import PhoneInput from "react-native-phone-number-input";
import TextInput from "../../components/native/TextInput";

const login = () => {
  const [active, setActive] = useState(1);
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      <Text style={styles.heading}>Log in</Text>
      <LoginSignUpButton active={active} setActive={setActive} />
      <View style={styles.innerContainer}>
        {active == 2 ? (
          <View>
            <Text style={styles.phoneNumberText}>Email</Text>
            <TextInput placeholderText="email.example@gmail.com" />
            <Text style={styles.phoneNumberText}>Password</Text>
            <TextInput placeholderText="Enter password" />
          </View>
        ) : active == 1 ? (
          <View>
            <Text style={styles.phoneNumberText}>Phone number</Text>
            <PhoneInput
              containerStyle={CommonStyle.phoneNumberInput}
              textContainerStyle={styles.textContainer}
              countryPickerButtonStyle={styles.countyPickerContainer}
              textInputStyle={styles.codeText}
              codeTextStyle={styles.codeText}
              defaultCode="US"
            />
          </View>
        ) : (
          <View />
        )}
      </View>

      <Button name="Continue" />
      <Text style={styles.bottomText}>
        Trouble signing in?{" "}
        <Text style={styles.nestedBottomText}>
          {/* {active == 1 ? "Contact Us" : "Forgot password"}{" "} */}
        </Text>{" "}
      </Text>
    </SafeAreaView>
  );
};

export default login;
