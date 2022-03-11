import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../assets/colors";
const styles = ScaledSheet.create({
  mainContainer: {
    width: "85%",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: colors.grayLight,
    borderRadius: "5@s",
    overflow: "hidden",
    marginVertical: "10@s",
    padding: "1@s",
  },
  activeTabContainer: {
    alignItems: "center",
    padding: "10@s",
    width: "50%",
    borderRadius: "3@s",
  },
  activeBackground: {
    backgroundColor: colors.primary,
    alignItems: "center",
    padding: "10@s",
    width: "50%",
    borderRadius: "3@s",
  },
  textPhone: {
    color: colors.textWhite,
    fontSize: "13@ms",
  },
  textEmail: {
    color: colors.textPrimary,
  },
});

export default styles;
