import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import HeaderBack from "../../components/native/HeaderBack";
import HeaderHeading from "../../components/headerHeading";
import Images from "../../assets/images";
import AuthButton from "../../components/native/AuthButton";
import styles from "./style";
import { useTranslation } from "react-i18next";
const ChooseAccount = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(1);
  return (
    <>
      <View>
        <HeaderBack name={"Silal " + t("Seller")} backIcon={true} />
        <HeaderHeading headingName={t("Choose_An_account")} />

        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => setActive(1)}>
            <View
              style={[
                active == 1
                  ? styles.choseMainContainer
                  : styles.choseMainContainer1,
              ]}
            >
              {/* <Image
            source={Images?.Image11}
            style={{ width: 90, height: 90 }}
            resizeMode="center"
          /> */}
              <View style={styles.choseAccountShopping} />
              <Text style={styles.accountTitle}>Restaurant’s name</Text>
              <Text style={styles.accountDetail}>bill.sanders@example.com</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} onPress={() => setActive(2)}>
            <View
              style={[
                active == 2
                  ? styles.choseMainContainer
                  : styles.choseMainContainer1,
              ]}
            >
              {/* <Image
            source={Images?.Image11}
            style={{ width: 90, height: 90 }}
            resizeMode="center"
          /> */}
              <View style={styles.choseAccountShopping} />
              <Text style={styles.accountTitle}>Restaurant’s name</Text>
              <Text style={styles.accountDetail}>bill.sanders@example.com</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.95 }} />
      <AuthButton name={t("Continue")} />
    </>
  );
};

export default ChooseAccount;
