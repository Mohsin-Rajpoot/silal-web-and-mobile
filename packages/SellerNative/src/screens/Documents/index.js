import {Image, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
  scale,
} from 'react-native-size-matters';
import Header from '../Profile/moleclues/Header';
import colors from '@SilalApp/common/assets/colors';
import CustomButton from '@SilalApp/common/components/native/CustomButton';
const Documents = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: scale(15),
      }}>
      <Header label="Documents" />

      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View>
            <CustomText
              textStyle={{fontSize: moderateScale(12)}}
              label="ITIN"
            />
            <TextInput
              placeholder="314-23-N1348"
              style={{fontSize: moderateScale(17), color: colors.black}}
              borderRadius={moderateScale(5)}
              borderWidth={moderateScale(2)}
              borderColor={colors.borderColor}
              paddingHorizontal={scale(10)}
              height={verticalScale(40)}
              marginTop={verticalScale(5)}
            />
          </View>
          <View style={{marginTop: verticalScale(20)}}>
            <CustomText
              textStyle={{fontSize: moderateScale(12)}}
              label="Checking account"
            />
            <TextInput
              placeholder="2345 5445 7922 2054"
              style={{fontSize: moderateScale(17), color: colors.black}}
              borderRadius={moderateScale(5)}
              borderWidth={moderateScale(2)}
              borderColor={colors.borderColor}
              paddingHorizontal={scale(10)}
              height={verticalScale(40)}
              marginTop={verticalScale(5)}
            />
          </View>
        </View>
        <CustomButton containerStyle={styles.exportBtn} text="Export" />
      </View>
    </View>
  );
};

export default Documents;

const styles = ScaledSheet.create({
  mainContainer: {
    width: '50%',
    marginTop: '20@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    width: '80%',
    backgroundColor: colors.textWhite,
    padding: '15@ms',
    borderRadius: '5@ms',
  },
  inputContainer: {
    height: '40@s',
    width: '100%',
  },
  exportBtn: {
    marginVertical: 0,
  },
});
