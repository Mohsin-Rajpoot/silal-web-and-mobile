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

    Input: {
        height: 46,
        alignSelf: 'center',
        elevation: 0.5,
        width: 442,
        borderRadius: 5,
         
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
        backgroundColor: '#5AB3A8',
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
        backgroundColor: '#88cbc5',
        padding: 5,
        borderRadius: 3,
      },
      SearchIcon: {
        fontSize: 20,
        marginRight: -24,
        color: '#B3BEC2',
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
        padding: 8,
        flexDirection: 'row',
        height: 60,
        width: 190,
        marginHorizontal: 14,
      },
      title: {
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Poppins-Light',
        margin: 10,
      },
      cross_icon: {
        color: '#CCD4D6',
        fontSize: 16,
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
      },
      modal_recuring: {
        backgroundColor: '#5AB3A8',
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
        paddingVertical: 10,
        flexDirection: 'row',
      },
      FlatStyle1: {
        flexDirection: 'row',
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


});
export default styles;