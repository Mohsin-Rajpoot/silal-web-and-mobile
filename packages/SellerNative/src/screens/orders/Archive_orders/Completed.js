import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import { Image, SvgXml } from 'react-native-svg';
import Svg, { Path ,Defs,LinearGradient,Stop,Rect,Circle, G} from "react-native-svg"
const { width, height } = Dimensions.get("window");


export default function Pre_orders({
title,
  navigation
}) {

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

  const render_received=()=>{
    return(
      <TouchableOpacity  style={styles.single_order} >
        <View style={styles.order_header}>
            <Text style={styles.orderid_text}>ORDER ID<Text style={[styles.orderid_text,{color:'black'}]}>  #123456</Text></Text>
            <View style={styles.delivryby_btn}>
                <Text style={styles.delivryby_btn_txt}>DELIVERY BY 13:30 PM</Text>
            </View>
        </View>
        <View style={styles.order_item}>
            <Text style={{fontSize:17}}>2</Text>
            <Entypo name='cross' style={styles.cross_icon} />
            <Text style={styles.order_title}>French Fries </Text>
        </View>
        <View style={[styles.order_item,{marginTop:5}]}>
            <Text style={{fontSize:17}}>2</Text>
            <Entypo name='cross' style={styles.cross_icon} />
            <Text style={styles.order_title}>Cheesecakes with sour cream and citrus </Text>
        </View>
        <View style={styles.more_order}>
          <Text>3 more</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <View style={[styles.accept_btn,{width:'30%',backgroundColor:'#acd9d3'}]}>
                <Text style={styles.accept_btn_txt}>Decline</Text>
            </View>
            <View style={[styles.accept_btn,{width:'60%'}]}>
                <Text style={styles.accept_btn_txt}>Move to current orders</Text>
            </View>
        </View>
      </TouchableOpacity>
    )
  }

  const render_accepted=()=>{
    return(
        <TouchableOpacity  style={styles.single_order} >
        <View style={styles.order_header}>
            <Text style={styles.orderid_text}>ORDER ID<Text style={[styles.orderid_text,{color:'black'}]}>  #123456</Text></Text>
            <View style={styles.delivryby_btn}>
                <Text style={styles.delivryby_btn_txt}>DELIVERY BY 13:30 PM</Text>
            </View>
        </View>
        <View style={styles.order_item}>
            <Text style={{fontSize:17}}>2</Text>
            <Entypo name='cross' style={styles.cross_icon} />
            <Text style={styles.order_title}>French Fries </Text>
        </View>
        <View style={[styles.order_item,{marginTop:5}]}>
            <Text style={{fontSize:17}}>2</Text>
            <Entypo name='cross' style={styles.cross_icon} />
            <Text style={styles.order_title}>Cheesecakes with sour cream and citrus </Text>
        </View>
        <View style={styles.more_order}>
          <Text>3 more</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <View style={[styles.accept_btn,{width:'30%',backgroundColor:'#acd9d3'}]}>
                <Text style={styles.accept_btn_txt}>Decline</Text>
            </View>
            <View style={[styles.accept_btn,{width:'60%'}]}>
                <Text style={styles.accept_btn_txt}>Move to current orders</Text>
            </View>
        </View>
      </TouchableOpacity>
      )
  }


  return (
        
      <View style={{flex:1,}}>

          <View style={{flexDirection:'row',height:height-190,justifyContent:'space-evenly'}}>
            <View style={{backgroundColor:'#E5EAEB',width:width/2.1,borderRadius:5}}>
                <Text style={styles.title}>For today</Text>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                    renderItem={({ item }) => (
                      render_received()
                    )}
                />
            </View>

            <View style={{backgroundColor:'#E5EAEB',width:width/2.1,marginLeft:10,borderRadius:5}}>
              <Text style={styles.title}>This week</Text>
              <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={data}
                  renderItem={({ item }) => (
                    render_accepted()

                  )}
              />
            </View>

            {/* <View style={{backgroundColor:'#4C6870',flex:1,marginLeft:10,borderRadius:5}}>
              <Text style={[styles.title,{color:'white'}]}>Ready for pickup</Text>
              <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={data}
                  renderItem={({ item }) => (
                    render_ready_pickup()
                  )}
              />
            </View> */}

          </View>

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
     fontSize: 20,
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
  }
});

