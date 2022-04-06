import {View, TextInput, ScrollView} from 'react-native';
import React from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
  scale,
} from 'react-native-size-matters';
import Header from '../Profile/moleclues/Header';
import colors from '@SilalApp/common/assets/colors';
import CustomButton from '@SilalApp/common/components/native/CustomButton';
import fonts from '@SilalApp/common/assets/fonts';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
const ContactUs = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <ScrollView style={styles.mainContainer}>
      <Header
        label={t('Contact_Silal')}
        onPress={() => navigation.openDrawer()}
      />
      <View
        style={{
          width: '70%',
          paddingVertical: verticalScale(20),
        }}>
        <View style={styles.container}>
          <View style={{alignItems: 'flex-start'}}>
            <CustomText
              textStyle={styles.letSolveText}
              label={t('LetsSolveProblem')}
            />
            <CustomText
              textStyle={styles.letSolveDetailText}
              label={t('ContactUsDetailText')}
            />
          </View>
          <View style={{height: 20}} />
          <View>
            <CustomText
              textStyle={styles.inputLabel}
              label={t('ContactPhone_email')}
            />
            <TextInput
              style={{fontSize: moderateScale(17), color: colors.black}}
              borderRadius={moderateScale(5)}
              borderWidth={moderateScale(2)}
              borderColor={colors.borderColor}
              paddingHorizontal={scale(10)}
              height={verticalScale(35)}
              marginTop={verticalScale(5)}
            />
          </View>
          <View style={{marginTop: verticalScale(20)}}>
            <CustomText textStyle={styles.inputLabel} label={t('Subject')} />
            <TextInput
              style={{fontSize: moderateScale(17), color: colors.black}}
              borderRadius={moderateScale(5)}
              borderWidth={moderateScale(2)}
              borderColor={colors.borderColor}
              paddingHorizontal={scale(10)}
              height={verticalScale(35)}
              marginTop={verticalScale(5)}
            />
          </View>
          <View style={{marginTop: verticalScale(20)}}>
            <CustomText
              textStyle={styles.inputLabel}
              label={t('YourMessage')}
            />
            <TextInput
              style={{
                fontSize: moderateScale(17),
                color: colors.black,
                alignItems: 'flex-start',
              }}
              borderRadius={moderateScale(5)}
              borderWidth={moderateScale(2)}
              borderColor={colors.borderColor}
              paddingHorizontal={scale(10)}
              height={verticalScale(70)}
              marginTop={verticalScale(5)}
              multiline={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              justifyContent: 'space-between',
            }}>
            <View style={{width: '30%'}}>
              <View style={styles.attachContainer}>
                <Icon name="attachment" type="entypo" color={colors.primary} />
                <CustomText label="Attach" textStyle={styles.attachText} />
              </View>
            </View>
            <View style={{width: '69%'}}>
              <CustomButton
                textStyle={{fontSize: scale(14)}}
                containerStyle={styles.exportBtn}
                text={t('Submit')}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactUs;

const styles = ScaledSheet.create({
  mainContainer: {
    paddingHorizontal: '15@s',
    backgroundColor: colors.white,
  },
  attachContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryBlur,
    padding: '9@s',
    justifyContent: 'center',
    width: '100%',
    borderRadius: '4@s',
  },
  container: {
    width: '100%',
    backgroundColor: colors.textWhite,
    padding: '15@ms',
    borderRadius: '5@ms',
  },
  letSolveText: {
    fontSize: '18@ms',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  attachText: {
    fontSize: '16@ms',
    fontFamily: fonts.LatoSemiBold,
    color: colors.primary,
    margin: '3@s',
    marginLeft: '10@s',
    fontWeight: '600',
  },
  letSolveDetailText: {
    fontSize: '14@ms',
    color: colors.black,
    fontFamily: fonts.LatoRegular,
  },
  inputLabel: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoBold,
    color: colors.textPrimary,
  },

  exportBtn: {
    marginVertical: 0,
    alignSelf: 'flex-end',
    paddingVertical: '5@s',
    width: '100%',
    marginBottom: '15@vs',
    shadowColor: 'rgba(115, 213, 201, 1)',
  },
  exportBtn1: {
    marginVertical: 0,
    alignSelf: 'flex-end',
    paddingVertical: '5@s',
    paddingHorizontal: '10@s',
    width: '100%',
    marginBottom: '15@vs',
    marginRight: '15@s',
    shadowColor: 'rgba(115, 213, 201, 1)',
  },
});
