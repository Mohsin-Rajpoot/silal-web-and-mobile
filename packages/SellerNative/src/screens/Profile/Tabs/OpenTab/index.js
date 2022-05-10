import React from 'react';
import {Tab, Text, TabView} from 'react-native-elements';
import {View} from 'react-native';
import colors from '@SilalApp/common/assets/colors';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
import {widthPercentageToDP as width} from 'react-native-responsive-screen';
import TabItem from './TabItem';
import SpecialTabItem from './SpecialTabItem';
import {CustomButton} from '@SilalApp/common/components/native';
import {useTranslation} from 'react-i18next';
export default () => {
  const [index, setIndex] = React.useState(0);
  const {t} = useTranslation();
  return (
    <>
      <View style={{width: width(60)}}>
        <Tab
          value={index}
          onChange={e => setIndex(e)}
          indicatorStyle={{
            height: 3,
            backgroundColor: colors.primary,
          }}>
          <Tab.Item
            containerStyle={{backgroundColor: 'transparent'}}
            variant="primary"
            buttonStyle={{backgroundColor: 'transparent'}}
            title={t('StandardHours')}
            titleStyle={[styles.tabText, index == 0 && {color: colors.black}]}
          />
          <Tab.Item
            containerStyle={{backgroundColor: 'transparent'}}
            buttonStyle={{backgroundColor: 'transparent'}}
            variant="primary"
            title={t('SPECIAL_HOURS')}
            titleStyle={[styles.tabText, index == 1 && {color: colors.black}]}
            style={{backgroundColor: colors.profileBackground}}
          />
        </Tab>
      </View>
      <View style={{height: '80%', width: '100%'}}>
        <TabView  value={index} onChange={setIndex} animationType="spring" >
       
          <TabView.Item style={styles.tabViewContainer}>
            <TabItem item={{day: t('Monday')}} />
          </TabView.Item>
          <TabView.Item style={styles.tabViewContainer}>
            <>
              <View style={{width:"100%"}}>
              <SpecialTabItem />
              </View>
            
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
          containerStyle={{alignSelf: 'flex-end', marginTop: verticalScale(10)}}
          text={t('Save_standard_hours')}
        />
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  tabText: {
    fontSize: '11@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.sidebar,
  },
  tabViewContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: '10@vs',
    paddingTop: '20@vs',
    paddingHorizontal: '10@s',
    width: '90%',
  },
  specialBtn: {
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderColor: colors.primary,
    marginTop: '10@vs',
  },
});
