import fonts from '@SilalApp/common/assets/fonts';
import colors from '@SilalApp/common/assets/colors/index';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.profileBackground,
    flex: 1,
    paddingHorizontal: '5@s',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5@s',
  },
  createnewItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createnewItemContainerMobile:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginHorizontal:'10@s',
    width:'90%'
  },
  createItemText: {
    fontSize: '15@ms',
    fontFamily: fonts.bold,
    color: colors.black,
    marginLeft: '10@s',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    marginHorizontal:'15@s'
  },
  dullContainerStyle: {
    backgroundColor: colors.primaryBlur,
    marginRight: '5@s',
    width: '100@s',
    height: '25@s',
  },
  buttonContainerStyle: {
    backgroundColor: colors.primary,
    marginRight: '5@s',
    width: '110@s',
    height: '25@s',
  },
  buttonTextDull: {
    fontSize: '10@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
    // marginHorizontal: '2@s',
    // marginVertical: '4@s',
  },
  buttonText: {
    fontSize: '10@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,
    marginHorizontal: '2@s',
    marginVertical: '4@s',
  },
  tabPagerContainer: {
    backgroundColor: colors.textWhite,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '4@s',
    marginHorizontal: '5@s',
    marginVertical: '10@s',
    paddingVertical: '4@s',
    width: '100%',
  },
  tabTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberContainer: {
    backgroundColor: colors.primary,
    borderRadius: '99@s',
    width: '20@s',
    height: '20@s',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5@s',
  },
  numberText: {
    fontSize: '14@ms',
    fontFamily: fonts.bold,
    color: colors.textWhite,
  },
  SignUpHeaderInactive: {
    backgroundColor: colors.light_grey,
    width: '20@s',
    height: '1@s',
    marginHorizontal: '5@s',
  },
  SignformHeader: {
    backgroundColor: colors.primary,
    width: '20@s',
    height: '1@s',
    marginHorizontal: '5@s',
  },
  numberContainerInactive: {
    backgroundColor: colors.background2,
    borderRadius: '99@s',
    width: '20@s',
    height: '20@s',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5@s',
  },
  textStyle: {
    fontSize: '13@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  textStyleInActive: {
    fontSize: '13@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textColor,
  },
  // ///Mobile
  ContainerMobile: {
    backgroundColor: colors.profileBackground,
    marginVertical: '33@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5@s',
  },
  BackIconMobile: {
    // marginHorizontal:'5@s',
    fontSize: '25@s',
    fontFamily: fonts.bold,
    color: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  threeDotsMobile: {
    color: colors.textPrimary,
    fontSize: '20@s',
  },
  headertitlemobile: {
    marginHorizontal: '10@s',
    fontSize: '17@s',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  headerSheetText: {
    color: colors.black,
    fontFamily: fonts.LatoRegular,
    fontSize: 17,
  },
  IconHeaderSheet:{
    marginHorizontal: 10,
    fontSize: 17,
    color: colors.gray,
    fontSize: 20,
  },
  divider: {
    backgroundColor: colors.underLine,
    width: '100%',
    height: '1@s',
  },

 
});

export default styles;
