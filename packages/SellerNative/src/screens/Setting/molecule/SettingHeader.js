import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import {Icon} from 'react-native-elements';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';

const SettingHeader = ({title, backPress}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={backPress}>
        <Icon
          type="entypo"
          name="chevron-left"
          size={verticalScale(20)}
          color={colors.black}
        />
      </TouchableOpacity>
      <CustomText fontFamily={fonts.LatoBold} fontSize={17} label={title} />
      <View />
    </View>
  );
};

export default SettingHeader;

const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
