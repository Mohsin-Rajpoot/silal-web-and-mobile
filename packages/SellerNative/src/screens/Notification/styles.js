import colors from '@SilalApp/common/assets/colors';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    padding: '10@s',
  },
  ImageVIew: {
    backgroundColor: colors.purpleLight,
    height: '35@vs',
    width: '35@vs',
    borderRadius: '99@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageVIew1: {
    backgroundColor: colors.lightBlue,
    height: '35@vs',
    width: '35@vs',
    borderRadius: '99@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageModal: {
    height: verticalScale(25),
    width: verticalScale(25),
    resizeMode: 'contain',
  },
  ModelDesign: {
    width: '70%',
    paddingHorizontal: 10,
  },
  ModalNotificationTitle: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '12@vs',
    color: colors.black,
  },
  NotificationDescription: {
    fontSize: '11@vs',
    color: colors.black,
    fontFamily: fonts.LatoRegular,
  },
  TimeBar: {
    fontFamily: fonts.LatoMedium,
    fontSize: '10@vs',
    color: colors.light_grey,
  },
  ClockIconNotification: {
    fontSize: '12@vs',
    color: colors.light_grey,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  CrossIconNotification: {
    fontSize: '12@vs',
    color: colors.light_grey,
  },
  BorderNotification: {
    borderBottomWidth: 0.5,
    borderColor: colors.light_grey,
  },
  previousnotification:{
    fontSize:"12@vs",
    color:colors.textPrimeColor,
    fontFamily:fonts.LatoSemiBold,
    marginHorizontal:"10@s"
  }
});

export default styles;
