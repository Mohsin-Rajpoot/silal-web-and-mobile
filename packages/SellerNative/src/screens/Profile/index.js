import {Image, View,ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import React from 'react';
import colors from '@SilalApp/common/assets/colors';
import Header from './moleclues/Header';
import Tabs from './moleclues/Tabs';

const Profile = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Header />
      <View style={styles.container}>
      <View style={{width:'58%'}}>
      <Tabs />
        <View style={styles.imgContainer}>

        </View>
      </View>


      <View style={{width:'36%'}}>
          <CustomText label='Second' />
      </View>
      </View>

    </ScrollView>
  );
};

export default Profile;

const styles = ScaledSheet.create({
  mainContainer: {
    paddingHorizontal: '15@s',
  },
  container:{
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%'
  },
  imgContainer:{
      width:'100%',
      height:'250@vs',
      borderWidth:1,
      borderColor:'red',
      borderRadius:'5@ms'
  }
});
