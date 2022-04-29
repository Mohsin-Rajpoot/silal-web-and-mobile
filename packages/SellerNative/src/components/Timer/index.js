import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {Slider, Icon} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Timer = ({label}) => {
  const [modal_timer_visible, set_modal_timer_visible] = useState(false);
  const [values, set_values] = useState(0);
  const [manual_time, set_manual_time] = useState('');
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
            {label ? label : ' Order will be ready in:'}
          </Text>
          <Text
            style={{
              color: '#5AB3A8',
              fontSize: 18,
              fontWeight: '700',
              width: 150,
            }}>
            {values} minutes
          </Text>
          <TouchableOpacity
            onPress={() => set_modal_timer_visible(!modal_timer_visible)}>
            <Entypo
              name="cross"
              style={[styles.cross_icon, {color: '#4C6870', fontSize: 25}]}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20, width: 450}}>
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
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: '#5AB3A8',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#5AB3A8',
                      height: 10,
                      width: 10,
                      borderRadius: 20,
                    }}></View>
                </View>
              ),
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <View
                style={{
                  height: 10,
                  width: 2,
                  backgroundColor: '#CCD4D6',
                }}></View>
              <Text>-15 min</Text>
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
          </View>
        </View>
        <View
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
              // style={CommonStyle.inputTextStyle}
            />
          </View>
        </View>
        <View
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
        </View>
      </View>
    </View>
  );
};

export default Timer;

const styles = ScaledSheet.create({
  modalView: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1,
    elevation: 0,
  },
  modal_save_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5AB3A8',
    width: 210,
    padding: 10,
    borderRadius: 5,
  },
});
