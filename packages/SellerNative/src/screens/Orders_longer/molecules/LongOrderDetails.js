import {ScrollView, View} from 'react-native';
import React from 'react';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import OrderItem from '../../orders/Archive/molecules/OrderItem';
import Header from '../../../components/Header';
import CustomText from '@SilalApp/common/components/CustomText';
import fonts from '@SilalApp/common/assets/fonts';
import colors from '@SilalApp/common/assets/colors';
import {useTranslation} from 'react-i18next';
import images from '../../../../assets/images';

const LongOrderDetails = ({navigation,route}) => {
     const waiting = route?.params?.waiting
        
  const {t} = useTranslation();

  const dataArray = [
    {
      id: 1,
      orderId: '#723DN2',
      customerName: 'Leslie A.',
      date: '12.11.2021 14:18',
      item: '2',
      totalPrice: '$ 129.00',
    },
  ];
  const orderArray = [
    {
      id: 1,
      image: images.borger,
      imgText1: 'Guess Saffiano',
      imgText2: '(GUCB15TBK) laptop bag 15',
      itemId: '$ 4.00',
      picked: '1',
      characteristics: 'Black, Big',
      inStock: '43',
      price: '$ 50.00',
    },
    {
      id: 2,
      image: images.borger,
      imgText1: 'Guess Saffiano',
      imgText2: '(GUCB15TBK) laptop bag 15',
      itemId: '$ 4.00',
      picked: '1',
      characteristics: 'Black, Big',
      inStock: '43',
      price: '$ 50.00',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <Header
        goBack={() => navigation.navigate('Longer_orders')}
        title="Order ID #247HW9"
        dostIcon={true}
        treeDot
        showIcon
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height: verticalScale(15)}} />
        {dataArray.map((item, index) => {
          return (
            <OrderItem
              headerHide
              key={item.id}
              rightIconChange
              pending
            waiting={waiting}
              orderId={item.orderId}
              customerName={item.customerName}
              item={item.item}
              date={item.date}
              totalPrice={item.totalPrice}
            />
          );
        })}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: verticalScale(10),
            marginTop: verticalScale(15),
          }}>
          <CustomText
            label={t('Order')}
            fontSize={16}
            fontFamily={fonts.LatoBold}
            color={colors.black50}
          />
          <CustomText
            label=" (2 item)"
            fontSize={16}
            fontFamily={fonts.LatoBold}
            color={colors.white}
          />
        </View>
        {orderArray.map((item, index) => {
          return (
            <View style={styles.itemContainer}>
              <OrderItem
                containerStyle={styles.item}
                headerHide
                status
                key={item.id}
                image={item.image}
                imgText1={item.imgText1}
                imgText2={item.imgText2}
                itemId={item.itemId}
                picked={item.picked}
                inStock={item.inStock}
                price={item.price}
                characteristics="nczk"
              />
            </View>
          );
        })}

        <View style={{height: verticalScale(20)}} />
      </ScrollView>
    </View>
  );
};

export default LongOrderDetails;

const styles = ScaledSheet.create({
  mainContainer: {
    padding: '15@vs',
  },
  itemContainer: {
    backgroundColor: colors.primary,
    padding: '1@vs',
    borderRadius: '12@vs',
    paddingLeft: '8@s',
    marginBottom: '15@vs',
  },
  item: {
    marginBottom: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
