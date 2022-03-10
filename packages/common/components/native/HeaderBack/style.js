import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../assets/colors";
const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backIconContainer: {
    alignSelf: "center",
  },
  headingContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    alignSelf: "flex-start",
    color: colors.black,
    fontSize: "14@s",
    margin: "5@s",
  },
  icon: {
    fontSize: "16@ms",
    color: colors.black,
    margin: "5@s",
  },
});
export default styles;
