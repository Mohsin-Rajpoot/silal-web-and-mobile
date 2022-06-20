import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import CustomButton from '@SilalApp/common/components/native/CustomButton';
import CustomText from '@SilalApp/common/components/CustomText';
import {Icon} from 'react-native-elements';

const DetailsItem = ({
  heading,
  headingName,
  firstIconType,
  firstIconName,
  firstIconColor,
  firstIconText,
  firstIconBgColor,
  secondIconBgColor,
  secondIconColor,
  secondIconName,
  secondIconType,
  secondIconText
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <CustomText
          fontFamily={fonts.bold}
          fontSize={15}
          color={colors.light_grey}
          label={heading}
        />
        <CustomText
          fontFamily={fonts.LatoMedium}
          fontSize={15}
          label={headingName}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: verticalScale(10),
        }}>
        <View
          style={[styles.iconContainer, {backgroundColor: firstIconBgColor}]}>
          <Icon
            type={firstIconType}
            size={16}
            color={firstIconColor}
            name={firstIconName}
          />
        </View>
        <CustomText
          label={firstIconText}
          fontFamily={fonts.LatoMedium}
          fontSize={15}
        />
      </View>


      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: verticalScale(10),
        }}>
        <View
          style={[styles.iconContainer, {backgroundColor: secondIconBgColor}]}>
          <Icon
            type={secondIconType}
            size={16}
            color={secondIconColor}
            name={secondIconName}
          />
        </View>
        <CustomText
          label={secondIconText}
          fontFamily={fonts.LatoMedium}
          fontSize={15}
        />
      </View>
    </View>
  );
};

export default DetailsItem;

const styles = ScaledSheet.create({
  mainContainer: {
    width: '100%',
    padding: '20@vs',
    backgroundColor: colors.textWhite,
    borderRadius: '12@vs',
    elevation: 1,
    marginBottom:'15@vs'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15@vs',
  },
  iconContainer: {
    width: '32@vs',
    height: '32@vs',
    backgroundColor: colors.light_blue,
    borderRadius: '5@vs',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10@s',
  },
});
