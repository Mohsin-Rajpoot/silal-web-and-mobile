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
    backgroundColor: '#f1f1f1',
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
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  Container: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#f1f1f1',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'center',
  },
  BackArrow: {
    fontSize: 40,
    color: '#002733',
    fontFamily: 'Poppins-Bold',
  },
  backTitle: {
    fontSize: 25,
    color: '#002733',
    fontFamily: 'Poppins-Bold',
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
    backgroundColor: '#fff',
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
    fontFamily: 'Poppins-SemiBold',
  },
  ModalParagraph: {
    color: '#4C6870',
    fontFamily: 'Lato-Regular',
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
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  Tost: {
    backgroundColor: '#FFFFFF',

    paddingHorizontal: 20,
    shadowColor: '#000',
    position: 'absolute',
    bottom: -171,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  PreviewHeader: {
    color: '#5AB3A8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  ModalContainerPreview: {
    width: '40%',
    height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    // backgroundColor: 'rgba(0,0,0,0.5)'
  },
  CrossPreview: {
    fontSize: 25,
    color: '#000000',
    position: 'absolute',
    right: 15,
    top: 20,
  },
  MobileViewModal: {
    backgroundColor: '#f1f1f1',
    width: '80%',
    height: 290,
    marginVertical: 37,
    alignSelf: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndexL: 0,
  },
  IconModalMobile: {
    fontSize: 25,
    color: '#000',
  },
  heartIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#CCD4D680',
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
    color: '#002733',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  paragaphPreview: {
    fontSize: 15,
    color: '#002733',
    fontFamily: 'Lato-Regular',
  },
  ParagraphPadingHorizontal: {
    marginHorizontal: 45,
    marginVertical: 20,
  },
  Cal: {
    color: '#002733',
    fontFamily: 'Lato-Bold',
  },
  AlertModal: {
    marginHorizontal: 40,
    marginVertical: 10,
    color: '#002733',
    fontFamily: 'Lato-Regular',
  },
  ModalTertiaryButton: {
    borderColor: '#5AB3A8',
    borderWidth: 2,
    height: 40,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  ButtonText: {
    color: '#5AB3A8',
    fontFamily: 'Poppins-SemiBold',
  },
  PrimaryButtonModal: {
    backgroundColor: '#5AB3A8',
    height: 40,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  TextPrimaryButton: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
  ToastMainView: {
    flexDirection: 'row',
    marginVertical: 0,
  },
  IconToast: {
    color: 'green',
    fontSize: 20,
    paddingHorizontal: 4,
  },
  ToastParagraph: {
    color: '#002733',
    fontSize: 15,
    fontFamily: 'Lato-Bold',
  },
  ActionToast: {
    color: '#018FFB',
    fontSize: 15,
    fontFamily: 'Lato-Bold',
    marginLeft: 20,
  },
  button: {
    padding: 10,
    borderRadius: 4,
  },
});
export default styles;
