import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {useTranslation} from 'react-i18next';
const RenewOffer = () => {
  const {t} = useTranslation();
  return (
    <View>
      <Header
        showIcon
        title={t('renewOffer')}
        dostIcon={true}
        goBack={() => navigation.pop()}
      />
    </View>
  );
};

export default RenewOffer;

const styles = StyleSheet.create({});
