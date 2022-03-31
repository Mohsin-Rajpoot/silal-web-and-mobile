import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { CustomButton, LockOnLandscape, SearchBox } from '@SilalApp/common/components/native';
import Svg, { Path } from "react-native-svg";

const Products = ({ navigation }) => {
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
    {
      id: '4',
      Identity: '#032DfA',
      order1: 'French Fries',
      order2: 'Cheasecake with sour cream and citrus honey',
      Code: '14.11.2021 13:38',

    },
    {
      id: '5',
      Identity: '#042WEA',
      order1: 'French Fries',
      order2: 'Cheasecake with sour cream and citrus honey',
      Code: '14.11.2021 13:38',
    },
    {
      id: '6',
      Identity: '#042WEA',
      order1: 'French Fries',
      order2: 'Cheasecake with sour cream and citrus honey',
      Code: '14.11.2021 13:38',
    },
    {
      id: '7',
      Identity: '#032DfA',
      order1: 'French Fries',
      order2: 'Cheasecake with sour cream and citrus honey',
      Code: '14.11.2021 13:38',

    },
    {
      id: '8',
      Identity: '#042WEA',
      order1: 'French Fries',
      order2: 'Cheasecake with sour cream and citrus honey',
      Code: '14.11.2021 13:38',
    },

  ];


  const data1 = [
    {
      id: '1',
      Quantity: '5 items',
      Title: 'Drafts',
    },

    {
      id: '2',
      Quantity: '5 items',
      Title: 'Listing Template',
    },
    {
      id: '3',
      Quantity: '5 items',
      Title: 'Customisations Templates',
    },
  ];

  return (
    <SafeAreaView style={{backgroundColor: '#E5E5E5'}}>
      <View style={styles.container}>
      <View style={styles.Header_View}>
        <Text style={styles.Title_Header}>Products</Text>
        <SearchBox placeholder="Search" />
        <View style={{ right: 17 }}>
          <CustomButton
            text="Add new item"
          />
        </View>
      </View>
      <View>
        <FlatList
          data={data}
          numColumns={4}
          style={{ marginBottom: 20, height: 300 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Folder_Product')} style={styles.mainViewBoxStyle}>
              <View style={{ position: 'absolute', right: 7, top: 10 }}>
                <Svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M0.332682 7.00065C0.332682 7.92113 1.07887 8.66732 1.99935 8.66732C2.91982 8.66732 3.66602 7.92113 3.66602 7.00065C3.66602 6.08018 2.91982 5.33398 1.99935 5.33398C1.07887 5.33398 0.332682 6.08018 0.332682 7.00065Z" fill="#CCD4D6" />
                  <Path d="M0.332682 2.00065C0.332682 2.92113 1.07887 3.66732 1.99935 3.66732C2.91982 3.66732 3.66602 2.92113 3.66602 2.00065C3.66602 1.08018 2.91982 0.333984 1.99935 0.333984C1.07887 0.333984 0.332682 1.08018 0.332682 2.00065Z" fill="#CCD4D6" />
                  <Path d="M0.332682 12.0007C0.332682 12.9211 1.07887 13.6673 1.99935 13.6673C2.91982 13.6673 3.66602 12.9211 3.66602 12.0007C3.66602 11.0802 2.91982 10.334 1.99935 10.334C1.07887 10.334 0.332682 11.0802 0.332682 12.0007Z" fill="#CCD4D6" />
                </Svg>
              </View>
              <View style={styles.containerText}>
                <Text style={styles.BoxTitleText}>Burgers</Text>
                <Text style={styles.TotleItem}>8 items</Text>
              </View>

            </TouchableOpacity>

          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View>
        <TouchableOpacity style={{
          width: '23%', backgroundColor: '#FFFFFF', marginHorizontal: 10,
          left: -10, elevation: 1, borderRadius: 5, height: 130
        }}>

          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
            <Svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M20.28 12.2H12.34V20.58H8.84V12.2H0.94V8.96H8.84V0.599998H12.34V8.96H20.28V12.2Z" fill="#CCD4D6" />
            </Svg>
            <Text style={{ color: '#CCD4D6', fontSize: 20, paddingVertical: 10 }}>Add category</Text>
          </View>
        </TouchableOpacity>

      </View>

      {/*  */}
      <View>
        <FlatList
          data={data1}
          numColumns={4}
          style={{ marginBottom: 20, height: 300 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.mainViewBoxStyle, { backgroundColor: '#F2F4F5' }]}>
              <View style={{ position: 'absolute', right: 7, top: 10 }}>
                <Svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M0.332682 7.00065C0.332682 7.92113 1.07887 8.66732 1.99935 8.66732C2.91982 8.66732 3.66602 7.92113 3.66602 7.00065C3.66602 6.08018 2.91982 5.33398 1.99935 5.33398C1.07887 5.33398 0.332682 6.08018 0.332682 7.00065Z" fill="#CCD4D6" />
                  <Path d="M0.332682 2.00065C0.332682 2.92113 1.07887 3.66732 1.99935 3.66732C2.91982 3.66732 3.66602 2.92113 3.66602 2.00065C3.66602 1.08018 2.91982 0.333984 1.99935 0.333984C1.07887 0.333984 0.332682 1.08018 0.332682 2.00065Z" fill="#CCD4D6" />
                  <Path d="M0.332682 12.0007C0.332682 12.9211 1.07887 13.6673 1.99935 13.6673C2.91982 13.6673 3.66602 12.9211 3.66602 12.0007C3.66602 11.0802 2.91982 10.334 1.99935 10.334C1.07887 10.334 0.332682 11.0802 0.332682 12.0007Z" fill="#CCD4D6" />
                </Svg>
              </View>
              <View style={styles.containerText}>
                <Text style={styles.BoxTitleText}>{item.Title}</Text>
                <Text style={styles.TotleItem}>{item.Quantity}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    width: '94%', alignSelf: 'center', backgroundColor: '#E5E5E5'
  },
  Header_View: {
    justifyContent: 'space-between', flexDirection: 'row', marginVertical: 15, alignItems: 'center'
  },
  Title_Header: {
    fontFamily: 'Poppins-Bold', color: '#002733', fontSize: 25
  },
  mainViewBoxStyle: {
    width: '23%', backgroundColor: '#FFFFFF', marginHorizontal: 10, left: -10, marginVertical: 10, elevation: 1, borderRadius: 5, height: 130
  },
  containerText: {
    position: 'relative', height: '100%', justifyContent: 'flex-end', bottom: 10, left: 10
  },
  BoxTitleText: {
    fontFamily: 'Poppins-SemiBold', fontSize: 17, color: '#002733'
  },
  TotleItem: {
    color: '#CCD4D6', fontSize: 13, fontFamily: 'Lato-Regular'
  }
})

