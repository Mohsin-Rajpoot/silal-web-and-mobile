import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../assets/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen-hooks';
import fonts from "../../../assets/fonts";
const styles = ScaledSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: wp('65%'),
    alignSelf: "center",
    alignItems: "center",
    padding: "10@s",
    borderRadius: "5@s",
    margin:'5@s',
    
  },
  button1: {
    backgroundColor: 'rgba(90, 179, 168, 0.2)',
    width: wp('65%'),
    alignSelf: "center",
    alignItems: "center",
    padding: "10@s",
    borderRadius: "5@s",
    margin:'5@s'
  },
  buttonText: {
    fontSize: "12@ms",
    color: colors.textWhite,
    fontFamily:fonts.PoppinsSemiBold
  },
  buttonText1: {
    fontSize: "12@ms",
    color: colors.primary,
    fontFamily:fonts.PoppinsSemiBold
  },
});
export default styles;
