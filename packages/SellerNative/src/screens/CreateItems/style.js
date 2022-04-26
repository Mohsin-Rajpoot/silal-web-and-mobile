import fonts from '@SilalApp/common/assets/fonts';
import colors from '@SilalApp/common/assets/colors/index';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor:colors.profileBackground,
    flex:1,
    paddingHorizontal:"5@s"
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:"5@s"
  },
  createnewItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createItemText: {
    fontSize: '22@ms',
    fontFamily: fonts.bold,
    color: colors.black,
    marginLeft: '10@s',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dullContainerStyle: {
    backgroundColor: colors.primaryBlur,
    marginRight: '10@s',
  },
  buttonContainerStyle: {
    backgroundColor: colors.primary,
    marginRight: '5@s',
  },
  buttonTextDull: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
    marginHorizontal: '2@s',
  },
  buttonText: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,
    marginHorizontal: '2@s',
  },
  tabPagerContainer: {
    backgroundColor: colors.textWhite,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:"4@s",
    marginHorizontal:"5@s",
    marginVertical:"10@s",
    paddingVertical:"4@s",
    justifyContent:"center",
   
  },
  tabTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberContainer: {
    backgroundColor: colors.primary,
    borderRadius: '99@s',
    width: '25@s',
    height: '25@s',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5@s',
  },
  numberText: {
    fontSize: '14@ms',
    fontFamily: fonts.bold,
    color: colors.textWhite,
  },
  SignUpHeaderInactive: {
    backgroundColor: colors.light_grey,
    width: '23@s',
    height: '1@s',
    marginHorizontal: '8@s',
  },
  SignformHeader: {
    backgroundColor: colors.primary,
    width: '23@s',
    height: '1@s',
    marginHorizontal: '8@s',
  },
  numberContainerInactive: {
    backgroundColor: colors.background2,
    borderRadius: '99@s',
    width: '25@s',
    height: '25@s',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5@s',
  },
  textStyle: {
    fontSize: '13@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  textStyleInActive: {
    fontSize: '13@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textColor,
  },
});

export default styles;
