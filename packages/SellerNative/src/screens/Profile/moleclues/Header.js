import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '@SilalApp/common/components/CustomText';
import {ScaledSheet} from 'react-native-size-matters';
import fonts from 'fonts';
const Header = () => {
  return (
    <View
        style={styles.mainContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="reorder-horizontal"
            size={28}
            color="#000000"
          />
        </TouchableOpacity>
        <CustomText
          fontFamily={fonts.bold}
          textStyle={styles.profileText}
          label="Profile"
        />
      </View>
  );
};

export default Header;

const styles = ScaledSheet.create({
    mainContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '42@vs',
      },
  profileText: {
    fontSize: '20@ms',
    marginLeft: '10@s',
  },
});
