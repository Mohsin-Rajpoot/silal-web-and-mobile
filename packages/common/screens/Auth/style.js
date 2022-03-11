import { ScaledSheet } from "react-native-size-matters";
import colors from "../../assets/colors";
const styles = ScaledSheet.create({
  innerContainer: {
    width: "85%",
    alignSelf: "center",
    flex: 1,
  },
  phoneNumberText: {
    color: colors.textPrimary,
    margin: "3@s",
    marginVertical: "5@s",
  },
  codeText: {
    fontSize: "12@s",
  },
  textContainer: {
    backgroundColor: "transparent",
    borderColor: colors.gray,
    borderWidth: "1@s",
    borderTopRightRadius: "5@s",
    borderBottomRightRadius: "5@s",
    fontSize: "10@ms",
  },
  countyPickerContainer: {
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderTopWidth: "1@s",
    borderLeftWidth: "1@s",
    borderBottomWidth: "1@s",
    borderTopLeftRadius: "5@s",
    borderBottomLeftRadius: "5@s",
  },
  bottomText: {
    fontSize: "14@s",
    color: colors.textPrimary,
  },
  nestedBottomText: {
    fontSize: "14@s",
    color: colors.primary,
  },
  optStyling: {
    marginVertical: "30@s",
    height: "45@s",
    flexDirection: "row",
    width: "70%",
    alignSelf: "center",
  },
  optContainer: {
    borderWidth: "1@s",
    borderColor: colors.gray,
    borderRadius: "5@s",
    height: "45@s",
  },
  timerCode: {
    alignSelf: "center",
    borderBottomWidth: "1@s",
    borderBottomColor: colors.gray,
  },
  passwordWaring: {
    flexDirection: "row",
    alignItems: "center",
    margin: "3@s",
  },
  passwordWarningText:{
    fontSize:"12@s",
    color:colors.light_grey,
    paddingHorizontal:'2@s'
  },
  changePassword: {
    flex: 1,
    marginTop: "20@s",
  },
});

export default styles;
