import { ScaledSheet } from "react-native-size-matters";
import colors from "../../assets/colors";

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
    flexGrow: 1,
  },
  dropDownStyle1: {
    width: "50%",
    backgroundColor: "red",
  },
  phoneNumberText: {
    color: colors.textPrimary,
    marginBottom: "5@ms",
    fontSize: "11@ms",
    fontFamily: fonts.LatoBold,
    marginTop: "5@ms",
  },
  codeText: {
    fontSize: "12@ms",
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  textContainer: {
    backgroundColor: "transparent",
    borderColor: colors.light_grey,
    borderWidth: "0.3@s",
    borderTopRightRadius: "4@s",
    borderBottomRightRadius: "4@s",
    fontSize: "10@ms",
  },
  countyPickerContainer: {
    borderColor: colors.light_grey,
    borderTopWidth: "0.5@s",
    borderLeftWidth: "0.5@s",
    borderBottomWidth: "0.5@s",
    borderTopLeftRadius: "4@s",
    borderBottomLeftRadius: "4@s",
    color: colors.red,
    fontSize: 12,
  },
  bottomText: {
    fontSize: "11@ms",
    color: colors.textPrimary,
    fontFamily: fonts.LatoMedium,
  },
  nestedBottomText: {
    fontSize: "8@s",
    color: colors.primary,
    fontFamily: fonts.LatoMedium,
  },
  optStyling: {
    marginVertical: "30@s",
    width: wp("60%"),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    fontSize: "12@ms",
    color: colors.black,
  },
  optContainer: {
    borderWidth: "1@s",
    borderColor: colors.otpBorder,
    borderRadius: "5@s",
    height: "40@s",
    width: "30@s",
    fontSize: "12@ms",
    color: colors.black,
    textAlign: "center",
  },
  timerCode: {
    alignSelf: "center",
    borderBottomWidth: "1@s",
    borderBottomColor: colors.gray,
    fontFamily: fonts.LatoMedium,
    fontSize: "11@ms",
  },
  passwordWaring: {
    flexDirection: "row",
    alignItems: "center",
    margin: "3@s",
  },
  passwordWarningText: {
    fontSize: "8@s",
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
    marginTop: "10@s",
  },
  choseMainContainer: {
    width: "125@s",
    height: "100@s",
    backgroundColor: "rgba(90, 179, 168, 0.15);",
    borderRadius: "4@s",
    margin: "5@s",
    borderWidth: "0.5@s",
    borderColor: colors.primary,
  },
  choseMainContainer1: {
    width: "125@s",
    height: "100@s",
    backgroundColor: "transparent",
    borderRadius: "4@s",
    margin: "5@s",
    borderWidth: "0.5@s",
    borderColor: "rgba(205, 205, 208, 0.5)",
  },
  accountTitle: {
    fontSize: "12@ms",
    color: colors.black,
    textAlign: "center",
    fontFamily: fonts.PoppinsMedium,
    marginVertical: "5@s",
  },
  accountDetail: {
    fontSize: "10@ms",
    color: colors.textPrimary,
    textAlign: "center",
    fontFamily: fonts.LatoMedium,
    marginBottom: "10@s",
  },
  heading: {
    fontSize: "21@ms",
    color: colors.primary,
    fontFamily: fonts.bold,
    textAlign: "center",
    margin: "5@ms",
  },
  body: {
    fontSize: "12@ms",
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
    margin: "15@ms",
  },
  signUpDetailText: {
    fontSize: "11@ms",
    fontFamily: fonts.LatoMedium,
    color: colors.textPrimary,
    textAlign: "center",
  },
  termCondition: {
    fontSize: "11@ms",
    fontFamily: fonts.LatoBold,
    color: colors.primary,
    textAlign: "center",
  },
  SignformHeader: {
    width: wp("32%"),
    backgroundColor: colors.primary,
    height: "5@s",
    borderRadius: "5@s",
  },
  SignUpHeaderInactive: {
    width: wp("32%"),
    backgroundColor: colors.grayLight,
    height: "5@s",
    borderRadius: "5@s",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: "5@s",
  },
  headerText: {
    fontSize: "12@ms",
    fontFamily: fonts.LatoBold,
    color: colors.black,
    marginVertical: "3@s",
  },
  headerTextInactive: {
    fontSize: "12@ms",
    fontFamily: fonts.LatoBold,
    color: colors.light_grey,
    marginVertical: "3@s",
  },
  firstPageMainContainer: {
    margin: "5@s",
  },
  formTextHeading: {
    fontSize: "11@ms",
    fontFamily: fonts.LatoBold,
    color: colors.black,
    paddingHorizontal: "2@s",
    marginVertical: "5@s",
  },
  addressContainer: {
    flexDirection: "row",
    marginTop: "10@s",
    height: "30@s",
    justifyContent: "space-between",
  },
  formTextHeadingOptional: {
    fontSize: "12@ms",
    fontFamily: fonts.LatoBold,
    color: colors.black,
    paddingHorizontal: "2@s",
  },
  addressInputContainer: {
    width: wp("31.5%"),
  },
  addressInput: {
    borderColor: colors.borderColor,
    borderWidth: "0.5@s",
    borderRadius: "4@s",
  },
  star: {
    color: colors.red,

    flexDirection: "column",
  },
  optionalText: {
    fontSize: "12@ms",
    fontFamily: fonts.LatoBold,
    color: colors.light_grey,
    textAlign: "center",
    alignSelf: "center",
  },
  outerContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginHorizontal: "15@s",
  },
  backIconInnerContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  backText: {
    fontSize: "14@ms",
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
    marginRight: "10@s",
    marginLeft: "5@s",
    marginTop: "2@s",
  },
  formButton: {
    backgroundColor: "rgba(90, 179, 168, 0.5)",
    width: wp("38%"),
    alignSelf: "center",
    alignItems: "center",
    padding: "6@s",
    borderRadius: "3@s",
    margin: "5@s",
  },
  dropDownStyle: {
    backgroundColor: "transparent",
    borderColor: colors.borderColor,
    height: "40@ms",
  },
  dropDownStyle1: {
    backgroundColor: "transparent",
    borderColor: colors.borderColor,
    height: "40@ms",
  },
  dropDownPlaceHolder: {
    color: colors.light_grey,
    fontSize: "12@ms",
  },
  accountMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dropdownContainer: {
    backgroundColor: colors.light_grey,
    borderColor: colors.borderColor,
  },
  accountSelection: {
    backgroundColor: colors.primaryBlur,
    width: wp("31%"),
    flexDirection: "row",
    borderRadius: "4@s",
    borderWidth: "0.5@s",
    borderColor: colors.primary,
    alignItems: "center",
  },
  accountSelectionInActive: {
    backgroundColor: "transparent",
    width: wp("31%"),
    flexDirection: "row",
    borderRadius: "4@s",
    borderWidth: "1@s",
    borderColor: colors.borderColor,
  },
  accountTitles: {
    fontSize: "13@ms",
    fontFamily: fonts.LatoMedium,
    color: colors.black,
  },
  accountSelectionDec: {
    fontSize: "10@ms",
    fontFamily: fonts.LatoRegular,
    color: colors.black,
    marginVertical: "3@s",
    marginRight: "15@s",
  },
  outerRadiocontainer: {
    backgroundColor: colors.textWhite,
    borderRadius: "99@s",
    borderColor: colors.primary,
    width: "10@s",
    height: "10@s",
    borderWidth: "0.8@s",
    justifyContent: "center",
    margin: "5@s",
    marginVertical: "10@s",
    alignSelf: "flex-start",
    padding: "2@s",
  },
  outerRadiocontainerInactive: {
    backgroundColor: colors.textWhite,
    borderRadius: "99@s",
    borderColor: colors.borderColor,
    width: "10@s",
    height: "10@s",
    borderWidth: "0.8@s",
    justifyContent: "center",
    margin: "5@s",
    marginVertical: "10@s",
    alignItems: "center",
  },
  accountTextContainer: {
    marginVertical: "7@s",
    marginRight: "10@s",
  },
  customRadio: {
    backgroundColor: colors.primary,
    width: "5@ms",
    height: "5@ms",
    borderRadius: "99@s",
    alignSelf: "center",
  },
  customRadioInactive: {
    backgroundColor: "transparent",
    width: "5@s",
    height: "5@s",
    borderRadius: "99@s",
    alignSelf: "center",
  },
  paymentMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "8@s",
  },
  paymentInnerContainer: {
    borderColor: colors.borderColor,
    borderWidth: "0.5@s",
    width: "49%",
    flexDirection: "row",
    padding: "7@s",
    borderRadius: "3@s",
  },
  checkBackground: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: "2@s",
  },
  checkBackgroundInactive: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: "2@s",
    borderColor: colors.borderColor,
    borderWidth: "0.5@s",
    width: "12@s",
    height: "12@s",
  },
  paymentText: {
    fontSize: "11@ms",
    fontFamily: fonts.LatoMedium,
    marginHorizontal: "5@ms",
    marginVertical: "2@s",

    marginLeft: "10@ms",
  },
  detailInput: {
    borderWidth: "0.5@s",
    borderColor: colors.borderColor,
    width: "100%",
    borderRadius: "4@s",
    height: "70@ms",
  },
  headingDetail: {
    fontSize: "17@ms",
    color: colors.black,
    fontFamily: fonts.bold,
    alignSelf: "center",
    textAlign: "center",
    lineHeight: "13@s",
  },
  checkout_text: {
    fontSize: "11@ms",
    fontFamily: fonts.LatoMedium,
    color: colors.black,
    alignSelf: "center",
  },
  checkoutInnerText: {
    fontSize: "11@ms",
    fontFamily: fonts.LatoMedium,
    color: colors.primary,
  },
  dropDownContainer: {
    width: "43%",
    alignItems: "center",
    flexDirection: "row",
    padding: "5@s",
    borderColor: colors.light_grey,
    borderWidth: "0.5@s",
    borderRadius: "3@s",
    justifyContent: "space-between",
  },
  fromText: {
    marginRight: "5@s",
  },
  ToastMainView: {
    flexDirection: 'row',
    marginVertical: 0,
  },
  IconToast: {
    color: 'green',
    fontSize: 20,
    paddingHorizontal: 4,
  },
  ToastParagraph: {
    color: '#002733',
    fontSize: 15,
    fontFamily: 'Lato-Bold',
  },
  ActionToast: {
    color: '#018FFB',
    fontSize: 15,
    fontFamily: 'Lato-Bold',
    marginLeft: 20,
  },
  Tost: {
    backgroundColor: '#FFFFFF',
    top:-100,
    shadowColor: '#000',
    position: 'absolute',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

export default styles;
