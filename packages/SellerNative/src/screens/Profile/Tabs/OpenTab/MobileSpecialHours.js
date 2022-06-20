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
import CustomModal from '@SilalApp/common/components/native/CustomModal';

const SpecialTabItem = ({item}) => {
  const [checked, setChecked] = useState(false);
  const [modal, setModal] = useState(false);
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
    <View style={styles.mainContainer}>
      <View style={checked ? styles.headerBorder : styles.headerContainer}>
        <View style={styles.toggleContainer}>
          <CustomText
            fontSize={verticalScale(!IsTablet ? 12 : 10)}
            fontFamily={fonts.LatoRegular}
            label={checked ? 'Open' : 'Closed'}
            marginRight={5}
            color={!IsTablet ? colors.textColor : colors.textPrimeColor}
          />
          <ToggleSwitch
            isOn={checked}
            onColor={colors.light_green}
            offColor={colors.light_grey}
            labelStyle={{color: 'black', fontWeight: '900'}}
            size={'medium'}
            onToggle={() => {
              setChecked(!checked);
              // setState(true);
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => setModal(true)}
            style={styles.deledContainer}>
            <Icon
              color={colors.lightRed}
              type="antdesign"
              name="delete"
              size={moderateScale(14)}
            />
          </TouchableOpacity>
        </View>
      </View>
      {checked && (
        <View>
          <Pressable
            style={[styles.dropDownContainer, {width: '100%'}]}
            onPress={() => setShow(true)}>
            <Icon type="antdesign" name="calendar" size={verticalScale(12)} />
            <CustomText
              fontSize={verticalScale(10)}
              marginLeft={scale(5)}
              marginBottom={-2}
              label={
                startDate
                  ? moment(startDate).format('DD-MM-YYYY')
                  : 'Start Time'
              }
            />
          </Pressable>
          <View style={{height: verticalScale(10)}} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Pressable
              style={[
                styles.dropDownContainer,
                {width: '40%', justifyContent: 'space-between'},
              ]}
              onPress={() => setShow(true)}>
              <CustomText
                fontSize={10}
                marginTop={2}
                label={
                  startTime ? moment(startTime).format('h:mm A') : 'Start Time'
                }
              />
              <Icon
                type="antdesign"
                name="caretdown"
                size={moderateScale(10)}
              />
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
            <View
              style={{
                width: '20%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CustomText
                fontSize={12}
                fontFamily={fonts.LatoRegular}
                color={colors.textColor}
                label={'TO'}
              />
            </View>
            <View />
            <Pressable
              style={[
                styles.dropDownContainer,
                {width: '40%', justifyContent: 'space-between'},
              ]}
              onPress={() => setShow(true)}>
              <CustomText
                fontSize={10}
                marginTop={2}
                label={
                  startTime ? moment(startTime).format('h:mm A') : 'Start Time'
                }
              />
              <Icon
                type="antdesign"
                name="caretdown"
                size={moderateScale(10)}
              />
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
        </View>
      )}
      {modal && (
        <CustomModal
          isModalVisible={modal}
          setModalVisible={setModal}
          modalWrapperStyle={{
            marginVertical: '92%',
            justifyContent: 'flex-start',
          }}>
          <View style={{width: '100%', padding: moderateScale(10)}}>
            <View style={styles.modalContainer}>
              <CustomText fontFamily={fonts.PoppinsSemiBold} label="Delete special time?" />
            </View>
            <View style={styles.modalBtnContainer}>
              
              <CustomButton text="Cancel" onPress={()=>setModal(false)}  containerStyle={styles.modalBtn} />
              <CustomButton
              onPress={()=>setModal(false)}
                text="Delete"
                containerStyle={[
                  styles.modalBtn,
                  {backgroundColor: colors.redLight},
                ]}
                textStyle={{color:colors.red}}
              />
            </View>
          </View>
        </CustomModal>
      )}
    </View>
  );
};

export default SpecialTabItem;

const styles = ScaledSheet.create({
  mainContainer: {
    width: '100%',
    backgroundColor: colors.textWhite,
    borderRadius: '12@msr',
    padding: '15@msr',
    elevation: 1,
    marginBottom: '10@vs',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerBorder: {
    paddingBottom: '10@vs',
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    marginBottom: '15@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deledContainer: {
    width: '35@msr',
    height: '35@msr',
    paddingHorizontal: scale(5),
    backgroundColor: colors.red50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10@s',
    borderRadius: '5@msr',
  },
  dropDownContainer: {
    paddingVertical: '5@vs',
    paddingHorizontal: '10@s',
    height: '35@vs',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.dropDownBackground,
    borderRadius: '4@ms',
    alignItems: 'center',
  },
  modalContainer: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: '15@vs',
    alignSelf: 'center',
    paddingBottom: '15@vs',
    alignItems: 'center',
  },
  modalBtnContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalBtn: {
    width: '100%',
    height: '40@vs',
    paddingHorizontal: '39@s',
  },
});
