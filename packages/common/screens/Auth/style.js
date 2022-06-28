import { ScaledSheet } from "react-native-size-matters";
import colors from "../../assets/colors";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from "react-native-responsive-screen-hooks";
import fonts from "../../assets/fonts";
import IsTablet from "../../components/native/IsTablet";
const styles = ScaledSheet.create({
  innerContainer: {
    width: "75%",
    alignSelf: "center",
    flexGrow: 1,
  },
  innerContainerMobile: {
    width: "95%",
    alignSelf: "center",
    flexGrow: 1,
  },
  dropDownStyle1: {
    width: wp("65%"),
    backgroundColor: "red",
  },
  phoneNumberText: {
    color: colors.textPrimeColor,
    marginBottom: "5@ms",
    fontSize: "12@ms",
    fontFamily: fonts.LatoBold,
    marginTop: "10@ms",
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
  textContainerMobile: {
    backgroundColor: "transparent",
    borderColor: colors.mobileNewBorder,
    borderLeftWidth: "1@s",
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
  countyPickerContainerMobile: {
    borderColor: "transparent",
    borderTopWidth: "2@s",
    borderLeftWidth: "0.5@s",
    borderBottomWidth: "0.5@s",
    borderTopLeftRadius: "5@s",
    borderBottomLeftRadius: "5@s",
    color: colors.red,
    fontSize: 12,
  },
  bottomText: {
    fontSize: "11@vs",
    color: colors.textPrimeColor,
    fontFamily: fonts.LatoMedium,
  },
  nestedBottomText: {
    fontSize: "11@vs",
    color: colors.primary,
    fontFamily: fonts.LatoBold,
  },
  optStyling: {
    marginVertical: "30@s",
    width: wp(!IsTablet ? "85%" : "60%"),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    fontSize: "12@ms",
    color: colors.black,
    fontWeight: "600",
  },
  optContainer: {
    borderWidth: "1@s",
    borderColor: colors.otpBorder,
    borderRadius: IsTablet ? "5@s" : "8@s",
    height: "40@s",
    width: "30@s",
    fontSize: "12@ms",
    color: colors.black,
    textAlign: "center",
    fontWeight: "600",
  },
  optContainerMobile: {
    borderWidth: "1@s",
    borderColor: colors.dullWhite,
    backgroundColor: colors.dullWhite,
    borderRadius: "5@s",
    height: "45@s",
    width: "38@s",
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
    fontSize: "10@vs",
    color: colors.light_grey,
    paddingHorizontal: "2@s",
  },
  changePassword: {
    flex: 1,
    marginTop: "20@s",
  },
  choseAccountShopping: {
    backgroundColor: colors.black,
    width: "35@s",
    height: "35@s",
    borderRadius: "99@s",
    alignSelf: "center",
    marginTop: "10@s",
  },
  choseAccountShopping3: {
    backgroundColor: colors.black,
    width: "35@s",
    height: "35@s",
    borderRadius: "99@s",
    alignSelf: "center",
    marginTop: "10@s",
    opacity: 0.03,
  },
  choseAccountReview: {
    width: "58@s",
    height: "34@s",
    alignSelf: "center",
    marginTop: "10@s",
    position: "absolute",
    top: -23,
  },
  underReview: {
    fontSize: "8@vs",
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
    alignSelf: "center",
    marginTop: "10@s",
  },

  choseAccountShoppingMobile: {
    backgroundColor: colors.black,
    width: "45@vs",
    height: "45@vs",
    borderRadius: "99@s",
    alignSelf: "center",
    marginHorizontal: "10@s",
    overflow: "hidden",
  },
  choseAccountShoppingMobileReview: {
    width: "60@s",
    height: "50@s",
    alignSelf: "flex-end",
    marginHorizontal: "10@s",
    overflow: "hidden",
  },
  choseMainContainer: {
    width: "125@s",
    height: "90@s",
    backgroundColor: colors.blurPrimary,
    borderRadius: "5@s",
    margin: "5@s",
    borderWidth: "0.5@s",
    borderColor: colors.primary,
  },
  choseMainContainerMobile: {
    width: "100%",
    height: "90@s",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.blurPrimary,
    borderRadius: "8@s",
    margin: "5@s",
    borderWidth: "1@s",
    borderColor: colors.primary,
    alignSelf: "center",
  },
  choseMainContainer1: {
    width: "125@s",
    height: "90@s",
    backgroundColor: colors.darkGray,
    borderRadius: "4@s",
    margin: "5@s",
    borderWidth: "0.5@s",
    borderColor: colors.borderColor,
  },
  choseMainContainer2: {
    width: "30%",
    height: "85@s",
    backgroundColor: "transparent",
    borderRadius: "4@s",
    margin: "5@s",
    borderWidth: "0.5@s",
    borderColor: colors.borderColor,
  },
  choseMainContainer1Mobile: {
    width: "98%",
    height: "90@s",
    backgroundColor: colors.darkGray,
    borderRadius: "8@s",
    margin: "5@s",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    // borderWidth: "0.5@s",
    // borderColor: "rgba(205, 205, 208, 0.5)",
  },
  choseMainContainer1Mobileother: {
    width: "98%",
    height: "90@s",
    backgroundColor: colors.dullWhite,
    borderRadius: "10@s",
    margin: "5@s",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    // borderWidth: "0.5@s",
    // borderColor: "rgba(205, 205, 208, 0.5)",
  },
  accountTitle: {
    fontSize: "12@ms",
    color: colors.black,
    textAlign: "center",
    fontFamily: fonts.PoppinsMedium,
    marginTop: "5@s",
  },
  accountDetail: {
    fontSize: "10@ms",
    color: colors.textPrimary,
    textAlign: "center",
    fontFamily: fonts.LatoMedium,
    marginBottom: "10@s",
  },
  accountDetail1: {
    fontSize: "10@ms",
    color: colors.light_grey,
    textAlign: "center",
    fontFamily: fonts.LatoMedium,
    marginBottom: "10@s",
  },
  heading: {
    fontSize: "20@vs",
    color: colors.primary,
    fontFamily: fonts.bold,
    textAlign: "center",
    margin: "5@ms",
  },
  headingMobile: {
    fontSize: "20@vs",
    color: colors.black,
    fontFamily: fonts.bold,
    textAlign: "center",
  },
  body: {
    fontSize: "12@ms",
    color: colors.black,
    textAlign: "center",
    fontFamily: fonts.LatoRegular,
    marginHorizontal: "5@s",
    lineHeight: "15@s",
  },
  bodyMobile: {
    fontSize: "14@vs",
    color: colors.textPrimeColor,
    textAlign: "center",
    fontFamily: fonts.LatoRegular,
    marginHorizontal: "15@s",
    lineHeight:24
  },
  imageView: {
    width: "110@vs",
    height: "110@vs",
    backgroundColor: colors.primary,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: "15@vs",
  },
  imageViewMobile: {
    width: "70%",
    height: "35%",
    backgroundColor: colors.primary,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: "10@vs",
    marginBottom:'40@vs'
  },
  onBoardingDetailconatiner: {
    width: wp("58%"),
    alignItems: "center",
    marginTop: "10%",
  },
  onBoardingDetailconatinerMobile: {
    width: wp("90%"),
    alignItems: "center",
    marginTop: "15@vs",
  },
  screenImage: {
    resizeMode: "contain",
    width: wp("25%"),
    height: hp("25%"),
    alignSelf: "center",
    // margin: "5@s",
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
    alignItems: "center",
  },
  skipbutton: {
    fontSize: "12@ms",
    color: colors.primary,
    fontFamily: fonts.LatoBold,
    alignSelf: "flex-end",
    margin: "15@ms",
    marginVertical: "22@vs",
  },
  skipbuttonMobile: {
    fontSize: "13@vs",
    color: colors.black,
    fontFamily: fonts.LatoSemiBold,
    alignSelf: "flex-end",
    margin: "15@ms",
    marginVertical: "22@vs",
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
    width: "100%",
    backgroundColor: colors.primary,
    height: "5@s",
    borderRadius: "5@s",
  },
  SignformHeaderMobile: {
    width: "100%",
    backgroundColor: colors.primary,
    height: "5@s",
    borderRadius: "5@s",
  },
  SignUpHeaderInactive: {
    width: "100%",
    backgroundColor: colors.grayLight,
    height: "5@s",
    borderRadius: "5@s",
  },
  SignUpHeaderInactiveMobile: {
    width: "100%",
    backgroundColor: colors.grayLight,
    height: "5@s",
    borderRadius: "5@s",
  },
  headerContainer: {
    flexDirection: "row",
    marginHorizontal: "2@s",
    width:"98%",
    justifyContent:'space-between',
    alignSelf:"center"
  },
  headerContainerMobile: {
    flexDirection: "row",
    width:"95%",
    alignSelf:"center",
    justifyContent:"space-around"
  },
  headerText: {
    fontSize: "12@ms",
    fontFamily: fonts.LatoBold,
    color: colors.black,
    // marginVertical: "3@s",
    marginBottom: "4@s",
  },
  headerTextInactive: {
    fontSize: "12@ms",
    fontFamily: fonts.LatoBold,
    color: colors.light_grey,
    // marginVertical: "3@s",
    marginBottom: "4@s",
  },
  firstPageMainContainer: {
    margin: "5@s",
  },
  formTextHeading: {
    fontSize: "11@ms",
    fontFamily: fonts.LatoSemiBold,
    color: colors.black,
    paddingHorizontal: "2@s",
  },
  formTextHeadingMobile: {
    fontSize: "11@ms",
    fontFamily: fonts.LatoBold,
    color: colors.textPrimeColor,
    paddingHorizontal: "2@s",
  },
  addressContainer: {
    flexDirection: "row",
    marginTop: "10@s",
    justifyContent: "space-between",
    width: "100%",
  },
  formTextHeadingOptional: {
    fontSize: "12@ms",
    fontFamily: fonts.LatoBold,
    color: colors.textPrimeColor,
    paddingHorizontal: "2@s",
  },
  addressInputContainer: {
    width: wp("30%"),
  },

  addressInputContainerMobile1: {
    width: wp("44%"),
  },
  addressInputContainerMobile: {
    width: wp("91.5%"),
    marginBottom: "20@s",
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
    marginBottom: "5@s",
  },
  outerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: !IsTablet ? "center" : "flex-end",
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
    backgroundColor: colors.blurPrimary1,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    padding: "6@s",
    borderRadius: "3@s",
    margin: "5@s",
  },
  formButtonMobile: {
    backgroundColor: colors.primary,
    width: wp("90%"),
    alignSelf: "center",
    alignItems: "center",
    padding: "10@s",
    borderRadius: "8@s",
    margin: "5@s",
  },
  formButton1: {
    backgroundColor: colors.primary,
    width: wp("65%"),
    alignSelf: "center",
    alignItems: "center",
    padding: "10@s",
    borderRadius: "5@s",
    margin: "5@s",
  },
  dropDownStyle: {
    backgroundColor: "transparent",
    borderColor: colors.borderColor,
    height: "40@ms",
  },
  dropDownStyle12: {
    backgroundColor: "transparent",
    borderColor: colors.borderColor,
    height: "45@ms",

  },
  dropDownStyle13: {
    backgroundColor: "transparent",
    borderColor: colors.borderColor,
    height: "45@ms",
    width:"100%"
  },
  dropDownStyleMoBile: {
    backgroundColor: colors.dullWhite,
    borderColor: colors.borderColor,
    height: "45@ms",
  },
  dropDownPlaceHolder: {
    color: colors.light_grey,
    fontSize: "12@ms",
  },
  accountMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    width:"100%",
  },
  accountMainContainerMobile: {
    flexDirection: "column",
    justifyContent: "space-between",

  },
  dropdownContainer: {
    backgroundColor: colors.light_grey,
    borderColor: colors.borderColor,
  },
  accountSelection: {
    backgroundColor: colors.primaryBlur,
    width: "100%",
    flexDirection: "row",
    borderRadius: "4@s",
    borderWidth: "0.5@s",
    borderColor: colors.primary,
    alignItems: "center",
  },
  accountSelectionMobile: {
    backgroundColor: colors.primaryBlur,
    width: wp("90%"),
    flexDirection: "row",
    borderRadius: "8@s",
    borderWidth: "1@s",
    borderColor: colors.primary,
    alignItems: "center",
    height: "65@vs",
    marginBottom: "10@s",
  },
  accountSelectionInActive: {
    backgroundColor: colors.dullColor,
    width: "100%",
    flexDirection: "row",
    borderRadius: "4@s",
    borderWidth: "1@s",
    borderColor: colors.borderColor,
  },
  accountSelectionInActiveMobile: {
    backgroundColor: colors.dullWhite,
    width: wp("90%"),
    flexDirection: "row",
    borderRadius: "8@s",
    height: "65@vs",
    marginBottom: "10@s",
    alignItems: "center",
    // borderWidth: "1@s",
    // borderColor: colors.borderColor,
  },

  accountTitles: {
    fontSize: "13@ms",
    fontFamily: fonts.LatoMedium,
    color: colors.black,
  },
  accountSelectionDec: {
    fontSize: "8@vs",
    fontFamily: fonts.LatoSemiBold,
    color: colors.black40,
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
  outerRadiocontainerMobile: {
    backgroundColor: colors.textWhite,
    borderRadius: "99@s",
    borderColor: colors.primary,
    width: "14@s",
    height: "14@s",
    borderWidth: "2@s",
    justifyContent: "center",
    margin: "5@s",
    marginVertical: "10@s",
    alignSelf: "center",
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
  outerRadiocontainerInactiveMobile: {
    backgroundColor: colors.textWhite,
    borderRadius: "99@s",
    borderColor: colors.textPrimaryBlur,
    width: "14@s",
    height: "14@s",
    borderWidth: "2@s",
    justifyContent: "center",
    margin: "5@s",
    marginVertical: "10@s",
    alignSelf: "center",
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
    flexWrap: "wrap",
  },
  paymentInnerContainer: {
    borderColor: colors.borderColor,
    borderWidth: "0.5@s",
    width: "49%",
    flexDirection: "row",
    paddingVertical: "10@s",
    borderRadius: "3@s",
    paddingHorizontal: "5@s",
    marginVertical: "5@s",
  },
  paymentInnerContainerActive: {
    borderColor: colors.primary,
    borderWidth: "0.5@s",
    width: "49%",
    flexDirection: "row",
    paddingVertical: "10@s",
    borderRadius: "3@s",
    paddingHorizontal: "5@s",
    marginVertical: "5@s",
  },
  paymentInnerContainerMobile: {
    // borderColor: colors.borderColor,
    // borderWidth: "0.5@s",
    backgroundColor: colors.dullWhite,
    width: "49%",
    flexDirection: "row",
    paddingVertical: "12@s",
    borderRadius: "8@s",
    paddingHorizontal: "7@s",
    marginVertical: "5@s",
  },
  paymentInnerContainerMobileActive: {
    // borderColor: colors.borderColor,
    // borderWidth: "0.5@s",
    backgroundColor: colors.blurPrimary,
    width: "49%",
    flexDirection: "row",
    paddingVertical: "12@s",
    borderRadius: "8@s",
    paddingHorizontal: "7@s",
    marginVertical: "5@s",
  },
  checkBackground: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: "2@s",
    width: "15@s",
    height: "15@s",
  },
  checkBackgroundMobile: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: "2@s",
    borderColor: colors.textPrimaryBlur,
    width: "15@s",
    height: "15@s",
  },
  checkBackgroundInactive: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: "2@s",
    borderColor: colors.background2,
    borderWidth: "0.5@s",
    width: "15@s",
    height: "15@s",
  },
  checkBackgroundInactiveMobile: {
    backgroundColor: colors.textWhite,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: "3@s",
    borderColor: colors.textPrimaryBlur,
    borderWidth: "1@s",
    width: "15@s",
    height: "15@s",
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
    lineHeight: "30@s",
    marginTop: "10@s",
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
  dropDownContainerMobile: {
    width: "40%",
    alignItems: "center",
    flexDirection: "row",
    padding: "10@s",
    borderRadius: "5@s",
    justifyContent: "space-between",
    backgroundColor: colors.dullWhite,
  },
  fromText: {
    marginRight: "5@s",
  },
  ToastMainView: {
    flexDirection: "row",
    marginVertical: 0,
  },
  IconToast: {
    color: "green",
    fontSize: 20,
    paddingHorizontal: 4,
  },
  ToastParagraph: {
    color: "#002733",
    fontSize: 15,
    fontFamily: "Lato-Bold",
  },
  ActionToast: {
    color: "#018FFB",
    fontSize: 15,
    fontFamily: "Lato-Bold",
    marginLeft: 20,
  },
  Tost: {
    backgroundColor: "#FFFFFF",
    top: -100,
    shadowColor: "#000",
    position: "absolute",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  errorMessage: {
    fontSize: "10@ms",
    fontFamily: fonts.LatoRegular,
    color: colors.red,
  },
  backIcon: {
    backgroundColor: colors.blurPrimary,
    marginLeft: "10@s",
    borderRadius: "4@s",
    width: '30@vs',
    height: '30@vs',
    justifyContent:'center',
    alignItems:'center'
  },
  letsGoButton: {
    backgroundColor: colors.primary,
    width: wp("90%"),
    height: '50@vs',
    borderRadius: "10@vs",
    alignItems: "center",
    justifyContent:'center',
    marginBottom:'10@vs',
    alignSelf:'center'
  },
  buttonMobile: {
    backgroundColor: colors.primary,
    width: wp("90%"),
    alignSelf: "center",
    alignItems: "center",
    padding: "10@s",
    borderRadius: "5@s",
    margin: "5@s",
  },
  button1Mobile: {
    backgroundColor: colors.blurPrimary,
    width: wp("90%"),
    alignSelf: "center",
    alignItems: "center",
    padding: "10@s",
    borderRadius: "4@s",
    margin: "5@s",
  },
  button1Mobile1: {
    backgroundColor: colors.primaryGreenColor,
    width: wp("90%"),
    alignSelf: "center",
    alignItems: "center",
    padding: "15@s",
    borderRadius: "10@s",
    margin: "5@s",
  },
  button: {
    backgroundColor: colors.primary,
    width: "65%",
    alignSelf: "center",
    alignItems: "center",
    padding: "10@s",
    borderRadius: "4@s",
    margin: "5@s",
    marginVertical: "1@s",
  },
  button1: {
    backgroundColor: colors.blurPrimary,
    width: "65%",
    alignSelf: "center",
    alignItems: "center",
    padding: "10@s",
    borderRadius: "5@s",
    margin: "5@s",
  },
  button2: {
    backgroundColor: colors.blurPrimary1,
    width: wp("65%"),
    alignSelf: "center",
    alignItems: "center",
    padding: "10@s",
    borderRadius: "5@s",
    margin: "5@s",
  },
  questionnaire: {
    fontSize: "16@ms",
    color: colors.black,
    fontFamily: fonts.bold,
    marginLeft: "10@s",
    marginBottom: "10@s",
  },
  sellerIdText: {
    fontSize: "12@vs",
    color: colors.black,
    fontFamily: fonts.LatoMedium,
  },
  oppsText: {
    fontSize: "20@vs",
    fontFamily: fonts.bold,
    color: colors.primary,
    alignSelf: "center",
  },
  opsDetail: {
    fontSize: "15@vs",
    fontFamily: fonts.LatoSemiBold,
    color: colors.black,
    alignSelf: "center",
    textAlign: "center",
    lineHeight: !IsTablet ? "21@s" : "18@s",
    marginHorizontal: "10@s",
  },
  SkipText: {
    fontSize: "13@vs",
    fontFamily: fonts.LatoBold,
    color: colors.textPrimeColor,
    alignSelf: "center",
    marginBottom: "10@s",
    marginTop: "5@s",
  },
  SellerInformationTitle: {
    fontSize: "22@vs",
    fontFamily: fonts.LatoBold,
    color: colors.black,
    marginLeft: "5@s",
  },
  SoonText: {
    fontSize: "10@vs",
    fontFamily: fonts.PoppinsMedium,
    color: colors.black,
    alignSelf: "center",
    marginTop: "4@s",
  },
});

export default styles;
