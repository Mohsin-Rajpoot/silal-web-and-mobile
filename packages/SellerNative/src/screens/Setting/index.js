import {
  View,
  TouchableOpacity,
  I18nManager,
  ScrollView,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
  scale,
} from 'react-native-size-matters';
import React, {useState, useRef} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import TextWithIcon from '../../components/TextWithIcon';
import colors from '@SilalApp/common/assets/colors';
import Header from '../Profile/moleclues/Header';
import fonts from '@SilalApp/common/assets/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {CheckBox, Icon} from 'react-native-elements';
import ConfirmationModal from '@SilalApp/common/components/native/ConfirmationModal';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
import RBSheet from 'react-native-raw-bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTranslation} from 'react-i18next';
import Preference from 'react-native-preference';
import RNRestart from 'react-native-restart';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import {CustomButton} from '@SilalApp/common/components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import Svg, {Rect, Path} from 'react-native-svg';
var windowWidth = Dimensions.get('window').width;

const Setting = ({navigation}) => {
  const getLang = Preference.get('languageValue');
  const {t, i18n} = useTranslation();

  const [rightArrow, setRightArrow] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);
  const [check, setCheck] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const Sheet = useRef();
  const [isVisibleLogout, setVisibleLogout] = useState(false);
  const [active, setActive] = useState(
    getLang == 'en' ? 0 : getLang == 'ar' ? 1 : getLang == 'he' ? 2 : 3,
  );
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(getLang);
  const [Openmodal, setOpenmodal] = useState(false);

  const [items, setItems] = useState([
    {label: t('English'), value: 'en'},
    {label: t('Arabic'), value: 'ar'},
    {label: t('hebrew'), value: 'he'},
  ]);
  const changeLanguageFunction = language => {
    i18n.changeLanguage(language).then(() => {
      I18nManager.forceRTL(language === 'ar' || language === 'he');
      RNRestart.Restart();
    });
    Preference.setWhiteList([]);
    Preference.set('languageValue', language);
  };
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <Header label={t('Setting')} onPress={() => navigation.openDrawer()} />
        {rightArrow ? (
          <View />
        ) : (
          <>
            <View style={IsTablet ? styles.container : styles.containerMobile}>
              <TextWithIcon
                label={t('PreOrderSetting')}
                onPress={
                  () => navigation.navigate('PreOrderSettings')
                  // setRightArrow(true);
                  // setLeftArrow(true);
                }
                customStyle={styles.PreOrder}
              />
            </View>
            {!IsTablet ? (
              <View style={!IsTablet ? styles.containerMobile : null}>
                <TextWithIcon
                  label={t('Admin_Code')}
                  onPress={() => navigation.navigate('AdminCodeScreen')}
                  customStyle={styles.PreOrder}
                />
              </View>
            ) : null}
            {/* ///////Language Button */}
            <RBSheet
              ref={Sheet}
              animationType="slide"
              closeOnPressMask={true}
              closeOnDragDown={false}
              dragFromTopOnly
              height={windowWidth * 0.8}
              openDuration={250}
              customStyles={{
                container: {
                  // flex:1,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  backgroundColor: '#F8F8F8',
                  paddingHorizontal: 20,
                },
              }}>
              <ScrollView style={{width: '95%', height: '90%'}}>
                <View style={styles.headerContainer}>
                  <CustomText
                    label={t('language')}
                    textStyle={styles.modalHeaderTitle}
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    setActive(0);
                  }}>
                  <View
                    style={[
                      active == 0
                        ? styles.SelectlangaugeContainerActive
                        : styles.SelectlangaugeContainer,
                    ]}>
                    <View>
                      {active == 0 ? (
                        <View style={styles.ActiveButton}>
                          <View style={styles.innerbutton} />
                        </View>
                      ) : (
                        <View style={styles.inActiveButton} />
                      )}
                    </View>
                    <View>
                      <Image
                        source={require('../../Assets/Group.png')}
                        style={styles.countryImage}
                      />
                    </View>
                    <View>
                      <CustomText
                        label={t('English')}
                        textStyle={styles.countryText}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    setActive(1);
                  }}>
                  <View
                    style={[
                      active == 1
                        ? styles.SelectlangaugeContainerActive
                        : styles.SelectlangaugeContainer,
                    ]}>
                    <View>
                      {active == 1 ? (
                        <View style={styles.ActiveButton}>
                          <View style={styles.innerbutton} />
                        </View>
                      ) : (
                        <View style={styles.inActiveButton} />
                      )}
                    </View>
                    <View>
                      <Image
                        source={require('../../Assets/Group1.png')}
                        style={styles.countryImage}
                      />
                    </View>
                    <View>
                      <CustomText
                        label={t('Arabic')}
                        textStyle={styles.countryText}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    setActive(2);
                  }}>
                  <View
                    style={[
                      active == 2
                        ? styles.SelectlangaugeContainerActive
                        : styles.SelectlangaugeContainer,
                    ]}>
                    <View>
                      {active == 2 ? (
                        <View style={styles.ActiveButton}>
                          <View style={styles.innerbutton} />
                        </View>
                      ) : (
                        <View style={styles.inActiveButton} />
                      )}
                    </View>
                    <View>
                      <Image
                        source={require('../../Assets/Group2.png')}
                        style={styles.countryImage}
                      />
                    </View>
                    <View>
                      <CustomText
                        label={t('hebrew')}
                        textStyle={styles.countryText}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
              <View style={{width: '95%'}}>
                <CustomButton
                  text={t('Save_Language')}
                  containerStyle={[
                    styles.saveLanguageButton,
                    {marginBottom: 25},
                  ]}
                  onPress={() => {
                    active == 0
                      ? changeLanguageFunction('en')
                      : active == 1
                      ? changeLanguageFunction('ar')
                      : active == 2
                      ? changeLanguageFunction('he')
                      : null;
                  }}
                />
              </View>
            </RBSheet>
            {/* Blure Dell Model */}
            <CustomModal
              isModalVisible={Openmodal}
              setModalVisible={setOpenmodal}
              modalWrapperStyle={styles.ModalWrapperDeleteMobile}
              modalContainerStyle={{
                borderRadius: 2,
                // backgroundColor: 'red',
              }}>
              <View style={styles.ModalContainer1}>
                <View style={styles.ModeView}>
                  <View style={styles.ModalTitleMobile}>
                    <Text style={styles.ModalHeadingMobile}>
                      Log out from Silal for Seller?
                    </Text>
                  </View>

                  <Text
                    style={styles.ConfirmText}>
                    Are you sure you want to log out of your Silal account?
                  </Text>

                  <View style={styles.ModalButtonContainerMobile}>
                    <TouchableOpacity
                      onPress={() => setOpenmodal(false)}
                      style={[
                        {backgroundColor: colors.primary},
                        styles.ButtonssDeleteMobile,
                      ]}>
                      <Text style={[{color: '#fff'}, styles.DeleteModal]}>
                        Cancel
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setOpenmodal(false)}
                      style={[
                        {backgroundColor: colors.blurPrimary},
                        styles.ButtonssDeleteMobile
                      
                      ]}>
                      <Text style={[styles.DeleteModal, {color:colors.primary}]}>
                        Log out
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </CustomModal>
            {/* Delete Model */}

            {!IsTablet ? (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => Sheet.current.open()}>
                <View
                  style={
                    IsTablet
                      ? styles.langaugeContainer
                      : styles.langaugeContainerMobile
                  }>
                  <CustomText
                    label={t('language')}
                    textStyle={styles.logoutText}
                  />
                  <TextWithIcon
                    textStyle={styles.langaugeTet}
                    label={
                      active == 0
                        ? t('English')
                        : active == 1
                        ? t('Arabic')
                        : active == 2
                        ? t('hebrew')
                        : null
                    }
                    customStyle={styles.languageChildren}
                  />
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setModal(!modal)}>
                <View
                  style={
                    IsTablet
                      ? styles.langaugeContainer
                      : styles.langaugeContainerMobile
                  }>
                  <CustomText
                    label={t('language')}
                    textStyle={styles.logoutText}
                  />
                  <TextWithIcon
                    textStyle={styles.langaugeTet}
                    label={
                      active == 0
                        ? t('English')
                        : active == 1
                        ? t('Arabic')
                        : active == 2
                        ? t('hebrew')
                        : null
                    }
                    customStyle={styles.languageChildren}
                  />
                </View>
              </TouchableOpacity>
            )}
           
            {IsTablet ? (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setVisibleLogout(!isVisibleLogout)}>
                <View
                  style={
                    IsTablet
                      ? styles.logoutContainer
                      : styles.logoutContainerMobile
                  }>
                  <CustomText
                    label={t('Logout')}
                    textStyle={styles.logoutText}
                  />
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setOpenmodal(!Openmodal)}>
                <View
                  style={
                    IsTablet
                      ? styles.logoutContainer
                      : styles.logoutContainerMobile
                  }>
                  <CustomText
                    label={t('Logout')}
                    textStyle={styles.logoutText}
                  />
                </View>
              </TouchableOpacity>
            )}

            <View style={{width: IsTablet ? '35%' : '95%'}}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setVisible(!isVisible)}>
                <TextWithIcon
                  iconDelete={true}
                  textStyle={styles.deleteAcountText}
                  label={t('DeleteAccount')}
                />
              </TouchableOpacity>
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
          </>
        ) : null}
        <ConfirmationModal
          isModalVisible={isVisible}
          setModalVisible={setVisible}
          modalWrapperStyle={IsTablet ? styles.DeleteMoadalContainer : styles.DeleteMoadalContainerMobile  }
        
          detail={'This action is irrevocable. You can’t restore your account.'}
          Active="Yes, delete"
        />
        <ConfirmationModal
          isModalVisible={isVisibleLogout}
          setModalVisible={setVisibleLogout}
          modalWrapperStyle={styles.DeleteAccount
          }
          logoutDetail="Log out from Silal Seller?"
          detail={'Are you sure you want to log out of your Silal account?'}
          Active={t('Logout')}
          onPress={() => navigation.navigate('AuthStack')}
        />
      </SafeAreaView>
      <CustomModal
        isModalVisible={modal}
        setModalVisible={setModal}
        modalWrapperStyle={{
          marginHorizontal: width(0),
          marginVertical: height(0),
          marginLeft: '65%',
          justifyContent: 'flex-start',
          borderRadius: 0,
        }}>
        <View>
          <ScrollView style={{width: '95%', height: '90%'}}>
            <View style={styles.headerContainer}>
              <CustomText
                label={t('language')}
                textStyle={styles.modalHeaderTitle}
              />
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setModal(false)}>
                <Icon name="cross" type="entypo" size={26} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setActive(0);
              }}>
              <View
                style={[
                  active == 0
                    ? styles.SelectlangaugeContainerActive
                    : styles.SelectlangaugeContainer,
                ]}>
                <View>
                  {active == 0 ? (
                    <View style={styles.ActiveButton}>
                      <View style={styles.innerbutton} />
                    </View>
                  ) : (
                    <View style={styles.inActiveButton} />
                  )}
                </View>
                <View>
                  <Image
                    source={require('../../Assets/Group.png')}
                    style={styles.countryImage}
                  />
                </View>
                <View>
                  <CustomText
                    label={t('English')}
                    textStyle={styles.countryText}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setActive(1);
              }}>
              <View
                style={[
                  active == 1
                    ? styles.SelectlangaugeContainerActive
                    : styles.SelectlangaugeContainer,
                ]}>
                <View>
                  {active == 1 ? (
                    <View style={styles.ActiveButton}>
                      <View style={styles.innerbutton} />
                    </View>
                  ) : (
                    <View style={styles.inActiveButton} />
                  )}
                </View>
                <View>
                  <Image
                    source={require('../../Assets/Group1.png')}
                    style={styles.countryImage}
                  />
                </View>
                <View>
                  <CustomText
                    label={t('Arabic')}
                    textStyle={styles.countryText}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setActive(2);
              }}>
              <View
                style={[
                  active == 2
                    ? styles.SelectlangaugeContainerActive
                    : styles.SelectlangaugeContainer,
                ]}>
                <View>
                  {active == 2 ? (
                    <View style={styles.ActiveButton}>
                      <View style={styles.innerbutton} />
                    </View>
                  ) : (
                    <View style={styles.inActiveButton} />
                  )}
                </View>
                <View>
                  <Image
                    source={require('../../Assets/Group2.png')}
                    style={styles.countryImage}
                  />
                </View>
                <View>
                  <CustomText
                    label={t('hebrew')}
                    textStyle={styles.countryText}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>

          <CustomButton
            text={t('Save_Language')}
            containerStyle={styles.saveLanguageButton}
            onPress={() => {
              active == 0
                ? changeLanguageFunction('en')
                : active == 1
                ? changeLanguageFunction('ar')
                : active == 2
                ? changeLanguageFunction('he')
                : null;
            }}
          />
        </View>
      </CustomModal>
    </>
  );
};

export default Setting;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.profileBackground,
    padding: '15@ms',
    flex: 1,
  },
  countryImage: {
    resizeMode: 'contain',
    width: '25@s',
    height: '12@s',
    marginHorizontal: '5@s',
  },
  saveLanguageButton: {
    width: '100%',
    height: '40@s',
  },
  inActiveButton: {
    width: '12@s',
    height: '12@s',
    borderRadius: '99@s',
    borderColor: colors.textPrimaryBlur,
    borderWidth: '1@s',
  },
  ActiveButton: {
    width: '12@s',
    height: '12@s',
    borderRadius: '99@s',
    borderColor: colors.primary,
    borderWidth: '3@s',
    justifyContent: 'center',
  },
  innerbutton: {
    backgroundColor: colors.textWhite,
    width: '4@s',
    height: '4@s',
    borderRadius: '99@s',
  },
  countryText: {
    fontSize: '15@ms',
    fontFamily: fonts.LatoMedium,
    color: colors.black,
  },
  deleteAcountText: {
    fontSize: '15@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.red,
  },
  titleText: {
    fontSize: '15@ms',
    fontFamily: fonts.LatoBold,
    marginBottom: '8@vs',
  },
  SelectlangaugeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '5@s',
    backgroundColor: colors.dullWhite,
    borderRadius: '4@s',
    padding: '10@s',
  },
  SelectlangaugeContainerActive: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '10@s',
    backgroundColor: colors.dullWhite,
    borderRadius: '4@s',
    padding: '10@s',
    borderColor: colors.primary,
    borderWidth: '1@s',
  },
  leftArrow: {
    fontSize: '18@ms',
    marginRight: '10@s',
    color: colors.black,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10@s',
  },
  modalHeaderTitle: {
    fontSize: '17@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
  },
  dropDownStyle: {
    width: '35%',
    borderColor: colors.light_grey,
    height: '30@s',
  },
  dropdownContainer: {
    width: '35%',
    borderColor: colors.light_grey,
  },
  langaugeContainer: {
    backgroundColor: colors.textWhite,
    width: '35%',
    padding: '9@s',
    borderRadius: '4@s',
    marginBottom: '5@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  langaugeContainerMobile: {
    backgroundColor: colors.textWhite,
    width: '95%',
    padding: '9@s',
    borderRadius: '4@s',
    marginBottom: '5@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '10@s',
  },
  logoutContainer: {
    backgroundColor: colors.textWhite,
    width: '35%',
    padding: '9@s',
    borderRadius: '4@s',
    marginTop: '10@s',
    marginBottom: '5@s',
  },
  logoutContainerMobile: {
    backgroundColor: colors.textWhite,
    width: '95%',
    padding: '9@s',
    borderRadius: '4@s',
    // marginTop: '10@s',
    // marginBottom: '5@s',
    marginVertical: '15@s',
    paddingVertical: '10@s',
  },
  logoutText: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoMedium,
    color: colors.black,
  },
  PreOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.textWhite,
    padding: '10@ms',
    borderRadius: '5@ms',
    marginBottom: '5@s',
  },
  languageChildren: {
    flexDirection: 'row',
  },
  langaugeTet: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoMedium,
    color: colors.textPrimaryBlur,
  },
  preOrderText: {
    fontFamily: fonts.bold,
    fontSize: '18@ms',
    color: colors.black,
  },

  radioContainer: {
    width: '20@ms',
    height: '20@ms',
    borderRadius: '100@ms',
    marginRight: '10@s',
    overflow: 'hidden',
    backgroundColor: '#E8E8E8',
  },

  container: {
    width: '35%',
    marginTop: 30,
    marginBottom: 0,
  },
  containerMobile: {
    width: '95%',
    marginTop: 30,
    marginBottom: 0,
    flexDirection: 'row',
  },
  ModeView: {
    height: '170@s',
    width: '280@s',
    backgroundColor: colors.textWhite,
    borderRadius: 5,
    elevation: 0.2,
  },
  ModalContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // backgroundColor: 'rgba(0,0,0,0.8)'
  },
  ModalTitleMobile: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // backgroundColor: 'red',

    paddingTop: '20@s',

    // backgroundColor:'red'
  },
  ModalHeadingMobile: {
    color: '#414342',
    fontSize: '12@s',
    fontFamily: fonts.PoppinsSemiBold,
    // width: 250,
    // marginHorizontal: 15,
    justifyContent: 'center',
    textAlign: 'center',
    // backgroundColor:'red',
    width: '100%',
  },
  ModalButtonContainerMobile: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // width: '%',
    // alignSelf: 'center',
    paddingVertical: '20@s',
    justifyContent: 'space-evenly',
    marginHorizontal:30
  },
  ButtonssDeleteMobile: {
    width: '110@s',
    height: '45@s',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    overflow:'hidden'
  },
  ModalWrapperDeleteMobile: {
    marginHorizontal: width(10),
    marginVertical: height(41),
  },
  ConfirmText:{
    textAlign: 'center',
    // paddingHorizontal: 90,
    paddingTop:'20@s',
    color:'#4C7061',
    fontFamily:fonts.LatoRegular
  },
  DeleteModal: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 15,
  },
  DeleteAccount:{

    marginHorizontal: width(25),
    marginVertical: height(33),
    justifyContent: 'flex-start',
    borderRadius: 15,
  },
  DeleteMoadalContainer:{
    marginHorizontal: width(20),
    marginVertical: height(33),
    justifyContent: 'flex-start',
    borderRadius: 15,
  },
  DeleteMoadalContainerMobile:{
    marginHorizontal: width(5),
    marginVertical: height(39.5),
    justifyContent: 'flex-start',
    borderRadius: 15,
  },
});

// ////////
