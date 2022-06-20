import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import fonts from '@SilalApp/common/assets/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScaledSheet} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import {useTranslation} from 'react-i18next';
import colors from '@SilalApp/common/assets/colors';
import CustomTextInput from '@SilalApp/common/components/native/TextInput';
import {ScrollView} from 'native-base';

const BarCodeScane = ({navigation}) => {
  const [active, setActive] = useState(false);
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.ContainerRbSheet}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-chevron-back-outline"
              style={styles.BackRBSheet}
            />
          </TouchableOpacity>
          <Text style={styles.TitleRBSheet}>Barcode</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            marginTop: '5%',
          }}>
          <CustomText label={t('Barcode')} textStyle={styles.formTextHeading} />
          <CustomText label="*" textStyle={styles.star} />
        </View>
        <CustomTextInput
          inputStyle={{width: '90%'}}
          placeholderText={t('0_00_303_0_453553')}
        />
      </ScrollView>
      <View style={styles.ScaneButton}>
        <TouchableOpacity style={styles.ContainerButton}>
          <Text style={styles.ScanButtonText}>Scan barcode</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BarCodeScane;

const styles = ScaledSheet.create({
  ContainerRbSheet: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  BackRBSheet: {
    color: colors.black,
    fontSize: '20@s',
  },
  TitleRBSheet: {
    color: colors.black,
    fontSize: '17@s',
    fontFamily: fonts.LatoSemiBold,
    // backgroundColor:'red',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  cancelRBSheet: {
    color: colors.primary,
    fontSize: '16@s',
    fontFamily: fonts.LatoRegular,
  },
  formTextHeading: {
    fontSize: '10@ms',
    fontFamily: fonts.LatoBold,
    color: colors.textPrime,
    paddingHorizontal: '2@s',
    marginVertical: '5@s',
  },
  star: {
    color: colors.red,
    flexDirection: 'column',
  },
  mainContainer: {
    height: '100%',
    backgroundColor: colors.white,
    width: '100%',
  },
  ScaneButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContainerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    height: 50,
    width: '88%',
    borderRadius: '7@s',
    overflow: 'hidden',
  },
  ScanButtonText: {
    fontFamily: fonts.bold,
    color: colors.primary,
  },
});
