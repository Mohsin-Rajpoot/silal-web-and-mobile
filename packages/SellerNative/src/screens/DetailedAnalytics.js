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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CustomGraph, Calender} from '@SilalApp/common/components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const DetailedAnalytics = ({navigation}) => {
  const data2 = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
  ];
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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.ConTAINER}>
      <View style={styles.Inercontsiner}>
        <View style={styles.Header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              style={{fontSize: 30, color: '#002733', paddingVertical: 3}}
            />

            <Text style={styles.HeaderTitle}>Detailed analytics</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={[
                styles.ModalMainButton,
                {
                  backgroundColor: modalVisible == true ? '#4C6870' : null,
                  borderRadius: modalVisible == true ? 25 : null,
                },
              ]}>
              <MaterialCommunityIcons
                size={33}
                color={modalVisible == true ? '#fff' : '#002733'}
                name={'bell-outline'}
              />
              <Badge
                // value={'9'}
                containerStyle={styles.BadgeContainer}
                badgeStyle={styles.badgeStyle}
              />
            </TouchableOpacity>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onBackdropPress={() => setModalVisible(!modalVisible)}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.ModalHeightwidth}>
              <ScrollView style={{height: 610}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.NotificationTitle}>
                    Your notifications
                  </Text>
                  <Text style={styles.NewNotification}>3 New</Text>
                </View>

                <FlatList
                  data={data2}
                  numColumns={1}
                  style={{marginBottom: 5}}
                  renderItem={({item}) => (
                    <View>
                      <View style={{flexDirection: 'row', marginVertical: 15}}>
                        <View style={styles.ModelDesign}>
                          <Text style={styles.ModalNotificationTitle}>
                            Silal Management
                          </Text>
                          <Text style={styles.NotificationDescription}>
                            Your campaign is coming to an end, look at the
                            statistics and analyze the effectiveness of
                            advertising.
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                            <MaterialCommunityIcons
                              name="clock-time-five-outline"
                              style={styles.ClockIconNotification}
                            />

                            <Text style={styles.TimeBar}>13 min</Text>
                          </View>
                        </View>
                        <TouchableOpacity>
                          <AntDesign
                            name="close"
                            style={{fontSize: 19, color: '#CCD4D6'}}
                          />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCD4D6'}}
                      />
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
                <Text
                  style={{
                    color: '#CCD4D6',
                    fontSize: 17,
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                  Previous Notification
                </Text>
                <FlatList
                  data={data2}
                  numColumns={1}
                  style={{marginBottom: 5}}
                  renderItem={({item}) => (
                    <View>
                      <View style={{flexDirection: 'row', marginVertical: 15}}>
                        {/* <View style={styles.ImageVIew}>
                      <Image source={require('../../Assets/Icon.png')} style={styles.ImageModal} />
                    </View> */}
                        <View style={styles.ModelDesign}>
                          <Text style={styles.ModalNotificationTitle}>
                            Silal Management
                          </Text>
                          <Text style={styles.NotificationDescription}>
                            Your campaign is coming to an end, look at the
                            statistics and analyze the effectiveness of
                            advertising.
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                            <MaterialCommunityIcons
                              name="clock-time-five-outline"
                              style={styles.ClockIconNotification}
                            />

                            <Text style={styles.TimeBar}>Yesterday</Text>
                          </View>
                        </View>
                        <TouchableOpacity>
                          <AntDesign
                            name="close"
                            style={styles.CrossIconNotification}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.BorderNotification} />
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
              </ScrollView>
            </View>
          </Modal>
        </View>

        <ScrollView>
          <View style={{flexDirection: 'row', marginVertical: 20,marginHorizontal:10}}>
            <View style={{width: '65%'}}>
              <View style={styles.GrphBackground}>
                <View style={styles.GraphHeader}>
                  <Text style={styles.TitleTextGraph}>Revenue</Text>
                  <Calender />
                </View>
                <CustomGraph />
              </View>
              <View style={[styles.GrphBackground, {marginTop: 10}]}>
                <View style={styles.GraphHeader}>
                  <Text style={styles.TitleTextGraph}>Orders</Text>
                  <Calender />
                </View>
                <CustomGraph />
              </View>
            </View>
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
                    <Text style={styles.SecondColumnFlatData}>{item.text}</Text>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default DetailedAnalytics;
const styles = StyleSheet.create({
  ConTAINER: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  Inercontsiner: {
    width: '98%',

    justifyContent: 'center',
    alignSelf: 'center',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeaderTitle: {
    color: '#002733',
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
  },
  // ///
  ModalMainButton: {
    position: 'absolute',
    right: 22,
    marginHorizontal: 20,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BadgeContainer: {
    position: 'absolute',
    top: 10,
    right: 7,
    backgroundColor: colors.textWhite,
    height: 16,
    width: 16,
    borderRadius: 8,
  },
  badgeStyle: {
    backgroundColor: colors.primary,
    height: 14,
    width: 14,
    borderRadius: 7,
    marginVertical: 1,
  },
  ModalHeightwidth: {
    backgroundColor: colors.textWhite,
    width: 350,
    position: 'absolute',
    top: 29,
    right: 2,
    borderRadius: 5,
    elevation: 1,
    paddingHorizontal: 15,
  },
  NotificationTitle: {
    marginTop: 15,
    width: 120,
    fontFamily: fonts.LatoSemiBold,
  },
  NewNotification: {
    fontFamily: fonts.LatoSemiBold,
    marginTop: 15,
    backgroundColor: colors.primary,
    height: 30,
    width: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    color: colors.textWhite,
    marginTop: 10,
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
    backgroundColor: '#FFFFFF',
    height: '40.5%',
    borderRadius: 5,
  },
  GraphHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  TitleTextGraph: {
    color: '#002733',
    fontSize: 25,
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
