import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import images from '../../../../../assets/images';
import CustomText from '@SilalApp/common/components/CustomText';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import {useTranslation} from 'react-i18next';

const List = ({imgPath, heading, quantity, price, totalPrice, note}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imgPath} />
        </View>
        <CustomText
          fontFamily={fonts.LatoMedium}
          fontSize={15}
          textStyle={{width: '60%'}}
          label={heading}
        />
      </View>
      <View style={styles.container}>
        <CustomText label={t('Quantity')} textStyle={styles.itemTitle} />
        <CustomText
          label={quantity}
          color={colors.black}
          textStyle={[styles.itemTitle, {color: colors.black}]}
        />
      </View>
      <View style={[styles.container, {backgroundColor: 'transparent'}]}>
        <CustomText label={t('price')} textStyle={styles.itemTitle} />
        <CustomText
          label={price}
          color={colors.black}
          textStyle={[styles.itemTitle, {color: colors.black}]}
        />
      </View>
      <View style={[styles.container, {marginBottom: 0}]}>
        <CustomText label={t('total-price')} textStyle={styles.itemTitle} />
        <CustomText
          label={totalPrice}
          textStyle={[
            styles.itemTitle,
            {color: colors.black, fontFamily: fonts.bold},
          ]}
        />
      </View>
      {note && (
        <View style={styles.noteContainer}>
          <CustomText
            textStyle={styles.noteText}
            color={colors.primary}
            label={
              t('Note') +
              ": Please do not add onion and fry it without oil. I'm allergic."
            }
          />
        </View>
      )}
    </View>
  );
};

export default List;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.textWhite,
    elevation: 1,
    padding: '10@vs',
    borderRadius: '12@vs',
    marginBottom: '15@vs',
  },
  imageContainer: {
    borderRadius: '8@s',
    width: '80@vs',
    height: '80@vs',
    overflow: 'hidden',
    marginBottom: '10@vs',
    marginRight: '20@s',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    padding: '10@vs',
    marginBottom: '10@vs',
    borderRadius: '5@vs',
    height: '40@vs',
  },
  itemTitle: {
    fontSize: '13@vs',
    fontFamily: fonts.LatoMedium,
    color: colors.textPrimaryBlur,
    marginHorizontal: '5@s',

  },
  noteText: {
    fontSize: '13@vs',
    fontFamily: fonts.LatoMedium,
    lineHeight: 22,
  },
  noteContainer: {
    backgroundColor: colors.primaryBlur,
    padding: '10@vs',
    borderRadius: '5@vs',
    borderColor: colors.primary,
    borderWidth: 1,
    marginTop:'10@vs'
  },
  
});
