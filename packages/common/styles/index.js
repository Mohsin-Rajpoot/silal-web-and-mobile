import { ScaledSheet } from "react-native-size-matters";
import colors from "../assets/colors";
const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: "5@s",
  },
  phoneNumberInput: {
    height: "47@s",
  },
  textInputStyles: {
    alignSelf: "center",
    borderWidth: "1@s",
    borderColor: colors.light_grey,
    width: "100%",
    borderRadius: "5@s",
    height: "40@s",
  },
  inputTextStyle: {
    paddingHorizontal: "10@s",
    fontSize: "12@s",
    color: colors.black,
  },
});
export default styles;
