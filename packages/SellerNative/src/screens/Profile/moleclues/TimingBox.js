import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  scale,
  ScaledSheet,
  moderateScale,
  verticalScale,
} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import fonts from '@SilalApp/common/assets/fonts';
import {CustomButton} from '@SilalApp/common/components/native';
import colors from '@SilalApp/common/assets/colors';
import {useTranslation} from 'react-i18next';

const TimingBox = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={{margin: moderateScale(10)}}>
        <CustomText
          label="Restaurant’s name"
          textStyle={styles.resturantName}
        />
        <CustomText
          label="The slogan will be here mх 40 characters"
          textStyle={styles.slogan}
        />
      </View>
      <View style={styles.detailhoursContainer}>
        <View>
          <CustomText label={t('Opening_hours')} textStyle={styles.openhours} />
          <CustomText
            label="Mon - Fri 10:00 - 22:00, Sat, Sun - Closed"
            textStyle={styles.openingDetail}
          />
        </View>
        <View style={{marginLeft: verticalScale(30)}}>
          <CustomText label={t('Location')} textStyle={styles.openhours} />
          <CustomText
            label="8502 Preston Rd. Inglewood"
            textStyle={styles.openingDetail}
          />
        </View>
      </View>
      <View style={{margin: verticalScale(10)}}>
        <CustomText label={t('Tags')} textStyle={styles.openhours} />
        <View style={{flexDirection: 'row', marginTop: 6}}>
          <CustomButton
            textStyle={styles.tagButtonText}
            containerStyle={styles.tagButtonContainer}
            text="Sushi"
          />
          <CustomButton
            textStyle={styles.tagButtonText}
            containerStyle={[
              styles.tagButtonContainer,
              {marginHorizontal: scale(6)},
            ]}
            text="Burgers"
          />
          <CustomButton
            textStyle={styles.tagButtonText}
            containerStyle={styles.tagButtonContainer}
            text="Pan-asian"
          />
        </View>
      </View>
    </View>
  );
};

export default TimingBox;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '150@vs',
  },
  detailhoursContainer: {
    flexDirection: 'row',
    margin: '10@s',
    alignItems: 'center',
  },
  openhours: {
    fontSize: '13@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
  },
  openingDetail: {
    fontSize: '11@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  resturantName: {
    fontFamily: fonts.bold,
    fontSize: '15@vs',
    color: colors.black,
  },
  slogan: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  timing: {},
  tagButtonContainer: {
    backgroundColor: colors.light_blue,
  },
  tagButtonText: {
    color: colors.dark_blue,
    fontFamily: fonts.LatoRegular,
    paddingHorizontal: '9@s',
    paddingVertical: '4@vs',
    fontSize: '12@ms',
  },
});
