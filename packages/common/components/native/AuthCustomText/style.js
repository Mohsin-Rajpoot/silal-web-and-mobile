import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../assets/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from "react-native-responsive-screen-hooks";
import fonts from "../../../assets/fonts";
import IsTablet from "../IsTablet";
const styles = ScaledSheet.create({
  mainContainer: {
    width: wp(!IsTablet ? "90%" : "60%"),
    justifyContent: "center",
    alignSelf: "center",
  },
  fistsText: {
    fontSize: "14@ms",
    color: colors.black,
    textAlign: "center",
    marginTop:'5@s'
  },
  secondText: {
    fontSize: "14@ms",
    color: colors.black,
    fontFamily: fonts.LatoBold,
    marginTop:'5@s'
  },
});

export default styles;
