import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import HeaderBack from "../../components/native/HeaderBack";
import HeaderHeading from "../../components/headerHeading";
import Images from "../../assets/images";
import AuthButton from "../../components/native/AuthButton";
import styles from "./style";
import { useTranslation } from "react-i18next";
import DeviceInfo from "react-native-device-info";
import { verticalScale } from "react-native-size-matters";
import IsTablet from "../../components/native/IsTablet";
import CustomText from "../../components/CustomText";
import colors from "../../assets/colors";
const ChooseAccount = ({ navigation }) => {
  const isTab = DeviceInfo.isTablet();
  const { t } = useTranslation();
  const [active, setActive] = useState(1);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1 }}>
        {IsTablet ? (
          <>
            <View style={{ height: 30 }} />
            <HeaderHeading headingName={t("choseAStore")} />
          </>
        ) : (
          <HeaderBack
            name={"Silal " + t("Seller")}
            backIcon={!isTab ? false : true}
            onGoBack={()=>navigation.pop()}
          />
        )}
        <View style={{ height: IsTablet ? 30 : 0 }} />
        <HeaderHeading headingName={t("ownedStore")} />

        <View
          style={{
            flexDirection: !isTab ? "column" : "row",
            width: !isTab ? "90%" : "80%",
            alignSelf: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity activeOpacity={0.6}>
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
              {/* <View style={{ borderRadius: verticalScale(90) }}>
              <Image
                source={Images?.Shopping}
                style={
                  !isTab
                    ? styles.choseAccountShoppingMobile
                    : styles.choseAccountShopping
                }
                resizeMode="center"
              />
            </View> */}
              <View
                style={
                  !isTab
                    ? styles.choseAccountShoppingMobile
                    : styles.choseAccountShopping
                }
              />
              {/* <View
                style={
                  !isTab
                    ? styles.choseAccountShoppingMobile
                    : styles.choseAccountShopping
                }
              /> */}
              <View>
                <Text style={styles.accountTitle}>Restaurant’s name</Text>
                <Text style={styles.accountDetail}>
                  bill.sanders@example.com
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6}>
            <View
              style={[
                !isTab && active == 2
                  ? styles.choseMainContainerMobile
                  : active == 2
                  ? styles.choseMainContainer
                  : !isTab
                  ? styles.choseMainContainer1Mobile
                  : styles.choseMainContainer1,
              ]}
            >
              <View
                style={{
                  backgroundColor: "rgba(0,0,0,0.1)",
                  opacity: 1,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  zIndex: -1,
                }}
              >
                <ImageBackground
                  source={require("../../../SellerNative/assets/images/Rectangle.png")}
                  style={
                    !isTab
                      ? styles.choseAccountShoppingMobileReview
                      : styles.choseAccountReview
                  }
                  resizeMode="stretch"
                >
                  {!IsTablet ? (
                    <View>
                      <CustomText
                        label={t("Under")}
                        textStyle={[
                          styles.underReview,
                          { marginTop: verticalScale(5) },
                        ]}
                      />
                      <CustomText
                        label={t("REVIEW")}
                        textStyle={[
                          styles.underReview,
                          { marginTop: verticalScale(1) },
                        ]}
                      />
                    </View>
                  ) : (
                    <CustomText
                      label={t("Under-Review")}
                      textStyle={styles.underReview}
                    />
                  )}
                </ImageBackground>
              </View>
              <View
                style={
                  !isTab
                    ? styles.choseAccountShoppingMobile
                    : styles.choseAccountShopping3
                }
              />
              {/* <View
                style={
                  !isTab
                    ? styles.choseAccountShoppingMobile
                    : styles.choseAccountShopping
                }
              /> */}
              <View>
                <Text style={styles.accountTitle}>Restaurant’s name</Text>
                <Text style={styles.accountDetail}>
                  bill.sanders@example.com
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: "10%" }} />
        <HeaderHeading headingName={t("ManagedStore")} />
        <View
          style={{
            flexDirection: !IsTablet ? "column" : "row",
            alignItems: "center",
            marginHorizontal: !IsTablet ? verticalScale(10) : verticalScale(5),
          }}
        >
          <View
            style={[
              !isTab
                ? styles.choseMainContainer1Mobileother
                : styles.choseMainContainer2,
            ]}
          >
            {/* <Image
              source={Images?.shop}
              style={
                !isTab
                  ? styles.choseAccountShoppingMobile
                  : styles.choseAccountShopping
              }
              resizeMode="center"
            /> */}
            <View
              style={
                !isTab
                  ? styles.choseAccountShoppingMobile
                  : styles.choseAccountShopping
              }
            />
            {/* <View
                style={
                  !isTab
                    ? styles.choseAccountShoppingMobile
                    : styles.choseAccountShopping
                }
              /> */}
            <View>
              <Text style={styles.accountTitle}>Restaurant’s name</Text>
              {!IsTablet ? (
                <Text style={styles.accountDetail}>
                  bill.sanders@example.com
                </Text>
              ) : (
                <Text style={styles.accountDetail1}>{t("maintenance")}</Text>
              )}
            </View>
          </View>
          <View
            style={[
              !isTab
                ? styles.choseMainContainer1Mobileother
                : styles.choseMainContainer2,
            ]}
          >
            {/* <Image
              source={Images?.shop}
              style={
                !isTab
                  ? styles.choseAccountShoppingMobile
                  : styles.choseAccountShopping
              }
              resizeMode="center"
            /> */}
            <View
              style={
                !isTab
                  ? styles.choseAccountShoppingMobile
                  : styles.choseAccountShopping
              }
            />
            {/* <View
                style={
                  !isTab
                    ? styles.choseAccountShoppingMobile
                    : styles.choseAccountShopping
                }
              /> */}
            <View>
              <Text style={styles.accountTitle}>Restaurant’s name</Text>
              {!IsTablet ? (
                <Text style={styles.accountDetail}>
                  bill.sanders@example.com
                </Text>
              ) : (
                <Text style={styles.accountDetail1}>{t("maintenance")}</Text>
              )}
            </View>
          </View>
          <View
            style={[
              !isTab
                ? styles.choseMainContainer1Mobileother
                : styles.choseMainContainer2,
            ]}
          >
            {/* <Image
              source={Images?.shop}
              style={
                !isTab
                  ? styles.choseAccountShoppingMobile
                  : styles.choseAccountShopping
              }
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
              {!IsTablet ? (
                <Text style={styles.accountDetail}>
                  bill.sanders@example.com
                </Text>
              ) : (
                <Text style={styles.accountDetail1}>{t("maintenance")}</Text>
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginVertical: verticalScale(30),
          }}
        >
          <CustomText
            label={t("SellerInviteId")}
            textStyle={styles.sellerIdText}
          />
          <CustomText
            label="#908432812"
            textStyle={[styles.sellerIdText, { color: colors.primary }]}
          />
        </View>
        <View style={{ height: verticalScale(20) }} />
        <AuthButton
          onPress={() => navigation.navigate("MainStack")}
          name={t("Continue")}
        />
      </View>
      <View style={{ height: 80 }} />
    </ScrollView>
  );
};

export default ChooseAccount;
