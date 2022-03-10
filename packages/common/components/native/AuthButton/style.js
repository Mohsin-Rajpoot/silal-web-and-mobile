import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../assets/colors";
const styles = ScaledSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "85%",
    alignSelf: "center",
    alignItems: "center",
    padding: "10@s",
    borderRadius: "5@s",
  },
  buttonText: {
    fontSize: "12@ms",
    color: colors.textWhite,
  },
});
export default styles;
