import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { CustomButton, LockOnLandscape, Camera } from '@SilalApp/common/components/native';
import AddItem from './AddItem';



const ItemCreaterFirstStep = ({ navigation }) => {

  const [order_state, set_order_state] = useState('All');


  return (
    <SafeAreaView style={{ width: '95%', alignSelf: 'center' }}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{ width: '100%', alignSelf: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name='keyboard-backspace' style={{ fontSize: 40, color: '#002733', fontFamily: 'Poppins-Bold' }} />
              <Text style={{ fontSize: 25, color: '#002733', fontFamily: 'Poppins-Bold' }} >Create new item</Text>
            </TouchableOpacity>
            <View style={{ right: 10, flexDirection: 'row', }}>
              <View>
                <CustomButton
                  text="Preview"
                  type='TERTIARY'
                />
              </View>
              <View style={{ marginHorizontal: 5, marginVertical: 4 }}>
                <TouchableOpacity style={[styles.HeaderButton, { backgroundColor: '#A7D5D0', }]}>
                  <Text style={styles.HeaderButtonText}>Save as draft</Text>
                </TouchableOpacity>


              </View>
              <View style={{ marginHorizontal: 5, marginVertical: 4 }}>
                <TouchableOpacity style={[styles.HeaderButton, { backgroundColor: '#5AB3A8', }]}>
                  <Text style={styles.HeaderButtonText}>Publish</Text>
                </TouchableOpacity>


              </View>
            </View>
          </View>



          <View style={{ flexDirection: 'row', marginBottom: 15, marginHorizontal: 17 }}>
            <TouchableOpacity onPress={() => set_order_state('All')} >
              <Text style={{ color: order_state == 'All' ? '#002733' : '#4C6870', fontFamily: 'Poppins-SemiBold', paddingHorizontal: 20 }}>Add item</Text>
              <View style={[styles.archive_orders_tab, { borderColor: order_state == 'All' ? '#5AB3A8' : '#e8edee', }]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => set_order_state('completed')} >
              <Text style={{ color: order_state == 'completed' ? '#002733' : '#4C6870', fontFamily: 'Poppins-SemiBold', paddingHorizontal: 20 }}>Customisations Templates</Text>
              <View style={[styles.archive_orders_tab, { borderColor: order_state == 'completed' ? '#5AB3A8' : '#e8edee', }]} />
            </TouchableOpacity>

          </View>


          {/* State End */}
          {order_state == 'All' ?
            <AddItem />
            : null}
          {order_state == 'completed' ?
            <View>
              <Text>dfdf</Text>
            </View>



            : null
          }
          {/* /////////////// */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ItemCreaterFirstStep

const styles = StyleSheet.create({
  archive_orders_tab: {
    borderWidth: 5,
    height: 5,
    paddingHorizontal: 30,
    justifyContent: 'center',
    borderRadius: 5
  },

  HeaderButton: {
    height: 40, width: 140, alignItems: 'center', justifyContent: 'center', borderRadius: 5
  },
  HeaderButtonText: {
    color: '#fff', textAlign: 'center', fontFamily: 'Poppins-SemiBold'
  },
})