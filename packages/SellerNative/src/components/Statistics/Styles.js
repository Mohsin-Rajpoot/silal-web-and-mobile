import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen-hooks';
import fonts from '@SilalApp/common/assets/fonts';

const styles = ScaledSheet.create({
  WhiteDive: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  WhiteDiveMobile: {
    flexDirection: 'column',
  },
  ImgeViewBKG: {
    height: '32@vs',
    width: '32@vs',
    backgroundColor: colors.primaryBlurColor,
    borderRadius: '99@s',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  CurrencyImage: {
    height: '20@vs',
    width: '20@vs',
    resizeMode: 'contain',
  },
  CurrencyImageMobile: {
    height: '20@vs',
    width: '20@vs',
    resizeMode: 'contain',
  },
  PercentageBkgGreen: {
    borderRadius: 5,
    height: '15@s',
    justifyContent: 'center',
    paddingHorizontal: '3@s',
  },
  PercentageBkgGreenMobile: {
    borderRadius: '5@s',
    marginHorizontal: '5@s',
    padding: '2@s',
    width: '45%',
  },
  VectorIconView: {
    color: '#FF5630',
    textAlign: 'center',
    paddingHorizontal: 2,
  },

  PercentageTextColor: {
    color: '#36B37E',
    textAlign: 'center',
  },
  TextInGreenDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInGreenDivMobile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3@s',
    justifyContent: 'space-around',
  },
  MainWhiteDiv: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: '15@s',
    justifyContent: 'space-between',
    marginHorizontal: 1,
    zIndex: 0,
  },
  MainWhiteDivMobile: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: '11@s',
    alignSelf: 'center',
    marginBottom:"5@s"
  },
  One: {
    backgroundColor: colors.textWhite,
    width: '23%',
    elevation: 2,
    borderRadius: 5,
    marginVertical: 15,
    padding: '1@s',
  },
  OneMobile: {
    backgroundColor: colors.textWhite,
    width: '46.8%',
    elevation: 1,
    paddingVertical: '15@s',
    margin: '5@s',
    borderRadius: '8@s',
    paddingHorizontal: '5@s',
  },
  DollorSign: {
    justifyContent: 'center',
    textAlign: 'center',
    color: colors.black,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '15@vs',
  },
  DollorSignMobile: {
    justifyContent: 'flex-start',
    color: colors.black,
    fontFamily: fonts.bold,
    fontSize: '15@vs',
    marginHorizontal: '5@s',
  },
  FlatListMainView: {
    width: '92%',
    backgroundColor: colors.background,
    alignSelf: 'center',
    borderRadius: '5@s',
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  FlatListImage: {
    height: verticalScale(50),
    width: verticalScale(75),
    resizeMode: 'contain',
    borderRadius: '5@s',
    alignSelf: 'center',
  },
  FlatListHeadinText: {
    color: colors.black,
    fontFamily: fonts.LatoRegular,
    fontSize: '11@vs',
  },
  FlatListPrice: {
    color: colors.black,
    paddingTop: 10,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '11@vs',
  },
  FlatListSecondaryView: {
    height: '30@vs',
    width: '30@vs',
    borderRadius: '90@s',
    backgroundColor: colors.blurPrimary,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  FlatListBadge: {
    color: colors.primary,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '10@vs',
    alignSelf: 'center',
  },
  headerTitleSecondary: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.bold,
    // paddingHorizontal: 30,
    paddingVertical: 15,
  },
  headerTitleSecondaryMobile: {
    fontSize: '14@ms',
    color: colors.black,
    fontFamily: fonts.bold,
    // paddingHorizontal: 30,
  },
  Title: {
    color: colors.black,
    fontFamily: fonts.bold,
    fontSize: 25,
    lineHeight: 35,
  },

  HotproductMainContainer: {
    width: '35%',
    backgroundColor: colors.textWhite,
    borderRadius: '5@s',
    elevation: 2,
  },
  HotproductMainContainerMobile: {
    width: '100%',
    backgroundColor: colors.textWhite,
    borderRadius: '8@s',
    elevation: 1,
  },
  colorgreen: {
    backgroundColor: colors.primaryBlurColor,
  },
  colorred: {
    backgroundColor: colors.peackHourColor,
  },
  TotalData: {
    color: colors.parrotColor,
    textAlign: 'center',
    fontSize: '9@vs',
  },
  TotalDataInactive: {
    color: colors.redColor,
    textAlign: 'center',
    fontSize: '9@vs',
  },
  WhihteDiveIcon: {
    fontSize: 30,
    color: '#5AB3A8',
  },
  BackgroundLightRed: {
    backgroundColor: '#FFEBE6',
  },
  raitingIcon: {
    fontSize: '15@vs',
    color: colors.yellow,
    marginHorizontal: '5@s',
    marginBottom: '3@s',
  },
  HotProductPart: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  HotProductPartMobile: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10@s',
  },
  graphView: {
    width: '64%',
    backgroundColor: colors.textWhite,
    elevation: 2,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  graphViewMobile: {
    width: '100%',
    backgroundColor: colors.textWhite,
    elevation: 2,
    borderRadius: '5@vs',
    marginTop: '10@s',
  },
  GraphButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: '10@vs',
    textAlignVertical: 'center',
    color: colors.primary,
  },
  GraphButton: {
    backgroundColor: colors.blurPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: '7@s',
    paddingVertical: '5@s',
    flexDirection: 'row',
  },
  GraphHeading: {
    justifyContent: 'center',
    color: colors.black,
    alignItems: 'center',
    textAlignVertical: 'center',
    fontSize: '13@vs',
    fontFamily: 'Poppins-Bold',
  },
  GraphHeaderView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
export default styles;
