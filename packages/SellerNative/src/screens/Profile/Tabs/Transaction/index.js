import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import TextInput from '@SilalApp/common/components/native/TextInput';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import {useTranslation} from 'react-i18next';
export default function Archive_orders({title, navigation}) {
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

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

  const render_all_oredrs = () => {
    return (
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.render_all_orders}>
        <View style={[styles.render_all_order_single, {width: '8%'}]}>
          <Text style={styles.tableDetailText}>#723DN2</Text>
        </View>
        {/* <View style={[styles.render_all_order_single, {width: '18%'}]}>
          <Text style={{fontFamily: 'Lato-Regular'}}>Leslie A.</Text>
        </View> */}
        <View style={[styles.render_all_order_single, {width: '14%'}]}>
          <Text style={styles.tableDetailText}>Silal LTD</Text>
        </View>
        <View style={[styles.render_all_order_single, {width: '12%'}]}>
          <Text style={styles.tableDetailText}>12.12.2022</Text>
        </View>
        <View style={[styles.render_all_order_single1, {width: '10%'}]}>
          <Text style={styles.bankDetail}>{t('BankWire')}</Text>
        </View>
        <View style={[styles.render_all_order_single, {width: '12%'}]}>
          <Text style={styles.tableDetailText}>$ 13.90</Text>
        </View>
        <View style={[styles.render_all_order_single, {width: '14%'}]}>
          <Text style={styles.tableDetailText}>$ 1272.20</Text>
        </View>

        <View style={[styles.render_all_order_single, {width: '8%'}]}>
          <Entypo
            name="dots-three-vertical"
            style={[styles.cross_icon, {color: '#4C6870', fontSize: 20}]}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const header_alloredrs = () => {
    return (
      <View style={styles.all_orders_header}>
        <View style={[styles.all_orders, {width: '8%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('orderId')}</Text>
        </View>
        {/* <View style={[styles.all_orders, {width: '18%'}]}>
          <Text style={styles.all_orders_heading_txt}>Customer name</Text>
        </View> */}
        <View style={[styles.all_orders, {width: '14%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('Payedby')}</Text>
        </View>
        <View style={[styles.all_orders, {width: '12%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('Order_date')}</Text>
        </View>
        <View style={[styles.all_orders, {width: '10%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('Payment')}</Text>
        </View>
        <View style={[styles.all_orders, {width: '12%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('Amount')}</Text>
        </View>
        <View style={[styles.all_orders, {width: '14%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('Balance')}</Text>
        </View>
        <View style={[styles.all_orders, {width: '8%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('Action')}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{height: '83%', padding: 10}}>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          search={true}
          placeholderText={t('Search')}
          inputStyle={styles.input}
        />
        <View style={styles.filter_box}>
          <View style={styles.calndr_date}>
            <Text>16 NOV</Text>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#fff', marginVertical: 20}}>
        <FlatList
          ListHeaderComponent={header_alloredrs}
          keyExtractor={(item, index) => index.toString()}
          data={data}
          renderItem={({item}) => render_all_oredrs()}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bankDetail: {
    fontSize: 14,
    fontFamily: fonts.LatoRegular,
    color: colors.primary,
  },
  tableDetailText: {
    fontSize: 14,
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  input: {
    width: '60%',
    backgroundColor: colors.textWhite,
    height: 55,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Poppins-Light',
    margin: 10,
  },
  filter_box: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filter: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 40,
    width: 150,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  order_header: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderid_text: {
    fontSize: 15,
    color: '#CCD4D6',
    fontWeight: 'bold',
  },
  order_timer: {
    backgroundColor: '#F2A341',
    borderRadius: '0 0 5 5',
  },
  order_title: {
    width: '70%',
    fontSize: 17,
  },
  order_item: {
    flexDirection: 'row',
    marginTop: 20,
  },
  calndr_date: {
    backgroundColor: 'white',
    height: 40,
    width: 200,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  cross_icon: {
    color: '#CCD4D6',
    fontSize: 16,
  },
  more_order: {
    width: 60,
    backgroundColor: '#E6F4F2',
    padding: 3,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 5,
  },
  accept_btn: {
    backgroundColor: '#5AB3A8',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  accept_btn_txt: {
    color: 'white',
    fontSize: 15,
  },
  order_recve_name: {
    fontSize: 17,
    fontWeight: '400',
    color: 'black',
  },
  all_orders: {
    backgroundColor: '#F2F4F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  all_orders_header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 60,
    backgroundColor: '#F2F4F5',
    marginTop: 10,
    padding: 10,
  },
  render_all_orders: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    padding: 10,
  },
  render_all_order_single: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  render_all_order_single1: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bluish,
    borderRadius: 10,
  },
  all_orders_heading_txt: {
    fontFamily: 'Lato-Bold',
    color: colors.black,
    fontSize: 13,
  },
});
