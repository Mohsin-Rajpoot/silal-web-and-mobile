import {Text, View, ScrollView, TouchableOpacity, FlatList,Image} from 'react-native';
import React, {useState} from 'react';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';


const FullOrderDetail = () => {
  const [ModalVisible, setModalVisible] = useState(false);
  const [ismodalVisible, setisModalVisible] = useState(false);

  const [show_modal_Customer_Data, set_show_modal_Customer_Data] =
    useState(false);
  const [show_modal_Personal_data, set_show_modal_Personal_data] =
    useState(false);
  const [show_modal_Favourite_item, set_show_modal_Favourite_item] =
    useState(false);
  const [show_modal_order_details, set_show_modal_order_details] =
    useState(false);
  const [show_modal_Driver_Data, set_show_modal_Driver_Data] = useState(false);
  const [
    show_modal_SecondModal_order_details,
    set_show_modal_SecondModal_order_details,
  ] = useState(false);

  const [SecondModalVisible, setSecondModalVisible] = useState(false);
  const data = [
    {
      id: '1',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },

    {
      id: '2',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '3',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '4',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '5',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '6',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '7',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },

    {
      id: '8',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '9',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '10',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '11',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '12',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
  ];


  const Customer_Data = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            set_show_modal_Customer_Data(!show_modal_Customer_Data)
          }
          style={styles.CustomerMainTitle}>
          <Text style={styles.ModalDropdown}>CUSTOMER DATA</Text>

          {show_modal_Customer_Data == true ? (
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
        {show_modal_Customer_Data == true ? (
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
              <Text style={styles.modal_title_second}>*** *** **** 112</Text>
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

  const Driver_Data = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => set_show_modal_Driver_Data(!show_modal_Driver_Data)}
          style={styles.CustomerMainTitle}>
          <Text style={styles.ModalDropdown}>DRIVER DATA</Text>

          {show_modal_Driver_Data == true ? (
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
        {show_modal_Driver_Data == true ? (
          <View style={{marginTop: 10}}>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Driver name</Text>
              <Text style={styles.modal_title_second}>Willson Genemal</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Delivery time</Text>
              <Text style={styles.modal_title_second}>37 minutes</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Phone</Text>
              <Text style={styles.modal_title_second}>*** *** **** 112</Text>
            </View>
          </View>
        ) : null}
      </>
    );
  };

  const SecondModal_order_details = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            set_show_modal_SecondModal_order_details(
              !show_modal_SecondModal_order_details,
            )
          }
          style={styles.CustomerMainTitle}>
          <Text style={styles.ModalDropdown}>ORDER DETAILS</Text>

          {show_modal_SecondModal_order_details == true ? (
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
        {show_modal_SecondModal_order_details == true ? (
          <View style={{marginTop: 10}}>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Order created</Text>
              <Text style={styles.modal_title_second}>13.11.2021</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Payment</Text>
              <Text style={styles.modal_title_second}>$ 13.00</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Credit card</Text>
              <Text style={styles.modal_title_second}>**** **** **** 3782</Text>
            </View>

            <FlatList
              data={data01}
              numColumns={1}
              style={{marginBottom: 90, marginVertical: 30}}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={{flexDirection: 'row', width: '90%'}}>
                  <Text style={styles.IdSecondModal}>{item.ID}</Text>
                  <Entypo style={styles.CrossIconSecondModal} name="cross" />
                  <Text style={styles.SecondModalTile}>{item.Title}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        ) : null}
      </>
    );
  };

  const Personal_data = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            set_show_modal_Personal_data(!show_modal_Personal_data)
          }
          style={styles.CustomerMainTitle}>
          <Text style={styles.ModalDropdown}>PERSONAL DATA</Text>

          {show_modal_Personal_data == true ? (
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
        {show_modal_Personal_data == true ? (
          <View style={{marginTop: 10}}>
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
              <Text style={styles.modal_title_second}>**** **** **** 4543</Text>
            </View>
          </View>
        ) : null}
      </>
    );
  };
  const Favourite_item = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            set_show_modal_Favourite_item(!show_modal_Favourite_item)
          }
          style={styles.CustomerMainTitle}>
          <Text style={styles.ModalDropdown}>FAVOURITE ITEMS (3)</Text>

          {show_modal_Favourite_item == true ? (
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
        {show_modal_Favourite_item == true ? (
          <View style={{marginTop: 10}}>
            <FlatList
              data={data}
              numColumns={2}
              style={{marginBottom: 5}}
              showsVerticalScrollIndicator={true}
              renderItem={({item}) => (
                <View style={styles.FlatListMainView2}>
                  <Image
                    source={require('../../Assets/image12.png')}
                    style={{
                      height: !IsTablet ? 150 : 190,
                      width: !IsTablet ? 150 : 190,
                      resizeMode: 'contain',
                      borderRadius: 5,
                      overflow: 'hidden',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#002733',
                      fontFamily: 'Lato-Regular',
                      paddingVertical: 10,
                    }}>
                    Chicken burger in cheese sauce with mushrooms
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#002733',
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    $ 4.00
                  </Text>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        ) : null}
      </>
    );
  };

  const order_details = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            set_show_modal_order_details(!show_modal_order_details)
          }
          style={styles.CustomerMainTitle}>
          <Text style={styles.ModalDropdown}>ORDER DETAILS</Text>
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
          <View>
            <View style={styles.SearchMainViewModal}>
              <EvilIcons name="search" style={[styles.SearchIcon]} />
              <TextInput
                placeholder="Search by order #"
                placeholderTextColor="#B3BEC2"
                paddingHorizontal={32}
                style={[styles.Input, {width: '97%'}]}
              />
            </View>
            <FlatList
              data={data1}
              numColumns={1}
              style={{marginBottom: 90}}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => setSecondModalVisible(true)}
                  style={styles.whiteDive}>
                  <View style={styles.SpaceBetweenTitleWhite}>
                    <View style={{flexDirection: 'row'}}>
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
                        style={{paddingTop: 3, paddingHorizontal: 4}}
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

                  <View style={styles.FlatStyle}>
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
                      style={{paddingTop: 3, paddingHorizontal: 4}}
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

                  <TouchableOpacity style={styles.MoreOrderShow}>
                    <Text style={{color: colors.primary}}>3 more</Text>
                  </TouchableOpacity>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.paymentMethod}>PAYMENT METHOD</Text>
                    <Text style={[styles.CreditCard]}>CREDIT CARD</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.paymentMethod]}>CARD DATA</Text>
                    <Text style={styles.CreditCard}>**** **** **** 3782</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        ) : null}
      </>
    );
  };
  return (
    
     <View style={styles.centeredView}>
      <View style={styles.modalViewMobile}>
      <ScrollView>
 

           {SecondModalVisible == false ? (
            <View>
              <View style={styles.modal_headerMobile}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {/* <TouchableOpacity
                    onPress={() => setisModalVisible(!ismodalVisible)}
                    style={styles.CloseMainModalMobile}>
                    <MaterialCommunityIcons
                      name="keyboard-backspace"
                      style={styles.SecondModalIcon}
                    />
                  </TouchableOpacity> */}

       
                  <Text style={styles.orderid_text}>Cameron Williamson</Text>
                  <View style={styles.modal_recuring}>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'Lato-Regular',
                      }}>
                      Recurring client
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: '#CCD4D6',
                    fontFamily: 'Lato-Bold',
                    width: 110,
                  }}>
                  CUSTOMER ID
                </Text>

                <Text style={{color: '#002733', fontFamily: 'Lato-Bold'}}>
                  #644
                </Text>
              </View>
            </View>
          ) : null}
          {SecondModalVisible == true ? (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  width: 340,
                  marginTop: IsTablet ? 5 : 20,
                }}>
                <TouchableOpacity
                  // onPress={() => setSecondModalVisible(!SecondModalVisible)}
                  style={styles.SecondModalContainer}>
                  <MaterialCommunityIcons
                    name="keyboard-backspace"
                    style={styles.SecondModalIcon}
                  />
                  <Text style={styles.SecondModalText}>Order #723DN8</Text>
                </TouchableOpacity>
                <View style={styles.SecondModalCompleteView}>
                  <Text style={styles.SecondViewCompleteText}>Completed</Text>
                </View>
              </View>
              {Customer_Data()}
              {Driver_Data()}
              {SecondModal_order_details()}
            </View>
          ) : (
            <>
              {Personal_data()}
              {Favourite_item()}
              {order_details()}
              <View />
            </>
          )}
        </ScrollView>
      </View>
     </View>
  );
};

export default FullOrderDetail;

const styles = ScaledSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // width:'106%',
    // height:'100%'
  },
  modalViewMobile: {
    height: '100%',
    width: '100%',
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  crossButtonModal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: IsTablet ? '8@s' : '15%',
    display: IsTablet ? null : true,
  },
  modal_headerMobile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop:-20
    paddingVertical: '10@s',
  },
  CloseMainModalMobile: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 15,
  },
  SecondModalIcon: {
    fontSize: 30,
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
  },
  orderid_text: {
    fontSize: 15,
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
  },
  modal_recuring: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 20,
  },
  SecondModalContainer: {
    flexDirection: 'row',
  },
  SecondModalIcon: {
    fontSize: 30,
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
  },
  SecondModalText: {
    fontSize: 19,
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
  },
  SecondModalCompleteView: {
    width: 100,
    backgroundColor: colors.parrotColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
    height: 20,
    width: 76,
    marginVertical: 5,
  },
  SecondViewCompleteText: {
    color: colors.textWhite,
    fontFamily: 'Lato-Medium',
    fontSize: 11,
  },
});
