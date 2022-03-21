import {
  Image,
  View,
  ScrollView,
  ImageBackground,
  Pressable,
  Text
} from 'react-native';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import React, {useState} from 'react';
import colors from '@SilalApp/common/assets/colors';
import Header from './moleclues/Header';
import Tabs from './moleclues/Tabs';
import TimingBox from './moleclues/TimingBox';
import EditBox from './moleclues/EditBox';
import fonts from 'fonts';
import {CustomButton} from '@SilalApp/common/components/native';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [adminModal, setAdminModal] = useState(false);
  const [code, setCode] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [freezedModal, setFreezedModal] = useState(false);
  return (
    <ScrollView style={styles.mainContainer}>
      <Header label={"Profile"}/>
      <Tabs />

      <View style={styles.container}>
        <View style={{width: '59%'}}>
          <ImageBackground
            resizeMode="cover"
            source={require('../../Assets/image8.png')}
            style={styles.imgContainer}>
            <CustomText
              fontFamily={fonts.LatoRegular}
              label="8502 Preston Rd. Inglewood"
              color="#fff"
              fontSize={10}
              textStyle={styles.addressBox}
            />
            <View style={{margin: moderateScale(10)}}>
              <CustomText
                fontFamily={fonts.bold}
                label="Restaurant’s name"
                color="#fff"
                fontSize={20}
              />
              <CustomText
                fontFamily={fonts.LatoRegular}
                fontSize={13}
                label="The slogan will be here mх 40 characters"
                color="#fff"
              />
            </View>
          </ImageBackground>
          {isEdit ? <EditBox /> : <TimingBox />}
        </View>

        <View style={styles.updateButtonContainer}>
          {!isEdit ? (
            <>
              <CustomButton
                onPress={() => setIsEdit(!isEdit)}
                textStyle={{padding: 8, fontSize: 18}}
                containerStyle={{width: '100%'}}
                text={'Edit profile'}
              />
              <CustomButton
                onPress={() => setAdminModal(true)}
                textStyle={{padding: 8, fontSize: 18}}
                containerStyle={{width: '100%'}}
                text={'Change admin code'}
              />
              <CustomButton
                onPress={() => setFreezedModal(true)}
                textStyle={{padding: 8, fontSize: 18}}
                containerStyle={{width: '100%'}}
                text={'Temporary Freezed Modal'}
              />
              <CustomModal
                isModalVisible={adminModal}
                setModalVisible={setAdminModal}>
                <Pressable
                  onPress={() => setAdminModal(false)}
                  style={styles.iconContainer}>
                  <Icon name="cross" type="entypo" size={moderateScale(19)} />
                </Pressable>
                <CustomText
                  fontFamily={fonts.bold}
                  label="Change admin code for  “Seller’s name”"
                />
                <CustomText
                  fontFamily={fonts.LatoRegular}
                  fontSize={13}
                  marginTop={15}
                  label="Enter your previous code"
                />
                <OTPInputView
                  autoFocusOnLoad={true}
                  pinCount={4}
                  style={styles.optStyling}
                  codeInputFieldStyle={styles.optContainer}
                  handleChange={value => setCode(value)}
                />
                <CustomText
                  fontFamily={fonts.LatoRegular}
                  fontSize={13}
                  marginTop={15}
                  label="Repeat code"
                />
                <OTPInputView
                  autoFocusOnLoad={true}
                  pinCount={4}
                  style={[
                    styles.optStyling,
                    {marginVertical: verticalScale(12)},
                  ]}
                  codeInputFieldStyle={styles.optContainer}
                  handleChange={value => setConfirmCode(value)}
                />
                <CustomButton
                  containerStyle={{alignSelf: 'center'}}
                  textStyle={{marginHorizontal: '23%', paddingVertical: 8}}
                  text="Submit"
                />
              </CustomModal>
            </>
          ) : (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <CustomButton
                onPress={() => setIsEdit(!isEdit)}
                textStyle={styles.editBtn}
                text={'Cancel'}
              />
              <CustomButton textStyle={{padding: 8}} text={'Save changes'} />
            </View>
          )}
        </View>

        <CustomModal
          isModalVisible={freezedModal}
          modalContainerStyle={{alignItems:'flex-start'}}
          modalWrapperStyle={{marginVertical:height(26)}}
          setModalVisible={setFreezedModal}>
             <Pressable
                  onPress={() => setFreezedModal(false)}
                  style={[styles.iconContainer,{zIndex:99}]}>
                  <Icon name="cross" type="entypo" size={moderateScale(19)} />
                </Pressable>
            <View style={{width:"100%",alignItems:"center",marginBottom:verticalScale(20),}}>
          <CustomText  fontFamily={fonts.bold} label="Account is freezed" />
          </View>
          <Text style={styles.freezedMainText}>
            {" "}It seems that your account was deactivated because {"\n"} it violated the
            <Text style={{color:colors.primary}}> terms of use </Text> or our<Text style={{color:colors.primary}}> community guideline. </Text>{"\n"} If you believe this was by
            mistake, <Text style={{color:colors.primary}}>please contact us.</Text>
          </Text>
          <Text style={[styles.freezedMainText,{marginTop:verticalScale(43)}]}>
          <Text style={{fontFamily:fonts.LatoBold}}>Note from Silal:</Text> account freezed for 30 days due to leaving inappropriate reviews on products.

          </Text>
        </CustomModal>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = ScaledSheet.create({
mainContainer: {
    paddingHorizontal: '15@s',
    backgroundColor: colors.profileBackground,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  imgContainer: {
    width: '100%',
    height: '150@vs',
    borderRadius: '5@ms',
    overflow: 'hidden',
    marginTop: '15@vs',
    justifyContent: 'space-between',
  },
  addressBox: {
    alignSelf: 'flex-end',
    marginEnd: '7@s',
    marginTop: '7@vs',
    backgroundColor: 'black',
    padding: '5@ms',
    borderRadius: 5,
    overflow: 'hidden',
  },
  updateButtonContainer: {
    width: '39%',
    height: '100%',
    marginTop: '25@vs',
  },
  editBtn: {
    paddingHorizontal: '20@s',
    paddingVertical: 8,
  },
  optStyling: {
    marginVertical: '10@s',
    width: '47%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: '12@ms',
    color: colors.black,
  },
  optContainer: {
    borderWidth: '1@s',
    borderColor: colors.light_grey,
    borderRadius: '5@s',
    height: '35@s',
    width: '30@s',
    fontSize: '12@ms',
    color: colors.black,
    textAlign: 'center',
  },
  iconContainer: {
    alignSelf: 'flex-end',
    top: '22@ms',
    marginEnd: '10@ms',
  },
  freezedMainText:{
    fontFamily:fonts.LatoRegular,
    fontSize:moderateScale(15),
    marginHorizontal:"13@s",
    marginTop:'10@s',
    textAlign:'left',
  }
});
