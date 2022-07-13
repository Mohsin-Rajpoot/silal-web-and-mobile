import {View, Text, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import fonts from '@SilalApp/common/assets/fonts';
import colors from '@SilalApp/common/assets/colors';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';


const Tab = ({active, setActive}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.mainContainerMobile}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setActive(0)}
        style={
          active == 0
            ? styles.activeBackgroundMobile
            : styles.activeTabContainerMobile
        }>
        <CustomText
          label={t('Oder List')}
          textStyle={active == 0 ? styles.textPhone : styles.textEmail}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setActive(1)}
        style={
          active == 1
            ? styles.activeBackgroundMobile
            : styles.activeTabContainerMobile
        }>
        <CustomText
          label={t('Details')}
          textStyle={active == 1 ? styles.textPhone : styles.textEmail}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setActive(2)}
        style={
          active == 2
            ? styles.activeBackgroundMobile
            : styles.activeTabContainerMobile
        }>
        <CustomText
          label={t('History')}
          textStyle={active == 2 ? styles.textPhone : styles.textEmail}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Tab;

const styles = ScaledSheet.create({
  mainContainerMobile: {
    width: '98%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: colors.grayLight,
    borderRadius: '25@s',
    overflow: 'hidden',
    marginVertical: '10@s',
    padding: '1@s',
    borderWidth: '1@ms',
    borderColor: colors.borderColor,
    justifyContent:'space-between'
  },
  activeBackgroundMobile: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    padding: '10@s',
    width: '33%',
    borderRadius: '100@s',
  },
  activeTabContainerMobile: {
    alignItems: 'center',
    padding: '10@s',
    width: '33%',
    borderRadius: '100@s',
  },
  textPhone: {
    color: colors.textWhite,
    fontSize: '15@ms',
    fontFamily: fonts.LatoBold,
  },
  textEmail: {
    color: colors.textPrimary,
    fontSize: '15@ms',
    fontFamily: fonts.LatoBold,
  },
 
});
