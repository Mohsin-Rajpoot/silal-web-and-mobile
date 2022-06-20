import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Keyboard,
  TouchableOpacity,
  Dimensions,
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

export default function Acceptance_order_mobile({navigation}) {
  console.log(navigation);
  const {t} = useTranslation();
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const [filter, setFilter] = useState(false);
  const [method, setMethod] = useState(false);
  const [order, setOrder] = useState(false);
  const [allMethod,setAllMethod] = useState(0)
  
  const InputRef = useRef();

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      InputRef.current.blur();
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
   const methodArray = [t('allMethods'),t('Delivery'),t("Pickup")]
   const orderArray = [t('all-orders'),]
  const dataArray = [
    {
      id: 1,
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
            inputStyle={styles.inputStyle}
            inputTextStyle={{fontSize: verticalScale(13)}}
            search
            placeholderText={t('Search')}
          />
        </View>
        <TouchableOpacity
          onPress={() => setFilter(true)}
          activeOpacity={0.6}
          style={styles.filterContainer}>
          <Image style={styles.filterIcon} source={images.filterIcon} />
        </TouchableOpacity>
      </View>
      {dataArray.map((item, index) => {
        return (
          <OrderItem
            key={item.id}
            rightIconChange
            pending
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
              text={t('allMethods')}
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
              text={t('all-orders')}
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
                <OpenModal text={t('all-orders')} />
              </View>
              <View style={{width: '48%'}}>
                <OpenModal text={t('all-orders')} />
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
              <Icon
                type="antdesign"
                name="check"
                size={20}
                color={colors.primary}
              />
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity
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
              <Icon
                type="antdesign"
                name="check"
                size={20}
                color={colors.primary}
              />
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
              activeOpacity={0.6}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={[styles.pendingCont,{backgroundColor:colors.blueDark}]}>
              <CustomText
                fontSize={11}
                fontFamily={fonts.LatoMedium}
                color={colors.textWhite}
                label={t('waiting_for_pickup')}
              />
              </View>
              <Icon
                type="antdesign"
                name="check"
                size={20}
                color={colors.primary}
              />
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity
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
              <Icon
                type="antdesign"
                name="check"
                size={20}
                color={colors.primary}
              />
            </TouchableOpacity>
            <View style={{height: verticalScale(40)}} />
          </View>
        </CustomModal>
       
      )}
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
    borderColor: colors.borderColor,
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
  pendingCont:{
    paddingHorizontal:'10@s',
    paddingVertical:'3@vs',
    backgroundColor:colors.orange1,
    borderRadius:'5@vs'
  },
 
});
