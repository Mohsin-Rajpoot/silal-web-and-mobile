import { ScaledSheet } from "react-native-size-matters";
import colors from "../assets/colors";
import fonts from "../assets/fonts";
const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.grayLight,
    padding: "5@s",
  },
  phoneNumberInput: {
    height: "30@s",
    width: "100%",
    backgroundColor: "transparent",
    padding: 0,
    margin: 0,
  },
  searchIconContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  searchIcon:{
    marginHorizontal:'5@ms',
    
  },
  searchText:{
    fontSize:'10@ms',
    color:colors.gray_light,
    fontFamily:fonts.LatoMedium
  },
  textInputStyles: {
    alignSelf: "center",
    borderWidth: "0.3@s",
    borderColor: colors.light_grey,
    width: "100%",
    borderRadius: "4@ms",
    height: "30@s",
    flexDirection:'row',
    alignItems:'center'
  },
  inputTextStyle: {
    fontSize: "12@ms",
    color: colors.black,
    fontFamily: fonts.LatoRegular,
    flexDirection: "column",
    justifyContent: "center",
    margin: "3@s",
    width: "90%",
    lineHeight: 22,
  },
  CommonView: {
    width: "85%",
    alignSelf: "center",
    flex: 1,
  },
  commonIcon: {
    width: "120@s",
    height: "120@s",
    backgroundColor: colors.primary,
    alignSelf: "center",
    borderRadius: "10@s",
    marginVertical: "50@s",
  },
});
export default styles;
