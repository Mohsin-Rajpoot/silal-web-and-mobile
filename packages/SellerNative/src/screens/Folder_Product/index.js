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
  ImageBackground,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import CustomText from '@SilalApp/common/components/CustomText';
import {CheckBox, SearchBar} from 'react-native-elements';
import {CustomButton, SearchBox} from '@SilalApp/common/components/native';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import {SwipeListView} from 'react-native-swipe-list-view';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
// import MultiSelectDropDown from '../../components/MultiSelectDropDown';
import colors from '@SilalApp/common/assets/colors';
import styles from './styles';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import RBSheet from 'react-native-raw-bottom-sheet';
import Svg, {Rect, Path, G} from 'react-native-svg';
import fonts from '@SilalApp/common/assets/fonts';
import MultiSelectDropDown from '@SilalApp/common/components/native/MultipleSelectDrop';
import {useTranslation} from 'react-i18next';
import CustomTextInput from '@SilalApp/common/components/native/TextInput';
import Toast from 'react-native-easy-toast';
import {isTablet} from 'react-native-device-info';

var windowWidth = Dimensions.get('window').width;

export default function Archive_orders({title, navigation}) {
  const [selectedCategory, setselectedCategory] = useState();
  const [selectedCategoryItem, setselectedCategoryItem] = useState();
  const [selectedValues, setSelectedValues] = useState([]);
  const [checked, setchecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [Openmodal, setOpenmodal] = useState(false);
  const [Showmodal, setShowmodal] = useState(false);
  const {t} = useTranslation();
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
  const setcheckMobile = index => {
    const val = data4[index];
    val.checked = !val.checked;
    data4[index] = val;
    setTimeout(() => {
      setData4(data4);
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
  const [data4, setData4] = useState([
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
  ]);

  const toastRef = useRef();
  const showToast = () => {
    return toastRef.current.show(
      <View style={styles.ToastMainView}>
        <Ionicons name="md-checkmark-circle" style={styles.IconToast} />
        <Text style={styles.ToastParagraph}>
          {t('Questionnaire_sent_successfully')}
        </Text>
        <TouchableOpacity
          onPress={() => {
            toastRef.current.close(), alert('undo');
          }}>
          <Text style={styles.ActionToast}>{t('OK')}</Text>
        </TouchableOpacity>
      </View>,
      3000,
    );
  };
  footer = () => {
    return (
      <TouchableOpacity style={styles.headerStyle}>
        <Text style={styles.footerText}>{t('Load_more')}</Text>
      </TouchableOpacity>
    );
  };

  const render_all_oredrs = (item, index) => {
    return (
      <View>
        <View style={styles.modelContainerStyle}>
          <Modal
            visible={Openmodal}
            animationType="slideInRight"
            transparent={true}>
            <View style={styles.ModalContainer}>
              <View style={styles.ModeView}>
                <View style={styles.ModalTitle}>
                  <Text style={styles.ModalHeading}>
                    {t('Delete_this_item_from_folder')}
                  </Text>
                  <Entypo
                    onPress={() => setOpenmodal(false)}
                    name="cross"
                    style={styles.deleteModalCrossIcon}
                  />
                </View>

                <Text style={styles.ModalParagraph}>
                  {t('Are_you_sure_you_want_to_delete_the')}

                  <Text
                    style={{fontFamily: fonts.LatoBold, color: colors.black}}>
                    #723DN2
                  </Text>
                  {t('item_from_Salads_folder')}
                </Text>
                <View style={styles.ModalButtonContainer}>
                  <TouchableOpacity
                    onPress={() => setOpenmodal(false)}
                    style={[
                      {backgroundColor: colors.light_grey},
                      styles.Buttonss,
                    ]}>
                    <Text style={styles.DeleteModal}>{t('Cancel')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      {backgroundColor: colors.primary},
                      styles.Buttonss,
                    ]}>
                    <Text
                      style={[{color: colors.textWhite}, styles.DeleteModal]}>
                      {t('delete')}
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

                      styles.renderAllOrderSingleStyle,
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
                    <Text style={styles.renderAllOrderHerading}>230 g</Text>
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
                        <View style={styles.ThreeDots}>
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
                <View style={styles.SwperHidenView}>
                  <TouchableOpacity
                    onPress={() => setShowmodal(true)}
                    style={[
                      styles.BackButtons,
                      {backgroundColor: colors.dropDownBackground},
                    ]}>
                    <Text
                      style={[styles.BackButtonsText, {color: colors.black}]}>
                      {t('edit')}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.BackButtons,
                      {backgroundColor: colors.light_blue},
                    ]}>
                    <Text
                      style={[styles.BackButtonsText, {color: colors.black}]}>
                      {t('freeze')}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setOpenmodal(true)}
                    style={[
                      styles.BackButtons,
                      {backgroundColor: colors.swiper_red},
                    ]}>
                    <Text style={styles.BackButtonsText}>{t('delete')}</Text>
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
          <Text style={styles.all_orders_heading_txt}> {t('photo')}</Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500, display: 'none'}]
              : styles.all_orders,
            {width: '8%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}>{t('item_name')} </Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500}]
              : styles.all_orders,
            {width: '14%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}>{t('Item_id')} </Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500}]
              : styles.all_orders,
            {width: '12%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}>
            {t('Last_purchase')}{' '}
          </Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500}]
              : styles.all_orders,
            {width: '15%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}>{t('Weight')}</Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500}]
              : styles.all_orders,
            {width: '12%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}> {t('on_stock')}</Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500}]
              : styles.all_orders,
            {width: '14%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}> {t('price')}</Text>
        </View>
        <View
          style={[
            !IsTablet
              ? [styles.all_ordersMobile, {width: 500, display: 'none'}]
              : styles.all_orders,
            {width: '8%'},
          ]}>
          <Text style={styles.all_orders_heading_txt}>{t('Action')}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.Container}>
      <Modal visible={Showmodal} animationType="slide" transparent={true}>
        <View style={styles.ModalContainerPreview1}>
          <View
            style={
              IsTablet
                ? styles.ModalContainerPreview
                : styles.ModalContainerPreviewMobile
            }>
            {IsTablet ? (
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
            ) : (
              <View style={{flexDirection: 'column'}}>
                <TouchableOpacity
                  onPress={() => setShowmodal(false)}
                  style={{flexDirection: 'row', marginHorizontal: 15}}>
                  <MaterialCommunityIcons
                    name="keyboard-backspace"
                    style={styles.backButtonModalArrowmobile}
                  />
                  <Text style={styles.backButtonModalmobile}>
                    {t('Salad with shrimps and..')}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.subHeadingModal}>{t('Salads')}</Text>
              </View>
            )}
            <ScrollView>
              {IsTablet ? (
                <TouchableOpacity style={styles.SaveButton}>
                  <Text style={styles.Savetext}>{t('Save')}</Text>
                </TouchableOpacity>
              ) : null}
              <View
                style={{
                  marginVertical: IsTablet ? '5%' : '3%',
                  marginHorizontal: '10%',
                }}>
                <ImageBackground
                  source={require('../../Assets/image134.png')}
                  style={styles.ImageMoadalMain}>
                  {IsTablet ? (
                    <View style={styles.IconOnMainImageView}>
                      <View style={styles.InnerViewMainImage}>
                        <Octicons
                          name="pencil"
                          style={styles.IconePencilMain}
                        />
                      </View>
                    </View>
                  ) : null}
                </ImageBackground>
              </View>
              {!IsTablet ? (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '90%',
                  }}>
                  <CustomButton
                    containerStyle={styles.ChangePhotoButton}
                    textStyle={{color: colors.black}}
                    text="Change_Photo"
                  />
                  <TouchableOpacity style={styles.ModalButtonMobile}>
                    <Image
                      source={require('../../Assets/li_trash-2.png')}
                      style={styles.DelIcon}
                    />
                  </TouchableOpacity>
                </View>
              ) : null}
              <View style={{marginHorizontal: 40}}>
                <Text style={styles.ModalSubTitle}>{t('Item')}</Text>
                {/* ////// */}
                <View style={{marginTop: '5%'}}>
                  <CustomText
                    label={t('Category')}
                    textStyle={
                      !IsTablet
                        ? styles.formTextHeading
                        : styles.dropDownModalTitle
                    }
                  />
                </View>
                <View
                  style={!IsTablet ? styles.ColorMobileView : styles.ColorView}>
                  <MultiSelectDropDown
                    CustomDropdownStyle={
                      !IsTablet
                        ? styles.DropDownMobileCustom
                        : styles.DropDownCustom
                    }
                  />
                </View>

                {/* /// */}
                <View style={styles.MobileContainerView}>
                  <View style={{flexDirection: 'row'}}>
                    <CustomText
                      label={t('item_name')}
                      textStyle={
                        !IsTablet
                          ? styles.formTextHeading
                          : styles.dropDownModalTitle
                      }
                    />
                  </View>
                  <View>
                    <CustomText
                      label={80 + ' ' + t('Character_left')}
                      textStyle={
                        !IsTablet
                          ? styles.formTextHeading
                          : styles.dropDownModalTitle
                      }
                    />
                  </View>
                </View>
                <View style={{marginBottom: '5%'}}>
                  <CustomTextInput
                    inputTextStyle={{paddingHorizontal: 2}}
                    inputStyle={!IsTablet ? styles.InputCntainerMobile : null}
                    placeholderText={t('item_name')}
                  />
                </View>

                {/* ///////// */}

                <View>
                  <CustomText
                    label={t('Item_Description')}
                    textStyle={
                      !IsTablet
                        ? [styles.formTextHeading, {marginBottom: '3%'}]
                        : styles.dropDownModalTitle
                    }
                  />

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

                <View
                  style={!IsTablet ? styles.ColorMobileView : styles.ColorView}>
                  <CustomText
                    label={t('Allergies')}
                    textStyle={
                      !IsTablet
                        ? [styles.formTextHeading, {marginBottom: '3%'}]
                        : styles.dropDownModalTitle
                    }
                  />
                  <MultiSelectDropDown
                    CustomDropdownStyle={
                      !IsTablet
                        ? styles.DropDownMobileCustom
                        : styles.DropDownCustom
                    }
                  />
                </View>
                <View style={{marginTop: '3%'}}>
                  <CustomText
                    label={t('Nutritional_value')}
                    textStyle={
                      !IsTablet
                        ? [styles.formTextHeading]
                        : styles.dropDownModalTitle
                    }
                  />

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
                <Text style={styles.AddViewModal}>{t('Add_ons')}</Text>
                <View style={styles.grayViewContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.ToppingTitle}>
                      {t('topping')}

                      <Text style={{color: colors.sidebar, fontSize: 13}}>
                        {t('Lettuce_Cheese_Tomatoes_Pickle')}
                      </Text>
                    </Text>
                    {IsTablet ? (
                      <View style={styles.WhitePencilBkgView}>
                        <Foundation
                          name="pencil"
                          style={{fontSize: 20, color: colors.textWhite}}
                        />
                      </View>
                    ) : null}
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
                          {t('Lettuce')}
                        </Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                  />
                </View>
                <View style={styles.grayViewContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.ToppingTitle}>
                      {t('Sauces')}:
                      <Text style={{color: colors.sidebar, fontSize: 13}}>
                        Ketchup, Maynoaise, BBQ
                      </Text>
                    </Text>
                    {IsTablet ? (
                      <View style={styles.WhitePencilBkgView}>
                        <Foundation
                          name="pencil"
                          style={{fontSize: 20, color: colors.textWhite}}
                        />
                      </View>
                    ) : null}
                  </View>

                  <FlatList
                    data={data4}
                    numColumns={3}
                    style={{marginBottom: 10}}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                      <TouchableOpacity style={styles.FlatLettuce}>
                        <Text style={styles.TextStyleFlatModal}>
                          {t('ketchup')}
                        </Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                  />
                </View>
                <View style={[styles.grayViewContainer, {marginBottom: 20}]}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.ToppingTitle}>
                      {t('drinks')}:
                      <Text style={{color: colors.sidebar, fontSize: 13}}>
                        Pepsi, Nestea, Coca-cola, Water, 7UP
                      </Text>
                    </Text>
                    {IsTablet ? (
                      <View style={styles.WhitePencilBkgView}>
                        <Foundation
                          name="pencil"
                          style={{fontSize: 20, color: colors.textWhite}}
                        />
                      </View>
                    ) : null}
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
                  <View>
                    <CustomButton
                      onPress={() => setShowmodal(false)}
                      containerStyle={
                        IsTablet
                          ? styles.BottomButtonModal
                          : styles.BottomButtonModalMobile
                      }
                      text="Edit listing"
                    />
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
              {t('Salads')}
            </Text>
          </TouchableOpacity>

          {IsTablet ? (
            <SearchBox customStyle={{width: '30%'}} placeholder="Search" />
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TextInput type={SearchBar} style={styles.SearchBarStyle} />
              <TouchableOpacity
                onPress={() => navigation.navigate('CreateItems')}
                style={styles.AddButtonModal}>
                
                <Octicons name="plus" style={styles.PlusIcon} />
              </TouchableOpacity>
            </View>
          )}

          {IsTablet ? (
            <View style={{right: 10, position: 'relative'}}>
              <CustomButton
                text={t('add_new_item')}
                containerStyle={styles.AddButtonStyle}
                onPress={() => navigation.navigate('ItemCreaterFirstStep')}
              />
            </View>
          ) : null}
        </View>
      </View>
      {IsTablet ? (
        <View style={styles.TabViewContainer}>
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
            renderItem={({item, index}) => (
              <View style={styles.flatMobileViewe}>
                <View style={styles.mobileContainerSecond}>
                  <View>
                    <CheckBox
                      checked={item.checked == true ? true : false}
                      onPress={() => setcheckMobile(index)}
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
                          backgroundColor: colors.textWhite,
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
                          style={styles.ModalContant}>
                          <Octicons
                            name="pencil"
                            fontSize={15}
                            style={styles.PencilIcon}
                          />
                          <Text>{t('edit')}</Text>
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
                          <Text> {t('freeze')}</Text>
                        </TouchableOpacity>
                        <View style={styles.borderbotomview} />
                        <TouchableOpacity
                          onPress={() => showToast()}
                          style={styles.ModalContant}>
                          <Image
                            source={require('../../Assets/li_trash-2.png')}
                            style={{height: 18, width: 18, marginHorizontal: 8}}
                          />

                          <Text style={{color: '#FF4545CC'}}>
                            {' '}
                            {t('delete')}
                          </Text>
                        </TouchableOpacity>
                        <View style={styles.borderbotomview} />
                      </View>
                    </RBSheet>
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
                  <Text style={{}}>{t('Item_id')}</Text>
                  <Text style={{}}> {t('last')}</Text>
                </View>
                <View style={styles.Oddrow}>
                  <Text style={{}}> {t('Last_purchase')}</Text>
                  <Text style={{}}> {t('last')}</Text>
                </View>
                <View style={styles.EvenRow}>
                  <Text style={{}}> {t('Weight')}</Text>
                  <Text style={{}}> {t('last')}</Text>
                </View>
                <View style={styles.Oddrow}>
                  <Text style={{}}>{t('on_stock')} </Text>
                  <Text style={{}}> {t('last')}</Text>
                </View>
                <View style={styles.EvenRow}>
                  <Text style={{}}> {t('price')}</Text>
                  <Text style={{}}> {t('last ')}</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
          <Toast
            ref={toastRef}
            style={styles.Tost}
            position="top"
            fadeInDuration={750}
            fadeOutDuration={800}
            opacity={1}
            textStyle={{color: 'red'}}
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
