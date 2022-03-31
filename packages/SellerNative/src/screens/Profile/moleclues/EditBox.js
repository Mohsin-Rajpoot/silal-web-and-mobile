import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale, ScaledSheet} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import TextInput from '@SilalApp/common/components/native/TextInput';
import DropDown from '@SilalApp/common/components/native/DropDown';

import fonts from 'fonts';
import colors from '@SilalApp/common/assets/colors';
const EditBox = () => {
  return (
    <View style={styles.container}>
      <CustomText
        marginBottom={8}
        fontSize={10}
        fontFamily={fonts.LatoRegular}
        label="Cuisine"
      />
      {/* <TextInput
        inputStyle={styles.inputContainer}
        placeholderText="Europian"
      /> */}
      <DropDown placeholder={"City"} />
      <CustomText
        marginTop={20}
        marginBottom={8}
        fontSize={10}
        fontFamily={fonts.LatoRegular}
        label="Restaurant name"
      />
      <TextInput
        inputStyle={styles.inputContainer}
        placeholderText="Rastaurant’s name"
      />
      <View style={styles.inputTextWrapper}>
        <CustomText
          marginBottom={8}
          fontSize={10}
          fontFamily={fonts.LatoRegular}
          label="Description"
        />
        <CustomText
          color={colors.light_grey}
          marginBottom={8}
          fontSize={10}
          fontFamily={fonts.LatoRegular}
          label="13 characters left"
        />
      </View>

      <TextInput
        inputStyle={styles.inputContainer}
        placeholderText="The slogan will be here mх 40 characters"
      />

      <CustomText
        marginTop={20}
        marginBottom={8}
        fontSize={10}
        fontFamily={fonts.LatoRegular}
        label="Business address * "
      />

      <View style={[styles.inputTextWrapper, {marginTop: 0}]}>
        <TextInput
          inputStyle={[styles.inputContainer, {width: '58%', borderRadius: 5}]}
          placeholderText="Street name"
        />
        <TextInput
          inputStyle={[styles.inputContainer, {width: '38%', borderRadius: 5}]}
          placeholderText="Location via GPS"
        />
      </View>
      <View style={[styles.inputTextWrapper, {marginTop: 20}]}>
        <TextInput
          inputStyle={[styles.inputContainer, {width: '31%', borderRadius: 5}]}
          placeholderText="Number"
        />
        <TextInput
          inputStyle={[styles.inputContainer, {width: '31%', borderRadius: 5}]}
          placeholderText="Postal Address"
        />
        <View style={{width: '31%', borderRadius: 5}}>
          <DropDown placeholder={"City"} />
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
    borderRadius: 5,
  },
  inputTextWrapper: {
    flexDirection: 'row',
    marginTop: '20@vs',
    justifyContent: 'space-between',
  },
});
