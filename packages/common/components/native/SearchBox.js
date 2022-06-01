import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import IsTablet from './IsTablet';
import { ScaledSheet } from 'react-native-size-matters';
const SearchBox = (props ) => {
    React.useEffect(() => {
        console.log('////////////////',props);
      }, []);
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <View style={[styles.container, ]}>

                <View style={[IsTablet ? styles.SearchIcon : styles.SearchIconMobile, props.customStyle]}>
                    <Fontisto name="search" style={{ fontSize: 19, color: '#B3BEC2', paddingHorizontal: 5 }} />
                </View>
                <TextInput
                    placeholder={props.placeholder}
                    placeholderTextColor="#B3BEC2"
                    paddingHorizontal={32}
                    style={IsTablet ? styles.Input : styles.InputMobile}

                />
            </View>
        </View>
    )
}

export default SearchBox

const styles = ScaledSheet.create({
    SearchIcon: {
        position: 'absolute',
        zIndex: 1,
        marginTop:10
    },
    SearchIconMobile:{
        position: 'absolute',
        zIndex: 1, 
        marginVertical:'15@vs'  
    },
    Input: {
        height: 46,
        alignSelf: 'center',
        elevation: 0.5,
        width: '220@s',
        borderRadius: 5,
        backgroundColor: '#fff',
        zIndex: 0

    },
    InputMobile:{
        height: '35@s',
        alignSelf: 'center',
        elevation: 0.5,
        width: '330@s',
        borderRadius: 5,
        backgroundColor: '#fff',
        zIndex: 0 , 
        marginTop:10
    }

})