import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  CustomButton,
  LockOnLandscape,
} from '@SilalApp/common/components/native';
import Svg, {Path, Rect} from 'react-native-svg';
import OutOfStack from './molecules/OutOfStack';
import StatisticsView from './molecules/Statistics';
import ReviewView from './molecules/Reviews';
import CommonTab from '../../components/CommonTab';
import PagerView from 'react-native-pager-view';
const Home = ({navigation}) => {
  const [Statistic, setStatistic] = useState(true);
  const [Reviews, setReviews] = useState(false);
  const [Outofstock, setOutofstack] = useState(false);
  const ref = useRef(null);
  const tabs = ['Statistics', 'Reviews', 'Out-of-Stock'];
  const [page, setPage] = useState(0);
  const onChangeTab = page => {
    ref?.current?.setPageWithoutAnimation(page);
    setPage(page);
  };
  return (
    <SafeAreaView style={{flex:1}}>
      <LockOnLandscape />
      <View style={{flexDirection: 'row'}}>
        <View style={{padding: 15}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons
              name="reorder-horizontal"
              size={20}
              style={{marginLeft: 10, marginTop: 10}}
              color={'#000000'}
            />
          </TouchableOpacity>
        </View>
        <CommonTab tabs={tabs} page={page} onChangeTab={onChangeTab} />
        {/* <View style={{padding: 15, flexDirection: 'row'}}>
          <CustomButton
            onPress={() => onCurrentOrder(0)}
            text="Statistics"
            type={Statistic ? 'PRIMARY' : 'TERTIARY'}
          />
          <CustomButton
            onPress={() => onCurrentOrder(1)}
            text="Reviews"
            type={Reviews ? 'PRIMARY' : 'TERTIARY'}
          />
          <CustomButton
            onPress={() => onCurrentOrder(2)}
            text="Out-of-stock"
            type={Outofstock ? 'PRIMARY' : 'TERTIARY'}
          />
        </View> */}
        {/* {Statistic ? (
          <View
            style={{
              position: 'absolute',
              right: 22,
              marginVertical: 30,
              marginHorizontal: 20,
            }}>
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Rect width="24" height="24" fill="#F4F7F8" />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.48502 17.67C6.67074 17.8558 6.89126 18.0032 7.13396 18.1038C7.37667 18.2043 7.6368 18.2561 
            7.89952 18.2561C8.16223 18.2561 8.42237 18.2043 8.66507 18.1038C8.90777 18.0032 9.12829 17.8558 9.31402 
            17.67L6.48502 14.84C6.29906 15.0257 6.15155 15.2463 6.0509 15.4891C5.95025 15.7319 5.89844 15.9922 5.89844 
            16.255C5.89844 16.5178 5.95025 16.7781 6.0509 17.0209C6.15155 17.2637 6.29906 17.4843 6.48502 17.67ZM11.382 
            5.479L10.657 6.204C9.87502 6.986 8.44702 8.017 7.45102 8.515L4.43402 10.024C3.93902 10.272 3.85002 10.798 
            4.24702 11.195L12.803 19.751C13.201 20.147 13.725 20.064 13.974 19.563L15.484 16.547C15.978 15.559 17.01 
            14.127 17.795 13.341L18.52 12.615C19.3432 11.7918 19.8567 10.7094 19.9733 9.55112C20.0899 8.3928 19.8026 
            7.22976 19.16 6.259C19.2676 6.17284 19.3563 6.06558 19.4209 5.94382C19.4854 5.82206 19.5243 5.68839 19.5353 
            5.55103C19.5462 5.41366 19.5289 5.27551 19.4845 5.14507C19.44 5.01463 19.3694 4.89467 19.2768 4.79256C19.1843 
            4.69046 19.0719 4.60837 18.9464 4.55134C18.821 4.49432 18.6852 4.46357 18.5474 4.46099C18.4096 4.45841 18.2728 
            4.48405 18.1453 4.53633C18.0178 4.58862 17.9023 4.66644 17.806 4.765C17.783 4.79 17.76 4.814 17.74 4.84C16.9135 
            4.29196 15.9437 3.99978 14.952 4C14.289 3.99921 13.6323 4.12937 13.0196 4.383C12.407 4.63663 11.8505 5.00875 11.382 
            5.478V5.479Z"
                fill="#4C6870"
              />
            </Svg>
          </View>
        ) : null} */}
      </View>
      <View style={{flex:1}}>
        <PagerView
          style={{flex: 1}}
          initialPage={0}
          scrollEnabled={true}
          ref={ref}>
          <View key={'1'} >
            <StatisticsView />
          </View>
          <View key={'2'}>
            <ReviewView />
          </View>
          <View key={'3'}>
            <OutOfStack />
          </View>
        </PagerView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
