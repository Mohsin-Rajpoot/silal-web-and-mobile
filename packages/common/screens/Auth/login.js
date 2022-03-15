import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import LoginSignUpButton from "../../components/native/LoginSignUp";
import CommonStyle from "../../styles";
import styles from "./style";
import Button from "../../components/native/AuthButton";
import PhoneInput from "react-native-phone-number-input";
import TextInput from "../../components/native/TextInput";

import HeaderBack from "../../components/native/HeaderBack";
import colors from "../../assets/colors";
const Login = ({ navigation, route }) => {
  const { params } = route?.params;
  const [active, setActive] = useState(1);
  const [text, setText] = useState("");
  const goForgerPassword = () => {
    navigation.navigate("ForgetPassword");
  };
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      <HeaderBack name={params?.signup ? "Sign Up" : "Login"} />

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
              textInputProps={{ fontSize: 12, padding: 0, marginTop: 0 }}
              countryPickerButtonStyle={styles.countyPickerContainer}
              textInputStyle={{ color: colors.gray }}
              codeTextStyle={styles.codeText}
              defaultCode="RU"
              layout="first"
              onChangeFormattedText={(value) => setText(value)}
              value={text}
              placeholder="Phone Number"
            />
          </View>
        ) : (
          <View />
        )}
      </View>

      <Button
        name="Continue"
        onPress={() =>
          navigation.navigate("Verification", {
            params: {
              active: active,
            },
          })
        }
      />
      <View
        style={{ flexDirection: "row", alignSelf: "center", marginVertical: 5 }}
      >
        <Text style={styles.bottomText}> signing in?</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            active == 2 && goForgerPassword();
          }}
        >
          <Text style={styles.nestedBottomText}>
            {" "}
            {active == 1 ? "Contact Us" : "Forgot password"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
