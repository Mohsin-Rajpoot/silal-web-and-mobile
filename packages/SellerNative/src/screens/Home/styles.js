import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen-hooks';
// import fonts from '@SilalApp/common/assets/fonts';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import fonts from '@SilalApp/common/assets/fonts';
const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
  },

  ModalMainButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BadgeContainer: {
    position: 'absolute',
    top: !IsTablet ? '14@vs' : '6@vs',
    right: !IsTablet ? '11@ms' : '2@ms',
    backgroundColor: colors.textWhite,
    height: '9@ms',
    width: '9@ms',
    borderRadius: '99@s',
  },
  badgeStyle: {
    backgroundColor: colors.primary,
    height: '8@ms',
    width: '8@ms',
    borderRadius: '99@s',
    marginVertical: 1,
  },
  ModalHeightwidth: {
    backgroundColor: colors.textWhite,
    width: 350,
    position: 'absolute',
    top: 29,
    right: 2,
    borderRadius: 5,
    elevation: 1,
    paddingHorizontal: 15,
  },
  NotificationTitle: {
    marginTop: 15,
    width: 120,
    fontFamily: fonts.LatoSemiBold,
  },
  NewNotification: {
    fontFamily: fonts.LatoSemiBold,
    marginTop: 15,
    backgroundColor: colors.primary,
    height: 30,
    width: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    color: colors.textWhite,
    marginTop: 10,
  },
  ImageVIew: {
    backgroundColor: '#0065FF33',
    height: 56,
    width: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageModal: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
  },
  ModelDesign: {
    width: 225,
    paddingHorizontal: 10,
  },
  ModalNotificationTitle: {
    fontSize: 13,
    color: colors.black,
  },
  NotificationDescription: {
    fontSize: 13,
    color: colors.black,
    fontFamily: fonts.LatoMedium,
  },
  ClockIconNotification: {
    fontSize: 18,
    color: colors.light_grey,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  TimeBar: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 13,
    color: colors.light_grey,
    paddingTop: 5,
  },
  HeaderContainer: {
    flexDirection: 'row',
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
  },
  BambergIcon: {
    color: colors.black,
  },
  CrossIconNotification: {
    fontSize: 19,
    color: colors.light_grey,
  },
  BorderNotification: {
    borderBottomWidth: 1,
    borderColor: colors.light_grey,
  },
  tabbutton: {
    backgroundColor: colors.primary,
    borderRadius: '5@s',
  },
  tabbuttonInactive: {
    backgroundColor: 'transparent',
    borderRadius: '5@s',
  },
  tabbuttonMobile: {
    backgroundColor: colors.primary,
    borderRadius: '8@s',
    paddingHorizontal: '5@s',
  },
  tabbuttonMobileInactive: {
    backgroundColor: 'transparent',
    borderRadius: '8@s',
    paddingHorizontal: '5@s',
  },
  tabTitle: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,
  },
  tabTitleInactive: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textPrimeColor,
  },
});
export default styles;
