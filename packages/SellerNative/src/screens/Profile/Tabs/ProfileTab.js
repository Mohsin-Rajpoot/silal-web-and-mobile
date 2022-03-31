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
import fonts from 'fonts';
import {CustomButton} from '@SilalApp/common/components/native';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
import {useTranslation} from 'react-i18next';
const Profile = () => {
  const {t} = useTranslation();
  const [isEdit, setIsEdit] = useState(false);
  const [adminModal, setAdminModal] = useState(false);
  const [code, setCode] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [freezedModal, setFreezedModal] = useState(false);
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={{width: '59%'}}>
          <ImageBackground
            resizeMode="cover"
            source={require('../../../Assets/image8.png')}
            style={styles.imgContainer}>
            <CustomText
              fontFamily={fonts.LatoRegular}
              label="8502 Preston Rd. Inglewood"
              color="#fff"
              fontSize={10}
              textStyle={styles.addressBox}
            />
            <View style={{margin: moderateScale(10)}}>
              <CustomText
                fontFamily={fonts.bold}
                label="Restaurant’s name"
                color="#fff"
                fontSize={20}
              />
              <CustomText
                fontFamily={fonts.LatoRegular}
                fontSize={13}
                label="The slogan will be here mх 40 characters"
                color="#fff"
              />
            </View>
          </ImageBackground>
          {isEdit ? <EditBox /> : <TimingBox />}
        </View>

        <View style={styles.updateButtonContainer}>
          {!isEdit ? (
            <>
              <CustomButton
                onPress={() => setIsEdit(!isEdit)}
                textStyle={{padding: 8, fontSize: 18}}
                containerStyle={{width: '100%'}}
                text={t('EditProfile')}
              />
              <CustomButton
                onPress={() => setAdminModal(true)}
                textStyle={{padding: 8, fontSize: 18}}
                containerStyle={{width: '100%'}}
                text={t('ChangeAdminCode')}
              />
              <CustomButton
                onPress={() => setFreezedModal(true)}
                textStyle={{padding: 8, fontSize: 18}}
                containerStyle={{width: '100%'}}
                text={t('TemporaryFreezedAccount')}
              />
              <CustomModal
                isModalVisible={adminModal}
                setModalVisible={setAdminModal}
                modalWrapperStyle={{
                  marginHorizontal: width(20),
                  marginVertical: height(8),
                  borderRadius: 10,
                  backgroundColor: '#fff',
                }}>
                <ScrollView
                  contentContainerStyle={{flexGrow: 1, width: '130%'}}>
                  <Pressable
                    onPress={() => setAdminModal(false)}
                    style={styles.iconContainer}>
                    <Icon name="cross" type="entypo" size={moderateScale(19)} />
                  </Pressable>
                  <CustomText
                    fontFamily={fonts.bold}
                    label={t('ChangeAdminCode_for_seller')}
                  />
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
                  <CustomButton
                    containerStyle={{alignSelf: 'center'}}
                    textStyle={{marginHorizontal: '23%', paddingVertical: 8}}
                    text={t('Submit')}
                  />
                </ScrollView>
              </CustomModal>
            </>
          ) : (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <CustomButton
                onPress={() => setIsEdit(!isEdit)}
                textStyle={styles.editCancel}
                text={t('Cancel')}
              />
              <CustomButton
                textStyle={styles.editBtn}
                text={t('SaveChanges')}
              />
            </View>
          )}
        </View>

        <CustomModal
          isModalVisible={freezedModal}
          modalContainerStyle={{alignItems: 'flex-start'}}
          modalWrapperStyle={{marginVertical: height(10)}}
          setModalVisible={setFreezedModal}>
          <Pressable
            onPress={() => setFreezedModal(false)}
            style={[styles.iconContainer, {zIndex: 99}]}>
            <Icon name="cross" type="entypo" size={moderateScale(19)} />
          </Pressable>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginBottom: verticalScale(20),
            }}>
            <CustomText
              fontFamily={fonts.bold}
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
            {t('Account_freezed_detail4')}{' '}
            <Text style={{color: colors.primary}}>
              {t('Account_freezed_detail5')}
            </Text>
          </Text>
          <Text style={[styles.freezedMainTextBottom]}>
            <Text style={{fontFamily: fonts.LatoBold}}>
              {t('NoteForSilal')}
            </Text>{' '}
            {t('NoteDetail')}
          </Text>
          <View style={{width: '100%'}}>
            <CustomButton
              text={t('Ok')}
              textStyle={styles.buttonText}
              containerStyle={styles.buttonContainer}
            />
          </View>
        </CustomModal>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = ScaledSheet.create({
  mainContainer: {
    paddingHorizontal: '15@s',
    backgroundColor: colors.profileBackground,
  },
  container: {
    flexDirection: 'row',
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
    borderRadius: '5@ms',
    overflow: 'hidden',
    marginTop: '15@vs',
    justifyContent: 'space-between',
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
    paddingHorizontal: '15@s',
    paddingVertical: '5@s',
  },
  editCancel: {
    paddingHorizontal: '22@s',
    paddingVertical: '5@s',
  },
  optStyling: {
    marginVertical: '10@s',
    width: '47%',
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
    height: '35@s',
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
    fontSize: moderateScale(15),
    marginHorizontal: '13@s',
    textAlign: 'left',
  },
  freezedMainTextBottom: {
    fontFamily: fonts.LatoMedium,
    fontSize: moderateScale(15),
    marginHorizontal: '13@s',
    textAlign: 'left',
    marginTop: '15@ms',
  },
  buttonText: {
    paddingHorizontal: '120@ms',
    paddingVertical: '5@ms',
  },
});
