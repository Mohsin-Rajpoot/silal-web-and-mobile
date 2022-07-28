import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import {
  ScaledSheet,
  moderateScale,
  verticalScale,
  scale,
} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
import {Icon, Switch} from 'react-native-elements';
import colors from '@SilalApp/common/assets/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import ToggleSwitch from 'toggle-switch-react-native';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import { useTranslation } from 'react-i18next';
const TabItem = ({item, buttonSize}) => {
  const [checked, setChecked] = useState(false);
  const [active, setActive] = useState(false);
  const {t}=useTranslation()
  const [startTime, setStartTime] = useState(new Date());
  const [show, setShow] = useState(false);
  const onStartChange = (event, selectedDate, setTime, time) => {
    const currentDate = selectedDate || time;
    setShow(Platform.OS === 'ios');
    setTime(currentDate);
  };

  return (
    <View
      style={[
        !IsTablet ? styles.containerMobile : styles.container,
        {justifyContent: 'space-between'},
      ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: !IsTablet ? '100%' : '50%',
          marginBottom: verticalScale(10),
          marginTop: !IsTablet ? 0 : verticalScale(-10)

        }}>
        <CustomText
          fontSize={verticalScale(!IsTablet ? 12 : 10)}
          fontFamily={fonts.LatoRegular}
          label={t(item.day)} 

        />
        <View style={!IsTablet ? styles.container1Mobile : styles.container}>
          <ToggleSwitch
            isOn={active}
            onColor={colors.light_green}
            offColor={colors.light_grey}
            labelStyle={{color: 'black', fontWeight: '900'}}
            size={!IsTablet ? 'small' : 'large'}
            onToggle={() => {
              setActive(!active);
              // setState(true);
            }}
          />
          <CustomText
            fontSize={verticalScale(!IsTablet ?12:10)}
            marginLeft={5}
            fontFamily={fonts.LatoRegular}
            color={!IsTablet ? colors.textColor : colors.textPrimeColor}
            label={active ? 'Open' : 'Closed'}
            marginRight={5}
          />
        </View>
      </View>
      {active ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Pressable
            style={!IsTablet ?  styles.dropDownContainerMobile : styles.dropDownContainer}
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
            marginLeft={!IsTablet ? scale(10) : scale(5)}
            marginRight={!IsTablet ? scale(0) : scale(5)}
            fontFamily={fonts.LatoRegular}
            marginBottom={!IsTablet ? verticalScale(0) : verticalScale(10)}
            color={!IsTablet ? colors.textColor : colors.textPrimeColor}
            label={'TO'}
          />
          <View />
          <Pressable
            style={!IsTablet ?  styles.dropDownContainerMobile : styles.dropDownContainer}
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
        </View>
      ) : (
        <>
          <View />
         
        </>
      )}
    </View>
  );
};

export default TabItem;

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
    paddingBottom:'5@vs',
    borderRadius: '10@s',
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
    alignItems:'center',
    height:'35@vs',
    marginBottom:'10@vs',
    marginTop:'-10@vs'


  },
  dropDownContainerMobile: {
    paddingVertical: '5@vs',
    paddingHorizontal: '10@s',
    width: '40%',
    height:'35@vs',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.dropDownBackground,
    borderRadius: '4@ms',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop:'5@vs',
    marginBottom:'10@vs'
  },
});
