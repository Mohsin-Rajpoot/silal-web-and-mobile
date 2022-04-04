import {Text, View} from 'react-native';
import React from 'react';
import {scale, ScaledSheet} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import TextInput from '@SilalApp/common/components/native/TextInput';
import DropDown from '@SilalApp/common/components/native/DropDown';

import fonts from 'fonts';
import colors from '@SilalApp/common/assets/colors';
import {useTranslation} from 'react-i18next';
const EditBox = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <CustomText
        marginBottom={8}
        fontSize={10}
        fontFamily={fonts.LatoRegular}
        label={t('Cuisine')}
      />
      {/* <TextInput
        inputStyle={styles.inputContainer}
        placeholderText="Europian"
      /> */}
      <DropDown placeholder={'Europian'} />
      <CustomText
        marginTop={20}
        marginBottom={8}
        fontSize={10}
        fontFamily={fonts.LatoRegular}
        label={t('Restaurant_name')}
      />
      <TextInput
        inputStyle={styles.inputContainer}
        placeholderText="Rastaurant’s name"
        placeholderTextColor={colors.black}
      />
      <View style={styles.inputTextWrapper}>
        <CustomText
          marginBottom={8}
          fontSize={10}
          fontFamily={fonts.LatoRegular}
          label={t('description')}
        />
        <CustomText
          color={colors.light_grey}
          marginBottom={8}
          fontSize={10}
          fontFamily={fonts.LatoRegular}
          label={t('charcterLeft')}
        />
      </View>

      <TextInput
        inputStyle={styles.inputContainer}
        placeholderText="The slogan will be here mх 40 characters"
        placeholderTextColor={colors.black}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CustomText
          marginTop={20}
          marginBottom={8}
          fontSize={10}
          fontFamily={fonts.LatoRegular}
          label={t('Business_address')}
        />
        <CustomText label="*" textStyle={{color: colors.red, marginTop: 10}} />
      </View>

      <View style={[styles.inputTextWrapper, {marginTop: 0}]}>
        <TextInput
          inputStyle={[styles.inputContainer, {width: '66%', borderRadius: 8}]}
          placeholderText={t('Street_name')}
          placeholderTextColor={colors.black}
        />
        <TextInput
          inputStyle={[styles.inputContainer, {width: '32%', borderRadius: 8}]}
          placeholderText={t('Location_via_Gps')}
          placeholderTextColor={colors.black}
        />
      </View>
      <View style={[styles.inputTextWrapper, {marginTop: 20}]}>
        <TextInput
          inputStyle={[styles.inputContainer, {width: '32%', borderRadius: 8}]}
          placeholderText="24/3"
          placeholderTextColor={colors.black}
        />
        <TextInput
          inputStyle={[styles.inputContainer, {width: '32%', borderRadius: 8}]}
          placeholderText="233 344"
          placeholderTextColor={colors.black}
        />
        <View style={{width: '32%', borderRadius: 8}}>
          <DropDown placeholder={'New York'} />
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
    height: '350@vs',
    padding: '15@ms',
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
    height: null,
    borderRadius: 10,
  },
  inputTextWrapper: {
    flexDirection: 'row',
    marginTop: '20@vs',
    justifyContent: 'space-between',
  },
});
