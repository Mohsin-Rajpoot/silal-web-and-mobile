import {View, TouchableOpacity, I18nManager} from 'react-native';
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
import {CheckBox, Icon} from 'react-native-elements';
import ConfirmationModal from '@SilalApp/common/components/native/ConfirmationModal';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTranslation} from 'react-i18next';
import Preference from 'react-native-preference';
import RNRestart from 'react-native-restart';

const Setting = ({navigation}) => {
  const getLang = Preference.get('languageValue');
  const {t, i18n} = useTranslation();
  const [rightArrow, setRightArrow] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);
  const [check, setCheck] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isVisibleLogout, setVisibleLogout] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(getLang);
  const [items, setItems] = useState([
    {label: t('English'), value: 'en'},
    {label: t('Arabic'), value: 'ar'},
    {label: t('hebrew'), value: 'he'},
  ]);
  return (
    <View style={styles.mainContainer}>
      <Header label={t('Setting')} onPress={() => navigation.openDrawer()} />
      {rightArrow ? (
        <View />
      ) : (
        <>
          <View style={{width: '35%', marginTop: 30, marginBottom: 0}}>
            <TextWithIcon
              label={t('PreOrderSetting')}
              onPress={() => {
                setRightArrow(true);
                setLeftArrow(true);
              }}
              customStyle={styles.PreOrder}
            />
          </View>
          <View style={styles.langaugeContainer}>
            <CustomText label={t('language')} textStyle={styles.logoutText} />
            <TextWithIcon
              textStyle={styles.langaugeTet}
              label={'Englsih'}
              onPress={() => {
                setRightArrow(true);
                setLeftArrow(true);
              }}
              customStyle={styles.languageChildren}
            />
          </View>
          {/* <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Language"
            style={styles.dropDownStyle}
            placeholderStyle={styles.dropDownPlaceHolder}
            dropDownContainerStyle={styles.dropdownContainer}
            iconContainerStyle={{backgroundColor: 'red'}}
            onChangeValue={language => {
              i18n.changeLanguage(language).then(() => {
                I18nManager.forceRTL(language === 'ar' || language === 'he');
                RNRestart.Restart();
              });
              Preference.setWhiteList([]);
              Preference.set('languageValue', language);
            }}
          /> */}
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setVisibleLogout(!isVisibleLogout)}>
            <View style={styles.logoutContainer}>
              <CustomText label={t('Logout')} textStyle={styles.logoutText} />
            </View>
          </TouchableOpacity>
          <View style={{width: '35%'}}>
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
        modalWrapperStyle={{
          marginHorizontal: width(27),
          marginVertical: height(30),
          justifyContent: 'flex-start',
          borderRadius: 15,
        }}
        detail={'This action is irrevocable. You can’t restore your account.'}
        Active="Yes, delete"
      />
      <ConfirmationModal
        isModalVisible={isVisibleLogout}
        setModalVisible={setVisibleLogout}
        modalWrapperStyle={{
          marginHorizontal: width(27),
          marginVertical: height(32),
          justifyContent: 'flex-start',
          borderRadius: 15,
        }}
        logoutDetail="Log out from Silal Seller?"
        detail={'Are you sure you want to log out of your Silal account?'}
        Active={t('Logout')}
        onPress={() => navigation.navigate('AuthStack')}
      />
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
  leftArrow: {
    fontSize: '18@ms',
    marginRight: '10@s',
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
  logoutContainer: {
    backgroundColor: colors.textWhite,
    width: '35%',
    padding: '9@s',
    borderRadius: '4@s',
    marginTop: '10@s',
    marginBottom: '5@s',
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
    marginTop: '5@ms',
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
    color: colors.black,
  },
});
