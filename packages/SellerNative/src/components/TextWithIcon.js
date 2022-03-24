import {Image, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '@SilalApp/common/components/CustomText';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import images from '../Assets';

const TextWithIcon = ({label, iconDelete, textStyle, onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {iconDelete && <Image style={styles.icon} source={images.deleteIcon} />}
        <CustomText textStyle={[styles.text, textStyle]} label={label} />
      </View>
      <TouchableOpacity onPress={onPress}>
        <Entypo style={styles.rightIcon} name="chevron-right" />
      </TouchableOpacity>
    </View>
  );
};

export default TextWithIcon;

const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20@vs',
    backgroundColor: colors.textWhite,
    padding: '10@ms',
    borderRadius: '5@ms',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: '20@ms',
    height: '20@ms',
    resizeMode: 'contain',
    borderRadius: '100@ms',
  },
  text: {
    fontSize: '15@ms',
    fontWeight: '400',
    color: colors.black,
    paddingLeft: '5@s',
    fontFamily: fonts.LatoRegular,
  },
  rightIcon: {
    fontSize: '18@ms',
    color: colors.black,
  },
});
