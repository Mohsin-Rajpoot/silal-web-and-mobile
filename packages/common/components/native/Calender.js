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
                    height: 40,
                    width: 253,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    paddingHorizontal: 10,
                    color: '#000000',
                    flexDirection: 'row'
                }}>
                <Text onPress={showDatepicker}>{moment(date).format('MMM DD')} -

                </Text>
                <Text onPress={showDatepicker}>
                    {moment(dateSecond).format('MMM DD')}
                </Text>
                <MaterialCommunityIcons name="calendar-month-outline"
                    style={{ fontSize: 28, color: '#4C6870', paddingHorizontal: 25, marginBottom: 5 }} />
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
