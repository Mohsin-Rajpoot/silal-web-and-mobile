import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {Slider, Icon} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '@SilalApp/common/assets/colors';
import Toast from 'react-native-easy-toast';
import CustomText from '@SilalApp/common/components/CustomText';
import fonts from '@SilalApp/common/assets/fonts';

const TimerMobile = ({label}) => {
  const [modal_timer_visible, set_modal_timer_visible] = useState(false);
  const [values, set_values] = useState(0);
  const [manual_time, set_manual_time] = useState('');
  const toastRef = useRef();
    const emptyArray = [0,1,2,3,4,5,6]
    const timeArray = ["-15 min","-1 min","-5 min","0 min","5 min","10 min","15 min"]
  return (
    <View style={styles.centeredView}>
      <TouchableOpacity
      style={{position:'absolute',top:5,right:5}}
        onPress={() => set_modal_timer_visible(!modal_timer_visible)}>
        <Entypo name="cross" color={colors.black} size={verticalScale(20)} />
      </TouchableOpacity>
      <CustomText
        fontSize={18}
        fontFamily={fonts.bold}
        marginBottom={verticalScale(5)}
        label={label ? label : ' Order will be ready in:'}
      />
      <CustomText
        fontSize={18}
        fontFamily={fonts.bold}
        color={colors.primary}
        label={values + 'minutes'}
      />

      <View style={{marginTop: verticalScale(20), width: '100%'}}>
            <Slider
              value={values}
              onValueChange={set_values}
              maximumValue={15}
              minimumValue={-15}
              step={5}
              // allowTouchTrack
              minimumTrackTintColor="#CCD4D6"
              maximumTrackTintColor="#CCD4D6"
              // trackStyle={{ height: 5, backgroundColor: '#CCD4D6' }}
              thumbStyle={{
                height: 30,
                width: 30,
                backgroundColor: 'transparent',
              }}
              thumbProps={{
                children: (
                  <View
                    style={{
                      backgroundColor: 'white',
                      height: 30,
                      width: 30,
                      borderRadius: verticalScale(20),
                      borderWidth: 2,
                      borderColor: colors.primary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: colors.primary,
                        height: 10,
                        width: 10,
                        borderRadius: 20,
                      }} />
                  </View>
                ),
              }}
            />

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:scale(12)}}>
            {emptyArray.map((item,index)=>{
                return(
                    <View key={index} style={styles.heightView}/>
                )
            }) }
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            {timeArray.map((item,index)=>{
                return(
                    <CustomText fontSize={verticalScale(7)} textStyle={{width: 35,}} key={index} label={item} />
                )
            }) }
            </View>
            {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: '#CCD4D6',
                  }}></View>
                <Text></Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: '#CCD4D6',
                  }}></View>
                <Text>-10 min</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: '#CCD4D6',
                  }}></View>
                <Text>-5 min</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: '#CCD4D6',
                  }}></View>
                <Text style={{color: '#CCD4D6'}}>(19:22 PM)</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: '#CCD4D6',
                  }}></View>
                <Text>5 min</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: '#CCD4D6',
                  }}></View>
                <Text>10 min</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 2,
                    backgroundColor: '#CCD4D6',
                  }}></View>
                <Text>15 min</Text>
              </View>
            </View> */}
          </View>

      {/* <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <Text style={{fontSize: 15, fontWeight: '600'}}>Add manually</Text>
            <View>
              <TextInput
                placeholder="+30 min"
                placeholderTextColor="#CCD4D6"
                value={manual_time}
                keyboardType="decimal-pad"
                // keyboardType="phone-pad"
                onChangeText={text => set_manual_time(text)}
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  width: 120,
                  height: 40,
                  borderColor: '#CCD4D6',
                  marginLeft: 10,
                }}
              />
            </View>
          </View> */}

      {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => set_modal_timer_visible(!modal_timer_visible)}
              style={[styles.modal_save_btn, {backgroundColor: '#CCD4D6'}]}>
              <Text style={{color: 'black'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                set_modal_timer_visible(false);
                toastRef.current.show(
                  <View style={{flexDirection: 'row'}}>
                    <FontAwesome
                      name="check-circle"
                      style={{color: '#36b27c', fontSize: 20}}
                    />
                    <Text
                      style={{
                        color: '#002733',
                        fontSize: 15,
                        fontFamily: 'Lato-Bold',
                        marginLeft: 10,
                      }}>
                      Preperation time is changed{' '}
                    </Text>
                    <Text>(+15 min)</Text>
                    <TouchableOpacity
                      >
                      <Text
                        style={{
                          color: '#018FFB',
                          fontSize: 15,
                          fontFamily: 'Lato-Bold',
                          marginLeft: 20,
                        }}>
                        UNDO
                      </Text>
                    </TouchableOpacity>
                  </View>,
                  3000,
                );
              }}
              style={styles.modal_save_btn}>
              <Text style={{color: 'white'}}>Save</Text>
            </TouchableOpacity>
          </View> */}

      {/* <Toast
            ref={toastRef}
            style={styles.Tost}
            position="top"
            fadeInDuration={750}
            fadeOutDuration={800}
            opacity={1}
            textStyle={{ color: "red" }}
          /> */}
    </View>
  );
};

export default TimerMobile;

const styles = ScaledSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20@s',
    width: "100%",
   
  },
  heightView:{
    height: '10@vs',
    width: "2@s",
    backgroundColor: colors.light_grey,
  },
  // modalView: {
  //   backgroundColor: 'transparent',
  //   padding: 20,
  //   borderRadius: 10,
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 1,
  //   },
  //   shadowOpacity: 0.15,
  //   shadowRadius: 1,
  //   elevation: 0,
  // },
  modal_save_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    width: '50%',
    padding: '10@vs',
    borderRadius: '5@vs',
  },

});
