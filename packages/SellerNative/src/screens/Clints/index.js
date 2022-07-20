import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import ModalViewS from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Svg, {Path, Rect} from 'react-native-svg';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ModalView} from '../../components/ModalView';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@SilalApp/common/assets/colors';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import RBSheet from 'react-native-raw-bottom-sheet';
import fonts from '@SilalApp/common/assets/fonts';
import {useTranslation} from 'react-i18next';

var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;

const Clints = ({navigation}) => {
  const [choseData, setchoseData] = useState('Sort by');
  const [ModalVisible, setModalVisible] = useState(false);
  const [ismodalVisible, setisModalVisible] = useState(false);
  const [filter, setfilter] = useState('');
  const {t} = useTranslation();
  const changeModalVisibilty = bool => {
    setModalVisible(bool);
  };
  const setData = option => {
    setchoseData(JSON.stringify(option));
  };

  const Sheet = useRef();
  const Sheet_state = useRef();

  const data = [
    {
      id: '1',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },

    {
      id: '2',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '3',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '4',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '5',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '6',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '7',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },

    {
      id: '8',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '9',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '10',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '11',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
    {
      id: '12',
      Title: 'Brooklyn Simmons',
      ID: '2341',
      TotalOrders: '59',
      Sum_of_orders: '$ 426.67',
    },
  ];

  const data1 = [
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
  ];
  const data01 = [
    {
      id: '1',
      Title: 'French fries',
      ID: '2',
    },

    {
      id: '2',
      Title: 'Cheesecakes with sour cream and citrus hone',
      ID: '1',
    },
    {
      id: '3',
      Title: 'Cheesecakes with sour cream and citrus hone',
      ID: '2',
    },
    {
      id: '4',
      Title: 'Cheesecakes with sour cream and citrus hone',
      ID: '3',
    },
  ];

  const [show_modal_Customer_Data, set_show_modal_Customer_Data] =
    useState(false);
  const [show_modal_Personal_data, set_show_modal_Personal_data] =
    useState(false);
  const [show_modal_Favourite_item, set_show_modal_Favourite_item] =
    useState(false);
  const [show_modal_order_details, set_show_modal_order_details] =
    useState(false);
  const [show_modal_Driver_Data, set_show_modal_Driver_Data] = useState(false);
  const [
    show_modal_SecondModal_order_details,
    set_show_modal_SecondModal_order_details,
  ] = useState(false);

  const [SecondModalVisible, setSecondModalVisible] = useState(false);
  const footer = () => {
    return (
      <View style={{marginTop: 10}}>
        <View style={!IsTablet ? styles.ButtonShow : styles.ButtonHide}>
          <TouchableOpacity style={styles.hideButton}>
            <Text style={styles.HideButtonText}>{t('Load_more')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const sheet_data = () => {
    return (
      <View style={styles.sheet}>
        <View style={styles.sheet_head_view}>
          <TouchableOpacity onPress={() => Sheet.current.close()}>
            <Entypo style={styles.CrossIconbts} name="cross" />
          </TouchableOpacity>
        </View>
        <View style={styles.BottomSheetContiner}>
          <Text style={{fontFamily: fonts.LatoBold, fontSize: 17}}>
            {t('Sort_By')}
          </Text>
        </View>

        <View style={styles.mianviewText}>
          <View style={styles.BottomSheetTextHead}>
            <TouchableOpacity onPress={() => setfilter('newest')}>
              <Text
                style={{
                  color: filter == 'newest' ? colors.primary : colors.black,
                  paddingVertical: 5,
                  fontFamily: fonts.LatoMedium,
                }}>
                {t('Newest_first')}
              </Text>
            </TouchableOpacity>
            {filter == 'newest' ? (
              <View style={{}}>
                <Svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M1.72853 4.3107C1.54799 4.11868 1.29894 4.00571 1.03554 3.99634C0.772144 3.98697 0.515699 4.08197 0.32197 4.26067C0.128242 4.43938 0.0128967 4.68734 0.00101728 4.95064C-0.0108622 5.21393 0.0816843 5.47127 0.258533 5.6667L3.87053 9.5857C4.40753 10.1117 5.20753 10.1117 5.70453 9.6157L6.06853 9.25669C7.38306 7.96392 8.69607 6.66958 10.0075 5.3737L10.0475 5.3337C11.2732 4.12576 12.4926 2.91141 13.7055 1.6907C13.8868 1.50089 13.9862 1.24743 13.9823 0.98499C13.9783 0.722553 13.8714 0.472185 13.6845 0.28791C13.4976 0.103635 13.2457 0.000227559 12.9833 3.75124e-07C12.7208 -0.000226808 12.4688 0.102745 12.2815 0.286696C11.0742 1.50103 9.86085 2.70938 8.64153 3.9117L8.60153 3.9517C7.3448 5.19399 6.08647 6.43466 4.82653 7.6737L1.72853 4.3107Z"
                    fill="#05AE4B"
                  />
                </Svg>
              </View>
            ) : null}
          </View>

          <View style={styles.BottomSheetTextHead}>
            <TouchableOpacity onPress={() => setfilter('oldest')}>
              <Text
                style={{
                  color: filter == 'oldest' ? colors.primary : colors.black,
                  paddingVertical: 5,
                  fontFamily: fonts.LatoMedium,
                }}>
                {t('oldest_first')}
              </Text>
            </TouchableOpacity>
            {filter == 'oldest' ? (
              <View style={{}}>
                <Svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M1.72853 4.3107C1.54799 4.11868 1.29894 4.00571 1.03554 3.99634C0.772144 3.98697 0.515699 4.08197 0.32197 4.26067C0.128242 4.43938 0.0128967 4.68734 0.00101728 4.95064C-0.0108622 5.21393 0.0816843 5.47127 0.258533 5.6667L3.87053 9.5857C4.40753 10.1117 5.20753 10.1117 5.70453 9.6157L6.06853 9.25669C7.38306 7.96392 8.69607 6.66958 10.0075 5.3737L10.0475 5.3337C11.2732 4.12576 12.4926 2.91141 13.7055 1.6907C13.8868 1.50089 13.9862 1.24743 13.9823 0.98499C13.9783 0.722553 13.8714 0.472185 13.6845 0.28791C13.4976 0.103635 13.2457 0.000227559 12.9833 3.75124e-07C12.7208 -0.000226808 12.4688 0.102745 12.2815 0.286696C11.0742 1.50103 9.86085 2.70938 8.64153 3.9117L8.60153 3.9517C7.3448 5.19399 6.08647 6.43466 4.82653 7.6737L1.72853 4.3107Z"
                    fill="#05AE4B"
                  />
                </Svg>
              </View>
            ) : null}
          </View>
          <View style={styles.BottomSheetTextHead}>
            <TouchableOpacity onPress={() => setfilter('AZ')}>
              <Text
                style={{
                  color: filter == 'AZ' ? colors.primary : colors.black,
                  paddingVertical: 5,
                  fontFamily: fonts.LatoMedium,
                }}>
                A-Z
              </Text>
            </TouchableOpacity>
            {filter == 'AZ' ? (
              <View style={{}}>
                <Svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M1.72853 4.3107C1.54799 4.11868 1.29894 4.00571 1.03554 3.99634C0.772144 3.98697 0.515699 4.08197 0.32197 4.26067C0.128242 4.43938 0.0128967 4.68734 0.00101728 4.95064C-0.0108622 5.21393 0.0816843 5.47127 0.258533 5.6667L3.87053 9.5857C4.40753 10.1117 5.20753 10.1117 5.70453 9.6157L6.06853 9.25669C7.38306 7.96392 8.69607 6.66958 10.0075 5.3737L10.0475 5.3337C11.2732 4.12576 12.4926 2.91141 13.7055 1.6907C13.8868 1.50089 13.9862 1.24743 13.9823 0.98499C13.9783 0.722553 13.8714 0.472185 13.6845 0.28791C13.4976 0.103635 13.2457 0.000227559 12.9833 3.75124e-07C12.7208 -0.000226808 12.4688 0.102745 12.2815 0.286696C11.0742 1.50103 9.86085 2.70938 8.64153 3.9117L8.60153 3.9517C7.3448 5.19399 6.08647 6.43466 4.82653 7.6737L1.72853 4.3107Z"
                    fill="#05AE4B"
                  />
                </Svg>
              </View>
            ) : null}
          </View>

          <View style={styles.BottomSheetTextHead}>
            <TouchableOpacity onPress={() => setfilter('ZA')}>
              <Text
                style={{
                  color: filter == 'ZA' ? colors.primary : colors.black,
                  paddingVertical: 5,
                  fontFamily: fonts.LatoMedium,
                }}>
                {t('Z_A')}
              </Text>
            </TouchableOpacity>
            {filter == 'ZA' ? (
              <View style={{}}>
                <Svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M1.72853 4.3107C1.54799 4.11868 1.29894 4.00571 1.03554 3.99634C0.772144 3.98697 0.515699 4.08197 0.32197 4.26067C0.128242 4.43938 0.0128967 4.68734 0.00101728 4.95064C-0.0108622 5.21393 0.0816843 5.47127 0.258533 5.6667L3.87053 9.5857C4.40753 10.1117 5.20753 10.1117 5.70453 9.6157L6.06853 9.25669C7.38306 7.96392 8.69607 6.66958 10.0075 5.3737L10.0475 5.3337C11.2732 4.12576 12.4926 2.91141 13.7055 1.6907C13.8868 1.50089 13.9862 1.24743 13.9823 0.98499C13.9783 0.722553 13.8714 0.472185 13.6845 0.28791C13.4976 0.103635 13.2457 0.000227559 12.9833 3.75124e-07C12.7208 -0.000226808 12.4688 0.102745 12.2815 0.286696C11.0742 1.50103 9.86085 2.70938 8.64153 3.9117L8.60153 3.9517C7.3448 5.19399 6.08647 6.43466 4.82653 7.6737L1.72853 4.3107Z"
                    fill="#05AE4B"
                  />
                </Svg>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    );
  };

  const Customer_Data = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            set_show_modal_Customer_Data(!show_modal_Customer_Data)
          }
          style={styles.CustomerMainTitle}>
          <Text style={styles.ModalDropdown}></Text>

          {show_modal_Customer_Data == true ? (
            <Fontisto
              name="angle-up"
              style={[styles.cross_icon, {color: colors.black}]}
            />
          ) : (
            <Fontisto
              name="angle-down"
              style={[styles.cross_icon, {color: colors.black}]}
            />
          )}
        </TouchableOpacity>
        {show_modal_Customer_Data == true ? (
          <View style={{marginTop: 10}}>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>
                
                {t('customer_name')}
              </Text>
              <Text style={styles.modal_title_second}>
            
                {t('Willson_Genemal')}
              </Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}> {t('Customer_ID')}</Text>
              <Text style={styles.modal_title_second}> 133</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}> {t('phone')}</Text>
              <Text style={styles.modal_title_second}>* * ** 112</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}> {t('address')}</Text>
              <Text style={styles.modal_title_second}>
                2715 Ash Dr. San Jose
              </Text>
            </View>
          </View>
        ) : null}
      </>
    );
  };

  const Driver_Data = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => set_show_modal_Driver_Data(!show_modal_Driver_Data)}
          style={styles.CustomerMainTitle}>
          <Text style={styles.ModalDropdown}> {t('driver_data')}</Text>

          {show_modal_Driver_Data == true ? (
            <Fontisto
              name="angle-up"
              style={[styles.cross_icon, {color: colors.black}]}
            />
          ) : (
            <Fontisto
              name="angle-down"
              style={[styles.cross_icon, {color: colors.black}]}
            />
          )}
        </TouchableOpacity>
        {show_modal_Driver_Data == true ? (
          <View style={{marginTop: 10}}>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}> {t('Driver_name')}</Text>
              <Text style={styles.modal_title_second}>
                {' '}
                {t('Willson_Genemal')}
              </Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>
                {' '}
                {t('Delivery_time')}
              </Text>
              <Text style={styles.modal_title_second}>37 minutes</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('phone')}</Text>
              <Text style={styles.modal_title_second}>* * ** 112</Text>
            </View>
          </View>
        ) : null}
      </>
    );
  };

  const SecondModal_order_details = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            set_show_modal_SecondModal_order_details(
              !show_modal_SecondModal_order_details,
            )
          }
          style={styles.CustomerMainTitle}>
          <Text style={styles.ModalDropdown}>{t('order_details')}</Text>

          {show_modal_SecondModal_order_details == true ? (
            <Fontisto
              name="angle-up"
              style={[styles.cross_icon, {color: colors.black}]}
            />
          ) : (
            <Fontisto
              name="angle-down"
              style={[styles.cross_icon, {color: colors.black}]}
            />
          )}
        </TouchableOpacity>
        {show_modal_SecondModal_order_details == true ? (
          <View style={{marginTop: 10}}>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('Order_created')}</Text>
              <Text style={styles.modal_title_second}>13.11.2021</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('Payment')}</Text>
              <Text style={styles.modal_title_second}>'$ 13.00</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('credit_card')}</Text>
              <Text style={styles.modal_title_second}>** ** ** 3782</Text>
            </View>

            <FlatList
              data={data01}
              numColumns={1}
              style={{marginBottom: 90, marginVertical: 30}}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={{flexDirection: 'row', width: '90%'}}>
                  <Text style={styles.IdSecondModal}>{item.ID}</Text>
                  <Entypo style={styles.CrossIconSecondModal} name="cross" />
                  <Text style={styles.SecondModalTile}>{item.Title}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        ) : null}
      </>
    );
  };

  const Personal_data = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            set_show_modal_Personal_data(!show_modal_Personal_data)
          }
          style={styles.CustomerMainTitle}>
          <Text style={styles.ModalDropdown}>{t('personal_Data')}</Text>

          {show_modal_Personal_data == true ? (
            <Fontisto
              name="angle-up"
              style={[styles.cross_icon, {color: colors.black}]}
            />
          ) : (
            <Fontisto
              name="angle-down"
              style={[styles.cross_icon, {color: colors.black}]}
            />
          )}
        </TouchableOpacity>
        {show_modal_Personal_data == true ? (
          <View style={{marginTop: 10}}>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('Total_orders')}</Text>
              <Text style={styles.modal_title_second}>43</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('Sumof_order')}</Text>
              <Text style={styles.modal_title_second}>{t('$ 423.90')}</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>
                {t('Average_amount')}
              </Text>
              <Text style={styles.modal_title_second}>$ 13</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>{t('credit_card')}</Text>
              <Text style={styles.modal_title_second}>
                ** ** ** 4543{' '}
              </Text>
            </View>
          </View>
        ) : null}
      </>
    );
  };
  const Favourite_item = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            set_show_modal_Favourite_item(!show_modal_Favourite_item)
          }
          style={styles.CustomerMainTitle}>
          <Text style={styles.ModalDropdown}>{t('FAVOURITE_ITEMS')}</Text>

          {show_modal_Favourite_item == true ? (
            <Fontisto
              name="angle-up"
              style={[styles.cross_icon, {color: colors.black}]}
            />
          ) : (
            <Fontisto
              name="angle-down"
              style={[styles.cross_icon, {color: colors.black}]}
            />
          )}
        </TouchableOpacity>
        {show_modal_Favourite_item == true ? (
          <View style={{marginTop: 10}}>
            <FlatList
              data={data}
              numColumns={2}
              style={{marginBottom: 5}}
              showsVerticalScrollIndicator={true}
              renderItem={({item}) => (
                <View style={styles.FlatListMainView2}>
                  <Image
                    source={require('../../Assets/image12.png')}
                    style={{
                      height: !IsTablet ? 150 : 190,
                      width: !IsTablet ? 150 : 190,
                      resizeMode: 'contain',
                      borderRadius: 5,
                      overflow: 'hidden',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      color: colors.black,
                      fontFamily: fonts.LatoRegular,
                      paddingVertical: 10,
                    }}>
                    Chicken burger in cheese sauce with mushrooms
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: colors.black,
                      fontFamily: fonts.PoppinsSemiBold,
                    }}>
                    $ 4.00
                  </Text>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        ) : null}
      </>
    );
  };

  const order_details = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            set_show_modal_order_details(!show_modal_order_details)
          }
          style={styles.CustomerMainTitle}>
          <Text style={styles.ModalDropdown}>{t('order_details')}</Text>
          {show_modal_order_details == true ? (
            <Fontisto
              name="angle-up"
              style={[styles.cross_icon, {color: colors.black, fontSize: 16}]}
            />
          ) : (
            <Fontisto
              name="angle-down"
              style={[styles.cross_icon, {color: colors.black, fontSize: 16}]}
            />
          )}
        </TouchableOpacity>
        {show_modal_order_details == true ? (
          <View>
            <View style={styles.SearchMainViewModal}>
              <EvilIcons name="search" style={[styles.SearchIcon]} />
              <TextInput
                placeholder="Search by order #"
                placeholderTextColor={colors.gray_light}
                paddingHorizontal={32}
                style={[styles.Input, {width: '97%'}]}
              />
            </View>
            <FlatList
              data={data1}
              numColumns={1}
              style={{marginBottom: 90}}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => setSecondModalVisible(true)}
                  style={styles.whiteDive}>
                  <View style={styles.SpaceBetweenTitleWhite}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontSize: 18,
                          paddingTop: 5,
                          color: colors.light_grey,
                        }}>
                        {t('order_id')}
                      </Text>
                      <Text style={styles.OrderIdentityCode}>
                        {item.Identity}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.TimeBar}>{item.Code}</Text>
                    </View>
                  </View>
                  <View style={styles.FlatStyle}>
                    <Text
                      style={{
                        color: colors.black,
                        fontSize: 17,
                        paddingHorizontal: 4,
                      }}>
                      2
                    </Text>
                    <TouchableOpacity>
                      <Entypo
                        name="cross"
                        size={17}
                        style={{paddingTop: 3, paddingHorizontal: 4}}
                        color={colors.light_grey}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: colors.black,
                        fontSize: 17,
                        paddingHorizontal: 4,
                      }}>
                      {item.order1}
                    </Text>
                  </View>

                  <View style={styles.FlatStyle}>
                    <Text
                      style={{
                        color: colors.black,
                        fontSize: 17,
                        paddingHorizontal: 4,
                      }}>
                      1
                    </Text>
                    <Entypo
                      name="cross"
                      size={17}
                      style={{paddingTop: 3, paddingHorizontal: 4}}
                      color={colors.light_grey}
                    />
                    <Text style={styles.ItemId2}>{item.order2}</Text>
                  </View>

                  <TouchableOpacity style={styles.MoreOrderShow}>
                    <Text style={{color: colors.primary}}>3 more</Text>
                  </TouchableOpacity>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.paymentMethod}>
                      {t('payment_method')}
                    </Text>
                    <Text style={[styles.CreditCard]}> {t('credit_card')}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.paymentMethod]}>{t('card_data')}</Text>
                    <Text style={styles.CreditCard}>** ** ** 3782</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        ) : null}
      </>
    );
  };

  return (
    <SafeAreaView
      style={
        !IsTablet ? styles.ContainerClientsMobile : styles.ContainerClients
      }>
      {/* <KeyboardAvoidingView> */}

      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialCommunityIcons
          name="menu"
          size={moderateScale(!IsTablet ? 26 : 22)}
          style={{marginTop: 10, marginHorizontal: 15}}
        />
      </TouchableOpacity>

      <View style={{padding: 5}}>
        <Modal
          animationType="slide"
          transparent={true}
          onBackdropPress={() => ismodalVisible(false)}
          visible={ismodalVisible}
          onRequestClose={() => {
            setisModalVisible(!ismodalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={IsTablet ? styles.modalView : styles.modalViewMobile}>
              <ScrollView>
                <TouchableOpacity
                  onPress={() => setisModalVisible(!ismodalVisible)}
                  style={styles.crossButtonModal}>
                  <Entypo
                    name="cross"
                    style={[{color: colors.sidebar, fontSize: 30}]}
                  />
                </TouchableOpacity>

                {SecondModalVisible == false ? (
                  <View>
                    <View
                      style={
                        !IsTablet
                          ? styles.modal_headerMobile
                          : styles.modal_header
                      }>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity
                          onPress={() => setisModalVisible(!ismodalVisible)}
                          style={
                            IsTablet
                              ? styles.CloseMainModal
                              : styles.CloseMainModalMobile
                          }>
                          <MaterialCommunityIcons
                            name="keyboard-backspace"
                            style={styles.SecondModalIcon}
                          />
                        </TouchableOpacity>

                        <Text style={styles.orderid_text}>
                          {t('Willson_Genemal')}
                        </Text>
                        <View style={styles.modal_recuring}>
                          <Text
                            style={{
                              color: colors.textWhite,
                              fontFamily: fonts.LatoRegular,
                            }}>
                            {t('recurring_client')}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: colors.light_grey,
                          fontFamily: fonts.LatoBold,
                          width: 110,
                        }}>
                        {t('Customer_Id')}
                      </Text>

                      <Text
                        style={{
                          color: colors.black,
                          fontFamily: fonts.LatoBold,
                        }}>
                        {t('#644')}
                      </Text>
                    </View>
                  </View>
                ) : null}
                {SecondModalVisible == true ? (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: 340,
                        marginTop: IsTablet ? 5 : 20,
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          setSecondModalVisible(!SecondModalVisible)
                        }
                        style={styles.SecondModalContainer}>
                        <MaterialCommunityIcons
                          name="keyboard-backspace"
                          style={styles.SecondModalIcon}
                        />
                        <Text style={styles.SecondModalText}>
                          {t('Order #723DN8')}
                        </Text>
                      </TouchableOpacity>
                      <View style={styles.SecondModalCompleteView}>
                        <Text style={styles.SecondViewCompleteText}>
                          {t('completed')}
                        </Text>
                      </View>
                    </View>
                    {Customer_Data()}
                    {Driver_Data()}
                    {SecondModal_order_details()}
                  </View>
                ) : (
                  <>
                    {Personal_data()}
                    {Favourite_item()}
                    {order_details()}
                  </>
                )}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
      <View
        style={!IsTablet ? styles.HeaderSectionMobile : styles.HeaderSection}>
        <Text
          style={
            !IsTablet
              ? styles.ClintPageMainheadingMobile
              : styles.ClintPageMainheading
          }>
          {t('Clients_database')}
        </Text>
        <View style={!IsTablet ? styles.SearchBarMobile : styles.SearchBar}>
          <EvilIcons name="search" style={styles.SearchIcon} />
          <TextInput
            placeholder="Search by orders #, phone or name..."
            placeholderTextColor={colors.gray_light}
            paddingHorizontal={32}
            style={!IsTablet ? styles.InputMobile : styles.Input}
          />
          {/* Bottom Sheet */}
          {!IsTablet == true ? (
            <>
              <TouchableOpacity
                onPress={() => Sheet.current.open()}
                style={{paddingHorizontal: 15}}>
                <Svg
                  width="44"
                  height="40"
                  viewBox="0 0 44 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Rect width="44" height="40" rx="8" fill="white" />
                  <Path
                    d="M17.2434 13.5781C17.5689 13.2526 18.0965 13.2526 18.4219 13.5781L21.7553 16.9114C22.0807 17.2368 22.0807 17.7645 21.7553 18.0899C21.4298 18.4153 20.9022 18.4153 20.5768 18.0899L18.666 16.1792V25.834C18.666 26.2942 18.2929 26.6673 17.8327 26.6673C17.3724 26.6673 16.9993 26.2942 16.9993 25.834V16.1792L15.0886 18.0899C14.7632 18.4153 14.2355 18.4153 13.9101 18.0899C13.5847 17.7645 13.5847 17.2368 13.9101 16.9114L17.2434 13.5781ZM25.3327 23.8221V14.1673C25.3327 13.7071 25.7058 13.334 26.166 13.334C26.6263 13.334 26.9994 13.7071 26.9994 14.1673V23.8221L28.9101 21.9114C29.2355 21.586 29.7632 21.586 30.0886 21.9114C30.414 22.2368 30.414 22.7645 30.0886 23.0899L26.7553 26.4232C26.599 26.5795 26.387 26.6673 26.166 26.6673C25.945 26.6673 25.733 26.5795 25.5768 26.4232L22.2434 23.0899C21.918 22.7645 21.918 22.2368 22.2434 21.9114C22.5689 21.586 23.0965 21.586 23.4219 21.9114L25.3327 23.8221Z"
                    fill="#C9D2D4"
                  />
                  <Rect
                    x="0.5"
                    y="0.5"
                    width="43"
                    height="39"
                    rx="7.5"
                    stroke="#E8E8E8"
                    stroke-opacity="0.5"
                  />
                </Svg>
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
                    backgroundColor: colors.dullWhite,
                  },
                }}>
                {sheet_data()}
              </RBSheet>
            </>
          ) : null}
        </View>
        {IsTablet ? 
        <TouchableOpacity
          onPress={() => changeModalVisibilty(true)}
          style={[
            styles.modelTextTitle,
            {backgroundColor: colors.textWhite, elevation: 0.5},
          ]}>
          <View style={{paddingHorizontal: 5}}>
            <Svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M4.50628 0.576109C4.84799 0.250672 5.40201 0.250672 5.74372 0.576109L9.24372 3.90944C9.58543 4.23488 9.58543 4.76252 9.24372 5.08795C8.90201 5.41339 8.34799 5.41339 8.00628 5.08795L6 3.17721V12.832C6 13.2923 5.60825 13.6654 5.125 13.6654C4.64175 13.6654 4.25 13.2923 4.25 12.832V3.17721L2.24372 5.08795C1.90201 5.41339 1.34799 5.41339 1.00628 5.08795C0.664573 4.76252 0.664573 4.23488 1.00628 3.90944L4.50628 0.576109ZM13 10.8202V1.16536C13 0.705127 13.3918 0.332031 13.875 0.332031C14.3583 0.332031 14.75 0.705127 14.75 1.16536V10.8202L16.7563 8.90944C17.098 8.584 17.652 8.584 17.9937 8.90944C18.3354 9.23488 18.3354 9.76252 17.9937 10.088L14.4937 13.4213C14.3296 13.5776 14.1071 13.6654 13.875 13.6654C13.6429 13.6654 13.4204 13.5776 13.2563 13.4213L9.75628 10.088C9.41457 9.76252 9.41457 9.23488 9.75628 8.90944C10.098 8.584 10.652 8.584 10.9937 8.90944L13 10.8202Z"
                fill="#4C6870"
              />
            </Svg>
          </View>
          <Text style={styles.SortedDrop}>{choseData}</Text>
          <AntDesign name="down" style={styles.SortBy} />
        </TouchableOpacity>
        :
        null
        }
        <ModalViewS
          transparent={true}
          animationType="fade"
          onBackdropPress={() => changeModalVisibilty(false)}
          visible={ModalVisible}
          nRequestClose={() => changeModalVisibilty(false)}>
          <ModalView
            changeModalVisibilty={changeModalVisibilty}
            setData={setData}
          />
        </ModalViewS>
      </View>
      {/* <View style={{ marginTop: 5, marginBottom: 120 }}> */}
      <FlatList
        data={data}
        numColumns={!IsTablet ? '1' : '3'}
        ListFooterComponent={footer}
        style={!IsTablet ? styles.FlatListMobileMain : styles.FlatListMain}
        renderItem={({item}) => (
          <View
            style={
              !IsTablet
                ? styles.FlatListMainViewMobile
                : styles.FlatListMainView
            }>
            <TouchableOpacity
              onPress={() => {
                setSecondModalVisible(false), setisModalVisible(true);
              }}>
              <View style={styles.GreenBkgFlat}>
                <Text
                  style={
                    !IsTablet
                      ? styles.TitleMainTextFlatMobile
                      : styles.TitleMainTextFlat
                  }>
                  {item.Title}
                </Text>
                <Text
                  style={
                    !IsTablet
                      ? styles.ButtonFlatListMobile
                      : styles.ButtonFlatList
                  }>
                  {t('reccuring_Client')}
                </Text>
              </View>
              <View style={styles.OrderFlat}>
                <View style={styles.ClintDataBaseDate}>
                  <Text style={styles.FlatIdDynamic}>{t('Client_id')}:</Text>
                  <Text style={styles.OrderFlat}>{item.ID}</Text>
                </View>
                <View style={styles.ClintDataBaseDate}>
                  <Text style={styles.FlatIdDynamic}>{t('total_order')}:</Text>
                  <Text style={styles.OrderFlat}>{item.TotalOrders}</Text>
                </View>
                <View style={[styles.ClintDataBaseDate, styles.ClintData1]}>
                  <Text style={styles.FlatIdDynamic}>{t('Sumof_order')}:</Text>
                  <Text style={styles.OrderFlat}> {item.Sum_of_orders}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Clints;