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
const ContactUs = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Header label="Contact Silal" />
      <View style={{marginLeft: scale(38), alignItems: 'flex-start'}}>
        <CustomText
          textStyle={styles.letSolveText}
          label="Let’s solve the problem"
        />
        <CustomText
          textStyle={styles.letSolveDetailText}
          label="It looks like you have a problem with our system. We are here to help you, so please get in touch with us."
        />
      </View>
      <View
        style={{
          paddingHorizontal: scale(35),
          paddingVertical: verticalScale(20),
        }}>
        <View style={styles.container}>
          <View>
            <CustomText
              textStyle={styles.inputLabel}
              label="Contact Phone/Email"
            />
            <TextInput
              style={{fontSize: moderateScale(17), color: colors.black}}
              borderRadius={moderateScale(5)}
              borderWidth={moderateScale(2)}
              borderColor={colors.borderColor}
              paddingHorizontal={scale(10)}
              height={verticalScale(45)}
              marginTop={verticalScale(5)}
            />
          </View>
          <View style={{marginTop: verticalScale(20)}}>
            <CustomText textStyle={styles.inputLabel} label="Subject" />
            <TextInput
              style={{fontSize: moderateScale(17), color: colors.black}}
              borderRadius={moderateScale(5)}
              borderWidth={moderateScale(2)}
              borderColor={colors.borderColor}
              paddingHorizontal={scale(10)}
              height={verticalScale(45)}
              marginTop={verticalScale(5)}
            />
          </View>
          <View style={{marginTop: verticalScale(20)}}>
            <CustomText textStyle={styles.inputLabel} label="Your message" />
            <TextInput
              style={{fontSize: moderateScale(17), color: colors.black}}
              borderRadius={moderateScale(5)}
              borderWidth={moderateScale(2)}
              borderColor={colors.borderColor}
              paddingHorizontal={scale(10)}
              height={verticalScale(130)}
              marginTop={verticalScale(5)}
            />
          </View>
          <CustomText
            textStyle={[
              styles.inputLabel,
              {marginTop: verticalScale(50), marginBottom: verticalScale(15)},
            ]}
            label="Add attachments   +"
          />
        </View>
      </View>
      <CustomButton
        textStyle={{fontSize: scale(17)}}
        containerStyle={styles.exportBtn}
        text="Submit"
      />
    </ScrollView>
  );
};

export default ContactUs;

const styles = ScaledSheet.create({
  mainContainer: {
    paddingHorizontal: '15@s',
    backgroundColor: colors.white,
  },
  container: {
    width: '100%',
    backgroundColor: colors.textWhite,
    padding: '15@ms',
    borderRadius: '5@ms',
  },
  letSolveText: {
    fontSize: '20@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
  },
  letSolveDetailText: {
    fontSize: '17@ms',
    color: colors.black,
    fontFamily: fonts.LatoMedium,
  },
  inputLabel: {
    fontSize: '15@ms',
    fontFamily: fonts.LatoBold,
    color: colors.textPrimary,
  },

  exportBtn: {
    marginVertical: 0,
    alignSelf: 'flex-end',
    paddingVertical: '14@s',
    paddingHorizontal: '140@s',
    marginBottom: '15@vs',
    marginRight: '15@s',
  },
});
