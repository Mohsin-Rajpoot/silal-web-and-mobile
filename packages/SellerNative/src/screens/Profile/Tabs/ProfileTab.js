import {
  Image,
  View,
  ScrollView,
  ImageBackground,
  Pressable,
  Text,
} from 'react-native';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import React, {useState} from 'react';
import colors from '@SilalApp/common/assets/colors';
import TimingBox from '../moleclues/TimingBox';
import EditBox from '../moleclues/EditBox';
import fonts from '@SilalApp/common/assets/fonts';
import {CustomButton} from '@SilalApp/common/components/native';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
import {useTranslation} from 'react-i18next';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
const Profile = () => {
  const {t} = useTranslation();
  const [isEdit, setIsEdit] = useState(false);
  const [adminModal, setAdminModal] = useState(false);
  const [code, setCode] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [freezedModal, setFreezedModal] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <ScrollView
      style={styles.mainContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={!IsTablet ? styles.containerMobile : styles.container}>
        <View
          style={
            !IsTablet
              ? styles.profileMainContainerMobile
              : styles.profileMainContainer
          }>
          <ImageBackground
            resizeMode="cover"
            source={require('../../../Assets/image8.png')}
            style={!IsTablet ? styles.imgContainerMobile : styles.imgContainer}
          />

          <View style={{top: !IsTablet ? -35 : -90}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}>
              <View style={styles.imageborderRadius}>
                <ImageBackground
                  source={require('../../../Assets/profile.png')}
                  style={styles.profileImage}>
                  {isEdit ? (
                    <Icon
                      name="camera-plus-outline"
                      type="material-community"
                      size={moderateScale(40)}
                      color={colors.textWhite}
                    />
                  ) : (
                    <View />
                  )}
                </ImageBackground>
              </View>
              {!IsTablet && !isEdit ? (
                <CustomButton
                  textStyle={styles.buttonTextStyleMobile}
                  containerStyle={styles.buttonContainerStyleMobile}
                  text={t('EditProfile')}
                  onPress={() => setIsEdit(!isEdit)}
                />
              ) : (
                <View />
              )}
            </View>
            {isEdit ? <EditBox /> : <TimingBox />}
          </View>
        </View>

        <View style={styles.updateButtonContainer}>
          {!isEdit && IsTablet ? (
            <>
              <CustomButton
                onPress={() => setIsEdit(!isEdit)}
                textStyle={styles.buttonTextStyle}
                containerStyle={styles.buttonContainerStyle}
                text={t('EditProfile')}
              />
              <CustomButton
                onPress={() => setAdminModal(true)}
                textStyle={styles.buttonTextStyle1}
                containerStyle={styles.buttonContainerStyle1}
                text={t('ChangeAdminCode')}
              />
              <CustomButton
                onPress={() => setFreezedModal(true)}
                textStyle={styles.buttonTextStyle}
                containerStyle={styles.buttonContainerStyle}
                text={t('TemporaryFreezedAccount')}
              />

              <CustomModal
                isModalVisible={adminModal}
                setModalVisible={setAdminModal}
                modalWrapperStyle={{
                  marginHorizontal: active == 0 ? '26%' : '26%',
                  marginVertical: active == 0 ? height(17) : height(11),
                  borderRadius: 10,
                  backgroundColor: '#fff',
                }}>
                <Pressable
                  onPress={() => setAdminModal(false)}
                  style={styles.iconContainer}>
                  <Icon name="cross" type="entypo" size={moderateScale(19)} />
                </Pressable>
                <ScrollView
                  contentContainerStyle={{
                    flexGrow: 1,
                    width: '130%',
                  }}>
                  <CustomText
                    textStyle={styles.changeAdminCode}
                    label={t('ChangeAdminCode_for_seller')}
                  />
                  {active == 0 ? (
                    <>
                      <CustomText
                        fontFamily={fonts.LatoRegular}
                        fontSize={13}
                        marginTop={15}
                        label={t('EnterYourPreviousCode')}
                        alignSelf="center"
                      />
                      <OTPInputView
                        autoFocusOnLoad={true}
                        pinCount={4}
                        style={styles.optStyling}
                        codeInputFieldStyle={styles.optContainer}
                        handleChange={value => setCode(value)}
                      />
                    </>
                  ) : (
                    <>
                      <CustomText
                        fontFamily={fonts.LatoRegular}
                        fontSize={13}
                        marginTop={15}
                        label={t('EnterYourPreviousCode')}
                        alignSelf="center"
                      />
                      <OTPInputView
                        autoFocusOnLoad={true}
                        pinCount={4}
                        style={styles.optStyling}
                        codeInputFieldStyle={styles.optContainer}
                        handleChange={value => setCode(value)}
                      />
                      <CustomText
                        fontFamily={fonts.LatoRegular}
                        fontSize={13}
                        marginTop={15}
                        label={t('RepeatCode')}
                        alignSelf="center"
                      />
                      <OTPInputView
                        autoFocusOnLoad={true}
                        pinCount={4}
                        style={[
                          styles.optStyling,
                          {marginVertical: verticalScale(12)},
                        ]}
                        codeInputFieldStyle={styles.optContainer}
                        handleChange={value => setConfirmCode(value)}
                      />
                    </>
                  )}

                  <CustomButton
                    containerStyle={styles.changeAdminCodeButton}
                    textStyle={styles.changeAdminCodeButtonText}
                    text={active == 0 ? t('Submit') : t('Submit_newCode')}
                    onPress={() => {
                      active == 1
                        ? setActive(0) & setAdminModal(false)
                        : setActive(1);
                    }}
                  />
                  {active == 0 ? (
                    <CustomButton
                      containerStyle={styles.changeAdminCodeButtonCancel}
                      textStyle={styles.changeAdminCodeButtonTextCancel}
                      text={t('Cancel')}
                      onPress={() => setAdminModal(false)}
                    />
                  ) : (
                    <View />
                  )}
                </ScrollView>
              </CustomModal>
            </>
          ) : (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomButton
                onPress={() => setIsEdit(!isEdit)}
                textStyle={styles.editCancel}
                text={t('Cancel')}
                containerStyle={styles.cancelButton}
              />
              <CustomButton
                textStyle={!IsTablet ? styles.editBtnMobile : styles.editBtn}
                containerStyle={
                  !IsTablet
                    ? styles.editButtonContainerMobile
                    : styles.editButtonContainer
                }
                text={t('SaveChanges')}
              />
            </View>
          )}
        </View>

        <CustomModal
          isModalVisible={freezedModal}
          modalContainerStyle={{alignItems: 'flex-start'}}
          modalWrapperStyle={{
            marginVertical: height(3),
            marginHorizontal: width(29),
          }}
          setModalVisible={setFreezedModal}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginBottom: verticalScale(20),
            }}>
            <Image
              source={require('../../../Assets/Warning.png')}
              style={styles.warningImage}
            />
            <CustomText
              textStyle={styles.accountFreeze}
              label={t('Account_is_Freezed')}
            />
          </View>
          <Text style={styles.freezedMainText}>
            {t('Account_freezed_detail1') + t('Account_freezed_detail2')}
            <Text style={{color: colors.primary}}> {t('termOfUse')} </Text>
            {t('Account_freezed_detail3')}
            <Text style={{color: colors.primary}}>
              {' '}
              {t('community_guideline')}
            </Text>
            {'\n'}
          </Text>
          <Text style={styles.freezedMainText1}>
            {t('Account_freezed_detail4')}{' '}
            <Text style={{color: colors.primary}}>
              {t('Account_freezed_detail5')}
            </Text>
          </Text>
          <View style={styles.noteContainer}>
            <Text style={[styles.freezedMainTextBottom]}>
              <Text style={styles.noteFromSilal}>{t('NoteForSilal')}</Text>{' '}
              {t('NoteDetail')}
            </Text>
          </View>

          <View style={{width: '100%'}}>
            <CustomButton
              text={t('Ok')}
              textStyle={styles.buttonText}
              containerStyle={styles.buttonContainer}
            />
          </View>
        </CustomModal>
      </View>
      <View style={{width: '100%', height: 100}} />
    </ScrollView>
  );
};

export default Profile;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.profileBackground,
    flex: 1,
  },
  changeAdminCode: {
    fontSize: '15@ms',
    fontFamily: fonts.bold,
    color: colors.black,
    marginTop: '20@s',
  },
  noteContainer: {
    backgroundColor: colors.noteBackground,
    alignSelf: 'center',
    borderRadius: '4@s',
    borderColor: colors.primaryLight,
    borderWidth: '1@s',
    padding: '4@s',
    justifyContent: 'center',
    marginHorizontal: '8@s',
    marginTop: '10@s',
  },
  changeAdminCodeButton: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: '4@s',
    marginBottom: '5@s',
  },
  changeAdminCodeButtonCancel: {
    width: '100%',
    backgroundColor: colors.light_grey,
    borderRadius: '4@s',
  },
  changeAdminCodeButtonText: {
    fontSize: '14@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,
    margin: '2@s',
  },
  changeAdminCodeButtonTextCancel: {
    fontSize: '14@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.sidebar,
    margin: '2@s',
  },
  noteFromSilal: {
    fontFamily: fonts.LatoSemiBold,
    color: colors.primary,
    fontSize: '12@ms',
  },
  accountFreeze: {
    fontFamily: fonts.bold,
    fontSize: '15@ms',
    color: colors.black,
  },
  warningImage: {
    opacity: 0.2,
    marginVertical: '20@s',
    width: '55@s',
    height: '55@s',
  },
  buttonContainerStyle: {
    backgroundColor: colors.primary,
    width: '85%',
    borderRadius: '4@s',
    marginRight: '12@s',
    marginBottom: '5@s',
  },
  buttonContainerStyleMobile: {
    backgroundColor: colors.primary,
    width: '90%',
    borderRadius: '8@s',
    marginRight: '20@s',
  },
  cancelButton: {
    backgroundColor: colors.light_grey,
    borderRadius: '4@s',
  },
  editButtonContainer: {
    backgroundColor: colors.primary,
    borderRadius: '4@s',
    marginLeft: '7@s',
  },
  editButtonContainerMobile: {
    backgroundColor: colors.primary,
    borderRadius: '4@s',
    marginLeft: '7@s',
  
  },
  buttonContainerStyle1: {
    backgroundColor: colors.primaryBlur,
    width: '85%',
    borderRadius: '4@s',
    marginRight: '12@s',
    marginBottom: '5@s',
  },
  profileMainContainer: {
    width: '62%',
    backgroundColor: '#fff',
    marginTop: '10@s',
    marginRight: '10@s',
  },
  profileMainContainerMobile: {
    width: '100%',
    backgroundColor: '#fff',
    marginTop: '10@s',
  },
  imageborderRadius: {
    width: '80@s',
    height: '80@s',
    borderRadius: '99@s',
    borderColor: colors.textWhite,
    borderWidth: '3@s',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '10@s',
  },
  profileImage: {
    borderRadius: '99@s',
    resizeMode: 'contain',
    width: '75@s',
    height: '75@s',
    marginHorizontal: '10@s',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '12@ms',
    color: colors.textWhite,
    margin: '4@s',
  },
  buttonTextStyleMobile: {
    fontFamily: fonts.LatoSemiBold,
    fontSize: '12@vs',
    color: colors.textWhite,
    paddingHorizontal: '1@s',
    marginVertical: '3@s',
  },
  buttonTextStyle1: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '12@ms',
    color: colors.primary,
    margin: '4@s',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  containerMobile: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: '10@s',
  },
  imgContainer: {
    width: '100%',
    height: '150@vs',
    borderRadius: '4@s',
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  imgContainerMobile: {
    width: '100%',
    height: '150@vs',
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  addressBox: {
    alignSelf: 'flex-end',
    marginEnd: '7@s',
    marginTop: '7@vs',
    backgroundColor: 'black',
    padding: '5@ms',
    borderRadius: 5,
    overflow: 'hidden',
  },
  updateButtonContainer: {
    width: '39%',
    height: '100%',
    marginTop: '25@vs',
  },
  editBtn: {
    paddingHorizontal: '5@s',
    paddingVertical: '4@s',
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,
  },
  editBtnMobile: {
    paddingVertical: '5@s',
    fontSize: '11@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,
  },
  editCancel: {
    paddingHorizontal: '15@s',
    paddingVertical: '4@s',
    color: colors.textPrimary,
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
  },
  optStyling: {
    marginVertical: '10@s',
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: '12@ms',
    color: colors.black,
  },
  optContainer: {
    borderWidth: '1@s',
    borderColor: colors.light_grey,
    borderRadius: '5@s',
    height: '30@s',
    width: '30@s',
    fontSize: '12@ms',
    color: colors.black,
    textAlign: 'center',
  },
  iconContainer: {
    alignSelf: 'flex-end',
    top: '22@ms',
    marginEnd: '10@ms',
  },
  freezedMainText: {
    fontFamily: fonts.LatoMedium,
    fontSize: '12@ms',
    marginHorizontal: '13@s',
    textAlign: 'center',
    lineHeight: '15@s',
    width: '80%',
  },
  freezedMainText1: {
    fontFamily: fonts.LatoMedium,
    fontSize: '12@ms',
    marginHorizontal: '13@s',
    textAlign: 'center',
    lineHeight: '15@s',
    width: '65%',
    alignSelf: 'center',
  },
  freezedMainTextBottom: {
    fontFamily: fonts.LatoMedium,
    fontSize: '12@ms',
    textAlign: 'left',
    lineHeight: '15@s',
  },
  buttonText: {
    paddingHorizontal: '120@ms',
    paddingVertical: '4@ms',
    fontSize: '14@ms',
    fontFamily: fonts.PoppinsSemiBold,
  },
});
