import { ScaledSheet } from "react-native-size-matters";
import colors from "../../assets/colors";
import { Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;
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
    fontSize: "13@s",
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
    alignSelf: "center",
  },
  optContainer: {
    borderWidth: "1@s",
    borderColor: colors.light_grey,
    borderRadius: "5@s",
    height: "50@s",
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
  passwordWarningText: {
    fontSize: "12@s",
    color: colors.light_grey,
    paddingHorizontal: "2@s",
  },
  changePassword: {
    flex: 1,
    marginTop: "20@s",
  },
  choseAccountShopping: {
    backgroundColor: colors.red,
    width: "75@s",
    height: "75@s",
    borderRadius: "99@s",
    alignSelf: "center",
    margin: "5@s",
  },
  choseMainContainer: {
    width: "160@s",
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: "10@s",
    margin: "5@s",
  },
  accountTitle: {
    fontSize: "13@ms",
    color: colors.black,
    textAlign: "center",
    fontWeight: "500",
    marginVertical: "5@s",
  },
  accountDetail: {
    fontSize: "12@ms",
    color: colors.textPrimary,
    textAlign: "center",
    fontWeight: "300",
    marginBottom: "10@s",
  },
  heading: {
    //styleName: Headline 1;
    fontSize: "20@s",
    color: colors.primary,
    fontWeight: "700",
    textAlign: "center",
  },
  body: {
    fontSize: "13@ms",
    color: colors.light_grey,
    fontWeight: "400",
    textAlign: "center",
  },
  screenImage: {
    resizeMode: "contain",
  },
  dot: {
    width: "10@ms",
    height: "10@ms",
    borderRadius: "10@ms",
    backgroundColor: colors.secondary,
    marginEnd: "5@s",
  },
  underScore: {
    width: "30@s",
    height: "10@vs",
    borderRadius: "60@ms",
    backgroundColor: colors.primary,
    marginEnd: "5@s",
  },
  screenContainer: {
    flexDirection: "column",
    width: SCREEN_WIDTH,
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
