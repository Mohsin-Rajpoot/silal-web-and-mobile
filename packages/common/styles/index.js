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
    width: "100%",
    backgroundColor: "transparent",
  },
  textInputStyles: {
    alignSelf: "center",
    borderWidth: "0.5@s",
    borderColor: colors.gray,
    width: "100%",
    borderRadius: "10@s",
    height: "40@s",
  },
  inputTextStyle: {
    paddingHorizontal: "10@s",
    fontSize: "12@s",
    color: colors.black,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  CommonView: {
    width: "85%",
    alignSelf: "center",
    flex: 1,
  },
  commonIcon: {
    width: "275@s",
    height: "275@s",
    backgroundColor: colors.primary,
    alignSelf: "center",
    borderRadius: "10@s",
    marginVertical: "30@s",
  },
});
export default styles;
