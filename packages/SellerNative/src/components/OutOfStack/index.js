import React, {useState, useRef} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import {CheckBox} from 'react-native-elements';
import images from '../../Assets';
import styles from './styles';
export default function Archive_orders({title, navigation}) {
  const [checked, setchecked] = useState(false);

  const data = [
    {
      id: '1',
      Title: 'Embedded Software Engineer',
      SubTitle: 'Newyork',
      year: '22/03/2022',
      image: images.image12,
    },
    {
      id: '2',
      Title: 'Web Developer',
      SubTitle: 'Lahore',
      year: '22/03/2022',
    },
    {
      id: '3',
      Title: 'Embedded Software Engineer',
      SubTitle: 'USA',
      year: '22/03 /2022',
    },
    {
      id: '4',
      Title: 'Embedded Software Engineer',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '5',
      Title: 'Embedded Software last',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '6',
      Title: 'Embedded Software last',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '7',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '8',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
  ];

  const render_all_oredrs = () => {
    return (
      <View>
        <View style={[styles.render_all_orders, {paddingTop: 5}]}>
          <View>
            <CheckBox
              checked={checked}
              onPress={() => setchecked(!checked)}
              checkedColor="#5AB3A8"
              uncheckedColor="#CCD4D6"
            />
          </View>
          <View
            style={[
              styles.render_all_order_single,
              {width: '10%', marginTop: 5},
            ]}>
            <Image
              source={images.dress}
              style={{height: 40, width: 40, resizeMode: 'contain'}}
            />
          </View>
          <View style={[styles.render_all_order_single, {width: '10%'}]}>
            <Text style={{fontFamily: 'Lato-Regular'}}>Man's T-shirt</Text>
          </View>
          <View
            style={[
              styles.render_all_order_single,
              {
                width: '15%',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                left: 20,
              },
            ]}>
            <Text style={{fontFamily: 'Lato-Regular'}}>Clothing</Text>
          </View>
          <View
            style={[
              styles.render_all_order_single,
              {
                width: '10%',
                justifyContent: 'flex-start',
                flexDirection: 'row',
              },
            ]}>
            <Text style={{}}>0</Text>
          </View>
          <View style={[styles.render_all_order_singlee, {width: '14%'}]}>
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                textAlign: 'left',
                justifyContent: 'flex-start',
              }}>
              2
            </Text>
            <Text style={{fontFamily: 'Lato-Regular', fontSize: 10}}>
              Variants on: Size, Color
            </Text>
          </View>
          <View
            style={[
              styles.render_all_order_single,
              {
                width: '10%',
                backgroundColor: '#FFAB00',
                borderRadius: 5,
              },
            ]}>
            <Text style={{fontFamily: 'Lato-Regular', color: '#fff'}}>
              Out of stock
            </Text>
          </View>
          <View style={[styles.render_all_order_single, {width: '14%'}]}>
            <Text style={{fontFamily: 'Lato-Regular'}}>$ 120.00</Text>
          </View>
          <View style={[styles.render_all_order_single, {width: '8%'}]}>
            <Menu>
              <MenuTrigger style={styles.trigger}>
                <View
                  style={{
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Entypo
                    name="dots-three-vertical"
                    style={[
                      styles.cross_icon,
                      {color: '#4C6870', fontSize: 20},
                    ]}
                  />
                </View>
              </MenuTrigger>
              <MenuOptions customStyles={{optionText: {padding: 5}}}>
                <MenuOption value="Normal" text="Update current stack" />
                <MenuOption value="Normal" text="Delete" />
              </MenuOptions>
            </Menu>
          </View>
        </View>
        <View style={{borderBottomWidth: 0.9, borderColor: '#00273314'}} />
      </View>
    );
  };

  const header_alloredrs = () => {
    return (
      <View style={styles.all_orders_header}>
        <View style={[styles.all_orders, {width: '5%'}]}>
          <Text style={styles.all_orders_heading_txt}></Text>
        </View>
        <View style={[styles.all_orders, {width: '12%'}]}>
          <Text style={styles.all_orders_heading_txt}>Photo</Text>
        </View>
        <View style={[styles.all_orders, {width: '8%'}]}>
          <Text style={styles.all_orders_heading_txt}>Item name</Text>
        </View>
        <View style={[styles.all_orders, {width: '14%'}]}>
          <Text style={styles.all_orders_heading_txt}>Category</Text>
        </View>
        <View style={[styles.all_orders, {width: '12%'}]}>
          <Text style={styles.all_orders_heading_txt}>Remaining</Text>
        </View>
        <View style={[styles.all_orders, {width: '15%'}]}>
          <Text style={styles.all_orders_heading_txt}>Variant</Text>
        </View>
        <View style={[styles.all_orders, {width: '12%'}]}>
          <Text>Status</Text>
        </View>
        <View style={[styles.all_orders, {width: '14%'}]}>
          <Text style={styles.all_orders_heading_txt}>Price</Text>
        </View>
        <View style={[styles.all_orders, {width: '8%'}]}>
          <Text style={styles.all_orders_heading_txt}>Action</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{height: '90%', padding: 20}}>
      <MenuProvider>
        {header_alloredrs()}
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data}
          renderItem={({item}) => render_all_oredrs()}
        />

        <View style={styles.pagination_view}>
          <Text style={{fontFamily: 'Lato-Regular'}}>Showing 1-9 of 86</Text>
          <View style={styles.pagination_numbring}>
            <Ionicons
              name="chevron-back"
              style={{color: '#d1d8da', fontSize: 24}}
            />
            <Text style={{fontFamily: 'Lato-Regular', color: 'black'}}>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <MaterialCommunityIcons
              name="chevron-right-circle"
              style={{color: '#4c6870', fontSize: 24}}
            />
          </View>
        </View>
      </MenuProvider>
    </View>
  );
}
