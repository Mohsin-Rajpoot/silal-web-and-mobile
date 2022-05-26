import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen-hooks';
import fonts from '@SilalApp/common/assets/fonts';
import {color} from 'react-native-reanimated';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
const styles = ScaledSheet.create({
  container: {
    width: '94%',
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
  Header_View: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: '15@vs',
    alignItems: 'center',
  },
  Header_ViewMobile: {
   
    flexDirection: 'column',
    marginVertical: 15,
     
  },
  Title_Header: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: '20@s',
  },
  Title_HeaderMobile: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: '20@s',
  },
  mainViewBoxStyle: {
    width: '23%',
    backgroundColor: colors.textWhite,
    marginHorizontal: 10,
    left: -10,
    marginVertical: 10,
    elevation: 1,
    borderRadius: 5,
    height: '60@s',
  },
  mainViewBoxStyleMobile: {
    width: '45%',
    backgroundColor: colors.textWhite,
    marginHorizontal: '10@s',
    left: -10,
    marginVertical: 10,
    elevation: 1,
    borderRadius: 5,
    height: '80@vs',
    // justifyContent:'center',
    alignSelf: 'center',
  },
  BottomBoxContainerMobile: {
    width: '23%',
    backgroundColor: colors.textWhite,
    marginHorizontal: 10,
    left: -10,
    marginVertical: 10,
    elevation: 1,
    borderRadius: 5,
    height: '60@s',
  },
  BottomBoxContainer: {
    width: '25%',
    backgroundColor: colors.dropDownBackground,
    marginHorizontal: '5@s',
    left: -10,
    marginVertical: 10,
    elevation: 1,
    borderRadius: 5,
    height: '90@vs',
    // justifyContent:'center',
    alignSelf: 'center',
  },
  BottomBoxContainerMobile: {
    width: '45%',
    backgroundColor: colors.dropDownBackground,
    marginHorizontal: '10@s',
    left: -10,
    marginVertical: 10,
    elevation: 1,
    borderRadius: 5,
    height: '80@vs',
    // justifyContent:'center',
    alignSelf: 'center',
  },

  containerText: {
    //    backgroundColor:'red',
    position: 'absolute',
    bottom: 5,
    left: 5,
    // width:ß'100%'
  },
  BoxTitleText: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '10@s',
    color: colors.black,
  },
  BoxTitleTextMobile: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '13@s',
    color: colors.black,
  },
  TotleItem: {
    color: '#CCD4D6',
    fontSize: 13,
    fontFamily: fonts.LatoRegular,
  },
  render_all_order_single: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginVertical: 5,
    marginHorizontal: 5,
    // backgroundColor:'red'
  },
  cross_icon: {
    color: '#CCD4D6',
    fontSize: 16,
  },
  TitleModal: {
    fontSize: 15,
    color: colors.black,
    fontFamily: fonts.PoppinsMedium,
    fontSize: 19,
  },
  ModalContainerPreview: {
    width: '40%',
    // height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    // paddingVertical: 20,
    //  shadowColor: '#000',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 1,
  },
  ShowmodalOpenButton: {
    height: 30,
    width: 40,
    marginVertical: 5,
  },
  closeShowmodalicon: {
    fontSize: 20,
    color: colors.black,
  },
  ModalSubTitle: {
    color: colors.black,
    fontSize: 17,
    fontFamily: fonts.PoppinsSemiBold,
  },

  modelimageoverly: {
    color: colors.textWhite,
    fontSize: 15,
    fontFamily: fonts.LatoRegular,
    paddingVertical: 10,
    fontWeight: 'bold',
  },

  ModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // backgroundColor: 'rgba(0,0,0,0.8)'
  },
  ModeView: {
    height: 160,
    width: 410,
    backgroundColor: colors.textWhite,
    borderRadius: 5,
    elevation: 0.2,
  },
  ModalTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  ModalTitleMobile: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 10,
    marginHorizontal: 35,
    // backgroundColor:'red'
  },
  ModalHeading: {
    color: '#414342',
    fontSize: 17,
    fontFamily: fonts.PoppinsSemiBold,
  },
  ModalHeadingMobile: {
    color: '#414342',
    fontSize: '12@s',
    fontFamily: fonts.PoppinsSemiBold,
    width: 250,
    marginHorizontal: 15,
  },
  ModalParagraph: {
    color: colors.textPrimary,
    fontFamily: fonts.LatoRegular,
    paddingHorizontal: 20,
    fontSize: 15,
    marginVertical: 15,
  },

  DeleteModal: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 15,
  },

  CategoryMobile: {
    color: colors.light_grey,
    fontSize: '16@s',
    paddingVertical: 10,
  },
  Category: {
    color: colors.light_grey,
    fontSize: '14@s',
    paddingVertical: 10,
  },
  AddCategory: {
    width: '23%',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    left: -10,
    elevation: 1,
    borderRadius: 5,
    height: 130,
  },
  AddCategoryMobile: {
    width: '45%',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    left: -10,
    elevation: 1,
    borderRadius: 5,
    height: '90@s',
  },
  WrapperModal: {
    marginLeft: '60%',
    justifyContent: 'flex-start',
    marginHorizontal: width(0),
    marginVertical: height(0),
    paddingHorizontal: 19,
  },
  WrapperModalMobile: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    marginHorizontal: width(5),
    marginVertical: height(29),
    paddingHorizontal: 19,
  },
  EditModalHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10@s',
  },
  EditModalHeaderMobile: {
    width: '110%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: -30,
    // backgroundColor:'red'
  },
  notesTitle: {
    // marginTop: '5@s',
  },
  ImageMoadalMain: {
    height: 250,
    width: 350,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    zIndex: 0,
    borderRadius: 5,
    // alignItems:'center'
  },
  ImageMoadalMainMobile: {
    height: 130,
    width: 400,
    resizeMode: 'contain',
    zIndex: 0,
    borderRadius: 5,
    // marginTop: -10,
    // alignItems:'center'
  },
  ImagebottomModal: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    width: 350,
    zIndex: 1,
    marginTop: -77,
    height: 40,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginHorizontal: 30,
    flexDirection: 'row',
    // backgroundColor: 'transparent'
  },
  ImagebottomModalMobile: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    width: 320.5,
    zIndex: 1,
    marginTop: -40,
    height: 40,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    // marginHorizontal: 30,
    flexDirection: 'row',
    // backgroundColor: 'transparent'
    overflow: 'hidden',
  },
  NameFolder: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '95%',
  },
  NameFolderMobile: {
    flexDirection: 'row',
    width: '100%',
  },
  InputModelMobile: {
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    width: 310,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
  InputModel: {
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    width: 350,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
  saveButtoneditModal: {
    backgroundColor: colors.primary,
    width: 350,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 40,
  },
  saveButtoneditModalMobile: {
    width: 150,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 40,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 20,
    marginHorizontal: '5@s',
  },
  TitleModelInput: {
    color: colors.black,
    fontSize: 15,
    fontFamily: fonts.LatoMedium,
    marginVertical: 10,
    justifyContent: 'flex-start',
  },
  TitleModelInputMobile: {
    color: colors.black,
    fontSize: 15,
    fontFamily: fonts.LatoMedium,
    marginVertical: 10,
    justifyContent: 'flex-start',
    marginLeft: -10,
  },
  ModalWrapperDelete: {
    marginHorizontal: width(30),
    marginVertical: height(37),
  },
  ModalWrapperDeleteMobile: {
    marginHorizontal: width(5),
    marginVertical: height(38),
  },
  ButtonssDelete: {
    width: '45%',
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  ButtonssDeleteMobile: {
    width: '35%',
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  ModalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '96%',
    alignSelf: 'center',
    paddingVertical: 40,
  },
  ModalButtonContainerMobile: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '96%',
    // alignSelf: 'center',
    paddingVertical: 40,
    justifyContent: 'space-evenly',
  },
  saveButtonTextMobile: {
    color: colors.textWhite,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: '12@s',
    fontFamily: fonts.PoppinsSemiBold,
  },
  saveButtonText: {
    color:colors.textWhite,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: "16@s",
    fontFamily: fonts.PoppinsSemiBold,
  },
  headerButtonMobile:{
    right: 17
  },
  headerButtonMobile:{
    position:'absolute',
    left:0,
    top:90
  },
  headermbilemargin:{
    marginTop:'40@s'
  },
  deleteClose:{
    fontSize: 25, color: '#CCD4D6'
  },
  deleteCloseMbile:{
    display:'none'
  }
});
export default styles;
