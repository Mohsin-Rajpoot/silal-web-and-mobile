import {View, TouchableOpacity, useWindowDimensions, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useDrawerStatus,
} from '@react-navigation/drawer';
import {Icon, ListItem} from 'react-native-elements';
import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import colors from 'common_colors';
import CustomText from '@SilalApp/common/components/CustomText';
import fonts from '@SilalApp/common/assets/fonts';
import ProfileBox from './Molecules/ProfileBox';
import Offers from '../../screens/offers/Offers';
import {useTranslation} from 'react-i18next';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
const Drawer = props => {
  const {t} = useTranslation();

  const [expanded, setExpanded] = useState(false);
  const isDrawer = useDrawerStatus() === 'open';
  useEffect(() => {
    if (isDrawer && !IsTablet) {
      props.setData({
        inputRange: [0, 1],
        outputRange: [0.8, 1],
      });
    } else {
      props.setData({
        inputRange: [0, 1],
        outputRange: [1, 1],
      });
    }
  }, [isDrawer]);

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}
      {...props}>
      {!IsTablet ? (
        <View />
      ) : (
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Icon
            name="cross"
            type="entypo"
            color={'#fff'}
            size={moderateScale(16)}
            style={styles.cross}
          />
        </TouchableOpacity>
      )}
      {!IsTablet && <View style={styles.ImageMobile} />}

      <View style={styles.accordianContainer}>
        <View>
          <CustomText
            textStyle={
              !IsTablet ? styles.profileTextMobile : styles.profileText
            }
            label={!IsTablet ? 'Account’s name' : t('Profile')}
          />
          {!IsTablet && (
            <CustomText
              label="debra.holt@example.com"
              textStyle={styles.secondaryMail}
            />
          )}
        </View>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Icon
            name={expanded ? 'chevron-small-down' : 'chevron-small-up'}
            type="entypo"
            color={'#fff'}
            size={moderateScale(22)}
          />
        </TouchableOpacity>
      </View>

      {!expanded && <ProfileBox navigation={props.navigation} />}
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.navigate('TabStack')}>
        <CustomText
          textStyle={styles.drawerText}
          fontFamily={fonts.PoppinsMedium}
          label={'Home'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.navigate('Offers')}>
        <View style={styles.textwithIcon}>
          <Image
            source={require('../../Assets/recipt.png')}
            style={styles.imageIcon}
          />

          <CustomText
            textStyle={styles.drawerText}
            fontFamily={fonts.PoppinsMedium}
            label={t('offers')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.navigate('Documents')}>
        <View style={styles.textwithIcon}>
          <Icon
            name="folder"
            type="materialIcons"
            color={colors.white}
            size={!IsTablet ? 22 : 35}
            style={{opacity: 0.6, marginRight: scale(10)}}
          />
          <CustomText
            textStyle={styles.drawerText}
            fontFamily={fonts.PoppinsMedium}
            label={t('Document')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.navigate('Setting')}>
        <View style={styles.textwithIcon}>
          <Icon
            name="ios-settings"
            type="ionicon"
            color={colors.white}
            size={!IsTablet ? 22 : 35}
            style={{opacity: 0.6, marginRight: scale(10)}}
          />
          <CustomText
            textStyle={styles.drawerText}
            fontFamily={fonts.PoppinsMedium}
            label={t('Setting')}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.navigate('longerOrder')}>
        <View style={styles.textwithIcon}>
          <Image
            source={require('../../Assets/recipt.png')}
            style={styles.imageIcon}
          />
          <CustomText
            textStyle={styles.drawerText}
            fontFamily={fonts.PoppinsMedium}
            label={'longer orders'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.navigate('CreateItems')}>
        <View style={styles.textwithIcon}>
          <Image
            source={require('../../Assets/recipt.png')}
            style={styles.imageIcon}
          />
          <CustomText
            textStyle={styles.drawerText}
            fontFamily={fonts.PoppinsMedium}
            label={'Create item'}
          />
        </View>
      </TouchableOpacity>

      <View style={{height: verticalScale(!IsTablet ? 10 : 50)}} />
      {!IsTablet && <View style={styles.divider} />}
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.navigate('ContactUs')}>
        <CustomText
          textStyle={styles.drawerText2}
          fontFamily={fonts.PoppinsMedium}
          label={t('contactus')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.navigate('AboutApp')}>
        <CustomText
          textStyle={styles.drawerText}
          fontFamily={fonts.PoppinsMedium}
          label={t('AboutApp')}
        />
      </TouchableOpacity>
      <View style={{height: 50}} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name="copyright"
          type="antdesign"
          color={colors.textWhite}
          size={15}
        />
        <CustomText
          textStyle={styles.drawerText1}
          label={'2022 SILAL Limited.'}
        />
      </View>

      <View style={{height: verticalScale(40)}} />
    </DrawerContentScrollView>
  );
};

export default Drawer;

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.textPrimeColor,
    borderTopRightRadius: '15@vs',
    borderBottomRightRadius: '15@vs',
    paddingVertical: '23@vs',
    paddingLeft: '10@s',
    paddingRight: '13@s',
    opacity: 1,
    marginHorizontal: '5@s',
  },
  cross: {
    alignSelf: 'flex-end',
  },
  accordianContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '30@vs',
    marginBottom: '10@vs',
  },
  drawerText: {
    color: colors.textWhite,
    fontSize: '12@vs',
    fontFamily: fonts.LatoBold,
  },
  drawerText2: {
    color: colors.textWhite,
    fontSize: '12@vs',
    fontFamily: fonts.LatoBold,
    marginBottom: '10@vs',
  },
  drawerText1: {
    color: colors.textWhite,
    fontSize: '10@vs',
    marginLeft: '5@s',
  },
  ImageMobile: {
    backgroundColor: colors.black,
    width: '45@s',
    height: '45@s',
    borderRadius: '99@s',
    overflow: 'hidden',
    marginTop: '23%',
  },
  profileText: {
    fontSize: '12@vs',
    color: colors.textWhite,
    fontFamily: fonts.LatoBold,
  },
  profileTextMobile: {
    fontSize: '18@vs',
    color: colors.textWhite,
    fontFamily: fonts.LatoBold,
  },
  secondaryMail: {
    fontSize: '11@vs',
    fontFamily: fonts.LatoRegular,
    color: colors.textWhite,
    marginTop: '7@s',
  },
  textwithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '10@s',
  },
  imageIcon: {
    width: '18@vs',
    height: '22@s',
    marginRight: '10@s',
    resizeMode: 'center',
  },
  divider: {
    width: '100%',
    height: '0.5@s',
    backgroundColor: colors.textWhite,
    opacity: 0.5,
    marginBottom: '15@s',
  },
});
