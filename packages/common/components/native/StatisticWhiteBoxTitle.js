import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatisticWhiteBoxTitle = ({navigation,Title}) => {
  return (
    <View>
      <Text style={styles.titleInWhiteDiv}>{Title}</Text>
    </View>
  )
}

export default StatisticWhiteBoxTitle

const styles = StyleSheet.create({
    titleInWhiteDiv: {
        fontFamily: 'Poppins-Medium',
        color: '#4C6870',
        paddingHorizontal: 10,
        paddingTop: 10
      },
})