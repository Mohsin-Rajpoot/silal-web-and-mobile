import { Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet, verticalScale } from 'react-native-size-matters'
import OrderItem from '../../orders/Archive/molecules/OrderItem'
import Header from '../../../components/Header'
import CustomText from '@SilalApp/common/components/CustomText'
import fonts from '@SilalApp/common/assets/fonts'
import colors from '@SilalApp/common/assets/colors'
import {useTranslation} from 'react-i18next';

const LongOrderDetails = ({navigation}) => {
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
  return (
    <View style={styles.mainContainer}>
        <Header title="Order ID #247HW9" dostIcon={true} treeDot showIcon />
        <View style={{height:verticalScale(15)}} />
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
    </View>
  )
}

export default LongOrderDetails

const styles = ScaledSheet.create({
  mainContainer:{
    padding:'15@vs'
  }
})