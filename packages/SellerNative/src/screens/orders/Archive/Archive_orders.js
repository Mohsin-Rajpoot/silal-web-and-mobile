import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  FlatList,
  Pressable,
  Modal,
  ScrollView,
  Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Archive_orders_mobile from './Archive_order_mobile';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Fontisto from 'react-native-vector-icons/Fontisto';
import {Image, SvgXml} from 'react-native-svg';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Rect,
  Circle,
  G,
} from 'react-native-svg';
import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';
import DatePicker from './../../../components/DatePicker';
import colors from '@SilalApp/common/assets/colors';

const {width, height} = Dimensions.get('window');

export default function Archive_orders({title, navigation}) {
  const [order_state, set_order_state] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [show_modal_customer_data, set_show_modal_customer_data] =
    useState(false);
  const [show_modal_driver_data, set_show_modal_driver_data] = useState(false);
  const [show_modal_order_details, set_show_modal_order_details] =
    useState(false);
  const [selected_order_menu, set_selected_order_menu] = useState();

  const scrollref = useRef();

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

  const render_all_oredrs = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[
          styles.render_all_orders,
          {backgroundColor: index == selected_order_menu ? '#E6F4F2' : 'white'},
        ]}>
        <View style={[styles.render_all_order_single, {width: '12%'}]}>
          <Text style={{fontFamily: 'Lato-Regular'}}>#723DN2</Text>
        </View>
        <View style={[styles.render_all_order_single, {width: '18%'}]}>
          <Text style={{fontFamily: 'Lato-Regular'}}>Leslie A.</Text>
        </View>
        <View style={[styles.render_all_order_single, {width: '14%'}]}>
          <Text style={{fontFamily: 'Lato-Regular'}}>2327</Text>
        </View>
        <View style={[styles.render_all_order_single, {width: '12%'}]}>
          <Text style={{fontFamily: 'Lato-Regular'}}>Payment</Text>
        </View>
        <View style={[styles.render_all_order_single, {width: '10%'}]}>
          <Text>Type</Text>
        </View>
        <View style={[styles.render_all_order_single, {width: '12%'}]}>
          <Text style={{fontFamily: 'Lato-Regular'}}>Status</Text>
        </View>
        <View style={[styles.render_all_order_single, {width: '14%'}]}>
          <Text style={{fontFamily: 'Lato-Regular'}}>$ 120</Text>
        </View>

        <View style={[styles.render_all_order_single, {width: '8%'}]}>
          <Menu>
            <MenuTrigger
              onPress={() => set_selected_order_menu(index)}
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
                  style={[styles.cross_icon, {color: '#4C6870', fontSize: 20}]}
                />
              </View>
            </MenuTrigger>
            <MenuOptions customStyles={{optionText: {padding: 5}}}>
              <MenuOption value="Normal" text="Refund" />
              <MenuOption value="Normal" text="Contact" />
              <MenuOption
                onSelect={() => console.log('call')}
                value="Normal"
                text="Call customer service"
              />
            </MenuOptions>
          </Menu>
        </View>
      </TouchableOpacity>
    );
  };

  const header_alloredrs = () => {
    return (
      <View style={styles.all_orders_header}>
        <View style={[styles.all_orders, {width: '12%'}]}>
          <Text style={styles.all_orders_heading_txt}>Order ID</Text>
        </View>
        <View style={[styles.all_orders, {width: '18%'}]}>
          <Text style={styles.all_orders_heading_txt}>Customer name</Text>
        </View>
        <View style={[styles.all_orders, {width: '14%'}]}>
          <Text style={styles.all_orders_heading_txt}>Customer ID</Text>
        </View>
        <View style={[styles.all_orders, {width: '12%'}]}>
          <Text style={styles.all_orders_heading_txt}>Payment</Text>
        </View>
        <View style={[styles.all_orders, {width: '10%'}]}>
          <Text style={styles.all_orders_heading_txt}>Type</Text>
        </View>
        <View style={[styles.all_orders, {width: '12%'}]}>
          <Text>Status</Text>
        </View>
        <View style={[styles.all_orders, {width: '14%'}]}>
          <Text style={styles.all_orders_heading_txt}>Total price</Text>
        </View>
        <View style={[styles.all_orders, {width: '8%'}]}>
          <Text style={styles.all_orders_heading_txt}>Action</Text>
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
          <Text>CUSTOMER DATA</Text>
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
              <Text style={styles.modal_title_first}>Customer name</Text>
              <Text style={styles.modal_title_second}>Willson Genemal</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Customer ID</Text>
              <Text style={styles.modal_title_second}>133</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Phone</Text>
              <Text style={styles.modal_title_second}>* * ** 112</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Address</Text>
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
          <Text>DRIVER DATA</Text>
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
              <Text style={styles.modal_title_first}>Driver name</Text>
              <Text style={styles.modal_title_second}>Willson Genemal</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Phone</Text>
              <Text style={styles.modal_title_second}>* * ** 112</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Delivery time</Text>
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
          <Text>ORDER DETAILS</Text>
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
              <Text style={styles.modal_title_first}>Oredr created</Text>
              <Text style={styles.modal_title_second}>11.13.2021 17.33</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Payment</Text>
              <Text style={styles.modal_title_second}>$ 13.00</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Credit card</Text>
              <Text style={styles.modal_title_second}>** ** ** 3782</Text>
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

  return !IsTablet ? (
    <Archive_orders_mobile navigation={navigation} />
  ) : (
    <View style={{flex: 1, padding: 20}}>
      {/* <MenuProvider > */}

      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              set_order_state('All'),
                scrollref.current.scrollTo({x: (width - 20) * 0});
            }}
            style={[
              styles.archive_orders_tab,
              {borderColor: order_state == 'All' ? colors.primary : '#e8edee'},
            ]}>
            <Text
              style={{
                color: order_state == 'All' ? '#002733' : '#4C6870',
                fontWeight: '600',
                fontFamily: 'Poppins-SemiBold',
              }}>
              All orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              set_order_state('completed'),
                scrollref.current.scrollTo({x: (width - 40) * 1});
            }}
            style={[
              styles.archive_orders_tab,
              {
                borderColor:
                  order_state == 'completed' ? colors.primary : '#e8edee',
              },
            ]}>
            <Text
              style={{
                color: order_state == 'completed' ? '#002733' : '#4C6870',
                fontWeight: '600',
                fontFamily: 'Poppins-SemiBold',
              }}>
              Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              set_order_state('cancelled'),
                scrollref.current.scrollTo({x: (width - 20) * 2});
            }}
            style={[
              styles.archive_orders_tab,
              {
                borderColor:
                  order_state == 'cancelled' ? colors.primary : '#e8edee',
              },
            ]}>
            <Text
              style={{
                color: order_state == 'cancelled' ? '#002733' : '#4C6870',
                fontWeight: '600',
                fontFamily: 'Poppins-SemiBold',
              }}>
              Cancelled
            </Text>
          </TouchableOpacity>
        </View>
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
            <Text style={{fontSize: 17}}>Filters</Text>
          </View>
          <View style={styles.calndr_date}>
            <DatePicker />
          </View>
        </View>
      </View>
      <View>{header_alloredrs()}</View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        ref={scrollref}
        horizontal
        scrollEnabled={false}>
        <View style={{width: width - 40}}>
          <FlatList
            // ListHeaderComponent={header_alloredrs}
            keyExtractor={(item, index) => index.toString()}
            data={data}
            renderItem={({item, index}) => render_all_oredrs(item, index)}
          />
        </View>
        <View style={{width: width - 40}}>
          <FlatList
            // ListHeaderComponent={header_alloredrs}
            keyExtractor={(item, index) => index.toString()}
            data={data}
            renderItem={({item, index}) => render_all_oredrs(item, index)}
          />
        </View>
        <View style={{width: width - 40}}>
          <FlatList
            // ListHeaderComponent={header_alloredrs}
            keyExtractor={(item, index) => index.toString()}
            data={data}
            renderItem={({item, index}) => render_all_oredrs(item, index)}
          />
        </View>
      </ScrollView>
      {/* {order_state=='All'?

              <FlatList
                  // ListHeaderComponent={header_alloredrs}
                  keyExtractor={(item, index) => index.toString()}
                  data={data}
                  renderItem={({ item }) => (
                    render_all_oredrs()
                  )}
              />
              :
              order_state=='completed'?
              <FlatList
                // ListHeaderComponent={header_alloredrs}
                keyExtractor={(item, index) => index.toString()}
                data={data}
                renderItem={({ item }) => (
                  render_all_oredrs()
                )}
              />              
              :
              <FlatList
                // ListHeaderComponent={header_alloredrs}
                keyExtractor={(item, index) => index.toString()}
                data={data}
                renderItem={({ item }) => (
                  render_all_oredrs()
                )}
              />              
            } */}
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <ScrollView style={styles.modalView}>
            <View style={styles.modal_header}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.orderid_text}>
                  ORDER ID<Text> #123456</Text>
                </Text>
                <View style={styles.modal_recuring}>
                  <Text style={{color: 'white'}}>Recurring client</Text>
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
      {/* </MenuProvider> */}
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
    backgroundColor: colors.primary,
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
    backgroundColor: colors.primary,
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
    alignItems: 'center',
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
  render_all_orders: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  render_all_order_single: {
    height: 30,
    alignItems: 'center',
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
    backgroundColor: colors.primary,
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
    paddingBottom: 8,
  },
  all_orders_heading_txt: {
    fontFamily: 'Lato-Bold',
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
});
