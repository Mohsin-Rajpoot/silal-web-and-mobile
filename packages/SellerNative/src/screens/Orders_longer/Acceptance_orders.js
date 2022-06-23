import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  BackHandler,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
  Modal,
  ScrollView,
  Button,
} from 'react-native';
import Acceptance_order_mobile from './Acceptance_order_mobile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Fontisto from 'react-native-vector-icons/Fontisto';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
// import { Image, SvgXml } from 'react-native-svg';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Rect,
  Circle,
  G,
} from 'react-native-svg';
import DatePicker from './../../components/DatePicker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Searchbar} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {useTranslation} from 'react-i18next';
import CustomText from '@SilalApp/common/components/CustomText';
import {scale} from 'react-native-size-matters';
const {width, height} = Dimensions.get('window');

export default function Acceptance_orders({title, navigation}) {
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [show_modal_customer_data, set_show_modal_customer_data] =
    useState(false);
  const [show_modal_driver_data, set_show_modal_driver_data] = useState(false);
  const [show_modal_order_details, set_show_modal_order_details] =
    useState(false);
  const [show_order_detail_view, set_show_order_detail_view] = useState(false);
  const [selected_index, set_selected_index] = useState('');
  const [search_value, set_search_value] = useState('');
  const [search_filters, set_search_filters] = useState('');
  const [refresher, setRefresh] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  const [delivery_method, setdelivery_method] = useState();
  const [category, setcategory] = useState();
  const [pickup_time, setpickup_time] = useState();
  const [status, setstatus] = useState();
  const [date1, setdate1] = useState();
  const [date2, setdate2] = useState();
  const [active, setActive] = useState(false);

  // const InputRef = useRef();

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      // alert('Keyboard Shown')
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      //   alert('Keyboard Hidden')
      // InputRef.current.blur();
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const data = [
    {
      id: '1',
      Title: 'Embedded Software Engineer',
      SubTitle: 'Newyork',
      year: '22/03/2022',
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

  const data1 = [
    {
      id: '1',
      Title: 'Embedded Software Engineer',
      SubTitle: 'Newyork',
      year: '22/03/2022',
    },
    {
      id: '2',
      Title: 'Web Developer',
      SubTitle: 'Lahore',
      year: '22/03/2022',
    },
  ];

  const render_order_further_detail = () => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Order_full_view', {status: 'from_acceptance'})
        }
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
            }}
            style={{width: 50, height: 50, borderRadius: 5}}
          />
        </View>
        <View style={{marginHorizontal: 10, flex: 1}}>
          <Text style={styles.order_further_item_value}>
            Guess Saffiano (GUCB15TBK) laptop bag 15
          </Text>
        </View>
        <View style={{width: '12%'}}>
          <Text style={styles.order_further_item_title}>{t('Quantity')}</Text>
          <Text style={styles.order_further_item_value}>1</Text>
        </View>
        <View style={{width: '12%'}}>
          <Text style={styles.order_further_item_title}>Charsct-s</Text>
          <Text style={styles.order_further_item_value}>Black, Big</Text>
        </View>
        <View style={{width: '12%'}}>
          <Text style={styles.order_further_item_title}>{t('Item_id')}</Text>
          <Text style={styles.order_further_item_value}>#7DG8098</Text>
        </View>
        <View style={{width: '12%'}}>
          <Text style={styles.order_further_item_title}>{t('In_stock')}</Text>
          <Text style={styles.order_further_item_value}>52</Text>
        </View>
        <View style={{width: '12%'}}>
          <Text style={styles.order_further_item_title}>{t('price')}</Text>
          <Text style={styles.order_further_item_value}>$ 50.00</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const render_all_oredrs = index => {
    return (
      <>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[
            styles.render_all_orders,
            {
              backgroundColor:
                show_order_detail_view == true && index == selected_index
                  ? '#E6F4F2'
                  : 'white',
            },
          ]}>
          <View style={[styles.render_all_order_single, {width: '14%'}]}>
            <Text style={{fontFamily: 'Lato-Regular'}}>#723DN2</Text>
          </View>
          <View style={[styles.render_all_order_single, {width: '18%'}]}>
            <Text style={{fontFamily: 'Lato-Regular'}}>Leslie A.</Text>
          </View>
          <View style={[styles.render_all_order_single, {width: '18%'}]}>
            <Text style={{fontFamily: 'Lato-Regular'}}>12.11.2021</Text>
          </View>
          <View style={[styles.render_all_order_single, {width: '12%'}]}>
            <Text style={{fontFamily: 'Lato-Regular'}}>2</Text>
          </View>
          <View style={[styles.render_all_order_single, {width: '13%'}]}>
            <View
              style={{
                backgroundColor: '#FF8B00',
                borderRadius: 5,
                alignSelf: 'flex-start',
                height: 23,
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Lato-Regular',
                  fontSize: 11,
                }}>
                Pending
              </Text>
            </View>
          </View>
          {/* <View style={[styles.render_all_order_single,{width:'12%',}]}>
            <Text style={{fontFamily:'Lato-Regular',}}>Status</Text>
          </View> */}
          <View style={[styles.render_all_order_single, {width: '15%'}]}>
            <Text style={{fontFamily: 'Lato-Regular'}}>$ 120</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              set_show_order_detail_view(!show_order_detail_view),
                set_selected_index(index);
            }}
            style={[styles.render_all_order_single, {width: '10%'}]}>
            <View
              style={{
                backgroundColor: '#F2F4F5',
                height: 30,
                width: 30,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {show_order_detail_view == true && index == selected_index ? (
                <Fontisto
                  name="angle-up"
                  style={{color: '#4C6870', fontSize: 14}}
                />
              ) : (
                <Fontisto
                  name="angle-down"
                  style={{color: '#4C6870', fontSize: 14}}
                />
              )}
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
        {show_order_detail_view == true && index == selected_index ? (
          <View style={{backgroundColor: 'white', marginHorizontal: 10}}>
            <FlatList
              // ListHeaderComponent={header_alloredrs}
              ItemSeparatorComponent={item_seperator}
              style={{
                borderRadius: 5,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderRightWidth: 1,
                borderLeftWidth: 6,
                borderColor: '#5AB3A8',
                paddingHorizontal: 20,
              }}
              keyExtractor={(item, index) => index.toString()}
              data={data1}
              renderItem={({item}) => render_order_further_detail()}
            />
          </View>
        ) : null}
      </>
    );
  };

  const header_alloredrs = () => {
    return (
      <View style={styles.all_orders_header}>
        <View style={[styles.all_orders, {width: '14%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('orderId')}</Text>
        </View>
        <View style={[styles.all_orders, {width: '18%'}]}>
          <Text style={styles.all_orders_heading_txt}>
            {t('customer_name')}
          </Text>
        </View>
        <View style={[styles.all_orders, {width: '18%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('Date')}</Text>
        </View>
        <View style={[styles.all_orders, {width: '12%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('items')}</Text>
        </View>
        {/* <View style={[styles.all_orders,{width:'10%'}]} >
              <Text style={styles.all_orders_heading_txt}>Status</Text>
            </View> */}
        <View style={[styles.all_orders, {width: '13%'}]}>
          <Text>{t('Status')}</Text>
        </View>
        <View style={[styles.all_orders, {width: '15%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('total-price')}</Text>
        </View>
        <View style={[styles.all_orders, {width: '10%'}]}>
          <Text style={styles.all_orders_heading_txt}></Text>
        </View>
      </View>
    );
  };

  const customer_data = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            set_show_modal_customer_data(!show_modal_customer_data)
          }
          style={styles.modal_data_heading}>
          <Text>{t('Customer_data')}</Text>
          {show_modal_customer_data == true ? (
            <Fontisto
              name="angle-up"
              style={[styles.cross_icon, {color: 'black'}]}
            />
          ) : (
            <Fontisto
              name="angle-down"
              style={[styles.cross_icon, {color: 'black'}]}
            />
          )}
        </TouchableOpacity>
        {show_modal_customer_data == true ? (
          <View style={{marginTop: 10}}>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('customer_name')}</Text>
              <Text style={styles.modal_title_second}>Willson Genemal</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('CustomerId')}</Text>
              <Text style={styles.modal_title_second}>133</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('phone')}</Text>
              <Text style={styles.modal_title_second}>*** *** **** 112</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('address')}</Text>
              <Text style={styles.modal_title_second}>
                2715 Ash Dr. San Jose
              </Text>
            </View>
          </View>
        ) : null}
      </>
    );
  };
  const driver_data = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => set_show_modal_driver_data(!show_modal_driver_data)}
          style={styles.modal_data_heading}>
          <Text>{t('driver_data')}</Text>
          {show_modal_driver_data == true ? (
            <Fontisto
              name="angle-up"
              style={[styles.cross_icon, {color: 'black'}]}
            />
          ) : (
            <Fontisto
              name="angle-down"
              style={[styles.cross_icon, {color: 'black'}]}
            />
          )}
        </TouchableOpacity>
        {show_modal_driver_data == true ? (
          <View style={{marginTop: 10}}>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('Driver_name')}</Text>
              <Text style={styles.modal_title_second}>Willson Genemal</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('phone')}</Text>
              <Text style={styles.modal_title_second}>*** *** **** 112</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('Delivery_time')}</Text>
              <Text style={styles.modal_title_second}>37 minutes</Text>
            </View>
          </View>
        ) : null}
      </>
    );
  };
  const render_order_details_items = (item, index) => {
    return (
      <View key={index} style={styles.order_item}>
        <Text style={{fontSize: 17}}>2</Text>
        <Entypo name="cross" style={[styles.cross_icon, {fontSize: 20}]} />
        <Text style={styles.order_title}>French Fries </Text>
      </View>
    );
  };
  const order_details = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            set_show_modal_order_details(!show_modal_order_details)
          }
          style={styles.modal_data_heading}>
          <Text>{t('order_details')}</Text>
          {show_modal_order_details == true ? (
            <Fontisto
              name="angle-up"
              style={[styles.cross_icon, {color: 'black', fontSize: 16}]}
            />
          ) : (
            <Fontisto
              name="angle-down"
              style={[styles.cross_icon, {color: 'black', fontSize: 16}]}
            />
          )}
        </TouchableOpacity>
        {show_modal_order_details == true ? (
          <View style={{marginTop: 10}}>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('Order_created')}</Text>
              <Text style={styles.modal_title_second}>11.13.2021 17.33</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('Payment')}</Text>
              <Text style={styles.modal_title_second}>$ 13.00</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('credit_card')}</Text>
              <Text style={styles.modal_title_second}>**** **** **** 3782</Text>
            </View>
            <View
              style={{
                height: 2,
                backgroundColor: '#ebeeef',
                marginTop: 10,
              }}></View>

            {data.map((item, index) => {
              return render_order_details_items(item, index);
            })}
          </View>
        ) : null}
      </>
    );
  };
  const item_seperator = () => {
    return <View style={{height: 1, backgroundColor: '#EBEEEF'}}></View>;
  };

  return !IsTablet ? (
    <Acceptance_order_mobile navigation={navigation} />
  ) : (
    <View style={{height: '100%', padding: 20}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.heading}>{t('orders')}</Text>
        </View>
        <TouchableOpacity style={styles.searchSection}>
          <EvilIcons
            size={20}
            color="#B3BEC2"
            name="search"
            style={styles.searchIcon}
          />
          {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
          <TextInput
            ref={InputRef}
            style={styles.input}
            placeholder={t('Search')}
            placeholderTextColor={'#B3BEC2'}
            onChangeText={searchString => {
              set_search_value(searchString);
              setRefresh(!refresher);
              searchString && setActive(true);
            }}
            value={search_value}
            onFocus={() => {
              set_search_filters(true);
            }}
            onBlur={() => {
              set_search_filters(false);
            }}
            // underlineColorAndroid="transparent"
          />
        </TouchableOpacity>

        {active && (
          <TouchableOpacity
            style={{
              backgroundColor: '#5AB3A8',
              width: 150,
              height: 40,
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <Text style={{fontFamily: 'Poppins-SemiBold', color: 'white'}}>
              {t('Search')}
            </Text>
          </TouchableOpacity>
        )}
        <View
          style={{flexDirection: 'row', width: '20%', alignItems: 'center'}}>
          <TouchableOpacity
            style={[
              styles.modelTextTitle,
              {backgroundColor: '#fff', elevation: 0.5, alignItems: 'center'},
            ]}>
            <View style={{alignSelf: 'center'}}>
              <Svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M4.50628 0.576109C4.84799 0.250672 5.40201 0.250672 5.74372 0.576109L9.24372 3.90944C9.58543 4.23488 9.58543 4.76252 9.24372 5.08795C8.90201 5.41339 8.34799 5.41339 8.00628 5.08795L6 3.17721V12.832C6 13.2923 5.60825 13.6654 5.125 13.6654C4.64175 13.6654 4.25 13.2923 4.25 12.832V3.17721L2.24372 5.08795C1.90201 5.41339 1.34799 5.41339 1.00628 5.08795C0.664573 4.76252 0.664573 4.23488 1.00628 3.90944L4.50628 0.576109ZM13 10.8202V1.16536C13 0.705127 13.3918 0.332031 13.875 0.332031C14.3583 0.332031 14.75 0.705127 14.75 1.16536V10.8202L16.7563 8.90944C17.098 8.584 17.652 8.584 17.9937 8.90944C18.3354 9.23488 18.3354 9.76252 17.9937 10.088L14.4937 13.4213C14.3296 13.5776 14.1071 13.6654 13.875 13.6654C13.6429 13.6654 13.4204 13.5776 13.2563 13.4213L9.75628 10.088C9.41457 9.76252 9.41457 9.23488 9.75628 8.90944C10.098 8.584 10.652 8.584 10.9937 8.90944L13 10.8202Z"
                  fill="#4C6870"
                />
              </Svg>
            </View>
          </TouchableOpacity>
          <View style={styles.filter_box}>
            <View style={styles.filter}>
              <Svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Rect width="24" height="24" fill="white" fill-opacity="0.01" />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.99951 13H16.9995L17.9995 11H5.99951L6.99951 13ZM3.99251 6C3.44451 6 3.20251 6.405 3.44651 6.895L3.99951 8H19.9995L20.5525 6.895C20.7995 6.4 20.5545 6 20.0065 6H3.99251ZM10.7775 17.556C10.8505 17.6861 10.9556 17.7953 11.0829 17.8731C11.2103 17.9508 11.3554 17.9945 11.5045 18H12.4945C12.7735 18 13.0995 17.8 13.2215 17.556L13.9995 16H9.99951L10.7775 17.556Z"
                  fill="#42526E"
                />
              </Svg>
              <Text style={{fontSize: 17}}>{t('filters')}</Text>
              {/* <Calender /> */}
            </View>
          </View>
        </View>
      </View>
      {search_filters == true ? (
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{width: '15%'}}>
            <Text
              style={{fontFamily: 'Lato-Bold', fontSize: 12, color: '#002733'}}>
              {t('Delivery_time')}
            </Text>
            <View
              style={{
                height: 40,
                width: '100%',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: 5,
                marginTop: 10,
                borderWidth: 1,
                borderColor: '#E8E8E8',
              }}>
              <Picker
                mode="dropdown"
                // style={{borderRadius:5}}
                // itemStyle={{backgroundColor:'green',borderRadius:10}}
                selectedValue={delivery_method}
                onValueChange={(itemValue, itemIndex) =>
                  setdelivery_method(itemValue)
                }>
                <Picker.Item label={t('all_method')} value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>
          <View style={{marginLeft: 10, width: '15%'}}>
            <Text
              style={{fontFamily: 'Lato-Bold', fontSize: 12, color: '#002733'}}>
              {t('Category')}
            </Text>
            <View
              style={{
                height: 40,
                width: 150,
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: 5,
                marginTop: 10,
                borderWidth: 1,
                borderColor: '#E8E8E8',
              }}>
              <Picker
                mode="dropdown"
                selectedValue={category}
                onValueChange={(itemValue, itemIndex) =>
                  setcategory(itemValue)
                }>
                <Picker.Item label={t('all_category')} value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>
          <View style={{marginLeft: 10, width: '15%'}}>
            <Text
              style={{fontFamily: 'Lato-Bold', fontSize: 12, color: '#002733'}}>
              {t('pickup_time')}
            </Text>
            <View
              style={{
                height: 40,
                width: 150,
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: 5,
                marginTop: 10,
                borderWidth: 1,
                borderColor: '#E8E8E8',
              }}>
              <Picker
                mode="dropdown"
                selectedValue={pickup_time}
                onValueChange={(itemValue, itemIndex) =>
                  setpickup_time(itemValue)
                }>
                <Picker.Item label={t('all')} value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>
          <View style={{marginLeft: 10, width: '15%'}}>
            <Text
              style={{fontFamily: 'Lato-Bold', fontSize: 12, color: '#002733'}}>
              {t('Status')}
            </Text>
            <View
              style={{
                height: 40,
                width: 150,
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: 5,
                marginTop: 10,
                borderWidth: 1,
                borderColor: '#E8E8E8',
              }}>
              <Picker
                mode="dropdown"
                selectedValue={status}
                onValueChange={(itemValue, itemIndex) => setstatus(itemValue)}>
                <Picker.Item label={t('all-orders')} value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>
          <View style={{marginLeft: 10, flex: 1}}>
            <Text
              style={{fontFamily: 'Lato-Bold', fontSize: 12, color: '#002733'}}>
              {t('Date')}
            </Text>
            <View
              style={{
                height: 40,
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: 5,
                marginTop: 10,
                borderWidth: 1,
                borderColor: '#E8E8E8',
              }}>
              <View
                style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
                <DatePicker height={35} width={130} color="#CCD4D6" />
                <View style={{width: 1, backgroundColor: '#E8E8E8'}}></View>
                <DatePicker height={35} width={130} color="#CCD4D6" />
              </View>
            </View>
          </View>
        </View>
      ) : null}
      <View style={{width: '100%'}}>
        {header_alloredrs()}

        <FlatList
          // ListHeaderComponent={header_alloredrs}
          ItemSeparatorComponent={item_seperator}
          //   style={{paddingHorizontal:10}}
          keyExtractor={(item, index) => index.toString()}
          data={data}
          renderItem={({item, index}) => render_all_oredrs(index)}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <ScrollView style={styles.modalView}>
            <View style={styles.modal_header}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.orderid_text}>
                  {t('orderId')}
                  <Text> #123456</Text>
                </Text>
                <View style={styles.modal_recuring}>
                  <Text style={{color: 'white'}}>{t('recurring_client')}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{padding: 7}}>
                <Entypo
                  name="cross"
                  style={[styles.cross_icon, {color: '#4C6870', fontSize: 25}]}
                />
              </TouchableOpacity>
            </View>

            {customer_data()}
            {driver_data()}
            {order_details()}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Poppins-Light',
    margin: 10,
  },
  single_order: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },

  order_header: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderid_text: {
    fontSize: 15,
    color: '#CCD4D6',
    fontWeight: 'bold',
  },
  order_timer: {
    backgroundColor: '#F2A341',
    borderRadius: '0 0 5 5',
  },
  order_title: {
    width: '70%',
    fontSize: 17,
  },
  order_item: {
    flexDirection: 'row',
    marginTop: 20,
  },
  cross_icon: {
    color: '#CCD4D6',
    fontSize: 16,
  },
  more_order: {
    width: 60,
    backgroundColor: '#E6F4F2',
    padding: 3,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 5,
  },
  accept_btn: {
    backgroundColor: '#5AB3A8',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  accept_btn_txt: {
    color: 'white',
    fontSize: 15,
  },
  order_recve_name: {
    fontSize: 17,
    fontWeight: '400',
    color: 'black',
  },
  order_recve_phone_view: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  order_recve_loc_view: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  ready_btn: {
    flex: 1,
    backgroundColor: '#5AB3A8',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  delivryby_btn: {
    backgroundColor: '#fdf1e3',
    padding: 5,
    borderRadius: 5,
  },
  delivryby_btn_txt: {
    color: '#F2A341',
  },
  all_orders: {
    backgroundColor: '#F2F4F5',
    // alignItems:'center',
    paddingLeft: 15,
    justifyContent: 'center',
  },
  all_orders_header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 70,
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
  },
  modelTextTitle: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    width: 40,
    marginLeft: 30,
  },
  render_all_orders: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 10,
  },
  render_all_order_single: {
    height: 30,
    // alignItems:'center',
    paddingLeft: 15,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: '100%',
    width: '50%',
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  orderid_text: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  modal_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modal_recuring: {
    backgroundColor: '#5AB3A8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 20,
  },
  modal_fields: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  order_item: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  modal_title_second: {
    color: 'black',
    fontSize: 15,
  },
  modal_title_first: {
    color: '#CCD4D6',
    fontSize: 15,
    width: 150,
  },
  archive_orders_tab: {
    borderBottomWidth: 4,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  calndr_date: {
    backgroundColor: 'white',
    height: 40,
    width: 200,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  all_orders_heading_txt: {
    fontFamily: 'Lato-Bold',
  },
  filter_box: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filter: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 40,
    width: 150,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toast: {
    backgroundColor: '#FFFFFF',
    // marginHorizontal:30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  trigger: {
    // padding: 10,
    // margin: 10,
    // backgroundColor:'red'
  },
  modal_data_heading: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#F2F4F5',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  pagination_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  pagination_numbring: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: 'black',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    height: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: 40,
    borderRadius: 5,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#424242',
    borderRadius: 5,
  },
  order_further_item_title: {
    color: '#B3BEC2',
    fontFamily: 'Lato-Regular',
    fontSize: 13,
  },
  order_further_item_value: {
    color: 'black',
    fontFamily: 'Lato-Regular',
    fontSize: 13,
    marginTop: 5,
  },
  searchBar: {
    marginLeft: 10,
    marginRight: 10,
  },
});

// import React, { useState, useEffect } from "react";
// import { Keyboard, Text, TextInput, StyleSheet, View } from "react-native";

// const Example = () => {
//   const [keyboardStatus, setKeyboardStatus] = useState(undefined);

//   useEffect(() => {
//     const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
//       setKeyboardStatus("Keyboard Shown");
//     });
//     const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {

//       setKeyboardStatus("Keyboard Hidden");
//     });

//     return () => {
//       showSubscription.remove();
//       hideSubscription.remove();
//     };
//   }, []);

//   return (
//     <View style={style.container}>
//       <TextInput
//         style={style.input}
//         placeholder='Click here…'
//         onSubmitEditing={Keyboard.dismiss}
//       />
//       <Text style={style.status}>{keyboardStatus}</Text>
//     </View>
//   );
// }

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 36
//   },
//   input: {
//     padding: 10,
//     borderWidth: 0.5,
//     borderRadius: 4
//   },
//   status: {
//     padding: 10,
//     textAlign: "center"
//   }
// });

// export default Example;
