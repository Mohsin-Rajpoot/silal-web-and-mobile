import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  TextInput,
} from 'react-native';
import Current_orders from './Current/Current_orders';
import Pre_orders from './Pre_orders';
import Archive_orders from './Archive/Archive_orders';
import PagerView from 'react-native-pager-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import CommonTab from '../../components/CommonTab';
import {Icon, CheckBox} from 'react-native-elements';
import Accepted from './molecule/Accepted';

import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';

import colors from '@SilalApp/common/assets/colors/index';
import SellerTools from './molecule/SellerTools';
import fonts from '@SilalApp/common/assets/fonts/index';
import DaySelect from '../../components/DaySelection';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import Timer from '../../components/Timer';
import Toast from 'react-native-easy-toast';
import CustomText from '@SilalApp/common/components/CustomText';
import {CustomButton} from '@SilalApp/common/components/native';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import ItemDetail from './molecule';
import {SwipeListView} from 'react-native-swipe-list-view';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
const Order = ({navigation}) => {
  const {t} = useTranslation();
  const toastRef = useRef();
  // const [Statistic, setStatistic] = useState(true);
  // const [Reviews, setReviews] = useState(false);
  // const [Outofstock, setOutofstack] = useState(false);
  // const [order_state, set_order_state] = useState('current');
  // const [current_order_state, set_current_order_state] = useState(true);
  // const [pre_order_state, set_pre_order_state] = useState(false);
  // const [archive_order_state, set_archive_order_state] = useState(false);
  const [modal, setModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [order_state, set_order_state] = useState('current');
  const [activeShift, setActiveShift] = useState(false);
  // const [shiftModal, setShiftModal] = useState(activeShift);
  const [noteModal, setNoteModal] = useState(false);
  const [addNote, setAddNote] = useState(2);
  const [check, setcheck] = useState(0);

  const ref = useRef(null);
  const tabs = ['Current orders', 'Pre-orders', 'Archive'];
  const [page, setPage] = useState(0);
  const data = [
    {
      id: 0,
      name: 'Mans T-shirt',
      type: 'Clothing',
      quantity: 3,
      status: 'Low of stock',
      price: '$ 120.00',
    },
    {
      id: 1,
      name: 'Mans T-shirt',
      type: 'Clothing',
      quantity: 3,
      status: 'Low of stock',
      price: '$ 120.00',
    },
    {
      id: 2,
      name: 'Mans T-shirt',
      type: 'Clothing',
      quantity: 3,
      status: 'Low of stock',
      price: '$ 120.00',
    },
    {
      id: 3,
      name: 'Mans T-shirt',
      type: 'Clothing',
      quantity: 3,
      status: 'Low of stock',
      price: '$ 120.00',
    },
    {
      id: 4,
      name: 'Mans T-shirt',
      type: 'Clothing',
      quantity: 3,
      status: 'Low of stock',
      price: '$ 120.00',
    },
  ];
  const data3 = [{id: 1}];
  const onChangeTab = page => {
    ref?.current?.setPageWithoutAnimation(page);
    setPage(page);
  };

  // const tabclick = (x_value, state) => {
  //   scrollref.current.scrollTo({x: width * x_value});
  //   if (x_value == '0') {
  //     set_current_order_state(true);
  //     set_archive_order_state(false);
  //     set_pre_order_state(false);
  //   } else if (x_value == '1') {
  //     set_current_order_state(false);
  //     set_pre_order_state(true);
  //     set_archive_order_state(false);
  //   } else if (x_value == '2') {
  //     set_current_order_state(false);
  //     set_pre_order_state(false);
  //     set_archive_order_state(true);
  //   }
  // };
  const Header = () => {
    return (
      // <View style={{ paddingVertical: 15,flex:1, flexDirection: 'row',}}>
      //   <TouchableOpacity onPress={()=>set_order_state('current')}  style={[styles.order_button,{backgroundColor:order_state=='current'? '#5AB3A8':null,width:200}]}>
      //     <Text style={[styles.order_button_text,{color:order_state=='current'?'white':'#4C6870'}]}>Current orders</Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity onPress={()=>set_order_state('preorder')}  style={[styles.order_button,{backgroundColor:order_state=='preorder'? '#5AB3A8':null,width:200}]}>
      //     <Text style={[styles.order_button_text,{color:order_state=='preorder'?'white':'#4C6870'}]}>Pre-orders <Text style={{color:'#CCD4D6',}}>(8)</Text></Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity onPress={()=>set_order_state('archive')}  style={[styles.order_button,{backgroundColor:order_state=='archive'? '#5AB3A8':null,width:120}]}>
      //     <Text style={[styles.order_button_text,{color:order_state=='archive'?'white':'#4C6870'}]}>Archive</Text>
      //   </TouchableOpacity>
      // </View>
      <View
        style={{
          paddingVertical: 5,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          // backgroundColor:'red',
          // width:'10%'
        }}>
        <CommonTab tabs={tabs} page={page} onChangeTab={onChangeTab} />
        {IsTablet && (
          <View style={styles.sideTabContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setNoteModal(!noteModal)}>
              <View style={styles.tabNewItemsContainer}>
                <Icon
                  name="pluscircle"
                  type="antdesign"
                  size={18}
                  color={colors.primary}
                />
                <Text style={styles.noteText}>{t('Note')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setModal(!modal)}>
              <View style={styles.tabNewItemsContainer}>
                <Icon
                  name="timer"
                  type="material-community"
                  size={18}
                  color={colors.primary}
                />
                <Text style={styles.noteText}>40 MIN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setContactModal(!contactModal)}>
              <View style={styles.tabNewItemsContainer}>
                <Icon
                  name="exclamationcircle"
                  type="antdesign"
                  size={18}
                  color={colors.textPrimaryBlur}
                  style={styles.cautionIcon}
                />
              </View>
            </TouchableOpacity>
            <DaySelect
              day={t('Start_shift')}
              containerStyle={styles.shiftContainer}
              buttonSize={'large'}
              textStyle={styles.textStyleShift}
              activelabel={t('End_shift')}
              state={activeShift}
              setState={setActiveShift}
            />
          </View>
        )}
        {/* <TouchableOpacity
          onPress={() => tabclick('0', 'current')}
          style={[
            styles.order_button,
            {
              backgroundColor: current_order_state == true ? '#5AB3A8' : null,
              width: 200,
            },
          ]}>
          <Text
            style={[
              styles.order_button_text,
              {color: current_order_state == true ? 'white' : '#4C6870'},
            ]}>
            {t('current-order')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => tabclick('1', 'preorder')}
          style={[
            styles.order_button,
            {
              backgroundColor: pre_order_state == true ? '#5AB3A8' : null,
              width: 200,
            },
          ]}>
          <Text
            style={[
              styles.order_button_text,
              {color: pre_order_state == true ? 'white' : '#4C6870'},
            ]}>
            {t('pre-orders')} <Text style={{color: '#CCD4D6'}}>(8)</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => tabclick('2', 'archive')}
          style={[
            styles.order_button,
            {
              backgroundColor: archive_order_state == true ? '#5AB3A8' : null,
              width: 120,
            },
          ]}>
          <Text
            style={[
              styles.order_button_text,
              {color: archive_order_state == true ? 'white' : '#4C6870'},
            ]}>
            {t('Archive')}
          </Text>
        </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center', height: !IsTablet ? '10%' :'12%'}}>
        <View style={{padding: 5}}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons
              name="reorder-horizontal"
              size={verticalScale(22)}
              style={{marginLeft: 10}}
              color={'#000000'}
            />
          </TouchableOpacity>
        </View>

        {Header()}
      </View>

      <View style={{flex: 1}}>
        <PagerView
          style={{flex:1}}
          initialPage={0}
          // scrollEnabled={false}
          ref={ref}>
          <View key={'1'}>
            <Current_orders title="Received" navigation={navigation} />
          </View>
          <View key={'2'}>
            <Pre_orders />
          </View>
          <View key={'3'}>
            <Archive_orders navigation={navigation} />
          </View>
        </PagerView>
      </View>
      <CustomModal
        isModalVisible={modal}
        setModalVisible={setModal}
        modalWrapperStyle={{
          marginHorizontal: width(25),
          marginVertical: height(30),
          justifyContent: 'center',
        }}
        modalContainerStyle={{
          borderRadius: 2,
          backgroundColor: 'white',
        }}>
        <Timer label={t('deliveryEstimateTime')} />
      </CustomModal>
      <CustomModal
        isModalVisible={contactModal}
        setModalVisible={setContactModal}
        modalWrapperStyle={{
          marginHorizontal: width(30),
          marginVertical: height(32),
        }}
        modalContainerStyle={{
          borderRadius: 2,
          backgroundColor: 'white',
        }}>
        <View style={{marginHorizontal: 10}}>
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
          <View>
            <CustomText
              label={t('Customer_Support')}
              textStyle={styles.headingCustomerSupport}
            />
            <CustomText
              label={t('Customer_SupportDetail')}
              textStyle={styles.headingCustomerSupportDetail}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 25}}>
              <View style={styles.maiLContainer}>
                <Icon
                  name="mail"
                  type="entypo"
                  size={26}
                  color={colors.primary}
                />
              </View>
              <View style={{marginHorizontal: 10}}>
                <CustomText label={t('email')} textStyle={styles.mailText} />
                <CustomText
                  label={'customer.suppor@silal.com'}
                  textStyle={styles.mail}
                />
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row', marginTop: 25}}>
                <View style={styles.maiLContainer}>
                  <Icon
                    name="phone"
                    type="fontawesome"
                    size={26}
                    color={colors.primary}
                  />
                </View>
                <View style={{marginHorizontal: 10}}>
                  <CustomText
                    label={t('Contact_number')}
                    textStyle={styles.mailText}
                  />
                  <CustomText
                    label={'(202) 398 0202'}
                    textStyle={styles.mail}
                  />
                  <CustomText
                    label={'(202) 398 0202'}
                    textStyle={styles.mail}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </CustomModal>

      <CustomModal
        isModalVisible={activeShift}
        setModalVisible={setActiveShift}
        modalWrapperStyle={{
          marginHorizontal: width(15),
          marginVertical: height(10),
          justifyContent: 'flex-start',
        }}
        modalContainerStyle={{
          backgroundColor: colors.background,
        }}>
        <ScrollView
          // contentContainerStyle={{
          //   width: '100%',
          //   height: '100%',
          //   backgroundColor: 'red',
          // }}
          style={{width: '100%'}}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          >
          <View style={{width: '100%'}}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setActiveShift(false)}>
              <Icon
                name="cross"
                type="entypo"
                size={24}
                style={{alignSelf: 'flex-end'}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.shiftModalInnerChild}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <CustomText
                label={t('Out_of_Stock')}
                textStyle={styles.outOfStockText}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CustomText
                  label={t('selectALL')}
                  textStyle={styles.selectAllText}
                />
                <CustomButton text={t('update')} />
              </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.listContainerChild}>
                <View style={{width: '25%'}}>
                  <CustomText
                    label={t('item_name')}
                    textStyle={styles.itemText}
                  />
                </View>
                <View style={{width: '20%'}}>
                  <CustomText
                    label={t('Category')}
                    textStyle={styles.itemText}
                  />
                </View>
                <View style={{width: '20%'}}>
                  <CustomText
                    label={t('Quantity')}
                    textStyle={styles.itemText}
                  />
                </View>
                <View style={{width: '25%'}}>
                  <CustomText label={t('Status')} textStyle={styles.itemText} />
                </View>
                <View style={{width: '25%'}}>
                  <CustomText label={t('price')} textStyle={styles.itemText} />
                </View>
              </View>
              <View>
                <FlatList
                  nestedScrollEnabled={true}
                  style={{height: '60%'}}
                  data={data}
                  keyExtractor={(item, index) => item.id + index.toString()}
                  renderItem={({item}) => <ItemDetail item={item} />}
                />
              </View>
            </View>
          </View>
          <View style={styles.shiftModalInnerChild1}>
            <View style={styles.innerSecondContainer}>
              <CustomText
                label={t('Notes')}
                textStyle={styles.outOfStockText}
              />
              <ScrollView nestedScrollEnabled={true} style={{height: 125}}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <CheckBox
                    checked={check}
                    onPress={() => setcheck(index)}
                    checkedColor="#5AB3A8"
                    uncheckedColor="#CCD4D6"
                  />
                  <CustomText
                    label={'Conduct an inventory of ingredients'}
                    textStyle={styles.itemTextDetail}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <CheckBox
                    checked={check}
                    onPress={() => setcheck(index)}
                    checkedColor="#5AB3A8"
                    uncheckedColor="#CCD4D6"
                  />
                  <CustomText
                    label={'Conduct an inventory of ingredients'}
                    textStyle={styles.itemTextDetail}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <CheckBox
                    checked={check}
                    onPress={() => setcheck(index)}
                    checkedColor="#5AB3A8"
                    uncheckedColor="#CCD4D6"
                  />
                  <CustomText
                    label={'Conduct an inventory of ingredients'}
                    textStyle={styles.itemTextDetail}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <CheckBox
                    checked={check}
                    onPress={() => setcheck(index)}
                    checkedColor="#5AB3A8"
                    uncheckedColor="#CCD4D6"
                  />
                  <CustomText
                    label={'Conduct an inventory of ingredients'}
                    textStyle={styles.itemTextDetail}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <CheckBox
                    checked={check}
                    onPress={() => setcheck(index)}
                    checkedColor="#5AB3A8"
                    uncheckedColor="#CCD4D6"
                  />
                  <CustomText
                    label={'Conduct an inventory of ingredients'}
                    textStyle={styles.itemTextDetail}
                  />
                </View>
              </ScrollView>
            </View>
            <View style={styles.innerSecondContainer}>
              <CustomText
                label={t('pre-orders')}
                textStyle={styles.outOfStockText}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.preorderChilde}>
                  <CustomText label={'8'} textStyle={styles.quantityTitle} />
                  <CustomText
                    label={t('today')}
                    textStyle={styles.quantityDetail}
                  />
                </View>
                <View style={styles.preorderChilde}>
                  <CustomText label={'36'} textStyle={styles.quantityTitle} />
                  <CustomText
                    label={t('this_week')}
                    textStyle={styles.quantityDetail}
                  />
                </View>
              </View>
              <CustomButton
                text={t('gotoPreOrder')}
                containerStyle={{width: '100%', marginTop: 15}}
              />
            </View>
          </View>
        </ScrollView>
      </CustomModal>
      <CustomModal
        isModalVisible={noteModal}
        setModalVisible={setNoteModal}
        modalWrapperStyle={{
          marginLeft: '60%',
          justifyContent: 'flex-start',
          marginHorizontal: width(0),
          marginVertical: height(0),
          padding: 10,
          flex: 1,
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <CustomText label={t('Notes')} textStyle={styles.notesTitle} />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setNoteModal(false)}>
            <Icon
              name="cross"
              type="entypo"
              size={24}
              style={{alignSelf: 'flex-end'}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '93%',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          {addNote == 0 ? (
            <View style={{width: '100%'}}>
              <CustomText
                label="21 November 2021"
                textStyle={styles.addNoteText}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  checked={check}
                  onPress={() => setcheck(0)}
                  checkedColor="#5AB3A8"
                  uncheckedColor="#CCD4D6"
                />
                <TextInput
                  style={{
                    backgroundColor: 'transparent',
                    borderLeftColor: colors.black,
                    borderLeftWidth: 1,
                    height: 25,
                  }}
                />
              </View>
            </View>
          ) : addNote == 1 ? (
            <View>
              <CustomText label="Ehllo" />
            </View>
          ) : addNote == 2 ? (
            <>
              <SwipeListView
                data={data3}
                renderItem={(data, rowMap) => (
                  <View>
                    <View style={styles.noteDetail}>
                      <CustomText
                        label="20 November 2021"
                        textStyle={styles.date}
                      />
                      <CustomText
                        label="Sed ut perspiciatis unde omnis iste natus error sit volupta..."
                        textStyle={styles.noteDetailText}
                      />
                    </View>

                    <View style={styles.borderView} />
                  </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                  <View style={styles.rowBack}>
                    <View
                      style={{
                        position: 'absolute',
                        right: 1,
                        marginVertical: 5,
                      }}>
                      <TouchableOpacity
                        style={[
                          styles.BackButtons,
                          {backgroundColor: '#FB5C5C'},
                        ]}>
                        <Text style={styles.BackButtonsText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                rightOpenValue={-90}
              />

              {/* <View style={styles.noteDetail}>
         

              <View style={{marginHorizontal: 10, marginVertical: 5}}>
                <CustomText label="17 November 2021" textStyle={styles.date} />
                <CustomText
                  label="Sed ut perspiciatis unde omnis iste natus error sit volupta..."
                  textStyle={styles.noteDetailText}
                />
              </View>

              <View style={styles.borderView} />
              <View style={{marginHorizontal: 10, marginVertical: 5}}>
                <CustomText label="16 November 2021" textStyle={styles.date} />
                <CustomText
                  label="Sed ut perspiciatis unde omnis iste natus error sit volupta..."
                  textStyle={styles.noteDetailText}
                />
              </View>

              <View style={styles.borderView} />
            </View> */}
            </>
          ) : (
            <View />
          )}
          {addNote == 0 ? (
            <CustomButton
              text={'Save note'}
              containerStyle={styles.saveNoteButton}
              textStyle={styles.textNote}
              onPress={() => setAddNote(2)}
            />
          ) : addNote == 2 ? (
            <TouchableOpacity activeOpacity={0.6} onPress={() => setAddNote(0)}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Icon
                  name="plus"
                  type="antdesign"
                  color={colors.white}
                  size={28}
                  style={styles.plus}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      </CustomModal>
    </SafeAreaView>
  );
};
export default Order;
const styles = ScaledSheet.create({
  WhiteDive: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  plus: {
    backgroundColor: colors.primary,
    padding: '10@s',
    borderRadius: '99@s',
  },
  saveNoteButton: {
    width: '100%',
    backgroundColor: colors.primaryBlur,
  },
  textNote: {
    fontSize: '15@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
  },
  noteDetailText: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textPrime,
  },
  borderView: {
    borderBottomColor: colors.borderColor2,
    borderBottomWidth: '1@s',
    width: '100%',
  },
  date: {
    fontSize: '14@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  notesTitle: {
    fontFamily: fonts.bold,
    fontSize: '17@ms',
    color: colors.black,
  },
  addNoteText: {
    fontSize: '22@ms',
    fontFamily: fonts.LatoSemiBold,
    color: colors.primary,
    alignSelf: 'flex-start',
  },
  noteDetail: {
    width: '100%',
    backgroundColor: colors.background,
    alignSelf: 'center',
    // borderRadius: '4@s',
    marginVertical: 5,
  },
  quantityTitle: {
    fontSize: '15@ms',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  quantityDetail: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  shiftModalInnerChild: {
    width: '98%',
    backgroundColor: colors.textWhite,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
    padding: '5@s',
  },
  preorderChilde: {
    backgroundColor: colors.background,
    padding: '10@s',
    borderRadius: '5@s',
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shiftModalInnerChild1: {
    width: '98%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: '5@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '200@s',
  },
  outOfStockText: {
    fontSize: '15@ms',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  selectAllText: {
    fontSize: '10@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
    marginHorizontal: '10@s',
  },
  itemContainer: {
    backgroundColor: colors.background,
    padding: '5@s',
    marginTop: '10@s',
    width: '100%',
    borderRadius: '4@s',
  },
  listContainerChild: {
    flexDirection: 'row',
    backgroundColor: colors.background1,
    alignItems: 'center',
    paddingHorizontal: '10@s',
    marginTop: '5@s',
    borderBottomColor: colors.light_grey,
    borderBottomWidth: '1@s',
  },
  itemText: {
    fontSize: '10@ms',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  itemTextDetail: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  innerSecondContainer: {
    backgroundColor: colors.textWhite,
    width: '48%',
    padding: '5@s',
    borderRadius: '4@s',
  },
  BackButtons: {
    // backgroundColor: '#FF8B00',
    height: 77,
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 5,
  },
  maiLContainer: {
    width: 45,
    height: 45,
    backgroundColor: colors.primaryBlur,
    justifyContent: 'center',
    borderRadius: 5,
  },
  mailText: {
    fontSize: 13,
    fontFamily: fonts.bold,
    color: colors.black,
    textTransform: 'uppercase',
  },
  BackButtonsText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: fonts.LatoMedium,
  },
  mail: {
    fontSize: 13,
    fontFamily: fonts.LatoMedium,
    color: colors.sidebar,
  },
  ImgeViewBKG: {
    height: 50,
    width: 50,
    backgroundColor: '#E3FCEF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CurrencyImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  cautionIcon: {
    transform: [{rotate: '180deg'}],
  },
  headingCustomerSupport: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  headingCustomerSupportDetail: {
    fontSize: 16,
    fontFamily: fonts.LatoMedium,
    color: colors.black,
  },
  shiftContainer: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  sideTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '36%',
    justifyContent: 'flex-end',
  },
  noteText: {
    fontSize: 13,
    fontFamily: fonts.LatoBold,
    color: colors.primary,
    marginHorizontal: 8,
    textTransform: 'uppercase',
  },
  tabNewItemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.textWhite,
    borderRadius: 8,
    padding: 5,
    marginHorizontal: 5,
    borderColor: colors.borderColor1,
    borderWidth: 1,
  },
  titleInWhiteDiv: {
    fontFamily: 'Poppins-Medium',
    color: '#4C6870',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  textStyleShift: {
    fontSize: 16,
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
    width: '100%',
    marginHorizontal: 15,
  },
  PercentageBkgGreen: {
    backgroundColor: '#E3FCEF',
    height: 20,
    width: 70,
    borderRadius: 5,
    marginTop: 10,
  },
  TextInGreenDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  order_button: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 15,
    height: 50,
    marginVertical: 5,
    alignSelf: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  order_button_text: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    letterSpacing: 1,
  },
  order_container: {
    // flexDirection:'row',
    // backgroundColor:'red',
    padding: 10,
  },
  rowBack: {
    height: 55,
    backgroundColor: '#fff',
  },
});
