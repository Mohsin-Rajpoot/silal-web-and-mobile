import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { ScaledSheet } from "react-native-size-matters";
import fonts from "../../../assets/fonts";
import colors from "../../../assets/colors";
import { Icon } from "react-native-elements";
import { useTranslation } from "react-i18next";
import CustomModal from "../CustomModal";
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from "react-native-responsive-screen";
import CountryPick from "./molecule";
import {data} from "./Data";
const PhoneNumber = () => {
  const init = {
    callingCode: "+7",
    countryNameCode: "RU",
  };
  const { t } = useTranslation();
  const [code, setCode] = useState(init);
  const [modal, setModal] = useState(false);

  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.phoneCodeContainer}
          activeOpacity={0.6}
          onPress={() => {
            setModal(!modal);
          }}
        >
          <Text style={styles.codeText}>{code.countryNameCode}</Text>
          <Text style={styles.codeText}>{code.callingCode}</Text>
          <Icon
            name="caretdown"
            type="antdesign"
            size={10}
            color={colors.primary}
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>
        <View style={{ width: "75%" }}>
          <TextInput
            style={styles.textInput}
            placeholder={t("phone_number")}
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>
      </View>
      <CustomModal
        isModalVisible={modal}
        setModalVisible={setModal}
        modalWrapperStyle={{
          marginHorizontal: width(0),
          marginVertical: height(0),
          justifyContent: "flex-start",
        }}
      >
        <View style={{ width: "100%" }}>
          <View style={styles.modalSelectCountry}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setModal(false)}
            >
              <Icon name="cross" type="entypo" size={30} />
            </TouchableOpacity>

            <Text style={styles.selectCountry}>Select Country</Text>
          </View>
        </View>
          <View style={{width:"100%"}}> 

        
          <FlatList
            data={data}
            keyExtractor={(item, index) =>  item.id + index.toString()}
            renderItem={({ item:CountryData }) =>{
             return <CountryPick item={CountryData} />
            } 
            
            }
          />
            </View>
     
      </CustomModal>
    </>
  );
};

export default PhoneNumber;

const styles = ScaledSheet.create({
  mainContainer: {
    width: "100%",
    flexDirection: "row",
  },
  phoneCodeContainer: {
    flexDirection: "row",
    padding: "12@ms",
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.light_grey,
    borderWidth: "1@ms",
    borderTopLeftRadius: "5@ms",
    borderBottomLeftRadius: "5@ms",
  },
  codeText: {
    fontSize: "12@ms",
    fontFamily: fonts.LatoRegular,
    color: colors.black,
    marginHorizontal: "3@ms",
  },
  textInput: {
    width: "100%",
    padding: "13@ms",
    borderTopColor: colors.light_grey,
    borderTopWidth: "1@ms",
    borderRightColor: colors.light_grey,
    borderRightWidth: "1@ms",
    borderBottomColor: colors.light_grey,
    borderBottomWidth: "1@ms",
    borderTopRightRadius: "5@ms",
    borderBottomRightRadius: "5@ms",
  },
  modalSelectCountry: {
    flexDirection: "row",

    alignItems: "center",
  },
  selectCountry: {
    fontSize: "13@ms",
    fontFamily: fonts.bold,
    color: colors.black,
    marginTop: "4@ms",
    marginLeft: "5@ms",
  },
});
