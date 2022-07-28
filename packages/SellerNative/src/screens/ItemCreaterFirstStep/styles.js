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
  MainContainer: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: colors.profileBackground,
  },
  BackHeaderTitle: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: colors.profileBackground,
  },
  archive_orders_tab: {
    borderWidth: 5,
    height: 5,
    paddingHorizontal: 30,
    justifyContent: 'center',
    borderRadius: 5,
  },

  HeaderButton: {
    height: 40,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  HeaderButtonText: {
    color: colors.textWhite,
    textAlign: 'center',
    fontFamily: fonts.PoppinsSemiBold,
  },
  Container: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: colors.textWhite,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'center',
  },
  BackArrow: {
    fontSize: 40,
    color: colors.black,
    fontFamily: fonts.bold,
  },
  backTitle: {
    fontSize: 25,
    color: colors.black,
    fontFamily: fonts.bold,
  },
  ModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  ModeView: {
    height: 180,
    width: 410,
    elevation: 2,
    backgroundColor: colors.textWhite,
    borderRadius: 5,
  },
  ModalTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 13,
  },
  ModalHeading: {
    color: '#414342',
    fontSize: 17,
    fontFamily: fonts.PoppinsSemiBold,
  },
  ModalParagraph: {
    color: colors.sidebar,
    fontFamily: fonts.LatoRegular,
    paddingHorizontal: 20,
    fontSize: 15,
    marginVertical: 15,
  },
  ModalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '96%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  Buttonss: {
    width: '45%',
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  DeleteModal: {
    fontFamily: fonts.LatoSemiBold,
    fontSize: 15,
  },
  Tost: {
    backgroundColor: colors.textWhite,

    paddingHorizontal: 20,
    shadowColor: colors.black,
    position: 'absolute',
    bottom: -171,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  PreviewHeader: {
    color: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    fontSize: 15,
    fontFamily: fonts.PoppinsSemiBold,
  },
  ModalContainerPreview: {
    width: '100%',
    height: '100%',
    // backgroundColor: colors.textWhite,
    // position: 'absolute',
    // right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  ModalContainePreviewMain: {
    width: '40%',
    height: '100%',
    backgroundColor: colors.textWhite,
    position: 'absolute',
    right: 0,
  },
  CrossPreview: {
    fontSize: 25,
    color: colors.black,
    position: 'absolute',
    right: 15,
    top: 20,
  },
  MobileViewModal: {
    backgroundColor: colors.textWhite,
    width: '80%',
    height: 290,
    marginVertical: 37,
    alignSelf: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndexL: 0,
  },
  ModalHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  IconModalMobile: {
    fontSize: 25,
    color: colors.black,
  },
  heartIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.darkGray,
    position: 'absolute',
    right: 60,
    top: 300,
  },
  iconStyleHeart: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
  },
  TitleModalPreview: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  paragaphPreview: {
    fontSize: 15,
    color: colors.black,
    fontFamily: fonts.LatoRegular,
  },
  ParagraphPadingHorizontal: {
    marginHorizontal: 45,
    marginVertical: 20,
  },
  Cal: {
    color: colors.black,
    fontFamily: fonts.LatoBold,
  },
  AlertModal: {
    marginHorizontal: 40,
    marginVertical: 10,
    color: colors.black,
    fontFamily: fonts.LatoRegular,
  },
  ModalTertiaryButton: {
    borderColor: colors.primary,
    borderWidth: 2,
    height: 40,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  ButtonText: {
    color: '#5AB3A8',
    fontFamily: fonts.LatoSemiBold,
  },
  PrimaryButtonModal: {
    backgroundColor: colors.primary,
    height: 40,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  TextPrimaryButton: {
    color: colors.textWhite,
    fontFamily: fonts.LatoSemiBold,
  },
  TertiaryButtonText: {
    // color:colors.primary,
    // backgroundColor:'red'
  },
  ToastMainView: {
    flexDirection: 'row',
    marginVertical: 0,
    position: 'absolute',
    left: -420,
    backgroundColor: colors.textWhite,
    elevation: 2,
  },
  IconToast: {
    color: colors.primary,
    fontSize: 20,
    paddingHorizontal: 4,
  },
  ToastParagraph: {
    color: colors.black,
    fontSize: 15,
    fontFamily: fonts.LatoBold,
  },
  ActionToast: {
    color: '#018FFB',
    fontSize: 15,
    fontFamily: fonts.LatoBold,
    marginLeft: 20,
  },
  button: {
    padding: 10,
    borderRadius: 4,
  },
});
export default styles;
