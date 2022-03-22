import {View, TouchableOpacity} from 'react-native';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
  scale,
} from 'react-native-size-matters';
import React, {useState} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import TextWithIcon from '../../components/TextWithIcon';
import colors from '@SilalApp/common/assets/colors';
import Header from '../Profile/moleclues/Header';
import fonts from '@SilalApp/common/assets/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Setting = () => {
  const [rightArrow, setRightArrow] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <Header label={'Setting'} />
      {rightArrow ? null : (
        <>
          <View style={{width: '35%', marginTop: verticalScale(20)}}>
            <CustomText textStyle={styles.titleText} label="Title " />
            <TextWithIcon
              label="Pre-order settings"
              onPress={() => {
                setRightArrow(true);
                setLeftArrow(true);
              }}
            />
          </View>
          <View style={{width: '35%'}}>
            <CustomText textStyle={styles.titleText} label="Account " />
            <TextWithIcon
              iconDelete={true}
              textStyle={{color: colors.red}}
              label="Delete account"
            />
          </View>
        </>
      )}

      {leftArrow ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: verticalScale(15),
            }}>
            <TouchableOpacity
              onPress={() => {
                setLeftArrow(false);
                setRightArrow(false);
              }}>
              <FontAwesome5 style={styles.leftArrow} name="arrow-left" />
            </TouchableOpacity>
            <CustomText
              textStyle={styles.preOrderText}
              label="Pre-order settings"
            />
          </View>
          <View style={styles.preOrderContainer}>
            <CustomText
              textStyle={styles.allowPreText}
              label="Allow pre-orders"
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: verticalScale(10),
              }}>
              <View style={styles.radioContainer}></View>
              <CustomText textStyle={styles.alwaysText} label="Always" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: verticalScale(10),
              }}>
              <View style={styles.radioContainer}></View>
              <CustomText textStyle={styles.alwaysText} label="Never" />
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default Setting;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    padding: '15@ms',
    flex: 1,
  },
  titleText: {
    fontSize: '15@ms',
    fontFamily: fonts.LatoBold,
    marginBottom: '8@vs',
  },
  leftArrow: {
    fontSize: '20@ms',
    marginRight: '15@s',
    color: colors.black,
  },
  preOrderText: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '20@ms',
  },
  preOrderContainer: {
    backgroundColor: colors.textWhite,
    width: '35%',
    padding: '15@ms',
    borderRadius: '5@ms',
    marginTop: '10@vs',
  },
  allowPreText: {
    fontSize: '16@ms',
    fontFamily: fonts.PoppinsMedium,
    marginBottom: '10@s',
  },
  radioContainer: {
    width: '20@ms',
    height: '20@ms',
    borderRadius: '100@ms',
    marginRight: '10@s',
    overflow: 'hidden',
    backgroundColor: '#E8E8E8',
  },
  alwaysText: {
    fontSize: '15@ms',
    fontFamily: fonts.LatoRegular,
  },
});
