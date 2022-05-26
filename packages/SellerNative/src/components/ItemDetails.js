import {View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import colors from '@SilalApp/common/assets/colors';
import Images from '@SilalApp/common/assets/images';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {CheckBox, Icon} from 'react-native-elements';
import fonts from '@SilalApp/common/assets/fonts';
import {useTranslation} from 'react-i18next';
const ItemDetails = ({checkedState}) => {
  const {t} = useTranslation();
  const [checked, setchecked] = useState(checkedState);
  useEffect(() => {
    setchecked(!checked);
  }, [checkedState]);
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <CheckBox
          checked={checked}
          onPress={() => setchecked(!checked)}
          checkedColor="#5AB3A8"
          uncheckedColor="#CCD4D6"
          backgroundColor={'red'}
        />
        <Icon
          name="dots-three-vertical"
          type="entypo"
          color={colors.textPrimaryBlur}
          size={22}
        />
      </View>
      <View style={styles.bottomLine} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../Assets/image8.png')}
          />
        </View>
        <View style={styles.outOfstackContainer}>
          <CustomText
            label={t('out_of_stock_item')}
            textStyle={styles.outOfstack}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: colors.background,
          padding: verticalScale(10),
          margin: verticalScale(5),
          borderRadius: verticalScale(8),
        }}>
        <CustomText label={t('item_name')} textStyle={styles.itemTitle} />
        <CustomText
          label={`Man's T-shirt`}
          textStyle={[styles.itemTitle, {color: colors.black}]}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: colors.background,
          padding: verticalScale(10),
          margin: verticalScale(5),
          borderRadius: verticalScale(8),
        }}>
        <CustomText label={t('Category')} textStyle={styles.itemTitle} />
        <CustomText
          label={`Man's T-shirt`}
          textStyle={[styles.itemTitle, {color: colors.black}]}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: colors.background,
          padding: verticalScale(10),
          margin: verticalScale(5),
          borderRadius: verticalScale(8),
        }}>
        <CustomText label={t('Quantity')} textStyle={styles.itemTitle} />
        <CustomText
          label={`Man's T-shirt`}
          textStyle={[styles.itemTitle, {color: colors.black}]}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: colors.background,
          padding: verticalScale(10),
          margin: verticalScale(5),
          borderRadius: verticalScale(8),
        }}>
        <CustomText label={t('Variant')} textStyle={styles.itemTitle} />
        <CustomText
          label={`Man's T-shirt`}
          textStyle={[styles.itemTitle, {color: colors.black}]}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: colors.background,
          padding: verticalScale(10),
          margin: verticalScale(5),
          borderRadius: verticalScale(8),
        }}>
        <CustomText label={t('price')} textStyle={styles.itemTitle} />
        <CustomText
          label={`Man's T-shirt`}
          textStyle={[styles.itemTitle, {color: colors.black}]}
        />
      </View>
    </View>
  );
};

export default ItemDetails;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.textWhite,
    padding: '5@s',
    elevation: 1,
    borderRadius: '8@s',
    marginBottom: '8@s',
  },
  bottomLine: {
    backgroundColor: colors.borderColor,
    height: 0.5,
    width: '100%',
    marginBottom: '5@s',
  },
  imageContainer: {
    borderRadius: '8@s',
    overflow: 'hidden',
  },
  image: {
    width: '60@vs',
    height: '60@vs',
    margin: '5@s',
    borderRadius: '8@s',
    overflow: 'hidden',
    resizeMode: 'contain',
  },
  outOfstackContainer: {
    backgroundColor: colors.red,
    paddingVertical: '5@s',
    paddingHorizontal: '5@s',
    marginHorizontal: '10@s',
    borderRadius: '5@s',
  },
  outOfstack: {
    fontSize: '8@vs',
    fontFamily: fonts.LatoMedium,
    color: colors.textWhite,
  },
  itemTitle: {
    fontSize: '12@vs',
    fontFamily: fonts.LatoMedium,
    color: colors.textPrimaryBlur,
    marginHorizontal: '5@s',
  },
});
