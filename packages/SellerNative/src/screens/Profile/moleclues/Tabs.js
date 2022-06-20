import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {CustomButton} from '@SilalApp/common/components/native';
import {useTranslation} from 'react-i18next';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
const Tabs = ({
  onChangeTab,
  page,
  tabs,
  containerStyle,
  containerStyleButton,
  textStyle,
}) => {
  const {t} = useTranslation();
  return (
    <View
      style={[
        {flexDirection: 'row', marginTop: 5, marginHorizontal: 10},
        containerStyle,
      ]}>
      <ScrollView horizontal>
        {tabs?.map((item, index) => (
          <CustomButton
            key={index}
            onPress={() => onChangeTab(index)}
            text={t(item)}
            type={page == index ? 'PRIMARY' : 'TERTIARY'}
            containerStyle={containerStyleButton}
            textStyle={textStyle}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
