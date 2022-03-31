import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderBack from "../../components/native/HeaderBack";
import CommonStyle from "../../styles";
import HeaderHeading from "../../components/headerHeading";
import CustomText from "../../components/CustomText";
import TextInput from "../../components/native/TextInput";
import styles from "./style";
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from "../../components/native/AuthButton";
import { useTranslation } from "react-i18next";
const ChangePassword = ({ navigation }) => {
  const { t } = useTranslation();
  const goBack = () => {
    navigation.pop();
  };
  return (
    <View style={CommonStyle.mainContainer}>
      <HeaderBack onGoBack={goBack} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <HeaderHeading headingName={t("Create_new_password")} />
        <View style={CommonStyle.CommonView}>
          <CustomText
            label={t("Password")}
            textStyle={styles.phoneNumberText}
          />
          <TextInput placeholderText={t("Enter_password")} secureText={true} />
          <CustomText
            label={t("Change_password")}
            textStyle={styles.phoneNumberText}
          />
          <TextInput
            placeholderText={t("Confirm_password")}
            secureText={true}
          />
          <View style={styles.changePassword}>
            <CustomText
              label={t("your_password_should_contain")}
              textStyle={styles.phoneNumberText}
            />

            <View style={styles.passwordWaring}>
              <AntDesign
                name="checkcircleo"
                style={styles.passwordWarningText}
              />
              <Text style={styles.passwordWarningText}>
                {t("password_length")}
              </Text>
            </View>
            <View style={styles.passwordWaring}>
              <AntDesign
                name="checkcircleo"
                style={styles.passwordWarningText}
              />
              <Text style={styles.passwordWarningText}>
                {t("Letter_numbers_characters")}
              </Text>
            </View>
          </View>

          <Button name={t("Change_password")} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;
