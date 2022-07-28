import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useRef} from 'react';
import HeaderBack from '@SilalApp/common/components/native/HeaderBack';
import CommonStyle from '@SilalApp/common/styles/index';
import HeaderHeading from '@SilalApp/common/components/headerHeading';
import CustomText from '@SilalApp/common/components/CustomText';
// import styles from "./style";
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
  scale,
} from 'react-native-size-matters';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen-hooks';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Button from '@SilalApp/common/components/native/AuthButton';
import AuthCustomText from '@SilalApp/common/components/native/AuthCustomText';
import {useTranslation} from 'react-i18next';
import DeviceInfo from 'react-native-device-info';
import {colors} from 'react-native-elements';
import fonts from '@SilalApp/common/assets/fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CustomButton} from '@SilalApp/common/components/native';
const AdminCodeScreen = ({navigation}) => {
  const {t} = useTranslation();
  const isTab = DeviceInfo.isTablet();
  const [code, setCode] = useState('');
  const [submit, setsubmit] = useState(false);

  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      {submit == false ? (
        <HeaderBack
          name={t('Admin code')}
          onGoBack={() => navigation.goBack()}
        />
      ) : (
        <HeaderBack
          name={t('Admin code')}
          onGoBack={() => setsubmit(!submit)}
        />
      )}
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{flexGrow: 1}}>
          <HeaderHeading
            headingName={t('Change admin code for «Seller’s name»')}
          />

          <View style={{marginTop: 20}} />

          {submit == false ? (
            <View>
              <AuthCustomText
                CustomStyleAuth={{marginTop: 20}}
                fisrtText={t('Enter your previous code')}
              />

              <OTPInputView
                autoFocusOnLoad={true}
                pinCount={4}
                style={styles.optStyling}
                codeInputFieldStyle={styles.optContainerMobile}
                handleChange={value => setCode(value)}
              />
            </View>
          ) : (
            <View>
              <AuthCustomText
                CustomStyleAuth={{marginTop: 20}}
                fisrtText={t('Enter your new code')}
              />

              <OTPInputView
                autoFocusOnLoad={true}
                pinCount={4}
                style={styles.optStyling}
                codeInputFieldStyle={styles.optContainerMobile}
                handleChange={value => setCode(value)}
              />
              <AuthCustomText
                CustomStyleAuth={{marginTop: 20}}
                fisrtText={t('Repeat the code')}
              />
              <OTPInputView
                autoFocusOnLoad={true}
                pinCount={4}
                style={styles.optStyling}
                codeInputFieldStyle={styles.optContainerMobile}
                handleChange={value => setCode(value)}
              />
            </View>
          )}
          <CustomText
            label={t('resend_code') + ' 3:23'}
            textStyle={styles.timerCode}
          />
        </View>
        {submit == false ? (
          <CustomButton
            containerStyle={{width: '90%', height: 45}}
            onPress={() => setsubmit(true)}
            text="Submit"
          />
        ) : (
          <CustomButton
            containerStyle={{width: '90%', height: 45}}
            text="Submit new admin code"
            onPress={() => navigation.goBack()}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdminCodeScreen;

const styles = ScaledSheet.create({
  optStyling: {
    marginVertical: '10@s',
    width: wp('60%'),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: '12@ms',
    color: colors.black,
  },
  optContainerMobile: {
    backgroundColor: colors.dullWhite,
    borderRadius: '5@s',
    height: '40@s',
    width: '30@s',
    fontSize: '12@ms',
    color: colors.black,
    textAlign: 'center',
  },
  optContainer: {
    borderWidth: '1@s',
    borderColor: colors.otpBorder,
    borderRadius: '5@s',
    height: '40@s',
    width: '30@s',
    fontSize: '12@ms',
    color: colors.black,
    textAlign: 'center',
  },
  timerCode: {
    alignSelf: 'center',
    borderBottomWidth: '1@s',
    borderBottomColor: colors.gray,
    fontFamily: fonts.LatoMedium,
    fontSize: '11@ms',
  },
});
