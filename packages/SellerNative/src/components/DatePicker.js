import React, { useState, useEffect } from 'react';
import { View, Text, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';


var default_date=new Date();

const Calender = ({height,width,color}) => {
    const [date, setDate] = useState(new Date());
    const [dateSecond, setDateSecond] = useState(new Date());

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const selected = selectedDate || date;

        var current=new Date()
        // alert(current+selected)
          if(current<=selected){
                default_date=selected
                // setDate(moment(selected).format('MMM D, YYYY'));
                setShow(false);
            }
            else{
                default_date=selected
                // setDate(moment(selected).format('MMM D, YYYY'));
                setShow(false);
            // alert('pervious data and time can not be selected')
    
          }
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date')
      };

    return (
        <View>
            <TouchableOpacity
                style={{
                    backgroundColor:'white',
                    height:height,
                    width:width,
                    borderRadius:5,
                    alignItems:'center',
                    justifyContent:'center',
                    // marginLeft:10,
                    flexDirection:'row' 

                }}
                onPress={showDatepicker}
                >
                <Text style={{ color: '#4C6870', textAlign: 'center',color:color }} >{moment(default_date).format('DD.MM.YYYY')} - </Text>
                    <MaterialCommunityIcons name="calendar-month-outline" style={{ fontSize: 17, color: color, paddingHorizontal: 3, }} />
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={default_date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default Calender;