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
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import { ScrollView } from 'react-native-gesture-handler';
const Documents = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: IsTablet? colors.profileBackground :colors.textWhite,
        flex: 1,
        paddingHorizontal: IsTablet? scale(15): scale(5),

      }}>
        <ScrollView>
      <Header label={t('Document')} onPress={() => navigation.openDrawer()} />

      <View style={IsTablet ? styles.mainContainer :styles.mainContainerMobile}>
        <View style={IsTablet? styles.container: styles.containerMobile}>
          <View>
            <CustomText textStyle={styles.documentTitleText} label="ITIN" />
            <TextInput
              placeholder="314-23-N1348"
              placeholderTextColor={colors.black}
              style={IsTablet? styles.textInputtitle: styles.textInputtitleMobile}
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
              label={t('CheckingAccount')}
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
        {IsTablet ?
        <TouchableOpacity style={IsTablet?  styles.exportButton : styles.exportButtonMobile}>
          <Icon
            name="exit-outline"
            type="ionicon"
            color={colors.textWhite}
            size={28}
            style={{transform: [{rotate: '-90deg'}]}}
          />
          <CustomText label={t('Export')} textStyle={styles.buttonText} />
        </TouchableOpacity>
       :null }
      </View>
</ScrollView>
{!IsTablet ?
        <TouchableOpacity style={IsTablet?  styles.exportButton : styles.exportButtonMobile}>
          <Icon
            name="exit-outline"
            type="ionicon"
            color={colors.textWhite}
            size={28}
            style={{transform: [{rotate: '-90deg'}]}}
          />
          <CustomText label={t('Export')} textStyle={styles.buttonTextMobile} />
        </TouchableOpacity>
       :null }
    </SafeAreaView>
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
  mainContainerMobile: {
    width: '100%',
    marginTop: '20@s',
    // flexDirection: 'row',
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
  exportButtonMobile:{
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    // alignSelf: 'flex-start',
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
  buttonTextMobile:{
    fontSize: '13@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,
    marginLeft: '5@ms',
    paddingTop:'6@s'
    // justifyContent:'center',
    // textAlignVertical:'center'
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
  containerMobile:{
    width: '100%',
    backgroundColor: colors.textWhite,
    padding: '15@ms',
    borderRadius: '5@ms',
  },
  inputContainer: {
    height: '100@s',
    width: '100%',
  },
  exportBtn: {
    marginVertical: 0,
  },
});
