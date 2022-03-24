import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, Dimensions,FlatList } from 'react-native'
import Current_orders from './../orders/Current/Current_orders'
import Pre_orders from './../orders/Pre_orders'
import Acceptance_orders from '../Orders_longer/Acceptance_orders'
import Pickup_orders from './Pickup_orders'
// import LockOnLandscape from '../../components/Dashboard/LockOnLandscape';


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
  const [order_state, set_order_state] = useState('acceptance');

  
const Header=()=>{
  return(
      <View style={{ paddingVertical: 15,flex:1, flexDirection: 'row',}}>
        <TouchableOpacity onPress={()=>set_order_state('acceptance')}  style={[styles.order_button,{backgroundColor:order_state=='acceptance'? '#5AB3A8':null,width:250}]}>
          <Text style={[styles.order_button_text,{color:order_state=='acceptance'?'white':'#4C6870'}]}>Awaiting acceptance (8)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>set_order_state('pickup')}  style={[styles.order_button,{backgroundColor:order_state=='pickup'? '#5AB3A8':null,width:250}]}>
          <Text style={[styles.order_button_text,{color:order_state=='pickup'?'white':'#4C6870'}]}>Waiting for pickup (2)</Text>
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

      {order_state=='acceptance'?
        <Acceptance_orders navigation={navigation}/>
        :
        order_state=='pickup'?
        <Pickup_orders navigation={navigation}/>
        :
        null
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
    // padding: 15,
    height:50,
    marginVertical: 5,
    alignSelf: 'center',
    borderRadius: 5,
    marginLeft:10
  },
  order_button_text:{
    color:'white',
    fontFamily:'Poppins-SemiBold',
    fontSize:16,
    letterSpacing:1
  },
  order_container:{
    // flexDirection:'row',
  }
})