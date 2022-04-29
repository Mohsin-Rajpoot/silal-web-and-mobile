import React, { useState, useEffect } from 'react';
import { View, Text, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Calender = () => {
    const [date, setDate] = useState(new Date());
    const [dateSecond, setDateSecond] = useState(new Date());

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        if (selectedDate != undefined) {
            var currentDate = selectedDate || date;
            setDate(currentDate)
        }
        else if (selectedDate != undefined) {
            var currentDate = selecteddateSecond || dateSecond;
            setDateSecond(currentDate)
        }
        setDate(currentDate);
        setShow(false);
        setDate(currentDate);
        setShow(false);

    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View>
            <View
                style={{
                    justifyContent: 'center',
                    color: '#000000',
                    flexDirection: 'row',
                    backgroundColor: '#F2F4F5',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    padding: 5,
                    paddingHorizontal: 10,
                }}>
                <Text style={{ color: '#4C6870', textAlign: 'center' }} onPress={showDatepicker}>{moment(date).format('MMM DD YYYY')} - </Text>
                <MaterialCommunityIcons name="calendar-month-outline"
                    style={{ fontSize: 17, color: '#4C6870', paddingHorizontal: 3, }} />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={new Date()}
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


// import React from "react";
// import { StyleSheet, View, Text } from "react-native";
// import moment from "moment";
// import DateRangePicker from "react-native-daterange-picker";

// export default class Calender extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             startDate: null,
//             endDate: null,
//             displayedDate: moment(),
//         };
//     }

//     setDates = (dates) => {
//         this.setState({
//             ...dates,
//         });
//     };

//     render() {
//         const { startDate, endDate, displayedDate } = this.state;
//         return (
//             <View style={styles.container}>
//                 <DateRangePicker
//                     onChange={this.setDates}
//                     endDate={endDate}
//                     startDate={startDate}
//                     displayedDate={displayedDate}
//                     range
//                 >
//                     <Text style={{ color: '#4C6870', }}>
//                         {moment(this.displayedDat).format('MMM DD')}
//                     </Text>
//                 </DateRangePicker>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });