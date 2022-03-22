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
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backGround,
    paddingHorizontal: '10@ms',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  inputContainerMian: {
    width: '80%',
  },
  buttonContainer: {
    width: '20%',
    alignSelf: 'center',
  },
  inputStyling: {
    backgroundColor: colors.textWhite,
    height: '35@ms',
  },
  buttonStyle: {
    height: '38@ms',
  },
  buttonText: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '10@ms',
    marginHorizontal: '13@ms',
  },
  offerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  modalMainContainer: {
    width: '95%',
    marginHorizontal: '10@ms',
  },
  crossIcon: {
    alignSelf: 'flex-end',
  },
  modalbutton: {
    paddingHorizontal: '30%',
  },
  image: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: '5@ms',
  },
  offerText: {
    fontSize: '13@ms',
    fontFamily: fonts.PoppinsSemiBold,
    marginTop: '4@s',
    color: colors.black,
  },
  offerName: {
    fontSize: '9@ms',
    fontFamily: fonts.LatoMedium,
    marginTop: '4@s',
    color: colors.black,
  },
  createOffer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creareOfferText: {
    fontSize: '16@ms',
    fontFamily: fonts.bold,
    color: colors.black,
    marginLeft:'5@s'
  },
  crossIcon1: {
    alignSelf: 'flex-end',
  },
});
export default styles;
