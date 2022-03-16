import { ScaledSheet } from "react-native-size-matters";
import colors from "../assets/colors";
import fonts from "../assets/fonts";
const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: "5@s",
  },
  phoneNumberInput: {
    height: "30@s",
    width: "100%",
    backgroundColor: "transparent",
    padding:0,
    margin:0
  },
  textInputStyles: {
    alignSelf: "center",
    borderWidth: "0.5@s",
    borderColor: colors.borderColor,
    width: "100%",
    borderRadius: "4@s",
    height: "30@s",
  },
  inputTextStyle: {
  
    fontSize: "12@ms",
    color: colors.black,
    fontFamily:fonts.LatoRegular,
    flexDirection:'column',
    justifyContent:'center',
    margin:'5@s'
  },
  CommonView: {
    width: "85%",
    alignSelf: "center",
    flex: 1,
  },
  commonIcon: {
    width: "150@s",
    height: "150@s",
    backgroundColor: colors.primary,
    alignSelf: "center",
    borderRadius: "10@s",
    marginVertical: "50@s",
  },
});
export default styles;
