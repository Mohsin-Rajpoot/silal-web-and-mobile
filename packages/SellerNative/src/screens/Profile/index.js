import {StyleSheet, Text, View} from 'react-native';
import React, {useRef,useState} from 'react';
import Header from './moleclues/Header';
import Tabs from './moleclues/Tabs';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import PagerView from 'react-native-pager-view';
import ProfileTab from './Tabs/ProfileTab';
import OpenTab from './Tabs/OpenTab';
const Profile = () => {
  const ref = useRef(null);
  const tabs=["Profile","Opening hours","Payment history","Transaction ledger"]
  const [page, setPage] = useState(0)
  const onChangeTab = page => {
    ref?.current?.setPageWithoutAnimation(page);
    setPage(page)
  };
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Tabs tabs={tabs}  page={page} onChangeTab={onChangeTab} />
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
      </PagerView>
    </View>
  );
};

export default Profile;

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: '15@s',
    backgroundColor: colors.profileBackground,
  },
});
