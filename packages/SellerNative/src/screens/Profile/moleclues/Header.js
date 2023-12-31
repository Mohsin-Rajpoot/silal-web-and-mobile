import { View, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import {ScaledSheet} from 'react-native-size-matters';
import fonts from 'fonts';
import {Icon} from 'react-native-elements';
import colors from '@SilalApp/common/assets/colors';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
const Header = ({label, onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        {/* <MaterialCommunityIcons
          name="reorder-horizontal"
          size={28}
          color="#000000"
        /> */}
        <Icon
          name="menu"
          type="entypo"
          size={!IsTablet ? 25 : 35}
          color={colors.black}
        />
      </TouchableOpacity>
      <CustomText
        fontFamily={fonts.bold}
        textStyle={styles.profileText}
        label={label}
      />
      {/* <CustomText
        fontFamily={fonts.bold}
        textStyle={styles.profileText}
        label={label}
      /> */}
    </View>
  );
};

export default Header;

const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '12@vs',
    marginHorizontal: '10@s',
  },
  profileText: {
    fontSize: '19@ms',
    marginLeft: '10@s',
  },
});
