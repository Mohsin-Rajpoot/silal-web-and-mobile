import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../assets/colors";
const styles = ScaledSheet.create({
  fistsText: {
    fontSize: "14@ms",
    color: colors.black,
    textAlign: "center",
  },
  secondText: {
    fontSize: "14@ms",
    color: colors.red,
  },
});

export default styles;
