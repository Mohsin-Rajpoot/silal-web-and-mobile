import { View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { ScaledSheet, verticalScale } from 'react-native-size-matters'
import CustomText from '@SilalApp/common/components/CustomText'
import colors from '@SilalApp/common/assets/colors'
import {Icon} from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import images from '../../../../assets/images'
import fonts from '@SilalApp/common/assets/fonts'


const SellerTools = ({onPress}) => {
    const {t} = useTranslation();
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.mainContainer}>
     <View style={{flexDirection:'row',alignItems:'center'}}>
         <Image source={images.toolIcon} style={styles.icon} />
    
     <View style={{width:'86%'}}>
         <CustomText label={t("seller_tool")} fontSize={verticalScale(13) } fontFamily={fonts.LatoBold} marginBottom={verticalScale(4)} />
         <CustomText label={t("sellerToolText")} fontSize={verticalScale(10)} color={colors.textColor} />
     </View>
     </View>
    <View>
    <Icon type='entypo' name='chevron-right' color={colors.textColor} />
    </View>
    </TouchableOpacity>
  )
}

export default SellerTools

const styles = ScaledSheet.create({
    mainContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:"10@vs",
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:colors.borderColor,
        marginBottom:'10@vs'
        
    },
    icon:{
        width: '16@vs',
        height:'16@vs',
        resizeMode:'contain',
        marginRight:'10@s'
    }
})