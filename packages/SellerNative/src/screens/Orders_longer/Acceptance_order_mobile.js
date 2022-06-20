import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  BackHandler,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
  Modal,
  ScrollView,
  Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '@SilalApp/common/components/native/TextInput/index';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Fontisto from 'react-native-vector-icons/Fontisto';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
// import { Image, SvgXml } from 'react-native-svg';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Rect,
  Circle,
  G,
} from 'react-native-svg';
import DatePicker from './../../components/DatePicker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Searchbar} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {useTranslation} from 'react-i18next';
import CustomText from '@SilalApp/common/components/CustomText';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
import {color} from 'react-native-elements/dist/helpers';
import colors from '@SilalApp/common/assets/colors';
import images from '../../../assets/images';
import OrderItem from '../orders/Archive/molecules/OrderItem';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

export default function Acceptance_order_mobile({title, navigation}) {
  console.log(navigation);
  const {t} = useTranslation();
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  const [modalVisible, setModalVisible] = useState(false);
  const [show_modal_customer_data, set_show_modal_customer_data] =
    useState(false);
  const [show_modal_driver_data, set_show_modal_driver_data] = useState(false);
  const [show_modal_order_details, set_show_modal_order_details] =
    useState(false);
  const [show_order_detail_view, set_show_order_detail_view] = useState(false);
  const [selected_index, set_selected_index] = useState('');
  const [search_value, set_search_value] = useState('');
  const [search_filters, set_search_filters] = useState('');
  const [refresher, setRefresh] = useState(false);
  const [delivery_method, setdelivery_method] = useState();
  const [category, setcategory] = useState();
  const [pickup_time, setpickup_time] = useState();
  const [status, setstatus] = useState();
  const [date1, setdate1] = useState();
  const [date2, setdate2] = useState();
  const [active, setActive] = useState(false);

  const InputRef = useRef();

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      InputRef.current.blur();
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const dataArray = [
    {
      id: 1,
      orderId: '#723DN2',
      customerName: 'Leslie A.',
      date: '12.11.2021 14:18',
      item: '2',
      totalPrice: '$ 129.00',
      rightIconPress: () =>
        navigation.navigate('TabStack',{screen:'OrderStack', params:{screen:'LongOrderDetails'}})
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <CustomText
        label={t('orders')}
        fontSize={22}
        fontFamily={fonts.bold}
        marginBottom={verticalScale(10)}
      />
      <View style={styles.inputContainer}>
        <View style={{width: '82%'}}>
          <Input
            inputStyle={styles.inputStyle}
            inputTextStyle={{fontSize: verticalScale(13)}}
            search
            placeholderText={t('Search')}
          />
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.filterContainer}>
          <Image style={styles.filterIcon} source={images.filterIcon} />
        </TouchableOpacity>
      </View>
      {dataArray.map((item, index) => {
        return (
          <OrderItem
            key={item.id}
            rightIconChange
            pending
            orderId={item.orderId}
            customerName={item.customerName}
            item={item.item}
            date={item.date}
            totalPrice={item.totalPrice}
            rightIconPress={item.rightIconPress}
          />
        );
      })}
     
    </View>
  );
}
const styles = ScaledSheet.create({
  mainContainer: {
    paddingHorizontal: '15@s',
    backgroundColor: colors.background,
    flex: 1,
  },
  inputContainer: {
    height: '40@vs',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '10@vs',
  },
  inputStyle: {
    backgroundColor: colors.textWhite,
    borderColor: colors.borderColor,
    borderWidth: 1,
    height: '100%',
    borderRadius: '8@vs',
    paddingHorizontal: '10@s',
  },
  filterContainer: {
    width: '15%',
    height: '100%',
    backgroundColor: colors.textWhite,
    borderRadius: '8@vs',
    padding: '8@vs',
    borderColor: colors.borderColor,
    borderWidth: 1,
  },
  filterIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
