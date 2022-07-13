import {Text, View} from 'react-native';
import React from 'react';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import TextInput from '@SilalApp/common/components/native/TextInput';
import DropDown from '@SilalApp/common/components/native/DropDown';

import fonts from '@SilalApp/common/assets/fonts';
import colors from '@SilalApp/common/assets/colors';
import {useTranslation} from 'react-i18next';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
const EditBox = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <CustomText
        marginTop={8}
        marginBottom={5}
        textStyle={
          !IsTablet ? styles.textInputTitleMobile : styles.textInputTitle
        }
        label={t('Restaurant_name')}
      />
      <TextInput
        inputStyle={
          !IsTablet ? styles.inputContainerMobile : styles.inputContainer
        }
        placeholderText="Rastaurant’s name"
        placeholderTextColor={colors.black}
      />
      <CustomText
        marginBottom={8}
        textStyle={
          !IsTablet ? styles.textInputTitleMobile : styles.textInputTitle
        }
        label={t('Cuisine')}
      />
      {/* <TextInput
        inputStyle={styles.inputContainer}
        placeholderText="Europian"
      /> */}
      <DropDown
        placeholder={'Europian'}
        height={verticalScale(35)}
        backgroundColor={colors.dullWhite}
        borderWidth={0}
      />

      <View style={styles.inputTextWrapper}>
        <CustomText
          textStyle={
            !IsTablet ? styles.textInputTitleMobile : styles.textInputTitle
          }
          fontFamily={fonts.LatoRegular}
          label={t('description')}
        />
        <CustomText
          textStyle={styles.characterLeft}
          fontFamily={fonts.LatoRegular}
          label={t('charcterLeft')}
        />
      </View>
      <TextInput
        inputStyle={
          !IsTablet ? styles.inputContainerMobile : styles.inputContainer
        }
        placeholderText="The slogan will be here mх 40 characters"
        placeholderTextColor={colors.black}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CustomText
          marginTop={8}
          marginBottom={5}
          textStyle={
            !IsTablet ? styles.textInputTitleMobile : styles.textInputTitle
          }
          label={t('Business_address')}
        />
        <CustomText label="*" textStyle={{color: colors.red, marginTop: 10}} />
      </View>

      <View style={[styles.inputTextWrapper, {marginTop: 0}]}>
        <TextInput
          inputStyle={[
            !IsTablet ? styles.inputContainerMobile : styles.inputContainer,
            {width: '66%', borderRadius: 8},
          ]}
          placeholderText={t('Street_name')}
          placeholderTextColor={colors.black}
        />
        <TextInput
          inputStyle={[
            !IsTablet ? styles.inputContainerMobile : styles.inputContainer,
            {width: '32%', borderRadius: 8},
          ]}
          placeholderText={t('Location_via_Gps')}
          placeholderTextColor={colors.black}
        />
      </View>
      <View style={[styles.inputTextWrapper, {marginTop: 20}]}>
        <TextInput
          inputStyle={[
            !IsTablet ? styles.inputContainerMobile : styles.inputContainer,
            {width: '32%', borderRadius: 8},
          ]}
          placeholderText="24/3"
          placeholderTextColor={colors.black}
        />
        <TextInput
          inputStyle={[
            !IsTablet ? styles.inputContainerMobile : styles.inputContainer,
            {width: '32%', borderRadius: 8},
          ]}
          placeholderText="233 344"
          placeholderTextColor={colors.black}
        />
        <View style={{width: '32%', borderRadius: 8}}>
          <DropDown
            placeholder={'New York'}
            backgroundColor={colors.dullWhite}
            height={verticalScale(41)}
          />
        </View>
      </View>
    </View>
  );
};

export default EditBox;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    padding: '15@ms',
    marginTop: '10@s',
  },
  characterLeft: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoMedium,
    color: colors.light_grey,
  },
  textInputTitle: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoMedium,
    color: colors.black,
  },
  textInputTitleMobile: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoMedium,
    color: colors.text,
    marginTop: '10@s',
  },
  tagButtonContainer: {
    backgroundColor: colors.light_blue,
  },
  tagButtonText: {
    color: colors.dark_blue,
    fontFamily: fonts.LatoRegular,
    paddingHorizontal: '9@s',
    paddingVertical: '4@vs',
  },
  inputContainer: {
    height: '30@s',
    borderRadius: '4@s',
    borderColor: colors.borderColor,
    borderWidth: '0.5@s',
  },
  inputContainerMobile: {
    height: '40@vs',
    borderRadius: '8@s',
    borderColor: colors.dullWhite,
    borderWidth: '0.5@s',
  },
  inputTextWrapper: {
    flexDirection: 'row',
    marginTop: '8@s',
    marginBottom: '5@s',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
