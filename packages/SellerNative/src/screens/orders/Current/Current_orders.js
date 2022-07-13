import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
  Modal,
  ScrollView,
} from 'react-native';
import Accepted from '../molecule/Accepted';
import DailySummaryCompo from '../molecule/DailySummaryCompo';
import Entypo from 'react-native-vector-icons/Entypo';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import SellerTools from '../molecule/SellerTools';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';

import Svg, {Path, Rect} from 'react-native-svg';
import {Slider, Icon} from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import SwipeButton from 'rn-swipe-button';
import colors from '@SilalApp/common/assets/colors';
import {useTranslation} from 'react-i18next';
import fonts from '@SilalApp/common/assets/fonts';
const {width, height} = Dimensions.get('window');

export default function Current_orders({title, navigation}) {
  const [modal_timer_visible, set_modal_timer_visible] = useState(false);
  const [values, set_values] = useState(0);
  const {t} = useTranslation();
  const [manual_time, set_manual_time] = useState('');
  const [activeTab, setActiveTab] = useState(2);

  const toastRef = useRef();

  const data = [
    {
      id: '1',
      Title: 'first',
      SubTitle: 'Newyork',
      year: '22/03/2022',
    },
    {
      id: '2',
      Title: 'second',
      SubTitle: 'Lahore',
      year: '22/03/2022',
    },
    {
      id: '3',
      Title: 'third',
      SubTitle: 'USA',
      year: '22/03 /2022',
    },
    {
      id: '4',
      Title: 'fourth',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '5',
      Title: 'fifth',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '6',
      Title: 'sixth',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
    {
      id: '7',
      Title: 'Embedded Software full last',
      SubTitle: 'USA 2nd last',
      year: '22/03/2022',
    },
    {
      id: '8',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
    },
  ];

  const navigate_to_fullview = () => {
    navigation.navigate('Order_full_view', {status: 'from_current'});
  };

  const render_received = item => {
    return (
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigate_to_fullview()}
          style={styles.single_order}>
          <View style={styles.order_header}>
            <Text style={styles.orderid_text}>
              {t('order_id')}
              <Text style={[styles.orderid_text, {color: 'black'}]}>
                #123456
              </Text>
            </Text>
            <Text style={[styles.orderid_text, {color: 'black'}]}>
              19.43 MIN
            </Text>
          </View>
          <View style={styles.order_item}>
            <Text style={styles.order_title}>2</Text>
            <Entypo name="cross" style={styles.cross_icon} />
            <Text style={styles.order_title}>French Fries </Text>
            <Text style={styles.order_title}>{item.id}</Text>
          </View>
          <View style={[styles.order_item, {marginTop: 5}]}>
            <Text style={styles.order_title}>2</Text>
            <Entypo name="cross" style={styles.cross_icon} />
            <Text style={styles.order_title}>
              Cheesecakes with sour cream and citrus
            </Text>
          </View>
          <View style={styles.more_order}>
            <Text style={{color: colors.primary, fontSize: verticalScale(10)}}>
              3 more
            </Text>
          </View>

          <SwipeButton
            disabled={false}
            //disable the button by doing true (Optional)
            swipeSuccessThreshold={10}
            height={40}
            //height of the button (Optional)
            width={'100%'}
            shouldResetAfterSuccess={true}
            //width of the button (Optional)
            title={t('slide_to_Accept')}
            //Text inside the button (Optional)
            //thumbIconImageSource={thumbIcon}
            //You can also set your own icon for the button (Optional)
            onSwipeSuccess={() => {
              toastRef.current.show(
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: 15,
                      fontFamily: 'Lato-Bold',
                    }}>
                    {t('theOrderTost')}
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
                      {t('undo')}
                    </Text>
                  </TouchableOpacity>
                </View>,
                3000,
              );
              // alert('Submitted Successfully!');
            }}
            thumbIconComponent={() => {
              return (
                <View>
                  <Svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M7.34171 1.17374C7.79732 0.718128 8.53601 0.718128 8.99162 1.17374L15.9916 8.17374C16.4472 8.62935 16.4472 9.36805 15.9916 9.82366L8.99162 16.8237C8.53601 17.2793 7.79732 17.2793 7.34171 16.8237C6.8861 16.368 6.8861 15.6294 7.34171 15.1737L13.5167 8.9987L7.34171 2.82366C6.8861 2.36804 6.8861 1.62935 7.34171 1.17374ZM0.34171 1.17374C0.797322 0.718128 1.53601 0.718128 1.99163 1.17374L8.99162 8.17374C9.21042 8.39253 9.33333 8.68928 9.33333 8.9987C9.33333 9.30812 9.21042 9.60487 8.99162 9.82366L1.99162 16.8237C1.53601 17.2793 0.79732 17.2793 0.341709 16.8237C-0.113903 16.368 -0.113903 15.6294 0.341709 15.1737L6.51675 8.9987L0.34171 2.82366C-0.113902 2.36804 -0.113902 1.62935 0.34171 1.17374Z"
                      fill="white"
                    />
                  </Svg>
                  {/* <Text>jnkjn</Text> */}
                </View>
              );
            }}
            containerStyles={{borderRadius: 5, height: 40}}
            railStyles={{
              backgroundColor: colors.primary,
              borderRadius: !IsTablet ? verticalScale(7) : verticalScale(5),
              height: 45,
              marginLeft: -5,
            }}
            // disabledRailBackgroundColor={true}
            //After the completion of swipe (Optional)

            railFillBackgroundColor="red" //(Optional)
            railFillBorderColor="transparent" //(Optional)
            thumbIconWidth={100}
            // thumbIconStyles={{width:130,height:120,marginLeft:7}}
            thumbIconBackgroundColor="transparent" //(Optional)
            thumbIconBorderColor="transparent" //(Optional)
            railBackgroundColor={colors.dullWhiteColor} //(Optional)
            railBorderColor="transparent" //(Optional)
          />
          {/* <TouchableOpacity
              // onPress={()=>alert('fcghvjhb')}
             onPress={() => toastRef.current.show(
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#002733',fontSize:15,fontFamily:'Lato-Bold'}}>The order #247HW9 has been moved to Accepted</Text>
                <TouchableOpacity onPress={()=>{toastRef.current.close(), alert('undo')}}>
                  <Text style={{color:'#018FFB',fontSize:15,fontFamily:'Lato-Bold',marginLeft:20}}>UNDO</Text>
                </TouchableOpacity>
              </View>
              ,3000
              )}
          style={styles.accept_btn}>
          <Text style={styles.accept_btn_txt}>Slide to accept order</Text>
        </TouchableOpacity> */}
        </TouchableOpacity>
      </ScrollView>
    );
  };

  const render_accepted = item => {
    return (
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigate_to_fullview()}
          style={styles.single_order}>
          <View style={styles.order_header}>
            <Text style={styles.orderid_text}>
              {t('order_id')}
              <Text style={[styles.orderid_text, {color: 'black'}]}>
                #123456
              </Text>
            </Text>
            <Text style={[styles.orderid_text, {color: 'black'}]}>
              19.43 MIN
            </Text>
          </View>
          <View style={{flexDirection: !IsTablet ? 'row' : 'column'}}>
            <View style={styles.order_recve_phone_view}>
              <Svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Rect width="44" height="44" rx="5" fill="#DEEBFF" />
                <Path
                  d="M26.384 18.712L23.179 16.384C22.8192 16.1207 22.3816 15.9855 21.936 16C21.3924 16.0136 20.8667 16.1961 20.4317 16.5223C19.9967 16.8485 19.6742 17.3021 19.509 17.82C19.323 18.403 19.153 18.797 18.999 19.002C18.5336 19.6228 17.93 20.1266 17.236 20.4734C16.5421 20.8203 15.7768 21.0005 15.001 21V23C16.0337 23.0011 17.0538 22.7733 17.9879 22.3329C18.9219 21.8925 19.7468 21.2504 20.403 20.453L21.1 24.408L19.039 26.138L16.816 32.246L18.696 32.93L20.736 27.326L24.126 24.481C24.4042 24.2564 24.617 23.9612 24.7424 23.6264C24.8678 23.2915 24.9012 22.9291 24.839 22.577L24.33 19.692L25.007 20.184L27.134 23.112L28.752 21.936L26.401 18.7L26.384 18.712ZM20.501 15.5C21.0314 15.5 21.5401 15.2893 21.9152 14.9142C22.2902 14.5391 22.501 14.0304 22.501 13.5C22.501 12.9696 22.2902 12.4609 21.9152 12.0858C21.5401 11.7107 21.0314 11.5 20.501 11.5C19.9705 11.5 19.4618 11.7107 19.0867 12.0858C18.7117 12.4609 18.501 12.9696 18.501 13.5C18.501 14.0304 18.7117 14.5391 19.0867 14.9142C19.4618 15.2893 19.9705 15.5 20.501 15.5ZM23.473 28.681L26.687 32.511L28.219 31.226L25.243 27.68L24.497 25.5L22.706 27L23.473 28.681Z"
                  fill="#0065FF"
                />
              </Svg>
              <View style={{marginLeft: 10}}>
                <Text style={styles.order_recve_name}>Wade Wamen</Text>
                <Text style={styles.orderid_text1}>(808)555-0111</Text>
              </View>
            </View>
            <View style={styles.order_recve_loc_view}>
              <Svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Rect width="44" height="44" rx="5" fill="#EAE6FF" />
                <Path
                  d="M28.364 27.3639L22 33.7279L15.636 27.3639C14.3773 26.1052 13.5202 24.5016 13.1729 22.7558C12.8257 21.0099 13.0039 19.2004 13.6851 17.5558C14.3663 15.9113 15.5198 14.5057 16.9999 13.5168C18.4799 12.5278 20.22 12 22 12C23.78 12 25.5201 12.5278 27.0001 13.5168C28.4802 14.5057 29.6337 15.9113 30.3149 17.5558C30.9961 19.2004 31.1743 21.0099 30.8271 22.7558C30.4798 24.5016 29.6227 26.1052 28.364 27.3639ZM22 22.9999C22.5304 22.9999 23.0391 22.7892 23.4142 22.4141C23.7893 22.0391 24 21.5304 24 20.9999C24 20.4695 23.7893 19.9608 23.4142 19.5857C23.0391 19.2106 22.5304 18.9999 22 18.9999C21.4696 18.9999 20.9609 19.2106 20.5858 19.5857C20.2107 19.9608 20 20.4695 20 20.9999C20 21.5304 20.2107 22.0391 20.5858 22.4141C20.9609 22.7892 21.4696 22.9999 22 22.9999Z"
                  fill="#6554C0"
                />
              </Svg>
              <View style={{marginLeft: 10}}>
                <Text style={styles.order_recve_name}>2.4 km</Text>
              </View>
            </View>
          </View>
          <View
            style={
              !IsTablet
                ? styles.order_recve_loc_viewMobile
                : styles.order_recve_loc_view
            }>
            <TouchableOpacity onPress={() => set_modal_timer_visible(true)}>
              <Text style={styles.changeEstimateTime}>
                {t('changeEstimate')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Longer_orders')}
              style={!IsTablet ? styles.ready_btnMobile : styles.ready_btn}>
              <Text
                style={{
                  color: colors.textWhite,
                  fontFamily: fonts.bold,
                  fontSize: verticalScale(11),
                }}>
                {t('Ready')}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  const render_ready_pickup = () => {
    return (
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigate_to_fullview()}
          style={[
            !IsTablet ? styles.single_orderMobile : styles.single_order,
            {paddingVertical: 10, marginHorizontal: 20, marginVertical: 10},
          ]}>
          <Text style={styles.order_recve_name}>#247HW9</Text>
          <Text style={{fontSize: 17, fontFamily: 'Lato-Regular'}}>
            21 min ago
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  const render_modal_view = () => {
    return (
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
              Order will be ready in:{' '}
            </Text>
            <Text
              style={{
                color: colors.primary,
                fontSize: 18,
                fontWeight: '700',
                width: 150,
              }}>
              {values} minutes
            </Text>
            <TouchableOpacity
              onPress={() => set_modal_timer_visible(!modal_timer_visible)}>
              <Entypo
                name="cross"
                style={[
                  styles.cross_icon,
                  {color: colors.sidebar, fontSize: 25},
                ]}
              />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 20, width: 450}}>
            <Slider
              value={values}
              onValueChange={set_values}
              maximumValue={15}
              minimumValue={-15}
              step={5}
              // allowTouchTrack
              minimumTrackTintColor={colors.light_grey}
              maximumTrackTintColor={colors.light_grey}
              // trackStyle={{ height: 5, backgroundColor: '#CCD4D6' }}
              thumbStyle={{
                height: 30,
                width: 30,
                backgroundColor: 'transparent',
              }}
              thumbProps={{
                children: (
                  <View
                    style={{
                      backgroundColor: 'white',
                      height: 30,
                      width: 30,
                      borderRadius: 20,
                      borderWidth: 2,
                      borderColor: colors.primary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: colors.primary,
                        height: 10,
                        width: 10,
                        borderRadius: 20,
                      }}></View>
                  </View>
                ),
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: colors.light_grey,
                  }}></View>
                <Text>-15 min</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: colors.light_grey,
                  }}></View>
                <Text>-10 min</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: colors.light_grey,
                  }}></View>
                <Text>-5 min</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: colors.light_grey,
                  }}></View>
                <Text style={{color: colors.light_grey}}>(19:22 PM)</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: colors.light_grey,
                  }}></View>
                <Text>5 min</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: colors.light_grey,
                  }}></View>
                <Text>10 min</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: colors.light_grey,
                  }}></View>
                <Text>15 min</Text>
              </View>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <Text style={{fontSize: 15, fontWeight: '600'}}>Add manually</Text>
            <View>
              <TextInput
                placeholder="+30 min"
                placeholderTextColor={colors.light_grey}
                value={manual_time}
                keyboardType="decimal-pad"
                // keyboardType="phone-pad"
                onChangeText={text => set_manual_time(text)}
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  width: 120,
                  height: 40,
                  borderColor: colors.light_grey,
                  marginLeft: 10,
                }}
                // style={CommonStyle.inputTextStyle}
              />
            </View>
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
                        color: colors.black,
                        fontSize: 15,
                        fontFamily: 'Lato-Bold',
                        marginLeft: 10,
                      }}>
                      Preperation time is changed{' '}
                    </Text>
                    <Text>(+15 min)</Text>
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
                        {t('undo')}
                      </Text>
                    </TouchableOpacity>
                  </View>,
                  3000,
                );
              }}
              style={styles.modal_save_btn}>
              <Text style={{color: 'white'}}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={{paddingHorizontal: scale(10)}}>
        {!IsTablet ? (
          <SellerTools
            onPress={() => navigation.navigate('SellerToolScreen')}
          />
        ) : (
          <View />
        )}
        {!IsTablet && (
          <>
            <DailySummaryCompo
              checkPress={() => navigation.navigate('DailySummary')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Accepted setActiveTab={setActiveTab} activeTab={activeTab} />
              <Accepted
                change={activeTab == 1 ? false : true}
                setActiveTab={setActiveTab}
                activeTab={activeTab}
              />
            </View>
          </>
        )}
      </View>
      <View style={{flexDirection: 'row', height: '100%', width: '100%'}}>
        {(!IsTablet && activeTab == 2) || IsTablet ? (
          <View
            style={{
              backgroundColor: colors.boxBg,
              width: !IsTablet ? '95%' : '40%',
              marginLeft: !IsTablet ? 10 : 10,
              borderRadius: 5,
              alignSelf: !IsTablet ? 'center' : 'flex-start',
            }}>
            <Text style={styles.title}>{t('received')}</Text>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={data}
              nestedScrollEnabled={true}
              renderItem={({item}) => render_received(item)}
            />
          </View>
        ) : null}

        {(!IsTablet && activeTab == 0) || IsTablet ? (
          <View
            style={{
              backgroundColor: colors.boxBg,
              width: !IsTablet ? '95%' : '40%',
              marginLeft: 10,
              borderRadius: 5,
            }}>
            <Text style={styles.title}>Accepted</Text>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={data}
              renderItem={({item}) => render_accepted(item)}
            />
          </View>
        ) : null}
        {(!IsTablet && activeTab == 1) || IsTablet ? (
          <View
            style={{
              backgroundColor: colors.textPrimary,
              width: !IsTablet ? '95%' : '16%',
              marginLeft: 10,
              borderRadius: 5,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={[styles.title, {color: 'white'}]}>
              {t('readyForPickup')}
            </Text>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={data}
              contentContainerStyle={{
                flexDirection: !IsTablet ? 'row' : 'column',
                flexWrap: !IsTablet ? 'wrap' : 'nowrap',
              }}
              renderItem={({item}) => render_ready_pickup()}
            />
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: colors.primary,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Svg
                width="36"
                height="24"
                viewBox="0 0 36 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M27.27 9L24.72 1.98C24.285 0.795 23.16 0 21.9 0H18V3H21.9L24.09 9H16.875L16.335 7.5H18V4.5H10.5V7.5H13.125L15.855 15H14.85C14.19 11.655 11.385 9.18 7.875 9.015C3.675 8.805 0 12.3 0 16.5C0 20.7 3.3 24 7.5 24C11.19 24 14.175 21.465 14.85 18H21.15C21.81 21.345 24.615 23.82 28.125 23.985C32.325 24.18 36 20.7 36 16.485C36 12.285 32.7 8.985 28.5 8.985H27.27V9ZM11.73 18C11.13 19.755 9.495 21 7.5 21C4.98 21 3 19.02 3 16.5C3 13.98 4.98 12 7.5 12C9.495 12 11.13 13.245 11.73 15H7.5V18H11.73ZM21.15 15H19.05L17.955 12H22.5C21.84 12.87 21.36 13.875 21.15 15ZM28.5 21C25.98 21 24 19.02 24 16.5C24 15.105 24.615 13.905 25.575 13.08L27.015 17.04L29.835 16.02L28.38 12.015C28.425 12.015 28.47 12 28.515 12C31.035 12 33.015 13.98 33.015 16.5C33.015 19.02 31.02 21 28.5 21Z"
                  fill="white"
                />
              </Svg>
              <View>
                <Text style={styles.onway}>ON-WAY</Text>
                <Text style={[styles.onway, {marginTop: 5}]}>4 orders</Text>
              </View>
            </View>

            {/* </View> */}
          </View>
        ) : null}
        <Toast
          ref={toastRef}
          style={styles.toast}
          position="bottom"
          positionValue={250}
          fadeInDuration={750}
          fadeOutDuration={800}
          opacity={1}
          textStyle={{color: 'red'}}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal_timer_visible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            set_modal_timer_visible(!modal_timer_visible);
          }}>
          {render_modal_view()}
        </Modal>
      </View>
    </>
  );
}
const styles = ScaledSheet.create({
  title: {
    fontSize: 18,
    // fontWeight:'700',
    fontFamily: 'Poppins-Bold',
    margin: 10,
    color: 'black',
  },
  single_order: {
    backgroundColor: colors.textWhite,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  single_orderMobile: {
    backgroundColor: colors.boxBg,
    width: '95%',
    borderRadius: verticalScale(8),
    marginRight: verticalScale(35),
  },
  order_header: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderid_text: {
    fontSize: verticalScale(12),
    color: colors.light_grey,
    fontFamily: fonts.LatoMedium,
    marginRight: verticalScale(2),
  },
  orderid_text1: {
    fontSize: verticalScale(12),
    color: colors.light_grey,
    fontFamily: fonts.LatoMedium,
    marginRight: verticalScale(2),
  },
  order_timer: {
    backgroundColor: colors.orange1,
    borderRadius: '0 0 5 5',
  },
  order_title: {
    fontSize: verticalScale(11),
    fontFamily: fonts.LatoSemiBold,
    color: colors.black,
  },
  order_item: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  cross_icon: {
    color: colors.light_grey,
    fontSize: 20,
  },
  more_order: {
    width: '50@s',
    backgroundColor: colors.primaryBlurColor,
    padding: '2@vs',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 5,
    flexDirection: 'row',
  },
  accept_btn: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  accept_btn_txt: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  order_recve_name: {
    fontSize: verticalScale(!IsTablet ? 12 : 10),
    fontFamily: fonts.LatoRegular,
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
    justifyContent: 'space-between',
    marginLeft: !IsTablet ? 10 : 0,
  },
  order_recve_loc_viewMobile: {
    flexDirection: 'column-reverse',
    marginTop: 15,
    alignItems: 'center',
  },
  changeEstimateTime: {
    fontSize: verticalScale(8),
    fontFamily: fonts.bold,
    color: colors.primary,
  },
  ready_btn: {
    backgroundColor: colors.primary,
    borderRadius: '5@vs',
    alignItems: 'center',
    paddingVertical: '5@vs',
    paddingHorizontal: '20@vs',
    justifyContent: 'center',
  },
  ready_btnMobile: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: verticalScale(10),
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
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
  onway: {
    color: colors.textWhite,
    fontFamily: 'Lato-Regular',
  },

  toast: {
    backgroundColor: colors.textWhite,
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
});

// import React, {useState} from 'react';
// import {SafeAreaView, View, Text, StatusBar, Button} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

// // import thumbIcon from './assets/thumbIcon.png';
// // import arrowRight from './assets/arrow-right.png';
// import styles from './styles';

// import SwipeButton from 'rn-swipe-button';

// const App= () =>  () => {
//   const [disableCBButton, setDisableCBButton] = useState(false)
//   const defaultStatusMessage = 'swipe status appears here';
//   const [swipeStatusMessage, setSwipeStatusMessage] = useState(
//     defaultStatusMessage,
//   );

//   setInterval(() => setSwipeStatusMessage(defaultStatusMessage), 5000);
//   const updateSwipeStatusMessage = (message) => setSwipeStatusMessage(message);
//   const renderSubHeading = (heading) => (
//     <Text style={styles.subHeading}>{heading}</Text>
//   );
//   let forceResetLastButton = null;

//   const CheckoutButton = () => {
//     return(
//         <View style={{width: 100, height: 30, backgroundColor: '#C70039', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
//             <Text style={{color: '#ffffff'}}>Checkout</Text>
//         </View>
//     );
//   }

//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <View style={styles.container}>
//           <Text style={styles.title}>React Native Swipe Button</Text>
//           <Text style={styles.swipeStatus}>{swipeStatusMessage}</Text>
//           {renderSubHeading('Disabled')}
//           <SwipeButton thumbIconImageSource={arrowRight} disabled />
//           {renderSubHeading('Swipe status callbacks')}
//           <SwipeButton
//             containerStyles={{borderRadius: 5}}
//             height={30}
//             onSwipeFail={() => updateSwipeStatusMessage('Incomplete swipe!')}
//             onSwipeStart={() => updateSwipeStatusMessage('Swipe started!')}
//             onSwipeSuccess={() =>
//               updateSwipeStatusMessage('Submitted successfully!')
//             }
//             railBackgroundColor="#31a57c"
//             railStyles={{borderRadius: 5}}
//             thumbIconComponent={CheckoutButton}
//             thumbIconImageSource={arrowRight}
//             thumbIconStyles={{borderRadius: 5}}
//             thumbIconWidth={100}
//             title="Submit order"
//           />
//           {renderSubHeading('Reverse swipe enabled')}
//           <SwipeButton
//             enableReverseSwipe
//             onSwipeSuccess={() => updateSwipeStatusMessage('Slide success!')}
//             railBackgroundColor="#a493d6"
//             thumbIconBackgroundColor="#FFFFFF"
//             title="Slide to unlock"
//           />
//           {renderSubHeading('Set a component as thumb icon & use forceReset')}
//           <SwipeButton
//             disableResetOnTap
//             forceReset={ reset => {
//               forceResetLastButton = reset
//             }}
//             railBackgroundColor="#9fc7e8"
//             railStyles={{
//               backgroundColor: '#44000088',
//               borderColor: '#880000FF',
//             }}
//             thumbIconBackgroundColor="#FFFFFF"
//             title="Slide to unlock"
//           />
//           <View style={{ alignItems: 'center', marginBottom: 5 }}>
//             <Button onPress={() => forceResetLastButton && forceResetLastButton()} title="Force reset" />
//           </View>
//           {renderSubHeading('Set .png image as thumb icon')}
//           <SwipeButton thumbIconImageSource={thumbIcon} railBackgroundColor="#cfb0dd"/>
//           {renderSubHeading('Set height & reset after successful swipe')}
//           <SwipeButton height={25} shouldResetAfterSuccess={true} resetAfterSuccessAnimDelay={1000} />
//           {renderSubHeading('Set height and width')}
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <SwipeButton height={35} width={200} title="Swipe" disabled={disableCBButton} />
//             <View style={{ marginLeft: 15, width: 150, height: 32 }}><Button onPress={() => setDisableCBButton(!disableCBButton)} title="Toggle disable" /></View>
//           </View>
//         </View>
//       </SafeAreaView>
//     </>
//   );
// };

// export default App
