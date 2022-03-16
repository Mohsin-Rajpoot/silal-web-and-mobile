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
  mainContainer:{
    width:wp('60%'),
    justifyContent:'center',
    alignSelf:'center'
  },
  fistsText: {
    fontSize: "14@ms",
    color: colors.black,
    textAlign: "center",
  },
  secondText: {
    fontSize: "14@ms",
    color: colors.black,
    fontFamily:fonts.LatoBold,
  },
});

export default styles;
