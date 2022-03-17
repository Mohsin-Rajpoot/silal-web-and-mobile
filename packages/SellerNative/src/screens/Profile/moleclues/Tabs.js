import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomButton} from '@SilalApp/common/components/native';
const Tabs = () => {
  return (
    <View style={{ flexDirection: 'row'}}>
      <CustomButton
        onPress={() => {}}
        text="Profile"
        type={true ? 'PRIMARY' : 'TERTIARY'}
      />
      <CustomButton
        onPress={() => onCurrentOrder(1)}
        text="Opening hours"
        type={false ? 'PRIMARY' : 'TERTIARY'}
      />
      <CustomButton
        onPress={() => onCurrentOrder(2)}
        text="Payment history"
        type={false ? 'PRIMARY' : 'TERTIARY'}
      />
      <CustomButton
        onPress={() => onCurrentOrder(2)}
        text="Transaction ledger"
        type={false ? 'PRIMARY' : 'TERTIARY'}
      />
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
