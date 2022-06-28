import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import {CustomButton} from '@SilalApp/common/components/native';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';

const CurrentWorkforceCompo = ({
  sellerId,
  sellerName,
  registerBy,
  registerOn,
  revokePress,
}) => {
  const {t} = useTranslation();
  const [checkBox, setCheckBox] = useState(false);
  const [checkBox1, setCheckBox1] = useState(true);

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: verticalScale(8),
        }}>
        <CustomText
          fontSize={16}
          fontFamily={fonts.LatoBold}
          color={colors.black}
          label={t('SellerID')}
        />
        <CustomText
          label={sellerId}
          fontSize={16}
          fontFamily={fonts.LatoBold}
          color={colors.black}
        />
      </View>
      <View style={{marginLeft: scale(20)}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomText
            fontSize={16}
            fontFamily={fonts.LatoMedium}
            color={colors.black}
            label={t('sellerName')}
          />
          <CustomText
            label={sellerName}
            fontSize={16}
            fontFamily={fonts.LatoMedium}
            color={colors.black}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomText
            fontSize={16}
            fontFamily={fonts.LatoMedium}
            color={colors.black}
            label={t('registeredBySeller')}
          />
          <CustomText
            label={registerBy}
            fontSize={16}
            fontFamily={fonts.LatoMedium}
            color={colors.black}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: verticalScale(8),
          }}>
          <CustomText
            fontSize={16}
            fontFamily={fonts.LatoMedium}
            color={colors.black}
            label={t('registeredOn')}
          />
          <CustomText
            label={registerOn}
            fontSize={16}
            fontFamily={fonts.LatoMedium}
            color={colors.black}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => setCheckBox(!checkBox)}
            style={[
              styles.checkBox,
              {borderColor: checkBox ? colors.primary : colors.borderColor5},
            ]}>
            <View
              style={[
                styles.checkBoxEmpty,
                {backgroundColor: checkBox ? colors.primary : 'transparent'},
              ]}
            />
          </TouchableOpacity>
          <CustomText
            fontSize={15}
            fontFamily={fonts.LatoMedium}
            color={colors.black}
            label={t('Admin')}
          />
        </View>
        <View style={{height: verticalScale(7)}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => setCheckBox1(!checkBox1)}
              style={[
                styles.checkBox,
                {borderColor: checkBox1 ? colors.primary : colors.borderColor5},
              ]}>
              <View
                style={[
                  styles.checkBoxEmpty,
                  {backgroundColor: checkBox1 ? colors.primary : 'transparent'},
                ]}
              />
            </TouchableOpacity>
            <CustomText
              fontSize={15}
              fontFamily={fonts.LatoMedium}
              color={colors.black}
              label={t('Maintainer')}
            />
          </View>
          <CustomButton
            onPress={revokePress}
            textStyle={{
              fontSize: verticalScale(13),
              fontFamily: fonts.LatoBold,
            }}
            containerStyle={styles.btn}
            text={t('Revoke')}
          />
        </View>
      </View>
    </View>
  );
};

export default CurrentWorkforceCompo;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.textWhite,
    paddingVertical: '4@vs',
    paddingHorizontal: '13@vs',
    borderRadius: '5@vs',
    marginBottom: '13@vs',
    paddingBottom: '10@vs',
  },
  checkBox: {
    width: '20@vs',
    height: '20@vs',
    borderRadius: '100@vs',
    borderWidth: '2@vs',
    marginRight: '10@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxEmpty: {
    width: '10@vs',
    height: '10@vs',
    backgroundColor: 'red',
    borderRadius: '100@vs',
  },
  btn: {
    width: '35%',
    height: '25@vs',
    borderRadius: '5@vs',
    backgroundColor: colors.red10,
    padding:0
  },
});
