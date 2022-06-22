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
  ImgeViewBKG: {
    height: 50,
    width: 50,
    backgroundColor: '#E3FCEF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CurrencyImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },

  PercentageBkgGreen: {
    height: 21,
    borderRadius: 5,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
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
  MainWhiteDiv: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    marginHorizontal: 3,
    zIndex: 0,
  },
  One: {
    backgroundColor: '#fff',
    width: '24%',
    elevation: 2,
    borderRadius: 5,
    marginVertical: 15,
  },
  DollorSign: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#002733',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 23,
    marginTop: -20,
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
    backgroundColor: '#05AE4B',
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
    backgroundColor: '#E3FCEF',
  },
  TotalData: {
    color: '#36B37E',
    textAlign: 'center',
  },
  WhihteDiveIcon: {
    fontSize: 30,
    color: '#05AE4B',
  },
  BackgroundLightRed: {
    backgroundColor: '#FFEBE6',
  },
  raitingIcon: {
    fontSize: 22,
    color: '#FFC400',
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
    color: '#05AE4B',
  },
  GraphButton: {
    backgroundColor: '#05AE4B26',
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
