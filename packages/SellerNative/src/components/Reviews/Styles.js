import {ScaledSheet, verticalScale} from 'react-native-size-matters';
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
  Title: {
    color: '#002733',
    fontFamily: fonts.b,
    fontSize: 25,
    lineHeight: 35,
  },
  subTitle: {
    fontFamily: 'Lato-Light',
    fontSize: 25,
    color: '#809399',
    fontSize: 13,
  },
  PeackTimeBackground: {
    backgroundColor: '#8777D9',
    width: 171,
    height: 34,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextPeackTime: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#fff',
  },

  ReviewsFlatListSecondaryMain: {
    marginLeft: !IsTablet ? '2@vs' : '5@s',
    color: colors.black,
    fontFamily: fonts.LatoBold,
    fontSize: !IsTablet ? '11@vs' : '9@vs',
    lineHeight: 20,
  },
  DividerRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  DividerRowMobile: {
    flexDirection: 'column-reverse',
    justifyContent: 'space-evenly',
    marginVertical: '5@vs',
    alignItems: 'center',
  },
  DividerFirstView: {
    width: '68%',
    backgroundColor: '#fff',
    elevation: 1,
    borderRadius: 5,
    height: '94%',
  },
  DividerFirstViewMobile: {
    width: '93%',
    backgroundColor: colors.textWhite,
    elevation: 1,
    borderRadius: '5@s',
    alignSelf: 'center',
  },
  firstViewInerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: '10@s',
    paddingHorizontal: '12@vs',
    alignItems: 'center',
  },
  firstViewInerStyleMobile: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginVertical: '15@vs',
    paddingHorizontal: '10@vs',
  },
  firstViewTitle: {
    fontSize: '13@vs',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  FlatListParagraphTitle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  FlatListParagraphTitleMobile: {
    flexDirection: 'column',
    width: '95%',
  },
  TextParagraphFlat: {
    width: '78%',
    alignSelf: 'flex-end',
    marginVertical: 1,
    marginRight: '10@s',
  },
  TextParagraphFlatMobile: {
    marginHorizontal: '3@s',
    marginVertical: 1,
    flexDirection: 'column-reverse',
  },
  FirstParagraphContent: {
    color: colors.black,
    fontSize: '10@vs',
    fontFamily: fonts.LatoRegular,
    lineHeight: IsTablet ? 22 : 17,
    marginTop: '5@s',

  },

  ParagraphSecond: {
    fontSize: '9@vs',
    paddingVertical: verticalScale(8),
    backgroundColor: colors.dullWhite,
    borderRadius: '4@s',
    padding: '5@s',
    lineHeight: 26,
    fontFamily: fonts.LatoRegular,
  },
  ParagraphSecondMobile: {
    fontSize: '10@vs',
    backgroundColor: colors.dullWhite,
    borderRadius: '4@s',
    marginTop: '7@s',
    paddingVertical: 10,
    color: colors.light_grey,
    paddingHorizontal: '5@s',
    lineHeight: 20,
    fontFamily: fonts.LatoRegular,
    marginHorizontal: '8@s',
  },
  ParagraphSecondMobile1: {
    fontSize: '10@vs',
    backgroundColor: colors.dullWhite,
    borderRadius: '4@s',
    paddingVertical: 10,
    color: colors.light_grey,
    paddingHorizontal: '5@s',
    lineHeight: 18,
    fontFamily: fonts.LatoRegular,
  },
  ContactButton: {
    color: colors.textPrimeColor,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '10@vs',
  },
  ContactButtonMobile: {
    color: colors.primary,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '10@vs',
  },
  CancelButtonMobile: {
    color: colors.textPrimeColor,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '10@vs',
  },
  BorderLine: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomColor: '#809399',
    opacity: 0.1,
  },
  SecondViewMainContainer: {
    width: '25%',
    backgroundColor: colors.textWhite,
    elevation: 2,
    borderRadius: '4@s',
    height: '18%',
  },
  SecondViewMainContainerMobile: {
    width: '93%',
    backgroundColor: colors.textWhite,
    elevation: 2,
    borderRadius: '6@s',
    paddingVertical: '10@s',
    marginVertical: '10@s',
    alignSelf: 'center',
  },
  SecondViewTitle: {
    color: colors.black,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontSize: '12@vs',
    paddingVertical: '10@vs',
  },
  SecondViewTitleMobile: {
    color: colors.black,
    fontFamily: fonts.bold,
    textAlign: 'left',
    fontSize: '13@vs',
    paddingHorizontal: '10@s',
    marginBottom: '4@s',
    marginLeft: '2@s',
  },
  LineSecondView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '15@s',
  },

  SecondViewBorderLine: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomColor: '#809399',
    opacity: 0.1,
  },
  TitleView: {
    fontFamily: fonts.LatoRegular,
    color: colors.black,
    fontSize: '9@vs',
  },
  TitleViewMobile: {
    fontFamily: fonts.LatoRegular,
    color: colors.black,
    fontSize: '12@vs',
  },

  oneEightNine: {
    fontFamily: 'Lato-Bold',
    color: '#002733',

    fontSize: 13,
  },
  timeDuration: {
    fontSize: '8@vs',
    fontFamily: fonts.LatoRegular,
    color: colors.textPrimeColor,
  },
  submitBtnMobile: {
    width: '100%',
    borderRadius: '10@s',
    padding: '10@s',
    marginVertical: '5@s',
    alignSelf: 'center',
    // marginHorizontal:'40@s'
  },
  submitBtn: {
    width: '25%',
  },
  contactBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryGreen,
    width: '100%',
    paddingVertical: '8@vs',
    borderRadius: '10@s',
  },
  cancelBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light_grey,
    width: '100%',
    paddingVertical: '8@vs',
    borderRadius: '10@s',
  },
  contactBtnTab: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5@s',
  },
  replyTo_Review: {
    fontSize: '13@vs',
    fontFamily: fonts.bold,
    color: colors.black,
    marginTop: '5@s',
  },
  replyTo_Review_Detail: {
    fontSize: '10@vs',
    fontFamily: fonts.LatoRegular,
    color: colors.textPrimeColor,
    marginBottom: '10@vs',
  },
  suggestion: {
    fontSize: '11@vs',
    fontFamily: fonts.LatoRegular,
    color: colors.textPrimeColor,
    marginLeft: '5@s',
    marginTop: '5@s',
  },
  tagContainer: {
    backgroundColor: colors.primaryGreen,
    paddingVertical: '5@s',
    borderRadius: '5@s',
    paddingHorizontal: '2@s',
    margin: '3@s',
  },
  tagTitle: {
    fontSize: '10@vs',
    fontFamily: fonts.LatoBold,
    color: colors.primary,
  },
});
export default styles;
