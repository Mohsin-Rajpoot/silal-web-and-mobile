import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import PagerView from "react-native-pager-view";
import FirstPage from "./SignUpFormPages/FirstPage";
import HeaderBack from "../../components/native/HeaderBack";
import Header from "./SignUpFormPages/Molecules/Header";
import SecondPage from "./SignUpFormPages/SecondPage";
import styles from "./style";
import CustomText from "../../components/CustomText";
import AuthButton from "../../components/native/AuthButton";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";
const SignUpForm = () => {
  const ref = useRef(null);
  const [page, setPage] = useState(0);
  const goToNextPage = () => {
    ref?.current?.setPageWithoutAnimation(1);
    setPage(page+1)
    // if (page + 1 != 3) {
    //   ref?.current?.setPageWithoutAnimation(page+1);

    //   setPage(page + 1);
    // } else {
    //   setPage(0);
    // }
  };
  const goBack = () => {
    ref?.current?.setPageWithoutAnimation(0);
    setPage(page-1)
    // if (page - 1 < 0) {
    //     ref?.current?.setPageWithoutAnimation(page-1);
    //   setPage(page - 1);
    // } else {
    //   setPage(0);
    // }
  };
  return (
    <>
      <HeaderBack name={`Step ${page + 1}/3`} />
      <View style={styles.headerContainer}>
        <Header
          label={"Basic information"}
          textStyle={styles.headerText}
          textStyleInActive={styles.headerTextInactive}
          page={0}
          active={page}
        />
        <Header
          label={"Contacts"}
          textStyleInActive={styles.headerTextInactive}
          textStyle={styles.headerText}
          page={1}
          active={page}
        />
        <Header
          label={"Detail"}
          textStyleInActive={styles.headerTextInactive}
          textStyle={styles.headerText}
          page={2}
          active={page}
        />
      </View>

      <PagerView
        style={{ flex: 1 }}
        initialPage={0}
        scrollEnabled={false}
        ref={ref}
      >
        <View key="1">
          <FirstPage />
        </View>
        <View key="2">
          <SecondPage />
        </View>
      </PagerView>
      <View style={styles.outerContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={goBack}
          style={styles.backIconInnerContainer}
        >
          <Icon name="arrowleft" type="AntDesign" color={colors.black} />

          <CustomText label="Back" textStyle={styles.backText} />
        </TouchableOpacity>

        <AuthButton
          name={"Next step"}
          changeColor={true}
          buttonStyling={styles.formButton}
          onPress={goToNextPage}
        />
      </View>
    </>
  );
};

export default SignUpForm;
