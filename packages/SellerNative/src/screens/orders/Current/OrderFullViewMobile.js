import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/Header';
import {useTranslation} from 'react-i18next';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import colors from '@SilalApp/common/assets/colors';
import Tab from './molecules/Tab';
import List from './molecules/List';
import images from '../../../../assets/images';
import fonts from '@SilalApp/common/assets/fonts';
import CustomButton from '@SilalApp/common/components/native/CustomButton';
import DetailsItem from './molecules/DetailsItem';
import {Icon} from 'react-native-elements';

const OrderFullViewMobile = ({route}) => {
  const status = route?.params?.status;
  const {t} = useTranslation();
  const [active, setActive] = useState(0);
  const listArray = [
    {
      id: 1,
      imgPath: images.borger,
      heading: 'Cheesecakes with sour cream and citrus hone',
      quantity: 2,
      price: '$ 2.90',
      totalPrice: '$ 5.80',
    },
    {
      id: 2,
      imgPath: images.borger,
      heading: 'Cheesecakes with sour cream and citrus hone',
      quantity: 2,
      price: '$ 2.90',
      totalPrice: '$ 5.80',
    },
    {
      id: 3,
      imgPath: images.borger,
      heading: 'Cheesecakes with sour cream and citrus hone',
      quantity: 2,
      price: '$ 2.90',
      totalPrice: '$ 5.80',
      note: true,
    },
    {
      id: 4,
      imgPath: images.borger,
      heading: 'Cheesecakes with sour cream and citrus hone',
      quantity: 2,
      price: '$ 2.90',
      totalPrice: '$ 5.80',
    },
  ];
  detailsItemArray = [
    {
      id: 1,
      heading: t('CUSTOMER'),
      headingName: t('olive_Johnanson'),
      firstIconType: 'font-awesome-5',
      firstIconName: 'phone-alt',
      firstIconColor: colors.lightBlue1,
      firstIconText: '(808) 555-0111',
      firstIconBgColor: colors.light_blue,
      secondIconName: 'md-location-sharp',
      secondIconType: 'ionicon',
      secondIconColor: colors.purple1,
      secondIconText: '8502 Preston Rd. Inglewood',
      secondIconBgColor: colors.purpleLight1,
    },
    {
      id: 2,
      heading: t('DRIVER'),
      headingName: t('brooklyn_simmons'),
      firstIconType: 'font-awesome-5',
      firstIconName: 'phone-alt',
      firstIconColor: colors.lightBlue1,
      firstIconText: '(808) 555-0111',
      firstIconBgColor: colors.light_blue,
      secondIconName: 'clockcircle',
      secondIconType: 'antdesign',
      secondIconColor: colors.orange1,
      secondIconText: '8502 Preston Rd. Inglewood',
      secondIconBgColor: colors.orange1Light,
    },
  ];
  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <View
        style={{
          padding: verticalScale(15),
          backgroundColor: colors.background,
        }}>
        <Header title={t('Order ID #247HW9')} dostIcon={true} showIcon />
        <Tab active={active} setActive={setActive} />
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.mainContainer}>
          {active == 0 && (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: scale(20),
                  marginTop: verticalScale(20),
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.header_order_txt}>{t('Order_list')}</Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      color: '#4C6870',
                      marginLeft: 5,
                    }}>
                    {6 + t('(items)')}
                  </Text>
                  <Text
                    style={{
                      padding: 5,
                      backgroundColor: colors.bluish,
                      borderRadius: 5,
                      marginLeft: 10,
                      fontSize: 11,
                      color: '#008DA6',
                      fontFamily: 'Lato-Regular',
                    }}>
                    {t('credit_card')}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.header_order_txt,
                    {fontSize: 16, fontFamily: 'Lato-Bold'},
                  ]}>
                  14:58:15
                </Text>
              </View>
              <View style={{height: verticalScale(15)}} />
              {listArray.map((item, index) => {
                return (
                  <List
                    key={item.id}
                    imgPath={item.imgPath}
                    heading={item.heading}
                    quantity={item.quantity}
                    price={item.price}
                    totalPrice={item.totalPrice}
                    note={item.note}
                  />
                );
              })}
              <View style={styles.deliveryContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 5,
                  }}>
                  <CustomText
                    color={colors.light_grey}
                    fontSize={13}
                    fontFamily={fonts.LatoBold}
                    label={t('Delivery')}
                  />
                  <CustomText
                    color={colors.light_grey}
                    fontSize={13}
                    fontFamily={fonts.LatoBold}
                    label="$ 2.00"
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <CustomText
                    color={colors.textWhite}
                    fontSize={16}
                    fontFamily={fonts.LatoBold}
                    label={t('Order_total')}
                  />
                  <CustomText
                    color={colors.textWhite}
                    fontSize={16}
                    fontFamily={fonts.LatoBold}
                    label="$ 21.70"
                  />
                </View>
              </View>
            </View>
          )}
          {active == 1 && (
            <View style={{flex: 1, backgroundColor: colors.background}}>
              {detailsItemArray.map((item, index) => {
                return (
                  <DetailsItem
                    key={item.id}
                    heading={item.heading}
                    headingName={item.headingName}
                    firstIconType={item.firstIconType}
                    firstIconName={item.firstIconName}
                    firstIconBgColor={item.firstIconBgColor}
                    firstIconText={item.firstIconText}
                    secondIconType={item.secondIconType}
                    secondIconName={item.secondIconName}
                    secondIconBgColor={item.secondIconBgColor}
                    secondIconText={item.secondIconText}
                    firstIconColor={item.firstIconColor}
                    secondIconColor={item.secondIconColor}
                  />
                );
              })}
            </View>
          )}
          {active == 2 && (
            <View
              style={{
                flex: 1,
                backgroundColor: colors.background,
                borderRadius: 5,
                padding: 10,
              }}>
              <Text style={styles.header_order_txt}>{t('History')}</Text>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <View style={{alignItems: 'center'}}>
                  <View style={styles.greenView}>
                    <Icon
                      type="ntypo"
                      name="check"
                      color={colors.textWhite}
                      size={18}
                    />
                  </View>
                  <View style={styles.heightView} />
                  <View style={styles.greenView}>
                    <Icon
                      type="ntypo"
                      name="check"
                      color={colors.textWhite}
                      size={18}
                    />
                  </View>
                  <View style={styles.heightView} />
                  <View style={styles.grayView}>
                    <View style={styles.sGreenView}></View>
                  </View>
                  <View style={styles.heightView} />
                  <View style={styles.grayView}>
                    <View style={styles.sGreenView} />
                  </View>
                </View>
                <View style={{marginLeft: 10}}>
                  <View style={{marginTop: -3}}>
                    <Text style={[styles.history_title, {color: '#002733'}]}>
                      {t('Order_created')}
                    </Text>
                    <Text style={[styles.history_date, {color: '#002733'}]}>
                      10.22.2021 14.47
                    </Text>
                  </View>
                  <View style={{marginTop: 33}}>
                    <Text style={[styles.history_title, {color: '#002733'}]}>
                      {t('Order_Preperation')}
                    </Text>
                    <Text style={[styles.history_date, {color: '#002733'}]}>
                      10.22.2021 14.47
                    </Text>
                  </View>
                  <View style={{marginTop: 33}}>
                    <Text style={[styles.history_title, {color: '#CCD4D6'}]}>
                      {t('order_picked')}
                    </Text>
                    <Text style={[styles.history_date, {color: '#CCD4D6'}]}>
                      10.22.2021 14.47
                    </Text>
                  </View>
                  <View style={{marginTop: 33}}>
                    <Text style={[styles.history_title, {color: '#CCD4D6'}]}>
                      {t('order_Delivered')}
                    </Text>
                    <Text style={[styles.history_date, {color: '#CCD4D6'}]}>
                      10.22.2021 14.47
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <CustomButton
          containerStyle={styles.btn}
          text={t('ready_for_pickup')}
          textStyle={{fontSize: verticalScale(15)}}
        />
      </View>
    </View>
  );
};

export default OrderFullViewMobile;

const styles = ScaledSheet.create({
  mainContainer: {
    padding: '15@vs',
    paddingTop: 0,
    backgroundColor: colors.background,
    flex: 1,
  },
  header_order_txt: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    fontSize: 19,
  },
  deliveryContainer: {
    backgroundColor: colors.textPrimeColor,
    paddingVertical: '12@vs',
    paddingHorizontal: '20@s',
    borderRadius: '12@vs',
  },
  btnContainer: {
    padding: '15@msr',
    borderTopColor: colors.borderColor,
    borderTopWidth: 1,
  },
  btn: {
    width: '100%',
    height: '45@vs',
  },
  header_order_txt: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    fontSize: 19,
  },
  greenView: {
    height: '30@vs',
    width: '30@vs',
    borderRadius: '100@vs',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heightView: {
    height: '30@vs',
    width: '2@s',
    backgroundColor: colors.primary,
  },
  grayView: {
    height: '30@vs',
    width: '30@vs',
    borderRadius: '100@vs',
    backgroundColor: colors.primaryGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sGreenView: {
    height: '10@vs',
    width: '10@vs',
    backgroundColor: colors.primary,
    borderRadius: '100@vs',
  },
});
