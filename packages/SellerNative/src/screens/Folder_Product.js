import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
  ScrollView,
  Image,
  TextInputBase,
} from 'react-native';
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
import {
  CustomButton,
  LockOnLandscape,
  SearchBox,
} from '@SilalApp/common/components/native';
import {SwipeListView} from 'react-native-swipe-list-view';
import Octicons from 'react-native-vector-icons/Octicons';
import {Picker} from '@react-native-picker/picker';
import Foundation from 'react-native-vector-icons/Foundation';
import MultiSelectDropDown from '../components/MultiSelectDropDown';
import colors from '@SilalApp/common/assets/colors';

const Secondary = '#002733';

export default function Archive_orders({title, navigation}) {
  const [selectedCategory, setselectedCategory] = useState();
  const [selectedCategoryItem, setselectedCategoryItem] = useState();
  const [selectedValues, setSelectedValues] = useState([]);
  const [checked, setchecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [Openmodal, setOpenmodal] = useState(false);
  const [Showmodal, setShowmodal] = useState(false);
  const [selected_Category, set_selected_Category] = useState('Salad');
  const setcheck = index => {
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
  var [data, setData] = useState([
    {
      id: '1',
      Title: 'Embedded Software Engineer',
      SubTitle: 'Newyork',
      year: '22/03/2022',
      image: require('../Assets/image8.png'),
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
  ]);
  const data3 = [
    {
      id: '1',
      title: 'Slide to accept order',
    },
  ];
  const data4 = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
  ];

  const render_all_oredrs = (item, index) => {
    return (
      <View>
        <View style={{marginHorizontal: 5, marginVertical: 4}}>
          <Modal
            visible={Showmodal}
            animationType="slideInRight"
            transparent={true}
            style={{}}>
            <View style={styles.ModalContainerPreview}>
              <TouchableOpacity style={styles.ShowmodalOpenButton}>
                <Entypo
                  name="cross"
                  style={styles.closeShowmodalicon}
                  onPress={() => setShowmodal(false)}
                />
              </TouchableOpacity>
              <ScrollView>
                <TouchableOpacity style={styles.SaveButton}>
                  <Text style={styles.Savetext}>Save</Text>
                </TouchableOpacity>

                <Image
                  source={require('../Assets/image134.png')}
                  style={styles.ImageMoadalMain}
                />
                <View style={styles.IconOnMainImageView}>
                  <View style={styles.InnerViewMainImage}>
                    <Octicons name="pencil" style={styles.IconePencilMain} />
                  </View>
                </View>
                <View style={{marginHorizontal: 40}}>
                  <Text style={styles.ModalSubTitle}>Item</Text>
                  {/* <View>
                                        <Text style={styles.dropDownModalTitle}>Category</Text>
                                    </View> */}

                  {/* <View style={styles.dropdownbox1}>
                      <Menu>
                        <MenuTrigger onPress={() => {}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              paddingVertical: 5,
                              paddingHorizontal: 7,
                            }}>
                            <Text>{selected_Category}</Text>
                            <Entypo
                              name="chevron-down"
                              style={[
                                styles.cross_icon,
                                {color: colors.sidebar, fontSize: 20},
                              ]}
                            />
                          </View>
                        </MenuTrigger>
                        <MenuOptions customStyles={{optionText: {padding: 5}}}>
                          <MenuOption
                            onSelect={set_selected_Category}
                            value="Salad"
                            text="Salad"
                          />
                          <MenuOption
                            onSelect={set_selected_Category}
                            value="Berger"
                            text="Berger"
                          />
                        </MenuOptions>
                      </Menu>
                    </View> */}

                  {/* <View style={styles.dropdownbox}>
                                        <Picker
                                            selectedValue={selectedCategory}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setselectedCategory(itemValue)}>
                                            <Picker.Item label="Salad" value="java" />
                                            <Picker.Item label="Salad Special" value="js" />
                                        </Picker>
                                    </View> */}

                  {/* <View style={{ marginVertical: 5 }}>
                                        <Text style={styles.dropDownModalTitle}>Item name</Text>
                                        <View style={styles.dropdownbox}>
                                            <Picker
                                                animated={false}
                                                selectedValue={selectedCategoryItem}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    setselectedCategoryItem(itemValue)}>
                                                <Picker.Item label="Salad" value="java" />
                                                <Picker.Item label="Salad Special" value="js" />
                                            </Picker>
                                        </View>
                                    </View> */}
                  <View>
                    <Text style={styles.dropDownModalTitle}>
                      Item description
                    </Text>
                    <TextInput
                      multiline={true}
                      textAlignVertical="top"
                      placeholder="Amet minim mollit non 
                                        deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                                        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                      placeholderTextColor={colors.black}
                      style={styles.TextInputMAinView}
                    />
                  </View>
                  <View style={{marginTop: 15}}>
                    <Text style={styles.dropDownModalTitle}>
                      Nutritional value
                    </Text>
                    <FlatList
                      data={data4}
                      numColumns={2}
                      style={{marginBottom: 10}}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item}) => (
                        <View style={styles.CalViewFaltModal}>
                          <TextInput
                            placeholder="313 cal"
                            placeholderTextColor={colors.black}
                            style={styles.CalInputFaltModal}
                          />
                        </View>
                      )}
                      keyExtractor={item => item.id}
                    />
                  </View>
                  {/* <View style={{ }}>
                                        <Text style={styles.dropDownModalTitle}>Allergies</Text>
                                    
                                    
                                    
                                        <MultiSelectDropDown />
                                       </View> */}

                  {/* <Picker
                                                animated={false}
                                                selectedValue={selectedCategoryItem}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    setselectedCategoryItem(itemValue)}>
                                                <Picker.Item label="Salad" value="java" />
                                                <Picker.Item label="Salad Special" value="js" />
                                            </Picker> */}

                  <Text style={styles.AddViewModal}>Add-ons</Text>
                  <View style={styles.grayViewContainer}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.ToppingTitle}>
                        Toppings:{' '}
                        <Text style={{color: colors.sidebar, fontSize: 13}}>
                          Lettuce, Cheese, Tomatoes, Pickle
                        </Text>
                      </Text>
                      <View style={styles.WhitePencilBkgView}>
                        <Foundation
                          name="pencil"
                          style={{fontSize: 20, color:colors.textWhite}}
                        />
                      </View>
                    </View>
                    <FlatList
                      data={data4}
                      numColumns={3}
                      style={{marginBottom: 10}}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item}) => (
                        <TouchableOpacity style={styles.FlatLettuce}>
                          <Text
                            style={{
                              color: colors.sidebar,
                              fontFamily: 'Lato-Regular',
                            }}>
                            Lettuce
                          </Text>
                        </TouchableOpacity>
                      )}
                      keyExtractor={item => item.id}
                    />
                  </View>
                  <View style={styles.grayViewContainer}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.ToppingTitle}>
                        Sauces:{' '}
                        <Text style={{color: colors.sidebar, fontSize: 13}}>
                          Ketchup, Maynoaise, BBQ
                        </Text>
                      </Text>
                      <View style={styles.WhitePencilBkgView}>
                        <Foundation
                          name="pencil"
                          style={{fontSize: 20, color: colors.textWhite}}
                        />
                      </View>
                    </View>

                    <FlatList
                      data={data4}
                      numColumns={3}
                      style={{marginBottom: 10}}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item}) => (
                        <TouchableOpacity style={styles.FlatLettuce}>
                          <Text style={styles.TextStyleFlatModal}>Ketchup</Text>
                        </TouchableOpacity>
                      )}
                      keyExtractor={item => item.id}
                    />
                  </View>
                  <View style={[styles.grayViewContainer, {marginBottom: 20}]}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.ToppingTitle}>
                        Drinks:{' '}
                        <Text style={{color: colors.sidebar, fontSize: 13}}>
                          Pepsi, Nestea, Coca-cola, Water, 7UP
                        </Text>
                      </Text>
                      <View style={styles.WhitePencilBkgView}>
                        <Foundation
                          name="pencil"
                          style={{fontSize: 20, color: colors.textWhite}}
                        />
                      </View>
                    </View>

                    <FlatList
                      data={data4}
                      numColumns={3}
                      style={{marginBottom: 10}}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item}) => (
                        <TouchableOpacity style={styles.FlatLettuce}>
                          <Text style={styles.TextStyleFlatModal}>Nestea</Text>
                        </TouchableOpacity>
                      )}
                      keyExtractor={item => item.id}
                    />
                  </View>
                  <View style={{marginBottom: 40}}>
                    <View style={styles.BottomButtonModal}>
                      <CustomButton text="Edit listing" />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </Modal>
        </View>
        <View style={{marginHorizontal: 5, marginVertical: 4}}>
          <Modal
            visible={Openmodal}
            animationType="slideInRight"
            transparent={true}>
            <View style={styles.ModalContainer}>
              <View style={styles.ModeView}>
                <View style={styles.ModalTitle}>
                  <Text style={styles.ModalHeading}>
                    Delete this item from folder?
                  </Text>
                  <Entypo
                    onPress={() => setOpenmodal(false)}
                    name="cross"
                    style={{fontSize: 25, color: colors.light_grey}}
                  />
                </View>
                <Text style={styles.ModalParagraph}>
                  Are you sure you want to delete the{' '}
                  <Text style={{fontFamily: 'Lato-Bold', color: colors.black}}>
                    #723DN2{' '}
                  </Text>{' '}
                  item from Salads folder?
                </Text>
                <View style={styles.ModalButtonContainer}>
                  <TouchableOpacity
                    onPress={() => setOpenmodal(false)}
                    style={[{backgroundColor: colors.light_grey}, styles.Buttonss]}>
                    <Text style={styles.DeleteModal}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[{backgroundColor: colors.primary}, styles.Buttonss]}>
                    <Text style={[{color: colors.textWhite}, styles.DeleteModal]}>
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        <View style={{justifyContent: 'center', alignSelf: 'center'}}>
          <SwipeListView
            data={data3}
            renderItem={(data, rowMap) => (
              <View>
                <View style={[styles.render_all_orders, {paddingTop: 5}]}>
                  <View>
                    <CheckBox
                      checked={
                        item.checked == true || item.checked == 'true'
                          ? true
                          : false
                      }
                      onPress={() => setcheck(index)}
                      checkedColor={colors.primary}
                      uncheckedColor={colors.light_grey}
                    />
                  </View>
                  <View
                    style={[
                      styles.render_all_order_single,
                      {width: '10%', marginTop: 5},
                    ]}>
                    <Image
                      source={require('../Assets/image12.png')}
                      style={{
                        height: 45,
                        width: 45,
                        resizeMode: 'contain',
                        borderRadius: 5,
                      }}
                    />
                  </View>
                  <View
                    style={[
                      styles.render_all_order_single,
                      {width: '10%', height: 40},
                    ]}>
                    <Text style={{fontFamily: 'Lato-Regular'}}>
                      Cheesecakes with sour cream and citrus hon
                    </Text>
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
                    <Text style={{fontFamily: 'Lato-Regular'}}>723DN2</Text>
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
                    <Text style={{marginLeft: -15}}>11.14.2021</Text>
                  </View>
                  <View
                    style={[styles.render_all_order_single, {width: '13%'}]}>
                    <Text
                      style={{
                        fontFamily: 'Lato-Regular',
                        alignSelf: 'flex-start',
                        paddingHorizontal: 25,
                      }}>
                      230 g
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.render_all_order_single,
                      {
                        width: '10%',
                      },
                    ]}>
                    <Text style={{fontFamily: 'Lato-Regular'}}>
                      18 portions
                    </Text>
                  </View>
                  <View
                    style={[styles.render_all_order_single, {width: '14%'}]}>
                    <Text style={{fontFamily: 'Lato-Regular'}}>$ 2.50</Text>
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
                              {color: colors.sidebar, fontSize: 20},
                            ]}
                          />
                        </View>
                      </MenuTrigger>
                      <MenuOptions customStyles={{optionText: {padding: 5}}}>
                        <MenuOption
                          onSelect={() => setShowmodal(true)}
                          value="Normal"
                          text="Edit"
                        />
                        <MenuOption value="Normal" text="Freeze Listing" />
                        <MenuOption
                          onSelect={() => setOpenmodal(true)}
                          value="Normal"
                          text="Delete"
                        />
                      </MenuOptions>
                    </Menu>
                  </View>
                </View>
              </View>
            )}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.rowBack}>
                <View
                  style={{
                    position: 'absolute',
                    right: 2,
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    onPress={() => setShowmodal(true)}
                    style={[styles.BackButtons, {backgroundColor: '#F2F4F5'}]}>
                    <Text style={[styles.BackButtonsText, {color: '#000'}]}>
                      Edit
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.BackButtons, {backgroundColor: '#DEEBFF'}]}>
                    <Text style={[styles.BackButtonsText, {color: '#000'}]}>
                      Freeze
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setOpenmodal(true)}
                    style={[styles.BackButtons, {backgroundColor: '#FB5C5C'}]}>
                    <Text style={styles.BackButtonsText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            rightOpenValue={-220}
          />
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
          <Text style={styles.all_orders_heading_txt}>Item ID</Text>
        </View>
        <View style={[styles.all_orders, {width: '12%'}]}>
          <Text style={styles.all_orders_heading_txt}>Last purchase</Text>
        </View>
        <View style={[styles.all_orders, {width: '15%'}]}>
          <Text style={styles.all_orders_heading_txt}>Weight</Text>
        </View>
        <View style={[styles.all_orders, {width: '12%'}]}>
          <Text>On stock</Text>
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
    <View style={{height: '100%', padding: 20, backgroundColor: '#f1f1f1'}}>
      <MenuProvider>
        <View style={{width: '100%', alignSelf: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="keyboard-backspace"
                style={{
                  fontSize: 40,
                  color: colors.black,
                  fontFamily: 'Poppins-Bold',
                }}
              />
              <Text
                style={{
                  fontSize: 25,
                  color: colors.black,
                  fontFamily: 'Poppins-Bold',
                }}>
                Salads
              </Text>
            </TouchableOpacity>
            <SearchBox placeholder="Search" />
            <View style={{right: 10, position: 'relative'}}>
              <CustomButton
                text="Add new item"
                onPress={() => navigation.navigate('ItemCreaterFirstStep')}
              />
              {/* <MultiSelectDropDown/> */}
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.textWhite,
            width: '100%',
            paddingVertical: 12,
            paddingHorizontal: 10,
            elevation: 1,
            borderRadius: 5,
            marginVertical: 10,
          }}>
          <View
            style={{
              width: '98%',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            {header_alloredrs()}
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={data}
              style={{height: 470}}
              renderItem={({item, index}) => render_all_oredrs(item, index)}
            />
          </View>
        </View>
        <View style={styles.pagination_view}>
          <Text style={{fontFamily: 'Lato-Regular'}}>Showing 1-9 of 86</Text>
          <View style={styles.pagination_numbring}>
            <Ionicons
              name="chevron-back"
              style={{color: '#d1d8da', fontSize: 24}}
            />
            <Text style={{fontFamily: 'Lato-Regular', color: colors.black}}>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <MaterialCommunityIcons
              name="chevron-right-circle"
              style={{color: colors.sidebar, fontSize: 24}}
            />
          </View>
        </View>
      </MenuProvider>
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
    backgroundColor: colors.textWhite,
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
    backgroundColor: colors.textWhite,
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
    color: colors.light_grey,
    fontWeight: 'bold',
  },
  order_timer: {
    backgroundColor: colors.orange1,
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
    color: colors.light_grey,
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
    color: colors.textWhite,
    fontSize: 15,
  },
  order_recve_name: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.black,
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
    color: colors.orange1,
  },
  all_orders: {
    backgroundColor: '#F2F4F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  all_orders_header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 50,
    backgroundColor: '#F2F4F5',
    padding: 10,
    marginVertical: 8,
  },
  render_all_orders: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.textWhite,
    // padding: 10
  },
  render_all_order_single: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
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
    backgroundColor: colors.textWhite,
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
    color: colors.black,
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
    color: colors.black,
    fontSize: 15,
  },
  modal_title_first: {
    color: colors.light_grey,
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
    backgroundColor: colors.textWhite,
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
  toast: {
    backgroundColor: colors.textWhite,
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
    // backgroundColor:'red'
  },
  pagination_numbring: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  SwiperTextfg: {
    textAlign: 'center',
    paddingVertical: 3,
    color: colors.black,
    // borderRadius: 5,
  },
  SwiperTextbg: {
    textAlign: 'center',
    // paddingVertical: 3,
    color: colors.textWhite,
    paddingHorizontal: 5,
    paddingVertical: 8,
    fontSize: 16,
  },
  rowBack: {
    height: 55,
    backgroundColor: colors.textWhite,
  },
  BackButtons: {
    height: 60,
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackButtonsText: {
    color: colors.textWhite,
    fontSize: 15,
    fontFamily: 'Lato-Medium',
  },
  ModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // backgroundColor: 'rgba(0,0,0,0.8)'
  },
  ModeView: {
    height: 180,
    width: 410,
    backgroundColor: colors.textWhite,
    borderRadius: 5,
    elevation: 0.2,
  },
  ModalTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 13,
  },
  ModalHeading: {
    color: '#414342',
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
  },
  ModalParagraph: {
    color: colors.sidebar,
    fontFamily: 'Lato-Regular',
    paddingHorizontal: 20,
    fontSize: 15,
    marginVertical: 15,
  },
  ModalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '96%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  Buttonss: {
    width: '45%',
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  DeleteModal: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  ModalContainerPreview: {
    width: '40%',
    height: '100%',
    backgroundColor: colors.textWhite,
    position: 'absolute',
    right: 0,
    paddingVertical: 20,

    // backgroundColor: 'rgba(0,0,0,0.5)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
  CrossPreview: {
    fontSize: 25,
    color: '#000000',
    position: 'absolute',
    right: 15,
    top: 20,
  },
  dropdownbox: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    borderColor: '#f1f1f1',
  },
  ShowmodalOpenButton: {
    height: 30,
    width: 40,
    flexDirection: 'row-reverse',
    width: '100%',
    marginVertical: 5,
    marginRight: -24,
  },
  closeShowmodalicon: {
    fontSize: 30,
    color: colors.black,
  },
  SaveButton: {
    backgroundColor: colors.primary,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 40,
    borderRadius: 5,
  },
  Savetext: {
    color: colors.textWhite,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  ImageMoadalMain: {
    height: 200,
    width: 330,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    zIndex: 0,
    borderRadius: 5,
  },
  IconOnMainImageView: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 220,
    right: 50,
    elevation: 1,
  },
  InnerViewMainImage: {
    backgroundColor: colors.textWhite,
    height: 33,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
    right: 8,
  },
  IconePencilMain: {
    fontSize: 20,
    color: colors.sidebar,
  },
  ModalSubTitle: {
    color: colors.black,
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
  },
  dropDownModalTitle: {
    fontSize: 12,
    fontFamily: 'Lato-Semibold',
    color: colors.black,
    paddingVertical: 4,
  },
  TextInputMAinView: {
    fontFamily: 'Lato-Regular',
    fontSize: 17,
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    color: colors.black,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  CalViewFaltModal: {
    width: '45%',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  CalInputFaltModal: {
    fontSize: 17,
    fontFamily: 'Lato-Regular',
    paddingHorizontal: 8,
    height: 40,
  },
  AddViewModal: {
    color: colors.black,
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    paddingVertical: 10,
  },
  grayViewContainer: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#F2F4F5',
    borderRadius: 5,
    marginBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 8,
  },
  ToppingTitle: {
    fontSize: 14,
    color: colors.black,
    paddingHorizontal: 5,
    width: 280,
    paddingVertical: 4,
  },
  WhitePencilBkgView: {
    backgroundColor: colors.sidebar,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  FlatLettuce: {
    width: '27%',
    marginHorizontal: 3,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: colors.light_grey,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: colors.orange1,
  },
  TextStyleFlatModal: {
    color: colors.sidebar,
    fontFamily: 'Lato-Regular',
  },
  BottomButtonModal: {
    position: 'absolute',
    right: 1,
    bottom: -40,
  },
  dropdownbox1: {
    height: 40,
    width: '100%',
    elevation: 0.7,
    borderRadius: 5,
    borderColor: '#C2CCCF',
    marginVertical: 5,

    borderWidth: 1,
  },
});
