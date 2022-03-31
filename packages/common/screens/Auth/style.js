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
    color:colors.red,
    fontSize:12,
    
  },
  bottomText: {
    fontSize: "11@ms",
    color: colors.textPrimary,
    fontFamily:fonts.LatoMedium
  },
  nestedBottomText: {
    fontSize: "8@s",
    color: colors.primary,
    fontFamily:fonts.LatoMedium
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
    fontFamily:fonts.LatoMedium,
    fontSize:"11@ms"
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
    borderColor:colors.primary
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
    justifyContent: "space-between",
    marginTop: "10@s",
    height: "30@s",
  },
  formTextHeadingOptional: {
    fontSize: "12@ms",
    fontFamily: fonts.LatoBold,
    color: colors.black,
    paddingHorizontal: "2@s",
  },
  addressInput: {
    width: wp("30%"),
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
    color: colors.gray,
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
  },
  backText: {
    fontSize: "12@ms",
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
    marginRight: "10@s",
    marginLeft: "5@s",
  },
  formButton: {
    backgroundColor: "rgba(90, 179, 168, 0.2)",
    width: wp("35%"),
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
  dropDownPlaceHolder: {
    color: colors.light_grey,
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
    borderRadius: "3@s",
    borderWidth: "1@s",
    borderColor: colors.primary,
    alignItems:'center'
  },
  accountSelectionInActive: {
    backgroundColor: "transparent",
    width: wp("31%"),
    flexDirection: "row",
    borderRadius: "3@s",
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
    alignSelf:'flex-start',
    padding:'2@s'
   
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
    alignItems:'center'
  },
  accountTextContainer: {
    marginVertical: "7@s",
    marginRight: "10@s",
  },
  customRadio: {
    backgroundColor: colors.primary,
    width: '5@ms',
    height: '5@ms',
    borderRadius: "99@s",
    alignSelf:'center'

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
    marginBottom:'8@s'
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
    backgroundColor: 'transparent',
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: "2@s",
    borderColor:colors.borderColor,
    borderWidth:'0.5@s',
    width:'12@s',
    height:"12@s"
  },
  paymentText: {
    fontSize: "11@ms",
    fontFamily: fonts.LatoMedium,
    marginHorizontal: "5@ms",
    marginVertical: "2@s",
    
    marginLeft:'10@ms'
  },
  detailInput:{
    borderWidth: "0.5@s",
    borderColor: colors.borderColor,
    width: "100%",
    borderRadius: "4@s",
    height:'70@ms'

  }
});

export default styles;
