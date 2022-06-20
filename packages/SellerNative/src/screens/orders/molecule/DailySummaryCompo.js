import {View} from 'react-native';
import React from 'react';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import CustomText from '@SilalApp/common/components/CustomText';
import {CustomButton} from '@SilalApp/common/components/native';
import {Icon} from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import fonts from '@SilalApp/common/assets/fonts';

const DailySummaryCompo = ({checkPress}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.crossIcon}>
        <Icon type="entypo" name="cross" />
      </View>
      <View style={styles.massageCont}>
        <Icon
          type="material-community"
          color={colors.primary}
          name="message-bulleted"
        />
      </View>
      <View>
        <CustomText
          label={t('daily_summary')}
          color={colors.black}
          fontSize={15}
          fontFamily={fonts.LatoBold}
        />
        <CustomText
          label={t('daily_summary_detail')}
          textStyle={{width: '75%', lineHeight: 18}}
          marginBottom={verticalScale(5)}
          marginTop={verticalScale(2)}
          color={colors.textPrime}
          fontSize={12}
          fontFamily={fonts.LatoBold}
        />
        <CustomButton
          onPress={checkPress}
          containerStyle={styles.checkBtn}
          textStyle={styles.checkBtnText}
          text={t('Check')}
        />
      </View>
    </View>
  );
};

export default DailySummaryCompo;

const styles = ScaledSheet.create({
  mainContainer: {
    paddingHorizontal: '14@s',
    paddingVertical: '12@vs',
    backgroundColor: colors.textWhite,
    elevation: 1,
    borderRadius: '8@vs',
    marginBottom: '10@vs',
    flexDirection: 'row',
  },
  massageCont: {
    width: '36@vs',
    height: '36@vs',
    backgroundColor: colors.blurPrimary,
    borderRadius: '100@vs',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '12@s',
  },
  checkBtn: {
    alignSelf: 'flex-start',
    width: '82@s',
    height: '24@vs',
    backgroundColor: colors.boxBg,
    borderRadius: '8@vs',
  },
  checkBtnText: {
    color: colors.textPrimeColor,
    fontSize: '12@msr',
  },
  crossIcon: {
    position: 'absolute',
    right: '10@s',
    top: '10@s',
  },
});
