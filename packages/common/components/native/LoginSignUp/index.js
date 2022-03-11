import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
const index = ({ active, setActive }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setActive(1)}
        style={[
          active == 1
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
            Phone Number
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setActive(2)}
        style={[
          active == 2
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
          Email
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
