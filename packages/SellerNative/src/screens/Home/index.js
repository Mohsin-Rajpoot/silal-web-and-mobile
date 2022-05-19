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
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import {useTranslation} from 'react-i18next';
import {moderateScale, verticalScale} from 'react-native-size-matters';
const Home = ({navigation}) => {
  const {t} = useTranslation();
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
        <View style={{margin: verticalScale(10)}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons
              name="menu"
              size={moderateScale(!IsTablet ? 26 : 22)}
              style={styles.BambergIcon}
              
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginVertical: verticalScale(5),
          }}>
          <ScrollView horizontal contentContainerStyle={{width: '92%'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: !IsTablet ? '80%' : '95%',
              }}>
              <CustomButton
                onPress={() => onCurrentOrder(0)}
                text={t('Statistics')}
                // type={Statistic ? 'PRIMARY' : 'TERTIARY'}
                containerStyle={
                  !IsTablet && Statistic
                    ? styles.tabbuttonMobile
                    : !IsTablet && !Statistic
                    ? styles.tabbuttonMobileInactive
                    : IsTablet && Statistic
                    ? styles.tabbutton
                    : IsTablet && !Statistic
                    ? styles.tabbuttonInactive
                    : styles.tabbutton
                }
                textStyle={
                  Statistic ? styles.tabTitle : styles.tabTitleInactive
                }
              />
              <CustomButton
                onPress={() => onCurrentOrder(1)}
                text={t('reviews')}
                containerStyle={
                  !IsTablet && Reviews
                    ? styles.tabbuttonMobile
                    : !IsTablet && !Reviews
                    ? styles.tabbuttonMobileInactive
                    : IsTablet && Reviews
                    ? styles.tabbutton
                    : IsTablet && !Reviews
                    ? styles.tabbuttonInactive
                    : styles.tabbutton
                }
                textStyle={Reviews ? styles.tabTitle : styles.tabTitleInactive}
              />
              <CustomButton
                onPress={() => onCurrentOrder(2)}
                text={t('out_of_stock')}
                // type={Outofstock ? 'PRIMARY' : 'TERTIARY'}
                containerStyle={
                  !IsTablet && Outofstock
                    ? styles.tabbuttonMobile
                    : !IsTablet && !Outofstock
                    ? styles.tabbuttonMobileInactive
                    : IsTablet && Outofstock
                    ? styles.tabbutton
                    : IsTablet && !Outofstock
                    ? styles.tabbuttonInactive
                    : styles.tabbutton
                }
                textStyle={
                  Outofstock ? styles.tabTitle : styles.tabTitleInactive
                }
              />
            </View>
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
                size={moderateScale(!IsTablet ? 24 : 26)}
                color={modalVisible == true ? '#fff' : '#002733'}
                name={'bell-outline'}
              />
              <Badge
                // value={'9'}
                containerStyle={styles.BadgeContainer}
                badgeStyle={styles.badgeStyle}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
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