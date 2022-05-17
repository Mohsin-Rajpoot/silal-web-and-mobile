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
    container: {
        backgroundColor: colors.backGround,
    },
 
    ModalMainButton: {
        position: 'absolute', right: 22, marginVertical: 30,
        marginHorizontal: 20, height: 50, width: 50, justifyContent: 'center', alignItems: 'center'
    },
    BadgeContainer: {
        position: 'absolute', top: 10, right: 7, backgroundColor: colors.textWhite, height: 16, width: 16, borderRadius: 8
    },
    badgeStyle: {
        backgroundColor: colors.primary, height: 14, width: 14, borderRadius: 7, marginVertical: 1
    },
    ModalHeightwidth: {
        backgroundColor: colors.textWhite, width: 350, position: 'absolute',
        top: 29, right: 2, borderRadius: 5, elevation: 1, paddingHorizontal: 15,
    },
    NotificationTitle: {
          marginTop: 15, width: 120,fontFamily:fonts.LatoSemiBold,
    },
    NewNotification: {
        fontFamily: fonts.LatoSemiBold, marginTop: 15, backgroundColor: colors.primary, height: 30, width: 60, textAlign: 'center',
        textAlignVertical: 'center', borderRadius: 5, color: colors.textWhite, overflow: 'hidden',paddingTop:5
        // marginTop: 10,
    },
    ImageVIew: {
        backgroundColor: '#0065FF33', height: 56, width: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center'
    },
    ImageModal: {
        height: 27, width: 27, resizeMode: 'contain'
    },
    ModelDesign: {
        width: 225, paddingHorizontal: 10
    },
    ModalNotificationTitle: {
        fontFamily: fonts.PoppinsSemiBold, fontSize: 13, color: colors.black
    },
    NotificationDescription: {
        fontSize: 13, color: colors.black, fontFamily: fonts.LatoMedium
    },
    ClockIconNotification: {
        fontSize: 18, color: colors.light_grey, paddingVertical: 5, paddingHorizontal: 5
    },
    TimeBar: {
         fontFamily: fonts.PoppinsSemiBold,
        fontSize: 13, color: colors.light_grey, paddingTop: 5
    },
    HeaderContainer: {
        flexDirection: 'row', backgroundColor: colors.backGround
    },
    BambergIcon: {
        marginLeft: 10, marginTop: 10, color: colors.black
    },
    CrossIconNotification: {
        fontSize: 19, color: colors.light_grey
    },
    BorderNotification: {
        borderBottomWidth: 1, borderColor: colors.light_grey
    },


});
export default styles;
