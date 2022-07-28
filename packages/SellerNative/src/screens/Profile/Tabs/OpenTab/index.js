import React from 'react';
import {Tab, Text, TabView} from 'react-native-elements';
import {FlatList, View} from 'react-native';
import colors from '@SilalApp/common/assets/colors';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
import {widthPercentageToDP as width} from 'react-native-responsive-screen';
import TabItem from './TabItem';
import SpecialTabItem from './SpecialTabItem';
import {CustomButton} from '@SilalApp/common/components/native';
import {useTranslation} from 'react-i18next';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import MobileSpecialHours from './MobileSpecialHours';
export default () => {
  const [index, setIndex] = React.useState(0);
  const {t} = useTranslation();
  const weekArray = [
    {
      id: 1,
      day: 'Monday',
    },
    {
      id: 2,
      day: 'Tuesday',
    },

    {
      id: 3,
      day: 'Wednesday',
    },
    {
      id: 4,
      day: 'Thursday',
    },
    {
      id: 5,
      day: 'Friday',
    },
    {
      id: 6,
      day: 'Saturday',
    },
    {
      id: 7,
      day: 'Sunday',
    },
  ];
  return (
    <>
      <View style={!IsTablet ? styles.tabConTainerMobile : styles.tabConTainer}>
        <Tab
          value={index}
          onChange={e => setIndex(e)}
          indicatorStyle={{
            height: !IsTablet ? 0 : 3,
            backgroundColor: colors.primary,
          }}>
          <Tab.Item
            containerStyle={
              !IsTablet && index == 0
                ? styles.tabItemContainerMobile
                : styles.tabItemContainer
            }
            variant="primary"
            buttonStyle={{backgroundColor: 'transparent'}}
            title={t('StandardHours')}
            titleStyle={[
              !IsTablet ? styles.tabTextMobile : styles.tabText,
              index == 0 && {
                color: !IsTablet ? colors.textWhite : colors.black,
              },
            ]}
          />
          <Tab.Item
            containerStyle={
              !IsTablet && index == 1
                ? styles.tabItemContainerMobile
                : styles.tabItemContainer
            }
            buttonStyle={{backgroundColor: 'transparent'}}
            variant="primary"
            title={t('SPECIAL_HOURS')}
            titleStyle={[
              styles.tabText,
              index == 1 && {
                color: !IsTablet ? colors.textWhite : colors.black,
              },
            ]}
            style={{backgroundColor: colors.profileBackground}}
          />
        </Tab>
      </View>
      <View style={{height: '80%', width: '100%'}}>
        <TabView value={index} onChange={setIndex} animationType="spring">
          <FlatList
            data={weekArray}
            keyExtractor={(item, index) => item.id + index.toString()}
            renderItem={({item}) => (
              <View
                style={{
                  width: '70%',
                  backgroundColor: !IsTablet ? 'transparent' : 'white',
                }}>
                <TabView.Item
                  style={
                    !IsTablet
                      ? styles.tabConTainerMobile1
                      : styles.tabViewContainer
                  }>
                  <TabItem item={item} />
                </TabView.Item>
              </View>
            )}
          />
          <TabView.Item
            style={[
              styles.tabViewContainer,
              {
                width: !IsTablet ? '94%' : '70%',
                backgroundColor: !IsTablet ? 'transparent' : 'white',
              },
            ]}>
            <>
              {!IsTablet ? <MobileSpecialHours /> : <SpecialTabItem />}

              <CustomButton
                type="TERTIARY"
                textStyle={{color: colors.primary}}
                containerStyle={styles.specialBtn}
                text={'+ Add special hours'}
              />
            </>
          </TabView.Item>
        </TabView>
        <CustomButton
          textStyle={{paddingVertical: scale(4), paddingHorizontal: scale(10)}}
          containerStyle={{
            alignSelf: 'flex-end',
            marginTop: verticalScale(10),
            marginRight: !IsTablet ? scale(10) : '28.5%',
          }}
          text={t('Save_standard_hours')}
        />
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  tabConTainer: {
    width: width(60),
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    marginLeft: '10@s',
  },
  tabConTainerMobile: {
    width: width(95),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '14@s',
    backgroundColor: colors.grayLight,
    borderRadius: '25@s',
    borderWidth: '1@s',
    borderColor: colors.garyDark,
    paddingTop: '1@s',
  },
  tabConTainerMobile1: {
    width: width(100),
    alignItems: 'center',
    marginTop: '14@s',

    // backgroundColor:colors.grayLight,
    // borderRadius:"25@s",
    // borderWidth:"1@s",
    // borderColor:colors.garyDark,
    // padding:"1@s"
  },
  tabItemContainer: {
    backgroundColor: 'transparent',
    borderRadius: '25@s',
  },
  tabItemContainerMobile: {
    backgroundColor: colors.primary,
    borderRadius: '25@s',
    color: colors.textWhite,
  },
  tabText: {
    fontSize: '11@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.sidebar,
  },
  tabTextMobile: {
    fontSize: '11@ms',
    fontFamily: fonts.LatoBold,
    color: colors.sidebar,
  },
  tabViewContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: '10@vs',
    paddingTop: '20@vs',
    paddingHorizontal: '10@s',
    marginLeft: '10@s',
  },
  tabViewContainerMobile: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: '10@vs',
    paddingTop: '20@vs',
    paddingHorizontal: '10@s',
    width: '100%',
  },
  specialBtn: {
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderColor: colors.primary,
    marginTop: '10@vs',
  },
});
