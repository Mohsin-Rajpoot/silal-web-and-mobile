import React, { useState } from "react";
import { View, TouchableOpacity, Text, Button } from "react-native";
import DatePicker from "react-native-neat-date-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";
import colors from "../../assets/colors";
import { verticalScale } from "react-native-size-matters";
import IsTablet from "./IsTablet";
import { Icon } from "react-native-elements";

const Calender = ({ bg_Calender }) => {
  React.useEffect(() => {
    console.log(bg_Calender, "Calender Background Prop");
  }, []);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [start_date, set_start_date] = useState();
  const [end_date, set_end_date] = useState();

  const openDatePicker = () => {
    setShowDatePicker(true);
  };
  const onCancel = () => {
    setShowDatePicker(false);
  };
  const onConfirm = (output) => {
    const { startDateString, endDateString } = output;
    set_start_date(startDateString);
    set_end_date(endDateString);
    console.log(startDateString);
    console.log(endDateString);
    setShowDatePicker(false);
  };
  const colorOptions = {
    headerColor: "#5AB3A8",
    weekDaysColor: "#5AB3A8",
    selectedDateColor: "#5AB3A8",
    confirmButtonColor: "#5AB3A8",
    selectedDateBackgroundColor: "#5AB3A8",
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: bg_Calender == "Default" ? null : colors.dullWhite,
          marginTop: 8,
          //   width: 140,
          padding: verticalScale(!IsTablet ? 10 : 5),
          justifyContent: !IsTablet ? "space-between" : "center",
          alignItems: "center",
          borderRadius: 5,

          marginRight: verticalScale(5),
        }}
        onPress={openDatePicker}
      >
        <View
          style={{
            flexDirection: !IsTablet ? "row-reverse" : "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: colors.textPrimeColor,
              fontSize: verticalScale(10),
            }}
          >
            {moment(start_date).format("MMM DD -")}
            {moment(end_date).format(" MMM DD")}
          </Text>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            style={{
              fontSize: verticalScale(12),
              color: colors.textPrimeColor,
              paddingHorizontal: 3,
            }}
          />
        </View>
        {!IsTablet ? (
          <Icon
            name="keyboard-arrow-down"
            type="material"
            size={22}
            color={colors.sidebar}
          />
        ) : (
          <View />
        )}
      </TouchableOpacity>
      {/* <Button title={'open'} onPress={openDatePicker} /> */}
      <DatePicker
        isVisible={showDatePicker}
        mode={"range"}
        onCancel={onCancel}
        onConfirm={onConfirm}
        colorOptions={colorOptions}
      ></DatePicker>
    </View>
  );
};

export default Calender;
