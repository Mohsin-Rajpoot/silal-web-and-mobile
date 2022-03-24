import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../assets/colors";
import fonts from "../../../assets/fonts";
const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical:"10@s"
  },
  backIconContainer: {
    alignSelf: "center",
  },
  headingContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    marginRight:'15@s'
  },
  heading: {
    alignSelf: "flex-start",
    color: colors.black,
    fontSize: "13@ms",
    fontFamily:fonts.LatoBold
  },
  icon: {
    fontSize: "16@ms",
    color: colors.black,
    margin: "5@s",
  },
});
export default styles;
