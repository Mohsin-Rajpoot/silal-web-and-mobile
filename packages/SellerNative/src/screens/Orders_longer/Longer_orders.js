import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Current_orders from './../orders/Current/Current_orders';
import Pre_orders from './../orders/Pre_orders';
import Acceptance_orders from '../Orders_longer/Acceptance_orders';
import Pickup_orders from './Pickup_orders';
import PreparingOrders from './Preparing';
// import LockOnLandscape from '../../components/Dashboard/LockOnLandscape';
import {useTranslation} from 'react-i18next';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import TitleHeading from '../components/TitleHeading';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {acc} from 'react-native-reanimated';
// import LockOnLandscape from '../components/Dashboard/LockOnLandscape';
// import StatisticWhiteBoxTitle from '../components/StatisticWhiteBoxTitle';
const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  const {t} = useTranslation();
  const [Statistic, setStatistic] = useState(true);
  const [Reviews, setReviews] = useState(false);
  const [Outofstock, setOutofstack] = useState(false);
  const [acceptance_order_state, set_acceptance_order_state] = useState(true);
  const [pickup_order_state, set_pickup_order_state] = useState(false);
  const [preparing, setPreparing] = useState(false);

  const scrollref = useRef();

  const tabclick = (x_value, state) => {
    scrollref.current.scrollTo({x: width * x_value});
    if (x_value == '0') {
      set_acceptance_order_state(true);
      set_pickup_order_state(false);
      setPreparing(false)
    } else if (x_value == '1') {
      set_acceptance_order_state(false);
      set_pickup_order_state(false);
      setPreparing(true);
    } else if (x_value == '2') {
      set_acceptance_order_state(false);
      set_pickup_order_state(true);
      setPreparing(false)
    }
  };
  const Header = () => {
    return (
      <View style={{paddingVertical: 15, flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => tabclick('0')}
          style={[
            styles.order_button,
            {
              backgroundColor:
                acceptance_order_state == true ? '#5AB3A8' : null,
              width: 250,
            },
          ]}>
          <Text
            style={[
              styles.order_button_text,
              {color: acceptance_order_state == true ? 'white' : '#4C6870'},
            ]}>
            {t('Awaiting_acceptence')} (8)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => tabclick('1')}
          style={[
            styles.order_button,
            {
              backgroundColor: preparing == true ? '#5AB3A8' : null,
              width: 250,
            },
          ]}>
          <Text
            style={[
              styles.order_button_text,
              {color: preparing == true ? 'white' : '#4C6870'},
            ]}>
            {t('preparing')} (2)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => tabclick('2')}
          style={[
            styles.order_button,
            {
              backgroundColor: pickup_order_state == true ? '#5AB3A8' : null,
              width: 250,
            },
          ]}>
          <Text
            style={[
              styles.order_button_text,
              {color: pickup_order_state == true ? 'white' : '#4C6870'},
            ]}>
            {t('waiting_for_pickup')} (2)
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#f4f7f8', flex: 1}}>
      {/* <LockOnLandscape /> */}
      <View style={{flexDirection: 'row', alignItems: 'center', height: '15%'}}>
        <View style={{padding: 15}}>
          <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.openDrawer()}>
            <MaterialCommunityIcons
              name="reorder-horizontal"
              size={20}
              style={{marginLeft: 10}}
              color={'#000000'}
            />
          </TouchableOpacity>
        </View>

        {Header()}
      </View>

      {/* {order_state=='acceptance'?
        <Acceptance_orders navigation={navigation}/>
        :
        order_state=='pickup'?
        <Pickup_orders navigation={navigation}/>
        :
        null
        } */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        ref={scrollref}
        horizontal
        scrollEnabled={false}
        style={{flex:1}}
        >
        <View style={{width: width, height: '100%'}}>
          <Acceptance_orders navigation={navigation} />
        </View>
        <View style={{width: width, height: '100%'}}>
          <PreparingOrders navigation={navigation} />
        </View>
        <View style={{width: width, height: '100%'}}>
          <Pickup_orders navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  WhiteDive: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  ImgeViewBKG: {
    height: 50,
    width: 50,
    backgroundColor: '#E3FCEF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CurrencyImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  titleInWhiteDiv: {
    fontFamily: 'Poppins-Medium',
    color: '#4C6870',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  PercentageBkgGreen: {
    backgroundColor: '#E3FCEF',
    height: 20,
    width: 70,
    borderRadius: 5,
    marginTop: 10,
  },
  TextInGreenDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  order_button: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 15,
    height: 50,
    marginVertical: 5,
    alignSelf: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  order_button_text: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    letterSpacing: 1,
  },
  order_container: {
    // flexDirection:'row',
  },
});
