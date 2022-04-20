import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import colors from '@SilalApp/common/assets/colors'
const Media = () => {
  return (
    <View style={styles.mainContainer}>
     <View style={styles.mainContainerfirst}>
       <Text>1</Text>
     </View>
     <View style={styles.mainContainerSecond}>
     <Text>1</Text>
     </View>
    </View>
  )
}

export default Media

const styles = ScaledSheet.create({
  mainContainer:{
    width:"100%",
    flexDirection:"row",
    alignSelf:"center",
    justifyContent:"space-between"
  },
  mainContainerfirst:{
    width:"65%",
    backgroundColor:colors.textWhite,
    marginLeft:"5@s"
  },
  mainContainerSecond:{
    width:"31%",
    backgroundColor:colors.textWhite,
    marginRight:"5@s"
  }
})