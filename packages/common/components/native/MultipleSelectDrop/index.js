import { StyleSheet, Text, View } from "react-native";
import React, { useState, useRef } from "react";
import MultiSelect from "react-native-multiple-select";
import colors from "../../../assets/colors";
import { ScaledSheet } from "react-native-size-matters";
const MultiSelectDropDown = () => {
  const [itemSelect, setItemSelect] = useState([]);
  const ref = useRef();
  const items = [
    {
      id: "92iijs7yta",
      name: "Ondo",
    },
    {
      id: "a0s0a8ssbsd",
      name: "Ogun",
    },
    {
      id: "16hbajsabsd",
      name: "Calabar",
    },
    {
      id: "nahs75a5sg",
      name: "Lagos",
    },
    {
      id: "667atsas",
      name: "Maiduguri",
    },
    {
      id: "hsyasajs",
      name: "Anambra",
    },
    {
      id: "djsjudksjd",
      name: "Benue",
    },
    {
      id: "sdhyaysdj",
      name: "Kaduna",
    },
    {
      id: "suudydjsjd",
      name: "Abuja",
    },
  ];

  const onSelectItemChange = (SelectedItem) => {
    setItemSelect(SelectedItem);
  };
  return (
    <View style={{ marginTop: 10 }}>
      <MultiSelect
        hideTags
        items={items}
        uniqueKey="id"
        ref={ref}
        onSelectedItemsChange={onSelectItemChange}
        selectedItems={itemSelect}
        selectText={"Pick Items"}
        searchInputPlaceholderText="Search Items..."
        onChangeInput={(text) => console.log(text)}
        altFontFamily="ProximaNova-Light"
        tagRemoveIconColor={colors.black}
        tagBorderColor={colors.primary}
        tagTextColor={colors.primary}
        selectedItemTextColor={colors.black}
        selectedItemIconColor={colors.primary}
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{ color: "#CCC" }}
        submitButtonColor={colors.primary}
        submitButtonText="Submit"
        styleItemsContainer={{ backgroundColor: "transparent" }}
        // styleTextDropdown={{ backgroundColor: "green" }}
        // styleDropdownMenu={{ backgroundColor: "blue" }}
        styleSelectorContainer={{ backgroundColor: "black" }}
        styleDropdownMenuSubsection={styles.mainContainerSelector}
      />
      <View style={{marginTop:10,}}>
        {ref?.current?.getSelectedItemsExt(itemSelect)}
      </View>
    </View>
  );
};

export default MultiSelectDropDown;

const styles = ScaledSheet.create({
  mainContainerSelector: {
    borderColor: colors.borderColor,
    borderWidth: "1@s",
    borderRadius: "4@s",
    height: "27@s",
  },
});
