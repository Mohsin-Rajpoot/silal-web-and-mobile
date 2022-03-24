import {View, TouchableOpacity} from 'react-native';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
  scale,
} from 'react-native-size-matters';
import React, {useState} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import TextWithIcon from '../../components/TextWithIcon';
import colors from '@SilalApp/common/assets/colors';
import Header from '../Profile/moleclues/Header';
import fonts from '@SilalApp/common/assets/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {CheckBox, Icon} from 'react-native-elements';
import ConfirmationModal from '@SilalApp/common/components/native/ConfirmationModal';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
const Setting = ({navigation}) => {
  const [rightArrow, setRightArrow] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);
  const [check, setCheck] = useState(false);
  const [isVisible, setVisible] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <Header label={'Setting'} onPress={()=>navigation.openDrawer()} />
      {rightArrow ? null : (
        <>
          <View style={{width: '35%', marginTop: verticalScale(20)}}>
            <CustomText textStyle={styles.titleText} label="Title " />
            <TextWithIcon
              label="Pre-order settings"
              onPress={() => {
                setRightArrow(true);
                setLeftArrow(true);
              }}
            />
          </View>
          <View style={{width: '35%'}}>
            <CustomText textStyle={styles.titleText} label="Account " />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setVisible(!isVisible)}>
              <TextWithIcon
                iconDelete={true}
                textStyle={styles.deleteAcountText}
                label="Delete account"
              />
            </TouchableOpacity>
          </View>
        </>
      )}

      {leftArrow ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: verticalScale(15),
            }}>
            <TouchableOpacity
              onPress={() => {
                setLeftArrow(false);
                setRightArrow(false);
              }}>
              <FontAwesome5 style={styles.leftArrow} name="arrow-left" />
            </TouchableOpacity>
            <CustomText
              textStyle={styles.preOrderText}
              label="Pre-order settings"
            />
          </View>
          <View style={styles.preOrderContainer}>
            <CustomText
              textStyle={styles.allowPreText}
              label="Allow pre-orders"
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CheckBox
                center
                checkedIcon={
                  <Icon
                    name="radio-button-checked"
                    type="material"
                    color="green"
                    size={28}
                    iconStyle={{marginRight: 2}}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name="radio-button-unchecked"
                    type="material"
                    color="grey"
                    size={28}
                    iconStyle={{marginRight: 2}}
                  />
                }
                checked={check}
                onPress={() => setCheck(true)}
              />
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setCheck(true)}>
                <CustomText textStyle={styles.alwaysText} label="Always" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CheckBox
                center
                checkedIcon={
                  <Icon
                    name="radio-button-checked"
                    type="material"
                    color="green"
                    size={28}
                    iconStyle={{marginRight: 2}}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name="radio-button-unchecked"
                    type="material"
                    color="grey"
                    size={28}
                    iconStyle={{marginRight: 2}}
                  />
                }
                checked={!check}
                onPress={() => setCheck(false)}
              />
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setCheck(false)}>
                <CustomText textStyle={styles.alwaysText} label="Never" />
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : null}
      <ConfirmationModal
        isModalVisible={isVisible}
        setModalVisible={setVisible}
        modalWrapperStyle={{
          marginHorizontal: width(27),
          marginVertical: height(30),
          justifyContent: 'flex-start',
          borderRadius: 15,
        }}
        detail={'This action is irrevocable. You can’t restore your account.'}
        Active="Yes, delete"></ConfirmationModal>
    </View>
  );
};

export default Setting;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    padding: '15@ms',
    flex: 1,
  },
  deleteAcountText: {
    fontSize: '15@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.red,
  },
  titleText: {
    fontSize: '15@ms',
    fontFamily: fonts.LatoBold,
    marginBottom: '8@vs',
  },
  leftArrow: {
    fontSize: '18@ms',
    marginRight: '10@s',
    color: colors.black,
  },
  preOrderText: {
    fontFamily: fonts.bold,
    fontSize: '18@ms',
    color: colors.black,
  },
  preOrderContainer: {
    backgroundColor: colors.textWhite,
    width: '35%',
    borderRadius: '5@ms',
    marginTop: '10@vs',
  },
  allowPreText: {
    fontSize: '15@ms',
    fontFamily: fonts.PoppinsMedium,
    paddingHorizontal: '10@ms',
    marginTop: '5@ms',
  },
  radioContainer: {
    width: '20@ms',
    height: '20@ms',
    borderRadius: '100@ms',
    marginRight: '10@s',
    overflow: 'hidden',
    backgroundColor: '#E8E8E8',
  },
  alwaysText: {
    fontSize: '15@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
});
