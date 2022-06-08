import {Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import {Icon} from 'react-native-elements';
import CustomText from '@SilalApp/common/components/CustomText';
import images from '../../../../assets/images';
import ToggleSwitch from 'toggle-switch-react-native';
import fonts from '@SilalApp/common/assets/fonts';
const TextWithIconCompo = ({toggle,time,text,iconPath}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={iconPath} style={styles.leftIcon} />
        <CustomText
          label={text}
          color={colors.black}
          fontSize={verticalScale(13)}
          fontFamily={fonts.LatoMedium}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {time && <CustomText
          label={time}
          fontFamily={fonts.LatoMedium}
          fontSize={verticalScale(12)}
          color={colors.gray50}
          marginRight={scale(3)}
        />}
        {toggle ? (
          <ToggleSwitch
            isOn={checked}
            onColor={colors.light_green}
            offColor={colors.light_grey}
            labelStyle={{color: 'black', fontWeight: '900'}}
            size={'medium'}
            onToggle={() => {
              setChecked(!checked);
              // setState(true);
            }}
          />
        ) : (
          <Icon type="entypo" name="chevron-right" color={colors.gray50} />
        )}
      </View>
    </View>
  );
};

export default TextWithIconCompo;

const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '15@msr',
    backgroundColor: colors.textWhite,
    borderRadius: '8@vs',
    height: '45@vs',
    marginBottom:'10@vs',
    elevation:0.5
    
  },
  leftIcon: {
    width: '20@vs',
    height: '20@vs',
    resizeMode: 'contain',
    marginRight: '10@s',
  },
});
