import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import {ScaledSheet, moderateScale, scale} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
import {Icon, Switch} from 'react-native-elements';
import colors from '@SilalApp/common/assets/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CustomButton} from '@SilalApp/common/components/native';
const SpecialTabItem = ({item}) => {
  const [checked, setChecked] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
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
      <View style={styles.container}>
        <Switch
          color={colors.light_green}
          value={checked}
          onValueChange={value => setChecked(value)}
        />
        <CustomText
          fontSize={12}
          marginLeft={5}
          fontFamily={fonts.LatoRegular}
          label={checked ? 'Open' : 'Closed'}
        />
      </View>
      {checked ? (
        <>
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
            marginLeft={5}
            fontFamily={fonts.LatoRegular}
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
          <TouchableOpacity
            style={[
              styles.dropDownContainer,
              {
                width: null,
                paddingHorizontal: moderateScale(5),
                backgroundColor: colors.red50,
              },
            ]}>
            <Icon
              color={colors.lightRed}
              type="antdesign"
              name="delete"
              size={moderateScale(14)}
            />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View />
          <View />
          <View />
          <View />
          <View />
          <View />
          <View />
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
});
