import { ScaledSheet } from "react-native-size-matters";
import colors from "../../assets/colors";
import fonts from "../../assets/fonts";
const styles = ScaledSheet.create({
  headingName: {
    fontSize: "22@ms",
    lineHeight: "38@s",
    fontFamily:fonts.bold,
    color: colors.black,
    textAlign:"center"
  },
  headingDetail: {
    fontSize: "14@ms",
    color: colors.black,
    fontFamily:fonts.LatoRegular,
    alignSelf:"center",
    textAlign:"center",
    lineHeight:'13@s',

  },
});
export default styles;
