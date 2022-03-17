import {Image, Pressable, Text, View} from 'react-native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
import CustomText from '@SilalApp/common/components/CustomText';
import colors from 'common_colors';
import React from 'react';

const ProfileBox = ({navigation}) => {
  return (
    <View>
      <View style={styles.mainContainer}>
        <Pressable
          onPress={() => navigation.navigate('Profile')}
          style={styles.imgContainer}></Pressable>
        <CustomText
          fontFamily={fonts.PoppinsSemiBold}
          textStyle={styles.accountText}
          label="Account’s name"
        />
        <CustomText
          fontFamily={fonts.PoppinsMedium}
          color={colors.sidebar}
          textStyle={styles.email}
          label="debra.holt@example.com"
        />
        <Pressable>
          <CustomText
            fontFamily={fonts.PoppinsSemiBold}
            textStyle={styles.btnLogOut}
            label="Log out"
          />
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
    borderTopRightRadius: '5@ms',
    borderTopLeftRadius: '5@ms',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10@ms',
  },
  imgContainer: {
    width: '50@ms',
    height: '50@ms',
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
    fontSize: '12@ms',
    marginBottom: '10@vs',
  },
  btnLogOut: {
    fontSize: '14@ms',
    color: colors.primary,
  },
  container: {
    width: '100%',
    backgroundColor: colors.white,
    paddingVertical: '10@vs',
    borderBottomRightRadius: '5@ms',
    borderBottomLeftRadius: '5@ms',
    flexDirection: 'row',
    padding: '10@ms',
    alignItems: 'center',
    marginBottom: '20@vs',
  },
  imgContainer2: {
    width: '30@ms',
    height: '30@ms',
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
});
