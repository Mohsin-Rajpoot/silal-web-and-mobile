import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';
import CustomText from '@SilalApp/common/components/CustomText';
import colors from '@SilalApp/common/assets/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import fonts from '@SilalApp/common/assets/fonts';
import TextInput from '@SilalApp/common/components/native/TextInput';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import MultiSelectDropDown from '@SilalApp/common/components/native/MultipleSelectDrop';
import CustomButton from '@SilalApp/common/components/native/CustomButton';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'native-base';

const CustomValue = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.HeaderMobile}>
          <Ionicons name="chevron-back" style={styles.HeaderBackIcon} />
        </TouchableOpacity>
        <CustomText
          label={t('Custom_Value')}
          //  translation Not Added
          textStyle={styles.HeadingTitle}
        />
        <View style={styles.textfiedStyleMobile}>
          <CustomText
            label={t('Your adding a new value to this field')}
            //  translation Not Added
            textStyle={styles.HeadingInputHeading}
          />
          <TextInput
            placeholderTextColor={colors.black}
            placeholderText={t('Brand')}
            secureText={false}
          />

          <View style={IsTablet ? {width: '90%'} : styles.ColorMobileView}>
            <CustomText
              label={t('Current Values')}
              //  translation Not Added
              textStyle={styles.HeadingInputHeading}
            />
            <MultiSelectDropDown
              CustomDropdownStyle={
                !IsTablet ? styles.DropDownMobileCustom : null
              }
            />
          </View>
          <TextInput
            placeholderTextColor={colors.black}
            placeholderText={t('Xiomi')}
            selectionColor={colors.primary}
            secureText={false}
            inputStyle={styles.PrimaryBorderfield}
            inputTextStyle={styles.placeholderTextMobile}
          />

          <View style={styles.Secndfield}>
            <TextInput
              placeholderTextColor={colors.black}
              placeholderText={t('Samsung')}
              secureText={false}
              selectionColor={colors.primary}
              inputStyle={styles.PrimaryBorderfield}
              inputTextStyle={styles.placeholderTextMobile}
            />
          </View>
          <TouchableOpacity style={styles.AddButtonMobile}>
            <Entypo name="plus" style={styles.plusIcon} />
            <CustomText
              label={t('Add one more option')}
              //  translation Not Added
              textStyle={styles.buttonPlus}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <CustomButton
        text={t('Add values to Brand field')}
        //  translation Not Added
        textStyle={styles.TextAddValue}
        containerStyle={!IsTablet ? styles.addValueBtnMobile : styles.submitBtn}
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

export default CustomValue;

const styles = ScaledSheet.create({
  HeaderMobile: {
    flexDirection: 'row',
    width: '100%',
    // height:'100%'
  },
  HeadingTitle: {
    justifyContent: 'center',
    alignSelf: 'center',

    marginTop: -25,
    fontSize: '17@s',
  },
  HeaderBackIcon: {
    color: colors.black,
    fontSize: '20@vs',
  },
  HeadingInputHeading: {
    fontSize: '12@s',
    color: colors.black,
    fontFamily: fonts.LatoRegular,
    paddingVertical: '7@vs',
  },
  Container: {
    marginVertical: '2%',
    width: '97%',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '100%',
  },
  textfiedStyleMobile: {
    marginVertical: '17@vs',
    marginHorizontal: '10@s',
  },
  DropDownMobileCustom: {
    height: '45@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dullWhite,
  },
  ColorMobileView: {
    marginVertical: '10@vs',
  },
  PrimaryBorderfield: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
  placeholderTextMobile: {
    paddingHorizontal: '10@s',
  },
  Secndfield: {
    marginVertical: '10@s',
  },
  submitBtnMobile: {
    width: '100%',
    borderRadius: '10@s',
  },
  buttonPlus: {
    color: colors.primary1,
    fontFamily: fonts.LatoSemiBold,
    fontSize: '15@s',
  },
  AddButtonMobile: {
    flexDirection: 'row',
    backgroundColor: colors.blurPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    height: '35@vs',
    borderRadius: '10@s',
  },
  plusIcon:{
      fontSize: '19@s', 
      color: colors.primary
    },
    addValueBtnMobile:{
        height:'40@s',
        width:'98%'
    },
    TextAddValue:{
        fontFamily:fonts.PoppinsSemiBold,
        fontSize:"12@s"
    }
});
