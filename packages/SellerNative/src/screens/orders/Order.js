import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, Dimensions,FlatList } from 'react-native'
import Current_orders from './Current_orders'
import Pre_orders from './Pre_orders'
import Archive_orders from './Archive_orders'
import LockOnLandscape from '../../components/LockOnLandscape';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import TitleHeading from '../components/TitleHeading';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import LockOnLandscape from '../components/Dashboard/LockOnLandscape';
// import StatisticWhiteBoxTitle from '../components/StatisticWhiteBoxTitle';
const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const [Statistic, setStatistic] = useState(true);
  const [Reviews, setReviews] = useState(false);
  const [Outofstock, setOutofstack] = useState(false);
  const [order_state, set_order_state] = useState('current');

  
const Header=()=>{
  return(
      <View style={{ paddingVertical: 15,flex:1, flexDirection: 'row',}}>
        <TouchableOpacity onPress={()=>set_order_state('current')}  style={[styles.order_button,{backgroundColor:order_state=='current'? '#5AB3A8':null,}]}>
          <Text style={[styles.order_button_text,{color:order_state=='current'?'white':'#4C6870'}]}>Current orders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>set_order_state('preorder')}  style={[styles.order_button,{backgroundColor:order_state=='preorder'? '#5AB3A8':null,width:150}]}>
          <Text style={[styles.order_button_text,{color:order_state=='preorder'?'white':'#4C6870'}]}>pre-orders (8)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>set_order_state('archive')}  style={[styles.order_button,{backgroundColor:order_state=='archive'? '#5AB3A8':null,width:100}]}>
          <Text style={[styles.order_button_text,{color:order_state=='archive'?'white':'#4C6870'}]}>Archive</Text>
        </TouchableOpacity>
      </View>
  )
}


  return (
    <SafeAreaView style={{backgroundColor:'#f4f7f8'}}>
      {/* <LockOnLandscape /> */}
      <View style={{ flexDirection: 'row',alignItems:'center',height:'15%' }}>
        <View style={{ padding: 15 }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="reorder-horizontal"
              size={20}
              style={{ marginLeft: 10, }}
              color={'#000000'}
            />
          </TouchableOpacity>
        </View>

        {Header()}

      </View>

      {order_state=='current'?
        <View style={styles.order_container}>
          <Current_orders title='Received'/>
          {/* <Current_orders title='Accepted'/> */}
        </View>
        :
        order_state=='preorder'?
        <Pre_orders />
        :
        <Archive_orders />
      }


    </SafeAreaView>
  )
}
export default Home
const styles = StyleSheet.create({
  WhiteDive: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-evenly',
    paddingTop: 10
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
    height:30,
    width: 30,
    resizeMode: 'contain'
  },
  titleInWhiteDiv: {
    fontFamily: 'Poppins-Medium',
    color: '#4C6870',
    paddingHorizontal: 10,
    paddingTop: 10
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


  order_button:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    width: 150,
    alignSelf: 'center',
    borderRadius: 5,
    marginLeft:10
  },
  order_button_text:{
    color:'white',
    fontFamily:'Poppins-Light',
    fontSize:16,
    letterSpacing:1
  },
  order_container:{
    flexDirection:'row',
  }
})