import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {moderateScale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import Svg, {Path, Rect} from 'react-native-svg';
import DatePicker from './../../../components/DatePicker';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import OrderItem from './molecules/OrderItem';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import CustomText from '@SilalApp/common/components/CustomText';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {useTranslation} from 'react-i18next';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';

export default function Archive_orders_mobile({title, navigation}) {
  const {t} = useTranslation();
  const [order_state, set_order_state] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const data = [
    {
      id: '1',
      orderId: '#723DN2',
      iconPress: () => setIsComplete(true),
      customerName: 'Leslie A.',
      customerId: '2327',
      category: 'Clothing',
      totalPrice: '$ 129.00',
      isComplete: true,
      onPress:()=>navigation.navigate("OrderIdScreen")

    },
    {
      id: '2',
      orderId: '#723DN2',
      iconPress: () => setIsComplete(!isComplete),
      customerName: 'Leslie A.',
      customerId: '2327',
      category: 'Clothing',
      totalPrice: '$ 129.00',
      isComplete: false,
    },
    {
      id: '3',
      orderId: '#723DN2',
      iconPress: () => setIsComplete(!isComplete),
      customerName: 'Leslie A.',
      customerId: '2327',
      category: 'Clothing',
      totalPrice: '$ 129.00',
      isComplete: true,
    },
    {
      id: '4',
      orderId: '#723DN2',
      iconPress: () => setIsComplete(!isComplete),
      customerName: 'Leslie A.',
      customerId: '2327',
      category: 'Clothing',
      totalPrice: '$ 129.00',
      isComplete: false,
    },
    {
      id: '5',
      orderId: '#723DN2',
      iconPress: () => setIsComplete(!isComplete),
      customerName: 'Leslie A.',
      customerId: '2327',
      category: 'Clothing',
      totalPrice: '$ 129.00',
      isComplete: true,
    },
    {
      id: '6',
      orderId: '#723DN2',
      iconPress: () => setIsComplete(!isComplete),
      customerName: 'Leslie A.',
      customerId: '2327',
      category: 'Clothing',
      totalPrice: '$ 129.00',
      isComplete: false,
    },
    {
      id: '7',
      orderId: '#723DN2',
      iconPress: () => setIsComplete(!isComplete),
      customerName: 'Leslie A.',
      customerId: '2327',
      category: 'Clothing',
      totalPrice: '$ 129.00',
      isComplete: true,
    },
    {
      id: '8',
      orderId: '#723DN2',
      iconPress: () => setIsComplete(!isComplete),
      customerName: 'Leslie A.',
      customerId: '2327',
      category: 'Clothing',
      totalPrice: '$ 129.00',
      isComplete: false,
    },
  ];

  return (
    <>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => {
            set_order_state(0);
          }}
          style={[
            styles.archive_orders_tab,
            {borderColor: order_state == 0 ? colors.primary : colors.underLine},
          ]}>
          <Text
            style={{
              color: order_state == 0 ? colors.primary : colors.textPrimaryBlur,

              fontFamily: fonts.PoppinsSemiBold,
            }}>
            All orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            set_order_state(1);
          }}
          style={[
            styles.archive_orders_tab,
            {
              borderColor: order_state == 1 ? colors.primary : colors.underLine,
            },
          ]}>
          <Text
            style={{
              color: order_state == 1 ? colors.primary : colors.textPrimaryBlur,

              fontFamily: fonts.PoppinsSemiBold,
            }}>
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            set_order_state(2);
          }}
          style={[
            styles.archive_orders_tab,
            {
              borderColor: order_state == 2 ? colors.primary : colors.underLine,
            },
          ]}>
          <Text
            style={{
              color: order_state == 2 ? colors.primary : colors.textPrimaryBlur,
              fontFamily: fonts.PoppinsSemiBold,
            }}>
            Cancelled
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{height: verticalScale(20)}} />
      <View style={styles.filter_box}>
        <View style={styles.filter}>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Rect width="24" height="24" fill="white" fill-opacity="0.01" />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.99951 13H16.9995L17.9995 11H5.99951L6.99951 13ZM3.99251 6C3.44451 6 3.20251 6.405 3.44651 6.895L3.99951 8H19.9995L20.5525 6.895C20.7995 6.4 20.5545 6 20.0065 6H3.99251ZM10.7775 17.556C10.8505 17.6861 10.9556 17.7953 11.0829 17.8731C11.2103 17.9508 11.3554 17.9945 11.5045 18H12.4945C12.7735 18 13.0995 17.8 13.2215 17.556L13.9995 16H9.99951L10.7775 17.556Z"
              fill="#42526E"
            />
          </Svg>
          <Text style={{fontSize: verticalScale(15)}}>Filters</Text>
        </View>
        <View style={[styles.filter, {paddingBottom: verticalScale(10)}]}>
          <DatePicker />
        </View>
      </View>
      <ScrollView style={styles.mainContainer}>
        {data.map((item, index) => {
          return (
            <OrderItem
              key={item.id}
              orderId={item.orderId}
              iconPress={item.iconPress}
              isComplete={item.isComplete}
              customerName={item.customerName}
              customerId={item.customerId}
              category={item.category}
              totalPrice={item.totalPrice}
              onPress={item.onPress}
            />
          );
        })}
      </ScrollView>
      {isComplete && (
        <CustomModal
          isModalVisible={isComplete}
          setModalVisible={setIsComplete}
          modalWrapperStyle={{
            marginHorizontal: width(0),
            marginTop: height('75%'),
            marginVertical: height(0),
            borderTopRightRadius: 20,
          }}>
          <TouchableOpacity
            style={styles.menuModalContainer}
            activeOpacity={0.6}
            onPress={() => {
              setIsComplete(false);
            }}>
            <Icon
              name="repeat"
              type="feather"
              size={moderateScale(22)}
              color={colors.dullWhite}
            />

            <CustomText
              label={t('Refund')}
              textStyle={styles.menuTextTitle}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.menuModalContainer}
            activeOpacity={0.6}
            onPress={() => {
              setIsComplete(false);
            }}>
            <Icon
              name="user"
              type="feather"
              size={moderateScale(22)}
              color={colors.dullWhite}
            />

            <CustomText
              label={t('contactCustomer')}
              textStyle={styles.menuTextTitle}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.menuModalContainer}
            activeOpacity={0.6}
            onPress={() => {
              setIsComplete(false);
            }}>
            <Icon
              name="phone-call"
              type="feather"
              size={moderateScale(22)}
              color={colors.dullWhite}
            />

            <CustomText
              label={t('call_customer_service')}
              textStyle={styles.menuTextTitle}
            />
          </TouchableOpacity>
         
        </CustomModal>
      )}
      
    </>
  );
}
const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    padding: '18@vs',
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  archive_orders_tab: {
    borderBottomWidth: '4@vs',
    height: '35@vs',
    paddingHorizontal: '20@s',
    justifyContent: 'center',
  },
  filter_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filter: {
    backgroundColor: 'white',
    height: '40@vs',
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8@vs',
    elevation: 1,
  },
  menuModalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal:'10@s'
  },
  menuTextTitle: {
    fontSize: '14@vs',
    fontFamily: fonts.LatoMedium,
    color: colors.black,
    marginLeft: '10@s',
  },
  divider: {
    height: '1@s',
    width: '100%',
    backgroundColor: colors.dullWhite,
    marginVertical: '20@s',
  },
});
