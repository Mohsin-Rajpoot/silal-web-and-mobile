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
const styles = ScaledSheet.create({
  ContainerClients: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: '15@s',
  },
  ContainerClientsMobile: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: '15@s',
  },
  BambergIcon: {
    color: colors.black,
    paddingHorizontal: '15@s',
    paddingVertical: '25@s',
  },
  FlatListMobileMain: {
    marginBottom: '10@s',
    height: '73%',
  },
  FlatListMain: {
    marginBottom: '30@vs',
    height: '80%',
  },
  SearchMainViewModal: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Input: {
    height: '25@s',
    alignSelf: 'center',
    elevation: 0.5,
    width: 450,
    borderRadius: 5,
    backgroundColor: colors.textWhite,
    zIndex: 0,
    marginVertical: 5,
    borderWidth: 0.6,
    borderColor: colors.dropDownBackground,
  },
  InputMobile: {
    height: '35@s',
    alignSelf: 'center',
    elevation: 0.5,
    width: '260@s',
    borderRadius: 5,
    backgroundColor: colors.textWhite,
    zIndex: 0,
    marginVertical: '5@vs',
    borderWidth: 0.6,
    borderColor: colors.dropDownBackground,
  },
  SearchBarMobile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '20@s',
  },
  mainModalandSearcbar:{
flexDirection:'row'
  },
  SearchBar: {flexDirection: 'row', alignItems: 'center'},
  FlatListMainView: {
    width: '30%',
    backgroundColor: '#F4F7F8',
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'space-between',
    marginHorizontal: '5.8@s',
  },
  FlatListMainViewMobile: {
    width: '320@s',
    backgroundColor: '#F4F7F8',
    borderRadius: 5,
    marginVertical: '5@s',
    // justifyContent: 'space-between',
    marginHorizontal: '14@s',
    marginBottom: '5@vs',
    // justifyContent:'center',
    // alignItems:'center'
  },
  FlatListMainView2: {
    width: '45%',
    marginVertical: 10,
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  ClintDataBaseDate: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  OrderFlat: {
    color: colors.black,
    fontSize: 13,
    fontFamily: fonts.LatoBold,
  },
  FlatIdDynamic: {
    width: 100,
    color: colors.light_grey,
    fontFamily: fonts.LatoRegular,
    fontSize: 13,
  },
  TitleMainTextFlat: {
    color: '#fff',
    fontFamily: fonts.LatoRegular,
    fontSize: '10@s',
    // paddingTop: 4,
  },
  TitleMainTextFlatMobile: {
    color: '#fff',
    fontFamily: fonts.LatoRegular,
    fontSize: '15@s',
    // paddingTop: ,
  },

  GreenBkgFlat: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    width: '100%',
    paddingHorizontal: 15,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    elevation: 1,
  },
  ButtonFlatList: {
    color: colors.textWhite,
    fontFamily: fonts.LatoRegular,
    fontSize: '5@s',
    backgroundColor: '#50c681',
    padding: 5,
    borderRadius: 3,
    overflow: 'hidden',
  },
  ButtonFlatListMobile: {
    color: colors.textWhite,
    fontFamily: fonts.LatoRegular,
    fontSize: '11@s',
    backgroundColor: '#50c681',
    padding: 5,
    borderRadius: 3,
    overflow: 'hidden',
  },
  SearchIcon: {
    fontSize: 20,
    zIndex: 1,
    color: colors.gray_light,
    marginRight: -24,
  },
  ClintPageMainheading: {
    fontFamily: fonts.bold,
    fontSize: '15@s',
    color: colors.black,
    paddingTop: 5,
  },
  ClintPageMainheadingMobile: {
    fontFamily: fonts.bold,
    fontSize: '20@s',
    color: colors.black,
    // paddingTop: 5,
    marginHorizontal: '15@s',
  },
  modelTextTitle: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginHorizontal: 17,
    paddingVertical: 2,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    margin: 10,
  },
  cross_icon: {
    color: colors.light_grey,
  },
  SecondModalCompleteView: {
    width: 100,
    backgroundColor: colors.parrotColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
    height: 20,
    width: 76,
    marginVertical: 5,
  },
  SecondModalContainer: {
    flexDirection: 'row',
  },
  SecondViewCompleteText: {
    color: colors.textWhite,
    fontFamily: 'Lato-Medium',
    fontSize: 11,
  },
  SecondModalIcon: {
    fontSize: 30,
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
  },
  SecondModalText: {
    fontSize: 19,
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // width:'106%',
    // height:'100%'
  },
  modalView: {
    height: '100%',
    width: '50%',
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  CloseMainModalMobile:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginVertical:15,
  
  },
  CloseMainModal:{
display:'none'
  
  },
  crossButtonModal:{
    
    flexDirection:'row',justifyContent:'flex-end',marginTop:IsTablet ? '8@s': '15%', display: IsTablet ? null : true,
   
  },
  
  modalViewMobile: {
    height: '100%',
    width: '100%',
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  orderid_text: {
    fontSize: 15,
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
  },
  modal_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop:-20
    
  },
  modal_headerMobile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop:-20
    paddingVertical:'10@s'
    
  },
  modal_recuring: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 20,
  },
  modal_fields: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },

  modal_title_second: {
    color: 'black',
    fontSize: 15,
  },
  modal_title_first: {
    color: colors.light_grey,
    fontSize: 15,
    width: 150,
  },

  whiteDive: {
    backgroundColor: '#CCD4D61A',
    width: '98%',
    borderRadius: 5,
    marginVertical: 5,
    elevation: 0.3,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  SpaceBetweenTitleWhite: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  OrderIdentityCode: {
    fontSize: 15,
    paddingVertical: 7,
    color: colors.black,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  TimeBar: {
    fontSize: 15,
    color: colors.black,
    paddingVertical: 10,
    fontFamily: fonts.LatoBold,
  },
  FlatStyle: {
    paddingTop: 5,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  SecondModalTile: {
    width: 330,
    fontFamily: fonts.LatoRegular,
    color: colors.black,
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  CrossIconSecondModal: {
    width: 20,
    color: colors.light_grey,
    fontSize: 18,
    marginVertical: 5,
  },
  IdSecondModal: {
    width: 20,
    fontFamily: fonts.LatoRegular,
    color: colors.black,
    marginVertical: 5,
  },

  MoreOrderShow: {
    backgroundColor: '#E6F4F2',
    height: 25,
    width: 60,
    borderRadius: 5,
    marginLeft: 50,
    marginVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentMethod: {
    width: '50%',
    paddingVertical: 10,
    fontSize: 15,
    fontFamily: fonts.LatoBold,
    color: colors.light_grey,
    paddingHorizontal: 25,
  },
  CreditCard: {
    paddingVertical: 10,
    textAlign: 'right',
    color: colors.black,
    fontFamily: fonts.LatoBold,
    fontSize: 15,
  },
  ModalDropdown: {
    color: colors.black,
    fontFamily: fonts.LatoBold,
    fontSize: 13,
  },
  CustomerMainTitle: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: colors.dropDownBackground,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  SortBy: {
    fontSize: 18,
    color: colors.black,
    marginHorizontal: 5,
    marginTop: 5,
  },
  HeaderSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 15,
  },
  HeaderSectionMobile: {
    marginVertical: 5,
    flexDirection: 'column',
  },
  ButtonShow: {
    paddingBottom: '8@vs',
    justifyContent: 'center',
    alignSelf: 'center',
    // position: 'relative',
    // top: -19,
  },
  ButtonHide: {
    display: 'none',
  },
  hideButton: {
    backgroundColor: colors.blurPrimary,
    height: '35@vs',
    width: '290@s',
    borderRadius:5,
    overflow:'hidden',
    marginBottom:10
  },
  HideButtonText: {
    color: colors.primary,
    justifyContent: 'center',
    paddingVertical: '10@vs',
    alignSelf: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    fontFamily:fonts.PoppinsSemiBold,
    fontSize:"13@s",
  },
  CrossIconbts:{
    color:colors.black,
    fontSize:20,
    padding:15
    
  },
  sheet_head_view:{
    justifyContent:'flex-end',
    flexDirection:'row',
    zIndex:0
  },
  BottomSheetTextHead:{
    borderBottomWidth:1,
    borderBottomColor:'rgba(0, 39, 51, 0.08)',
    marginHorizontal:'10@s',
    marginVertical:'5@vs',
    flexDirection:'row',justifyContent:'space-between'
  },
  mianviewText:{
    marginTop:'12@vs'
  }
});
export default styles;
