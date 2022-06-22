import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import ModalViewS from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Svg, {Path, Rect} from 'react-native-svg';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ModalView} from '../../components/ModalView';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Clints = () => {
  const [choseData, setchoseData] = useState('Sort by');
  const [ModalVisible, setModalVisible] = useState(false);
  const [ismodalVisible, setisModalVisible] = useState(false);

  const changeModalVisibilty = bool => {
    setModalVisible(bool);
  };
  const setData = option => {
    setchoseData(option);
  };
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
  const data01 = [
    {
      id: '1',
      Title: 'French fries',
      ID: '2',
    },

    {
      id: '2',
      Title: 'Cheesecakes with sour cream and citrus hone',
      ID: '1',
    },
    {
      id: '3',
      Title: 'Cheesecakes with sour cream and citrus hone',
      ID: '2',
    },
    {
      id: '4',
      Title: 'Cheesecakes with sour cream and citrus hone',
      ID: '3',
    },
  ];

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
                      height: 190,
                      width: 190,
                      resizeMode: 'contain',
                      borderRadius: 5,
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
                    <Text style={{color: '#05AE4B'}}>3 more</Text>
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
    <SafeAreaView style={{backgroundColor: '#E5E5E5', paddingHorizontal: 25}}>
      <KeyboardAvoidingView>
        <View style={{padding: 20}}>
          <Modal
            animationType="slide"
            transparent={true}
            onBackdropPress={() => ismodalVisible(false)}
            visible={ismodalVisible}
            onRequestClose={() => {
              setisModalVisible(!ismodalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ScrollView>
                  <View>
                    <TouchableOpacity
                      onPress={() => setisModalVisible(!ismodalVisible)}
                      style={{
                        height: 60,
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                        paddingTop: 25,
                      }}>
                      <Entypo
                        name="cross"
                        style={[{color: '#4C6870', fontSize: 30}]}
                      />
                    </TouchableOpacity>
                  </View>

                  {SecondModalVisible == false ? (
                    <View>
                      <View style={styles.modal_header}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={styles.orderid_text}>
                            Cameron Williamson
                          </Text>
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

                        <Text
                          style={{color: '#002733', fontFamily: 'Lato-Bold'}}>
                          #644
                        </Text>
                      </View>
                    </View>
                  ) : null}
                  {SecondModalVisible == true ? (
                    <View>
                      <View style={{flexDirection: 'row', width: 340}}>
                        <TouchableOpacity
                          onPress={() =>
                            setSecondModalVisible(!SecondModalVisible)
                          }
                          style={styles.SecondModalContainer}>
                          <MaterialCommunityIcons
                            name="keyboard-backspace"
                            style={styles.SecondModalIcon}
                          />
                          <Text style={styles.SecondModalText}>
                            Order #723DN8
                          </Text>
                        </TouchableOpacity>
                        <View style={styles.SecondModalCompleteView}>
                          <Text style={styles.SecondViewCompleteText}>
                            Completed
                          </Text>
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
                    </>
                  )}
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
            marginHorizontal: 15,
          }}>
          <Text style={styles.ClintPageMainheading}>Clients database</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <EvilIcons name="search" style={styles.SearchIcon} />
            <TextInput
              placeholder="Search by orders #, phone or name..."
              placeholderTextColor="#B3BEC2"
              paddingHorizontal={32}
              style={styles.Input}
            />
          </View>

          <TouchableOpacity
            onPress={() => changeModalVisibilty(true)}
            style={[
              styles.modelTextTitle,
              {backgroundColor: '#fff', elevation: 0.5},
            ]}>
            <View style={{paddingHorizontal: 5}}>
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
            <Text
              style={{
                marginVertical: 10,
                fontSize: 20,
                fontFamily: 'Lato-Regular',
                color: '#002733',
              }}>
              {choseData}
            </Text>
            <AntDesign name="down" style={styles.SortBy} />
          </TouchableOpacity>
          <ModalViewS
            transparent={true}
            animationType="fade"
            onBackdropPress={() => changeModalVisibilty(false)}
            visible={ModalVisible}
            nRequestClose={() => changeModalVisibilty(false)}>
            <ModalView
              changeModalVisibilty={changeModalVisibilty}
              setData={setData}
            />
          </ModalViewS>
        </View>
        <View style={{marginTop: 5, marginBottom: 10}}>
          <FlatList
            data={data}
            numColumns={3}
            style={{marginBottom: 30, height: 550}}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.FlatListMainView}>
                <TouchableOpacity
                  onPress={() => {
                    setSecondModalVisible(false), setisModalVisible(true);
                  }}>
                  <View style={styles.GreenBkgFlat}>
                    <Text style={styles.TitleMainTextFlat}>{item.Title}</Text>
                    <Text style={styles.ButtonFlatList}>Reccuring client</Text>
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
                    <View
                      style={[
                        styles.ClintDataBaseDate,
                        {
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          elevation: 0.4,
                        },
                      ]}>
                      <Text style={styles.FlatIdDynamic}>Sum of orders:</Text>
                      <Text style={styles.OrderFlat}>
                        {' '}
                        {item.Sum_of_orders}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Clints;
