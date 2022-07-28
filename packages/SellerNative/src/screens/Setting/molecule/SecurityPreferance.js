import {TouchableOpacity, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Profile/moleclues/Header';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import {useTranslation} from 'react-i18next';
import TextWithIcon from '../../../components/TextWithIcon';
import colors from '@SilalApp/common/assets/colors';
import SwitchToggle from 'react-native-switch-toggle';
import TextInput from '@SilalApp/common/components/native/TextInput';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
import {ScaledSheet} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import fonts from '@SilalApp/common/assets/fonts';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CustomButton} from '@SilalApp/common/components/native';
import Entypo from 'react-native-vector-icons/Entypo';
const SecurityPreferance = ({navigation}) => {
  const {t} = useTranslation();
  const [swithAction, setswithAction] = useState(false);
  const [swithAction2, setswithAction2] = useState(false);
  const [swithAction3, setswithAction3] = useState(false);
  const [email, setemail] = useState('');
  const [code, setCode] = useState('');
  const [EmailModal, setEmailModal] = useState(false);
  const [ChangeReset, setChangeReset] = useState(false);
  const [ChangeEmail, setChangeEmail] = useState(false);
  const [ChangeModalData, setChangeModalData] = useState('');
  const [defaultModal, setDefaultModal] = useState(false);
  React.useEffect(() => {
    // setDefaultModal(true);
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* By_default Modal Start */}

      <CustomModal
        isModalVisible={defaultModal}
        setModalVisible={setDefaultModal}
        modalWrapperStyle={styles.ModalWrapperEmailDefaultModal}>
        <View style={styles.ModalContainerDefaultModal}>
          <View style={styles.ModeView}>
            <CustomText
              label={t('Authentication_Setup_Required')}
              textStyle={styles.headingEmail}
            />

            <Text style={styles.emailModalPara}>
              You’re trying to activate E-mail code verification but you don’t
              have a verefied email, would you like to set it up now?
            </Text>

            <View style={styles.DefaultModalButtonsContainer}>
              <CustomButton
                onPress={() => setDefaultModal(false)}
                containerStyle={[
                  styles.VerifyButtonModaldefaultModal,
                  {backgroundColor: colors.light_grey},
                ]}
                textStyle={styles.firstButton}
                text="No_later"
              />

              <CustomButton
                onPress={() => [setDefaultModal(false)]}
                containerStyle={styles.VerifyButtonModaldefaultModal}
                textStyle={[styles.firstButton, {color: colors.textWhite}]}
                text="Yes_take_me"
              />
            </View>
          </View>
        </View>
      </CustomModal>

      {/* By_default Modal end  */}
      {IsTablet ? (
        <View style={{marginLeft: 2, marginBottom: '4%'}}>
          <Header
            label={t('Settings')}
            onPress={() => navigation.openDrawer()}
          />
        </View>
      ) : null}
      <ScrollView>
        <View style={styles.Container}>
          <View style={IsTablet ? {width: '40%'} : {width: '90%'}}>
            {IsTablet ? (
              <TouchableOpacity
                style={styles.HeaderContainer}
                onPress={() => navigation.goBack()}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  style={styles.backButton}
                />
                <CustomText
                  textStyle={styles.allowPreTextMobile}
                  label="Allow_pre_orders"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.HeaderContainer}
                onPress={() => navigation.goBack()}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  style={styles.backbuttonMobile}
                />
                <CustomText
                  textStyle={styles.allowPreTextMobile}
                  label="Allow pre-orders"
                />
              </TouchableOpacity>
            )}

            {!IsTablet ? (
              <View style={{marginHorizontal: '5%', marginVertical: '5%'}}>
                <CustomText
                  fontFamily={fonts.bold}
                  textStyle={styles.profileText}
                  label={t('Multi_factor_authentications')}
                />
                <CustomText
                  textStyle={
                    IsTablet ? styles.paragraphText : styles.paragraphTextMobile
                  }
                  label={t(
                    'MMultie-factor-authentication (MFA) is a setup that allows signin in process to require more than one step to authenticate user access, providing higher security. At least one must be chosen (for normal authenticaion).',
                  )}
                />
              </View>
            ) : null}

            <View style={styles.ButtansIcon}>
              <TextWithIcon
                label={t('Emailsettings')}
                onPress={() =>
                  IsTablet ? setemail(1) : navigation.navigate('EmailSettings')
                }
                customStyle={styles.PreOrder}
              />
            </View>
            <View style={styles.ButtansIcon}>
              <TextWithIcon
                label={t('Phonesettings')}
                onPress={() =>
                  IsTablet ? setemail(2) : navigation.navigate('NumberSettings')
                }
                customStyle={styles.PreOrder}
              />
            </View>
            <View style={styles.ButtansIcon}>
              <TextWithIcon
                label={t('Passwordsettings')}
                onPress={() =>
                  IsTablet
                    ? setemail(3)
                    : navigation.navigate('PasswordSettings')
                }
                customStyle={styles.PreOrder}
              />
            </View>
            {IsTablet ? (
              <View>
                <CustomText
                  fontFamily={fonts.bold}
                  textStyle={styles.profileText}
                  label={t('Multi_factor_authentications')}
                />
                <CustomText
                  textStyle={styles.paragraphText}
                  label={t(
                    'MMultie-factor-authentication (MFA) is a setup that allows signin in process to require more than one step to authenticate user access, providing higher security. At least one must be chosen (for normal authenticaion).',
                  )}
                />
              </View>
            ) : null}
            <View style={styles.ToggleContainer}>
              <CustomText
                textStyle={styles.profileText1}
                label={t('Require_E_mail_code_for_MFA')}
              />
              <View style={{marginBottom: '2%'}}>
                <SwitchToggle
                  switchOn={swithAction}
                  onPress={() => setswithAction(!swithAction)}
                  circleColorOff={colors.textWhite}
                  circleColorOn={colors.textWhite}
                  backgroundColorOn={colors.primary}
                  backgroundColorOff={colors.light_grey}
                />
              </View>
            </View>
            <View style={styles.ToggleContainer1}>
              <CustomText
                textStyle={styles.profileText1}
                label={t('Require E-mail code for MFA')}
              />
              <View style={{marginBottom: '2%'}}>
                <SwitchToggle
                  switchOn={swithAction2}
                  onPress={() => setswithAction2(!swithAction2)}
                  circleColorOff={colors.textWhite}
                  circleColorOn={colors.textWhite}
                  backgroundColorOn={colors.primary}
                  backgroundColorOff={colors.light_grey}
                />
              </View>
            </View>
            <View style={styles.ToggleContainer}>
              <CustomText
                textStyle={styles.profileText1}
                label={t('Require_E_mail_code_for_MFA')}
              />
              <View style={{marginBottom: '2%'}}>
                <SwitchToggle
                  switchOn={swithAction3}
                  onPress={() => setswithAction3(!swithAction3)}
                  circleColorOff={colors.textWhite}
                  circleColorOn={colors.textWhite}
                  backgroundColorOn={colors.primary}
                  backgroundColorOff={colors.light_grey}
                />
              </View>
            </View>
          </View>
          {/* Second */}
          {email == 1 ? (
            <View style={styles.SecondView}>
              <CustomText
                textStyle={styles.profileText1}
                label={t('Emailsettings')}
              />
              <View style={styles.quantityContainer}>
                <CustomText
                  label={t('Current_email')}
                  textStyle={styles.quantity}
                />
                <TextInput
                  inputStyle={styles.input}
                  placeholderText={'bussiness@silal.app'}
                  placeholderTextColor={colors.black}
                />
              </View>
              <View style={styles.quantityContainer}>
                <CustomText label={t('Verefied')} textStyle={styles.quantity} />
                <TextInput
                  inputStyle={styles.input}
                  placeholderText={'no'}
                  placeholderTextColor={colors.black}
                />
              </View>

              {ChangeReset == false ? (
                <View style={styles.ButtonContainer}>
                  {ChangeEmail == true ? (
                    <CustomButton
                      onPress={() => alert('Email_Changed_Sucessfully')}
                      containerStyle={[styles.VerifyButton]}
                      textStyle={[
                        styles.firstButton,
                        {color: colors.textWhite},
                      ]}
                      text="change_e_mail"
                    />
                  ) : (
                    <CustomButton
                      onPress={() => [
                        setEmailModal(true),
                        setChangeReset(true),
                        setChangeModalData('1'),
                      ]}
                      containerStyle={styles.VerifyButton}
                      textStyle={[
                        styles.firstButton,
                        {color: colors.textWhite},
                      ]}
                      text="Verify_e_mail"
                    />
                  )}
                </View>
              ) : (
                <View>
                  <CustomButton
                    onPress={() => setEmailModal(true)}
                    containerStyle={styles.VerifyButtonChange}
                    textStyle={[
                      styles.firstButtonChange,
                      {color: colors.textWhite},
                    ]}
                    text="Re_send_verification_code"
                  />
                </View>
              )}
            </View>
          ) : null}
          {/* Email Model Start */}

          <CustomModal
            isModalVisible={EmailModal}
            setModalVisible={setEmailModal}
            modalWrapperStyle={styles.ModalWrapperEmail}>
            <View style={styles.ModalContainer}>
              <TouchableOpacity
                onPress={() => setEmailModal(false)}
                style={styles.croscontainer}>
                <Entypo name="cross" style={styles.crossIconModal} />
              </TouchableOpacity>
              <View style={styles.ModeView}>
                {ChangeModalData == 1 ? (
                  <CustomText
                    label={t('Verify_e_mai')}
                    textStyle={styles.headingEmail}
                  />
                ) : (
                  <CustomText
                    label={t('Verify_Number')}
                    textStyle={styles.headingEmail}
                  />
                )}
                {ChangeModalData == 1 ? (
                  <Text style={styles.emailModalPara}>
                    We’ve just sent an email with a verefication code
                    toemail@example.com
                  </Text>
                ) : (
                  <Text style={styles.emailModalPara}>
                    We’ve just sent an email with a verefication code
                    to+972543211111
                  </Text>
                )}
                <OTPInputView
                  autoFocusOnLoad={true}
                  pinCount={6}
                  style={styles.optStyling}
                  codeInputHighlightStyle={{borderColor: colors.primary}}
                  codeInputFieldStyle={styles.optContainer}
                  handleChange={value => setCode(value)}
                />
                <View style={{marginTop: '5%'}}>
                  <CustomButton
                    onPress={() => [
                      setChangeEmail(true),
                      setChangeReset(false),
                      setEmailModal(false),
                    ]}
                    containerStyle={styles.VerifyButtonModal}
                    textStyle={[styles.firstButton, {color: colors.textWhite}]}
                    text="Submit"
                  />
                  <CustomButton
                    onPress={() => setEmailModal(false)}
                    containerStyle={[
                      styles.VerifyButtonModal,
                      {backgroundColor: colors.light_grey},
                    ]}
                    textStyle={styles.firstButton}
                    text="Cancel"
                  />
                </View>
              </View>
            </View>
          </CustomModal>
          {/* Email Model End */}
          {/* ///////Phone Number Start*/}

          {email == 2 ? (
            <View style={styles.SecondView}>
              <CustomText
                textStyle={styles.profileText1}
                label={t('Phone_settings')}
              />
              <View style={styles.quantityContainer}>
                <CustomText
                  label={t('Currentphone')}
                  textStyle={styles.quantity}
                />
                <TextInput
                  inputStyle={styles.input}
                  placeholderText={'+972543211111'}
                  placeholderTextColor={colors.black}
                />
              </View>
              <View style={styles.quantityContainer}>
                <CustomText label={t('Verefied')} textStyle={styles.quantity} />
                <TextInput
                  inputStyle={styles.input}
                  placeholderText={'no'}
                  placeholderTextColor={colors.black}
                />
              </View>
              {/* ///// */}

              {ChangeReset == false ? (
                <View style={styles.ButtonContainer}>
                  {ChangeEmail == true ? (
                    <CustomButton
                      onPress={() => alert('Email_Changed_Sucessfully')}
                      containerStyle={[styles.VerifyButton]}
                      textStyle={[
                        styles.firstButton,
                        {color: colors.textWhite},
                      ]}
                      text="change_e_mail"
                    />
                  ) : (
                    <CustomButton
                      onPress={() => [
                        setEmailModal(true),
                        setChangeReset(true),
                        setChangeModalData('2'),
                      ]}
                      containerStyle={styles.VerifyButton}
                      textStyle={[
                        styles.firstButton,
                        {color: colors.textWhite},
                      ]}
                      text="Verify_e_mail"
                    />
                  )}
                </View>
              ) : (
                <View>
                  <CustomButton
                    onPress={() => setEmailModal(true)}
                    containerStyle={styles.VerifyButtonChange}
                    textStyle={[
                      styles.firstButtonChange,
                      {color: colors.textWhite},
                    ]}
                    text="Re_send_verification_code"
                  />
                </View>
              )}

              {/* <View style={styles.ButtonContainer}>
                <CustomButton
                  containerStyle={[
                    styles.VerifyButton,
                    {backgroundColor: colors.light_grey},
                  ]}
                  textStyle={styles.firstButton}
                  text="Change number"
                />
                <CustomButton
                  containerStyle={styles.VerifyButton}
                  textStyle={[styles.firstButton, {color: colors.textWhite}]}
                  text="Verify number"
                />
              </View> */}
            </View>
          ) : null}

          {/* //////Phone Number End */}

          {/* ///////Password Start*/}

          {email == 3 ? (
            <View style={styles.SecondView}>
              <CustomText
                textStyle={styles.profileText1}
                label={t('Passwordsettings')}
              />
              <View style={styles.quantityContainer}>
                <CustomText
                  label={t('New_password')}
                  textStyle={styles.quantity}
                />
                <TextInput
                  inputStyle={styles.input}
                  placeholderText={'*******'}
                  secureText={true}
                  secureTextEntry={true}
                  placeholderTextColor={colors.black}
                />
              </View>
              <View style={styles.quantityContainer}>
                <CustomText
                  label={t('Confirm_new_password')}
                  textStyle={styles.quantity}
                />
                <TextInput
                  inputStyle={styles.input}
                  placeholderText={'*******'}
                  secureText={true}
                  secureTextEntry={true}
                  placeholderTextColor={colors.black}
                />
              </View>
              <View style={styles.ButtonContainer}>
                <CustomButton
                  containerStyle={styles.VerifyButton1}
                  textStyle={[styles.firstButton, {color: colors.textWhite}]}
                  text="Update_password"
                />
              </View>
            </View>
          ) : null}

          {/* //////Phone Number End */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecurityPreferance;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.profileBackground,
    padding: '15@ms',
    flex: 1,
    paddingHorizontal: '10@s',
  },
  ButtansIcon: {
    // marginTop: 30,
    marginBottom: 0,
  },
  profileText: {
    fontSize: '13@ms',
  },
  profileText1: {
    fontSize: '12@ms',
  },
  paragraphText: {
    fontFamily: fonts.LatoRegular,
    fontSize: '10@ms',
    lineHeight: '10@s',
  },
  paragraphTextMobile: {
    fontFamily: fonts.LatoRegular,
    fontSize: '10@ms',
    lineHeight: '12@s',
    marginTop: '2%',
  },
  Container: {
    width: '100%',
    marginHorizontal: '10@s',
    flexDirection: 'row',
  },
  ToggleContainer: {
    flexDirection: 'row',
    backgroundColor: colors.textWhite,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '5%',
    paddingHorizontal: '3%',
    borderRadius: 5,
  },
  ToggleContainer1: {
    flexDirection: 'row',
    backgroundColor: colors.textWhite,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderRadius: 5,
  },
  SecondView: {
    marginHorizontal: '5%',
    width: '50%',
  },
  HeaderContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingBottom: 10,
  },
  backButton: {
    color: colors.black,
    fontSize: '20@s',
  },
  backbuttonMobile: {
    color: colors.black,
    fontSize: '20@s',
  },
  allowPreTextMobile: {
    fontSize: '17@ms',
    fontFamily: fonts.PoppinsMedium,
    paddingHorizontal: '10@ms',
    marginLeft: '20%',
  },
  allowPreText: {
    fontSize: '16@ms',
    fontFamily: fonts.bold,
    paddingHorizontal: '10@ms',
    marginTop: '2@ms',
  },
  quantityContainer: {
    marginTop: '10@ms',
  },
  quantity: {
    fontSize: '9@ms',
    fontFamily: fonts.LatoSemiBold,
    color: colors.black,
  },
  input: {
    alignSelf: 'flex-start',
    marginVertical: '2@ms',
    height: '30@ms',
    backgroundColor: colors.textWhite,
    marginTop: '2%',
    width: '95%',
  },
  VerifyButton: {
    width: '40%',
    height: 50,
    marginVertical: '5%',
    marginHorizontal: '2%',
  },
  VerifyButtonChange: {
    width: '57%',
    height: 50,
    marginVertical: '5%',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginHorizontal: '5%',
  },
  VerifyButtonModal: {
    width: '165@s',
    height: 50,
  },
  VerifyButtonModaldefaultModal: {
    width: '85@s',
    height: '40@vs',
  },
  VerifyButton1: {
    width: '45%',
    height: 50,
    marginVertical: '5%',
    marginHorizontal: '2%',
  },
  ButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: '5%',
  },
  firstButton: {
    fontSize: '6.7@s',
    color: colors.textPrimeColor,
  },
  optStyling: {
    // marginVertical: "30@s",
    width: '77%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: '12@ms',
    color: colors.black,
  },
  optContainer: {
    borderWidth: '1@s',
    borderColor: colors.otpBorder,
    borderRadius: '5@s',
    height: '20@s',
    width: '20@s',
    fontSize: '12@ms',
    color: colors.black,
    textAlign: 'center',
    fontWeight: '600',
  },

  ModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  ModalContainerDefaultModal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '82%',
    height: '100%',
  },
  ModeView: {
    elevation: 0.2,
    height: '90%',
  },
  ModalWrapperEmail: {
    marginHorizontal: width(26),
    marginVertical: height(27),
  },
  ModalWrapperEmailDefaultModal: {
    marginHorizontal: width(26),
    marginVertical: height(32),
  },
  emailModalPara: {
    textAlign: 'center',
    color: colors.textPrimeColor,
    fontFamily: fonts.LatoMedium,
    fontSize: '10@ms',
    marginVertical: '13@vs',
  },
  headingEmail: {
    textAlign: 'center',
    width: '100%',
    fontFamily: fonts.bold,
  },
  croscontainer: {
    position: 'absolute',
    right: 3,
    top: 0,
  },
  crossIconModal: {
    fontSize: '16@s',
  },
  DefaultModalButtonsContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
