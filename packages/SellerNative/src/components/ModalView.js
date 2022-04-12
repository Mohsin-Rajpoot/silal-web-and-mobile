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

      <ScrollView style={styles.OptionsText}>
        {option}
      </ScrollView>

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
    color: '#002733',
    fontFamily: 'Lato-Regular',

  },
  OptionsText: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 160,
    position: 'absolute',
    right: 40,
    elevation: 2,
    top: -270,


  }
})