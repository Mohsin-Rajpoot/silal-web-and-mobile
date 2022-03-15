import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const OPTIONS = ['Oldest first', 'Newest first', 'Most revenue', 'Less revenue', 'Recurring first', 'Top buyers first']
const ModalView = (props) => {
  const onPressItems = (option) => {
    props.changeModalVisibilty(false);
    props.setData(option);
  }
  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => onPressItems(item)} >
        <Text style={styles.TextItems}>{item}</Text>
      </TouchableOpacity>
    )
  })


  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibilty(false)}>
      <View style={styles.OptionsText}>
        <ScrollView>
          {option}
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
}

export { ModalView }

const styles = StyleSheet.create({
  option: {
    alignItems: 'flex-start',
  },
  TextItems: {
    fontSize: 15,
    padding: 14,
    fontFamily: 'Lato-Regular',
    // backgroundColor:'red'
    color:'#002733',
    fontFamily:'Lato-Regular'
  },
  OptionsText: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 140,
    height: 230,
    position: 'absolute',
    right: 29,
    marginVertical: 115,
    elevation: 2
  }
})