import React, {useState, useRef, useEffect} from 'react';
import {Text, View, FlatList, Image, TouchableHighlight} from 'react-native';
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
import styles from './styles';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import CustomText from '@SilalApp/common/components/CustomText';
import {scale, verticalScale} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import ItemDetails from '../ItemDetails';
// import { useFocusEffect } from '@react-navigation/native';
export default function Archive_orders({title, navigation}) {
  const [checked, setchecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  const [selected_index, set_selected_index] = useState('');

  const setcheck = index => {
    console.log(index, 'Harris Saleem');
    const val = data[index];
    val.checked = !val.checked;
    data[index] = val;
    setTimeout(() => {
      setData(data);
      setTimeout(() => {
        setLoader(!loader);
      }, 100);
    }, 200);
  };

  //   useFocusEffect(
  //     React.useCallback(() => {
  //         selected_index== '';

  //     },[])
  //   );

  var [data, setData] = useState([
    {
      id: '1',
      Title: 'Embedded Software Engineer',
      SubTitle: 'Newyork',
      year: '22/03/2022',
      image: require('../../Assets/image8.png'),
      checked: false,
    },
    {
      id: '2',
      Title: 'Web Developer',
      SubTitle: 'Lahore',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '3',
      Title: 'Embedded Software Engineer',
      SubTitle: 'USA',
      year: '22/03 /2022',
      checked: false,
    },
    {
      id: '4',
      Title: 'Embedded Software Engineer',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '5',
      Title: 'Embedded Software last',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '6',
      Title: 'Embedded Software last',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '7',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '8',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '9',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '10',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
  ]);

  const render_all_oredrs = (item, index) => {
    return (
      <View>
        <View
          //    style={}
          style={[
            styles.render_all_orders,
            {backgroundColor: index == selected_index ? '#E6F4F2' : 'white'},
          ]}>
          <View>
            <CheckBox
              checked={
                item.checked == true || item.checked == 'true' ? true : false
              }
              onPress={() => setcheck(index)}
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
              source={require('../../Assets/Dress.png')}
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
          <View style={[{width: '14%'}]}>
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
              Low of stock
            </Text>
          </View>
          <View style={[styles.render_all_order_single, {width: '14%'}]}>
            <Text style={{fontFamily: 'Lato-Regular'}}>$ 120.00</Text>
          </View>
          <View style={[styles.render_all_order_single, {width: '8%'}]}>
            <Menu>
              <MenuTrigger
                onPress={() => {
                  set_selected_index(index);
                }}
                style={styles.trigger}>
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
          <Text style={styles.all_orders_heading_txt}>Status</Text>
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

  return !IsTablet ? (
    <View
      style={{
        paddingHorizontal: scale(15),
        paddingVertical: verticalScale(20),
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: verticalScale(10),
        }}>
        <CustomText label="15 items" textStyle={styles.itemText} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <CheckBox
            checked={checked == 'true' ? true : false}
            onPress={() => console.log("check box")}
            checkedColor="#5AB3A8"
            uncheckedColor="#CCD4D6"
          />
          <CustomText
            label="Select all"
            marginLeft={scale(-15)}
            color={colors.textPrimary}
          />
        </View>
      </View>
          <ItemDetails />

    </View>
  ) : (
    <View
      style={{
        height: 570,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        elevation: 1,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        width: '95%',
        padding: 20,
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      {header_alloredrs()}
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={({item, index}) => render_all_oredrs(item, index)}
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
    </View>
  );
}
