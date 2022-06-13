import {Text, View, ScrollView} from 'react-native';
import React, {useState, useRef} from 'react';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {Slider, Icon} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '@SilalApp/common/assets/colors';
import Toast from 'react-native-easy-toast';
import CustomText from '@SilalApp/common/components/CustomText';
import fonts from '@SilalApp/common/assets/fonts';
import TextInput from '../../../common/components/native/TextInput/index';
import {CustomButton} from '@SilalApp/common/components/native';
import {useTranslation} from 'react-i18next';


const TimerMobile = ({label}) => {
  const {t} = useTranslation();
  const [modal_timer_visible, set_modal_timer_visible] = useState(false);
  const [values, set_values] = useState(0);
  const [manual_time, set_manual_time] = useState('');
  const toastRef = useRef();
  const emptyArray = [0,1];
  const timeArray = ['50 min', '40 min',  '60 min'];
  return (
    <ScrollView style={styles.centeredView}>
     
      <CustomText
        fontSize={18}
        fontFamily={fonts.bold}
        marginBottom={verticalScale(5)}
        label={label ? label : t("Order_will_be_ready")}
      />
      <CustomText
        fontSize={18}
        fontFamily={fonts.bold}
        color={colors.primary}
        label={values + 40  + t("minutes")}
      />

      <View style={{marginTop: verticalScale(20), width: '100%'}}>
        <Slider
          value={values}
          onValueChange={set_values}
          maximumValue={10}
          minimumValue={-10}
          step={10}
          // allowTouchTrack
          minimumTrackTintColor="#CCD4D6"
          maximumTrackTintColor="#CCD4D6"
          // trackStyle={{ height: 5, backgroundColor: '#CCD4D6' }}
          thumbStyle={{
            height: verticalScale(40),
            width: verticalScale(40),
            backgroundColor: 'transparent',
          }}
          thumbProps={{
            children: (
              <View
                style={{
                  backgroundColor: 'white',
                  height: verticalScale(40),
                  width: verticalScale(40),
                  borderRadius: verticalScale(100),
                  borderWidth: 2,
                  borderColor: colors.primary,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: colors.primary,
                    height: verticalScale(8),
                    width: verticalScale(8),
                    borderRadius: verticalScale(100),
                  }}
                />
              </View>
            ),
          }}
        />

      </View>
      <View style={{width: '100%',}}>
      <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop:verticalScale(10),
            paddingHorizontal:scale(20)
          }}>
          {emptyArray.map((item, index) => {
            return <View key={index} style={styles.heightView} />;
          })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // paddingHorizontal:scale(20)
          }}>
          {timeArray.map((item, index) => {
            return (
              <CustomText
                fontSize={verticalScale(10)}
                textStyle={{width: scale(42), textAlign: 'center'}}
                key={index}
                label={item}
              />
            );
          })}
        </View>
      </View>
     <View style={{alignSelf:'flex-start'}}>
     <CustomText
        label={t("enter_manually")}
        fontSize={15}
        marginBottom={verticalScale(8)}
        fontFamily={fonts.LatoMedium}
        marginTop={verticalScale(15)}
      />
     </View>
      <TextInput
        placeholderText="+30 min"
        value={manual_time}
        keyboardType="decimal-pad"
        onChangeText={text => set_manual_time(text)}
        inputTextStyle={{width: '100%'}}
        inputStyle={{
          width: '100%',
          backgroundColor: colors.dullWhite,
          borderRadius: 10,
          paddingHorizontal: scale(15),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginTop:verticalScale(15)
        }}>
        <CustomButton containerStyle={styles.modal_save_btn} text={t("Cancel")} />
        <CustomButton containerStyle={styles.modal_save_btn} text={t("save_time")} />
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
    </ScrollView>
  );
};

export default TimerMobile;

const styles = ScaledSheet.create({
  centeredView: {
    padding: '20@s',
    width: '100%',
  },
  heightView: {
    height: '10@vs',
    width: '2@s',
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
    borderRadius: '10@vs',
    width:'48%',
    height:'40@vs'
  },
});


var x = 5