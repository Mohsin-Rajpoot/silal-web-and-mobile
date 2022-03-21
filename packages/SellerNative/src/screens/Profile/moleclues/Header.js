import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '@SilalApp/common/components/CustomText';
import {ScaledSheet} from 'react-native-size-matters';
import fonts from 'fonts';
const Header = ({label}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <MaterialCommunityIcons
          name="reorder-horizontal"
          size={25}
          color="#000000"
        />
      </TouchableOpacity>
      <CustomText
        fontFamily={fonts.bold}
        textStyle={styles.profileText}
        label={label}
      />
    </View>
  );
};

export default Header;

const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '42@vs',
  },
  profileText: {
    fontSize: '20@ms',
    marginLeft: '10@s',
  },
});
