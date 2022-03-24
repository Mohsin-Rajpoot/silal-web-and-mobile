import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View,Keyboard , TouchableOpacity,BackHandler,Dimensions,SafeAreaView,Image ,FlatList, TextInput,Modal, ScrollView,Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Fontisto from 'react-native-vector-icons/Fontisto'
// import { Image, SvgXml } from 'react-native-svg';
import Svg, { Path ,Defs,LinearGradient,Stop,Rect,Circle, G} from "react-native-svg"
import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';
import DatePicker from './../../components/DatePicker'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Searchbar } from "react-native-paper";
import {Picker} from '@react-native-picker/picker';


const { width, height } = Dimensions.get("window");

export default function Archive_orders({title, navigation}) {

  const [modalVisible, setModalVisible] = useState(false);
  const [show_modal_customer_data, set_show_modal_customer_data] = useState(false);
  const [show_modal_driver_data, set_show_modal_driver_data] = useState(false);
  const [show_modal_order_details, set_show_modal_order_details] = useState(false);
  const [show_order_detail_view, set_show_order_detail_view] = useState(false);
  const [selected_index, set_selected_index] = useState('');
  const [search_value, set_search_value] = useState('');
  const [search_filters, set_search_filters] = useState('');
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  const [delivery_method, setdelivery_method] = useState();
  const [category, setcategory] = useState();
  const [pickup_time, setpickup_time] = useState();
  const [status, setstatus] = useState();
  const [date1, setdate1] = useState();
  const [date2, setdate2] = useState();




  const InputRef = useRef();


useEffect(() => {
  const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
    // alert('Keyboard Shown')
    setKeyboardStatus("Keyboard Shown");
  });
  const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
    //   alert('Keyboard Hidden')
      InputRef.current.blur()
    setKeyboardStatus("Keyboard Hidden");
  });

  return () => {
    showSubscription.remove();
    hideSubscription.remove();
  };
}, []);

  const data = [
    {
        id: '1',
        Title: 'Embedded Software Engineer',
        SubTitle: 'Newyork',
        year: "22/03/2022",
    },
    {
        id: '2',
        Title: 'Web Developer',
        SubTitle: 'Lahore',
        year: "22/03/2022",
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

const data1 = [
    {
        id: '1',
        Title: 'Embedded Software Engineer',
        SubTitle: 'Newyork',
        year: "22/03/2022",
    },
    {
        id: '2',
        Title: 'Web Developer',
        SubTitle: 'Lahore',
        year: "22/03/2022",
    },
];

const render_order_further_detail=()=>{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Order_full_view',{status:'from_acceptance'} )} style={{flexDirection:'row',alignItems:'center',paddingVertical:10}}>
            <View>
                <Image source={{uri:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'}} style={{width:50,height:50,borderRadius:5}}/>
            </View>
            <View style={{marginHorizontal:10,flex:1}}>
                <Text style={styles.order_further_item_value}>Guess Saffiano (GUCB15TBK) laptop bag 15</Text>
            </View>
            <View style={{width:'12%'}}>
                <Text style={styles.order_further_item_title}>Quantity</Text>
                <Text style={styles.order_further_item_value}>1</Text>
            </View>
            <View style={{width:'12%',}}>
                <Text style={styles.order_further_item_title}>Charsct-s</Text>
                <Text style={styles.order_further_item_value}>Black, Big</Text>
            </View>
            <View style={{width:'12%',}}>
                <Text style={styles.order_further_item_title}>Item ID</Text>
                <Text style={styles.order_further_item_value}>#7DG8098</Text>
            </View>
            <View style={{width:'12%',}}>
                <Text style={styles.order_further_item_title}>In stock</Text>
                <Text style={styles.order_further_item_value}>52</Text>
            </View>
            <View style={{width:'12%'}}>
                <Text style={styles.order_further_item_title}>Price</Text>
                <Text style={styles.order_further_item_value}>$ 50.00</Text>
            </View>
        </TouchableOpacity>
    )
}
  const footer_pickup=()=>{
    return(
      <View style={{backgroundColor:'#1a3d47',marginRight:-20,borderRadius:3,height:25,width:150,alignSelf:'flex-end',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
        <Text style={{color:'white',fontSize:11,fontFamily:'Lato-Regular'}}>Pickup:</Text>
        <Text style={{color:'#52a49c',fontSize:11,fontFamily:'Lato-Regular'}}> 10.30-12.30</Text>

      </View>
    )
  }

    const render_all_oredrs=(index)=>{
      return(
          <>
        <TouchableOpacity style={[styles.render_all_orders,{backgroundColor:show_order_detail_view==true && index==selected_index?'#E6F4F2':'white'}]}>
          <View style={[styles.render_all_order_single,{width:'14%',}]}>
            <Text style={{fontFamily:'Lato-Regular',}}>#723DN2</Text>
          </View>
          <View style={[styles.render_all_order_single,{width:'18%',}]}>
            <Text style={{fontFamily:'Lato-Regular',}}>Leslie A.</Text>
          </View>
          <View style={[styles.render_all_order_single,{width:'18%',}]}>
            <Text style={{fontFamily:'Lato-Regular',}}>12.11.2021</Text>
          </View>
          <View style={[styles.render_all_order_single,{width:'8%',}]}>
            <Text style={{fontFamily:'Lato-Regular',}}>2</Text>
          </View>
          <View style={[styles.render_all_order_single,{width:'17%'}]}>
              <View  style={{backgroundColor:'#0065FF',borderRadius:5,alignSelf:'flex-start',height:23,alignItems:'center',justifyContent:'center',paddingHorizontal:10}}>
                <Text style={{color:'white',fontFamily:'Lato-Regular',fontSize:11}}>Waiting for pickup</Text>
              </View>
          </View>
          {/* <View style={[styles.render_all_order_single,{width:'12%',}]}>
            <Text style={{fontFamily:'Lato-Regular',}}>Status</Text>
          </View> */}
          <View style={[styles.render_all_order_single,{width:'15%',}]}>
            <Text style={{fontFamily:'Lato-Regular',}}>$ 120</Text>
          </View>

          <TouchableOpacity onPress={()=>{set_show_order_detail_view(!show_order_detail_view),set_selected_index(index)}} style={[styles.render_all_order_single,{width:'10%',}]} >
              <View style={{backgroundColor:'#F2F4F5',height:30,width:30,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
              {show_order_detail_view==true && index==selected_index?
                <Fontisto name='angle-up' style={{color:'#4C6870',fontSize: 14,}} />
                :
                <Fontisto name='angle-down' style={{color:'#4C6870',fontSize: 14,}} />
              }
              </View>
          </TouchableOpacity>

        </TouchableOpacity>
        {show_order_detail_view==true && index==selected_index?
        <View style={{backgroundColor:'white'}}>
                <FlatList
                  // ListHeaderComponent={header_alloredrs}
                  ListFooterComponent={footer_pickup}
                  ItemSeparatorComponent={item_seperator}
                  style={{marginHorizontal:10,borderRadius:5,borderWidth:1,borderColor:'#5AB3A8',paddingHorizontal:20}}
                  keyExtractor={(item, index) => index.toString()}
                  data={data1}
                  renderItem={({ item }) => ( 
                    render_order_further_detail()
                  )}
                />
        </View>
        :null
        }
        </>
      )
    }

    const header_alloredrs=()=>{
      return(
          <View style={styles.all_orders_header}>
            <View style={[styles.all_orders,{width:'14%'}]}>
              <Text style={styles.all_orders_heading_txt}>Order ID</Text>
            </View>
            <View style={[styles.all_orders,{width:'18%'}]} >
              <Text style={styles.all_orders_heading_txt}>Customer name</Text>
            </View>
            <View style={[styles.all_orders,{width:'18%'}]} >
              <Text style={styles.all_orders_heading_txt}>Date</Text>
            </View>
            <View style={[styles.all_orders,{width:'8%'}]} >
              <Text style={styles.all_orders_heading_txt}>Items</Text>
            </View>
            {/* <View style={[styles.all_orders,{width:'10%'}]} >
              <Text style={styles.all_orders_heading_txt}>Status</Text>
            </View> */}
            <View style={[styles.all_orders,{width:'17%'}]} >
              <Text>Status</Text>
            </View>
            <View style={[styles.all_orders,{width:'15%'}]} >
              <Text style={styles.all_orders_heading_txt}>Total price</Text>
            </View>
            <View style={[styles.all_orders,{width:'10%'}]} >
              <Text style={styles.all_orders_heading_txt}></Text>
            </View>

          </View>
      )
    }

   const  item_seperator=()=>{
       return(
           <View style={{height:1,backgroundColor:'#EBEEEF'}}>

           </View>
       )
   }

  return (
        
      <View style={{height:'83%',padding:20}}>
        <MenuProvider >

            <View style={{flexDirection:'row'}}>

              <View>
                  <Text style={styles.heading}>Orders</Text>
              </View>
              <TouchableOpacity  style={styles.searchSection}>
                    <EvilIcons size={20} color="#B3BEC2" name='search' style={styles.searchIcon} />
                    {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
                    <TextInput
                        ref={InputRef}
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor={'#B3BEC2'}
                        onChangeText={(searchString) => set_search_value(searchString)}
                        value={search_value}
                        onFocus={() =>set_search_filters(true) }
                        onBlur={() => set_search_filters(false) }
                        // underlineColorAndroid="transparent"

                    />
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#5AB3A8',width:150,height:40,marginLeft:20,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{fontFamily:'Poppins-SemiBold',color:'white'}}>Search</Text>
                </TouchableOpacity>

            </View>
            {search_filters==true?

            <View style={{flexDirection:'row',marginTop:15}}>
              <View style={{width:'15%',}} >
                  <Text style={{fontFamily:'Lato-Bold',fontSize:12,color:'#002733'}}>Delivery method</Text>
                  <View style={{height:40,width:'100%',justifyContent:'center',backgroundColor:'white',borderRadius:5,marginTop:10,borderWidth:1,borderColor:'#E8E8E8'}}>
                      <Picker
                          mode='dropdown'
                          // style={{borderRadius:5}}
                          // itemStyle={{backgroundColor:'green',borderRadius:10}}
                          selectedValue={delivery_method}
                          onValueChange={(itemValue, itemIndex) =>
                              setdelivery_method(itemValue)
                          }>
                          <Picker.Item label="All methods" value="java" />
                          <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                  </View>
              </View>
              <View style={{marginLeft:10,width:'15%',}}>
                  <Text style={{fontFamily:'Lato-Bold',fontSize:12,color:'#002733'}}>Category</Text>
                  <View style={{height:40,width:150,justifyContent:'center',backgroundColor:'white',borderRadius:5,marginTop:10,borderWidth:1,borderColor:'#E8E8E8'}}>
                      <Picker
                          mode='dropdown'
                          selectedValue={category}
                          onValueChange={(itemValue, itemIndex) =>
                              setcategory(itemValue)
                          }>
                          <Picker.Item label="All categories" value="java" />
                          <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                  </View>
              </View>
              <View style={{marginLeft:10,width:'15%',}}>
                  <Text style={{fontFamily:'Lato-Bold',fontSize:12,color:'#002733'}}>Pickup time</Text>
                  <View style={{height:40,width:150,justifyContent:'center',backgroundColor:'white',borderRadius:5,marginTop:10,borderWidth:1,borderColor:'#E8E8E8'}}>
                      <Picker
                          mode='dropdown'
                          selectedValue={pickup_time}
                          onValueChange={(itemValue, itemIndex) =>
                              setpickup_time(itemValue)
                          }>
                          <Picker.Item label="All" value="java" />
                          <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                  </View>
              </View>
              <View style={{marginLeft:10,width:'15%',}}>
                  <Text style={{fontFamily:'Lato-Bold',fontSize:12,color:'#002733'}}>Status</Text>
                  <View style={{height:40,width:150,justifyContent:'center',backgroundColor:'white',borderRadius:5,marginTop:10,borderWidth:1,borderColor:'#E8E8E8'}}>
                      <Picker
                          mode='dropdown'
                          selectedValue={status}
                          onValueChange={(itemValue, itemIndex) =>
                              setstatus(itemValue)
                          }>
                          <Picker.Item label="All orders" value="java" />
                          <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                  </View>
              </View>
              <View style={{marginLeft:10,flex:1}}>
                  <Text style={{fontFamily:'Lato-Bold',fontSize:12,color:'#002733'}}>Date</Text>
                  <View style={{height:40,justifyContent:'center',backgroundColor:'white',borderRadius:5,marginTop:10,borderWidth:1,borderColor:'#E8E8E8'}}>
                    <View style={{justifyContent:'space-evenly',flexDirection:'row'}}>
                    <DatePicker  height={35} width={130} color='#CCD4D6'/>
                    <View style={{width:1,backgroundColor:'#E8E8E8'}}></View>
                    <DatePicker  height={35} width={130} color='#CCD4D6'/>

                    </View>
                  </View>
              </View>
            </View>
            :
            null
            
            }


            {header_alloredrs()}
              <FlatList
                  // ListHeaderComponent={header_alloredrs}
                  ItemSeparatorComponent={item_seperator}
                //   style={{paddingHorizontal:10}}
                  keyExtractor={(item, index) => index.toString()}
                  data={data}
                  renderItem={({ item ,index}) => (
                    render_all_oredrs(index)
                  )}
              />
             
            <View style={styles.pagination_view}>
              <Text style={{fontFamily:'Lato-Regular'}}>Showing 1-9 of 86</Text>
              <View style={styles.pagination_numbring}>
                <Ionicons name='chevron-back' style={{color:'#d1d8da',fontSize:24}} />
                <Text style={{fontFamily:'Lato-Regular',color:'black'}}>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
                <MaterialCommunityIcons name='chevron-right-circle' style={{color:'#4c6870',fontSize:24}} />
              </View>
            </View>

        </MenuProvider>
      </View>

      );
}
const styles = StyleSheet.create({

  title: {
    fontSize:18,
    fontWeight:'700',
    fontFamily:'Poppins-Light',
    margin:10
  },
  single_order:{
    backgroundColor:'white',
    marginHorizontal:10,
    marginVertical:5,
    borderRadius:5,
    paddingHorizontal:10,
    paddingBottom:10
  },

  order_header:{
    flex:1,
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    },
  orderid_text:{
    fontSize:15,
    color:'#CCD4D6',
    fontWeight:'bold',
  },
  order_timer:{
    backgroundColor:'#F2A341',
    borderRadius:'0 0 5 5'
  },
  order_title:{
    width:'70%',
    fontSize:17
  },
  order_item:{
    flexDirection: 'row',
     marginTop: 20, 
  },
  cross_icon:{
    color: "#CCD4D6",
     fontSize: 16,
  },
  more_order:{
    width:60,
    backgroundColor:'#E6F4F2',
    padding:3,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:30,
    marginTop:5
  },
  accept_btn:{
    backgroundColor:'#5AB3A8',
    padding:10,
    borderRadius:5,
    marginTop:10,
    alignItems:'center'
  },
  accept_btn_txt:{
    color:'white',
    fontSize:15
  },
  order_recve_name:{
    fontSize:17,
    fontWeight:'400',
    color:'black'
  },
  order_recve_phone_view:{
    flexDirection:'row',
    marginTop:20,
    alignItems:'center'
  },
  order_recve_loc_view:{
    flexDirection:'row',
    marginTop:10,
    alignItems:'center',
  },
  ready_btn:{
    flex:1,
    backgroundColor:'#5AB3A8',
    borderRadius:5,
    alignItems:'center',
    paddingVertical:10,
    justifyContent:'center'
  },
  delivryby_btn:{
      backgroundColor:'#fdf1e3',
      padding:5,
      borderRadius:5
  },
  delivryby_btn_txt:{
      color:'#F2A341'
  },
  all_orders:{
    backgroundColor:'#F2F4F5',
    // alignItems:'center',
    paddingLeft:15,
    justifyContent:'center'
  },
  all_orders_header:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    height:70,
    backgroundColor:'white',
    marginTop:10,
    padding:10
  },
  render_all_orders:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    backgroundColor:'white',
    padding:10
  },
  render_all_order_single:{
    height:30,
    // alignItems:'center',
    paddingLeft:15,
    justifyContent:'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height:'100%',
    width:'50%',
    alignSelf:'flex-end',
    backgroundColor: "white",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  orderid_text:{
    fontSize:15,
    color:'black',
    fontWeight:'bold',
  },
  modal_header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  modal_recuring:{
    backgroundColor:'#5AB3A8',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5,
    marginLeft:20
  },
  modal_fields:{
    flexDirection:'row',
    marginVertical:5,
    alignItems:'center'
  },
  order_item:{
    flexDirection: 'row',
     marginTop: 20, 
     alignItems:'center'
  },
  modal_title_second:{
    color:'black',
    fontSize:15
  },
  modal_title_first:{
    color:'#CCD4D6',
    fontSize:15,
    width:150
  },
  archive_orders_tab:{
    borderBottomWidth:4,
    height:40,
    paddingHorizontal:20,
    justifyContent:'center'
  },
  calndr_date:{
    backgroundColor:'white',
    height:40,
    width:200, 
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10 
  },
  all_orders_heading_txt:{
    fontFamily:'Lato-Bold'
  },
  toast:{
    backgroundColor:'#FFFFFF',
    // marginHorizontal:30,
    paddingVertical:10,
    paddingHorizontal:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  trigger: {
    // padding: 10,
    // margin: 10,
    // backgroundColor:'red'
  },
  modal_data_heading:{
    flexDirection:'row',
    padding:12,
    backgroundColor:'#F2F4F5',
    borderRadius:5,
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10
  },
  pagination_view:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between',
    paddingHorizontal:30,
    marginTop:20
  },
  pagination_numbring:{
    width:200,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center"
  },
  heading:{
    fontFamily:'Poppins-Bold',
    fontSize:25,
    color:'black'
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    height:40,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft:40,
    borderRadius:5
},
searchIcon: {
    paddingLeft: 10,
},
input: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#424242',
    borderRadius:5
},
order_further_item_title:{
    color:'#B3BEC2',
    fontFamily:'Lato-Regular',
    fontSize:13
},
order_further_item_value:{
    color:'black',
    fontFamily:'Lato-Regular',
    fontSize:13,
    marginTop:5
},
searchBar: {
    marginLeft:10,
    marginRight:10
  },
});



// import React, { useState, useEffect } from "react";
// import { Keyboard, Text, TextInput, StyleSheet, View } from "react-native";

// const Example = () => {
//   const [keyboardStatus, setKeyboardStatus] = useState(undefined);

//   useEffect(() => {
//     const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
//       setKeyboardStatus("Keyboard Shown");
//     });
//     const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {

//       setKeyboardStatus("Keyboard Hidden");
//     });

//     return () => {
//       showSubscription.remove();
//       hideSubscription.remove();
//     };
//   }, []);

//   return (
//     <View style={style.container}>
//       <TextInput
//         style={style.input}
//         placeholder='Click here…'
//         onSubmitEditing={Keyboard.dismiss}
//       />
//       <Text style={style.status}>{keyboardStatus}</Text>
//     </View>
//   );
// }

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 36
//   },
//   input: {
//     padding: 10,
//     borderWidth: 0.5,
//     borderRadius: 4
//   },
//   status: {
//     padding: 10,
//     textAlign: "center"
//   }
// });

// export default Example;