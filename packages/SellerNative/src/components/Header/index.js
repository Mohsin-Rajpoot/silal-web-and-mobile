import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import {Icon, Badge} from 'react-native-elements';
import fonts from '@SilalApp/common/assets/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
const Header = ({title, navigation, goBack, showIcon, Notification,rightPress}) => {
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
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
    <View style={styles.Header}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
       <TouchableOpacity
          onPress={goBack}
          activeOpacity={0.6}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
            width: '60%',
          }}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            style={{
              fontSize: verticalScale(20),
              color: colors.black,
              marginHorizontal: moderateScale(5),
            }}
          />

          <Text style={styles.HeaderTitle}>{t(title)}</Text>
        </TouchableOpacity>
        {Notification ? (
          <View style={styles.NewNotification}>
            <Text style={styles.newNotiTitle}>3</Text>
            <Text style={styles.newNotiTitle}>New</Text>
          </View>
        ) : (
          <View />
        )}
      </View>
      <View>
        {showIcon ? (
          <TouchableOpacity onPress={rightPress}>
            <Icon name='dots-three-vertical' type='entypo' size={verticalScale(16)} color={colors.gray50} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              setModalVisible(
                !IsTablet ? navigation.navigate('Notification') : !modalVisible,
              )
            }
            style={[
              styles.ModalMainButton,
              {
                backgroundColor: modalVisible == true ? '#4C6870' : null,
                borderRadius: modalVisible == true ? 25 : null,
              },
            ]}>
            <MaterialCommunityIcons
              size={verticalScale(20)}
              color={modalVisible == true ? colors.textWhite : colors.black}
              name={'bell-outline'}
            />
            <Badge
              // value={'9'}
              containerStyle={styles.BadgeContainer}
              badgeStyle={styles.badgeStyle}
            />
          </TouchableOpacity>
        )}
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
              <Text style={styles.NotificationTitle}>Your notifications</Text>
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
                        statistics and analyze the effectiveness of advertising.
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
                        statistics and analyze the effectiveness of advertising.
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
  );
};

export default Header;

const styles = ScaledSheet.create({
  Header: {
    flexDirection: 'row',
    marginTop: '5@s',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderTitle: {
    color: colors.black,
    fontSize: '14@vs',
    fontFamily: fonts.bold,
    width: '150%',
    marginLeft:'10@s'
  },
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
  NewNotification: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    flexDirection: 'row',
    padding: '5@s',
    borderRadius: '5@s',
  },
  newNotiTitle:{
    fontSize:"10@vs",
    fontFamily:fonts.LatoMedium,
    color:colors.textWhite,
    marginHorizontal:"2@s"
  }
});
