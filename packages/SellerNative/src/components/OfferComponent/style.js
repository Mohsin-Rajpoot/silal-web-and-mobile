import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
const styles = ScaledSheet.create({
  mainOuterContainer: {
    backgroundColor: colors.textWhite,
    borderRadius: '5@ms',
    marginVertical: '7@ms',
    width: !IsTablet ? '100%' : '31%',
    marginRight: '10@ms',
    padding: !IsTablet ? '5@s' : '0@s',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10@ms',
    borderBottomWidth: '1@ms',
    borderBottomColor: colors.underLine,
  },
  dayText: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    marginRight: '10@ms',
  },
  dotsIcon: {
    alignSelf: 'flex-start',
    marginVertical: '5@ms',
  },
  detailContainer: {
    padding: '10@ms',
  },
  itemText: {
    fontSize: '10@ms',
    fontFamily: fonts.LatoSemiBold,
    color: colors.light_grey,
  },
  orderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '3@ms',
  },
  orderItemText: {
    fontSize: '11@ms',
    fontFamily: fonts.LatoSemiBold,
    color: colors.sidebar,
    textTransform: 'uppercase',
  },
  orderValue: {
    fontSize: '11@ms',
    fontFamily: fonts.LatoBold,
    color: colors.black,
  },
});
export default styles;
