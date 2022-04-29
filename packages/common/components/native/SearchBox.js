import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
const SearchBox = ({ navigation, placeholder, }) => {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                <View style={styles.SearchIcon}>
                    <Fontisto name="search" style={{ fontSize: 19, color: '#B3BEC2', paddingHorizontal: 5 }} />
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
        position: 'absolute',
        zIndex: 1,
    },
    Input: {
        height: 46,
        alignSelf: 'center',
        elevation: 0.5,
        width: 442,
        borderRadius: 5,
        backgroundColor: '#fff',
        zIndex: 0

    },

})