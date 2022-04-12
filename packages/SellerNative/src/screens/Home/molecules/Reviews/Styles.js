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
    fontFamily: 'Poppins-Bold',
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
    paddingHorizontal: 10,
    color: '#002733',
    fontFamily: 'Lato-Bold',
    paddingTop: 4,
  },
  DividerRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  DividerFirstView: {
    width: '68%',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 5,
  },
  firstViewInerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  firstViewTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#002733',
    left: -8,
  },
  FlatListParagraphTitle: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextParagraphFlat: {
    marginHorizontal: 30,
    marginLeft: 150,
    marginVertical: 1,
  },
  FirstParagraphContent: {
    color: '#002733',
    fontSize: 13,
    fontFamily: 'Lato-Regular',
    paddingVertical: 10,
  },
  ParagraphSecond: {
    fontSize: 13,
    paddingVertical: 5,
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    padding: 4,
    marginTop: 5,
    paddingVertical: 10,
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
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 5,
    height: '26.5%',
  },
  SecondViewTitle: {
    color: '#002733',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 15,
  },
  LineSecondView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  SecondViewBorderLine: {
    borderBottomWidth: 0.2,
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomColor: '#809399',
    opacity: 0.1,
  },
  TitleView: {
    fontFamily: 'Lato-Regular',
    color: '#002733',
    fontSize: 13,
  },
  oneEightNine: {
    fontFamily: 'Lato-Bold',
    color: '#002733',
    fontSize: 13,
  },
});
export default styles;
