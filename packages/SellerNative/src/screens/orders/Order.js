
import React, { useRef, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Dimensions,FlatList } from 'react-native'
import Current_orders from './Current/Current_orders'
import Pre_orders from './Pre_orders'
import Archive_orders from './Archive/Archive_orders'
import LockOnLandscape from '../../components/Dashboard/LockOnLandscape';


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
  // const [order_state, set_order_state] = useState('current');
  const [current_order_state, set_current_order_state] = useState(true);
  const [pre_order_state, set_pre_order_state] = useState(false);
  const [archive_order_state, set_archive_order_state] = useState(false);

  const [order_state, set_order_state] = useState('current');


  const scrollref=useRef()

  const tabclick=(x_value,state)=>{
    scrollref.current.scrollTo({ x: width*x_value })
    if(x_value=='0'){
      set_current_order_state(true)
      set_archive_order_state(false)
      set_pre_order_state(false)
    }
    else if(x_value=='1'){
      set_current_order_state(false)
      set_pre_order_state(true)
      set_archive_order_state(false)
    }
    else if(x_value=='2'){
      set_current_order_state(false)
      set_pre_order_state(false)
      set_archive_order_state(true)
    }


  }
const Header=()=>{
  return(
      // <View style={{ paddingVertical: 15,flex:1, flexDirection: 'row',}}>
      //   <TouchableOpacity onPress={()=>set_order_state('current')}  style={[styles.order_button,{backgroundColor:order_state=='current'? '#5AB3A8':null,width:200}]}>
      //     <Text style={[styles.order_button_text,{color:order_state=='current'?'white':'#4C6870'}]}>Current orders</Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity onPress={()=>set_order_state('preorder')}  style={[styles.order_button,{backgroundColor:order_state=='preorder'? '#5AB3A8':null,width:200}]}>
      //     <Text style={[styles.order_button_text,{color:order_state=='preorder'?'white':'#4C6870'}]}>Pre-orders <Text style={{color:'#CCD4D6',}}>(8)</Text></Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity onPress={()=>set_order_state('archive')}  style={[styles.order_button,{backgroundColor:order_state=='archive'? '#5AB3A8':null,width:120}]}>
      //     <Text style={[styles.order_button_text,{color:order_state=='archive'?'white':'#4C6870'}]}>Archive</Text>
      //   </TouchableOpacity>
      // </View>
    <View style={{ paddingVertical: 15,flex:1, flexDirection: 'row',}}>
      <TouchableOpacity onPress={()=>tabclick('0','current')}  style={[styles.order_button,{backgroundColor:current_order_state==true? '#5AB3A8':null,width:200}]}>
        <Text style={[styles.order_button_text,{color:current_order_state==true?'white':'#4C6870'}]}>Current orders</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>tabclick('1','preorder')}  style={[styles.order_button,{backgroundColor:pre_order_state==true? '#5AB3A8':null,width:200}]}>
        <Text style={[styles.order_button_text,{color:pre_order_state==true?'white':'#4C6870'}]}>Pre-orders <Text style={{color:'#CCD4D6',}}>(8)</Text></Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>tabclick('2','archive')}  style={[styles.order_button,{backgroundColor:archive_order_state==true? '#5AB3A8':null,width:120}]}>
        <Text style={[styles.order_button_text,{color:archive_order_state==true?'white':'#4C6870'}]}>Archive</Text>
      </TouchableOpacity>
    </View>
  )
}


  return (
    <SafeAreaView style={{backgroundColor:'#f4f7f8',flex:1}}>
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

      {/* {order_state=='current'?
        <View style={styles.order_container}>
          <Current_orders title='Received' navigation={navigation}/>
        </View>
        :
        order_state=='preorder'?
        <Pre_orders />
        :
        <Archive_orders />
      } */}
        <ScrollView
            showsHorizontalScrollIndicator={false}
            ref={scrollref} 
            horizontal
            scrollEnabled={false}
            
            >
          <View style={{width:width,height:'100%'}}>
            <Current_orders title='Received' navigation={navigation}/>
          </View>
          <View style={{width:width,height:'100%'}}>
            <Pre_orders />
          </View>
          <View style={{width:width,height:'100%'}}>
            <Archive_orders />
          </View>

        </ScrollView>
       {/* {order_state=='current'?
        <View style={styles.order_container}>
          <Current_orders title='Received' navigation={navigation}/>
        </View>
        :
        <>
        {order_state=='preorder'?
        <Pre_orders />
        :
        <>
        {order_state=='archive'?
        <Archive_orders />
        :
        null
        }
        </>
        }
        </>
      } */}


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
    // backgroundColor:'red',
    padding:10
  }
})