import {Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import CustomText from '@SilalApp/common/components/CustomText';
import {CheckBox} from 'react-native-elements';
import {ScaledSheet} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
import colors from '@SilalApp/common/assets/colors';
const ItemDetail = ({item}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.listContainerChild}>
      <View style={{width: '27%', flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          checked={
            item.checked == true || item.checked == 'true' ? true : false
          }
          onPress={() => setcheck(index)}
          checkedColor="#5AB3A8"
          uncheckedColor="#CCD4D6"
        />
        <CustomText label={item.name} textStyle={styles.itemText} />
      </View>
      <View style={{width: '20%'}}>
        <CustomText label={item.type} textStyle={styles.itemText} />
      </View>
      <View style={{width: '17%'}}>
        <CustomText label={item.quantity} textStyle={styles.itemText} />
      </View>
      <View style={{width: '23%'}}>
        <CustomText label={item?.status} textStyle={styles.itemText1} />
      </View>
      <View style={{width: '25%'}}>
        <CustomText label={item.price} textStyle={styles.itemText} />
      </View>
    </View>
  );
};

export default ItemDetail;

const styles = ScaledSheet.create({
  listContainerChild: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  itemText1: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textWhite,
    backgroundColor: colors.orange,
    paddingHorizontal: '5@s',
    paddingVertical: '1@s',
    borderRadius: '5@s',
  },
});