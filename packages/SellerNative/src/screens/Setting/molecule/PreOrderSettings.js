import {StyleSheet, Text, TouchableOpacity, View, Switch} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
  scale,
} from 'react-native-size-matters';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomText from '@SilalApp/common/components/CustomText';
import {CheckBox, Icon} from 'react-native-elements';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import IsTablet from '@SilalApp/common/components/native/IsTablet';

const PreOrderSettings = ({navigation}) => {
  const [check, setCheck] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.profileBackground,
        height: '100%',
        width: '100%',
      }}>
      <TouchableOpacity
        style={{flexDirection: 'row', marginHorizontal: 10}}
        onPress={() => navigation.goBack()}>
        <MaterialIcons
          name={IsTablet ? 'keyboard-backspace' : 'arrow-back-ios'}
          style={IsTablet ? styles.backButton : styles.backbuttonMobile}
        />
        <CustomText
          textStyle={IsTablet ? styles.allowPreText : styles.allowPreTextMobile}
          label="Allow pre-orders"
        />
      </TouchableOpacity>
      {IsTablet ? (
        <View style={styles.preOrderContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBox
              center
              checkedIcon={
                <Icon
                  name="radio-button-checked"
                  type="material"
                  color="green"
                  size={28}
                  iconStyle={{marginRight: 2}}
                />
              }
              uncheckedIcon={
                <Icon
                  name="radio-button-unchecked"
                  type="material"
                  color="grey"
                  size={28}
                  iconStyle={{marginRight: 2}}
                />
              }
              checked={check}
              onPress={() => setCheck(true)}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setCheck(true)}>
              <CustomText textStyle={styles.alwaysText} label="Always" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBox
              center
              checkedIcon={
                <Icon
                  name="radio-button-checked"
                  type="material"
                  color="green"
                  size={28}
                  iconStyle={{marginRight: 2}}
                />
              }
              uncheckedIcon={
                <Icon
                  name="radio-button-unchecked"
                  type="material"
                  color="grey"
                  size={28}
                  iconStyle={{marginRight: 2}}
                />
              }
              checked={!check}
              onPress={() => setCheck(false)}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setCheck(false)}>
              <CustomText textStyle={styles.alwaysText} label="Never" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.containerT}>
          <Text>Allow pre-orders</Text>
          <Switch
            trackColor={{false: colors.blurPrimary, true: colors.primary}}
            thumbColor={isEnabled ? colors.textWhite : colors.bluish}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PreOrderSettings;

const styles = ScaledSheet.create({
  preOrderContainer: {
    backgroundColor: colors.textWhite,
    width: '35%',
    borderRadius: '5@ms',
    marginTop: '10@vs',
  },
  allowPreText: {
    fontSize: '15@ms',
    fontFamily: fonts.PoppinsMedium,
    paddingHorizontal: '10@ms',
    marginTop: '20@ms',
  },
  allowPreTextMobile: {
    fontSize: '17@ms',
    fontFamily: fonts.PoppinsMedium,
    paddingHorizontal: '10@ms',
    marginTop: '20@ms',
  },
  alwaysText: {
    fontSize: '15@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  backButton: {
    color: colors.black,
    fontSize: '20@s',
    marginTop: '12@s',
  },
  backbuttonMobile: {
    color: colors.black,
    fontSize: '20@s',
    marginTop: '21@s',
  },
  containerT: {
    backgroundColor: colors.textWhite,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: '20@s',
    marginVertical: '20@s',
    height: '45@s',
    paddingHorizontal: '10@s',
    borderRadius: 4,
  },
});
