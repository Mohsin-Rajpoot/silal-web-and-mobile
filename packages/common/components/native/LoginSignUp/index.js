import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { useTranslation } from "react-i18next";
const index = ({ active, setActive, isTab }) => {
  const { t } = useTranslation();
  return (
    <View style={[!isTab ? styles.mainContainerMobile : styles.mainContainer]}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setActive(1)}
        style={[
          isTab == false && active == 1
            ? styles.activeBackgroundMobile
            : isTab == false && active == 2
            ? styles.activeTabContainerMobile
            : active == 1
            ? styles.activeBackground
            : active == 2
            ? styles.activeTabContainer
            : null,
        ]}
      >
        <View>
          <Text
            style={[
              active == 1
                ? styles.textPhone
                : active == 2
                ? styles.textEmail
                : null,
            ]}
          >
            {t("phone_number")}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setActive(2)}
        style={[
          isTab == false && active == 2
            ? styles.activeBackgroundMobile
            : isTab == false && active == 1
            ? styles.activeTabContainerMobile
            : active == 2
            ? styles.activeBackground
            : active == 1
            ? styles.activeTabContainer
            : null,
        ]}
      >
        <Text
          style={[
            active == 2
              ? styles.textPhone
              : active == 1
              ? styles.textEmail
              : null,
          ]}
        >
          {t("email")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
