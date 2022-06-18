import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '@SilalApp/common/assets/colors';
import CustomText from '@SilalApp/common/components/CustomText';
import {Icon, CheckBox} from 'react-native-elements';
import styles from './styles';
import {
  CustomButton,
  LockOnLandscape,
  SearchBox,
} from '@SilalApp/common/components/native';
import Svg, {Circle, Path} from 'react-native-svg';
import {useTranslation} from 'react-i18next';
import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import fonts from '@SilalApp/common/assets/fonts';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const Products = ({navigation}) => {
  const {t} = useTranslation();
  const [selected_index, set_selected_index] = useState('');
  const [Showmodal, setShowmodal] = useState(false);
  const [Openmodal, setOpenmodal] = useState(false);

  const [contactModal, setContactModal] = useState(false);

  const data = [
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
    {
      id: '4',
      Identity: '#032DfA',
      order1: 'French Fries',
      order2: 'Cheasecake with sour cream and citrus honey',
      Code: '14.11.2021 13:38',
    },
    {
      id: '5',
      Identity: '#042WEA',
      order1: 'French Fries',
      order2: 'Cheasecake with sour cream and citrus honey',
      Code: '14.11.2021 13:38',
    },
    {
      id: '6',
      Identity: '#042WEA',
      order1: 'French Fries',
      order2: 'Cheasecake with sour cream and citrus honey',
      Code: '14.11.2021 13:38',
    },
    {
      id: '7',
      Identity: '#032DfA',
      order1: 'French Fries',
      order2: 'Cheasecake with sour cream and citrus honey',
      Code: '14.11.2021 13:38',
    },
    {
      id: '8',
      Identity: '#042WEA',
      order1: 'French Fries',
      order2: 'Cheasecake with sour cream and citrus honey',
      Code: '14.11.2021 13:38',
    },
  ];

  const data1 = [
    {
      id: '1',
      Quantity: '5 items',
      Title: t('Drafts'),
    },

    {
      id: '2',
      Quantity: '5 items',
      Title: t('listing_template'),
    },
    {
      id: '3',
      Quantity: '5 items',
      Title: t('customization_temp'),
    },
  ];
  const data4 = [
    {
      id: '1',
      Quantity: '5 items',
      Title: t('Drafts'),
    },

    {
      id: '2',
      Quantity: '5 items',
      Title: t('listing_template'),
    },
    {
      id: '3',
      Quantity: '5 items',
      Title: t('customization_temp'),
    },
  ];

  return (
    <SafeAreaView style={{backgroundColor: colors.white}}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialCommunityIcons
          name="menu"
          size={moderateScale(!IsTablet ? 26 : 22)}
          style={{marginTop: 10, marginHorizontal: 15}}
        />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={!IsTablet ? styles.Header_ViewMobile : styles.Header_View}>
            <Text
              style={
                !IsTablet ? styles.Title_HeaderMobile : styles.Title_Header
              }>
              {t('products')}
            </Text>
            <SearchBox placeholder={t('Search')} />
            <View
              style={
                IsTablet ? styles.headerButton : styles.headerButtonMobile
              }>
              <CustomButton text={t('add_new_item')} />
            </View>
          </View>
          <View
            style={!IsTablet ? styles.headermbilemargin : styles.headermargin}>
            <FlatList
              data={data}
              numColumns={!IsTablet == true ? '2' : '4'}
              style={{marginBottom: 20}}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <View
                  style={
                    IsTablet
                      ? styles.mainViewBoxStyle
                      : styles.mainViewBoxStyleMobile
                  }>
                  <View style={styles.render_all_order_single}>
                    <Menu>
                      <MenuTrigger
                        onPress={() => {
                          set_selected_index(index);
                        }}>
                        <View style={{}}>
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
                          onSelect={() => setContactModal(!contactModal)}
                          activeOpacity={0.6}
                          value="Normal"
                          text="Edit"
                        />
                        <MenuOption
                          onSelect={() => setOpenmodal(true)}
                          value="Normal"
                          text="Delete folder"
                        />
                      </MenuOptions>
                    </Menu>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Folder_Product')}
                    style={styles.containerText}>
                    <Text
                      style={
                        !IsTablet
                          ? styles.BoxTitleTextMobile
                          : styles.BoxTitleText
                      }>
                      {t('Burger')}
                    </Text>
                    <Text style={styles.TotleItem}>8 {t('items')}</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.id}
            />
            <View>
              <CustomModal
                isModalVisible={contactModal}
                setModalVisible={setContactModal}
                modalWrapperStyle={
                  !IsTablet ? styles.WrapperModalMobile : styles.WrapperModal
                }>
                <View
                  style={
                    !IsTablet
                      ? styles.EditModalHeaderMobile
                      : styles.EditModalHeader
                  }>
                  <CustomText
                    label={t('Edit Folder')}
                    textStyle={styles.notesTitle}
                  />
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setContactModal(false)}>
                    <Icon
                      name="cross"
                      type="entypo"
                      size={24}
                      style={{alignSelf: 'flex-end'}}
                    />
                  </TouchableOpacity>
                </View>

                <Image
                  source={require('../../Assets/editmodal.png')}
                  style={
                    !IsTablet
                      ? styles.ImageMoadalMainMobile
                      : styles.ImageMoadalMain
                  }
                />
                <View
                  style={
                    !IsTablet
                      ? styles.ImagebottomModalMobile
                      : styles.ImagebottomModal
                  }>
                  <Ionicons
                    name="md-image"
                    color="#fff"
                    style={{
                      fontSize: 35,
                      paddingVertical: 2,
                      marginHorizontal: 5,
                    }}
                  />
                  <CustomText
                    label={t('Change cover picture')}
                    textStyle={styles.modelimageoverly}
                  />
                  {/* <Text style={styles.modelimageoverly}>
                    Change cover picture
                  </Text> */}
                </View>

                <View
                  style={
                    !IsTablet ? styles.NameFolderMobile : styles.NameFolder
                  }>
                  <CustomText
                    label={t('Folder_name')}
                    textStyle={
                      !IsTablet
                        ? styles.TitleModelInputMobile
                        : styles.TitleModelInput
                    }
                  />
                  {/* <Text
                    style={
                      !IsTablet
                        ? styles.TitleModelInputMobile
                        : styles.TitleModelInput
                    }>
                    Folder name
                  </Text> */}
                </View>
                <TextInput
                  style={
                    !IsTablet ? styles.InputModelMobile : styles.InputModel
                  }
                  placeholderTextColor="#002733"
                  placeholder="Salads"
                />
                <View style={{flexDirection: 'row'}}>
                  <View>
                    {/* <TouchableOpacity
                      style={[
                        {backgroundColor: colors.light_grey},
                        !IsTablet
                          ? styles.saveButtoneditModalMobile
                          : styles.saveButtoneditModal,
                      ]}>
                      <CustomText
                        label={t('Cancel')}
                        textStyle={[
                          {color: '#4C7061'},
                          !IsTablet
                            ? styles.saveButtonTextMobile
                            : styles.saveButtonText,
                        ]}
                      /> */}
                      {/* <Text
                        style={[
                          {color: '#4C7061'},
                          !IsTablet
                            ? styles.saveButtonTextMobile
                            : styles.saveButtonText,
                        ]}>
                        Cancel
                      </Text> */}
                    {/* </TouchableOpacity> */}
                  </View>
                  <View>
                    {/* <TouchableOpacity
                      style={[
                        {backgroundColor: colors.primary},
                        !IsTablet
                          ? styles.saveButtoneditModalMobile
                          : styles.saveButtoneditModal,
                      ]}>
                      <CustomText
                        label={t('Save_changes')}
                        textStyle={
                          !IsTablet
                            ? styles.saveButtonTextMobile
                            : styles.saveButtonText
                        }
                      /> */}
                      {/* <Text
                        style={
                          !IsTablet
                            ? styles.saveButtonTextMobile
                            : styles.saveButtonText
                        }>
                        Save changes
                      </Text> */}
                    {/* </TouchableOpacity> */}
                  </View>
                </View>
              </CustomModal>
            </View>
            {/* Edit Model end */}

            {/* Blure Dell Model */}
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
                backgroundColor: 'white',
              }}>
              <View style={styles.ModalContainer}>
                <View style={styles.ModeView}>
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
                    style={
                      !IsTablet ? styles.ModalTitleMobile : styles.ModalTitle
                    }>
                    <CustomText
                      label={t('Are_you_sure_you_want_to_delete_this_folder')}
                      textStyle={
                        !IsTablet
                          ? styles.ModalHeadingMobile
                          : styles.ModalHeading
                      }
                    />
                    {/* <Text
                      style={
                        !IsTablet
                          ? styles.ModalHeadingMobile
                          : styles.ModalHeading
                      }>
                      Are you sure you want to delete this folder?
                    </Text> */}
                    <Entypo
                      onPress={() => setOpenmodal(false)}
                      name="cross"
                      style={
                        !IsTablet ? styles.deleteCloseMbile : styles.deleteClose
                      }
                    />
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
                      <CustomText
                        label={t('Cancel')}
                        textStyle={[
                          {color: colors.textWhite},
                          styles.DeleteModal,
                        ]}
                      />
                      {/* <Text style={[{color:colors.textWhite}, styles.DeleteModal]}>
                        Cancel
                      </Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setOpenmodal(false)}
                      style={[
                        {backgroundColor: 'rgba(222, 53, 11, 0.2)'},
                        !IsTablet
                          ? styles.ButtonssDeleteMobile
                          : styles.ButtonssDelete,
                      ]}>
                      <CustomText
                        label={t('Yes_Delete')}
                        textStyle={[styles.DeleteModal, {color: '#DE350B'}]}
                      />

                      {/* <Text style={[styles.DeleteModal, {color: '#DE350B'}]}>
                        Yes, Delete
                      </Text> */}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </CustomModal>
            {/* Delete Model */}
          </View>
          <View>
            <TouchableOpacity
              style={!IsTablet ? styles.AddCategoryMobile : styles.AddCategory}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                }}>
                <Svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M20.28 12.2H12.34V20.58H8.84V12.2H0.94V8.96H8.84V0.599998H12.34V8.96H20.28V12.2Z"
                    fill="#CCD4D6"
                  />
                </Svg>
                <Text
                  style={!IsTablet ? styles.CategoryMobile : styles.Category}>
                  {t('Add_category')}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={data1}
              numColumns={!IsTablet ? '2' : '4'}
              style={{marginBottom: 20}}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={
                    !IsTablet
                      ? styles.BottomBoxContainerMobile
                      : styles.BottomBoxContainer
                  }>
                  <View style={{position: 'absolute', right: 7, top: 10}}>
                    <Svg
                      width="4"
                      height="14"
                      viewBox="0 0 4 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <Path
                        d="M0.332682 7.00065C0.332682 7.92113 1.07887 8.66732 1.99935 8.66732C2.91982 8.66732 3.66602 7.92113 3.66602 7.00065C3.66602 6.08018 2.91982 5.33398 1.99935 5.33398C1.07887 5.33398 0.332682 6.08018 0.332682 7.00065Z"
                        fill="#CCD4D6"
                      />
                      <Path
                        d="M0.332682 2.00065C0.332682 2.92113 1.07887 3.66732 1.99935 3.66732C2.91982 3.66732 3.66602 2.92113 3.66602 2.00065C3.66602 1.08018 2.91982 0.333984 1.99935 0.333984C1.07887 0.333984 0.332682 1.08018 0.332682 2.00065Z"
                        fill="#CCD4D6"
                      />
                      <Path
                        d="M0.332682 12.0007C0.332682 12.9211 1.07887 13.6673 1.99935 13.6673C2.91982 13.6673 3.66602 12.9211 3.66602 12.0007C3.66602 11.0802 2.91982 10.334 1.99935 10.334C1.07887 10.334 0.332682 11.0802 0.332682 12.0007Z"
                        fill="#CCD4D6"
                      />
                    </Svg>
                  </View>
                  <View style={styles.containerText}>
                    <Text
                      style={
                        !IsTablet
                          ? [styles.BoxTitleTextMobile, {width: 130}]
                          : styles.BoxTitleText
                      }>
                      {item.Title}
                    </Text>
                    <Text style={styles.TotleItem}>{item.Quantity}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Products;
