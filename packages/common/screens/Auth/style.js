import { ScaledSheet } from "react-native-size-matters";
import colors from "../../assets/colors";
const styles = ScaledSheet.create({
  heading: {
    alignSelf: "center",
    color: colors.textPrimary,
    fontSize: "14@s",
  },
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
    backgroundColor: colors.white,
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
    alignSelf: "center",
    color: colors.textPrimary,
  },
  nestedBottomText:{
    fontSize: "14@s",
    alignSelf: "center",
    color: colors.primary,
  }
});

export default styles;
