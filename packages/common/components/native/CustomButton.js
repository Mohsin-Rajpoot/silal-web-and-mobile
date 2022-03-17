import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CustomButton({
  text,
  onPress,
  type = 'PRIMARY',
  navigation,
  containerStyle

}) {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.mainbutton,
          styles[`mainbutton_${type}`],
          containerStyle
        ]}>
        <Text
          style={[
            styles.buttonText,
            styles[`buttonText_${type}`],

          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical:6,
    marginVertical: 5,
    alignSelf: 'center',
    borderRadius: 5
  },
  mainbutton_PRIMARY: {
    backgroundColor: '#5AB3A8',
    fontFamily: 'Poppins-SemiBold'
  },
  mainbutton_TERTIARY: {},
  buttonText: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 1,
    fontFamily:'Poppins-SemiBold'

  },
  buttonText_TERTIARY: {
    color: '#4C6870',
    fontFamily: 'Poppins-SemiBold'
  },

});
