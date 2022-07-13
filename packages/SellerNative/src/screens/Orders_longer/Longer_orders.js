import React, {useState, useRef} from 'react';
import {View, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import Acceptance_orders from '../Orders_longer/Acceptance_orders';
import Pickup_orders from './Pickup_orders';
import PreparingOrders from './Preparing';
import {useTranslation} from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@SilalApp/common/assets/colors';
import CommonTab from '../../components/CommonTab';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import {scale, verticalScale} from 'react-native-size-matters';
import PagerView from 'react-native-pager-view';
import {ScaledSheet} from 'react-native-size-matters';

const Longer_orders = ({navigation}) => {
  const {t} = useTranslation();

  const tabs = ['awaitingAcceptance', !IsTablet ? "" :'accepted', 'waiting_for_pickup'];
  const [page, setPage] = useState(0);
  const onChangeTab = page => {
    ref?.current?.setPageWithoutAnimation(page);
    setPage(page);
  };
  const ref = useRef(null);

  const Header = () => {
    return (
      <View
        style={{
          paddingVertical: verticalScale(5),
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginHorizontal: scale(15)}}>
          <CommonTab tabs={tabs} page={page} onChangeTab={onChangeTab} />
        </ScrollView>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: '#f4f7f8', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: '10%',
          backgroundColor: colors.background,
        }}>
        <View style={{paddingLeft: scale(10)}}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{marginTop: verticalScale(6)}}
            onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons
              name="reorder-horizontal"
              size={verticalScale(25)}
              style={{marginLeft: scale(10)}}
              color={colors.black50}
            />
          </TouchableOpacity>
        </View>

        {Header()}
      </View>
      <View style={{flex: 1}}>
        <PagerView
          style={{flex: 1}}
          initialPage={0}
          scrollEnabled={true}
          ref={ref}>
          <View key={'1'}>
            <Acceptance_orders  navigation={navigation} />
          </View>
          {!IsTablet ? (
            <View />
          ) : (
            <View key={'2'}>
              <PreparingOrders  navigation={navigation} />
            </View>
          )}
          <View key={'3'}>
            <Pickup_orders  navigation={navigation} />
          </View>
        </PagerView>
      </View>
    </SafeAreaView>
  );
};
export default Longer_orders;
const styles = ScaledSheet.create({});
