import {Image, Pressable, Text, View} from 'react-native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
import CustomText from '@SilalApp/common/components/CustomText';
import colors from 'common_colors';
import React from 'react';
import {useTranslation} from 'react-i18next';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import {Icon} from 'react-native-elements';
const ProfileBox = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <View>
      <View style={styles.mainContainer}>
        <View
          style={{
            width: !IsTablet ? '15%' : '100%',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => navigation.navigate('Profile')}
            style={
              !IsTablet ? styles.imgContainerMobile : styles.imgContainer
            }></Pressable>
         
        </View>
        <View
          style={{
            alignItems: !IsTablet ? 'flex-start' : 'center',
            width: '60%',
          }}>
          <CustomText
            textStyle={styles.innertitleAccount}
            label="Account’s name"
          />
          <CustomText textStyle={styles.email} label="debra.holt@example.com" />
        </View>
        {!IsTablet && (
          <View style={styles.checkContainer}>
            <Icon
              name="check"
              color={colors.textWhite}
              size={20}
              type="fontawesome"
            />
          </View>
        )}
        <Pressable>
          {IsTablet && (
            <CustomText
              fontFamily={fonts.PoppinsSemiBold}
              textStyle={styles.btnLogOut}
              label={t('Logout')}
            />
          )}
        </Pressable>
      </View>
      <View style={styles.container}>
        <View style={styles.imgContainer2}></View>
        <View>
          <CustomText
            fontFamily={fonts.PoppinsSemiBold}
            textStyle={styles.accountText2}
            label="Account’s name"
          />
          <CustomText
            fontFamily={fonts.PoppinsMedium}
            textStyle={styles.email2}
            label="debra.holt@example.com"
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileBox;

const styles = ScaledSheet.create({
  mainContainer: {
    width: '100%',
    backgroundColor: colors.textWhite,
    paddingVertical: '10@vs',
    borderTopRightRadius: !IsTablet ? '14@s' : '5@ms',
    borderTopLeftRadius: !IsTablet ? '14@s' : '5@ms',
    justifyContent: !IsTablet ? 'space-between' : 'center',
    alignItems: 'center',
    padding: '10@ms',
    flexDirection: !IsTablet ? 'row' : 'column',
  },
  imgContainer: {
    width: '45@vs',
    height: '45@vs',
    borderRadius: '100@ms',
    backgroundColor: colors.black,
    marginBottom: '10@vs',
  },
  imgContainerMobile: {
    width: '30@vs',
    height: '30@vs',
    borderRadius: '100@ms',
    backgroundColor: colors.black,
    marginBottom: '10@vs',
  },
  accountText: {
    color: colors.black,
    fontSize: '14@ms',
    marginBottom: '5@vs',
  },
  email: {
    fontSize: '10@ms',
    marginBottom: '10@vs',
    fontFamily: fonts.LatoRegular,
  },
  btnLogOut: {
    fontSize: '14@ms',
    color: colors.primary,
  },
  container: {
    width: '100%',
    backgroundColor: !IsTablet ? colors.textWhite : colors.white,
    paddingVertical: '10@vs',
    borderBottomRightRadius: !IsTablet ? '14@s' : '5@ms',
    borderBottomLeftRadius: !IsTablet ? '14@s' : '5@ms',
    flexDirection: 'row',
    padding: '10@ms',
    alignItems: 'center',
    marginBottom: '20@vs',
    borderTopWidth: !IsTablet ? '0.1@s' : 0,
    borderTopColor: !IsTablet ? colors.borderColorSecondary : null,
  },
  imgContainer2: {
    width: '30@vs',
    height: '30@vs',
    borderRadius: '100@ms',
    backgroundColor: colors.black,
    marginRight: '10@vs',
  },
  accountText2: {
    color: colors.black,
    fontSize: '12@ms',
    marginBottom: '2@vs',
  },
  email2: {
    fontSize: '10@ms',
    color: colors.sidebar,
  },
  innertitleAccount: {
    fontSize: '12@vs',
    fontFamily: fonts.LatoBold,
    color: colors.black,
  },
  innertitleAccountdetail: {
    fontSize: '12@vs',
    fontFamily: fonts.LatoBold,
    color: colors.black,
  },
  checkContainer: {
    backgroundColor: colors.primary,
    borderRadius: '25@s',
    padding: '1@s',
    width: '10%',
  },
});
