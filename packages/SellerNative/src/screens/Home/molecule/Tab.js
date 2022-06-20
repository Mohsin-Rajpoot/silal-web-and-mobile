import {StyleSheet, Dimensions, View, ScrollView} from 'react-native';
import React,{useState} from 'react';
import {CustomButton} from '@SilalApp/common/components/native';
import {useTranslation} from 'react-i18next';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import { LockOnLandscape } from '@SilalApp/common/components/native';
var {width} = Dimensions.get('screen');
const Tab = ({onChangeTab, page, tabs, containerStyle}) => {
  const {t} = useTranslation();
  const [screenWidth, setScreenWidth] = useState(width);

  return (
    <View
      style={[
        {flexDirection: 'row', marginTop: 5, width: !IsTablet ? '80%' : '90%'},
        containerStyle,
      ]}>
      <ScrollView horizontal>
        {tabs?.map((item, index) => (
          <CustomButton
            key={index}
            onPress={() => onChangeTab(index)}
            text={t(item)}
            type={page == index ? 'PRIMARY' : 'TERTIARY'}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({});
