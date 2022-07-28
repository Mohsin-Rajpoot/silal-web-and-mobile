// import React, {useState, useEffect} from 'react';
// import {View, Text} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import moment from 'moment';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// var default_date = new Date();

// const Calender = ({height, width, color}) => {
//   const [date, setDate] = useState(new Date());
//   const [dateSecond, setDateSecond] = useState(new Date());

//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const selected = selectedDate || date;

//     var current = new Date();
//     // alert(current+selected)
//     if (current <= selected) {
//       default_date = selected;
//       // setDate(moment(selected).format('MMM D, YYYY'));
//       setShow(false);
//     } else {
//       default_date = selected;
//       // setDate(moment(selected).format('MMM D, YYYY'));
//       setShow(false);
//       // alert('pervious data and time can not be selected')
//     }
//   };

//   const showMode = currentMode => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   return (
//     <View>
//       <TouchableOpacity
//         style={{
//           backgroundColor: 'white',
//           height: height,
//           width: width,
//           borderRadius: 5,
//           alignItems: 'center',
//           justifyContent: 'center',
//           // marginLeft:10,
//           flexDirection: 'row',
//         }}
//         onPress={showDatepicker}>
//         <Text style={{color: '#4C6870', textAlign: 'center', color: color}}>
//           {moment(default_date).format('DD.MM.YYYY')} -{' '}
//         </Text>
//         <MaterialCommunityIcons
//           name="calendar-month-outline"
//           style={{fontSize: 17, color: color, paddingHorizontal: 3}}
//         />
//       </TouchableOpacity>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={default_date}
//           mode={mode}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//     </View>
//   );
// };

// export default Calender;
import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Button } from 'react-native'
import DatePicker from 'react-native-neat-date-picker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from "moment";
import colors from '../../../common/assets/colors';

const SingleCalender = ({ bg_Calender }) => {
    React.useEffect(() => {
        console.log(bg_Calender, "Calender Background Prop")
    }, [])
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [start_date, set_start_date] = useState();
    const [end_date, set_end_date] = useState();

    const openDatePicker = () => {
        setShowDatePicker(true)
    }
    const onCancel = () => {
        setShowDatePicker(false)
    }
    const onConfirm = (output) => {
        const { startDateString, endDateString } = output
        set_start_date(startDateString)
        set_end_date(endDateString)
        console.log(startDateString)
        console.log(endDateString)
        setShowDatePicker(false)
    }
    const colorOptions = {
        headerColor: colors.primary,
        weekDaysColor: colors.primary,
        selectedDateColor: colors.primary,
        confirmButtonColor: colors.primary,
        selectedDateBackgroundColor: colors.primary

    }

    return (
        <View>
            <TouchableOpacity style={{
                flexDirection: 'row',
                marginTop: 8, width: 140, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 5
            }} onPress={openDatePicker} >

                <Text style={{ }}>
                    {moment(start_date).format('MMM DD ')}
                    {/* {moment(end_date).format(' MMM DD')} */}

                </Text>
                <MaterialCommunityIcons name="calendar-month-outline"
                    style={{ fontSize: 17, color: '#4C6870', paddingHorizontal: 3, }} />
            </TouchableOpacity>
            {/* <Button title={'open'} onPress={openDatePicker} /> */}
            <DatePicker
                isVisible={showDatePicker}
                mode={'range'}
                onCancel={onCancel}
                onConfirm={onConfirm}
                colorOptions={colorOptions}>
            </DatePicker>
        </View>
    )
}

export default SingleCalender

