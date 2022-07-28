import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import CustomButton from '@SilalApp/common/components/native/CustomButton';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import colors from '@SilalApp/common/assets/colors';
import {useTranslation} from 'react-i18next';
import images from '../../../../assets/images';
import Header from '../../../components/Header';
import Item from './Item';

const Preview = () => {
  const {t} = useTranslation();
  const dataArray = [
    {
      id: 1,
      heading: 'Chicken & Cheese Burger',
      text1: 'Juicy chicken burger with cheese, soft drink and dessert of your choice',
      imgPath: images.borger,
      buttonText: '$ 2.99',
      leftIcon: true,
      onPress: () => console.log('ckn'),
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Header showIcon title="Preview" dostIcon={true} />
      <View style={{height: verticalScale(10)}} />
      {dataArray.map((item, index) => {
        return (
          <Item
            key={item.id}
            heading={item.heading}
            text1={item.text1}
            imgPath={item.imgPath}
            buttonText={item.buttonText}
            onPress={item.onPress}
            leftIcon={item.leftIcon}
          />
        );
      })}
    </View>
  );
};

export default Preview;

const styles = ScaledSheet.create({
  mainContainer: {
    padding: '15@vs',
  },
});
