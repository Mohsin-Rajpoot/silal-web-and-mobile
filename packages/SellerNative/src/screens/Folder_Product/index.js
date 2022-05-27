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
  SafeAreaView,
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
import {CheckBox, SearchBar} from 'react-native-elements';
import {
  CustomButton,
  LockOnLandscape,
  SearchBox,
} from '@SilalApp/common/components/native';
import {SwipeListView} from 'react-native-swipe-list-view';
import Octicons from 'react-native-vector-icons/Octicons';
import {Picker} from '@react-native-picker/picker';
import Foundation from 'react-native-vector-icons/Foundation';
// import MultiSelectDropDown from '../../components/MultiSelectDropDown';
import colors from '@SilalApp/common/assets/colors';
import styles from './styles';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
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
                  source={require('../../Assets/image134.png')}
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
                                {color: '#4C6870', fontSize: 20},
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
                      placeholderTextColor="#002733"
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
                            placeholderTextColor="#002733"
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
                        <Text style={{color: '#4C6870', fontSize: 13}}>
                          Lettuce, Cheese, Tomatoes, Pickle
                        </Text>
                      </Text>
                      <View style={styles.WhitePencilBkgView}>
                        <Foundation
                          name="pencil"
                          style={{fontSize: 20, color: '#fff'}}
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
                              color: '#4C6870',
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
                        <Text style={{color: '#4C6870', fontSize: 13}}>
                          Ketchup, Maynoaise, BBQ
                        </Text>
                      </Text>
                      <View style={styles.WhitePencilBkgView}>
                        <Foundation
                          name="pencil"
                          style={{fontSize: 20, color: '#fff'}}
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
                        <Text style={{color: '#4C6870', fontSize: 13}}>
                          Pepsi, Nestea, Coca-cola, Water, 7UP
                        </Text>
                      </Text>
                      <View style={styles.WhitePencilBkgView}>
                        <Foundation
                          name="pencil"
                          style={{fontSize: 20, color: '#fff'}}
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
                    style={{fontSize: 25, color: '#CCD4D6'}}
                  />
                </View>
                <Text style={styles.ModalParagraph}>
                  Are you sure you want to delete the{' '}
                  <Text style={{fontFamily: 'Lato-Bold', color: '#002733'}}>
                    #723DN2{' '}
                  </Text>{' '}
                  item from Salads folder?
                </Text>
                <View style={styles.ModalButtonContainer}>
                  <TouchableOpacity
                    onPress={() => setOpenmodal(false)}
                    style={[{backgroundColor: '#CCD4D6'}, styles.Buttonss]}>
                    <Text style={styles.DeleteModal}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      {backgroundColor: colors.primary},
                      styles.Buttonss,
                    ]}>
                    <Text style={[{color: '#fff'}, styles.DeleteModal]}>
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
                      source={require('../../Assets/image12.png')}
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
                              {color: '#4C6870', fontSize: 20},
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
    <SafeAreaView style={styles.Container}>
      <View style={styles.secondaryContainer}>
        <View
          style={
            IsTablet ? styles.headerComponent : styles.headerComponentMobile
          }>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              style={
                IsTablet
                  ? styles.backButtonpageArrow
                  : styles.backButtonpageArrowmobile
              }
            />
            <Text
              style={
                !IsTablet ? styles.backButtonpagemobile : styles.backButtonpage
              }>
              Salads
            </Text>
          </TouchableOpacity>

          {IsTablet ? (
            <SearchBox customStyle={{width: '30%'}} placeholder="Search" />
          ) : 
            <View style={{flexDirection: 'row'}}>
              <TextInput
                type={SearchBar}
                style={{
                  height: 40,
                  backgroundColor: '#ffffff',
                  borderRadius: 5,
                  elevation: 5,
                  width: 320,
                }}
              />
              <TouchableOpacity onPress={() => navigation.navigate('ItemCreaterFirstStep')} style={{backgroundColor:colors.primary,width:40,height:40,borderRadius:5,overflow:'hidden',marginHorizontal:5}}>
                <Octicons name="plus" style={{fontSize:20,color:'#ffffff',justifyContent:'center',alignSelf:'center',alignItems:'center',paddingVertical:10}} />
                </TouchableOpacity>
            </View>
          
          }

          {IsTablet ? (
            <View style={{right: 10, position: 'relative'}}>
              <CustomButton
                text="Add new item"
                onPress={() => navigation.navigate('ItemCreaterFirstStep')}
              />
              {/* <MultiSelectDropDown/> */}
            </View>
          ) : null}
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          paddingVertical: 12,
          paddingHorizontal: 10,
          elevation: 1,
          borderRadius: 5,
          marginVertical: 10,
        }}>
        <View
          style={{width: '98%', justifyContent: 'center', alignSelf: 'center'}}>
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
    </SafeAreaView>
  );
}
