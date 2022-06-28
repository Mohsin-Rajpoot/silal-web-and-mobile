import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomText from '@SilalApp/common/components/CustomText';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import {useTranslation} from 'react-i18next';
import TextInput from '@SilalApp/common/components/native/TextInput';
import {CustomButton} from '@SilalApp/common/components/native';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import Entypo from 'react-native-vector-icons/Entypo';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
const PasswordSettings = ({navigation}) => {
  const {t} = useTranslation();
  const [email, setemail] = useState('');
  const [ChangeReset, setChangeReset] = useState(false);
  const [ChangeEmail, setChangeEmail] = useState(false);
  const [ChangeModalData, setChangeModalData] = useState('');
  const [EmailModal, setEmailModal] = useState(false);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.profileBackground,
        height: '100%',
        width: '100%',
      }}>
      <TouchableOpacity
        style={styles.HeaderContainer}
        onPress={() => navigation.goBack()}>
        <MaterialIcons
          name={'arrow-back-ios'}
          style={styles.backbuttonMobile}
        />
        <CustomText
          textStyle={styles.allowPreTextMobile}
          label="Securitypreferences"
        />
      </TouchableOpacity>
      <ScrollView>
        <View style={{marginHorizontal: '5%', marginVertical: '3%'}}>
          <CustomText
            textStyle={styles.profileText1}
            label={t('Passwordsettings')}
          />
          <View style={styles.quantityContainer}>
            <CustomText label={t('New_password')} textStyle={styles.quantity} />
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
              label={t('Verify_password')}
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
                    label={t('Verify_e_mail')}
                    textStyle={styles.headingEmail}
                  />
                ) : (
                  <CustomText
                    label={t('Verify_Number')}
                    textStyle={styles.headingEmail}
                  />
                )}

                <Text style={styles.emailModalPara}>
                  We’ve just sent an email with a verefication code
                  <Text style={{color: colors.primary}}>
                    {' '}
                    toemail@example.com
                  </Text>
                </Text>

                <OTPInputView
                  autoFocusOnLoad={true}
                  pinCount={6}
                  style={styles.optStyling}
                  codeInputHighlightStyle={{borderColor: colors.primary}}
                  codeInputFieldStyle={styles.optContainer}
                  handleChange={value => setCode(value)}
                />
                <View style={{marginTop: '14%'}}>
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
                    type={'TERTIART'}
                    textStyle={styles.firstButton}
                    text="Cancel"
                  />
                </View>
              </View>
            </View>
          </CustomModal>
          {/* Email Model End */}
        </View>
      </ScrollView>
      {ChangeReset == false ? (
        <View style={styles.ButtonContainer}>
          {ChangeEmail == true ? (
            <CustomButton
              onPress={() => alert('Passwod ChangedSucessfully')}
              containerStyle={[styles.VerifyButton]}
              textStyle={[styles.firstButton, {color: colors.textWhite}]}
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
              textStyle={[styles.firstButton, {color: colors.textWhite}]}
              text="Verify_e_mail"
            />
          )}
        </View>
      ) : (
        <View>
          <CustomButton
            onPress={() => setEmailModal(true)}
            containerStyle={styles.VerifyButtonChange}
            textStyle={[styles.firstButtonChange, {color: colors.textWhite}]}
            text="Re_send_verification_code"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PasswordSettings;

const styles = ScaledSheet.create({
  HeaderContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingBottom: 10,
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
  //   ///

  Container: {
    width: '100%',
    marginHorizontal: '10@s',
    flexDirection: 'row',
  },

  HeaderContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingBottom: 10,
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
    // marginVertical: '2@ms',
    height: '40@ms',
    backgroundColor: colors.textWhite,
    marginTop: '2%',
    width: '95%',
    paddingBottom: '5@s',
    paddingHorizontal: '5@s',
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
    width: '130@s',
    height: '35@vs',
    borderRadius: 5,
  },

  ButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: '5%',
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
    height: '29@s',
    width: '22@s',
    fontSize: '12@ms',
    color: colors.black,
    textAlign: 'center',
  },

  ModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  ModeView: {
    elevation: 0.2,
    height: '90%',
  },
  ModalWrapperEmail: {
    marginHorizontal: width(9),
    marginVertical: height(33),
  },

  emailModalPara: {
    textAlign: 'center',
    color: colors.textPrimeColor,
    fontFamily: fonts.LatoMedium,
    fontSize: '10@ms',
    marginVertical: '20@vs',
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
  firstButton: {
    fontSize: '12@s',
    color: colors.textPrimeColor,
  },
});
