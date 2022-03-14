import { ScaledSheet } from "react-native-size-matters";
import colors from "../../assets/colors";
const styles = ScaledSheet.create({
  headingName: {
    fontSize: "22@ms",
    lineHeight: "38@s",
    fontWeight: "700",
    color: colors.black,
    textAlign:"center"
  },
  headingDetail: {
    fontSize: "14@ms",
    color: colors.black,
    alignSelf:"center",
    textAlign:"center",
    lineHeight:21

  },
});
export default styles;
