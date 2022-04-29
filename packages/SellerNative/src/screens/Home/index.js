import React, { useState, useEffect, useRef } from 'react'
import { View, SafeAreaView, TouchableOpacity, LogBox, Dimensions, ScrollView, FlatList, StyleSheet, Text, Image, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  CustomButton,
  LockOnLandscape,
} from '@SilalApp/common/components/native';

import OutOfStack from '../../components/OutOfStack';
import StatisticsView from '../../components/Statistics';
import ReviewView from '../../components/Reviews';
import { useDimensions } from '@react-native-community/hooks'
import { Icon, Badge } from 'react-native-elements';
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles';

const Home = ({ navigation }) => {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])
  const [Statistic, setStatistic] = useState(true);
  const [Reviews, setReviews] = useState(false);
  const [Outofstock, setOutofstack] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  var { width } = Dimensions.get("window");

  const scrollref = useRef()

  const onCurrentOrder = index => {
    scrollref.current.scrollTo({ x: width * index })
    console.log(index);
    if (index == 0) {
      setStatistic(true);
      setReviews(false);
      setOutofstack(false)
    } else if (index == 1) {
      setStatistic(false);
      setReviews(true);
      setOutofstack(false)
    } else if (index == 2) {
      setStatistic(false);
      setReviews(false);
      setOutofstack(true)
    }

  };

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



  return (
    <SafeAreaView style={styles.container}>
      <LockOnLandscape onPress={() => console.log("Harris")} />
      <View style={styles.HeaderContainer}>
        <View style={{ padding: 15 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons
              name="reorder-horizontal"
              size={20}
              style={styles.BambergIcon}
              
            />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 15, flexDirection: 'row' }}>

          <CustomButton
            onPress={() => onCurrentOrder(0)}
            text="Statistics"
            type={Statistic ? "PRIMARY" : "TERTIARY"}
          />
          <CustomButton
            onPress={() => onCurrentOrder(1)}
            text="Reviews"
            type={Reviews ? "PRIMARY" : "TERTIARY"}
          />
          <CustomButton
            onPress={() => onCurrentOrder(2)}
            text="Out-of-stock"
            type={Outofstock ? "PRIMARY" : "TERTIARY"}
          />

        </View>

        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={[styles.ModalMainButton, {
          backgroundColor: modalVisible == true ? '#4C6870' : null,
          borderRadius: modalVisible == true ? 25 : null
        }]}>
          <MaterialCommunityIcons size={33} color={modalVisible == true ? "#fff" : '#002733'} name={'bell-outline'} />
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
          <ScrollView style={{ height: 610 }}>
            <View style={{ flexDirection: 'row', }}>
              <Text style={styles.NotificationTitle}>Your notifications</Text>
              <Text style={styles.NewNotification}>3 New</Text>

            </View>

            <FlatList
              data={data2}
              numColumns={1}
              style={{ marginBottom: 5, }}
              renderItem={({ item }) => (
                <View>
                  <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                    <View style={styles.ImageVIew}>
                      <Image source={require('../../Assets/Icon.png')} style={styles.ImageModal} />
                    </View>
                    

                    <View style={styles.ModelDesign}>
                      <Text style={styles.ModalNotificationTitle}>Silal Management</Text>
                      <Text style={styles.NotificationDescription}>
                        Your campaign is coming to an end, look at the
                        statistics and analyze the effectiveness of advertising.</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons name="clock-time-five-outline"
                          style={styles.ClockIconNotification} />

                        <Text style={styles.TimeBar}>13 min</Text>
                      </View>
                    </View>
                    <TouchableOpacity>
                      <AntDesign name="close" style={{ fontSize: 19, color: '#CCD4D6' }} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ borderBottomWidth: 1, borderColor: '#CCD4D6' }} />
                </View>
              )}
              keyExtractor={item => item.id}
            />
            <Text style={{ color: '#CCD4D6', fontSize: 17, fontFamily: 'Poppins-SemiBold' }}>Previous Notification</Text>
            <FlatList
              data={data2}
              numColumns={1}
              style={{ marginBottom: 5, }}
              renderItem={({ item }) => (
                <View>
                  <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                    <View style={styles.ImageVIew}>
                      <Image source={require('../../Assets/Icon.png')} style={styles.ImageModal} />
                    </View>
                    <View style={styles.ModelDesign}>
                      <Text style={styles.ModalNotificationTitle}>Silal Management</Text>
                      <Text style={styles.NotificationDescription}>
                        Your campaign is coming to an end, look at the
                        statistics and analyze the effectiveness of advertising.</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons name="clock-time-five-outline"
                          style={styles.ClockIconNotification} />

                        <Text style={styles.TimeBar}>Yesterday</Text>
                      </View>
                    </View>
                    <TouchableOpacity>
                      <AntDesign name="close" style={styles.CrossIconNotification} />
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

      <ScrollView
        showsHorizontalScrollIndicator={false}
        ref={scrollref}
        horizontal
        scrollEnabled={false}>
        <View style={{ width: width, height: '100%' }}>
          <StatisticsView />
        </View>
        <View style={{ width: width, height: '100%' }}>
          <ReviewView />
        </View>
        <View style={{ width: width, height: '100%' }}>
          <OutOfStack />
        </View>

      </ScrollView>


    </SafeAreaView>
  )
}

export default Home