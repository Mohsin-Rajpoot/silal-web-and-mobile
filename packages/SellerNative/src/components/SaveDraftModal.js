import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '@SilalApp/common/assets/colors'
import fonts from '@SilalApp/common/assets/fonts'
const OPTIONS = ['Oldest first', 'Newest first', 'Most revenue', 'Less revenue', 'Recurring first', 'Top buyers first']
const SaveDraftModal = (props) => {
    const changeModalVisibilty = bool => {
        setModalVisible(bool);
      };
      const setData = option => {
        setchoseData(option);
      };
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
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%',  }}>
            <View style={{ height: 150, width: 300, borderRadius: 5, elevation: 5, backgroundColor:colors.textWhite,justifyContent:'space-between',flexDirection:'row',paddingHorizontal:15,paddingVertical:5}} onPress={() => props.changeModalVisibilty(false)}>
               
                    <Text style={{ color: colors.textPrimeColor, fontSize: 17, fontFamily:fonts.PoppinsSemiBold }}>Save as drafts?</Text>
                    <TouchableOpacity 
                      nRequestClose={() => changeModalVisibilty(false)}
                    onPress={() => changeModalVisibilty(true)}

                    >
                    <Entypo name='cross' style={{ fontSize: 25, color: 'red' }} />
                    </TouchableOpacity>
              
            </View>
        </View>
    )
}

export { SaveDraftModal }

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

})