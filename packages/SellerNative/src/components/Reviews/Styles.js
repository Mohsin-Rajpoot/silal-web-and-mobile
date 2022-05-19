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
    paddingHorizontal: '10@s',
    color: colors.black,
    fontFamily: fonts.LatoBold,
    fontSize: '10@vs',
    lineHeight: 22,
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
    marginHorizontal: 30,
    marginLeft: 150,
    marginVertical: 1,
  },
  TextParagraphFlatMobile: {
    marginHorizontal: '10@s',
    marginVertical: 1,
    flexDirection: 'column-reverse',
  },
  FirstParagraphContent: {
    color: colors.black,
    fontSize: '10@vs',
    fontFamily: fonts.LatoRegular,
    paddingVertical: 10,
    lineHeight: 24,
  },
  ParagraphSecond: {
    fontSize: '9@vs',
    paddingVertical: 5,
    backgroundColor: colors.dullWhite,
    borderRadius: '4@s',
    padding: '5@s',
    marginTop: 5,
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
  },
  ContactButton: {
    color: '#4C6870',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
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
    height: '40%',
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
    fontFamily: 'Lato-Regular',
    color: colors.black,
    fontSize: '8@vs',
  },
  TitleViewMobile: {
    fontFamily: 'Lato-Regular',
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
});
export default styles;
