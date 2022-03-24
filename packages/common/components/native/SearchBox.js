import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Svg, { Path } from "react-native-svg"
const SearchBox = ({ navigation, placeholder, }) => {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                <View style={styles.SearchIcon}>
                    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M7.33268 2.33268C4.57126 2.33268 2.33268 4.57126 2.33268 7.33268C2.33268 10.0941 4.57126 12.3327 7.33268 12.3327C10.0941 12.3327 12.3327 10.0941 12.3327 7.33268C12.3327 4.57126 10.0941 2.33268 7.33268 2.33268ZM0.666016 7.33268C0.666016 3.65078 3.65078 0.666016 7.33268 0.666016C11.0146 0.666016 13.9993 3.65078 13.9993 7.33268C13.9993 8.87328 13.4768 10.2918 12.5992 11.4207L17.0886 15.9101C17.414 16.2355 17.414 16.7632 17.0886 17.0886C16.7632 17.414 16.2355 17.414 15.9101 17.0886L11.4207 12.5992C10.2918 13.4768 8.87328 13.9993 7.33268 13.9993C3.65078 13.9993 0.666016 11.0146 0.666016 7.33268Z" fill="#B3BEC2" />
                    </Svg>
                </View>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#B3BEC2"
                    paddingHorizontal={32}
                    style={styles.Input}
                    
                />
            </View>
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({
    SearchIcon: {
        fontSize: 20,
        marginRight: -24,
        color: '#B3BEC2'
    },
    Input: {
        height: 46,
        alignSelf: 'center',
        elevation: 0.5,
        width: 442,
        borderRadius: 5,

    },

})