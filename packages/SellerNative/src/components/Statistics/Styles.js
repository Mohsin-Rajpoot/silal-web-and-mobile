import {ScaledSheet} from 'react-native-size-matters';
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
    paddingHorizontal: '12@s',
    justifyContent: 'space-between',
    marginHorizontal: 3,
    zIndex: 0,
  },
  MainWhiteDivMobile: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '10@s',
  },
  One: {
    backgroundColor: colors.textWhite,
    width: '23%',
    elevation: 2,
    borderRadius: 5,
    marginVertical: 15,
    padding: '5@s',
  },
  OneMobile: {
    backgroundColor: colors.textWhite,
    width: '46%',
    elevation: 1,
    paddingVertical: '13@s',
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
    width: '91%',
    backgroundColor: '#F4F7F8',
    alignSelf: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    marginVertical: 10,
  },
  FlatListImage: {
    height: 64,
    width: 96,
    resizeMode: 'contain',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  FlatListHeadinText: {
    width: 150,
    color: '#002733',
    fontFamily: 'Lato-Regular',
  },
  FlatListPrice: {
    width: 150,
    color: '#002733',
    paddingTop: 10,
    fontFamily: 'Poppins-SemiBold',
  },
  FlatListSecondaryView: {
    height: 38,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#5AB3A8',
    marginVertical: 30,
  },
  FlatListBadge: {
    color: '#FFFFFF',
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 8,
    fontFamily: 'Poppins-SemiBold',
  },
  headerTitleSecondary: {
    fontSize: 18,
    color: '#002733',
    fontFamily: 'Poppins-Bold',
    // paddingHorizontal: 30,
    paddingVertical: 15,
  },
  Title: {
    color: '#002733',
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    lineHeight: 35,
  },

  HotproductMainContainer: {
    width: '35%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 5,
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
    marginBottom:"3@s"
  },
  HotProductPart: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  graphView: {
    width: '64%',
    backgroundColor: '#fff',
    elevation: 2,
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  GraphButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    textAlignVertical: 'center',
    color: '#5AB3A8',
  },
  GraphButton: {
    backgroundColor: '#5AB3A826',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 120,
    height: 40,
  },
  GraphHeading: {
    height: 50,
    justifyContent: 'center',
    color: '#002733',
    alignItems: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
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
