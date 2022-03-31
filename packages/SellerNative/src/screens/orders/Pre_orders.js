import React ,{useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,ToastAndroid,FlatList, TextInput,Modal} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Image, SvgXml } from 'react-native-svg';
import Svg, { Path ,Defs,LinearGradient,Stop,Rect,Circle, G} from "react-native-svg"
import Toast from 'react-native-easy-toast';

const { width, height } = Dimensions.get("window");


export default function Pre_orders({title, navigation}) {

  const [modal_timer_visible, set_modal_timer_visible] = useState(false);
  const [refusal_text, set_refusal_text] = useState('');
  const toastRef = useRef();


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

  const render_today=()=>{
    return(
      <View  style={styles.single_order} >
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
          <Text style={{color:'#5AB3A8'}}>3 more</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <TouchableOpacity onPress={()=>set_modal_timer_visible(true)} style={[styles.accept_btn,{width:'30%',backgroundColor:'#acd9d3'}]}>
                <Text style={styles.accept_btn_txt}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => toastRef.current.show(
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#002733',fontSize:15,fontFamily:'Lato-Bold'}}>The order #247HW9 has been moved to current orders</Text>
                    <TouchableOpacity onPress={()=>{toastRef.current.close(), alert('undo')}}>
                      <Text style={{color:'#018FFB',fontSize:15,fontFamily:'Lato-Bold',marginLeft:20}}>UNDO</Text>
                    </TouchableOpacity>
                  </View>
                  ,3000
                  )} 
                style={[styles.accept_btn,{width:'60%'}]}>
                <Text style={styles.accept_btn_txt}>Move to current orders</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }

  const render_this_week=()=>{
    return(
      <View  style={styles.single_order} >
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
          <Text style={{color:'#5AB3A8'}}>3 more</Text>
        </View>
        
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <TouchableOpacity       
                  onPress={()=>set_modal_timer_visible(true)}
                  style={[styles.accept_btn,{width:'30%',backgroundColor:'#acd9d3'}]}>
                <Text style={styles.accept_btn_txt}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={() => toastRef.current.show(
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#002733',fontSize:15,fontFamily:'Lato-Bold'}}>The order #247HW9 has been moved to current orders</Text>
                <TouchableOpacity onPress={()=>{toastRef.current.close(), alert('undo')}}>
                  <Text style={{color:'#018FFB',fontSize:15,fontFamily:'Lato-Bold',marginLeft:20}}>UNDO</Text>
                </TouchableOpacity>
              </View>
              ,3000
              )} 
              style={[styles.accept_btn,{width:'60%'}]}>
                <Text style={styles.accept_btn_txt}>Move to current orders</Text>
            </TouchableOpacity>
        </View>
      </View>
      )
  }


  
  const render_modal_view=()=>{
    return(
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text style={styles.modal_heading}>Indicate the reason for refusal</Text>
              <TouchableOpacity onPress={() => set_modal_timer_visible(!modal_timer_visible)} >
                <Entypo name='cross' style={[styles.cross_icon,{color:'#4C6870',fontSize:25}]} />
              </TouchableOpacity>
            </View>
            <Text style={{color:'#002733',fontSize:15,marginTop:5}}>We will notify the client about it</Text>

            <View style={{marginTop:20,width:450}}>
              <TextInput
                  multiline={true}
                  style={{marginVertical:5,lineHeight:22,fontSize:15,color:'#4C6870',backgroundColor:'#F2F4F5',padding:10,height:120}} 
                  value={refusal_text}
                  textAlignVertical='top'
                  numberOfLines={3}
                  onChangeText={n => set_refusal_text(n)}
                  placeholder="Type here..."
                  placeholderTextColor='#4C6870'
              />
              <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                <Text style={[styles.modal_heading,{fontWeight:'200',fontSize:15}]}>Suggestions:</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                    renderItem={({ item }) => (
                      <View style={{paddingVertical:5,paddingHorizontal:10,backgroundColor:'#E6F4F2',marginLeft:10,borderRadius:5}}>
                        <Text>{item.SubTitle}</Text>
                      </View>
                    )}
                />
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                <TouchableOpacity onPress={()=>set_modal_timer_visible(!modal_timer_visible)} style={[styles.modal_save_btn,{backgroundColor:'#CCD4D6'}]}>
                  <Text style={{color:'black'}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => {
                    set_modal_timer_visible(false)
                    toastRef.current.show(
                    <View style={{flexDirection:'row'}}>
                      <FontAwesome name='check-circle' style={{color:'#36b27c',fontSize:20}} />
                      <Text style={{color:'#002733',fontSize:15,fontFamily:'Lato-Bold',marginLeft:10}}>Order #247HW9 was declined</Text>
                      <TouchableOpacity onPress={()=>{toastRef.current.close(), alert('undo')}}>
                        <Text style={{color:'#018FFB',fontSize:15,fontFamily:'Lato-Bold',marginLeft:20}}>UNDO</Text>
                      </TouchableOpacity>
                    </View>
                    ,3000
                    )
                  }}
                // onPress={()=>{
                //     set_modal_timer_visible(false)
                //     ToastAndroid.showWithGravityAndOffset('Preperation time is changed',ToastAndroid.LONG,ToastAndroid.BOTTOM,25,50);
                //     }}
                    style={styles.modal_save_btn}>
                  <Text style={{color:'white'}}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
    )
  }

  return (
        
      <View style={{flexDirection:'row',justifyContent:'space-evenly',height:'100%'}}>

          {/* <View style={{flexDirection:'row',justifyContent:'space-evenly',}}> */}
            <View style={{backgroundColor:'#E5EAEB',width:'48%',borderRadius:5}}>
                <Text style={styles.title}>For today</Text>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                    renderItem={({ item }) => (
                      render_today()
                    )}
                />
            </View>

            <View style={{backgroundColor:'#E5EAEB',width:'48%',marginLeft:10,borderRadius:5}}>
              <Text style={styles.title}>This week</Text>
              <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={data}
                  renderItem={({ item }) => (
                    render_this_week()

                  )}
              />
            </View>
            {/* <Button title="Show Toast" onPress={() => toastRef.current.show(
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#002733',fontSize:15,fontFamily:'Lato-Bold'}}>The order #247HW9 has been moved to Accepted</Text>
                <TouchableOpacity onPress={()=>{toastRef.current.close(), alert('undo')}}>
                  <Text style={{color:'#018FFB',fontSize:15,fontFamily:'Lato-Bold',marginLeft:20}}>Undo</Text>
                </TouchableOpacity>
              </View>
              ,1000
              )} /> */}
            <Toast 
              ref={toastRef}
              style={styles.toast}
              position='bottom'
              positionValue={250}
              fadeInDuration={750}
              fadeOutDuration={800}
              opacity={1}
              textStyle={{color:'red'}}
            />

            <Modal
              animationType="slide"
              transparent={true}
              visible={modal_timer_visible}
              onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                set_modal_timer_visible(!modal_timer_visible);
              }}
            >
            {render_modal_view()}
            </Modal>

          {/* </View> */}

      </View>



      );
}
const styles = StyleSheet.create({

  title: {
    fontSize:18,
    fontFamily:'Poppins-Bold',
    margin:10,
    color:'black'
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
    fontFamily:'Lato-Bold'
  },
  order_timer:{
    backgroundColor:'#F2A341',
    borderRadius:'0 0 5 5'
  },
  order_title:{
    width:'70%',
    fontSize:17,
    fontFamily:'Lato-Bold'
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
    fontSize:15,
    fontFamily:'Poppins-SemiBold'
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
      color:'#F2A341',
      fontFamily:'Lato-Bold'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {

    backgroundColor: "white",
    padding: 20,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modal_save_btn:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#5AB3A8',
    width:210,
    padding:10,
    borderRadius:5
  },
  modal_heading:{
    fontSize:18,
    fontWeight:'700',
    color:'black'
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
  }
});

