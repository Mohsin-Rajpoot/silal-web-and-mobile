import React, {useRef, useState} from 'react';
import Header from './moleclues/Header';
import Tabs from './moleclues/Tabs';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import PagerView from 'react-native-pager-view';
import ProfileTab from './Tabs/ProfileTab';
import OpenTab from './Tabs/OpenTab';
import PaymentTab from './Tabs/Payment';
import TransactionTab from './Tabs/Transaction';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
const Profile = ({navigation}) => {
  const {t} = useTranslation();
  const ref = useRef(null);
  const tabs = [
    'Profile',
    'Opening_hours',
    'payment_history',
    'Transaction_ledger',
  ];
  const [page, setPage] = useState(0);
  const onChangeTab = page => {
    ref?.current?.setPageWithoutAnimation(page);
    setPage(page);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header label={t('Profile')} onPress={() => navigation.openDrawer()} />
      <Tabs tabs={tabs} page={page} onChangeTab={onChangeTab} />
      <PagerView
        style={{flex: 1}}
        initialPage={0}
        scrollEnabled={false}
        ref={ref}>
        <View key={'1'}>
          <ProfileTab />
        </View>
        <View key={'2'}>
          <OpenTab />
        </View>
        <View key={'3'}>
          <PaymentTab />
        </View>
        <View key={'4'}>
          <TransactionTab />
        </View>
      </PagerView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.profileBackground,
    width:"100%",
    alignSelf:"center"
  },
});
