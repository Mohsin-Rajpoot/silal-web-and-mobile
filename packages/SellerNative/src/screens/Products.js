// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Products = () => {
//   return (
//     <View>
//       <Text>Products</Text>
//     </View>
//   )
// }

// export default Products

// const styles = StyleSheet.create({})

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Modal, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'



const { width, height } = Dimensions.get("window");

export default function Archive_orders({ title, navigation }) {

  const [order_state, set_order_state] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [show_modal_customer_data, set_show_modal_customer_data] = useState(false);
  const [show_modal_driver_data, set_show_modal_driver_data] = useState(false);
  const [show_modal_order_details, set_show_modal_order_details] = useState(false);





  const customer_data = () => {
    return (
      <>
        <TouchableOpacity onPress={() => set_show_modal_customer_data(!show_modal_customer_data)} style={{ flexDirection: 'row', padding: 12, backgroundColor: '#F2F4F5', borderRadius: 5, justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <Text>CUSTOMER DATA</Text>
          {show_modal_customer_data == true ?
            <Fontisto name='angle-up' style={[styles.cross_icon, { color: 'black' }]} />
            :
            <Fontisto name='angle-down' style={[styles.cross_icon, { color: 'black' }]} />
          }
        </TouchableOpacity>
        {show_modal_customer_data == true ?
          <View style={{ marginTop: 10 }}>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Customer name</Text>
              <Text style={styles.modal_title_second}>Willson Genemal</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Customer ID</Text>
              <Text style={styles.modal_title_second}>133</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Phone</Text>
              <Text style={styles.modal_title_second}>*** *** **** 112</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Address</Text>
              <Text style={styles.modal_title_second}>2715 Ash Dr. San Jose</Text>
            </View>
          </View>
          :
          null
        }
      </>
    )
  }
  const driver_data = () => {
    return (
      <>
        <TouchableOpacity onPress={() => set_show_modal_driver_data(!show_modal_driver_data)} style={{ flexDirection: 'row', padding: 12, backgroundColor: '#F2F4F5', borderRadius: 5, justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <Text>DRIVER DATA</Text>
          {show_modal_driver_data == true ?
            <Fontisto name='angle-up' style={[styles.cross_icon, { color: 'black' }]} />
            :
            <Fontisto name='angle-down' style={[styles.cross_icon, { color: 'black' }]} />
          }
        </TouchableOpacity>
        {show_modal_driver_data == true ?
          <View style={{ marginTop: 10 }}>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Driver name</Text>
              <Text style={styles.modal_title_second}>Willson Genemal</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Phone</Text>
              <Text style={styles.modal_title_second}>*** *** **** 112</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Delivery time</Text>
              <Text style={styles.modal_title_second}>37 minutes</Text>
            </View>
          </View>
          :
          null
        }
      </>
    )
  }

  const order_details = () => {
    return (
      <>
        <TouchableOpacity onPress={() => set_show_modal_order_details(!show_modal_order_details)} style={{ flexDirection: 'row', padding: 12, backgroundColor: '#F2F4F5', borderRadius: 5, justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <Text>ORDER DETAILS</Text>
          {show_modal_order_details == true ?
            <Fontisto name='angle-up' style={[styles.cross_icon, { color: 'black', fontSize: 16 }]} />
            :
            <Fontisto name='angle-down' style={[styles.cross_icon, { color: 'black', fontSize: 16 }]} />
          }
        </TouchableOpacity>
        {show_modal_order_details == true ?
          <View style={{ marginTop: 10 }}>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Oredr created</Text>
              <Text style={styles.modal_title_second}>11.13.2021 17.33</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Payment</Text>
              <Text style={styles.modal_title_second}>$ 13.00</Text>
            </View>
            <View style={styles.modal_fields}>
              <Text style={styles.modal_title_first}>Credit card</Text>
              <Text style={styles.modal_title_second}>**** **** **** 3782</Text>
            </View>
            <View style={{ height: 2, backgroundColor: '#ebeeef', marginTop: 10 }}></View>
          </View>
          :
          null
        }
      </>
    )
  }

  return (

    <View style={{ height: '83%', padding: 20 }}>

      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.render_all_orders}>
        <Text>Harris</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <ScrollView style={styles.modalView}>
            <View style={styles.modal_header}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.orderid_text}>ORDER ID<Text>#123456</Text></Text>
                <View style={styles.modal_recuring}>
                  <Text style={{ color: 'white' }}>Recurring client</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ padding: 7 }}>
                <Entypo name='cross' style={[styles.cross_icon, { color: '#4C6870', fontSize: 25 }]} />
              </TouchableOpacity>
            </View>

            {customer_data()}
            {driver_data()}
            {order_details()}



          </ScrollView>
        </View>
      </Modal>

    </View>

  );
}
const styles = StyleSheet.create({

  title: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Poppins-Light',
    margin: 10
  },
  single_order: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  filter_box: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center'
  },
  filter: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 40,
    width: 150,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
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
    borderRadius: '0 0 5 5'
  },
  order_title: {
    width: '70%',
    fontSize: 17
  },
  order_item: {
    flexDirection: 'row',
    marginTop: 20,
  },
  cross_icon: {
    color: "#CCD4D6",
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
    marginTop: 5
  },
  accept_btn: {
    backgroundColor: '#5AB3A8',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center'
  },
  accept_btn_txt: {
    color: 'white',
    fontSize: 15
  },
  order_recve_name: {
    fontSize: 17,
    fontWeight: '400',
    color: 'black'
  },
  order_recve_phone_view: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center'

  },
  order_recve_loc_view: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  ready_btn: {
    flex: 1,
    backgroundColor: '#5AB3A8',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'center'
  },
  delivryby_btn: {
    backgroundColor: '#fdf1e3',
    padding: 5,
    borderRadius: 5
  },
  delivryby_btn_txt: {
    color: '#F2A341'
  },
  all_orders: {
    backgroundColor: '#F2F4F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  all_orders_header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 70,
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10
  },
  render_all_orders: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    padding: 10
  },
  render_all_order_single: {

    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: '100%',
    width: '50%',
    alignSelf: 'flex-end',
    backgroundColor: "white",
    padding: 20,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  orderid_text: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  modal_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  modal_recuring: {
    backgroundColor: '#5AB3A8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 20
  },
  modal_fields: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center'
  },
  order_item: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center'
  },
  modal_title_second: {
    color: 'black',
    fontSize: 15
  },
  modal_title_first: {
    color: '#CCD4D6',
    fontSize: 15,
    width: 150
  },
  archive_orders_tab: {
    borderBottomWidth: 4,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  calndr_date: {
    backgroundColor: 'white',
    height: 40,
    width: 200,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
});


// cross_icon: {
//   color: "#CCD4D6",
//   fontSize: 16,
// },





// centeredView: {
//   flex: 1,
//   justifyContent: "center",
//   alignItems: "center",
// },
// modalView: {
//   height: '100%',
//   width: '50%',
//   alignSelf: 'flex-end',
//   backgroundColor: "white",
//   padding: 20,
//   // alignItems: "center",
//   shadowColor: "#000",
//   shadowOffset: {
//     width: 0,
//     height: 2
//   },

//   orderid_text: {
//     fontSize: 15,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   modal_header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   },
//   modal_recuring: {
//     backgroundColor: '#5AB3A8',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//     marginLeft: 20
//   },
//   modal_fields: {
//     flexDirection: 'row',
//     marginVertical: 5,
//     alignItems: 'center'
//   },
//   order_item: {
//     flexDirection: 'row',
//     marginTop: 20,
//     alignItems: 'center'
//   },
//   modal_title_second: {
//     color: 'black',
//     fontSize: 15
//   },
//   modal_title_first: {
//     color: '#CCD4D6',
//     fontSize: 15,
//     width: 150
//   },

