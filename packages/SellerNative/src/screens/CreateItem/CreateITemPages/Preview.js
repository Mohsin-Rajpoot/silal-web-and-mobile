import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import CustomText from '@SilalApp/common/components/CustomText';
import {useTranslation} from 'react-i18next';
import { CustomButton } from '@SilalApp/common/components/native';
import PreviewComponent from '../../../components/Preview'
const Preview = ({moveForward, goPrev}) => {
  const {t} = useTranslation();
  return (
    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.headerTitleContainer}>
            <CustomText label={t('Preview')} textStyle={styles.headerTitle} />
          </View>
          <View style={styles.divider} />
          <PreviewComponent/>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton
          text={t('back')}
          containerStyle={styles.backContainer}
          textStyle={styles.backText}
          onPress={goPrev}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomButton
            text={t('Publish')}
            textStyle={styles.nextStep}
            containerStyle={styles.backContainer1}
            onPress={moveForward}
          />
        </View>
      </View>
    </View>
  );
};

export default Preview;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.textWhite,
    marginLeft: '5@s',
    width: '60%',
    borderRadius: '4@s',
    marginBottom: '10@s',
  },
  headerTitleContainer: {
    margin: '10@s',
  },
  headerTitle: {
    fontSize: '13@ms',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  divider: {
    backgroundColor: colors.underLine,
    width: '100%',
    height: '1@s',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '10@s',
    width:"30%"
  },
  nextStep: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,
  },
  backContainer: {
    borderRadius: '4@s',
    borderColor: colors.primary,
    borderWidth: '1@s',
    backgroundColor: 'transparent',
  },
  backContainer1: {
    borderRadius: '4@s',
    borderColor: colors.primary,
    borderWidth: '1@s',
    backgroundColor:colors.primary,
    paddingHorizontal: '30@s',
  },
  backText: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
  },
});
