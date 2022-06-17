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
    backgroundColor: colors.textWhite,
    height: 250,
    elevation: 1,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.textWhite,
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
    fontFamily:fonts.LatoMedium,
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
    color: colors.sidebar,
    fontFamily: fonts.LatoRegular,
    fontSize: 15,
  },
  TextInputView: {
    height: 40,
    width: 90,
    borderColor: colors.borderColor,
    borderWidth: 0.5,
    marginVertical: 5,
    borderRadius: 3,
  },
  Unavaiable: {
    marginVertical: 15,
    color: colors.black,
    fontSize: 17,
    fontFamily: fonts.LatoRegular,
  },
  TertiaryButton: {
    height: 50,
    borderColor: colors.black,
    borderWidth: 1.3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  TertiaryButtonText: {
    color: colors.black,
    fontSize: 15,
    fontFamily: fonts.PoppinsSemiBold,
  },
  PrimaryButton: {
    backgroundColor: colors.blurPrimary1,
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
    backgroundColor: colors.primary,
    borderRadius: 5,
    flexDirection: 'row',
  },
  CreatebuttonText: {
    color: colors.textWhite,
    fontSize: 15,
    fontFamily: fonts.PoppinsSemiBold,
  },
  styleUser: {
    fontSize: 17,
    color: colors.black,
    fontFamily: fonts.LatoRegular,
  },
});
export default styles;
