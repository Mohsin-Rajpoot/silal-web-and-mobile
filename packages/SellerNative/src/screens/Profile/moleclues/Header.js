import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '@SilalApp/common/components/CustomText';
import {ScaledSheet} from 'react-native-size-matters';
import fonts from 'fonts';
const Header = ({label, onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <MaterialCommunityIcons
          name="reorder-horizontal"
          size={28}
          color="#000000"
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
  },
  profileText: {
    fontSize: '19@ms',
    marginLeft: '10@s',
  },
});
