import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import PagerView from "react-native-pager-view";
import HeaderBack from "../../components/native/HeaderBack";
import Header from "./SignUpFormPages/Molecules/Header";
import FirstPage from "./SignUpFormPages/FirstPage";
import SecondPage from "./SignUpFormPages/SecondPage";
import ThirdPage from "./SignUpFormPages/ThirdPage";
import styles from "./style";
import * as userAction from "../../store/User/actions";
import CustomText from "../../components/CustomText";
import AuthButton from "../../components/native/AuthButton";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";
import { useTranslation } from "react-i18next";
import IsTablet from "../../components/native/IsTablet";
import { verticalScale } from "react-native-size-matters";
import { useDispatch } from "react-redux";
const SignUpForm = ({ navigation }) => {
  const { t } = useTranslation();
  const AllFieldsData = {
    name: "",
    bio: "",
    address: {
      address_line_2: " ",
      address_line_1: "",
      town_id: "",
      notes: "",
      lat: "",
      lng: "",
    },
    tax_id: "",
    slogan: "",
    business_phone: "",
    business_email: "",
    business_owner_full_name: "",
    main_category_id: "",
    working_time_start: "",
    working_time_end: "",
  };
  const [CreateStore, setCreateStore] = useState(AllFieldsData);
  const [BusinesName, setBusinesName] = useState();
  const [BusinessOwner, setBusinessOwner] = useState();
  const [BusinessEmail, setBusinessEmail] = useState();
  const [socialmediaProfile, setsocialmediaProfile] = useState();
  const [socialmediaWebsite, setBusinessWebsite] = useState();
  const [BusinesTax_Id, setBusinesTax_Id] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();
  const ref = useRef(null);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const isTab = IsTablet;
  const goprev = () => {
    if (page > 0) {
      const newStep = Math.max(0, page - 1);
      ref.current?.setPageWithoutAnimation(newStep);
      setPage(newStep);
    } else {
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "AuthStack" }],
        });
      }, 400);
    }
  };
  const moveForward = () => {
    const nextStep = Math.min(4, page + 1);

    if (nextStep === 3) {
      goToGettingStarted();
    } else {
      ref.current?.setPageWithoutAnimation(nextStep);
      setPage(nextStep);
    }
  };
  const goToGettingStarted = () => {
    console.log("####################",CreateStore)
    // return
    var data123 = {
      BusinesName: BusinesName,
      BusinessOwner: BusinessOwner,
      BusinessEmail: BusinessEmail,
      socialmediaProfile: socialmediaProfile,
      socialmediaWebsite: socialmediaWebsite,
      BusinesTax_Id: BusinesTax_Id,
      PhoneNumber: PhoneNumber,
    };
    dispatch(
      userAction.userCreateStoreSaga({
        data123,
        cb: (res) => {
          if (res == "Email Verified") {
            setTimeout(() => {
              navigation.navigate("GettingStarted", {
                params: {
                  gettingStarted: true,
                },
              });
            }, 1000);
          }
        },
      })
    );
    // navigation.navigate("GettingStarted", {
    //   params: {
    //     gettingStarted: true,
    //   },
    // });
  };
  return (
    <>
      <HeaderBack name={`${t("Step")} ${page + 1}/3`} onGoBack={goprev} />
      {!isTab ? (
        <CustomText
          label={t("questionnaire")}
          textStyle={styles.questionnaire}
        />
      ) : (
        <View />
      )}
      <View
        style={!isTab ? styles.headerContainerMobile : styles.headerContainer}
      >
        <View style={{ width: "32%" }}>
          <Header
            label={!isTab ? t("basicInfo") : t("Basic_information")}
            textStyle={styles.headerText}
            textStyleInActive={styles.headerTextInactive}
            page={0}
            active={page}
          />
        </View>
        <View style={{ width: "32%" }}>
          <Header
            label={!IsTablet ? t("location_info") : t("Location_info")}
            textStyleInActive={styles.headerTextInactive}
            textStyle={styles.headerText}
            page={1}
            active={page}
          />
        </View>
        <View style={{ width: "32%" }}>
          <Header
            label={t("moreDetail")}
            textStyleInActive={styles.headerTextInactive}
            textStyle={styles.headerText}
            page={2}
            active={page}
          />
        </View>
      </View>

      <PagerView
        style={{ flex: 1, margin: 10 }}
        initialPage={0}
        scrollEnabled={false}
        ref={ref}
      >
        <View key="1">
          <FirstPage
            businessName={(text) =>
              setCreateStore({ ...CreateStore, name: text })
            }
            BusinessOwner={(text) =>
              setCreateStore({ ...CreateStore, business_owner_full_name: text })
            }
            BusinessEmail={(text) =>
              setCreateStore({ ...CreateStore, business_email: text })
            }
            // BusinessWebsite={(text) =>
            //   setCreateStore({ ...CreateStore, name: text })
            // }
            // socialmediaProfile={(text) =>
            //   setCreateStore({ ...CreateStore, name: text })
            // }
            BusinesTax_Id={(text) =>
              setCreateStore({ ...CreateStore, tax_id: text })
            }
            PhoneNumber={(text) => setCreateStore({ ...CreateStore, business_phone: text })}
          />
        </View>
        <View key="2">
          <SecondPage
           Adress_One={(text) =>
            setCreateStore({ ...CreateStore, address_line_1:text })
          }
          />
        </View>
        <View key="3">
          <ThirdPage />
        </View>
      </PagerView>
      <View style={styles.outerContainer}>
        {!isTab ? (
          <View />
        ) : (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={goprev}
            style={styles.backIconInnerContainer}
          >
            <Icon
              name="arrowleft"
              type="antdesign"
              color={colors.black}
              size={28}
            />

            <CustomText label={t("back")} textStyle={styles.backText} />
          </TouchableOpacity>
        )}
        <View
          style={{
            width: "40%",
            marginRight: verticalScale(!IsTablet ? 0 : 10),
          }}
        >
          <AuthButton
            name={page == 2 ? t("Submit") : t("Next_step")}
            buttonStyling={
              !IsTablet ? styles.formButtonMobile : styles.formButton
            }
            onPress={moveForward}
          />
          <View style={{ height: verticalScale(10) }} />
        </View>
      </View>
    </>
  );
};

export default SignUpForm;
