import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import {
  ScaledSheet,
  moderateScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
import {Icon, Switch} from 'react-native-elements';
import colors from '@SilalApp/common/assets/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CustomButton} from '@SilalApp/common/components/native';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import ToggleSwitch from 'toggle-switch-react-native';

const SpecialTabItem = ({item}) => {
  const [checked, setChecked] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [active, setActive] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const onStartChange = (event, selectedDate, setTime, time) => {
    const currentDate = selectedDate || time;
    setShow(Platform.OS === 'ios');
    setTime(currentDate);
  };
  return (
    <View style={[styles.container, {justifyContent: 'space-between'}]}>
      <Pressable
        style={[styles.dropDownContainer, {width: scale(75)}]}
        onPress={() => setShow(true)}>
        <CustomText
          fontSize={10}
          label={
            startDate ? moment(startDate).format('DD-MM-YYYY') : 'Start Time'
          }
        />
        <Icon type="antdesign" name="calendar" size={moderateScale(10)} />
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startTime ? new Date(startTime) : new Date()}
          mode={'date'}
          display="default"
          onChange={(event, selectedDate) =>
            onStartChange(event, selectedDate, setStartTime, startTime)
          }
        />
      )}
      <View style={[styles.container, {marginTop: verticalScale(-20)}]}>
        <ToggleSwitch
          isOn={checked}
          onColor={colors.light_green}
          offColor={colors.light_grey}
          labelStyle={{color: 'black', fontWeight: '900'}}
          size={'large'}
          onToggle={() => {
            setChecked(!checked);
            // setState(true);
          }}
        />
        <CustomText
          fontSize={verticalScale(10)}
          marginLeft={5}
          fontFamily={fonts.LatoRegular}
          label={checked ? 'Open' : 'Closed'}
          marginRight={5}
          color={colors.textPrimeColor}
        />
      </View>
      {checked ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Pressable
            style={styles.dropDownContainer}
            onPress={() => setShow(true)}>
            <CustomText
              fontSize={10}
              label={
                startTime ? moment(startTime).format('h:mm A') : 'Start Time'
              }
            />
            <Icon type="antdesign" name="caretdown" size={moderateScale(10)} />
          </Pressable>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={startTime ? new Date(startTime) : new Date()}
              mode={'time'}
              display="default"
              onChange={(event, selectedDate) =>
                onStartChange(event, selectedDate, setStartTime, startTime)
              }
            />
          )}
          <CustomText
            fontSize={12}
            marginLeft={scale(5)}
            marginRight={scale(5)}
            fontFamily={fonts.LatoRegular}
            marginBottom={verticalScale(10)}
            color={colors.textPrimeColor}
            label={'TO'}
          />
          <View />
          <Pressable
            style={styles.dropDownContainer}
            onPress={() => setShow(true)}>
            <CustomText
              fontSize={10}
              label={
                startTime ? moment(startTime).format('h:mm A') : 'Start Time'
              }
            />
            <Icon type="antdesign" name="caretdown" size={moderateScale(10)} />
          </Pressable>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={startTime ? new Date(startTime) : new Date()}
              mode={'time'}
              display="default"
              onChange={(event, selectedDate) =>
                onStartChange(event, selectedDate, setStartTime, startTime)
              }
            />
          )}
          <TouchableOpacity style={styles.deledContainer}>
            <Icon
              color={colors.lightRed}
              type="antdesign"
              name="delete"
              size={moderateScale(14)}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View />
        </>
      )}
    </View>
  );
};

export default SpecialTabItem;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container1Mobile: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  containerMobile: {
    flexDirection: 'column',
    width: '95%',
    backgroundColor: colors.textWhite,
    elevation: 1,
    alignSelf: 'center',
    padding: '15@s',
    paddingBottom: '5@vs',
    borderRadius: '10@s',
  },
  dropDownContainer: {
    paddingVertical: '5@vs',
    paddingHorizontal: '10@s',
    width: '60@s',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.dropDownBackground,
    borderRadius: '4@ms',
    borderWidth: 2,
    borderColor: '#ebebeb',
    justifyContent: 'space-between',
  },

  dropDownContainer: {
    paddingVertical: '5@vs',
    paddingHorizontal: '10@s',
    width: '80@s',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.dropDownBackground,
    borderRadius: '4@ms',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '30@vs',
    marginBottom: '10@vs',
    marginTop: '-10@vs',
  },
  dropDownContainerMobile: {
    paddingVertical: '5@vs',
    paddingHorizontal: '10@s',
    width: '40%',
    height: '30@vs',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.dropDownBackground,
    borderRadius: '4@ms',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5@vs',
    marginBottom: '10@vs',
  },
  deledContainer: {
    width: '35@msr',
    height: '35@msr',
    paddingHorizontal: scale(5),
    backgroundColor: colors.red50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-20@vs',
    marginLeft: '10@s',
    borderRadius: '5@msr',
  },
});
