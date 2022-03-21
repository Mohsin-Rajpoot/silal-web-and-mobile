import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomButton} from '@SilalApp/common/components/native';
const Tabs = ({onChangeTab,page}) => {
  return (
    <View style={{ flexDirection: 'row'}}>
      <CustomButton
        onPress={() => onChangeTab(0)}
        text="Profile"
        type={page==0 ? 'PRIMARY' : 'TERTIARY'}
      />
      <CustomButton
        onPress={() => onChangeTab(1)}
        text="Opening hours"
        type={page==1 ? 'PRIMARY' : 'TERTIARY'}
      />
      <CustomButton
        onPress={() => onChangeTab(2)}
        text="Payment history"
        type={page==2 ? 'PRIMARY' : 'TERTIARY'}
      />
      <CustomButton
        onPress={() => onChangeTab(3)}
        text="Transaction ledger"
        type={page==3 ? 'PRIMARY' : 'TERTIARY'}
      />
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
