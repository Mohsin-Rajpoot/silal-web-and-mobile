import {View,ScrollView} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import {useTranslation} from 'react-i18next';
import colors from '@SilalApp/common/assets/colors';
import CustomText from '@SilalApp/common/components/CustomText';
import CustomButton from '@SilalApp/common/components/native/CustomButton';
import fonts from '@SilalApp/common/assets/fonts';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import DailySummaryItem from './DailySummaryItem';

const DailySummary = () => {
  const {t} = useTranslation();
  const dataArray = [
    {
      id: 1,
      withLabel: t('Out_of_Stock'),
      firstViewText1: 2,
      firstViewText2: t('Out of stock'),
      secondViewText1: 4,
      secondViewText2: t('low_of_stock'),
      firstBtnText: t('update_now'),
      secondBtnText: t('go_to_the_out_of_stock_table'),
    },
    {
      id: 2,
      withLabel: t('Notes'),
      firstCheckBoxText:t("inventory_notes1"),
      secondCheckBoxText:t("inventory_notes2"),
      thirdCheckBoxText:t("inventory_notes3"),
    },
    {
      id: 3,
      withLabel: t('pre_orders'),
      firstViewText1: 8,
      firstViewText2: t('today'),
      secondViewText1: 36,
      secondViewText2: t('this_week'),
      firstBtnText: t('gotoPreOrder'),
    },
  ];
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header title={t('daily_summary')} dostIcon={true} showIcon />
        <View style={{height:verticalScale(15)}} />
        {dataArray.map((item, index) => {
          return (
            <DailySummaryItem
              key={item.id}
              withLabel={item.withLabel}
              firstViewText1={item.firstViewText1}
              firstViewText2={item.firstViewText2}
              secondViewText1={item.secondViewText1}
              secondViewText2={item.secondViewText2}
              firstBtnText={item.firstBtnText}
              secondBtnText={item.secondBtnText}
              firstCheckBoxText={item.firstCheckBoxText}
              secondCheckBoxText={item.secondCheckBoxText}
              thirdCheckBoxText={item.thirdCheckBoxText}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default DailySummary;

const styles = ScaledSheet.create({
  mainContainer: {
    padding: '5@vs',
    backgroundColor: colors.background,
    flex: 1,
  },
  headerContainer: {
    paddingVertical: '10@vs',
  },
});
