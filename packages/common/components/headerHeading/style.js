import { ScaledSheet } from "react-native-size-matters";
import colors from "../../assets/colors";
import fonts from "../../assets/fonts";
const styles = ScaledSheet.create({
  headingName: {
    fontSize: "20@ms",
    lineHeight: "30@s",
    fontFamily:fonts.bold,
    color: colors.black,
    textAlign:"center"
  },
  headingDetail: {
    fontSize: "13@ms",
    color: colors.black,
    fontFamily:fonts.LatoRegular,
    alignSelf:"center",
    textAlign:"center",
    lineHeight:'15@s',

  },
});
export default styles;
