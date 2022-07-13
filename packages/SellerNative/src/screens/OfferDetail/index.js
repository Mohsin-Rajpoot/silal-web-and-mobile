import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {
  ScaledSheet,
  scale,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
import colors from '@SilalApp/common/assets/colors';
import {useToast} from 'react-native-toast-notifications';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
import {CustomButton} from '@SilalApp/common/components/native';
import CustomText from '@SilalApp/common/components/CustomText';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import TextInput from '@SilalApp/common/components/native/TextInput';
import {Checkbox} from 'native-base';
import DaySelect from '../../components/DaySelection/index';
import {days} from '@SilalApp/common/assets/Data';
import Header from '../../components/Header';


const OfferDetail = ({navigation}) => {
  const toast = useToast();
  const {t} = useTranslation();
  const init = {
    startDate: '',
    endDate: '',
  };

  const [activeSwitch, setActiveSwitch] = useState(false);
  const [modal, setModal] = useState(false);
  const [createPostModal, setCreatePostModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [mode, setMode] = useState('date');
  const [endMode, setEndMode] = useState('date');
  const [show, setShow] = useState(false);
  const [endShow, setEndShow] = useState(false);
  const [offerData, setOffferData] = useState(init);

  const [startTime, setStartTime] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [active, setActive] = useState(1);
  const [page, setPage] = useState(0);
  const openCreateOfferModal = () => {
    setCreatePostModal(true);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const showEndPicker = () => {
    showEndMode('date');
  };
  const showEndMode = currentMode => {
    setEndShow(true);
    setEndMode(currentMode);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const onEndChange = (e, selectedDate) => {
    const currentDate = selectedDate || offerData.endDate;
    setShow(Platform.OS === 'ios');
    setEndShow(Platform.OS === 'ios');
    setEvent({...offerData, endDate: currentDate});
  };
  const onStartChange = (e, selectedDate) => {
    const currentDate = selectedDate || offerData.startDate;
    setShow(Platform.OS === 'ios');
    setEndShow(Platform.OS === 'ios');
    setEvent({...offerData, startDate: currentDate});
  };
  const DayShower = () => {
    var dayAppender = [];
    days.map((item, index) => {
      dayAppender.push(
        <DaySelect
          day={item}
          state={activeSwitch}
          setState={setActiveSwitch}
        />,
      );
      // return <DaySelect day={item} />;
    });

    return dayAppender;
  };
  return (
    <ScrollView
      style={styles.modalMainContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={{marginVertical: 10}}>
        <Header showIcon title="Sunday Funday" dostIcon={true} goBack={()=>navigation.pop()}  />
        <CustomText
          label="Salads"
          color={colors.gray50}
          marginLeft={scale(42)}
          fontFamily={fonts.LatoBold}
          fontSize={verticalScale(11)}
        />
      </View>
      <Image source={require('../../Assets/image8.png')} style={styles.image} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <CustomButton
          text="Change photo"
          containerStyle={{
            height: verticalScale(40),
            width: '85%',
            backgroundColor: colors.grayColorLight,
          }}
          textStyle={{color: colors.black}}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.redLightColor,
            width: '13%',
            height: verticalScale(40),
            borderRadius: verticalScale(8),
          }}>
          <Icon
            type="antdesign"
            name="delete"
            size={moderateScale(18)}
            color={colors.red}
          />
        </View>
      </View>
      <CustomText label={t('OfferProfile')} textStyle={styles.offerText} />
      <View style={styles.offerNameContainer}>
        <CustomText label={t('Offername')} textStyle={styles.offerName} />
        <CustomText
          label={t('charcterLeft')}
          textStyle={styles.characterLeft}
        />
      </View>
      <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Sunday Funday"
          style={styles.dropDownStyle}
          placeholderStyle={styles.dropDownPlaceHolder}
          dropDownContainerStyle={styles.dropdownContainer}
          iconContainerStyle={{backgroundColor: 'red'}}
        />
      </View>
      <View style={{height: 10}} />
      <View style={styles.offerNameContainer}>
        <CustomText
          label={t('OfferDescription')}
          textStyle={styles.offerName}
        />
        <CustomText
          label="0 characters left"
          textStyle={styles.characterLeft}
        />
      </View>
      <View style={styles.inputContainerStyle}>
        <TextInput
          placeholderText={
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
          }
          multiLine={true}
          placeholderTextColor={colors.black}
          inputStyle={styles.inputStyle}
          inputTextStyle={styles.inPutTextStyle}
        />
      </View>
      <View style={styles.labelContainer}>
        <CustomText label={t('date_range')} textStyle={styles.offerName} />
      </View>
      <View style={styles.durationContainer}>
        <View style={styles.dateTimeContainer}>
          <TouchableOpacity activeOpacity={0.6} onPress={showDatepicker}>
            <Text style={styles.dateTimeText}>
              {typeof offerData.startDate === 'object'
                ? moment(offerData.startDate).format('YYYY-MM-DD')
                : offerData.startDate
                ? offerData.startDate
                : t('start_date')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dateTimeContainer}>
          <TouchableOpacity activeOpacity={0.6} onPress={showEndPicker}>
            <Text style={styles.dateTimeText}>
              {typeof offerData.endDate === 'object'
                ? moment(offerData.endDate).format('YYYY-MM-DD')
                : offerData.endDate
                ? offerData.endDate
                : t('end_date')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.labelContainer}>
        <CustomText
          label={t('Limited_quantity')}
          textStyle={styles.offerName}
        />
      </View>
      <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="3500"
          style={styles.dropDownStyle}
          placeholderStyle={styles.dropDownPlaceHolder}
          dropDownContainerStyle={styles.dropdownContainer}
          iconContainerStyle={{backgroundColor: 'red'}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <Checkbox>
          <CustomText
            label={t('TreatOffers')}
            textStyle={styles.checkboxDetail}
          />
        </Checkbox>
        <Checkbox>
          <CustomText label={t('Up_sale')} textStyle={styles.checkboxDetail} />
        </Checkbox>
      </View>
      <View style={styles.labelContainer}>
        <CustomText
          label={t('ActiveDays')}
          textStyle={styles.activeDaysHeading}
        />
      </View>

      <View style={styles.daySelectionContainer}>
        <DayShower />
      </View>
      <View style={styles.labelContainer}>
        <CustomText
          label={t('Active_hours')}
          textStyle={styles.activeDaysHeading}
        />
      </View>
      <DaySelect day={t('all_day')} toggleButton={true} />
      <View style={styles.labelContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Pressable
            style={[
              styles.dropDownContainer,
              {
                width: '40%',
                height: verticalScale(40),
                borderWidth: 0,
                backgroundColor: colors.dullWhite,
              },
            ]}
            onPress={() => setShow(true)}>
            <CustomText
              fontSize={10}
              marginTop={4}
              label={
                startDate ? moment(startDate).format('h:mm A') : 'Start Time'
              }
            />
            <Icon
              type="antdesign"
              name="caretdown"
              size={moderateScale(8)}
              color={colors.black}
            />
          </Pressable>
          <CustomText
            fontSize={12}
            marginLeft={5}
            fontFamily={fonts.LatoRegular}
            label={'TO'}
          />
          <Pressable
            style={[
              styles.dropDownContainer,
              {
                width: '40%',
                height: verticalScale(40),
                borderWidth: 0,
                backgroundColor: colors.dullWhite,
              },
            ]}
            onPress={() => setShow(true)}>
            <CustomText
              fontSize={10}
              marginTop={4}
              label={
                startDate ? moment(startDate).format('h:mm A') : 'Start Time'
              }
            />
            <Icon
              type="antdesign"
              name="caretdown"
              size={moderateScale(8)}
              color={colors.black}
            />
          </Pressable>
        </View>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startTime ? new Date(startTime) : new Date()}
          mode={'time'}
          display="default"
          onChange={(event, selectedDate) =>
            onStartChangeTime(event, selectedDate, setStartTime, startTime)
          }
        />
      )}
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={
              offerData.startDate ? new Date(offerData.startDate) : new Date()
            }
            mode={mode}
            display="default"
            onChange={onStartChange}
          />
        )}
      </View>
      <View>
        {endShow && (
          <DateTimePicker
            testID="dateTimePicker"
            value={offerData.endDate ? new Date(offerData.endDate) : new Date()}
            mode={endMode}
            display="default"
            onChange={onEndChange}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          text={t('SaveChanges')}
          textStyle={styles.modalbutton}
          containerStyle={styles.buttonContainerSaveChanging}
        />
      </View>
    </ScrollView>
  );
};

export default OfferDetail;

const styles = ScaledSheet.create({
  modalMainContainer: {
    width: '95%',
    height: '100%',
    marginTop: '10@s',
    alignSelf: 'center',
  },
  modalbutton: {},
  buttonContainerSaveChanging: {
    width: '100%',
    alignItems: 'center',
    height:'45@vs'
  },
  image: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: '10@ms',
    height: '200@s',
    resizeMode: 'cover',
    marginBottom: '10@vs',
  },
  offerText: {
    fontSize: '13@vs',
    fontFamily: fonts.PoppinsSemiBold,
    marginTop: '4@s',
    color: colors.black,
    marginBottom: '3@s',
  },
  offerName: {
    fontSize: '10@vs',
    fontFamily: fonts.LatoSemiBold,
    color: colors.black,
  },
  createOffer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelContainer: {
    marginVertical: '6@ms',
  },
  creareOfferText: {
    fontSize: '16@ms',
    fontFamily: fonts.bold,
    color: colors.black,
    marginLeft: '5@s',
  },
  crossIcon1: {
    alignSelf: 'flex-end',
  },
  characterLeft: {
    fontSize: '9@vs',
    fontFamily: fonts.LatoSemiBold,
    color: colors.light_grey,
  },
  dropDownStyle: {
    width: '100%',
    borderColor: colors.dullWhite,
    marginVertical: '5@ms',
    backgroundColor: colors.dullWhite,
  },
  dropDownPlaceHolder: {
    color: colors.black,
    fontSize: '13@ms',
    fontFamily: fonts.LatoRegular,
  },
  dropdownContainer: {
    borderColor: colors.borderColor,
  },
  inPutTextStyle: {
    fontSize: '11@ms',
    fontFamily: fonts.LatoRegular,
    lineHeight: 22,
  },
  inputStyle: {
    height: '75@vs',
    backgroundColor: colors.dullWhite,
  },
  inputContainerStyle: {
    marginVertical: '5@ms',
  },
  DateOfBirth: {
    backgroundColor: 'red',
  },
  durationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dateTimeContainer: {
    width: '48%',
    borderColor: colors.light_grey,
    borderWidth: '0.5@ms',
    borderRadius: '8@s',
    backgroundColor: colors.dullWhite,
    height: '40@vs',
    justifyContent: 'center',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginVertical: '10@ms',
  },
  checkboxDetail: {
    fontSize: '13@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
    marginHorizontal:"5@s"
  },
  activeDaysHeading: {
    fontSize: '14@vs',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
  },
  daySelectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'Yellow',
    width: '100%',
    justifyContent: 'space-between',
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
  dateTimeText: {
    color: colors.black,
    margin: '6@s',
  },
  buttonContainer: {
    backgroundColor: 'white',
    marginTop: '10@vs',
    paddingTop: '10@vs',
    paddingBottom:'40@vs',
    backgroundColor: 'whiten',
    borderTopColor: colors.borderColor,
    borderTopWidth: 1,
  },
});
