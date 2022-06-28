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
  React.useEffect(() => {
    // alert(props.multiple)
  }, []);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      multiple={false}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={props.placeholder}
      labelStyle={styles.textStyle}
      listItemLabelStyle={[styles.textStyle, props.CustomtextStyle]}
      placeholderStyle={[
        styles.textStyle,
        {
          color: colors.black,
        },
      ]}
      dropDownContainerStyle={{
        borderColor: colors.borderColor,
        zIndex: 0,
      }}
      style={[
        {
          borderColor: colors.borderColor,
          borderRadius: 8,
          height: props.height || 62,
          backgroundColor: props.backgroundColor,
          borderWidth: props.borderWidth,
        },
        props.DropDownCustomStyle,
      ]}
      // onChangeValue={()=> se}
    />
  );
};

const styles = ScaledSheet.create({
  textStyle: {
    fontSize: moderateScale(12),
    fontFamily: fonts.LatoRegular,
    color: colors.black,
    // backgroundColor:'red',
    zIndex: 1,
    // backgroundColor:'red'
  },
});
export default DropDown;
