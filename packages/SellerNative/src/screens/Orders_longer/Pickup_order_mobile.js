import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Input from '@SilalApp/common/components/native/TextInput/index';
import {useTranslation} from 'react-i18next';
import CustomText from '@SilalApp/common/components/CustomText';
import {ScaledSheet, verticalScale, scale} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
import colors from '@SilalApp/common/assets/colors';
import images from '../../../assets/images';
import OrderItem from '../orders/Archive/molecules/OrderItem';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import {Icon} from 'react-native-elements';
import OpenModal from './molecules/OpenModal';
import CustomButton from '@SilalApp/common/components/native/CustomButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function Pickup_order_mobile({navigation,route}) {
  console.log(navigation);
  const {t} = useTranslation();
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [filter, setFilter] = useState(false);
  const [method, setMethod] = useState(false);
  const [order, setOrder] = useState(false);
  const [allMethod, setAllMethod] = useState(0);
  const [allOrder, setAllOrder] = useState(0);
  const [calendar, setCalendar] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  const methodArray = [t('allMethods'), t('Delivery'), t('Pickup')];
  const orderArray = [
    t('all-orders'),
    <View style={[styles.pendingCont, {backgroundColor: colors.blueDark}]}>
      <CustomText
        fontSize={11}
        fontFamily={fonts.LatoMedium}
        color={colors.textWhite}
        label={t('waiting_for_pickup')}
      />
    </View>,
    <View style={styles.pendingCont}>
      <CustomText
        fontSize={11}
        fontFamily={fonts.LatoMedium}
        color={colors.textWhite}
        label={t('Pending')}
      />
    </View>,
  ];
  const dataArray = [
    {
      id: 1,
      orderId: '#723DN2',
      customerName: 'Leslie A.',
      date: '12.11.2021 14:18',
      item: '2',
      totalPrice: '$ 129.00',
      rightIconPress: () => {
        
        navigation.navigate('TabStack', {
          screen: 'OrderStack',
          params: {screen: 'LongOrderDetails', params:{waiting:true}},
        });
      },
    },
    {
      id: 2,
      orderId: '#723DN2',
      customerName: 'Leslie A.',
      date: '12.11.2021 14:18',
      item: '2',
      totalPrice: '$ 129.00',
      rightIconPress: () =>
        navigation.navigate('TabStack', {
          screen: 'OrderStack',
          params: {screen: 'LongOrderDetails'},
        }),
    },
    {
      id: 3,
      orderId: '#723DN2',
      customerName: 'Leslie A.',
      date: '12.11.2021 14:18',
      item: '2',
      totalPrice: '$ 129.00',
      rightIconPress: () =>
        navigation.navigate('TabStack', {
          screen: 'OrderStack',
          params: {screen: 'LongOrderDetails'},
        }),
    },
    {
      id: 4,
      orderId: '#723DN2',
      customerName: 'Leslie A.',
      date: '12.11.2021 14:18',
      item: '2',
      totalPrice: '$ 129.00',
      rightIconPress: () =>
        navigation.navigate('TabStack', {
          screen: 'OrderStack',
          params: {screen: 'LongOrderDetails'},
        }),
    },
    {
      id: 5,
      orderId: '#723DN2',
      customerName: 'Leslie A.',
      date: '12.11.2021 14:18',
      item: '2',
      totalPrice: '$ 129.00',
      rightIconPress: () =>
        navigation.navigate('TabStack', {
          screen: 'OrderStack',
          params: {screen: 'LongOrderDetails'},
        }),
    },
    {
      id: 6,
      orderId: '#723DN2',
      customerName: 'Leslie A.',
      date: '12.11.2021 14:18',
      item: '2',
      totalPrice: '$ 129.00',
      rightIconPress: () =>
        navigation.navigate('TabStack', {
          screen: 'OrderStack',
          params: {screen: 'LongOrderDetails'},
        }),
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <CustomText
        label={t('orders')}
        fontSize={22}
        fontFamily={fonts.bold}
        marginBottom={verticalScale(10)}
      />
      <View style={styles.inputContainer}>
        <View style={{width: '82%'}}>
          <Input
            onPress={() => setKeyboardStatus(true)}
            inputStyle={[
              styles.inputStyle,
              {
                borderColor: keyboardStatus
                  ? colors.primary
                  : colors.borderColor,
              },
            ]}
            inputTextStyle={{fontSize: verticalScale(13)}}
            search
            placeholderText={t('Search')}
          />
        </View>
        {keyboardStatus ? (
          <TouchableOpacity onPress={() => setKeyboardStatus(false)}>
            <CustomText
              fontSize={15}
              fontFamily={fonts.LatoMedium}
              label="Cancel"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setFilter(true)}
            activeOpacity={0.6}
            style={styles.filterContainer}>
            <Image style={styles.filterIcon} source={images.filterIcon} />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {dataArray.map((item, index) => {
          return (
            <OrderItem
              key={item.id}
              rightIconChange
              waiting
              orderId={item.orderId}
              customerName={item.customerName}
              item={item.item}
              date={item.date}
              totalPrice={item.totalPrice}
              rightIconPress={item.rightIconPress}
            />
          );
        })}
        {filter && (
          <CustomModal
            isModalVisible={filter}
            setModalVisible={setFilter}
            modalContainerStyle={{
              padding: 0,
              margin: 0,
              paddingHorizontal: scale(15),
              overflow: 'hidden',
              borderRadius: 20,
              backgroundColor: colors.gray20,
            }}
            modalWrapperStyle={{
              marginTop: '80%',
              marginHorizontal: 0,
              marginVertical: 0,
              backgroundColor: colors.gray20,
            }}>
            <View style={{width: '100%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View />
                <CustomText
                  label={t('filters')}
                  color={colors.black50}
                  fontSize={17}
                  fontFamily={fonts.LatoBold}
                />
                <TouchableOpacity onPress={() => setFilter(false)}>
                  <Icon
                    type="entypo"
                    name="cross"
                    color={colors.textPrimaryBlur}
                    size={verticalScale(22)}
                  />
                </TouchableOpacity>
              </View>
              <CustomText
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                marginBottom={verticalScale(8)}
                marginTop={verticalScale(15)}
                label={t('receivingMethod')}
              />
              <OpenModal
                text={
                  allMethod == 0
                    ? methodArray[0]
                    : allMethod == 1
                    ? methodArray[1]
                    : allMethod == 2
                    ? methodArray[2]
                    : null
                }
                color={allMethod == 0 && colors.gray50}
                onPress={() => {
                  setMethod(true);
                  setFilter(false);
                }}
              />
              <CustomText
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                marginBottom={verticalScale(8)}
                marginTop={verticalScale(15)}
                label={t('Status')}
              />
              <OpenModal
                text={
                  allOrder == 0
                    ? orderArray[0]
                    : allOrder == 1
                    ? orderArray[1]
                    : allOrder == 2
                    ? orderArray[2]
                    : null
                }
                color={allOrder == 0 && colors.gray50}
                onPress={() => {
                  setOrder(true);
                  setFilter(false);
                }}
              />
              <CustomText
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                marginBottom={verticalScale(8)}
                marginTop={verticalScale(15)}
                label={t('date_range')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '48%'}}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                      setCalendar(true);
                      setFilter(false);
                    }}
                    style={styles.calendarCont}>
                    <Icon
                      type="font-awesome-5"
                      color={colors.textPrimaryBlur}
                      size={verticalScale(15)}
                      name="calendar-alt"
                    />
                    <CustomText
                      label="16 November"
                      color={colors.textPrimaryBlur}
                      fontSize={15}
                      fontFamily={fonts.LatoMedium}
                      marginLeft={scale(8)}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{width: '48%'}}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                      setCalendar(true);
                      setFilter(false);
                    }}
                    style={styles.calendarCont}>
                    <Icon
                      type="font-awesome-5"
                      color={colors.textPrimaryBlur}
                      size={verticalScale(15)}
                      name="calendar-alt"
                    />
                    <CustomText
                      label="17 January"
                      color={colors.textPrimaryBlur}
                      fontSize={15}
                      fontFamily={fonts.LatoMedium}
                      marginLeft={scale(8)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <CustomButton
                textStyle={styles.btnText}
                text={t('Apply')}
                containerStyle={styles.btn}
              />
            </View>
          </CustomModal>
        )}
        {method && (
          <CustomModal
            isModalVisible={method}
            setModalVisible={setMethod}
            modalContainerStyle={{
              padding: 0,
              margin: 0,
              paddingHorizontal: scale(15),
              overflow: 'hidden',
              borderRadius: 20,
              backgroundColor: colors.gray20,
            }}
            modalWrapperStyle={{
              marginTop: '140%',
              marginHorizontal: 0,
              marginVertical: 0,
              backgroundColor: colors.gray20,
            }}>
            <View style={{width: '100%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View />
                <CustomText
                  label={t('receivingMethod')}
                  color={colors.black50}
                  fontSize={17}
                  fontFamily={fonts.LatoBold}
                />
                <TouchableOpacity
                  onPress={() => {
                    setMethod(false);
                    setFilter(true);
                  }}>
                  <Icon
                    type="entypo"
                    name="cross"
                    color={colors.textPrimaryBlur}
                    size={verticalScale(22)}
                  />
                </TouchableOpacity>
              </View>
              <CustomText
                fontSize={15}
                fontFamily={fonts.LatoBold}
                color={colors.primary}
                marginTop={verticalScale(15)}
                label={t('allMethods')}
              />
              <View style={styles.divider} />
              <TouchableOpacity
                onPress={() => {
                  setAllMethod(1);
                  setMethod(false);
                  setFilter(true);
                }}
                activeOpacity={0.6}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <CustomText
                  fontSize={15}
                  fontFamily={fonts.LatoMedium}
                  color={colors.black50}
                  label={t('Delivery')}
                />
                {allMethod == 1 && (
                  <Icon
                    type="antdesign"
                    name="check"
                    size={20}
                    color={colors.primary}
                  />
                )}
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity
                onPress={() => {
                  setAllMethod(2);
                  setMethod(false);
                  setFilter(true);
                }}
                activeOpacity={0.6}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <CustomText
                  fontSize={15}
                  fontFamily={fonts.LatoMedium}
                  color={colors.black50}
                  label={t('Pickup')}
                />
                {allMethod == 2 && (
                  <Icon
                    type="antdesign"
                    name="check"
                    size={20}
                    color={colors.primary}
                  />
                )}
              </TouchableOpacity>
              <View style={{height: verticalScale(40)}} />
            </View>
          </CustomModal>
        )}
        {order && (
          <CustomModal
            isModalVisible={order}
            setModalVisible={setOrder}
            modalContainerStyle={{
              padding: 0,
              margin: 0,
              paddingHorizontal: scale(15),
              overflow: 'hidden',
              borderRadius: 20,
              backgroundColor: colors.gray20,
            }}
            modalWrapperStyle={{
              marginTop: '140%',
              marginHorizontal: 0,
              marginVertical: 0,
              backgroundColor: colors.gray20,
            }}>
            <View style={{width: '100%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View />
                <CustomText
                  label={t('Status')}
                  color={colors.black50}
                  fontSize={17}
                  fontFamily={fonts.LatoBold}
                />
                <TouchableOpacity
                  onPress={() => {
                    setOrder(false);
                    setFilter(true);
                  }}>
                  <Icon
                    type="entypo"
                    name="cross"
                    color={colors.textPrimaryBlur}
                    size={verticalScale(22)}
                  />
                </TouchableOpacity>
              </View>
              <CustomText
                fontSize={15}
                fontFamily={fonts.LatoBold}
                color={colors.primary}
                marginTop={verticalScale(15)}
                label={t('allMethods')}
              />
              <View style={styles.divider} />
              <TouchableOpacity
                onPress={() => {
                  setOrder(false);
                  setFilter(true);
                  setAllOrder(1);
                }}
                activeOpacity={0.6}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={[
                    styles.pendingCont,
                    {backgroundColor: colors.blueDark},
                  ]}>
                  <CustomText
                    fontSize={11}
                    fontFamily={fonts.LatoMedium}
                    color={colors.textWhite}
                    label={t('waiting_for_pickup')}
                  />
                </View>
                {allOrder == 1 && (
                  <Icon
                    type="antdesign"
                    name="check"
                    size={20}
                    color={colors.primary}
                  />
                )}
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity
                onPress={() => {
                  setOrder(false);
                  setFilter(true);
                  setAllOrder(2);
                }}
                activeOpacity={0.6}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.pendingCont}>
                  <CustomText
                    fontSize={11}
                    fontFamily={fonts.LatoMedium}
                    color={colors.textWhite}
                    label={t('Pending')}
                  />
                </View>
                {allOrder == 2 && (
                  <Icon
                    type="antdesign"
                    name="check"
                    size={20}
                    color={colors.primary}
                  />
                )}
              </TouchableOpacity>
              <View style={{height: verticalScale(40)}} />
            </View>
          </CustomModal>
        )}
        {calendar && (
          <CustomModal
            isModalVisible={calendar}
            setModalVisible={setCalendar}
            modalContainerStyle={{
              padding: 0,
              margin: 0,
              paddingHorizontal: scale(15),
              overflow: 'hidden',
              borderRadius: 20,
              backgroundColor: colors.textWhite,
            }}
            modalWrapperStyle={{
              marginTop: '70%',
              marginHorizontal: 0,
              marginVertical: 0,
              backgroundColor: colors.textWhite,
            }}>
            <View style={{width: '100%'}}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={() => {
                  setCalendar(false);
                  setFilter(true);
                }}>
                <Icon
                  type="entypo"
                  name="cross"
                  color={colors.textPrimaryBlur}
                  size={verticalScale(18)}
                />
              </TouchableOpacity>
              <View style={{height: verticalScale(300)}}>
                <Calendar />
              </View>
              <View style={{height: verticalScale(10)}} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.thisWeekCont}>
                  <CustomText
                    label={t('this_week')}
                    fontFamily={fonts.LatoMedium}
                    fontSize={15}
                    color={colors.primary}
                  />
                </View>
                <View style={styles.thisWeekCont}>
                  <CustomText
                    label={t('Past week')}
                    fontFamily={fonts.LatoMedium}
                    fontSize={15}
                    color={colors.primary}
                  />
                </View>
                <View style={styles.thisWeekCont}>
                  <CustomText
                    label={t('this_month')}
                    fontFamily={fonts.LatoMedium}
                    fontSize={15}
                    color={colors.primary}
                  />
                </View>
              </View>
              <CustomButton
                textStyle={{fontSize: verticalScale(13)}}
                text={t('Apply')}
                containerStyle={styles.applyBtn}
              />
            </View>
          </CustomModal>
        )}
      </ScrollView>
    </View>
  );
}
const styles = ScaledSheet.create({
  mainContainer: {
    paddingHorizontal: '15@s',
    backgroundColor: colors.background,
    flex: 1,
  },
  inputContainer: {
    height: '40@vs',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '10@vs',
  },
  inputStyle: {
    backgroundColor: colors.textWhite,
    borderWidth: 1,
    height: '100%',
    borderRadius: '8@vs',
    paddingHorizontal: '10@s',
  },
  filterContainer: {
    width: '15%',
    height: '100%',
    backgroundColor: colors.textWhite,
    borderRadius: '8@vs',
    padding: '8@vs',
    borderColor: colors.borderColor,
    borderWidth: 1,
  },
  filterIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  btn: {
    width: '100%',
    height: '45@vs',
    borderRadius: '10@vs',
    marginTop: '20@vs',
  },
  btnText: {
    fontSize: '13@vs',
  },
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.underLine,
    marginVertical: '15@vs',
  },
  pendingCont: {
    paddingHorizontal: '10@s',
    paddingVertical: '3@vs',
    backgroundColor: colors.orange1,
    borderRadius: '5@vs',
  },
  calendarCont: {
    backgroundColor: colors.textWhite,
    borderRadius: '10@vs',
    borderColor: colors.underLine,
    borderWidth: 1,
    height: '45@vs',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thisWeekCont: {
    paddingVertical: '3@vs',
    paddingHorizontal: '8@s',
    backgroundColor: colors.Primary20,
    borderRadius: '5@vs',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10@s',
  },
  applyBtn: {
    width: '100%',
    height: '45@vs',
    marginTop: '30@vs',
  },
});
