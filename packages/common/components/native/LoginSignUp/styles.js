import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../assets/colors";
import fonts from "../../../assets/fonts";
const styles = ScaledSheet.create({
  mainContainer: {
    width: '75%',
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: colors.garyDark,
    borderRadius: "5@s",
    overflow: "hidden",
    marginVertical: "10@s",
    padding: "1@s",
    borderWidth:'1@ms',
    borderColor:colors.borderColor
  },
  mainContainerMobile: {
    width: '95%',
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: colors.garyDark,
    borderRadius: "25@s",
    overflow: "hidden",
    marginVertical: "10@s",
    padding: "1@s",
    borderWidth:'1@ms',
    borderColor:colors.borderColor
  },
  activeTabContainerMobile: {
    alignItems: "center",
    padding: "10@s",
    width: "50%",
    borderRadius: "25@s",
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
  activeBackgroundMobile: {
    backgroundColor: colors.primary,
    alignItems: "center",
    padding: "10@s",
    width: "50%",
    borderRadius: "25@s",
  },
  textPhone: {
    color: colors.textWhite,
    fontSize: "13@ms",
    fontFamily:fonts.LatoBold
  },
  textEmail: {
    color: colors.textPrimary,
    fontSize: "13@ms",
    fontFamily:fonts.LatoBold
  },
});

export default styles;
