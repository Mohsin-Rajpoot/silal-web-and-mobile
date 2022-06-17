import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen-hooks';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
import fonts from '@SilalApp/common/assets/fonts';
import {color} from 'react-native-reanimated';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
const styles = ScaledSheet.create({
  cross_icon: {
    color: colors.light_grey,
    fontSize: 16,
  },

  all_orders: {
    backgroundColor: colors.dropDownBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  all_ordersMobile: {
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    paddingHorizontal: '10@s',
    backgroundColor: colors.dropDownBackground,
    marginVertical: '10@s',
  },
  all_orders_header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 50,
    backgroundColor: colors.dropDownBackground,
    padding: 10,
    marginVertical: 8,
  },
  all_orders_headerMobile: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // height: 50,
    // backgroundColor: colors.dropDownBackground,
    // padding: 10,
    marginVertical: 8,
  },
  render_all_orders: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    // padding: 10
  },
  render_all_order_single: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  all_orders_heading_txt: {
    fontFamily: fonts.LatoBold,
    width: '100@s',
    // paddingHorizontal:100
  },

  pagination_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 20,
    // backgroundColor:'red'
  },
  pagination_numbring: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rowBack: {
    height: 55,
    backgroundColor: colors.textWhite,
  },
  BackButtons: {
    height: 60,
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackButtonsText: {
    color: colors.textWhite,
    fontSize: 15,
    fontFamily: fonts.LatoMedium,
  },
  ModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  ModeView: {
    height: 180,
    width: 410,
    backgroundColor: colors.textWhite,
    borderRadius: 5,
    elevation: 0.2,
  },
  ModeViewDeleteMobile: {
    height: '160@s',
    width: 410,
    backgroundColor: colors.textWhite,
    borderRadius: 5,
    elevation: 0.2,
    paddingVertical: '10@s',
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
    color: colors.textPrimary,
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
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 15,
  },
  ModalContainerPreview: {
    width: '40%',
    height: '100%',
    backgroundColor: colors.textWhite,
    position: 'absolute',
    right: 0,
    paddingVertical: 20,

    // backgroundColor: 'rgba(0,0,0,0.5)',
    // shadowColor: colors.black,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 1,
  },
  ModalContainerPreview1: {
    width: '100%',
    height: '100%',
    // backgroundColor: colors.textWhite,
    // position: 'absolute',
    // right: 0,
    // paddingVertical: 20,

    backgroundColor: 'rgba(0,0,0,0.5)',
    // shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
  ModalContainerPreviewMobile: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.textWhite,
    // position: 'absolute',
    // right: 0,
    paddingVertical: '30@s',

    // backgroundColor: 'rgba(0,0,0,0.5)',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },

  ShowmodalOpenButton: {
    height: 30,
    width: 40,
    // flexDirection: 'row-reverse',
    // width: '100%',
    marginVertical: 5,
    // marginRight: -24,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: '10@s',
  },
  ShowmodalOpenButtonMobile: {
    height: '20@s',
    width: '40@s',
    // flexDirection: 'row-reverse',
    // width: '100%',
    marginVertical: 5,
    // marginRight: -24,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  closeShowmodalicon: {
    fontSize: 30,
    color: colors.black,
  },
  closeShowmodaliconMobile: {
    fontSize: 30,
    color: colors.black,
  },
  SaveButton: {
    backgroundColor: colors.primary,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 40,
    borderRadius: 5,
  },
  Savetext: {
    color: colors.textWhite,
    fontSize: 16,
    fontFamily: fonts.PoppinsSemiBold,
  },
  ImageMoadalMain: {
    height: 200,
    width: 330,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    zIndex: 0,
    borderRadius: 5,
  },
  IconOnMainImageView: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 220,
    right: 50,
    elevation: 1,
  },
  InnerViewMainImage: {
    backgroundColor: colors.textWhite,
    height: 33,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
    right: 8,
  },
  IconePencilMain: {
    fontSize: 20,
    color: colors.textPrimary,
  },
  ModalSubTitle: {
    color: colors.black,
    fontSize: 17,
    fontFamily: fonts.PoppinsSemiBold,
  },
  dropDownModalTitle: {
    fontSize: 12,
    fontFamily: fonts.LatoSemiBold,
    color: colors.black,
    paddingVertical: 4,
  },
  TextInputMAinView: {
    fontFamily: fonts.LatoRegular,
    fontSize: 17,
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: colors.light_grey,
    color: colors.black,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  CalViewFaltModal: {
    width: '45%',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.light_grey,
  },
  CalInputFaltModal: {
    fontSize: 17,
    fontFamily: fonts.LatoRegular,
    paddingHorizontal: 8,
    height: 40,
  },
  AddViewModal: {
    color: colors.black,
    fontSize: 17,
    fontFamily: fonts.PoppinsSemiBold,
    paddingVertical: 10,
  },
  grayViewContainer: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.dropDownBackground,
    borderRadius: 5,
    marginBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 8,
  },
  ToppingTitle: {
    fontSize: 14,
    color: colors.black,
    paddingHorizontal: 5,
    width: 280,
    paddingVertical: 4,
  },
  WhitePencilBkgView: {
    backgroundColor: colors.textPrimary,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  FlatLettuce: {
    width: '27%',
    marginHorizontal: 3,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: colors.light_grey,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: colors.light_grey,
  },
  TextStyleFlatModal: {
    color: colors.textPrimary,
    fontFamily: fonts.LatoRegular,
  },
  BottomButtonModal: {
    position: 'absolute',
    right: 1,
    bottom: -40,
  },

  Container: {
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: colors.profileBackground,
  },
  secondaryContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  headerComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'center',
  },
  headerComponentMobile: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    marginVertical: 5,
    // alignItems: 'center',
    marginHorizontal: 15,
  },
  backButtonpage: {
    fontSize: 25,
    color: colors.black,
    fontFamily: fonts.bold,
  },
  backButtonpage: {
    fontSize: '20@s',
    fontSize: 25,
    color: colors.black,
    fontFamily: fonts.bold,
  },
  backButtonpagemobile: {
    fontSize: '10@s',
    fontSize: 25,
    color: colors.black,
    fontFamily: fonts.bold,
  },
  backButtonpageArrow: {
    color: colors.black,
    fontFamily: fonts.bold,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16@s',
  },
  backButtonpageArrowmobile: {
    fontSize: '25@s',
    color: colors.black,
    fontFamily: fonts.bold,
    paddingVertical: '5@s',
  },
  MobileViewContainer: {
    // backgroundColor:'#E5E5E5',
    justifyContent: 'center',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    // marginTop: 5,
  },
  mobileContainerSecond: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom:39,
  },
  tyrigerIcon: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  manuImage: {
    height: 120,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 15,
    overflow: 'hidden',
  },
  EvenRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.light_grey,
    height: '30@s',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  Oddrow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.textWhite,
    alignItems: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    height: '30@s',
  },
  ProductDiscription: {
    marginHorizontal: 20,
    width: '50%',
  },
  flatMobileViewe: {
    backgroundColor: colors.textWhite,
    marginTop: '10@s',
    // marginVertical: 5,
    borderRadius: 15,
    elevation: 5,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 20,
    elevation: 15,
  },
  borderbotomview: {
    borderBottomColor: 'rgba(0, 39, 51, 0.08)',
    borderBottomWidth: 1,

    // marginTop: "20@s",
  },
  ModalContant: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  // Delete
  ModalWrapperDeleteMobile: {
    marginHorizontal: width(6),
    marginVertical: height(39),
  },
  DeleteModal: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 15,
  },
  ButtonssDeleteMobile: {
    width: '95@s',
    height: '40@s',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 10,
    // backgroundColor:'red'
  },
  ModalButtonContainerMobile: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '96%',
    // alignSelf: 'center',
    paddingVertical: '10@s',
    justifyContent: 'space-evenly',
  },
  ModalHeadingMobile: {
    color: '#414342',
    fontSize: '12@s',
    fontFamily: fonts.PoppinsSemiBold,
    width: 250,
    marginHorizontal: '35@s',
    // backgroundColor:'red'
    paddingVertical: '10@s',
    paddingHorizontal: '12@s',
  },
  headerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
    height: '35@s',
    width: '290@s',
    backgroundColor: colors.blurPrimary,
    borderRadius: 5,
    overflow: 'hidden',
  },
  footerText: {
    color: colors.primary,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '14@s',
    paddingVertical: 7,
  },
  AddButtonStyle: {
    height: '21@s',
  },
  modelContainerStyle: {
    marginHorizontal: 5,
    marginVertical: 4,
  },
  deleteModalCrossIcon: {
    fontSize: 25,
    color: colors.light_grey,
  },
  SwipeListViewContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  primaryImageContainer: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  renderAllOrderSingleStyle: {
    width: '15%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    left: 20,
  },
  renderAllOrderSingleSecond: {
    width: '10%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  renderAllOrderHerading: {
    fontFamily: fonts.LatoRegular,
    alignSelf: 'flex-start',
    paddingHorizontal: 25,
  },
  ThreeDots: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SwperHidenView: {
    position: 'absolute',
    right: 2,
    flexDirection: 'row',
  },
});
export default styles;
