import {Image, View, TextInput, TouchableOpacity} from 'react-native';
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
import {Icon} from 'react-native-elements';
import {useTranslation} from 'react-i18next'
const Documents = ({navigation}) => {
  const {t}=useTranslation();
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: scale(15),
      }}>
      <Header label={t("Document")} onPress={()=>navigation.openDrawer()} />

      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View>
            <CustomText textStyle={styles.documentTitleText} label="ITIN" />
            <TextInput
              placeholder="314-23-N1348"
              placeholderTextColor={colors.black}
              style={styles.textInputtitle}
              borderRadius={moderateScale(5)}
              borderWidth={moderateScale(2)}
              borderColor={colors.borderColor}
              paddingHorizontal={scale(10)}
              height={verticalScale(40)}
              marginTop={verticalScale(5)}
            />
          </View>
          <View style={{marginTop: verticalScale(20)}}>
            <CustomText
              textStyle={styles.documentTitleText}
              label={t("CheckingAccount")}
            />
            <TextInput
              placeholder="2345 5445 7922 2054"
              placeholderTextColor={colors.black}
              style={styles.textInputtitle}
              borderRadius={moderateScale(5)}
              borderWidth={moderateScale(2)}
              borderColor={colors.borderColor}
              paddingHorizontal={scale(10)}
              height={verticalScale(40)}
              marginTop={verticalScale(5)}
            />
          </View>
        </View>
        <View style={styles.exportButton}>
          <Icon
            name="exit-outline"
            type="ionicon"
            color={colors.textWhite}
            size={28}
            style={{transform: [{rotate: '-90deg'}]}}
          />
          <CustomText label={t("Export")} textStyle={styles.buttonText} />
        </View>
      </View>
    </View>
  );
};

export default Documents;

const styles = ScaledSheet.create({
  mainContainer: {
    width: '50%',
    marginTop: '20@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  exportButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: '15@ms',
    paddingVertical: '5@ms',
    borderRadius: '5@ms',
    marginHorizontal: '10@ms',
  },
  buttonText: {
    fontSize: '13@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,

    marginLeft: '5@ms',
  },
  documentTitleText: {
    fontSize: '10@ms',
    fontFamily: fonts.LatoSemiBold,
    color: colors.black,
  },
  textInputtitle: {
    fontSize: '13@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  container: {
    width: '80%',
    backgroundColor: colors.textWhite,
    padding: '15@ms',
    borderRadius: '5@ms',
  },
  inputContainer: {
    height: '40@s',
    width: '100%',
  },
  exportBtn: {
    marginVertical: 0,
  },
});
