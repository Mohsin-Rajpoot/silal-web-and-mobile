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

import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import fonts from '@SilalApp/common/assets/fonts';

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
    <SafeAreaView style={{backgroundColor: '#E5E5E5'}}>
      <View style={styles.container}>
        <View style={styles.Header_View}>
          <Text style={styles.Title_Header}>{t('products')}</Text>
          <SearchBox placeholder={t('Search')} />
          <View style={{right: 17}}>
            <CustomButton text={t('add_new_item')} />
          </View>
        </View>
        <View>
          <FlatList
            data={data}
            numColumns={4}
            style={{marginBottom: 20, height: 300}}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View style={styles.mainViewBoxStyle}>
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
                  <Text style={styles.BoxTitleText}>{t('Burger')}</Text>
                  <Text style={styles.TotleItem}>8 {t('items')}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
          {/* Edit Model */}

          <CustomModal
            isModalVisible={contactModal}
            setModalVisible={setContactModal}
            modalWrapperStyle={{
              marginLeft: '60%',
              justifyContent: 'flex-start',
              marginHorizontal: width(0),
              marginVertical: height(0),
              padding: 10,
              // backgroundColor:'red'
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
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

            <View>
              <Image
                source={require('../Assets/MaskGroup.png')}
                style={styles.ImageMoadalMain}
              />
              <View style={styles.ImagebottomModal}>
                <Ionicons
                  name="md-image"
                  color="#fff"
                  style={{
                    fontSize: 35,
                    paddingVertical: 2,
                    marginHorizontal: 5,
                  }}
                />
                <Text style={styles.modelimageoverly}>
                  Change cover picture
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'row',
                width: '95%',
              }}>
              <Text style={styles.TitleModelInput}>Folder name</Text>
            </View>
            <TextInput
              style={styles.InputModel}
              placeholderTextColor="#002733"
              placeholder="Salads"
            />

            {/* <TouchableOpacity
                style={{
                  backgroundColor: colors.primary,
                  width: 350,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  height: 40,
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    fontSize: 16,
                    fontFamily: fonts.PoppinsSemiBold,
                  }}>
                  Save changes
                </Text>
              </TouchableOpacity> */}
          </CustomModal>

          {/* Edit Model end */}
          
 
            
          {/* Blure Dell Model */}
          <CustomModal
            isModalVisible={Openmodal}
            setModalVisible={setOpenmodal}
            modalWrapperStyle={{
              marginHorizontal: width(30),
              marginVertical: height(37),
              
            }}
            modalContainerStyle={{
              borderRadius: 2,
              backgroundColor: 'white',
            }}>
             <View style={styles.ModalContainer}>
                <View style={styles.ModeView}>
                  <View style={styles.ModalTitle}>
                    <Text style={styles.ModalHeading}>
                      Are you sure you want to delete this folder?
                    </Text>
                    <Entypo
                      onPress={() => setOpenmodal(false)}
                      name="cross"
                      style={{fontSize: 25, color: '#CCD4D6'}}
                    />
                  </View>

                  <View style={styles.ModalButtonContainer}>
                    <TouchableOpacity
                      onPress={() => setOpenmodal(false)}
                      style={[
                        {backgroundColor: colors.primary},
                        styles.Buttonss,
                      ]}>
                      <Text style={[{color: '#fff'}, styles.DeleteModal]}>
                        Cancel
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setOpenmodal(false)}
                      style={[
                        {backgroundColor: 'rgba(222, 53, 11, 0.2)'},
                        styles.Buttonss,
                      ]}>
                      <Text style={[styles.DeleteModal, {color: '#DE350B'}]}>
                        Yes, Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
          </CustomModal>
          {/* Delete Model */}
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: '23%',
              backgroundColor: '#FFFFFF',
              marginHorizontal: 10,
              left: -10,
              elevation: 1,
              borderRadius: 5,
              height: 130,
            }}>
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
                style={{color: '#CCD4D6', fontSize: 20, paddingVertical: 10}}>
                {t('Add_category')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/*  */}
        <View>
          <FlatList
            data={data1}
            numColumns={4}
            style={{marginBottom: 20, height: 300}}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[styles.mainViewBoxStyle, {backgroundColor: '#F2F4F5'}]}>
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
                  <Text style={[styles.BoxTitleText, {width: 130}]}>
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
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    width: '94%',
    alignSelf: 'center',
    backgroundColor: '#E5E5E5',
  },
  Header_View: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  Title_Header: {
    fontFamily: 'Poppins-Bold',
    color: '#002733',
    fontSize: 25,
  },
  mainViewBoxStyle: {
    width: '23%',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    left: -10,
    marginVertical: 10,
    elevation: 1,
    borderRadius: 5,
    height: 130,
  },
  containerText: {
    flexDirection: 'column',
    // backgroundColor:'green',
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  BoxTitleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    color: '#002733',
  },
  TotleItem: {
    color: '#CCD4D6',
    fontSize: 13,
    fontFamily: 'Lato-Regular',
  },
  render_all_order_single: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  cross_icon: {
    color: '#CCD4D6',
    fontSize: 16,
  },
  TitleModal: {
    fontSize: 15,
    color: '#002733',
    fontFamily: fonts.PoppinsMedium,
    fontSize: 19,
  },
  ModalContainerPreview: {
    width: '40%',
    // height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    // paddingVertical: 20,
    //  shadowColor: '#000',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 1,
  },
  ShowmodalOpenButton: {
    height: 30,
    width: 40,
    marginVertical: 5,
  },
  closeShowmodalicon: {
    fontSize: 20,
    color: '#002733',
  },

  ImageMoadalMain: {
    height: 250,
    width: 350,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    zIndex: 0,
    borderRadius: 5,
    // alignItems:'center'
  },

  ModalSubTitle: {
    color: '#002733',
    fontSize: 17,
    fontFamily: fonts.PoppinsSemiBold,
  },
  ImagebottomModal: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    width: 350,
    zIndex: 1,
    marginTop: -77,
    height: 40,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginHorizontal: 30,
    flexDirection: 'row',
    // backgroundColor: 'transparent'
  },
  modelimageoverly: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  TitleModelInput: {
    color: '#002733',
    fontSize: 15,
    fontFamily: fonts.LatoMedium,
    marginVertical: 10,
    justifyContent: 'flex-start',
  },
  InputModel: {
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    width: 350,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
  ModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // backgroundColor: 'rgba(0,0,0,0.8)'
  },
  ModeView: {
    height: 160,
    width: 410,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 0.2,
  },
  ModalTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  ModalHeading: {
    color: '#414342',
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
  },
  ModalParagraph: {
    color: '#4C6870',
    fontFamily: 'Lato-Regular',
    paddingHorizontal: 20,
    fontSize: 15,
    marginVertical: 15,
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
  ModalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '96%',
    alignSelf: 'center',
    paddingVertical: 40,
  },
});
