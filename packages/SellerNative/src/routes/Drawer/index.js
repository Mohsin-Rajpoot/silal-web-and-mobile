import { View, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Icon, ListItem } from 'react-native-elements';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import colors from 'common_colors';
import CustomText from '@SilalApp/common/components/CustomText';
import fonts from 'fonts';
import ProfileBox from './Molecules/ProfileBox';
import Offers from '../../screens/offers/Offers';
import {useTranslation} from 'react-i18next';
const Drawer = props => {
  const {t} = useTranslation();
  const width = useWindowDimensions().width * 0.3;
  const [expanded, setExpanded] = useState(false);
  return (
    <DrawerContentScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}
      {...props}>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <Icon
          name="cross"
          type="entypo"
          color={'#fff'}
          size={moderateScale(16)}
          style={styles.cross}
        />
      </TouchableOpacity>
      <View style={styles.accordianContainer}>
        <CustomText
          fontFamily={fonts.PoppinsMedium}
          fontSize={13}
          color={'#fff'}
          label={t('Profile')}
        />
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
        onPress={() => props.navigation.navigate('Offers')}>
        <CustomText
          textStyle={styles.drawerText}
          fontFamily={fonts.PoppinsMedium}
          label={t('offers')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.navigate('Documents')}>
        <CustomText
          textStyle={styles.drawerText}
          fontFamily={fonts.PoppinsMedium}
          label={t('Document')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.navigate('ContactUs')}>
        <CustomText
          textStyle={styles.drawerText}
          fontFamily={fonts.PoppinsMedium}
          label={t('contactus')}
        />
      </TouchableOpacity>

      <CustomText
        textStyle={styles.drawerText}
        fontFamily={fonts.PoppinsMedium}
        label={t('AboutApp')}
      />
      <View style={{height: verticalScale(50)}} />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.navigate('Setting')}>
        <CustomText
          textStyle={styles.drawerText}
          fontFamily={fonts.PoppinsMedium}
          label={t('Setting')}
        />
      </TouchableOpacity>

      <View style={{height: verticalScale(40)}} />
    </DrawerContentScrollView>
  );
};

export default Drawer;

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.sidebar,
    borderTopRightRadius: '15@vs',
    borderBottomRightRadius: '15@vs',
    paddingVertical: '23@vs',
    paddingLeft: '10@s',
    paddingRight: '13@s',
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
    fontSize: '13@ms',
    marginBottom: '20@vs',
  },
});
