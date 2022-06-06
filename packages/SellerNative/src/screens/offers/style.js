import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen-hooks';
import fonts from '@SilalApp/common/assets/fonts';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.profileBackground,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: !IsTablet ? '92%' : '98%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  inputContainerMian: {
    width: !IsTablet ? '83%' : '74%',
    // marginLeft: !IsTablet ? '8@s' : '0@s',
  },
  buttonContainer: {
    width: !IsTablet ? '10%' : '23%',
    marginRight: '10@ms',
  },
  inputStyling: {
    backgroundColor: colors.textWhite,
    height: !IsTablet ? '40@ms' : '35@ms',
  },
  buttonStyle: {
    width: '100%',
  },
  buttonText: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '12@ms',
    color: colors.textWhite,
    paddingVertical: '3@s',
  },
  offerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  offerContainerMobile: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  modalMainContainer: {
    width: '95%',
    height: '100%',
    marginTop: '10@s',
  },
  crossIcon: {
    alignSelf: 'flex-end',
  },
  modalbutton: {},
  buttonContainerSaveChanging: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: '4@ms',
    height: '90@s',
    resizeMode: 'cover',
  },
  offerText: {
    fontSize: '13@ms',
    fontFamily: fonts.PoppinsSemiBold,
    marginTop: '4@s',
    color: colors.black,
    marginBottom: '3@s',
  },
  offerName: {
    fontSize: '9@ms',
    fontFamily: fonts.LatoSemiBold,
    color: colors.black,
  },
  createOffer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelContainer: {
    marginVertical: '5@ms',
  },
  creareOfferText: {
    fontSize: '16@ms',
    fontFamily: fonts.bold,
    color: colors.black,
    marginLeft: '5@s',
  },
  crossIcon1: {
    alignSelf: 'flex-end',
  },
  characterLeft: {
    fontSize: '8@ms',
    fontFamily: fonts.LatoSemiBold,
    color: colors.light_grey,
  },
  dropDownStyle: {
    width: '100%',
    borderColor: colors.light_grey,
    marginVertical: '5@ms',
  },
  dropDownPlaceHolder: {
    color: colors.black,
    fontSize: '13@ms',
    fontFamily: fonts.LatoRegular,
  },
  dropdownContainer: {
    borderColor: colors.borderColor,
  },
  inPutTextStyle: {
    fontSize: '11@ms',
    fontFamily: fonts.LatoRegular,
  },
  inputStyle: {
    height: '70@ms',
  },
  inputContainerStyle: {
    marginVertical: '5@ms',
  },
  DateOfBirth: {
    backgroundColor: 'red',
  },
  durationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dateTimeContainer: {
    width: '45%',
    borderColor: colors.light_grey,
    borderWidth: '0.5@ms',
    padding: '5@ms',
    borderRadius: '2@s',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginVertical: '10@ms',
  },
  checkboxDetail: {
    fontSize: '13@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
    marginLeft: '10@ms',
    marginRight: '10@ms',
  },
  activeDaysHeading: {
    fontSize: '15@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
  },
  daySelectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'Yellow',
    width: '100%',
    justifyContent: 'space-between',
  },
  dropDownContainer: {
    paddingVertical: '5@vs',
    paddingHorizontal: '10@s',
    width: '60@s',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.dropDownBackground,
    borderRadius: '4@ms',
    borderWidth: 2,
    borderColor: '#ebebeb',
    justifyContent: 'space-between',
  },
  addItemButton: {
    flexDirection: 'row',
    padding: '5@ms',
    borderRadius: '2@s',
    borderColor: colors.primary,
    borderWidth: '1@ms',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10@ms',
    width: '25%',
  },
  addItemText: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
    marginLeft: '5@s',
  },
  applyButtonText: {
    marginHorizontal: '75@ms',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  applycontainer: {
    width: '100%',
    height: '33@ms',
  },
  pricingContainer: {
    alignItems: 'flex-end',
  },
  innerPricingContainer: {
    flexDirection: 'row',
    margin: '10@ms',
    width: '30%',
    justifyContent: 'space-between',
  },
  pricingTitle: {
    fontSize: '10@ms',
    fontFamily: fonts.LatoSemiBold,
    color: colors.textPrimary,
    margin: '10@s',
    textTransform: 'uppercase',
  },
  price: {
    fontSize: '11@ms',
    fontFamily: fonts.LatoBold,
    color: colors.black,
  },
  plusIcon: {
    backgroundColor: colors.primary,
    width: '40@ms',
    height: '40@ms',
    justifyContent: 'center',
    borderRadius: '5@s',
  },
  tab: {
    backgroundColor: colors.grayLight,
    width: '94%',
    borderRadius: '25@s',
    marginTop: '5@s',
    alignSelf: 'center',
    borderWidth: '0.5@s',
    borderColor: colors.garyDark,
    height: '40@ms',
  },
  tabButton: {},
  buttonText1: {
    width: '100%',
  },
});
export default styles;
