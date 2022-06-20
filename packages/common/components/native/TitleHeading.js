import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calender } from "@SilalApp/common/components/native";
import Svg, { Path } from "react-native-svg";
import {
  ScaledSheet,
  moderateScale,
  verticalScale,
} from "react-native-size-matters";
import colors from "../../assets/colors";
import IsTablet from "./IsTablet";
import { Icon } from "react-native-elements";
import fonts from "../../assets/fonts";

const TitleHeading = ({ navigation, Date }) => {
  return (
    <SafeAreaView>
      <View style={styles.mainViewHeading}>
        <View style={{ flexDirection: !IsTablet ? "column" : "row" }}>
          <View>
            <Text style={styles.Title}>Restaurant’s name</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="location-sharp"
                type="ionicon"
                size={verticalScale(13)}
                color={colors.text}
              />
              <Text style={styles.subTitle}>8502 Preston Rd. Inglewood</Text>
            </View>
          </View>
          <View
            style={
              !IsTablet
                ? styles.PeackTimeBackgroundMobile
                : styles.PeackTimeBackground
            }
          >
            <View>
              <Svg
                width="10"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M4.99957 14.3333C3.99768 14.3332 3.01891 14.0322 2.19018 13.4691C1.36145 12.9061 0.720975 12.1071 0.351805 11.1757C-0.0173651 10.2443 -0.0982065 9.22345 0.119763 8.24555C0.337732 7.26765 0.844458 6.37779 1.57424 5.69133C2.46891 4.84933 4.66624 3.33333 4.33291 0C8.33291 2.66667 10.3329 5.33333 6.33291 9.33333C6.99957 9.33333 7.99957 9.33333 9.66624 7.68667C9.84624 8.202 9.99957 8.756 9.99957 9.33333C9.99957 10.6594 9.47279 11.9312 8.53511 12.8689C7.59743 13.8065 6.32566 14.3333 4.99957 14.3333Z"
                  fill="#E20909"
                />
              </Svg>
            </View>
            <View>
              <Text
                style={
                  !IsTablet ? styles.TextPeackTimeMobile : styles.TextPeackTime
                }
              >
                PEAK HOURS 12 AM - 14 PM
              </Text>
            </View>
          </View>
        </View>
        {!IsTablet ? (
          <View />
        ) : (
          <View>
            {Date == "Date" ? <Calender bg_Calender="notdone" /> : null}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default TitleHeading;

const styles = ScaledSheet.create({
  mainViewHeading: {
    flexDirection: "row",
    marginHorizontal: "10@s",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  Title: {
    color: colors.black,
    fontFamily: fonts.bold,
    fontSize: "18@vs",
    lineHeight: 38,
  },
  subTitle: {
    fontFamily: fonts.LatoRegular,
    fontSize: "11@vs",
    color: colors.sidebar,
    marginLeft: "2@s",
  },
  PeackTimeBackground: {
    backgroundColor: colors.peackHourColor,
    borderRadius: "3@s",
    marginHorizontal: "10@s",
    marginVertical: "1@s",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "17@s",
    paddingHorizontal: "5@s",
  },
  PeackTimeBackgroundMobile: {
    backgroundColor: colors.borderColor1,
    // width: 200,
    // height: 34,
    marginHorizontal: "5@s",
    borderRadius: "6@s",
    marginVertical: "8@s",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: "8@s",
  },
  TextPeackTime: {
    fontFamily: fonts.LatoRegular,
    fontSize: verticalScale(8),
    color: colors.redColor,
    marginLeft: "3@s",
  },
  TextPeackTimeMobile: {
    fontFamily: fonts.LatoRegular,
    fontSize: verticalScale(10),
    color: colors.text,
    paddingHorizontal: 5,
  },
});
