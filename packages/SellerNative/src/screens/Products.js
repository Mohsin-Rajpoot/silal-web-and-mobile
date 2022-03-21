import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  CustomButton,
  LockOnLandscape,
} from '@SilalApp/common/components/native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Products = ({navigation}) => {
  const data = [
    {
      id: '1',
      Identity: '#022DsA',
      order1: 'French Fries',
      order2: 'Cheasecake with sour cream and citrus honey',
      Code: '14.11.2021 13:38',
    },

    {
      id: '2',
      Identity: '#032DfA',
      order1: 'French Fries',
      order2: 'Cheasecake with sour cream and citrus honey',
      Code: '14.11.2021 13:38',
    },
    {
      id: '3',
      Identity: '#042WEA',
      order1: 'French Fries',
      order2: 'Cheasecake with sour cream and citrus honey',
      Code: '14.11.2021 13:38',
    },
  ];
  return (
    <SafeAreaView
      style={{
        width: '94%',
        alignSelf: 'center',
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginVertical: 15,
          alignItems: 'center',
        }}>
        <Text>Products</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <EvilIcons name="search" style={styles.SearchIcon} />
          <TextInput
            placeholder="Search by orders #, phone or name..."
            placeholderTextColor="#B3BEC2"
            paddingHorizontal={32}
            style={styles.Input}
          />
        </View>
        <CustomButton text="Add new item" />
      </View>

      <FlatList
        data={data}
        numColumns={3}
        style={{marginBottom: 90}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              backgroundColor: 'red',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{height: 150, width: 150, backgroundColor: 'yellow'}}>
              <Text>hhh</Text>
            </TouchableOpacity>
            <View>
              <Text>hhh</Text>
            </View>
            <View>
              <Text>hhh</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  Input: {
    height: 46,
    alignSelf: 'center',
    elevation: 0.5,
    width: 442,
    borderRadius: 5,
  },
  SearchIcon: {
    fontSize: 20,
    marginRight: -24,
    color: '#B3BEC2',
  },
});
