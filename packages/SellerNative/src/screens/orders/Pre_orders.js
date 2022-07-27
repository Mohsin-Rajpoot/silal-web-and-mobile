import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
 
  FlatList,
  TextInput,
  Modal,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Image, SvgXml} from 'react-native-svg';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Rect,
  Circle,
  G,
} from 'react-native-svg';
import Toast from 'react-native-easy-toast';
import {useTranslation} from 'react-i18next';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import fonts from '@SilalApp/common/assets/fonts';
import colors from '@SilalApp/common/assets/colors';
import {CustomButton} from '@SilalApp/common/components/native';
import {Icon} from 'react-native-elements';
export default function Pre_orders({title, navigation}) {
  const {t} = useTranslation();
  const [modal_timer_visible, set_modal_timer_visible] = useState(false);
  const [refusal_text, set_refusal_text] = useState('');
  const toastRef = useRef();
  const [modal, setModal] = useState(false);
  const [forWeek, setForWeek] = useState(false);

  const data = [
    {
      id: '1',
      Title: 'Embedded Software Engineer',
      SubTitle: 'Newyork',
      year: '22/03/2022',
    },
    {
      id: '2',
      Title: 'Web Developer',
      SubTitle: 'Lahore',
      year: '22/03/2022',
    },
    {
      id: '3',
      Title: 'Embedded Software Engineer',
      SubTitle: 'USA',
      year: '22/03 /2022',
    },
    {
      id: '4',
      Title: 'Embedded Software Engineer',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '5',
      Title: 'Embedded Software last',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '6',
      Title: 'Embedded Software last',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '7',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '8',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
  ];

  const suggestionArray = [
    {
      id: 1,
      text: 'Nulla Lorem',
    },
    {
      id: 2,
      text: 'Nulla Lorem mollit',
    },
    {
      id: 3,
      text: 'Nulla Lorem',
    },
    {
      id: 4,
      text: 'Nulla Lorem mollit cupidatat irure',
    },
    {
      id: 5,
      text: 'Nulla Lorem ',
    },
  ];

  const render_today = () => {
    return (
      <View style={styles.single_order}>
        <View style={styles.order_header}>
          <Text style={styles.orderid_text}>
            {t('orderId')}
            <View style={{width: 5}} />
            <Text style={[styles.orderid_text, {color: 'black'}]}>#123456</Text>
          </Text>
          <View style={styles.delivryby_btn}>
            <Text style={styles.delivryby_btn_txt}>
              {t('Delivery_by')} 13:30 PM
            </Text>
          </View>
        </View>
        <View style={styles.order_item}>
          <Text style={{fontSize: 17, marginRight: 5}}>2</Text>
          <Entypo name="cross" style={styles.cross_icon} />
          <Text style={[styles.order_title, {marginLeft: 5}]}>
            {t('french_fries')}
          </Text>
        </View>
        <View style={[styles.order_item, {marginTop: 5}]}>
          <Text style={{fontSize: 17, marginRight: 5}}>2</Text>
          <Entypo name="cross" style={styles.cross_icon} />
          <Text style={[styles.order_title, {marginLeft: 5}]}>
            Cheesecakes with sour cream and citrus
          </Text>
        </View>
        {IsTablet && (
          <View style={styles.more_order}>
            <Text style={{color: colors.primary}}>3 more</Text>
          </View>
        )}
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            onPress={() => set_modal_timer_visible(true)}
            style={[
              styles.accept_btn,
              {width: '30%', backgroundColor: colors.Primary20},
            ]}>
            <Text style={[styles.accept_btn_txt, {color: colors.primary}]}>
              {t('Decline')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              toastRef.current.show(
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#002733',
                      fontSize: 15,
                      fontFamily: 'Lato-Bold',
                    }}>
                    The order #247HW9 has been moved to current orders
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      toastRef.current.close(), alert('undo');
                    }}>
                    <Text
                      style={{
                        color: '#018FFB',
                        fontSize: 15,
                        fontFamily: 'Lato-Bold',
                        marginLeft: 20,
                      }}>
                      UNDO
                    </Text>
                  </TouchableOpacity>
                </View>,
                3000,
              )
            }
            style={[styles.accept_btn, {width: '60%'}]}>
            <Text style={styles.accept_btn_txt}>Move to current orders</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const render_this_week = () => {
    return (
      <View style={styles.single_order}>
        <View
          style={[
            styles.order_header,
            {flexDirection: !IsTablet ? 'column' : 'row'},
          ]}>
          <Text style={styles.orderid_text}>
            {t('orderId')}
            <View style={{width: 5}} />
            <Text style={[styles.orderid_text, {color: 'black'}]}>#123456</Text>
          </Text>
          <View
            style={[
              styles.delivryby_btn,
              {width: !IsTablet ? '65%' : null, marginTop: verticalScale(5)},
            ]}>
            <Text style={styles.delivryby_btn_txt}>
              {t('Delivery_by')} 14 DEC 13:30 PM
            </Text>
          </View>
        </View>
        <View style={styles.order_item}>
          <Text style={{fontSize: 17, marginRight: 5}}>2</Text>
          <Entypo name="cross" style={styles.cross_icon} />
          <Text style={[styles.order_title, {marginLeft: 5}]}>
            French Fries{' '}
          </Text>
        </View>
        <View style={[styles.order_item, {marginTop: 5}]}>
          <Text style={{fontSize: 17, marginRight: 5}}>2</Text>
          <Entypo name="cross" style={styles.cross_icon} />
          <Text style={[styles.order_title, {marginLeft: 5}]}>
            Cheesecakes with sour cream and citrus{' '}
          </Text>
        </View>
        {IsTablet && (
          <View style={styles.more_order}>
            <Text style={{color: colors.primary}}>3 more</Text>
          </View>
        )}

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            onPress={() =>
              toastRef.current.show(
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: !IsTablet ? scale(270) : null,
                  }}>
                  {!IsTablet ? (
                    <View
                      style={{marginLeft: scale(-20), marginRight: scale(10)}}>
                      <Icon
                        type="antdesign"
                        name="checkcircle"
                        size={verticalScale(20)}
                        color={colors.primary}
                      />
                    </View>
                  ) : null}
                  <Text
                    style={{
                      color: colors.black50,
                      fontSize: !IsTablet
                        ? verticalScale(11)
                        : verticalScale(13),
                      fontFamily: fonts.LatoBold,
                      width: !IsTablet ? '86%' : null,
                    }}>
                    Order #247hw9 declined
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      toastRef.current.close(), alert('undo');
                    }}>
                    <Text
                      style={{
                        color: colors.blue50,
                        fontSize: !IsTablet
                          ? verticalScale(12)
                          : verticalScale(13),
                        fontFamily: fonts.LatoBold,
                      }}>
                      {t('undo')}
                    </Text>
                  </TouchableOpacity>
                </View>,
                3000,
              )
            }
            style={[
              styles.accept_btn,
              {width: '30%', backgroundColor: colors.Primary20},
            ]}>
            <Text style={[styles.accept_btn_txt, {color: colors.primary}]}>
              {t('Decline')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              toastRef.current.show(
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: !IsTablet ? scale(270) : null,
                  }}>
                  {!IsTablet ? (
                    <View
                      style={{marginLeft: scale(-20), marginRight: scale(10)}}>
                      <Icon
                        type="antdesign"
                        name="checkcircle"
                        size={verticalScale(20)}
                        color={colors.primary}
                      />
                    </View>
                  ) : null}
                  <Text
                    style={{
                      color: colors.black50,
                      fontSize: !IsTablet
                        ? verticalScale(11)
                        : verticalScale(13),
                      fontFamily: fonts.LatoBold,
                      width: !IsTablet ? '86%' : null,
                    }}>
                    The order #247HW9 has been moved to current orders
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      toastRef.current.close(), alert('undo');
                    }}>
                    <Text
                      style={{
                        color: colors.blue50,
                        fontSize: !IsTablet
                          ? verticalScale(12)
                          : verticalScale(13),
                        fontFamily: fonts.LatoBold,
                      }}>
                      {t('undo')}
                    </Text>
                  </TouchableOpacity>
                </View>,
                3000,
              )
            }
            style={[styles.accept_btn, {width: '60%'}]}>
            <Text style={styles.accept_btn_txt}>
              {t('move_to_current_order')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const render_modal_view = () => {
    return (
      <View>
        <View style={styles.modalView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.modal_heading}>{t('Indicate_the_Reason')}</Text>
            <TouchableOpacity
              onPress={() => set_modal_timer_visible(!modal_timer_visible)}>
              <Entypo
                name="cross"
                style={[styles.cross_icon, {color: '#4C6870', fontSize: 25}]}
              />
            </TouchableOpacity>
          </View>
          <Text style={{color: '#002733', fontSize: 15, marginTop: 5}}>
            {t('Indicate_detail')}
          </Text>

          <View style={{marginTop: 20, width: 450}}>
            <TextInput
              multiline={true}
              style={{
                marginVertical: 5,
                lineHeight: 22,
                fontSize: 15,
                color: '#4C6870',
                backgroundColor: '#F2F4F5',
                padding: 10,
                height: 120,
              }}
              value={refusal_text}
              textAlignVertical="top"
              numberOfLines={3}
              onChangeText={n => set_refusal_text(n)}
              placeholder={t('Type_here') + '...'}
              placeholderTextColor="#4C6870"
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={[
                  styles.modal_heading,
                  {fontWeight: '200', fontSize: 15},
                ]}>
                {t('suggestions')}
              </Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                data={data}
                renderItem={({item}) => (
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      backgroundColor: '#E6F4F2',
                      marginLeft: 10,
                      borderRadius: 5,
                    }}>
                    <Text>{item.SubTitle}</Text>
                  </View>
                )}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={[
                    styles.modal_heading,
                    {fontWeight: '200', fontSize: 15, color: colors.black},
                  ]}>
                  Suggestions:
                </Text>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  data={data}
                  renderItem={({item}) => (
                    <View
                      style={{
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        backgroundColor: '#E6F4F2',
                        marginLeft: 10,
                        borderRadius: 5,
                      }}>
                      <Text
                        style={{
                          color: colors.primary,
                          fontFamily: fonts.LatoMedium,
                          fontSize: 13,
                        }}>
                        {item.SubTitle}
                      </Text>
                    </View>
                  )}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  onPress={() => set_modal_timer_visible(!modal_timer_visible)}
                  style={[
                    styles.modal_save_btn,
                    {backgroundColor: colors.light_grey},
                  ]}>
                  <Text style={{color: 'black'}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    set_modal_timer_visible(false);
                    toastRef.current.show(
                      <View style={{flexDirection: 'row'}}>
                        <FontAwesome
                          name="check-circle"
                          style={{color: '#36b27c', fontSize: 20}}
                        />
                        <Text
                          style={{
                            color: '#002733',
                            fontSize: 15,
                            fontFamily: 'Lato-Bold',
                            marginLeft: 10,
                          }}>
                          Order #247HW9 was declined
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            toastRef.current.close(), alert('undo');
                          }}>
                          <Text
                            style={{
                              color: '#018FFB',
                              fontSize: 15,
                              fontFamily: 'Lato-Bold',
                              marginLeft: 20,
                            }}>
                            UNDO
                          </Text>
                        </TouchableOpacity>
                      </View>,
                      3000,
                    );
                  }}
                  // onPress={()=>{
                  //     set_modal_timer_visible(false)
                  //     ToastAndroid.showWithGravityAndOffset('Preperation time is changed',ToastAndroid.LONG,ToastAndroid.BOTTOM,25,50);
                  //     }}
                  style={styles.modal_save_btn}>
                  <Text style={{color: 'white'}}>{t('Submit')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const render_modal_view_Mobile = () => {
    return (
      <View style={{paddingTop: verticalScale(25)}}>
        <Text style={styles.modal_heading_Mobile}>
          {t('Indicate_the_Reason')}
        </Text>
        <Text
          style={{
            color: colors.black,
            fontSize: verticalScale(11),
            marginTop: verticalScale(5),
          }}>
          {t('Indicate_detail')}
        </Text>

        <View style={{marginTop: verticalScale(20)}}>
          <View style={{width: '100%'}}>
            <TextInput
              multiline={true}
              style={{
                fontSize: verticalScale(15),
                color: colors.textPrimary,
                backgroundColor: colors.dropDownBackground,
                paddingVertical: verticalScale(10),
                paddingHorizontal: scale(20),
                height: verticalScale(125),
                width: '100%',
                borderRadius: 10,
              }}
              value={refusal_text}
              textAlignVertical="top"
              numberOfLines={3}
              onChangeText={n => set_refusal_text(n)}
              placeholder="Type here..."
              placeholderTextColor={colors.textPrimary}
            />
          </View>
          <Text
            style={{
              fontSize: verticalScale(11),
              marginBottom: verticalScale(5),
              marginTop: verticalScale(15),
              color: colors.textPrimeColor,
            }}>
            {t('suggestions')}
          </Text>
          <View>
            <View style={{marginLeft: scale(-10)}}>
              <FlatList
                contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
                keyExtractor={(item, index) => index.toString()}
                data={suggestionArray}
                renderItem={({item}) => (
                  <View
                    style={{
                      paddingVertical: verticalScale(5),
                      paddingHorizontal: scale(10),
                      backgroundColor: colors.Primary20,
                      marginLeft: scale(10),
                      borderRadius: verticalScale(5),
                      marginBottom: verticalScale(10),
                    }}>
                    <Text
                      style={{
                        color: colors.primary,
                        fontFamily: fonts.LatoMedium,
                        fontSize: verticalScale(11),
                      }}>
                      {item.text}
                    </Text>
                  </View>
                )}
              />
            </View>
            <CustomButton
              containerStyle={styles.modalCancelBtn}
              onPress={() => set_modal_timer_visible(!modal_timer_visible)}
              text={t('Submit')}
              textStyle={{fontSize: verticalScale(13)}}
            />
            <CustomButton
              text={t('Cancel')}
              textStyle={{fontSize: verticalScale(13), color: colors.mehndi50}}
              containerStyle={[
                styles.modalCancelBtn,
                {backgroundColor: colors.light_grey50},
              ]}
              onPress={() => {
                set_modal_timer_visible(false);
                toastRef.current.show(
                  <View style={{flexDirection: 'row'}}>
                    <FontAwesome
                      name="check-circle"
                      style={{color: '#36b27c', fontSize: 20}}
                    />
                    <Text
                      style={{
                        color: '#002733',
                        fontSize: 15,
                        fontFamily: 'Lato-Bold',
                        marginLeft: 10,
                      }}>
                      Order #247HW9 was declined
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        toastRef.current.close(), alert('undo');
                      }}>
                      <Text
                        style={{
                          color: '#018FFB',
                          fontSize: 15,
                          fontFamily: 'Lato-Bold',
                          marginLeft: 20,
                        }}>
                        UNDO
                      </Text>
                    </TouchableOpacity>
                  </View>,
                  3000,
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      {!IsTablet ? (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setForWeek(!forWeek)}
          style={styles.forTodayContainer}>
          <CustomText
            fontSize={16}
            fontFamily={fonts.PoppinsSemiBold}
            label={forWeek ? t('For_today') : t('this_week')}
          />
          <View style={styles.weekNumCont}>
            <CustomText
              fontSize={16}
              fontFamily={fonts.PoppinsSemiBold}
              color={colors.textWhite}
              label={forWeek ? '8' : '19'}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: !IsTablet ? 'column' : 'row',
        }}>
        {(!IsTablet && forWeek) || IsTablet ? (
          <View
            style={
              !IsTablet ? styles.mainContainerMobile : styles.mainContainer
            }>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: 10,
              }}>
              <Text style={styles.title}>{t('this_week')}</Text>
              <View style={styles.weekNumCont}>
                <CustomText
                  fontSize={16}
                  fontFamily={fonts.PoppinsSemiBold}
                  color={colors.textWhite}
                  label="19"
                />
              </View>
            </View>

            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={data}
              renderItem={({item}) => render_this_week()}
            />
          </View>
        ) : null}
        {(!IsTablet && !forWeek) || IsTablet ? (
          <View
            style={
              !IsTablet ? styles.mainContainerMobile : styles.mainContainer
            }>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: 10,
              }}>
              <Text style={styles.title}>{t('For_today')}</Text>
              <View style={styles.weekNumCont}>
                <CustomText
                  fontSize={16}
                  fontFamily={fonts.PoppinsSemiBold}
                  color={colors.textWhite}
                  label="8"
                />
              </View>
            </View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={data}
              renderItem={({item}) => render_today()}
            />
          </View>
        ) : null}

        {/* <Button title="Show Toast" onPress={() => toastRef.current.show(
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#002733',fontSize:15,fontFamily:'Lato-Bold'}}>The order #247HW9 has been moved to Accepted</Text>
                <TouchableOpacity onPress={()=>{toastRef.current.close(), alert('undo')}}>
                  <Text style={{color:'#018FFB',fontSize:15,fontFamily:'Lato-Bold',marginLeft:20}}>Undo</Text>
                </TouchableOpacity>
              </View>
              ,1000
              )} /> */}
        {!IsTablet ? (
          <CustomModal
            isModalVisible={modal_timer_visible}
            setModalVisible={set_modal_timer_visible}
            modalContainerStyle={{
              padding: 0,
              margin: 0,
              paddingHorizontal: scale(15),
              overflow: 'hidden',
              borderRadius: 20,
            }}
            modalWrapperStyle={{
              marginTop: height(58),
              marginHorizontal: 0,
              marginVertical: 0,
            }}>
            {render_modal_view_Mobile()}
          </CustomModal>
        ) : (
          <CustomModal
            isModalVisible={modal_timer_visible}
            setModalVisible={set_modal_timer_visible}
            modalWrapperStyle={{
              marginHorizontal: width(30),
              marginVertical: height(25),
              justifyContent: 'center',
            }}>
            {render_modal_view()}
          </CustomModal>
        )}
        <CustomModal
          isModalVisible={modal}
          setModalVisible={setModal}
          modalWrapperStyle={{
            marginHorizontal: width(!IsTablet ? 5 : 26),
            marginVertical: height(!IsTablet ? 37 : 36),
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            overflow: 'hidden',
            borderRadius: verticalScale(12),
            padding: verticalScale(10),
          }}>
          <View
            style={{
              width: '100%',
              alignSelf: 'flex-start',
              margin: 10,
            }}>
            <CustomText
              label={t('Drag_card_back_ToReceive')}
              textStyle={[
                !IsTablet ? styles.dragDropHeadMobile : styles.dragDropHead,
              ]}
            />
          </View>
          <View
            style={{
              width: '100%',
              alignSelf: 'flex-start',
              marginHorizontal: 10,
            }}>
            <CustomText
              label={t('Drag_card_detail')}
              textStyle={
                !IsTablet ? styles.dragDropHead1Mobile : styles.dragDropHead1
              }
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              justifyContent: 'space-between',
              width: '100%',
              alignSelf: 'center',
            }}>
            <CustomButton
              text={t('Cancel')}
              containerStyle={{
                backgroundColor: colors.light_grey50,
                width: '48%',
                height: !IsTablet ? verticalScale(42) : null,
              }}
              textStyle={[
                !IsTablet ? styles.cancelTextMobile : styles.cancelText,
                {color: colors.mehndi50},
              ]}
              onPress={() => setModal(false)}
            />
            <CustomButton
              text={t('Confirm')}
              containerStyle={{
                width: '48%',
                height: !IsTablet ? verticalScale(42) : null,
              }}
              textStyle={
                !IsTablet ? styles.cancelTextMobile : styles.cancelText
              }
              onPress={() => setModal(false)}
            />
          </View>
        </CustomModal>
      </ScrollView>
      <Toast
        ref={toastRef}
        style={[
          styles.toast,
          {
            position: 'absolute',
            top: 0,
            paddingHorizontal: !IsTablet ? scale(30) : scale(20),
          },
        ]}
        position={!IsTablet ? 'top' : 'bottom'}
        positionValue={!IsTablet ? 0 : 250}
        fadeInDuration={750}
        fadeOutDuration={800}
        opacity={1}
        textStyle={{color: 'red'}}
      />
    </>
  );
}
const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.boxBg,
    width: '47%',
    marginLeft: 10,
    borderRadius: 5,
  },
  mainContainerMobile: {
    backgroundColor: colors.boxBg,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 5,
    paddingBottom: 5,
    marginBottom: 10,
  },
  forTodayContainer: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: colors.boxBg,
    paddingVertical: '14@vs',
    paddingHorizontal: '12@s',
    borderRadius: '12@vs',
    marginBottom: '10@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weekNumCont: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red20,
    width: '28@vs',
    height: '28@vs',
    borderRadius: '100@vs',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    margin: 10,
    color: 'black',
  },

  cancelTextMobile: {
    fontSize: '15@vs',
    fontFamily: fonts.PoppinsSemiBold,
  },
  cancelText: {
    fontSize: '13@vs',
    fontFamily: fonts.PoppinsSemiBold,
  },
  dragDropHead: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  dragDropHeadMobile: {
    fontSize: '15@vs',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  dragDropHead1: {
    fontSize: 18,
    fontFamily: fonts.LatoMedium,
    color: colors.mehndi50,
  },
  dragDropHead1Mobile: {
    fontSize: '13@vs',
    fontFamily: fonts.LatoMedium,
    color: colors.mehndi50,
    textAlign: 'center',
  },
  single_order: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingBottom: 10,
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
    fontFamily: 'Lato-Bold',
  },
  order_timer: {
    backgroundColor: '#F2A341',
    borderRadius: '0 0 5 5',
  },
  order_title: {
    width: '70%',
    fontSize: 17,
    fontFamily: 'Lato-Bold',
  },
  order_item: {
    flexDirection: 'row',
    marginTop: 20,
  },
  cross_icon: {
    color: colors.light_grey,
    fontSize: 20,
  },
  more_order: {
    width: 60,
    backgroundColor: colors.primaryGreen,
    padding: 3,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
    marginTop: 5,
  },
  accept_btn: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  accept_btn_txt: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  order_recve_name: {
    fontSize: 17,
    fontWeight: '400',
    color: 'black',
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
    color: '#F2A341',
    fontFamily: 'Lato-Bold',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: '20@vs',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modal_save_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    width: 210,
    padding: 10,
    borderRadius: 5,
  },
  modal_heading: {
    fontSize: 18,
    fontFamily: fonts.LatoBold,
    color: 'black',
  },
  modal_heading_Mobile: {
    fontSize: '14@vs',
    color: colors.black,
    fontFamily: fonts.bold,
  },

  toast: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  modalCancelBtn: {
    width: '100%',
    height: '45@vs',
    marginBottom: '5@vs',
  },
});
