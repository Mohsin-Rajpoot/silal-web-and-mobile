import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import CustomText from '@SilalApp/common/components/CustomText';
import {Icon} from 'react-native-elements';
import fonts from '@SilalApp/common/assets/fonts';
const PreviewComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <CustomText label={'9:41'} textStyle={styles.time} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="signal" type="material-community" size={20} />
            <Icon name="signal" type="entypo" size={20} />
            <Icon name="battery-full" type="fontisto" size={20} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Icon name="arrow-left" type="simple-line-icon" size={20} />
          <Icon name="shopping-cart" type="feather" size={20} />
        </View>
        <View style={{height: 200, width: '100%'}} />
      </View>
      {/* <View style={{alignSelf: 'flex-end',   position:"absolute"}}>
          <Icon name="hearto" type="antdesign" />
        </View> */}
      <CustomText label="Pizza" />
    </View>
  );
};

export default PreviewComponent;

const styles = ScaledSheet.create({
  mainContainer: {
    width: '50%',
    alignSelf: 'center',
    backgroundColor: colors.textColorPrime,
    margin: '10@s',
    borderRadius: '10@s',

    overflow: 'hidden',
  },
  innerContainer: {
    backgroundColor: colors.textPrimaryBlur,
    borderTopLeftRadius: '10@s',
    borderTopRightRadius: '10@s',
    borderBottomEndRadius: '0@s',
    borderBottomRightRadius: '0@s',
    overflow: 'hidden',
    padding: '8@s',
  },
  time: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoBold,
    color: colors.black,
    marginLeft: '1@s',
  },
});