import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import {CustomButton} from '@SilalApp/common/components/native';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
const GrantAccessComp = ({grantPress}) => {
  const {t} = useTranslation();
  const [checkBox, setCheckBox] = useState(false);
  const [checkBox1, setCheckBox1] = useState(true);

  return (
    <View
      style={[
        styles.mainContainer,
        {
          width: IsTablet ? '48%' : '100%',
          marginTop: IsTablet ? verticalScale(20) : 0,
          height: IsTablet ? verticalScale(300) : verticalScale(300),
        },
      ]}>
      <CustomText
        fontSize={15}
        color={colors.black}
        fontFamily={fonts.LatoMedium}
        label={t('SellerID')}
      />
      <View style={styles.idContainer}>
        <CustomText
          fontSize={17}
          color={colors.black}
          fontFamily={fonts.LatoMedium}
          label="#4983247"
        />
      </View>
      <CustomText
        fontSize={12}
        color={colors.gray10}
        fontFamily={fonts.LatoMedium}
        label={t('sellerIdDetails')}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: verticalScale(45),
        }}>
        <CustomText
          fontSize={15}
          color={colors.black}
          fontFamily={fonts.LatoMedium}
          label={t('assignWorkerAs')}
        />
        <View style={styles.iconContainer}>
          <Icon
            type="font-awesome"
            name="question"
            color={colors.greenBlack}
            size={verticalScale(15)}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: verticalScale(10),
          marginHorizontal: scale(20),
        }}>
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
      </View>
      <CustomButton
        textStyle={{fontSize: verticalScale(14), fontFamily: fonts.LatoBold}}
        containerStyle={styles.btn}
        onPress={grantPress}
        text={t('grantAccess')}
      />
    </View>
  );
};

export default GrantAccessComp;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.textWhite,
    padding: '10@vs',
    borderRadius: '5@vs',
    marginBottom: '25@vs',
  },
  idContainer: {
    padding: '8@vs',
    borderColor: colors.underLine,
    borderRadius: '5@vs',
    borderWidth: 1,
    marginHorizontal: '10@s',
    marginTop: '8@vs',
    marginBottom: '5@vs',
  },
  iconContainer: {
    backgroundColor: colors.blurPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20@vs',
    height: '20@vs',
    borderRadius: '100@vs',
    marginLeft: '10@s',
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
    marginTop: '15@vs',
    width: '45%',
    height: '32@vs',
  },
});
