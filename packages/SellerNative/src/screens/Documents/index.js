import {Text, View} from 'react-native';
import React from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import Header from '../Profile/moleclues/Header';

const Documents = () => {
  return (
    <View>
      <Header label="Documents" />
    </View>
  );
};

export default Documents;

const styles = ScaledSheet.create({});
