import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import colors from '@SilalApp/common/assets/colors';
import Images from '@SilalApp/common/assets/images';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import {CheckBox, Icon} from 'react-native-elements';
import fonts from '@SilalApp/common/assets/fonts';
import {useTranslation} from 'react-i18next';

import {useNavigation} from '@react-navigation/native';
const ItemDetails = ({
  checkedState,
  checkBoxLabelFirst,
  checkBoxLabelSecond,
  imgContainer,
  payment,
  marginBottom,
  onPress,
}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [checked, setchecked] = useState(checkedState);
  useEffect(() => {
    setchecked(!checked);
  }, [checkedState]);
  const dataArray = [
    {
      id: 1,
      dt: t('item_name'),
      dd: "Man's T-shirt",
      bgColor: colors.background,
    },
    {
      id: 2,
      dt: t('Category'),
      dd: 'Clothing',
      bgColor: colors.background,
    },
    {
      id: 3,
      dt: t('Quantity'),
      dd: '0',
      bgColor: colors.background,
    },
    {
      id: 4,
      dt: t('Variant'),
      dd: '2 (Size, Color)',
      bgColor: colors.background,
    },
    {
      id: 5,
      dt: t('price'),
      dd: '$ 120.00',
      bgColor: colors.background,
    },
  ];
  const dataArray1 = [
    {
      id: 1,
      dt: t('Payment'),
      dd: '>',
      bgColor: colors.background,
    },
    {
      id: 2,
      dt: t('Customer ID'),
      dd: '2327',
      bgColor: 'transparent',
    },
    {
      id: 3,
      dt: t('Order_date'),
      dd: '12.11.2021 14:18',
      bgColor: colors.background,
    },
    {
      id: 4,
      dt: t('Amount'),
      dd: '$ 13.90',
      bgColor: 'transparent',
    },
    {
      id: 5,
      dt: t('Balance'),
      dd: '$ 129.00',
      bgColor: colors.background,
    },
  ];
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: checkBoxLabelFirst ? moderateScale(15) : null,
        }}>
        {checkBoxLabelFirst ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText
              label={checkBoxLabelFirst}
              color={colors.textPrimaryBlur}
            />
            <CustomText label={checkBoxLabelSecond} />
          </View>
        ) : (
          <CheckBox
            checked={checked}
            onPress={() => setchecked(!checked)}
            checkedColor="#5AB3A8"
            uncheckedColor="#CCD4D6"
            backgroundColor={'red'}
          />
        )}
        <Icon
          name="dots-three-vertical"
          type="entypo"
          color={colors.textPrimaryBlur}
          size={22}
        />
      </View>
      <View style={styles.bottomLine} />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          onPress
            ? onPress
            : navigation.navigate('OrderStack', {screen: 'FullOrderDetail'})
        }}
        style={[
          styles.mainContainer,
          {marginBottom: marginBottom || verticalScale(8)},
        ]}>
        {imgContainer ? (
          <View />
        ) : (
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
        )}
        <FlatList
          data={payment ? dataArray1 : dataArray}
          keyExtractor={(item, index) => {}}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: item.bgColor,
                  padding: verticalScale(10),
                  margin: verticalScale(5),
                  borderRadius: verticalScale(8),
                }}>
                <CustomText label={item.dt} textStyle={styles.itemTitle} />
                <CustomText
                  label={item.dd}
                  textStyle={[styles.itemTitle, {color: colors.black}]}
                />
              </View>
            );
          }}
        />
      </TouchableOpacity>
    </>
  );
};

export default ItemDetails;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.textWhite,
    padding: '5@s',
    elevation: 1,
    borderRadius: '8@s',
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
