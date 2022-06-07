import { View } from 'react-native'
import React from 'react'
import CustomText from '@SilalApp/common/components/CustomText'
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';


const TotalDetails = ({marginVertical,firstText,secondText}) => {
  
  return (
    <View style={[styles.mainContainer,{marginVertical:marginVertical||0}]}>
      <CustomText label={firstText} textStyle={styles.text} />
      <CustomText label={secondText} textStyle={[styles.text,{marginRight:0}]} />
    </View>
  )
}

export default TotalDetails

const styles = ScaledSheet.create({
    mainContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    text:{
        fontSize:'13@vs',
        width:'140@s',
        marginRight:'10@s',
        color:colors.textWhite
    }
})