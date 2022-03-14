import { View, Text, Image } from "react-native";
import React from "react";
import HeaderBack from "../../components/native/HeaderBack";
import HeaderHeading from "../../components/headerHeading";
import Images from "../../assets/images";
import Button from "../../components/native/AuthButton";
import styles from "./style";
const ChooseAccount = () => {
  return (
    <View>
      <HeaderBack name={"Silal Seller"} backIcon={true} />
      <HeaderHeading headingName={"Choose an account"} />

      <View style={{ flexDirection: "row" }}>
        <View style={styles.choseMainContainer}>
          {/* <Image
            source={Images?.Image11}
            style={{ width: 90, height: 90 }}
            resizeMode="center"
          /> */}
          <View style={styles.choseAccountShopping} />
          <Text style={styles.accountTitle}>Restourant’s name</Text>
          <Text style={styles.accountDetail}>bill.sanders@example.com</Text>
        </View>
        <View style={styles.choseMainContainer}>
          {/* <Image
            source={Images?.Image11}
            style={{ width: 90, height: 90 }}
            resizeMode="center"
          /> */}
          <View style={styles.choseAccountShopping} />
          <Text style={styles.accountTitle}>Restourant’s name</Text>
          <Text style={styles.accountDetail}>bill.sanders@example.com</Text>
        </View>
      </View>
    </View>
  );
};

export default ChooseAccount;
