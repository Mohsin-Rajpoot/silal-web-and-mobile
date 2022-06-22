import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../assets/colors";
import fonts from "../../../assets/fonts";
const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "10@s",
  },
  backIconContainer: {
    alignSelf: "center",
  },
  headingContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    marginRight: "15@s",
  },
  heading: {
    alignSelf: "flex-start",
    color: colors.black,
    fontSize: "12@vs",
    fontFamily: fonts.LatoBold,
  },
  headingMobile: {
    alignSelf: "flex-start",
    color: colors.black,
    fontSize: "11@vs",
    fontFamily: fonts.LatoMedium,
  },
  icon: {
    fontSize: "16@vs",
    color: colors.black,
    margin: "5@s",
  },
});
export default styles;
