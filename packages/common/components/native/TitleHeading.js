import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Calender} from '@SilalApp/common/components/native'
const TitleHeading = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.mainViewHeading}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={styles.Title}>Restaurant’s name</Text>
                        <Text style={styles.subTitle}>8502 Preston Rd. Inglewood</Text>
                    </View>
                    <View style={styles.PeackTimeBackground}>
                        <Text style={styles.TextPeackTime}>Peak Hours 12 AM - 14 PM</Text>
                    </View>

                </View>
                <View>
                    <Calender />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TitleHeading

const styles = StyleSheet.create({
    mainViewHeading: {
        flexDirection: 'row',
        marginHorizontal: 35,
        marginVertical: 10,
        // backgroundColor: 'red',
        justifyContent:'space-between',
    },
    Title: {
        color: '#002733',
        fontFamily: 'Poppins-Bold',
        fontSize: 25,
        lineHeight: 35
    },
    subTitle: {
        fontFamily: 'Lato-Light',
        fontSize: 25,
        color: '#809399',
        fontSize: 13
    },
    PeackTimeBackground: {
        backgroundColor: '#8777D9',
        width: 171,
        height: 34,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 2,
        justifyContent: 'center',
        alignItems: 'center'

    },
    TextPeackTime: {
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        color: '#fff'

    }
})