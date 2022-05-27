import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {Icon, Badge} from 'react-native-elements';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import {CustomGraph, Calender} from '@SilalApp/common/components/native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '../components/Header';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
const DetailedAnalytics = ({navigation}) => {
  const {t} = useTranslation();

  const data1 = [
    {
      id: '1',
      text: 'ORDERS',
    },
    {
      id: '2',
      text: 'CHARACTERISTIC 3',
    },
    {
      id: '3',
      text: 'CHARACTERISTIC 4',
    },
    {
      id: '4',
      text: 'CHARACTERISTIC 5',
    },
  ];
  const goBack = () => {
    navigation.pop();
  };
  return (
    <SafeAreaView style={styles.ConTAINER}>
      <View style={styles.Inercontsiner}>
        <Header title="Detail_analytics" goBack={goBack} navigation={navigation} />
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              marginHorizontal: 10,
            }}>
            <View style={{width: !IsTablet ? '100%' : '65%'}}>
              <View
                style={
                  !IsTablet
                    ? styles.GrphBackgroundMobile
                    : styles.GrphBackground
                }>
                <View
                  style={
                    !IsTablet ? styles.GraphHeaderMobile : styles.GraphHeader
                  }>
                  <Text style={styles.TitleTextGraph}>{t('Revenue')}</Text>
                  <Calender />
                </View>
                <CustomGraph />
              </View>
              
              <View
                style={
                  !IsTablet
                    ? styles.GrphBackgroundMobile
                    : styles.GrphBackground
                }>
                <View
                  style={
                    !IsTablet ? styles.GraphHeaderMobile : styles.GraphHeader
                  }>
                  <Text style={styles.TitleTextGraph}>{t('orders')}</Text>
                  <Calender />
                </View>
                <CustomGraph />
              </View>
              
            </View>

            {!IsTablet ? (
              <View />
            ) : (
              <View
                style={{
                  width: '30%',
                  marginHorizontal: 30,
                }}>
                <View style={styles.SecondColumn}>
                  <Text style={{fontFamily: 'Poppins-SemiBold', color: '#fff'}}>
                    Revenue
                  </Text>
                </View>
                <FlatList
                  data={data1}
                  numColumns={1}
                  style={{marginBottom: 5}}
                  renderItem={({item}) => (
                    <View>
                      <Text style={styles.SecondColumnFlatData}>
                        {item.text}
                      </Text>
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default DetailedAnalytics;
const styles = ScaledSheet.create({
  ConTAINER: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    alignItems: 'center',
  },
  Inercontsiner: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ImageVIew: {
    backgroundColor: '#0065FF33',
    height: 56,
    width: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageModal: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
  },
  ModelDesign: {
    width: 225,
    paddingHorizontal: 10,
  },
  ModalNotificationTitle: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 13,
    color: colors.black,
  },
  NotificationDescription: {
    fontSize: 13,
    color: colors.black,
    fontFamily: fonts.LatoMedium,
  },
  ClockIconNotification: {
    fontSize: 18,
    color: colors.light_grey,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  TimeBar: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 13,
    color: colors.light_grey,
    paddingTop: 5,
  },

  CrossIconNotification: {
    fontSize: 19,
    color: colors.light_grey,
  },
  BorderNotification: {
    borderBottomWidth: 1,
    borderColor: colors.light_grey,
  },
  GrphBackground: {
    backgroundColor: colors.textWhite,
    height: '41%',
    borderRadius: 5,
    marginHorizontal: '5@s',
    marginBottom: '15@s',
  },
  GrphBackgroundMobile: {
    backgroundColor: colors.textWhite,
    height: '50%',
    borderRadius: 5,
    width: '100%',
    marginBottom: '10@s',
  },
  GraphHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  GraphHeaderMobile: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  TitleTextGraph: {
    color: colors.black,
    fontSize: '14@vs',
    fontFamily: 'Poppins-Bold',
  },
  SecondColumn: {
    height: 40,
    width: '80%',
    backgroundColor: '#5AB3A8',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  SecondColumnFlatData: {
    fontFamily: 'Poppins-SemiBold',
    color: '#002733',
    paddingVertical: 4,
    paddingHorizontal: 4,
    fontSize: 13,
  },
});
