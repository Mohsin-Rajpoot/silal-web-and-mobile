import { ScaledSheet } from "react-native-size-matters";
import colors from "../../assets/colors";
import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from "react-native-responsive-screen-hooks";
import fonts from "../../assets/fonts";
const styles = ScaledSheet.create({
  innerContainer: {
    width: "75%",
    alignSelf: "center",
    flex: 1,
  },
  phoneNumberText: {
    color: colors.textPrimary,
    margin: "3@s",
    marginVertical: "5@s",
    fontSize: "11@ms",
    fontFamily: fonts.LatoBold,
  },
  codeText: {
    fontSize: "8@ms",
  },
  textContainer: {
    backgroundColor: "transparent",
    borderColor: "rgba(141, 142, 150, 1)",
    borderWidth: "1@s",
    borderTopRightRadius: "5@s",
    borderBottomRightRadius: "5@s",
    fontSize: "10@ms",
  },
  countyPickerContainer: {
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderTopWidth: "1@s",
    borderLeftWidth: "1@s",
    borderBottomWidth: "1@s",
    borderTopLeftRadius: "5@s",
    borderBottomLeftRadius: "5@s",
  },
  bottomText: {
    fontSize: "14@s",
    color: colors.textPrimary,
  },
  nestedBottomText: {
    fontSize: "14@s",
    color: colors.primary,
  },
  optStyling: {
    marginVertical: "30@s",
    width: wp("60%"),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    fontSize:'12@ms',
    color:colors.black
  },
  optContainer: {
    borderWidth: "1@s",
    borderColor: colors.light_grey,
    borderRadius: "5@s",
    height: "35@s",
    width: "30@s",
    fontSize:'12@ms',
    color:colors.black,
    textAlign:'center'
  },
  timerCode: {
    alignSelf: "center",
    borderBottomWidth: "1@s",
    borderBottomColor: colors.gray,
  },
  passwordWaring: {
    flexDirection: "row",
    alignItems: "center",
    margin: "3@s",
  },
  passwordWarningText: {
    fontSize: "12@s",
    color: colors.light_grey,
    paddingHorizontal: "2@s",
  },
  changePassword: {
    flex: 1,
    marginTop: "20@s",
  },
  choseAccountShopping: {
    backgroundColor: colors.black,
    width: "40@s",
    height: "40@s",
    borderRadius: "99@s",
    alignSelf: "center",
    marginTop:"10@s"
  },
  choseMainContainer: {
    width: "125@s",
    height: "100@s",
    backgroundColor: 'rgba(90, 179, 168, 0.15)',
    borderRadius: "10@s",
    margin: "5@s",
    borderWidth:'1@s',
    color:colors.primary
  },
  choseMainContainer1: {
    width: "125@s",
    height: "100@s",
    backgroundColor: 'transparent',
    borderRadius: "10@s",
    margin: "5@s",
    borderWidth:'1@s',
    borderColor:"rgba(205, 205, 208, 0.5)"
  },
  accountTitle: {
    fontSize: "13@ms",
    color: colors.black,
    textAlign: "center",
    fontFamily:fonts.PoppinsMedium,
    marginVertical: "5@s",
  },
  accountDetail: {
    fontSize: "12@ms",
    color: colors.textPrimary,
    textAlign: "center",
    fontFamily:fonts.LatoMedium,
    marginBottom: "10@s",
  },
  heading: {
    fontSize: "23@ms",
    color: colors.primary,
    fontFamily: fonts.bold,
    textAlign: "center",
    margin: "5@ms",
  },
  body: {
    fontSize: "14@ms",
    color: colors.black,
    textAlign: "center",
    fontFamily: fonts.LatoRegular,
    marginHorizontal: "5@s",
  },
  onBoardingDetailconatiner: {
    width: wp("58%"),
    alignItems: "center",
  },
  screenImage: {
    resizeMode: "contain",
    width: wp("30%"),
    height: hp("30%"),
    alignSelf: "center",
    margin: "10@s",
  },
  dot: {
    width: "10@ms",
    height: "10@ms",
    borderRadius: "10@ms",
    backgroundColor: "rgba(90, 179, 168, 0.2)",
    marginEnd: "5@s",
  },
  underScore: {
    width: "30@s",
    height: "10@vs",
    borderRadius: "60@ms",
    backgroundColor: colors.primary,
    marginEnd: "5@s",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  skipbutton: {
    fontSize: "12@ms",
    color: colors.primary,
    fontFamily: fonts.LatoBold,
    alignSelf: "flex-end",
    margin: "10@ms",
  },
  signUpDetailText: {
    fontSize: "12@ms",
    fontFamily: fonts.LatoMedium,
    color: colors.textPrimary,
    textAlign: "center",
  },
  termCondition: {
    fontSize: "12@ms",
    fontFamily: fonts.LatoBold,
    color: colors.primary,
    textAlign: "center",
  },
});

export default styles;
