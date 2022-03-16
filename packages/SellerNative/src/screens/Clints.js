import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Dimensions, TextInput, FlatList, TouchableOpacity, Modal, ScrollView, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Svg, { Path, Rect } from 'react-native-svg';

import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ModalView } from '../components/ModalView';
const { width, height } = Dimensions.get("window");
const Clints = () => {
  const [choseData, setchoseData] = useState('Sort by');
  const [ModalVisible, setModalVisible] = useState(false)
  const [ismodalVisible, setisModalVisible] = useState(false);

  const changeModalVisibilty = (bool) => {
    setModalVisible(bool)
  }
  const setData = (option) => {
    setchoseData(option)
  }
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



  const data1 = [
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

  /////////////////// Modal below

  const [show_modal_customer_data, set_show_modal_customer_data] = useState(false);
  const [show_modal_driver_data, set_show_modal_driver_data] = useState(false);
  const [show_modal_order_details, set_show_modal_order_details] = useState(false);

  const customer_data = () => {
    return (
      <>
        <TouchableOpacity onPress={() => set_show_modal_customer_data(!show_modal_customer_data)} style={{
          flexDirection: 'row', padding: 12,
          backgroundColor: '#F2F4F5', borderRadius: 5, justifyContent: 'space-between', alignItems: 'center', marginTop: 10
        }}>

          <Text style={styles.ModalDropdown}>CUSTOMER DATA</Text>

          {show_modal_customer_data == true ?
            <Fontisto name='angle-up' style={[styles.cross_icon, { color: 'black' }]} />
            :
            <Fontisto name='angle-down' style={[styles.cross_icon, { color: 'black' }]} />
          }
        </TouchableOpacity>
        {show_modal_customer_data == true ?
          <View style={{ marginTop: 10 }}>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Total orders</Text>
              <Text style={styles.modal_title_second}>43</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Sum of orders</Text>
              <Text style={styles.modal_title_second}>$ 423.90</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Average amount</Text>
              <Text style={styles.modal_title_second}>$ 13</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Credit card</Text>
              <Text style={styles.modal_title_second}>**** **** **** 4543 </Text>
            </View>
          </View>
          :
          null
        }
      </>
    )
  }
  const driver_data = () => {
    return (
      <>
        <TouchableOpacity onPress={() => set_show_modal_driver_data(!show_modal_driver_data)}
          style={{
            flexDirection: 'row', padding: 12, backgroundColor: '#F2F4F5', borderRadius: 5,
            justifyContent: 'space-between', alignItems: 'center', marginTop: 10
          }}>


          <Text style={styles.ModalDropdown}>DRIVER DATA</Text>


          {show_modal_driver_data == true ?
            <Fontisto name='angle-up' style={[styles.cross_icon, { color: 'black' }]} />
            :
            <Fontisto name='angle-down' style={[styles.cross_icon, { color: 'black' }]} />
          }
        </TouchableOpacity>
        {show_modal_driver_data == true ?
          <View style={{ marginTop: 10 }}>
            <FlatList
              data={data}
              numColumns={2}
              style={{ marginBottom: 5, height: 320 }}
              showsVerticalScrollIndicator={true}
              renderItem={({ item }) => (
                <View
                  style={styles.FlatListMainView2}>
                  <Image source={require('../Assets/image12.png')} style={{ height: 190, width: 190, resizeMode: 'contain', borderRadius: 5 }} />
                  <Text style={{ fontSize: 13, color: '#002733', fontFamily: 'Lato-Regular', paddingVertical: 10 }}>Chicken burger in cheese sauce with mushrooms</Text>
                  <Text style={{ fontSize: 13, color: '#002733', fontFamily: 'Poppins-SemiBold' }}>$ 4.00</Text>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>

          :
          null
        }
      </>
    )
  }

  const order_details = () => {
    return (
      <>
        <TouchableOpacity onPress={() => set_show_modal_order_details(!show_modal_order_details)}
          style={{
            flexDirection: 'row', padding: 12, backgroundColor: '#F2F4F5', borderRadius: 5,
            justifyContent: 'space-between', alignItems: 'center', marginTop: 10
          }}>

          <Text style={styles.ModalDropdown}>ORDER DETAILS</Text>
          {show_modal_order_details == true ?

            <Fontisto name='angle-up' style={[styles.cross_icon, { color: 'black', fontSize: 16 }]} />
            :
            <Fontisto name='angle-down' style={[styles.cross_icon, { color: 'black', fontSize: 16 }]} />
          }
        </TouchableOpacity>
        {show_modal_order_details == true ?
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: 10 }}>
              <EvilIcons
                name='search'
                style={[styles.SearchIcon,]}
              />
              <TextInput
                placeholder='Search by order #'
                placeholderTextColor="#B3BEC2"
                paddingHorizontal={32}
                style={[styles.Input, { width: '97%' }]}
              />
            </View>
            <FlatList
              data={data1}
              numColumns={1}
              style={{ marginBottom: 90 }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View>
                  <View style={styles.whiteDive}>
                    <View style={styles.SpaceBetweenTitleWhite}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text
                          style={{
                            fontSize: 18,
                            paddingTop: 5,
                            color: '#CCD4D6',
                          }}>
                          ORDER ID
                        </Text>
                        <Text style={styles.OrderIdentityCode}>
                          {item.Identity}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.TimeBar}>{item.Code}</Text>
                      </View>
                    </View>
                    <View style={styles.FlatStyle}>
                      <Text
                        style={{
                          color: '#002733',
                          fontSize: 17,
                          paddingHorizontal: 4,
                        }}>
                        2
                      </Text>
                      <TouchableOpacity>
                        <Entypo
                          name="cross"
                          size={17}
                          style={{ paddingTop: 3, paddingHorizontal: 4 }}
                          color={'#CCD4D6'}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          color: '#002733',
                          fontSize: 17,
                          paddingHorizontal: 4,
                        }}>
                        {item.order1}
                      </Text>
                    </View>

                    <View style={styles.FlatStyle1}>
                      <Text
                        style={{
                          color: '#002733',
                          fontSize: 17,
                          paddingHorizontal: 4,
                        }}>
                        1
                      </Text>
                      <Entypo
                        name="cross"
                        size={17}
                        style={{ paddingTop: 3, paddingHorizontal: 4 }}
                        color={'#CCD4D6'}
                      />
                      <Text
                        style={{
                          color: '#002733',
                          fontSize: 17,
                          width: 250,
                          paddingHorizontal: 4,
                        }}>
                        {item.order2}
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={styles.MoreOrderShow}>
                      <Text style={{ color: '#5AB3A8' }}>3 more</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', }}>
                      <Text style={styles.paymentMethod}>PAYMENT METHOD</Text>
                      <Text style={[styles.CreditCard,]}>CREADIT CARD</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                      <Text style={[styles.paymentMethod,]}>CARD DATA</Text>
                      <Text style={styles.CreditCard}>**** **** **** 3782</Text>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
          :
          null
        }
      </>
    )
  }


  return (
    <SafeAreaView style={{ marginHorizontal: 25 }}>

      <View style={{ padding: 20 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={ismodalVisible}
          onRequestClose={() => {
            setisModalVisible(!ismodalVisible);
          }}>


          <View style={styles.centeredView}>
            <ScrollView style={styles.modalView}>
              <View style={styles.modal_header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.orderid_text}>Cameron Williamson</Text>
                  <View style={styles.modal_recuring}>
                    <Text style={{ color: 'white', fontFamily: 'Lato-Regular' }}>Recurring client</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => setisModalVisible(!ismodalVisible)} style={{ padding: 7 }}>
                  <Entypo name='cross' style={[styles.cross_icon, { color: '#4C6870', fontSize: 25 }]} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#CCD4D6', fontFamily: 'Lato-Bold', width: 110 }}>CUSTOMER ID</Text>

                <Text style={{ color: '#002733', fontFamily: 'Lato-Bold' }}>#644</Text>

              </View>
              {customer_data()}
              {driver_data()}
              {order_details()}

            </ScrollView>
          </View>
        </Modal>

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
        <Text style={styles.ClintPageMainheading}>Clients database</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <EvilIcons
            name='search'
            style={styles.SearchIcon}
          />
          <TextInput
            placeholder='Search by orders #, phone or name...'
            placeholderTextColor="#B3BEC2"
            paddingHorizontal={32}
            style={styles.Input}
          />
        </View>

        <TouchableOpacity
          onPress={() => changeModalVisibilty(true)}
          style={[styles.modelTextTitle, { backgroundColor: '#fff', elevation: 0.5 }]}>

          <Svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M4.50628 0.576109C4.84799 0.250672 5.40201 0.250672 5.74372 0.576109L9.24372 3.90944C9.
            58543 4.23488 9.58543 4.76252 9.24372 5.08795C8.90201 5.41339 8.34799 5.41339 8.00628 5.08795L6 
            3.17721V12.832C6 13.2923 5.60825 13.6654 5.125 13.6654C4.64175 13.6654 4.25 13.2923 4.25 12.832V3.
            17721L2.24372 5.08795C1.90201 5.41339 1.34799 5.41339 1.00628 5.08795C0.664573 4.76252 0.664573 
            4.23488 1.00628 3.90944L4.50628 0.576109ZM13 10.8202V1.16536C13 0.705127 13.3918 0.332031 13.875
             0.332031C14.3583 0.332031 14.75 0.705127 14.75 1.16536V10.8202L16.7563 8.90944C17.098 8.584 17.
             652 8.584 17.9937 8.90944C18.3354 9.23488 18.3354 9.76252 17.9937 10.088L14.4937 13.4213C14.3296 
             13.5776 14.1071 13.6654 13.875 13.6654C13.6429 13.6654 13.4204 13.5776 13.2563 13.4213L9.75628 
             10.088C9.41457 9.76252 9.41457 9.23488 9.75628 8.90944C10.098 8.584 10.652 8.584 10.9937 8.90944L
             13 10.8202Z" fill="#4C6870" />
          </Svg>
          <Text style={{ marginVertical: 10, fontSize: 20, fontFamily: 'Lato-Regular', color: '#002733' }}>

            {choseData}

          </Text>
          <AntDesign name="down" style={{ fontSize: 18, color: '#002733', marginHorizontal: 5, marginTop: 5 }} />
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType='fade'
          visible={ModalVisible}
          nRequestClose={() => changeModalVisibilty(false)}>
          <ModalView
            changeModalVisibilty={changeModalVisibilty}
            setData={setData}
          />
        </Modal>

      </View>
      <View style={{ marginTop: 5, marginBottom: 10 }}>
        <FlatList
          data={data}
          numColumns={3}
          style={{ marginBottom: 30, height: 550 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.FlatListMainView}>
              <TouchableOpacity onPress={() => setisModalVisible(true)}>


                <View style={styles.GreenBkgFlat}>
                  <Text style={styles.TitleMainTextFlat}>
                    {item.Title}
                  </Text>
                  <Text style={styles.ButtonFlatList}>
                    Reccuring client
                  </Text>
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
              </TouchableOpacity>

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
    width: '31%',
    backgroundColor: '#F4F7F8',
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  FlatListMainView2: {
    width: '45%',
    marginVertical: 10,
    justifyContent: 'space-between',
    marginHorizontal: 5,

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
  },
  SearchIcon: {
    fontSize: 20,
    marginRight: -24,
    color: '#B3BEC2'
  },
  ClintPageMainheading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: '#002733',
    paddingTop: 5
  },
  modelTextTitle: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    flexDirection: 'row',
    height: 60,
    width: 190,
    marginHorizontal: 14

  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Poppins-Light',
    margin: 10
  },
  cross_icon: {
    color: "#CCD4D6",
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: '100%',
    width: '50%',
    alignSelf: 'flex-end',
    backgroundColor: "white",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  orderid_text: {
    fontSize: 15,
    color: '#002733',
    fontFamily: 'Poppins-SemiBold'
  },
  modal_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  modal_recuring: {
    backgroundColor: '#5AB3A8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 20
  },
  modal_fields: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center'
  },

  modal_title_second: {
    color: 'black',
    fontSize: 15
  },
  modal_title_first: {
    color: '#CCD4D6',
    fontSize: 15,
    width: 150
  },

  whiteDive: {
    backgroundColor: '#CCD4D61A',
    width: '98%',
    borderRadius: 5,
    marginVertical: 5,
    elevation: 0.3,
    alignSelf: 'center',
    justifyContent: 'center',

  },
  SpaceBetweenTitleWhite: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  OrderIdentityCode: {
    fontSize: 15,
    paddingVertical: 7,
    color: '#002733',
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  TimeBar: {
    fontSize: 15,
    color: '#002733',
    paddingVertical: 10,
    fontFamily: 'Lato-Bold'

  },
  FlatStyle: {
    paddingVertical: 10,

    flexDirection: 'row',
  },
  FlatStyle1: {

    flexDirection: 'row',
  },
  MoreOrderShow: {
    backgroundColor: '#E6F4F2',
    height: 25,
    width: 60,
    borderRadius: 5,
    marginLeft: 50,
    marginVertical: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  paymentMethod: {
    width: "50%",
    paddingVertical: 10,
    fontSize: 15,
    fontFamily: 'Lato-Bold',
    color: '#CCD4D6',
    paddingHorizontal: 25
  },
  CreditCard: {
    // width: "30%",
    paddingVertical: 10,
    textAlign: 'right',
    color: '#002733',
    fontFamily: 'Lato-Bold',
    fontSize: 15
  },
  ModalDropdown: {
    color: '#002733',
    fontFamily: 'Lato-Bold',
    fontSize: 13
  }


});
