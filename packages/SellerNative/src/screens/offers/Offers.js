import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import Header from '../Profile/moleclues/Header';
import React, {useState} from 'react';
import Tabs from '../Profile/moleclues/Tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './style';
import TextInput from '@SilalApp/common/components/native/TextInput';
import {CustomButton} from '@SilalApp/common/components/native';
import OfferComponent from '../../components/OfferComponent';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import {ScaledSheet, moderateScale, scale} from 'react-native-size-matters';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
import fonts from '@SilalApp/common/assets/fonts';
import {Icon} from 'react-native-elements';
import CustomText from '@SilalApp/common/components/CustomText';
import colors from '@SilalApp/common/assets/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {Checkbox} from 'native-base';
import DaySelect from '../../components/DaySelection';
import {days} from '@SilalApp/common/assets/Data';
import OfferItem from '../../components/OfferItem';
import {useToast} from 'react-native-toast-notifications';
import {useTranslation} from 'react-i18next';
const Offers = ({navigation}) => {
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

  const [page, setPage] = useState(0);
  const openCreateOfferModal = () => {
    setCreatePostModal(true);
  };
  const onStartChangeTime = (event, selectedDate, setTime, time) => {
    const currentDate = selectedDate || time;
    setShow(Platform.OS === 'ios');
    setTime(currentDate);
  };
  const onStartChange = (e, selectedDate) => {
    const currentDate = selectedDate || offerData.startDate;
    setShow(Platform.OS === 'ios');
    setEndShow(Platform.OS === 'ios');
    setEvent({...offerData, startDate: currentDate});
  };
  const onEndChange = (e, selectedDate) => {
    const currentDate = selectedDate || offerData.endDate;
    setShow(Platform.OS === 'ios');
    setEndShow(Platform.OS === 'ios');
    setEvent({...offerData, endDate: currentDate});
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const showEndMode = currentMode => {
    setEndShow(true);
    setEndMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const showEndPicker = () => {
    showEndMode('date');
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
    <SafeAreaView style={styles.mainContainer}>
      <View style={{paddingHorizontal: 15}}>
        <Header label={t('offers')} onPress={() => navigation.openDrawer()} />
      </View>

      <View style={{paddingHorizontal: 15}}>
        <Tabs
          containerStyle={{marginTop: 10, marginBottom: 20}}
          tabs={[t('current'), t('Past')]}
          page={page}
        />
      </View>

      <ScrollView contentContainerStyle={{paddingHorizontal: 15}}>
        <View style={styles.inputContainer}>
          <View style={styles.inputContainerMian}>
            <TextInput
              search={true}
              inputStyle={styles.inputStyling}
              placeholderText="Search"
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              text={t('Create_new_offer')}
              containerStyle={styles.buttonStyle}
              textStyle={styles.buttonText}
              onPress={openCreateOfferModal}
            />
          </View>
        </View>
        <View style={styles.offerContainer}>
          <OfferComponent isModal={modal} setModal={setModal} />

          <OfferComponent />
          <OfferComponent />
          <OfferComponent />
          <OfferComponent />
          <OfferComponent />
          <OfferComponent />
        </View>
      </ScrollView>
      <CustomModal
        isModalVisible={modal}
        setModalVisible={setModal}
        modalWrapperStyle={{
          marginHorizontal: width(0),
          marginVertical: height(0),
          marginLeft: '63%',
          justifyContent: 'flex-start',
          borderRadius: 0,
        }}>
        <ScrollView
          style={styles.modalMainContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => setModal(false)}>
            <Icon
              name="close"
              type="antdesign"
              size={26}
              style={styles.crossIcon}
            />
          </TouchableOpacity>

          <View style={{marginVertical: 10}}>
            <CustomButton
              text={t('SaveChanges')}
              textStyle={styles.modalbutton}
              containerStyle={styles.buttonContainerSaveChanging}
            />
          </View>

          <Image
            source={require('../../Assets/image8.png')}
            style={styles.image}
          />
          <CustomText label={t('OfferProfile')} textStyle={styles.offerText} />
          <View style={styles.offerNameContainer}>
            <CustomText label={'Offername'} textStyle={styles.offerName} />
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
            <CustomText label={t('Duration')} textStyle={styles.offerName} />
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
              <CustomText
                label={t('Up_sale')}
                textStyle={styles.checkboxDetail}
              />
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
            {/* <DaySelect day={"EveryDay"} /> */}
          </View>
          <View style={styles.labelContainer}>
            <CustomText
              label={t('Active_hours')}
              textStyle={styles.activeDaysHeading}
            />
          </View>
          <DaySelect day={t('all_day')} />
          <View style={styles.labelContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Pressable
                style={[styles.dropDownContainer, {width: scale(75)}]}
                onPress={() => setShow(true)}>
                <CustomText
                  fontSize={10}
                  label={
                    startDate
                      ? moment(startDate).format('h:mm A')
                      : 'Start Time'
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
                style={[styles.dropDownContainer, {width: scale(75)}]}
                onPress={() => setShow(true)}>
                <CustomText
                  fontSize={10}
                  label={
                    startDate
                      ? moment(startDate).format('h:mm A')
                      : 'Start Time'
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
                  offerData.startDate
                    ? new Date(offerData.startDate)
                    : new Date()
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
                value={
                  offerData.endDate ? new Date(offerData.endDate) : new Date()
                }
                mode={endMode}
                display="default"
                onChange={onEndChange}
              />
            )}
          </View>
          <View style={{height: 90}} />
        </ScrollView>
      </CustomModal>
      <CustomModal
        isModalVisible={createPostModal}
        setModalVisible={setCreatePostModal}
        modalWrapperStyle={{
          marginHorizontal: width(0),
          marginVertical: height(0),
          marginLeft: width(20),
          justifyContent: 'flex-start',
          borderRadius: 0,
        }}>
        <ScrollView style={styles.modalMainContainer}>
          <View>
            <View style={styles.createOffer}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setCreatePostModal(false)}>
                  <Icon
                    name="arrow-back"
                    type="ionicons"
                    size={36}
                    color={colors.black}
                  />
                </TouchableOpacity>

                <CustomText
                  label={t('createOffer')}
                  textStyle={styles.creareOfferText}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setCreatePostModal(false)}>
                <Icon
                  name="close"
                  type="antdesign"
                  size={30}
                  style={styles.crossIcon1}
                />
              </TouchableOpacity>
            </View>
            <OfferItem />
            <View style={styles.pricingContainer}>
              <View style={styles.innerPricingContainer}>
                <CustomText
                  label={t('oldTotal')}
                  textStyle={styles.pricingTitle}
                />
                <CustomText label="$ 3.75" textStyle={styles.price} />
              </View>
              <View style={styles.innerPricingContainer}>
                <CustomText
                  label={t('newTotal')}
                  textStyle={styles.pricingTitle}
                />
                <CustomText label="$ 2.50" textStyle={styles.price} />
              </View>
              <View style={styles.innerPricingContainer}>
                <CustomText
                  label={t('customerWillSave')}
                  textStyle={styles.pricingTitle}
                />
                <CustomText label="$ 1.25" textStyle={styles.price} />
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                style={styles.addItemButton}
                activeOpacity={0.6}>
                <Icon
                  name="plus"
                  type="antdesign"
                  color={colors.primary}
                  size={30}
                />
                <CustomText
                  label={t('AddItemToOffer')}
                  textStyle={styles.addItemText}
                />
              </TouchableOpacity>

              <CustomButton
                text={t('Apply')}
                textStyle={styles.applyButtonText}
                containerStyle={styles.applycontainer}
                onPress={() => {
                  setCreatePostModal(false);
                  toast.show('New offer successfully added');
                }}
              />
            </View>
          </View>
        </ScrollView>
      </CustomModal>
    </SafeAreaView>
  );
};

export default Offers;
