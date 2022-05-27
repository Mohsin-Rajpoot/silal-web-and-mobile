import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {verticalScale} from 'react-native-size-matters';
import {Icon} from 'react-native-elements';
import colors from '@SilalApp/common/assets/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
const Notification = ({navigation}) => {
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
  const goBack = () => {
    navigation.pop();
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title={'Notification'} goBack={goBack} showIcon={true} Notification={true} />
      <FlatList
        data={data2}
        numColumns={1}
        nestedScrollEnabled={true}
        style={{marginBottom: 5}}
        renderItem={({item}) => (
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              margin: verticalScale(10),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              <View style={{width: '17%', alignItems: 'center'}}>
                <View style={styles.ImageVIew}>
                  <Icon
                    name="credit-card"
                    type="feather"
                    size={18}
                    color={colors.purple}
                  />
                </View>
              </View>
              <View style={styles.ModelDesign}>
                <Text style={styles.ModalNotificationTitle}>
                  Silal Management
                </Text>
                <Text style={styles.NotificationDescription}>
                  Your campaign is coming to an end, look at the statistics and
                  analyze the effectiveness of advertising.
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                  style={{fontSize: 14, color: colors.light_grey}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{borderBottomWidth: 0.5, borderColor: colors.light_grey}}
            />
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Text
        style={
        styles.previousnotification    
      }>
        Previous Notification
      </Text>
      <FlatList
        data={data2}
        numColumns={1}
        style={{marginBottom: 5}}
        renderItem={({item}) => (
          <View>
            <View style={{flexDirection: 'row', marginVertical: 15}}>
              <View style={{width: '17%', alignItems: 'center'}}>
                <View style={styles.ImageVIew1}>
                  <Icon
                    name="message-reply-text-outline"
                    type="material-community"
                    size={18}
                    color={colors.blueDark}
                  />
                </View>
              </View>
              <View style={styles.ModelDesign}>
                <Text style={styles.ModalNotificationTitle}>
                  Silal Management
                </Text>
                <Text style={styles.NotificationDescription}>
                  Your campaign is coming to an end, look at the statistics and
                  analyze the effectiveness of advertising.
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialCommunityIcons
                    name="clock-time-five-outline"
                    style={styles.ClockIconNotification}
                  />

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
    </SafeAreaView>
  );
};

export default Notification;
