import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Toast from 'react-native-easy-toast';

import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Rect,
  Circle,
  G,
} from 'react-native-svg';
import {ScrollView} from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import colors from '@SilalApp/common/assets/colors';
const {width, height} = Dimensions.get('window');

const App = ({navigation, route}) => {
  const {t}=useTranslation();
  const status = route?.params?.status;
  const [color, setColor] = useState('green');
  const [cancel_text, set_cancel_text] = useState('');
  const [modal_cancel, setmodal_cancel] = useState(false);
  const toastRef = useRef();
  console.log('--Status', status)

  useEffect(() => {
    const detectLogin = async () => {
      // console.log('aaaaaaaaabbbbbbb',route.params.status);
    };
    detectLogin();
  }, []);

  const data = [
    {
      id: '1',
      Title: '',
      qty: '2',
      price: '$200',
    },
    {
      id: '2',
      Title: '',
      qty: '1',
      price: '$400',
    },
    {
      id: '3',
      Title: "Please do not add onion and fry it without oil. I'm allergic.",
      qty: '1',
      price: '$300',
    },
    {
      id: '4',
      Title: '',
      qty: '2',
      price: '$100',
    },
    {
      id: '5',
      Title: '',
      qty: '1',
      price: '$400',
    },
    {
      id: '6',
      Title: '',
      qty: '1',
      price: '$700',
    },
    {
      id: '7',
      Title: '',
      qty: '2',
      price: '$300',
    },
    {
      id: '8',
      Title: '',
      qty: '1',
      price: '$600',
    },
  ];

  const order_list_header = () => {
    return (
      <View
        style={{flexDirection: 'row', marginTop: 20, paddingHorizontal: 20}}>
        <View style={{width: '50%'}}>
          <Text style={{fontFamily: 'Lato-regular'}}>{t("Item")}</Text>
        </View>
        <View style={{width: '15%'}}>
          <Text style={{fontFamily: 'Lato-regular'}}>Q-ty</Text>
        </View>
        <View style={{width: '17%'}}>
          <Text style={{fontFamily: 'Lato-regular'}}>{t("price")}</Text>
        </View>
        <View style={{width: '18%'}}>
          <Text style={{fontFamily: 'Lato-regular'}}>{t("total-price")}</Text>
        </View>
      </View>
    );
  };
  const order_list_data = () => {
    return (
      <FlatList
        // ListHeaderComponent={header_alloredrs}
        contentContainerStyle={{paddingHorizontal: 20}}
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity style={styles.render_all_orders}>
              <View
                style={[
                  styles.render_all_order_single,
                  {width: '50%', flexDirection: 'row', alignItems: 'center'},
                ]}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
                  }}
                  style={{width: 60, height: 60, borderRadius: 5}}
                />
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    marginLeft: 10,
                    flex: 1,
                    marginRight: 5,
                  }}>
                  cheesecakes with sour cream and citrus hone
                </Text>
              </View>
              <View style={[styles.render_all_order_single, {width: '15%'}]}>
                <Text style={{fontFamily: 'Lato-Regular'}}>{item.qty}</Text>
                {/* <Text style={{fontFamily:'Lato-Regular',}}>{item.qty}</Text>
                  <Text style={{fontFamily:'Lato-Regular',}}>{item.qty}</Text>
                  <Text style={{fontFamily:'Lato-Regular',}}>{item.qty}</Text>
                  <Text style={{fontFamily:'Lato-Regular',}}>{item.qty}</Text> */}
              </View>
              <View style={[styles.render_all_order_single, {width: '17%'}]}>
                <Text style={{fontFamily: 'Lato-Regular'}}>{item.price}</Text>
              </View>
              <View style={[styles.render_all_order_single, {width: '18%'}]}>
                <Text style={{fontFamily: 'Poppins-SemiBold', color: 'black'}}>
                  {item.price}
                </Text>
              </View>
            </TouchableOpacity>
            {item.Title == '' ? null : (
              <View
                style={{
                  backgroundColor: '#F2F2F2',
                  borderRadius: 5,
                  height: 40,
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: 'Lato-Bold',
                    color: 'black',
                  }}>
                  {t("Note")}:
                </Text>
                <Text style={{marginLeft: 10, fontFamily: 'Lato-Regular'}}>
                  Please do not add onion and fry it without oil. I'm allergic.
                </Text>
              </View>
            )}
            <View style={{height: 1, backgroundColor: '#EBEEEF'}}></View>
          </View>
        )}
      />
    );
  };
  const bottom_order = () => {
    return (
      <View
        style={{
          backgroundColor: '#4C6870',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}>
        <View>
          <Text style={{color: '#CCD4D6', fontFamily: 'Poppins-SemiBold'}}>
           {t("Delivery")}
          </Text>
          <Text style={styles.bottom_bar_text}>{t("Order_total")}</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={{color: '#CCD4D6'}}>$2.00</Text>
          <Text style={styles.bottom_bar_text}>$21.70</Text>
        </View>
      </View>
    );
  };
  const Details = () => {
    return (
      <View style={{padding: 10, backgroundColor: 'white', borderRadius: 5}}>
        <Text style={styles.header_order_txt}>{t("Detail")}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{width: '50%'}}>
            <Text
              style={{color: '#CCD4D6', fontSize: 15, fontFamily: 'Lato-Bold'}}>
             {t("Customer")}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontFamily: 'Lato-Regular',
                marginTop: 5,
              }}>
              Olive johnanson
            </Text>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View
                style={{
                  backgroundColor: '#EAE6FF',
                  padding: 12,
                  borderRadius: 5,
                }}>
                <Svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M18 13.42V16.956C18.0001 17.2092 17.9042 17.453 17.7316 17.6382C17.559 17.8234 17.3226 17.9363 17.07 17.954C16.633 17.984 16.276 18 16 18C7.163 18 0 10.837 0 2C0 1.724 0.015 1.367 0.046 0.93C0.0637224 0.677444 0.176581 0.441011 0.361804 0.268409C0.547026 0.0958068 0.790823 -0.000114433 1.044 2.56579e-07H4.58C4.70404 -0.000125334 4.8237 0.045859 4.91573 0.12902C5.00776 0.212182 5.0656 0.326583 5.078 0.45C5.101 0.68 5.122 0.863 5.142 1.002C5.34073 2.38892 5.748 3.73783 6.35 5.003C6.445 5.203 6.383 5.442 6.203 5.57L4.045 7.112C5.36445 10.1865 7.81455 12.6365 10.889 13.956L12.429 11.802C12.4919 11.714 12.5838 11.6509 12.6885 11.6237C12.7932 11.5964 12.9042 11.6068 13.002 11.653C14.267 12.2539 15.6156 12.6601 17.002 12.858C17.141 12.878 17.324 12.9 17.552 12.922C17.6752 12.9346 17.7894 12.9926 17.8724 13.0846C17.9553 13.1766 18.0012 13.2961 18.001 13.42H18Z"
                    fill="#0747A6"
                  />
                </Svg>
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={styles.order_recve_name}>Wade Wamen</Text>
                <Text style={{fontSize: 17, fontFamily: 'Lato-Regular'}}>
                  (808)555-0111
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#EAE6FF',
                  padding: 12,
                  borderRadius: 5,
                }}>
                <Svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M15.364 15.3639L9 21.7279L2.636 15.3639C1.37734 14.1052 0.520187 12.5016 0.172928 10.7558C-0.17433 9.00995 0.00390685 7.20035 0.685099 5.55582C1.36629 3.91129 2.51984 2.50569 3.99988 1.51677C5.47992 0.527838 7.21998 0 9 0C10.78 0 12.5201 0.527838 14.0001 1.51677C15.4802 2.50569 16.6337 3.91129 17.3149 5.55582C17.9961 7.20035 18.1743 9.00995 17.8271 10.7558C17.4798 12.5016 16.6227 14.1052 15.364 15.3639ZM9 10.9999C9.53044 10.9999 10.0391 10.7892 10.4142 10.4141C10.7893 10.0391 11 9.53035 11 8.99992C11 8.46949 10.7893 7.96078 10.4142 7.58571C10.0391 7.21064 9.53044 6.99992 9 6.99992C8.46957 6.99992 7.96086 7.21064 7.58579 7.58571C7.21072 7.96078 7 8.46949 7 8.99992C7 9.53035 7.21072 10.0391 7.58579 10.4141C7.96086 10.7892 8.46957 10.9999 9 10.9999Z"
                    fill="#6554C0"
                  />
                </Svg>
              </View>

              <View style={{marginLeft: 10}}>
                <Text style={styles.order_recve_name}>
                  8502 Preston Rd.Inglewood
                </Text>
              </View>
            </View>
          </View>
          <View style={{width: '50%'}}>
            <Text
              style={{color: '#CCD4D6', fontSize: 15, fontFamily: 'Lato-Bold'}}>
              {t("Driver")}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontFamily: 'Lato-Regular',
                marginTop: 5,
              }}>
              Olive johnanson
            </Text>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View
                style={{
                  backgroundColor: '#EAE6FF',
                  padding: 12,
                  borderRadius: 5,
                }}>
                <Svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M18 13.42V16.956C18.0001 17.2092 17.9042 17.453 17.7316 17.6382C17.559 17.8234 17.3226 17.9363 17.07 17.954C16.633 17.984 16.276 18 16 18C7.163 18 0 10.837 0 2C0 1.724 0.015 1.367 0.046 0.93C0.0637224 0.677444 0.176581 0.441011 0.361804 0.268409C0.547026 0.0958068 0.790823 -0.000114433 1.044 2.56579e-07H4.58C4.70404 -0.000125334 4.8237 0.045859 4.91573 0.12902C5.00776 0.212182 5.0656 0.326583 5.078 0.45C5.101 0.68 5.122 0.863 5.142 1.002C5.34073 2.38892 5.748 3.73783 6.35 5.003C6.445 5.203 6.383 5.442 6.203 5.57L4.045 7.112C5.36445 10.1865 7.81455 12.6365 10.889 13.956L12.429 11.802C12.4919 11.714 12.5838 11.6509 12.6885 11.6237C12.7932 11.5964 12.9042 11.6068 13.002 11.653C14.267 12.2539 15.6156 12.6601 17.002 12.858C17.141 12.878 17.324 12.9 17.552 12.922C17.6752 12.9346 17.7894 12.9926 17.8724 13.0846C17.9553 13.1766 18.0012 13.2961 18.001 13.42H18Z"
                    fill="#0747A6"
                  />
                </Svg>
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={styles.order_recve_name}>Wade Wamen</Text>
                <Text style={{fontSize: 17, fontFamily: 'Lato-Regular'}}>
                  (808)555-0111
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#EAE6FF',
                  padding: 12,
                  borderRadius: 5,
                }}>
                <Svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M15.364 15.3639L9 21.7279L2.636 15.3639C1.37734 14.1052 0.520187 12.5016 0.172928 10.7558C-0.17433 9.00995 0.00390685 7.20035 0.685099 5.55582C1.36629 3.91129 2.51984 2.50569 3.99988 1.51677C5.47992 0.527838 7.21998 0 9 0C10.78 0 12.5201 0.527838 14.0001 1.51677C15.4802 2.50569 16.6337 3.91129 17.3149 5.55582C17.9961 7.20035 18.1743 9.00995 17.8271 10.7558C17.4798 12.5016 16.6227 14.1052 15.364 15.3639ZM9 10.9999C9.53044 10.9999 10.0391 10.7892 10.4142 10.4141C10.7893 10.0391 11 9.53035 11 8.99992C11 8.46949 10.7893 7.96078 10.4142 7.58571C10.0391 7.21064 9.53044 6.99992 9 6.99992C8.46957 6.99992 7.96086 7.21064 7.58579 7.58571C7.21072 7.96078 7 8.46949 7 8.99992C7 9.53035 7.21072 10.0391 7.58579 10.4141C7.96086 10.7892 8.46957 10.9999 9 10.9999Z"
                    fill="#6554C0"
                  />
                </Svg>
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={styles.order_recve_name}>15 min away </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const History = () => {
    return (
      <ScrollView
        style={{backgroundColor: 'white', marginTop: 20, borderRadius: 5}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 10,
          }}>
          <Text style={styles.header_order_txt}>{t("History")}</Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 30,
                  backgroundColor: '#5AB3A8',
                }}></View>
              <View
                style={{
                  height: 40,
                  width: 2,
                  backgroundColor: '#5AB3A8',
                }}></View>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 30,
                  backgroundColor: '#5AB3A8',
                }}></View>
              <View
                style={{
                  height: 40,
                  width: 2,
                  backgroundColor: '#5AB3A8',
                }}></View>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 30,
                  backgroundColor: '#DEF0EE',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    backgroundColor: '#5AB3A8',
                    borderRadius: 30,
                  }}></View>
              </View>
              <View
                style={{
                  height: 40,
                  width: 2,
                  backgroundColor: '#5AB3A8',
                }}></View>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 30,
                  backgroundColor: '#DEF0EE',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    backgroundColor: '#5AB3A8',
                    borderRadius: 30,
                  }}></View>
              </View>
            </View>
            <View style={{marginLeft: 10}}>
              <View style={{marginTop: -3}}>
                <Text style={[styles.history_title, {color: '#002733'}]}>
                 {t("Order_created")}
                </Text>
                <Text style={[styles.history_date, {color: '#002733'}]}>
                  10.22.2021 14.47
                </Text>
              </View>
              <View style={{marginTop: 33}}>
                <Text style={[styles.history_title, {color: '#002733'}]}>
                  {t("Order_Preperation")}
                </Text>
                <Text style={[styles.history_date, {color: '#002733'}]}>
                  10.22.2021 14.47
                </Text>
              </View>
              <View style={{marginTop: 33}}>
                <Text style={[styles.history_title, {color: '#CCD4D6'}]}>
                  {t("order_picked")}
                </Text>
                <Text style={[styles.history_date, {color: '#CCD4D6'}]}>
                  10.22.2021 14.47
                </Text>
              </View>
              <View style={{marginTop: 33}}>
                <Text style={[styles.history_title, {color: '#CCD4D6'}]}>
                  {t("order_Delivered")}
                </Text>
                <Text style={[styles.history_date, {color: '#CCD4D6'}]}>
                  10.22.2021 14.47
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor:colors.primaryBlur,
              borderRadius: 5,
              padding: 10,
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text style={{color: colors.primary, fontFamily: 'Poppins-SemiBold'}}>
              Change estimation time
            </Text>
          </TouchableOpacity>
          {status == 'from_current' ? (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => setmodal_cancel(true)}
                style={{
                  backgroundColor: '#CCD4D6',
                  borderRadius: 5,
                  padding: 10,
                  alignItems: 'center',
                  width: '38%',
                }}>
                <Text style={{color: 'white', fontFamily: 'Poppins-SemiBold'}}>
                 {t("Cancel_order")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#5AB3A8',
                  borderRadius: 5,
                  padding: 10,
                  alignItems: 'center',
                  width: '58%',
                }}>
                <Text style={{color: 'white', fontFamily: 'Poppins-SemiBold'}}>
                  {t("ready_for_pickup")}
                </Text>
              </TouchableOpacity>
            </View>
          ):(
            <TouchableOpacity
            style={{
              backgroundColor: '#5AB3A8',
              borderRadius: 5,
              padding: 10,
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{color: 'white', fontFamily: 'Poppins-SemiBold'}}>
              {t("ready_for_pickup")}
            </Text>
          </TouchableOpacity>
          )}
        </View>
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
            <Text style={styles.modal_heading}>
              {t("Indicate_reason")}
            </Text>
            <TouchableOpacity onPress={() => setmodal_cancel(!modal_cancel)}>
              <Entypo
                name="cross"
                style={[styles.cross_icon, {color: '#4C6870', fontSize: 25}]}
              />
            </TouchableOpacity>
          </View>
          <Text style={{color: '#002733', fontSize: 15, marginTop: 5}}>
            {t("we_notify_client")}
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
              value={cancel_text}
              textAlignVertical="top"
              numberOfLines={3}
              onChangeText={n => set_cancel_text(n)}
              placeholder="Type here..."
              placeholderTextColor="#4C6870"
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 40,
              }}>
              <TouchableOpacity
                onPress={() => setmodal_cancel(!modal_cancel)}
                style={[styles.modal_save_btn, {backgroundColor: '#CCD4D6'}]}>
                <Text style={{color: 'black'}}>{t("Cancel")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setmodal_cancel(false);
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
                        Order #247HW9 was cancelled
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
                <Text style={{color: 'white'}}>{t("Submit")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5
            name="arrow-left"
            style={{color: '#002733', fontSize: 26}}
          />
        </TouchableOpacity>
        <Text style={styles.header_text}>Order ID #247HW9</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
        <View style={{width: '60%', backgroundColor: 'white', borderRadius: 5}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.header_order_txt}>Oredr list</Text>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: '#4C6870',
                  marginLeft: 5,
                }}>
                (6 items)
              </Text>
              <Text
                style={{
                  padding: 5,
                  backgroundColor: '#E6F4F2',
                  borderRadius: 5,
                  marginLeft: 10,
                  fontSize: 11,
                  color: '#008DA6',
                  fontFamily: 'Lato-Regular',
                }}>
                Credit card
              </Text>
            </View>
            <Text
              style={[
                styles.header_order_txt,
                {fontSize: 16, fontFamily: 'Lato-Bold'},
              ]}>
              14:58:15
            </Text>
          </View>
          <View style={{height: '95%'}}>
            {order_list_header()}
            {order_list_data()}
            {bottom_order()}
          </View>
        </View>

        <View
          style={{flex: 1, marginLeft: 20, borderRadius: 5, height: '103%'}}>
          {Details()}
          {History()}
        </View>

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
          visible={modal_cancel}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setmodal_cancel(!modal_cancel);
          }}>
          {render_modal_view()}
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#E5E5E5',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_text: {
    fontFamily: 'Poppins-Bold',
    marginLeft: 15,
    fontSize: 25,
    color: 'black',
  },
  header_order_txt: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    fontSize: 19,
  },
  render_all_orders: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
  },
  bottom_bar_text: {
    color: '#CCD4D6',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 19,
    color: 'white',
  },
  history_title: {
    fontFamily: 'Lato-Regular',
    fontSize: 13,
  },
  history_date: {
    fontFamily: 'Lato-Regular',
    fontSize: 11,
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
    backgroundColor: '#5AB3A8',
    width: 210,
    padding: 10,
    borderRadius: 5,
  },
  modal_heading: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },

  toast: {
    backgroundColor: '#FFFFFF',
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
  cross_icon: {
    color: '#CCD4D6',
    fontSize: 20,
  },
});

export default App;
