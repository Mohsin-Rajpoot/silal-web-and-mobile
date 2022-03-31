import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {scale, ScaledSheet} from 'react-native-size-matters'
import CustomText from '@SilalApp/common/components/CustomText'
import fonts from 'fonts'
import { CustomButton } from '@SilalApp/common/components/native'
import colors from '@SilalApp/common/assets/colors'
const TimingBox = () => {
  return (
    <View style={styles.container}>
        <CustomText fontFamily={fonts.PoppinsSemiBold} label="Opening hours" fontSize={17} />
        <CustomText marginTop={6} fontFamily={fonts.LatoRegular} label="Mon - Fri 10:00 - 22:00, Sat, Sun - Closed" fontSize={13} />
        <CustomText marginTop={10} fontFamily={fonts.PoppinsSemiBold} label="Tags" fontSize={17} />
       <View style={{flexDirection:'row',marginTop:6,}}>
        <CustomButton textStyle={styles.tagButtonText} containerStyle={styles.tagButtonContainer} text="Sushi"  />
        <CustomButton textStyle={styles.tagButtonText} containerStyle={[styles.tagButtonContainer,{marginHorizontal:scale(6)}]}   text="Burgers"  />
        <CustomButton textStyle={styles.tagButtonText} containerStyle={styles.tagButtonContainer} text="Pan-asian"  />
        </View>
    </View>
  )
}

export default TimingBox

const styles = ScaledSheet.create({
    container:{
        backgroundColor:'#fff',
        width: '100%',
        height: '150@vs',
        padding: '15@ms',
        marginTop:'10@s'
    },
    tagButtonContainer:{
        backgroundColor:colors.light_blue,
    },
    tagButtonText:{
        color:colors.dark_blue,
        fontFamily:fonts.LatoRegular,
        paddingHorizontal:"9@s",
        paddingVertical:"4@vs",
    }
})