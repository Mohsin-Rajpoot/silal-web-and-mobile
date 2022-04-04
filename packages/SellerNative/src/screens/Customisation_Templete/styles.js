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
  WhiteView: {
    width: '100%',
    backgroundColor: '#fff',
    height: 250,
    elevation: 1,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#ffffff',
    marginBottom: 10,
  },
  ViewHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  Code: {
    color: '#4C6870B2',
    paddingHorizontal: 15,
    fontSize: 18,
    fontFamily: 'Lato-Medium',
  },
  headingText: {
    fontSize: 17,
  },
  HeadingButton: {
    height: 40,
    width: 90,
    borderRadius: 5,
    backgroundColor: '#CCD4D680',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingTextButton: {
    color: '#4C6870',
    fontFamily: 'Lato-Regular',
    fontSize: 15,
  },
  TextInputView: {
    height: 40,
    width: 90,
    borderColor: '#4C6870B2',
    borderWidth: 0.5,
    marginVertical: 5,
    borderRadius: 3,
  },
  Unavaiable: {
    marginVertical: 15,
    color: '#002733',
    fontSize: 17,
    fontFamily: 'Lato-Regular',
  },
  TertiaryButton: {
    height: 50,
    borderColor: '4C6870B2',
    borderWidth: 1.3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  TertiaryButtonText: {
    color: '#4C6870',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  PrimaryButton: {
    backgroundColor: '#C7EDEA',
    marginHorizontal: 10,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  ButtonsView: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    bottom: 5,
    right: -25,
  },
  CreateButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 20,
    height: 45,
    width: 140,
    backgroundColor: '#5AB3A8',
    borderRadius: 5,
    flexDirection: 'row',
  },
  CreatebuttonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
});
export default styles;
