import {View, Image} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import React from 'react';
import TextWithIcon from '../../components/TextWithIcon';
import colors from '@SilalApp/common/assets/colors';
import Header from '../Profile/moleclues/Header';
import {useTranslation} from 'react-i18next';
import CustomText from '@SilalApp/common/components/CustomText';
import fonts from '@SilalApp/common/assets/fonts';
import {SafeAreaView} from 'react-native-safe-area-context';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
const AboutApp = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header label={t('AboutApp')} onPress={() => navigation.openDrawer()} />
      <View style={IsTablet ? styles.IconMainContainer : styles.IconMainContainerMobile }>
        <Image
          source={require('../../Assets/Group276.png')}
          style={styles.IconContainer}
        />

        <CustomText label="Silal app" textStyle={styles.SilalText} />
        <CustomText label="Ver. 1.0" textStyle={styles.versionText} />
      </View>
      <View style={IsTablet ? styles.ButtonTab : styles.ButtonTabMobile}>
        <TextWithIcon
          label={t('termOfUse')}
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyleAboutapp}
        />
      </View>
      <View style={IsTablet? {width: '35%'} : styles.ButtonTabMobile1}>
        <TextWithIcon
          label={t('Privacy-policy')}
          textStyle={styles.textStyleAboutapp}
          iconStyle={styles.iconStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default AboutApp;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.profileBackground,
    paddingHorizontal: '10@s',
    flex: 1,
  },
  IconMainContainer: {
    width: '35%',
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  IconMainContainerMobile:{
    // width: '35%',
    marginTop: verticalScale(20),
    alignItems: 'center',
    justifyContent:'center',
    alignContent:'center'
  },
  textStyleAboutapp: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoMedium,
    color: colors.black,
  },
  IconContainer: {
    width: '80@s',
    height: '80@s',
    // backgroundColor: colors.primary,
    borderRadius: '10@s',
    marginVertical: '10@s',
  },
  SilalText: {
    fontSize: '13@ms',
    fontFamily: fonts.LatoMedium,
    color: colors.black,
  },
  versionText: {
    fontSize: '10@ms',
    fontFamily: fonts.LatoMedium,
    color: colors.textPrimaryBlur,
  },
  iconStyle: {
    fontSize: '18@ms',
    color: colors.textPrimaryBlur,
  },
  ButtonTab:{
    width: '35%', marginTop: verticalScale(10)
  },
  ButtonTabMobile:{
    width: '95%', marginTop: verticalScale(10) ,
    marginHorizontal:'12@s'
  },
  ButtonTabMobile1:{
    width: '95%',
    marginHorizontal:'12@s'
  }
});
