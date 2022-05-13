import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import HeaderBack from "../../components/native/HeaderBack";
import HeaderHeading from "../../components/headerHeading";
import Images from "../../assets/images";
import AuthButton from "../../components/native/AuthButton";
import styles from "./style";
import { useTranslation } from "react-i18next";
import DeviceInfo from "react-native-device-info";
const ChooseAccount = () => {
  const isTab = DeviceInfo.isTablet();
  const { t } = useTranslation();
  const [active, setActive] = useState(1);
  return (
    <>
      <View>
        <HeaderBack name={"Silal " + t("Seller")} backIcon={true} />
        <HeaderHeading headingName={t("Choose_An_account")} />

        <View
          style={{
            flexDirection: !isTab ? "column" : "row",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity activeOpacity={0.6} onPress={() => setActive(1)}>
            <View
              style={[
                !isTab && active == 1
                  ? styles.choseMainContainerMobile
                  : active == 1
                  ? styles.choseMainContainer
                  : !isTab
                  ? styles.choseMainContainer1Mobile
                  : styles.choseMainContainer1,
              ]}
            >
              {/* <Image
            source={Images?.Image11}
            style={{ width: 90, height: 90 }}
            resizeMode="center"
          /> */}
              <View
                style={
                  !isTab
                    ? styles.choseAccountShoppingMobile
                    : styles.choseAccountShopping
                }
              />
              <View>
                <Text style={styles.accountTitle}>Restaurant’s name</Text>
                <Text style={styles.accountDetail}>
                  bill.sanders@example.com
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} onPress={() => setActive(2)}>
            <View
              style={[
                !isTab && active == 2
                  ? styles.choseMainContainerMobile
                  : active == 2
                  ? styles.choseMainContainer
                  : styles.choseMainContainer1,
              ]}
            >
              {/* <Image
            source={Images?.Image11}
            style={{ width: 90, height: 90 }}
            resizeMode="center"
          /> */}
              <View
                style={
                  !isTab
                    ? styles.choseAccountShoppingMobile
                    : styles.choseAccountShopping
                }
              />
              <View>
                <Text style={styles.accountTitle}>Restaurant’s name</Text>
                <Text style={styles.accountDetail}>
                  bill.sanders@example.com
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.95 }} />
      <AuthButton
        onPress={() => navigation.navigate("MainStack")}
        name={t("Continue")}
      />
    </>
  );
};

export default ChooseAccount;
