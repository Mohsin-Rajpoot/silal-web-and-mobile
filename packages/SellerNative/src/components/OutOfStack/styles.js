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


    title: {
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Poppins-Light',
        margin: 10
    },
    single_order: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    filter_box: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
    filter: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 40,
        width: 150,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    order_header: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderid_text: {
        fontSize: 15,
        color: '#CCD4D6',
        fontWeight: 'bold',
    },
    order_timer: {
        backgroundColor: '#F2A341',
        borderRadius: '0 0 5 5'
    },
    order_title: {
        width: '70%',
        fontSize: 17
    },
    order_item: {
        flexDirection: 'row',
        marginTop: 20,
    },
    cross_icon: {
        color: "#CCD4D6",
        fontSize: 16,
    },
    more_order: {
        width: 60,
        backgroundColor: '#E6F4F2',
        padding: 3,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginTop: 5
    },
    accept_btn: {
        backgroundColor: '#5AB3A8',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center'
    },
    accept_btn_txt: {
        color: 'white',
        fontSize: 15
    },
    order_recve_name: {
        fontSize: 17,
        fontWeight: '400',
        color: 'black'
    },
    order_recve_phone_view: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    order_recve_loc_view: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },
    ready_btn: {
        flex: 1,
        backgroundColor: '#5AB3A8',
        borderRadius: 5,
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    delivryby_btn: {
        backgroundColor: '#fdf1e3',
        padding: 5,
        borderRadius: 5
    },
    delivryby_btn_txt: {
        color: '#F2A341'
    },
    all_orders: {
        backgroundColor: '#F2F4F5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    all_orders_header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 50,
        backgroundColor: '#F2F4F5',
        padding: 10,
        marginVertical: 8
    },
    render_all_orders: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
         
    },
    render_all_order_single: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        height: '100%',
        width: '50%',
        alignSelf: 'flex-end',
        backgroundColor: "white",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    orderid_text: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
    modal_header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modal_recuring: {
        backgroundColor: '#5AB3A8',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginLeft: 20
    },
    modal_fields: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center'
    },
    order_item: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    modal_title_second: {
        color: 'black',
        fontSize: 15
    },
    modal_title_first: {
        color: '#CCD4D6',
        fontSize: 15,
        width: 150
    },
    archive_orders_tab: {
        borderBottomWidth: 4,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    calndr_date: {
        backgroundColor: 'white',
        height: 40,
        width: 200,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    all_orders_heading_txt: {
        fontFamily: 'Lato-Bold'
    },
    toast: {
        backgroundColor: '#FFFFFF',
        // marginHorizontal:30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    trigger: {
        // padding: 10,
        // margin: 10,
        // backgroundColor:'red'
    },
    modal_data_heading: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#F2F4F5',
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    pagination_view: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        position: 'absolute',
        bottom: -40,
        width: '102%'

    },
    pagination_numbring: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    }




});
export default styles;