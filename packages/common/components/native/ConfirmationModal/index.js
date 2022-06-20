import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { s, ScaledSheet } from "react-native-size-matters";
import CustomText from "../../CustomText";
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import colors from "../../../assets/colors";
import fonts from "../../../assets/fonts";
import CustomButton from "../CustomButton";
import IsTablet from "../IsTablet";
const CustomModal = (props) => {
  return (
    <View>
      {props.isModalVisible && (
        <Modal
          transparent={true}
          onBackdropPress={() => props.setModalVisible(false)}
          isVisible={props.isModalVisible}
          style={[styles.modalWrapper, props.modalWrapperStyle]}
        >
          <View>
            {props.logoutDetail ? (
              <CustomText
                label={props.logoutDetail}
                textStyle={styles.areYouSureText1}
              />
            ) : (
              <View style={styles.header}>
                <CustomText
                  label="Are you sure?"
                  textStyle={styles.areYouSureText}
                />
                {IsTablet ? (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => props.setModalVisible(false)}
                  >
                    <Icon
                      name="cross"
                      type="entypo"
                      color={colors.light_grey}
                      size={40}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
            )}
            <CustomText label={props?.detail} textStyle={styles.detailText} />
            <View style={styles.buttonContainer}>
              <CustomButton
                textStyle={
                  IsTablet ? styles.cancelButton : styles.cancelButtonMobile
                }
                text="Cancel"
                containerStyle={
                  props.logoutDetail
                    ? IsTablet
                      ? styles.buttonContainerMainActive
                      : styles.buttonContainerMainActiveMobile
                    : styles.buttonContainerMain
                }
                onPress={() => props.setModalVisible(false)}
              />
              <CustomButton
                containerStyle={styles.buttonContainerActive}
                text={props.Active}
                textStyle={
                  IsTablet ? styles.activeButton : styles.activeButtonMobile
                }
                onPress={props.onPress && props.setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default CustomModal;

const styles = ScaledSheet.create({
  buttonContainerMain: {
    backgroundColor: colors.light_grey,
    marginTop: "10@s",
    margin: "10@ms",
  },
  buttonContainerMainActiveMobile: {
    backgroundColor: "#005d21",
    marginTop: "10@s",
    margin: "10@ms",
  },
  buttonContainerMainActive: {
    backgroundColor: colors.primary,
    marginTop: "10@s",
    margin: "10@ms",
  },
  buttonContainerActive: {
    backgroundColor: colors.lightRed,
    marginTop: "10@s",
    margin: "10@ms",
  },

  modalWrapper: {
    marginHorizontal: width(20),
    marginVertical: height(19),
    overflow: "hidden",
    borderRadius: "10@s",
    backgroundColor: "#fff",
  },
  cancelButton: {
    paddingHorizontal: "40@ms",
    paddingVertical: "5@ms",
    fontSize: "14@ms",
    fontFamily: fonts.PoppinsSemiBold,
  },

  cancelButtonMobile: {
    paddingHorizontal: "30@ms",
    paddingVertical: "5@ms",
    fontSize: "14@ms",
    fontFamily: fonts.PoppinsSemiBold,
  },

  activeButton: {
    paddingHorizontal: "30@ms",
    paddingVertical: "5@ms",
    fontSize: "14@ms",
    fontFamily: fonts.PoppinsSemiBold,
  },
  activeButtonMobile: {
    paddingHorizontal: "10@ms",
    paddingVertical: "5@ms",
    fontSize: "14@ms",
    fontFamily: fonts.PoppinsSemiBold,
  },
  modalContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "10@s",
    padding: 10,
  },
  detailText: {
    fontSize: "14@ms",
    fontFamily: fonts.LatoRegular,
    color: colors.textPrimary,
    padding: "10@ms",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: "15@s",
    marginHorizontal: "10@ms",
  },
  areYouSureText: {
    fontSize: "18@ms",
    fontFamily: fonts.PoppinsSemiBold,
  },
  areYouSureText1: {
    fontSize: "18@ms",
    fontFamily: fonts.PoppinsSemiBold,
    alignSelf: "center",
    marginTop: "10@s",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "5@ms",
  },
});
