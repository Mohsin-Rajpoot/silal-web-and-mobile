import { ScaledSheet } from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen-hooks';
import fonts from '@SilalApp/common/assets/fonts';
const styles = ScaledSheet.create({
  SearchMainViewModal: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Input: {
    height: 46,
    alignSelf: 'center',
    elevation: 0.5,
    width: 450,
    borderRadius: 5,
    backgroundColor: '#fff',
    zIndex: 0,
    marginVertical: 5,
    borderWidth: 0.6,
    borderColor: "#F2F4F5"

  },
  FlatListMainView: {
    width: '31%',
    backgroundColor: '#F4F7F8',
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'space-between',
    marginHorizontal: 10,

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
    color: '#002733',
    fontSize: 13,
    fontFamily: 'Lato-Bold',
  },
  FlatIdDynamic: {
    width: 100,
    color: '#CCD4D6',
    fontFamily: 'Lato-Regular',
    fontSize: 13,
  },
  TitleMainTextFlat: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    paddingTop: 4,
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
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontSize: 11,
    backgroundColor: '#50c681',
    padding: 5,
    borderRadius: 3,
    overflow:'hidden'
  },
  SearchIcon: {
    fontSize: 20,
    zIndex: 1,
    color: '#B3BEC2',
    marginRight: -24
  },
  ClintPageMainheading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: '#002733',
    paddingTop: 5,
  },
  modelTextTitle: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginHorizontal: 17,
    paddingVertical: 2

  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    margin: 10,
  },
  cross_icon: {
    color: '#CCD4D6',

  },
  SecondModalCompleteView: {
    width: 100, backgroundColor: '#36B37E', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, borderRadius: 5, height: 20, width: 76, marginVertical: 5
  },
  SecondModalContainer: {
    flexDirection: 'row',
  },
  SecondViewCompleteText: {
    color: '#fff', fontFamily: 'Lato-Medium', fontSize: 11
  },
  SecondModalIcon: {
    fontSize: 30, color: '#002733', fontFamily: 'Poppins-SemiBold'
  },
  SecondModalText: {
    fontSize: 19, color: '#002733', fontFamily: 'Poppins-SemiBold'
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
  orderid_text: {
    fontSize: 15,
    color: '#002733',
    fontFamily: 'Poppins-SemiBold',
  },
  modal_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop:-20
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
    color: '#CCD4D6',
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
    color: '#002733',
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  TimeBar: {
    fontSize: 15,
    color: '#002733',
    paddingVertical: 10,
    fontFamily: 'Lato-Bold',
  },
  FlatStyle: {
    paddingTop: 5,
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  SecondModalTile: {
    width: 330, fontFamily: 'Lato-Regular', color: '#002733', paddingHorizontal: 5, marginVertical: 5
  },
  CrossIconSecondModal: {
    width: 20, color: '#CCD4D6', fontSize: 18, marginVertical: 5
  },
  IdSecondModal: {
    width: 20, fontFamily: 'Lato-Regular', color: '#002733', marginVertical: 5
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
    fontFamily: 'Lato-Bold',
    color: '#CCD4D6',
    paddingHorizontal: 25,
  },
  CreditCard: {

    paddingVertical: 10,
    textAlign: 'right',
    color: '#002733',
    fontFamily: 'Lato-Bold',
    fontSize: 15,
  },
  ModalDropdown: {
    color: '#002733',
    fontFamily: 'Lato-Bold',
    fontSize: 13,
  },
  CustomerMainTitle: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#F2F4F5',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  SortBy: {
    fontSize: 18,
    color: '#002733',
    marginHorizontal: 5,
    marginTop: 5,
  }


});
export default styles;