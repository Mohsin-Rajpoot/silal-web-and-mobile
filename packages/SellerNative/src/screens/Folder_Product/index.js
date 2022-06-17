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
  Dimensions,
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
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import {SwipeListView} from 'react-native-swipe-list-view';
import Octicons from 'react-native-vector-icons/Octicons';

import {Picker} from '@react-native-picker/picker';
import Foundation from 'react-native-vector-icons/Foundation';
// import MultiSelectDropDown from '../../components/MultiSelectDropDown';
import colors from '@SilalApp/common/assets/colors';
import styles from './styles';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import RBSheet from 'react-native-raw-bottom-sheet';
import Svg, {Rect, Path, G} from 'react-native-svg';
import fonts from '@SilalApp/common/assets/fonts';

var windowWidth = Dimensions.get('window').width;

export default function Archive_orders({title, navigation}) {
  const [selectedCategory, setselectedCategory] = useState();
  const [selectedCategoryItem, setselectedCategoryItem] = useState();
  const [selectedValues, setSelectedValues] = useState([]);
  const [checked, setchecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [Openmodal, setOpenmodal] = useState(false);
  const [Showmodal, setShowmodal] = useState(false);

  const Sheet = useRef();
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
  const [check1, setCheck1] = useState(false);
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
  const data5 = [
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

  // const sheet_data = () => {
  //   return (

  //   );
  // };

  footer = () => {
    return (
      <TouchableOpacity style={styles.headerStyle}>
        <Text style={styles.footerText}>Load More</Text>
      </TouchableOpacity>
    );
  };

  const render_all_oredrs = (item, index) => {
    return (
      <View>
        {/* <View style={{marginHorizontal: 5, marginVertical: 4}}>
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
                  <Text style={styles.AddViewModal}>Add-ons</Text>
                  <View style={styles.grayViewContainer}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.ToppingTitle}>
                        Toppings:
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
        </View> */}
        <View style={styles.modelContainerStyle}>
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
                    style={styles.deleteModalCrossIcon}
                  />
                </View>

                <Text style={styles.ModalParagraph}>
                  Are you sure you want to delete the
                  <Text
                    style={{fontFamily: fonts.LatoBold, color: colors.black}}>
                    #723DN2
                  </Text>
                  item from Salads folder?
                </Text>
                <View style={styles.ModalButtonContainer}>
                  <TouchableOpacity
                    onPress={() => setOpenmodal(false)}
                    style={[
                      {backgroundColor: colors.light_grey},
                      styles.Buttonss,
                    ]}>
                    <Text style={styles.DeleteModal}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      {backgroundColor: colors.primary},
                      styles.Buttonss,
                    ]}>
                    <Text
                      style={[{color: colors.textWhite}, styles.DeleteModal]}>
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.SwipeListViewContainer}>
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
                      source={require('../../Assets/image12.png')}
                      style={styles.primaryImageContainer}
                    />
                  </View>
                  <View
                    style={[
                      styles.render_all_order_single,
                      {width: '10%', height: 40},
                    ]}>
                    <Text style={{fontFamily: fonts.LatoRegular}}>
                      Cheesecakes with sour cream and citrus hon
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.render_all_order_single,
                      
                       styles.renderAllOrderSingleStyle
                      
                    ]}>
                    <Text style={{fontFamily: fonts.LatoRegular}}>723DN2</Text>
                  </View>
                  <View
                    style={[
                      styles.render_all_order_single,
                  styles.renderAllOrderSingleSecond,
                    ]}>
                    <Text style={{marginLeft: -15}}>11.14.2021</Text>
                  </View>
                  <View
                    style={[styles.render_all_order_single, {width: '13%'}]}>
                    <Text
                      style={styles.renderAllOrderHerading}>
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
                    <Text style={{fontFamily: fonts.LatoRegular}}>
                      18 portions
                    </Text>
                  </View>
                  <View
                    style={[styles.render_all_order_single, {width: '14%'}]}>
                    <Text style={{fontFamily: fonts.LatoRegular}}>$ 2.50</Text>
                  </View>
                  <View style={[styles.render_all_order_single, {width: '8%'}]}>
                    <Menu>
                      <MenuTrigger style={styles.trigger}>
                        <View
                          style={styles.ThreeDots}>
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
                  style={styles.SwperHidenView}>
                  <TouchableOpacity
                    onPress={() => setShowmodal(true)}
                    style={[
                      styles.BackButtons,
                      {backgroundColor: colors.dropDownBackground},
                    ]}>
                    <Text
                      style={[styles.BackButtonsText, {color: colors.black}]}>
                      Edit
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.BackButtons,
                      {backgroundColor: colors.light_blue},
                    ]}>
                    <Text
                      style={[styles.BackButtonsText, {color: colors.black}]}>
                      Freeze
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setOpenmodal(true)}
                    style={[
                      styles.BackButtons,
                      {backgroundColor: colors.swiper_red},
                    ]}>
                    <Text style={styles.BackButtonsText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            rightOpenValue={-260}
          />
        </View>

        <View
          style={{
            borderBottomWidth: 0.9,
            borderColor: colors.light_grey,
            opacity: 0.5,
          }}
        />
      </View>
    );
  };

  const header_alloredrs = () => {
    return (
      <View
        style={
          !IsTablet ? styles.all_orders_headerMobile : styles.all_orders_header
        }>
        <View
          style={[
            !IsTablet
              ? [
                  styles.all_ordersMobile,
                  {backgroundColor: colors.textWhite, display: 'none'},
                ]
              : styles.all_orders,
            {width: '5%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}></Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {display: 'none'}]
              : styles.all_orders,
            {width: '12%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}>Photo</Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500, display: 'none'}]
              : styles.all_orders,
            {width: '8%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}>Item name</Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500}]
              : styles.all_orders,
            {width: '14%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}>Item ID</Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500}]
              : styles.all_orders,
            {width: '12%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}>Last purchase</Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500}]
              : styles.all_orders,
            {width: '15%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}>Weight</Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500}]
              : styles.all_orders,
            {width: '12%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}>On stock</Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500}]
              : styles.all_orders,
            {width: '14%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}>Price</Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500, display: 'none'}]
              : styles.all_orders,
            {width: '8%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}>Action</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.Container}>
      {/* Delete Modal Blure Start */}

      <CustomModal
        isModalVisible={Openmodal}
        setModalVisible={setOpenmodal}
        modalWrapperStyle={
          !IsTablet
            ? styles.ModalWrapperDeleteMobile
            : styles.ModalWrapperDelete
        }
        modalContainerStyle={{
          borderRadius: 2,
          backgroundColor: colors.textWhite,
        }}>
        <View style={styles.ModalContainer}>
          <View style={styles.ModeViewDeleteMobile}>
            <Text
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                fontSize: 15,
                fontFamily: fonts.bold,
              }}>
              Delete folder?
            </Text>
            <View
              style={!IsTablet ? styles.ModalTitleMobile : styles.ModalTitle}>
              <Text
                style={
                  !IsTablet ? styles.ModalHeadingMobile : styles.ModalHeading
                }>
                Are you sure you want to delete this folder?
              </Text>
            </View>

            <View
              style={
                !IsTablet
                  ? styles.ModalButtonContainerMobile
                  : styles.ModalButtonContainer
              }>
              <TouchableOpacity
                onPress={() => setOpenmodal(false)}
                style={[
                  {backgroundColor: colors.primary},
                  !IsTablet
                    ? styles.ButtonssDeleteMobile
                    : styles.ButtonssDelete,
                ]}>
                <Text style={[{color: colors.textWhite}, styles.DeleteModal]}>
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setOpenmodal(false)}
                style={[
                  {backgroundColor: 'rgba(222, 53, 11, 0.2)'},
                  !IsTablet
                    ? styles.ButtonssDeleteMobile
                    : styles.ButtonssDelete,
                ]}>
                <Text style={[styles.DeleteModal, {color: colors.lightRed}]}>
                  Yes, Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </CustomModal>

      {/* Delete modal blur end */}

      <Modal
        visible={Showmodal}
        animationType="slide"
        transparent={true}
         >
           <View style={styles.ModalContainerPreview1}>
        <View 
          style={
            IsTablet
              ? styles.ModalContainerPreview
              : styles.ModalContainerPreviewMobile
          }>
          <TouchableOpacity
            style={
              !IsTablet
                ? styles.ShowmodalOpenButtonMobile
                : styles.ShowmodalOpenButton
            }>
            <Entypo
              name="cross"
              style={
                IsTablet
                  ? styles.closeShowmodalicon
                  : styles.closeShowmodaliconMobile
              }
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
              <View>
                <Text style={styles.dropDownModalTitle}>Item description</Text>
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
                <Text style={styles.dropDownModalTitle}>Nutritional value</Text>
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
              <Text style={styles.AddViewModal}>Add-ons</Text>
              <View style={styles.grayViewContainer}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.ToppingTitle}>
                    Toppings:
                    <Text style={{color: colors.sidebar, fontSize: 13}}>
                      Lettuce, Cheese, Tomatoes, Pickle
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
                      <Text
                        style={{
                          color: colors.sidebar,
                          fontFamily: fonts.LatoRegular,
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
                    Sauces:
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
        </View>
      </Modal>

      {/* Edit_Modal End */}

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
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TextInput
                type={SearchBar}
                style={{
                  height: 40,
                  backgroundColor: colors.textWhite,
                  borderRadius: 5,
                  elevation: 5,
                  width: '85%',
                }}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('ItemCreaterFirstStep')}
                style={{
                  backgroundColor: colors.primary,
                  width: 40,
                  height: 40,
                  borderRadius: 5,
                  overflow: 'hidden',
                  marginHorizontal: 7,
                }}>
                <Octicons
                  name="plus"
                  style={{
                    fontSize: 20,
                    color: colors.textWhite,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          )}

          {IsTablet ? (
            <View style={{right: 10, position: 'relative'}}>
              <CustomButton
                text="Add new item"
                containerStyle={styles.AddButtonStyle}
                onPress={() => navigation.navigate('ItemCreaterFirstStep')}
              />
              {/* <MultiSelectDropDown/> */}
            </View>
          ) : null}
        </View>
      </View>
      {IsTablet ? (
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
      ) : (
        <View style={styles.MobileViewContainer}>
          <FlatList
            data={data4}
            numColumns={1}
            style={{marginBottom: 90}}
            ListFooterComponent={footer}
            // showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.flatMobileViewe}>
                <View style={styles.mobileContainerSecond}>
                  <View>
                    <CheckBox
                      checked={check1}
                      onPress={() => setCheck1(!check1)}
                      // onPress={() => setShowmodal(!Showmodal)}

                      checkedColor={colors.primary}
                      uncheckedColor={colors.light_grey}
                    />
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => Sheet.current.open()}
                      style={{paddingHorizontal: 15}}>
                      <Entypo
                        name="dots-three-vertical"
                        style={{color: colors.gray, fontSize: 18}}
                      />
                    </TouchableOpacity>
                    <RBSheet
                      ref={Sheet}
                      animationType="slide"
                      closeOnPressMask={true}
                      closeOnDragDown={false}
                      dragFromTopOnly
                      height={windowWidth * 0.8}
                      openDuration={250}
                      customStyles={{
                        container: {
                          // flex:1,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          backgroundColor: '#F8F8F8',
                        },
                      }}>
                      <View style={styles.sheet}>
                        <TouchableOpacity
                          onPress={() => {
                            Sheet.current.close(),
                              setTimeout(() => {
                                setShowmodal(true);
                              }, 1000);
                          }}
                          // onPress={()=>{Sheet.current.close(),setShowmodal(true)}}
                          style={styles.ModalContant}>
                          <Octicons
                            name="pencil"
                            fontSize={15}
                            style={{
                              height: 18,
                              width: 18,
                              marginHorizontal: 10,
                              color: colors.gray,
                            }}
                          />
                          <Text>Edit</Text>
                        </TouchableOpacity>
                        <View style={styles.borderbotomview} />
                        <TouchableOpacity style={styles.ModalContant}>
                          <View style={{marginHorizontal: 8}}>
                            <Svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <Path
                                d="M8.75 1.25C8.75 0.835786 8.41421 0.5 8 0.5C7.58579 0.5 7.25 0.835786 7.25 1.25V3.18936L5.78767 1.72703C5.49478 1.43414 5.01991 1.43414 4.72701 1.72703C4.43412 2.01993 4.43412 2.4948 4.72701 2.78769L7.25 5.31068V7.25H5.31064L2.78767 4.72703C2.49478 4.43414 2.01991 4.43414 1.72701 4.72703C1.43412 5.01993 1.43412 5.4948 1.72701 5.78769L3.18932 7.25H1.25C0.835787 7.25 0.5 7.58579 0.5 8C0.5 8.41421 0.835787 8.75 1.25 8.75H3.18932L1.72702 10.2123C1.43413 10.5052 1.43413 10.9801 1.72702 11.273C2.01992 11.5658 2.49479 11.5658 2.78768 11.273L5.31064 8.75H7.25V10.6893L4.72703 13.2123C4.43413 13.5052 4.43413 13.9801 4.72703 14.273C5.01992 14.5658 5.49479 14.5658 5.78768 14.273L7.25 12.8106V14.75C7.25 15.1642 7.58579 15.5 8 15.5C8.41421 15.5 8.75 15.1642 8.75 14.75V12.8106L10.2123 14.2729C10.5052 14.5658 10.9801 14.5658 11.273 14.2729C11.5658 13.98 11.5658 13.5051 11.273 13.2122L8.75 10.6893V8.75H10.6894L13.2123 11.2729C13.5052 11.5658 13.9801 11.5658 14.273 11.2729C14.5658 10.98 14.5658 10.5051 14.273 10.2122L12.8107 8.75H14.75C15.1642 8.75 15.5 8.41421 15.5 8C15.5 7.58579 15.1642 7.25 14.75 7.25H12.8107L14.273 5.78778C14.5658 5.49488 14.5658 5.02001 14.273 4.72712C13.9801 4.43422 13.5052 4.43422 13.2123 4.72712L10.6894 7.25H8.75V5.31073L11.273 2.78776C11.5659 2.49487 11.5659 2.02 11.273 1.7271C10.9801 1.43421 10.5052 1.43421 10.2123 1.7271L8.75 3.18941V1.25Z"
                                fill={colors.light_grey}
                              />
                            </Svg>
                          </View>
                          <Text>Freez</Text>
                        </TouchableOpacity>
                        <View style={styles.borderbotomview} />
                        <TouchableOpacity
                          onPress={
                            () => {
                              Sheet.current.close(),
                                setTimeout(() => {
                                  setOpenmodal(!Openmodal);
                                }, 1000);
                            }
                            // () => setOpenmodal(!Openmodal)
                          }
                          style={styles.ModalContant}>
                          <Image
                            source={require('../../Assets/li_trash-2.png')}
                            style={{height: 18, width: 18, marginHorizontal: 8}}
                          />

                          <Text style={{color: '#FF4545CC'}}>Delete</Text>
                        </TouchableOpacity>
                        <View style={styles.borderbotomview} />
                      </View>
                    </RBSheet>
                    {/* <Menu>
                      <MenuTrigger style={styles.trigger}>
                        <View style={styles.tyrigerIcon}>
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
                    </Menu> */}
                  </View>
                </View>
                <View
                  style={{
                    borderBottomWidth: 2,
                    borderBottomColor: colors.light_grey,
                  }}
                />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={styles.manuImage}
                    source={require('../../Assets/image134.png')}
                  />
                  <Text style={styles.ProductDiscription}>
                    Salad with shrimps and avocado
                  </Text>
                </View>
                <View style={styles.EvenRow}>
                  <Text style={{}}>item id</Text>
                  <Text style={{}}>last</Text>
                </View>
                <View style={styles.Oddrow}>
                  <Text style={{}}>Last purchase</Text>
                  <Text style={{}}>last</Text>
                </View>
                <View style={styles.EvenRow}>
                  <Text style={{}}>Weight</Text>
                  <Text style={{}}>last</Text>
                </View>
                <View style={styles.Oddrow}>
                  <Text style={{}}>On stock</Text>
                  <Text style={{}}>last</Text>
                </View>
                <View style={styles.EvenRow}>
                  <Text style={{}}>Price</Text>
                  <Text style={{}}>last</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      )}
      {IsTablet ? (
        <View style={styles.pagination_view}>
          <Text style={{fontFamily: fonts.LatoRegular}}>Showing 1-9 of 86</Text>
          <View style={styles.pagination_numbring}>
            <Ionicons
              name="chevron-back"
              style={{color: '#d1d8da', fontSize: 24}}
            />
            <Text style={{fontFamily: fonts.LatoRegular, color: colors.black}}>
              1
            </Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <MaterialCommunityIcons
              name="chevron-right-circle"
              style={{color: colors.sidebar, fontSize: 24}}
            />
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
}
