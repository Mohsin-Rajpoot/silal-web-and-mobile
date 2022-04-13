import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import Current_orders from './Current/Current_orders';
import Pre_orders from './Pre_orders';
import Archive_orders from './Archive/Archive_orders';
import PagerView from 'react-native-pager-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import CommonTab from '../../components/CommonTab';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';

import colors from '@SilalApp/common/assets/colors/index';
import fonts from '@SilalApp/common/assets/fonts/index';
import DaySelect from '../../components/DaySelection';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import Timer from '../../components/Timer';
import Toast from 'react-native-easy-toast';
import CustomText from '@SilalApp/common/components/CustomText';
const Order = ({navigation}) => {
  const {t} = useTranslation();
  const toastRef = useRef();
  // const [Statistic, setStatistic] = useState(true);
  // const [Reviews, setReviews] = useState(false);
  // const [Outofstock, setOutofstack] = useState(false);
  // const [order_state, set_order_state] = useState('current');
  // const [current_order_state, set_current_order_state] = useState(true);
  // const [pre_order_state, set_pre_order_state] = useState(false);
  // const [archive_order_state, set_archive_order_state] = useState(false);
  const [modal, setModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [order_state, set_order_state] = useState('current');
  const [activeShift, setActiveShift] = useState(false);
  const [shiftModal, setShiftModal] = useState(activeShift);
  const ref = useRef(null);
  const tabs = ['Current orders', 'Pre-orders', 'Archive'];
  const [page, setPage] = useState(0);
  const onChangeTab = page => {
    ref?.current?.setPageWithoutAnimation(page);
    setPage(page);
  };

  // const tabclick = (x_value, state) => {
  //   scrollref.current.scrollTo({x: width * x_value});
  //   if (x_value == '0') {
  //     set_current_order_state(true);
  //     set_archive_order_state(false);
  //     set_pre_order_state(false);
  //   } else if (x_value == '1') {
  //     set_current_order_state(false);
  //     set_pre_order_state(true);
  //     set_archive_order_state(false);
  //   } else if (x_value == '2') {
  //     set_current_order_state(false);
  //     set_pre_order_state(false);
  //     set_archive_order_state(true);
  //   }
  // };
  const Header = () => {
    return (
      // <View style={{ paddingVertical: 15,flex:1, flexDirection: 'row',}}>
      //   <TouchableOpacity onPress={()=>set_order_state('current')}  style={[styles.order_button,{backgroundColor:order_state=='current'? '#5AB3A8':null,width:200}]}>
      //     <Text style={[styles.order_button_text,{color:order_state=='current'?'white':'#4C6870'}]}>Current orders</Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity onPress={()=>set_order_state('preorder')}  style={[styles.order_button,{backgroundColor:order_state=='preorder'? '#5AB3A8':null,width:200}]}>
      //     <Text style={[styles.order_button_text,{color:order_state=='preorder'?'white':'#4C6870'}]}>Pre-orders <Text style={{color:'#CCD4D6',}}>(8)</Text></Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity onPress={()=>set_order_state('archive')}  style={[styles.order_button,{backgroundColor:order_state=='archive'? '#5AB3A8':null,width:120}]}>
      //     <Text style={[styles.order_button_text,{color:order_state=='archive'?'white':'#4C6870'}]}>Archive</Text>
      //   </TouchableOpacity>
      // </View>
      <View
        style={{
          paddingVertical: 15,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <CommonTab tabs={tabs} page={page} onChangeTab={onChangeTab} />
        <View style={styles.sideTabContainer}>
          <View style={styles.tabNewItemsContainer}>
            <Icon
              name="pluscircle"
              type="antdesign"
              size={18}
              color={colors.primary}
            />
            <Text style={styles.noteText}>{t('Note')}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setModal(!modal)}>
            <View style={styles.tabNewItemsContainer}>
              <Icon
                name="timer"
                type="material-community"
                size={18}
                color={colors.primary}
              />
              <Text style={styles.noteText}>40 MIN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setContactModal(!contactModal)}>
            <View style={styles.tabNewItemsContainer}>
              <Icon
                name="exclamationcircle"
                type="antdesign"
                size={18}
                color={colors.textPrimaryBlur}
                style={styles.cautionIcon}
              />
            </View>
          </TouchableOpacity>
          <DaySelect
            day={t('Start_shift')}
            containerStyle={styles.shiftContainer}
            buttonSize={'large'}
            textStyle={styles.textStyleShift}
            activelabel={t('End_shift')}
            state={activeShift}
            setState={setActiveShift}
          />
        </View>
        {/* <TouchableOpacity
          onPress={() => tabclick('0', 'current')}
          style={[
            styles.order_button,
            {
              backgroundColor: current_order_state == true ? '#5AB3A8' : null,
              width: 200,
            },
          ]}>
          <Text
            style={[
              styles.order_button_text,
              {color: current_order_state == true ? 'white' : '#4C6870'},
            ]}>
            {t('current-order')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => tabclick('1', 'preorder')}
          style={[
            styles.order_button,
            {
              backgroundColor: pre_order_state == true ? '#5AB3A8' : null,
              width: 200,
            },
          ]}>
          <Text
            style={[
              styles.order_button_text,
              {color: pre_order_state == true ? 'white' : '#4C6870'},
            ]}>
            {t('pre-orders')} <Text style={{color: '#CCD4D6'}}>(8)</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => tabclick('2', 'archive')}
          style={[
            styles.order_button,
            {
              backgroundColor: archive_order_state == true ? '#5AB3A8' : null,
              width: 120,
            },
          ]}>
          <Text
            style={[
              styles.order_button_text,
              {color: archive_order_state == true ? 'white' : '#4C6870'},
            ]}>
            {t('Archive')}
          </Text>
        </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#f4f7f8', flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center', height: '15%'}}>
        <View style={{padding: 15}}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.openDrawer()}>
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
      <View style={{flex: 1}}>
        <PagerView
          style={{flex: 1}}
          initialPage={0}
          scrollEnabled={true}
          ref={ref}>
          <View key={'1'}>
            <Current_orders title="Received" navigation={navigation} />
          </View>
          <View key={'2'}>
            <Pre_orders />
          </View>
          <View key={'3'}>
            <Archive_orders />
          </View>
        </PagerView>
      </View>
      <CustomModal
        isModalVisible={modal}
        setModalVisible={setModal}
        modalWrapperStyle={{
          marginHorizontal: width(30),
          marginVertical: height(30),
          justifyContent: 'center',
        }}
        modalContainerStyle={{
          borderRadius: 2,
          backgroundColor: 'white',
        }}>
        <Timer label={t('deliveryEstimateTime')} />
      </CustomModal>
      <CustomModal
        isModalVisible={contactModal}
        setModalVisible={setContactModal}
        modalWrapperStyle={{
          marginHorizontal: width(30),
          marginVertical: height(32),
        }}
        modalContainerStyle={{
          borderRadius: 2,
          backgroundColor: 'white',
        }}>
        <View style={{marginHorizontal: 10}}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setContactModal(false)}>
            <Icon
              name="cross"
              type="entypo"
              size={24}
              style={{alignSelf: 'flex-end'}}
            />
          </TouchableOpacity>
          <View>
            <CustomText
              label={t('Customer_Support')}
              textStyle={styles.headingCustomerSupport}
            />
            <CustomText
              label={t('Customer_SupportDetail')}
              textStyle={styles.headingCustomerSupportDetail}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 25}}>
              <View style={styles.maiLContainer}>
                <Icon
                  name="mail"
                  type="entypo"
                  size={26}
                  color={colors.primary}
                />
              </View>
              <View style={{marginHorizontal: 10}}>
                <CustomText label={t('email')} textStyle={styles.mailText} />
                <CustomText
                  label={'customer.suppor@silal.com'}
                  textStyle={styles.mail}
                />
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row', marginTop: 25}}>
                <View style={styles.maiLContainer}>
                  <Icon
                    name="phone"
                    type="fontawesome"
                    size={26}
                    color={colors.primary}
                  />
                </View>
                <View style={{marginHorizontal: 10}}>
                  <CustomText
                    label={t('Contact_number')}
                    textStyle={styles.mailText}
                  />
                  <CustomText
                    label={'(202) 398 0202'}
                    textStyle={styles.mail}
                  />
                  <CustomText
                    label={'(202) 398 0202'}
                    textStyle={styles.mail}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </CustomModal>
      <CustomModal
        isModalVisible={activeShift}
        setModalVisible={setActiveShift}>
        <Text>EHllo wjkhadbj</Text>
      </CustomModal>
    </SafeAreaView>
  );
};
export default Order;
const styles = StyleSheet.create({
  WhiteDive: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  maiLContainer: {
    width: 45,
    height: 45,
    backgroundColor: colors.primaryBlur,
    justifyContent: 'center',
    borderRadius: 5,
  },
  mailText: {
    fontSize: 13,
    fontFamily: fonts.bold,
    color: colors.black,
    textTransform: 'uppercase',
  },
  mail: {
    fontSize: 13,
    fontFamily: fonts.LatoMedium,
    color: colors.sidebar,
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
  cautionIcon: {
    transform: [{rotate: '180deg'}],
  },
  headingCustomerSupport: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  headingCustomerSupportDetail: {
    fontSize: 16,
    fontFamily: fonts.LatoMedium,
    color: colors.black,
  },
  shiftContainer: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  sideTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '61%',
    justifyContent: 'flex-end',
  },
  noteText: {
    fontSize: 13,
    fontFamily: fonts.LatoBold,
    color: colors.primary,
    marginHorizontal: 8,
    textTransform: 'uppercase',
  },
  tabNewItemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.textWhite,
    borderRadius: 8,
    padding: 5,
    marginHorizontal: 5,
    borderColor: colors.borderColor1,
    borderWidth: 1,
  },
  titleInWhiteDiv: {
    fontFamily: 'Poppins-Medium',
    color: '#4C6870',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  textStyleShift: {
    fontSize: 16,
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
    width: '100%',
    marginHorizontal: 15,
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
    // backgroundColor:'red',
    padding: 10,
  },
});
