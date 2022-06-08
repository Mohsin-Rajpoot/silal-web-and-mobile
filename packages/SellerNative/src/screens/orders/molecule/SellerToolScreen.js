import {View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import CustomText from '@SilalApp/common/components/CustomText';
import TextInput from '../../../../../common/components/native/TextInput/index';
import TextWithIconCompo from './TextWithIconCompo';
import {useTranslation} from 'react-i18next';
import Header from '../../../components/Header';
import images from '../../../../assets/images';

const SellerToolScreen = () => {
    const {t} = useTranslation();
  const dataArray = [
    {
      id: 1,
      text: t('Start_shift'),
      toggle: true,
      iconPath: images.flagIcon,
    },
    {
      id: 2,
      text: t('Notes'),
      iconPath: images.noteIcon,
    },
    {
      id: 3,
      text: t('delivery_estimation_time'),
      iconPath: images.clockIcon,
    },
    {
      id: 4,
      text: t('contact_info'),
      iconPath: images.infoIcon,
      time: '40 Mint',
    },
  ];
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header title={t('sellers_tool')} dostIcon={true} showIcon />
      </View>
      {dataArray.map((item, index) => {
        return (
          <TextWithIconCompo
            key={item.id}
            iconPath={item.iconPath}
            text={item.text}
            time={item.time}
            toggle={item.toggle}
          />
        );
      })}
    </View>
  );
};

export default SellerToolScreen;

const styles = ScaledSheet.create({
  mainContainer: {
    padding: '15@vs',
    backgroundColor:colors.background,
    flex:1
  },
  headerContainer: {
    paddingVertical: '10@vs',
  },
});
