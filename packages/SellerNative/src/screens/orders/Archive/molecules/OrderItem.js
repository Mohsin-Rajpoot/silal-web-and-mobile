import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import CustomText from '@SilalApp/common/components/CustomText';
import {Icon} from 'react-native-elements';
import {useTranslation} from 'react-i18next';

const OrderItem = ({
  orderId,
  iconPress,
  isComplete,
  customerName,
  customerId,
  category,
  totalPrice,
  onPress,
  rightIconChange,
  rightIconPress,
  pending,
  date,
  paymentHide,
  item,
  headerHide
}) => {
  const {t} = useTranslation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.mainContainer}>
      {headerHide ? <View /> : <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomText
            label={t('order_id')}
            color={colors.light_grey50}
            fontFamily={fonts.LatoMedium}
            fontSize={13}
          />
          <View style={{width: 5}} />
          <CustomText
            label={orderId}
            color={colors.black50}
            fontFamily={fonts.LatoMedium}
            fontSize={13}
          />
        </View>
        {rightIconChange ? (
          <TouchableOpacity
            onPress={rightIconPress}
            style={styles.rightIconStyle}>
            <Icon
              type="ntypo"
              name="chevron-right"
              color={colors.black50}
              size={verticalScale(22)}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity activeOpacity={0.6} onPress={iconPress}>
            <Icon
              type="entypo"
              color={colors.textPrimaryBlur}
              size={verticalScale(16)}
              name="dots-three-vertical"
            />
          </TouchableOpacity>
        )}
      </View>}
      <View style={styles.container}>
        <CustomText
          label={t('Status')}
          color={colors.textPrimaryBlur}
          fontSize={15}
          fontFamily={fonts.LatoMedium}
        />
        {pending ? (
          <View style={styles.pendingCont}>
            <CustomText
              label="pending"
              color={colors.textWhite}
              fontFamily={fonts.LatoMedium}
              fontSize={11}
            />
          </View>
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {isComplete ? (
              <View style={styles.completeCont}>
                <CustomText
                  label={t('completed')}
                  color={colors.textWhite}
                  fontFamily={fonts.LatoMedium}
                  fontSize={11}
                />
              </View>
            ) : (
              <View
                style={[styles.completeCont, {backgroundColor: colors.red40}]}>
                <CustomText
                  label={t('cancelled')}
                  color={colors.textWhite}
                  fontFamily={fonts.LatoMedium}
                  fontSize={11}
                />
              </View>
            )}
            <Icon
              type="ntypo"
              name="chevron-right"
              color={colors.black50}
              size={verticalScale(22)}
            />
          </View>
        )}
      </View>
      {customerName && (
        <View style={[styles.container, {backgroundColor: 'transparent'}]}>
          <CustomText
            label={t('customer_name')}
            color={colors.textPrimaryBlur}
            fontSize={15}
            fontFamily={fonts.LatoMedium}
          />
          <CustomText
            label={customerName}
            color={colors.black50}
            fontFamily={fonts.LatoMedium}
            fontSize={15}
          />
        </View>
      )}
      {date && (
        <View style={styles.container}>
          <CustomText
            label={t('Date')}
            color={colors.textPrimaryBlur}
            fontSize={15}
            fontFamily={fonts.LatoMedium}
          />
          <CustomText
            label={date}
            color={colors.black50}
            fontFamily={fonts.LatoMedium}
            fontSize={15}
          />
        </View>
      )}
      {customerId && (
        <View style={styles.container}>
          <CustomText
            label={t('CustomerId')}
            color={colors.textPrimaryBlur}
            fontSize={15}
            fontFamily={fonts.LatoMedium}
          />
          <CustomText
            label={customerId}
            color={colors.black50}
            fontFamily={fonts.LatoMedium}
            fontSize={15}
          />
        </View>
      )}
      {item && (
        <View style={[styles.container, {backgroundColor: 'transparent'}]}>
          <CustomText
            label={t('Item')}
            color={colors.textPrimaryBlur}
            fontSize={15}
            fontFamily={fonts.LatoMedium}
          />
          <CustomText
            label={item}
            color={colors.black50}
            fontFamily={fonts.LatoMedium}
            fontSize={15}
          />
        </View>
      )}
      {category && (
        <View style={[styles.container, {backgroundColor: 'transparent'}]}>
          <CustomText
            label={t('Category')}
            color={colors.textPrimaryBlur}
            fontSize={15}
            fontFamily={fonts.LatoMedium}
          />
          <CustomText
            label={category}
            color={colors.black50}
            fontFamily={fonts.LatoMedium}
            fontSize={15}
          />
        </View>
      )}
      {paymentHide && (
        <>
          <View style={styles.container}>
            <CustomText
              label={t('Payment')}
              color={colors.textPrimaryBlur}
              fontSize={15}
              fontFamily={fonts.LatoMedium}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.creditCardCont}>
                <CustomText
                  label={t('Credit card')}
                  color={colors.blue10}
                  fontFamily={fonts.LatoMedium}
                  fontSize={11}
                />
              </View>
            </View>
          </View>
          <View style={[styles.container, {backgroundColor: 'transparent'}]}>
            <CustomText
              label={t('Type')}
              color={colors.textPrimaryBlur}
              fontSize={15}
              fontFamily={fonts.LatoMedium}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.takeAwayCont}>
                <CustomText
                  label={t('Take away')}
                  color={colors.textWhite}
                  fontFamily={fonts.LatoMedium}
                  fontSize={11}
                />
              </View>
            </View>
          </View>
        </>
      )}
      {totalPrice && <View style={styles.container}>
        <CustomText
          label={t('total-price')}
          color={colors.textPrimaryBlur}
          fontSize={15}
          fontFamily={fonts.LatoMedium}
        />
        <CustomText
          label={totalPrice}
          color={colors.black50}
          fontFamily={fonts.LatoMedium}
          fontSize={15}
        />
      </View>}
    </TouchableOpacity>
  );
};

export default OrderItem;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.textWhite,
    elevation: 1,
    borderRadius: '12@vs',
    paddingHorizontal: '15@s',
    paddingVertical: '10@vs',
    marginBottom: '15@vs',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '12@vs',
    borderBottomWidth: '1@vs',
    borderBottomColor: colors.underLine,
    marginBottom: '8@vs',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.gray20,
    paddingHorizontal: '10@vs',
    paddingVertical: '12@vs',
    borderRadius: '5@vs',
  },
  completeCont: {
    backgroundColor: colors.green50,
    paddingHorizontal: '10@s',
    paddingVertical: '3@vs',
    borderRadius: '5@vs',
    marginRight: '10@s',
  },
  creditCardCont: {
    backgroundColor: colors.green10,
    paddingHorizontal: '10@s',
    paddingVertical: '3@vs',
    borderRadius: '5@vs',
  },
  takeAwayCont: {
    backgroundColor: colors.purple50,
    paddingHorizontal: '10@s',
    paddingVertical: '3@vs',
    borderRadius: '5@vs',
  },
  rightIconStyle: {
    width: '28@vs',
    height: '28@vs',
    borderRadius: '100@vs',
    backgroundColor: colors.gray20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.underLine,
    borderWidth: 1,
  },
  pendingCont: {
    backgroundColor: colors.orange1,
    paddingHorizontal: '10@s',
    paddingVertical: '3@vs',
    borderRadius: '5@vs',
  },
});
