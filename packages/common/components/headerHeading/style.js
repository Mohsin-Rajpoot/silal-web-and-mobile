import { ScaledSheet } from "react-native-size-matters";
import colors from "../../assets/colors";
import fonts from "../../assets/fonts";
const styles = ScaledSheet.create({
  headingName: {
    fontSize: "17@vs",
    lineHeight: "30@s",
    fontFamily:fonts.bold,
    color: colors.black,
    textAlign:"center"
  },
  headingDetail: {
    fontSize: "12@vs",
    color: colors.black,
    fontFamily:fonts.LatoRegular,
    alignSelf:"center",
    textAlign:"center",
    lineHeight:'15@s',

  },
  headingDetailMobile: {
    fontSize: "12@vs",
    color: colors.black,
    fontFamily:fonts.LatoRegular,
    alignSelf:"center",
    textAlign:"center",
    lineHeight:'20@s',


  },
});
export default styles;
