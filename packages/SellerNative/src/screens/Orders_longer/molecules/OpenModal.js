import {TouchableOpacity} from 'react-native';
import React from 'react';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import fonts from '@SilalApp/common/assets/fonts';
import colors from '@SilalApp/common/assets/colors';
import { Icon } from 'react-native-elements';
const OpenModal = ({onPress,text,color}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.mainContainer}>
      <CustomText label={text} fontSize={15} color={color || colors.black50} fontFamily={fonts.latoBold} />
      <Icon type='antdesign' name='caretdown' color={colors.light_grey50} size={verticalScale(10)} />
    </TouchableOpacity>
  )
}

export default OpenModal

const styles = ScaledSheet.create({
    mainContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        borderWidth:1,
        borderColor:colors.light_grey50,
        padding:'12@vs',
        borderRadius:'10@vs',
        paddingRight:'20@s',
        marginBottom:'10@vs',
        backgroundColor:colors.textWhite

    }
})