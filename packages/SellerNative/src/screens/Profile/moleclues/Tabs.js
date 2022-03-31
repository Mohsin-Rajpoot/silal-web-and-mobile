import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomButton} from '@SilalApp/common/components/native';
import { useTranslation } from 'react-i18next';
const Tabs = ({onChangeTab,page,tabs,containerStyle}) => {
  const {t}=useTranslation()
  return (
    <View style={[{ flexDirection: 'row', marginTop:5},containerStyle]}>
      {tabs?.map((item,index)=>(
        <CustomButton
        key={index}
        onPress={() => onChangeTab(index)}
        text={t(item)}
        type={page==index ? 'PRIMARY' : 'TERTIARY'}
      />
      ))}
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
