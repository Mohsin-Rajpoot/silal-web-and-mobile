import DropDownPicker from "react-native-dropdown-picker";
import React, { useState } from "react";
import colors from "../../assets/colors";
import { moderateScale, ScaledSheet } from "react-native-size-matters";
import fonts from "../../assets/fonts";
const DropDown = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={props.placeholder}
      labelStyle={styles.textStyle}
      listItemLabelStyle={styles.textStyle}
      placeholderStyle={[
        styles.textStyle,
        {
          color: colors.light_grey,
        },
      ]}
      dropDownContainerStyle={{
        borderColor: colors.borderColor,
      }}
      style={{
        borderColor: colors.borderColor,
        borderRadius: 5,
      }}
    />
  );
};

const styles = ScaledSheet.create({
  textStyle: {
    fontSize: moderateScale(12),
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
});
export default DropDown;
