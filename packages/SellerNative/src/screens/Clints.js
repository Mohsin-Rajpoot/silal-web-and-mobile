import { SafeAreaView, StyleSheet, Text, View, Dimensions, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const { width, height } = Dimensions.get("window");
const Clints = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const data = [
    {
      id: '1',

      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },

    {
      id: '2',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '3',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '4',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '5',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '6',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '7',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },

    {
      id: '8',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '9',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '10',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '11',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '12',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
  ];





  return (
    <SafeAreaView style={{ marginHorizontal: 25 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
        <Text>Clients database</Text>
        {/* <TextInput 
        placeholder='Search by orders #, phone or name...' placeholderTextColor="#B3BEC2" style={styles.Input} 
        
        /> */}
        {/* <View style={{ flexDirection: 'row', }}>
          <Text>gggg</Text>
          <TextInput
            placeholder='Search by orders #, phone or name...' placeholderTextColor="#B3BEC2" paddingHorizontal={112} style={styles.Input}

          />
        </View> */}
        <View style={{ flexDirection:'row' , alignItems:'center'}}>
        <EvilIcons
   
   name='search'
  />
        <TextInput
            placeholder='Search by orders #, phone or name...' placeholderTextColor="#B3BEC2" paddingHorizontal={12} style={styles.Input}  inlineImageLeft='search_icon'

          />

</View>

        <View style={{
          height: 50,
          width: 230,
          alignSelf: 'center',
          elevation: 3,
          backgroundColor: 'white',
          borderRadius: 5,
        }}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
      </View>




      <View style={{ marginTop: 5, marginBottom: 20 }}>
        <FlatList
          data={data}
          numColumns={3}
          style={{ marginBottom: 110, height: 600 }}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <View
              style={styles.FlatListMainView}>

              <View style={styles.GreenBkgFlat}>
                <Text style={styles.TitleMainTextFlat}>
                  {item.Title}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.ButtonFlatList}>
                    Reccuring client
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.OrderFlat}>
                <View style={styles.ClintDataBaseDate}>
                  <Text style={styles.FlatIdDynamic}>Client ID :</Text>
                  <Text style={styles.OrderFlat}>{item.ID}</Text>
                </View>
                <View style={styles.ClintDataBaseDate}>
                  <Text style={styles.FlatIdDynamic}>Total orders:</Text>
                  <Text style={styles.OrderFlat}>{item.TotalOrders}</Text>
                </View>
                <View style={[styles.ClintDataBaseDate, { borderBottomLeftRadius: 5, borderBottomRightRadius: 5, elevation: 0.4 }]}>
                  <Text style={styles.FlatIdDynamic}>Sum of orders:</Text>
                  <Text style={styles.OrderFlat}> {item.Sum_of_orders}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>




    </SafeAreaView>
  )
}

export default Clints

const styles = StyleSheet.create({
  Input: {
    height: 46,
    alignSelf: 'center',
    elevation: 0.5,
    width: 442,
    borderRadius: 5,

  },
  FlatListMainView: {
    width: width / 100 * 29,
    backgroundColor: '#F4F7F8',
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  ClintDataBaseDate: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  OrderFlat: {
    color: '#002733',
    fontSize: 13,
    fontFamily: 'Lato-Bold'
  },
  FlatIdDynamic: {
    width: 100,
    color: "#CCD4D6",
    fontFamily: 'Lato-Regular',
    fontSize: 13
  },
  TitleMainTextFlat: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    paddingTop: 4
  },
  GreenBkgFlat: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#5AB3A8',
    width: '100%',
    paddingHorizontal: 15,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    elevation: 1
  },
  ButtonFlatList: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontSize: 11,
    backgroundColor: '#88cbc5',
    padding: 5,
    borderRadius: 3
  }
})