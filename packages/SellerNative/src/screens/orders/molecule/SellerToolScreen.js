import {View, TouchableOpacity,Text,TextInput} from 'react-native';
import React, {useState} from 'react';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import TextWithIconCompo from './TextWithIconCompo';
import {useTranslation} from 'react-i18next';
import Header from '../../../components/Header';
import fonts from '@SilalApp/common/assets/fonts';
import images from '../../../../assets/images';
import {SwipeListView} from 'react-native-swipe-list-view';
import CustomText from '@SilalApp/common/components/CustomText';
import {Icon,CheckBox} from 'react-native-elements';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import TimerMobile from '../../../components/TimerMobile';
import { CustomButton } from '@SilalApp/common/components/native';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';

const SellerToolScreen = ({navigation}) => {
  const {t} = useTranslation();
  const [contactModal, setContactModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [noteModal, setNoteModal] = useState(false);
  const [addNote, setAddNote] = useState(2);
  const [check, setcheck] = useState(0);



  const dataArray = [
    {
      id: 1,
      text: t('Start_shift'),
      toggle: true,
      iconPath: images.flagIcon,
    },
    {
      id: 2,
      text: t('Notes'),
      iconPath: images.noteIcon,
      onPress: () => navigation.navigate('Notes'),
    },
    {
      id: 3,
      text: t('delivery_estimation_time'),
      iconPath: images.clockIcon,
      time: '40 Mint',
      onPress: () => setModal(true),
    },
    {
      id: 4,
      text: t('contact_info'),
      iconPath: images.infoIcon,
      onPress: () => setContactModal(true),
    },
  ];
  const data3 = [{id: 1}];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header title={t('sellers_tool')} dostIcon={true} showIcon />
      </View>
      {dataArray.map((item, index) => {
        return (
          <TextWithIconCompo
            key={item.id}
            iconPath={item.iconPath}
            text={item.text}
            time={item.time}
            toggle={item.toggle}
            onPress={item.onPress}
          />
        );
      })}
      {contactModal && (
        <CustomModal
          isModalVisible={contactModal}
          setModalVisible={setContactModal}
          modalWrapperStyle={{
            marginHorizontal: scale(15),
            marginVertical: height(31),
          }}
          modalContainerStyle={{
            borderRadius: 2,
            backgroundColor: 'white',
          }}>
          <View style={{marginHorizontal: scale(10)}}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: scale(-10),
                top: verticalScale(-10),
              }}
              activeOpacity={0.6}
              onPress={() => setContactModal(false)}>
              <Icon name="cross" type="entypo" size={24} />
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <CustomText
                label={t('Customer_Support')}
                fontSize={18}
                fontFamily={fonts.bold}
                marginBottom={verticalScale(5)}
              />
              <CustomText
                label={t('Customer_SupportDetail')}
                fontSize={16}
                fontFamily={fonts.LatoMedium}
                textStyle={{textAlign: 'center'}}
                color={colors.textPrimary}
              />
            </View>
            <View>
              <View style={{flexDirection: 'row', marginTop: 25}}>
                <View style={styles.maiLContainer}>
                  <Icon
                    name="mail"
                    type="entypo"
                    size={26}
                    color={colors.primary}
                  />
                </View>
                <View>
                  <CustomText label={t('email')} textStyle={styles.mailText} />
                  <CustomText
                    label={'customer.suppor@silal.com'}
                    textStyle={styles.mail}
                  />
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row', marginTop: 25}}>
                  <View style={styles.maiLContainer}>
                    <Icon
                      name="phone"
                      type="fontawesome"
                      size={26}
                      color={colors.primary}
                    />
                  </View>
                  <View>
                    <CustomText
                      label={t('Contact_number')}
                      textStyle={styles.mailText}
                    />
                    <CustomText
                      label={'(202) 398 0202'}
                      textStyle={styles.mail}
                    />
                    <CustomText
                      label={'(202) 398 0202'}
                      textStyle={styles.mail}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </CustomModal>
      )}
      {modal && (
        <CustomModal
          isModalVisible={modal}
          setModalVisible={setModal}
          modalWrapperStyle={{
            marginHorizontal: scale(15),
            marginVertical: height(26),
          }}
          modalContainerStyle={{
            borderRadius: 2,
            backgroundColor: 'white',
            borderRadius: 12,
            width: '100%',
            height: '100%',
          }}>
          <TouchableOpacity
            style={{position: 'absolute', top: 10, right: 10}}
            onPress={() => setModal(false)}>
            <Icon
              type="entypo"
              name="cross"
              color={colors.black}
              size={verticalScale(20)}
            />
          </TouchableOpacity>
          <TimerMobile label={t('deliveryEstimateTime')} />
        </CustomModal>
      )}
     {noteModal &&   <CustomModal
        isModalVisible={noteModal}
        setModalVisible={setNoteModal}
        modalWrapperStyle={{
          
          justifyContent: 'flex-start',
          marginHorizontal: width(0),
          marginVertical: height(0),
          padding: 10,
          flex: 1,
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <CustomText label={t('Notes')} textStyle={styles.notesTitle} />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setNoteModal(false)}>
            <Icon
              name="cross"
              type="entypo"
              size={24}
              style={{alignSelf: 'flex-end'}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '93%',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          {addNote == 0 ? (
            <View style={{width: '100%'}}>
              <CustomText
                label="21 November 2021"
                textStyle={styles.addNoteText}
              />
              <View style={{flexDirection: 'row', alignItems: 'center',height:25}}>
                <CheckBox
                  checked={check}
                  onPress={() => setcheck(0)}
                  checkedColor="#5AB3A8"
                  uncheckedColor="red"
                />
                <TextInput
                  style={{
                    backgroundColor: 'transparent',
                    borderLeftColor: colors.black,
                    borderLeftWidth: 1,
                    height: "100%",
                  }}
                />
              </View>
            </View>
          ) : addNote == 1 ? (
            <View>
              <CustomText label="Ehllo" />
            </View>
          ) : addNote == 2 ? (
            <>
              <SwipeListView
                data={data3}
                renderItem={(data, rowMap) => (
                  <View>
                    <View style={styles.noteDetail}>
                      <CustomText
                        label="20 November 2021"
                        textStyle={styles.date}
                      />
                      <CustomText
                        label="Sed ut perspiciatis unde omnis iste natus error sit volupta..."
                        textStyle={styles.noteDetailText}
                      />
                    </View>

                    <View style={styles.borderView} />
                  </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                  <View style={styles.rowBack}>
                    
                      <TouchableOpacity
                        style={
                          {
                            backgroundColor: '#FB5C5C',
                           position: 'absolute',
                          right: 1,
                          marginTop:2,
                          width: 85,
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingVertical:verticalScale(18)
                        }
                         
                        }>
                        <Text style={styles.BackButtonsText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                )}
                rightOpenValue={-90}
              />

              {/* <View style={styles.noteDetail}>
         

              <View style={{marginHorizontal: 10, marginVertical: 5}}>
                <CustomText label="17 November 2021" textStyle={styles.date} />
                <CustomText
                  label="Sed ut perspiciatis unde omnis iste natus error sit volupta..."
                  textStyle={styles.noteDetailText}
                />
              </View>

              <View style={styles.borderView} />
              <View style={{marginHorizontal: 10, marginVertical: 5}}>
                <CustomText label="16 November 2021" textStyle={styles.date} />
                <CustomText
                  label="Sed ut perspiciatis unde omnis iste natus error sit volupta..."
                  textStyle={styles.noteDetailText}
                />
              </View>

              <View style={styles.borderView} />
            </View> */}
            </>
          ) : (
            <View />
          )}
          {addNote == 0 ? (
            <CustomButton
              text={'Save note'}
              containerStyle={styles.saveNoteButton}
              textStyle={styles.textNote}
              onPress={() => setAddNote(2)}
            />
          ) : addNote == 2 ? (
            <TouchableOpacity activeOpacity={0.6} onPress={() => setAddNote(0)}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Icon
                  name="plus"
                  type="antdesign"
                  color={colors.white}
                  size={28}
                  style={styles.plus}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      </CustomModal>}
    </View>
  );
};

export default SellerToolScreen;

const styles = ScaledSheet.create({
  mainContainer: {
    padding: '15@vs',
    backgroundColor: colors.background,
    flex: 1,
  },
  headerContainer: {
    paddingVertical: '10@vs',
  },
  headingCustomerSupport: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  headingCustomerSupportDetail: {
    fontSize: 16,
    fontFamily: fonts.LatoMedium,
    color: colors.black,
  },
  maiLContainer: {
    width: '45@vs',
    height: '45@vs',
    backgroundColor: colors.primaryBlur,
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: '10@s',
  },
  mailText: {
    fontSize: 13,
    fontFamily: fonts.bold,
    color: colors.black,
    textTransform: 'uppercase',
  },
  mail: {
    fontSize: 13,
    fontFamily: fonts.LatoMedium,
    color: colors.sidebar,
  },
  notesTitle: {
    fontFamily: fonts.bold,
    fontSize: '17@ms',
    color: colors.black,
  },
  noteDetail: {
    width: '100%',
    backgroundColor: colors.background,
    alignSelf: 'center',
    paddingVertical: "10@vs",
    
  },
  noteDetailText: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textPrime,
  },
  borderView: {
    borderBottomColor: colors.borderColor2,
    borderBottomWidth: '1@s',
    width: '100%',
  },
  rowBack: {
    height: 55,
    backgroundColor: '#fff',
  },
  BackButtons: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackButtonsText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Lato-Medium',
  },
  saveNoteButton: {
    width: '100%',
    backgroundColor: colors.primaryBlur,
  },
  textNote: {
    fontSize: '15@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
  },
  plus: {
    backgroundColor: colors.primary,
    padding: '10@s',
    borderRadius: '99@s',
  },
});
