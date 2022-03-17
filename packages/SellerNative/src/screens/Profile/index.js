import {Image, View, ScrollView, ImageBackground} from 'react-native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import React, {useState} from 'react';
import colors from '@SilalApp/common/assets/colors';
import Header from './moleclues/Header';
import Tabs from './moleclues/Tabs';
import TimingBox from './moleclues/TimingBox';
import EditBox from './moleclues/EditBox';
import fonts from 'fonts';
import {CustomButton} from '@SilalApp/common/components/native';
const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <ScrollView style={styles.mainContainer}>
      <Header />
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
                textStyle={{padding: 8,fontSize:18}}
                containerStyle={{width: '100%'}}
                text={'Edit profile'}
              />
              <CustomButton
                textStyle={{padding: 8,fontSize:18}}
                containerStyle={{width: '100%'}}
                text={'Change admin code'}
              />
            </>
          ) : (
            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
              <CustomButton
                onPress={() => setIsEdit(!isEdit)}
                textStyle={styles.editBtn}
                text={'Cancel'}
              />
              <CustomButton
                textStyle={{padding: 8}}
                text={'Save changes'}
              />
            </View>
          )}
        </View>
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
  editBtn:{
    paddingHorizontal:'20@s',
    paddingVertical:8,
  }
});
