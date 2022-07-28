import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import styles from './style';
import {Icon} from 'react-native-elements';
import colors from '@SilalApp/common/assets/colors';
import IsTablet from '@SilalApp/common/components/native/IsTablet';

const index = ({
  isModal,
  setModal,
  navigation,
  mobileModal,
  setMobileModal,
}) => {
  return (
    <View style={styles.mainOuterContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          IsTablet && setModal(!isModal);
          !IsTablet && setMobileModal(!mobileModal)
        }}>
        <View style={styles.headerContainer}>
          <View>
            <CustomText label="Sunday Funday" textStyle={styles.dayText} />
            <CustomText label="8 item" textStyle={styles.itemText} />
          </View>
          <View style={{alignSelf: 'flex-start'}}>
            <Icon
              name="dots-three-vertical"
              type="entypo"
              size={20}
              style={styles.dotsIcon}
              color={colors.light_grey}
            />
          </View>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.orderItemContainer}>
            <CustomText
              label="Ordered items"
              textStyle={styles.orderItemText}
            />
            <CustomText label="2341" textStyle={styles.orderValue} />
          </View>
          <View style={styles.orderItemContainer}>
            <CustomText
              label="money generated"
              textStyle={styles.orderItemText}
            />
            <CustomText label="$ 2 389.99" textStyle={styles.orderValue} />
          </View>
          <View style={styles.orderItemContainer}>
            <CustomText label="Active" textStyle={styles.orderItemText} />
            <CustomText label="Every Sunday" textStyle={styles.orderValue} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default index;
