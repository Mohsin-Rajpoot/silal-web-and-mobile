import {View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import Header from '../../../components/Header';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import {Icon} from 'react-native-elements';
import {useTranslation} from 'react-i18next';

const OrderIdScreen = ({navigation}) => {
  const {t} = useTranslation();
  const [show_modal_driver_data, set_show_modal_driver_data] = useState(false);
  const [show_modal_order_details, set_show_modal_order_details] =
    useState(false);
  const data = [
    {
      id: '1',
      Title: 'Embedded Software Engineer',
      SubTitle: 'Newyork',
      year: '22/03/2022',
    },
    {
      id: '2',
      Title: 'Web Developer',
      SubTitle: 'Lahore',
      year: '22/03/2022',
    },
    {
      id: '3',
      Title: 'Embedded Software Engineer',
      SubTitle: 'USA',
      year: '22/03 /2022',
    },
    {
      id: '4',
      Title: 'Embedded Software Engineer',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '5',
      Title: 'Embedded Software last',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '6',
      Title: 'Embedded Software last',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '7',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '8',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
  ];
  const order_details = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            set_show_modal_order_details(!show_modal_order_details)
          }
          style={styles.modal_data_heading}>
          <CustomText
            fontSize={12}
            fontFamily={fonts.bold}
            label={t('order_details')}
          />
          {show_modal_order_details == true ? (
            <Icon
              type="fontisto"
              name="angle-up"
              size={verticalScale(10)}
              color={colors.black50}
            />
          ) : (
            <Icon
              type="fontisto"
              name="angle-down"
              size={verticalScale(10)}
              color={colors.black50}
            />
          )}
        </TouchableOpacity>
        {show_modal_order_details == true ? (
          <View style={{marginTop: verticalScale(10)}}>
            <View style={styles.modal_fields}>
              <CustomText
                color={colors.textPrimaryBlur}
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                label={t('Order_created')}
              />
              <CustomText
                color={colors.black50}
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                label="11.13.2021 17:33"
              />
            </View>
            <View style={styles.modal_fields}>
              <CustomText
                color={colors.textPrimaryBlur}
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                label={t('Payment')}
              />
              <CustomText
                color={colors.black50}
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                label="$ 13.00"
              />
            </View>
            <View style={styles.modal_fields}>
              <CustomText
                color={colors.textPrimaryBlur}
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                label={t('credit_card')}
              />
              <CustomText
                color={colors.black50}
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                label="**** **** **** 3782"
              />
            </View>
            <View style={styles.mapContainer}>
              {data.map((item, index) => {
                return render_order_details_items(item, index);
              })}
            </View>
          </View>
        ) : null}
      </>
    );
  };
  const driver_data = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => set_show_modal_driver_data(!show_modal_driver_data)}
          style={styles.modal_data_heading}>
          <CustomText
            fontSize={12}
            fontFamily={fonts.bold}
            label={t('driver_data')}
          />
          {show_modal_driver_data == true ? (
            <Icon
              type="fontisto"
              name="angle-up"
              size={verticalScale(10)}
              color={colors.black50}
            />
          ) : (
            <Icon
              type="fontisto"
              name="angle-down"
              size={verticalScale(10)}
              color={colors.black50}
            />
          )}
        </TouchableOpacity>
        {show_modal_driver_data == true ? (
          <View style={{marginTop: verticalScale(10)}}>
            <View style={styles.modal_fields}>
              <CustomText
                color={colors.textPrimaryBlur}
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                label={t('Driver_name')}
              />
              <CustomText
                color={colors.black50}
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                label="Willson Genemal"
              />
            </View>
            <View style={styles.modal_fields}>
              <CustomText
                color={colors.textPrimaryBlur}
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                label={t('phone')}
              />
              <CustomText
                color={colors.black50}
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                label="(208) 555-0112"
              />
            </View>
            <View style={styles.modal_fields}>
              <CustomText
                color={colors.textPrimaryBlur}
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                label={t('Delivery_time')}
              />
              <CustomText
                color={colors.black50}
                fontFamily={fonts.LatoMedium}
                fontSize={15}
                label="37 minutes"
              />
            </View>
          </View>
        ) : null}
      </>
    );
  };
  const render_order_details_items = (item, index) => {
    return (
      <View key={index} style={styles.order_item}>
        <CustomText
          label="2"
          fontSize={17}
          color={colors.black50}
          fontFamily={fonts.LatoMedium}
        />
        <View style={{marginHorizontal: scale(5)}}>
          <Icon
            type="entypo"
            name="cross"
            size={verticalScale(18)}
            color={colors.textPrimaryBlur}
          />
        </View>
        <CustomText
          label="French Fries"
          fontSize={17}
          color={colors.black50}
          fontFamily={fonts.LatoMedium}
        />
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Header
        goBack={() => navigation.pop()}
        title="ORDER ID #123456"
        dostIcon={true}
        treeDot
        showIcon
      />
      <View style={styles.clintCont}>
        <CustomText
          fontFamily={fonts.LatoMedium}
          fontSize={11}
          color={colors.textWhite}
          label={t('reccuring_Client')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {driver_data()}
        {order_details()}
      </ScrollView>
    </View>
  );
};

export default OrderIdScreen;

const styles = ScaledSheet.create({
  mainContainer: {
    paddingHorizontal: '15@s',
    paddingVertical: '10@vs',
    backgroundColor: colors.background,
    flex: 1,
  },
  modal_data_heading: {
    flexDirection: 'row',
    padding: '10@vs',
    backgroundColor: colors.textWhite,
    borderRadius: '5@vs',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10@vs',
    elevation: 1,
  },
  modal_fields: {
    flexDirection: 'row',
    marginVertical: '5@vs',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  order_item: {
    flexDirection: 'row',
    marginVertical: '5@vs',
    alignItems: 'center',
  },
  clintCont: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100@s',
    height: '20@vs',
    borderRadius: '5@vs',
    marginBottom: '10@vs',
    marginTop: '5@vs',
  },
  mapContainer: {
    paddingHorizontal: '15@vs',
    paddingVertical: '10@vs',
    backgroundColor: colors.textWhite,
    borderRadius: '8@msr',
    marginTop: '10@vs',
    elevation: 1,
  },
});
