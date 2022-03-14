import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,Modal,Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import { Image, SvgXml } from 'react-native-svg';
import Svg, { Path ,Defs,LinearGradient,Stop,Rect,Circle, G} from "react-native-svg"


const { width, height } = Dimensions.get("window");


export default function Current_orders({
title,
  navigation
}) {

  const [modal_timer_visible, set_modal_timer_visible] = useState(false);


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
        SubTitle: 'USA 2nd last',
        year: '22/03/2022',
    },
    {
      id: '8',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
  },


    ];

  const render_received=(item)=>{
    return(
      <TouchableOpacity  style={styles.single_order} >
        <View style={styles.order_header}>
            <Text style={styles.orderid_text}>ORDER ID<Text style={[styles.orderid_text,{color:'black'}]}>  #123456</Text></Text>
            <Text style={[styles.orderid_text,{color:'black'}]}>19.43 MIN</Text>
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
        <View style={styles.accept_btn}>
          <Text style={styles.accept_btn_txt}>Slide to accept order</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const render_accepted=(item)=>{
    return(
        <TouchableOpacity  style={styles.single_order} >
            <View style={styles.order_header}>
                <Text style={styles.orderid_text}>ORDER ID<Text style={[styles.orderid_text,{color:'black'}]}>  #123456</Text></Text>
                <Text style={[styles.orderid_text,{color:'black'}]}>19.43 MIN</Text>
            </View>
            <View style={styles.order_recve_phone_view}> 
              <Svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Rect width="44" height="44" rx="5" fill="#DEEBFF"/>
                <Path d="M26.384 18.712L23.179 16.384C22.8192 16.1207 22.3816 15.9855 21.936 16C21.3924 16.0136 20.8667 16.1961 20.4317 16.5223C19.9967 16.8485 19.6742 17.3021 19.509 17.82C19.323 18.403 19.153 18.797 18.999 19.002C18.5336 19.6228 17.93 20.1266 17.236 20.4734C16.5421 20.8203 15.7768 21.0005 15.001 21V23C16.0337 23.0011 17.0538 22.7733 17.9879 22.3329C18.9219 21.8925 19.7468 21.2504 20.403 20.453L21.1 24.408L19.039 26.138L16.816 32.246L18.696 32.93L20.736 27.326L24.126 24.481C24.4042 24.2564 24.617 23.9612 24.7424 23.6264C24.8678 23.2915 24.9012 22.9291 24.839 22.577L24.33 19.692L25.007 20.184L27.134 23.112L28.752 21.936L26.401 18.7L26.384 18.712ZM20.501 15.5C21.0314 15.5 21.5401 15.2893 21.9152 14.9142C22.2902 14.5391 22.501 14.0304 22.501 13.5C22.501 12.9696 22.2902 12.4609 21.9152 12.0858C21.5401 11.7107 21.0314 11.5 20.501 11.5C19.9705 11.5 19.4618 11.7107 19.0867 12.0858C18.7117 12.4609 18.501 12.9696 18.501 13.5C18.501 14.0304 18.7117 14.5391 19.0867 14.9142C19.4618 15.2893 19.9705 15.5 20.501 15.5ZM23.473 28.681L26.687 32.511L28.219 31.226L25.243 27.68L24.497 25.5L22.706 27L23.473 28.681Z" fill="#0065FF"/>
              </Svg>
              <View style={{marginLeft:10}}>
                <Text style={styles.order_recve_name}>Wade Wamen</Text>
                <Text style={{fontSize:17}}>(808)555-0111</Text>
              </View>
            </View>
            <View style={styles.order_recve_loc_view}> 
              <Svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Rect width="44" height="44" rx="5" fill="#EAE6FF"/>
              <Path d="M28.364 27.3639L22 33.7279L15.636 27.3639C14.3773 26.1052 13.5202 24.5016 13.1729 22.7558C12.8257 21.0099 13.0039 19.2004 13.6851 17.5558C14.3663 15.9113 15.5198 14.5057 16.9999 13.5168C18.4799 12.5278 20.22 12 22 12C23.78 12 25.5201 12.5278 27.0001 13.5168C28.4802 14.5057 29.6337 15.9113 30.3149 17.5558C30.9961 19.2004 31.1743 21.0099 30.8271 22.7558C30.4798 24.5016 29.6227 26.1052 28.364 27.3639ZM22 22.9999C22.5304 22.9999 23.0391 22.7892 23.4142 22.4141C23.7893 22.0391 24 21.5304 24 20.9999C24 20.4695 23.7893 19.9608 23.4142 19.5857C23.0391 19.2106 22.5304 18.9999 22 18.9999C21.4696 18.9999 20.9609 19.2106 20.5858 19.5857C20.2107 19.9608 20 20.4695 20 20.9999C20 21.5304 20.2107 22.0391 20.5858 22.4141C20.9609 22.7892 21.4696 22.9999 22 22.9999Z" fill="#6554C0"/>
              </Svg>
              <View style={{marginLeft:10}}>
                <Text style={styles.order_recve_name}>2.4 km</Text>
              </View>
            </View>
            <View style={styles.order_recve_loc_view}>
              <TouchableOpacity 
              // onPress={()=>set_modal_timer_visible(true)}
              >
                <Text style={{marginRight:20,color:'#5AB3A8'}}>Change estimation time</Text>
              </TouchableOpacity>
              <View style={styles.ready_btn}>
                <Text style={{color:'white'}}>Ready</Text>
              </View>
            </View>
        </TouchableOpacity>
      )
  }
  const render_ready_pickup=()=>{
    return(
      <TouchableOpacity  style={[styles.single_order,{paddingVertical:10,marginHorizontal:20,marginVertical:10}]} >
        <Text style={styles.order_recve_name}>#247HW9</Text>
        <Text style={{fontSize:17}}>21 min ago</Text>
      </TouchableOpacity>
      )
  }

  return (
        
      <View style={{height:'82%',width:'100%'}}>
          <View style={{flexDirection:'row'}}>
            <View style={{backgroundColor:'#E5EAEB',width:'40%',marginLeft:10,borderRadius:5}}>
                <Text style={styles.title}>Received</Text>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                    renderItem={({ item }) => (
                      render_received(item)
                    )}
                />
            </View>

            <View style={{backgroundColor:'#E5EAEB',width:'40%',marginLeft:10,borderRadius:5}}>
              <Text style={styles.title}>Accepted</Text>
              <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={data}
                  renderItem={({ item }) => (
                    render_accepted(item)

                  )}
              />
            </View>

            <View style={{backgroundColor:'#4C6870',flex:1,marginLeft:10,borderRadius:5}}>
              <Text style={[styles.title,{color:'white'}]}>Ready for pickup</Text>
              <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={data}
                  renderItem={({ item }) => (
                    render_ready_pickup()
                  )}
              />
            </View>

          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modal_timer_visible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              set_modal_timer_visible(!modal_timer_visible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text >Hello World!</Text>
                <Pressable
                  // style={[styles.button, styles.buttonClose]}
                  onPress={() => set_modal_timer_visible(!modal_timer_visible)}
                >
                  <Text >Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {

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
});

