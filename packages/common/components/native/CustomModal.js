import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { ScaledSheet } from "react-native-size-matters";
import CustomText from "../CustomText";
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from "react-native-responsive-screen";
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
          <View style={[styles.modalContainer, props.modalContainerStyle]}>
            {props.children}
          </View>
        </Modal>
      )}
    </View>
  );
};

export default CustomModal;

const styles = ScaledSheet.create({
  modalWrapper: {
    backgroundColor: "#fff",
    marginHorizontal: width(20),
    marginVertical: height(19),
    overflow:"hidden",
    borderRadius: 10,

  },
  modalContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
});
