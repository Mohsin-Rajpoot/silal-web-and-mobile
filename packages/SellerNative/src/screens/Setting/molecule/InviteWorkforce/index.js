import {View, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import SettingHeader from '../SettingHeader';
import {useTranslation} from 'react-i18next';
import GrantAccessComp from '../GrantAccessComp';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import CurrentWorkforceCompo from '../CurrentWorkforceCompo';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
import {CustomButton} from '@SilalApp/common/components/native';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import Header from '../../../Profile/moleclues/Header';
const InviteWorkforce = ({navigation}) => {
  const [grantModal, setGrantModal] = useState(false);
  const [revokeModal, setRevokeModal] = useState(false);
  const currentWorkArray = [
    {
      id: 1,
      sellerId: ' #4983241',
      sellerName: ' Ali Muhammad',
      registerBy: ' #894230',
      registerOn: ' 10/06/2022',
      onPress: () => setRevokeModal(true),
    },
    {
      id: 2,
      sellerId: ' #4983241 -- PENDING',
      sellerName: ' Ali Muhammad',
      registerBy: ' #894230',
      registerOn: ' 10/06/2022',
      onPress: () => setRevokeModal(true),
    },
    {
      id: 3,
      sellerId: ' #4983241',
      sellerName: ' Ali Muhammad',
      registerBy: ' #894230',
      registerOn: ' 10/06/2022',
      onPress: () => setRevokeModal(true),
    },
  ];
  const {t} = useTranslation();

  return (
    <ScrollView contentContainerStyle={[{flexGrow: 1}, styles.mainContainer]}>
      {IsTablet ? (
        <Header label={t('Setting')} onPress={() => navigation.openDrawer()} />
      ) : (
        <View />
      )}

      <SettingHeader
        backPress={() => navigation.goBack()}
        title={t('addNewWorkforce')}
      />

      <View
        style={{
          flex: 1,
          flexDirection: !IsTablet ? 'column' : 'row',
          justifyContent: 'space-between',
        }}>
        <GrantAccessComp grantPress={() => setGrantModal(true)} />

        <View style={{width: IsTablet ? '45%' : '100%'}}>
          <View style={{height: verticalScale(!IsTablet ? 10 : 0)}} />
          <CustomText
            label={t('currentWorkforce')}
            fontSize={!IsTablet ? 14 : 13}
            fontFamily={!IsTablet ? fonts.LatoBold : fonts.bold}
            color={colors.black}
            textStyle={{bottom: !IsTablet ? 15 : 35}}
          />

          {currentWorkArray.map((item, index) => {
            return (
              <CurrentWorkforceCompo
                key={item.id}
                sellerId={item.sellerId}
                sellerName={item.sellerName}
                registerBy={item.registerBy}
                registerOn={item.registerOn}
                revokePress={item.onPress}
              />
            );
          })}
        </View>
        {grantModal && (
          <CustomModal
            isModalVisible={grantModal}
            setModalVisible={setGrantModal}
            modalWrapperStyle={{
              marginHorizontal: width(!IsTablet ? 3 : 25),
              marginVertical: height(!IsTablet ? 15 : 10),
            }}>
            <ScrollView contentContainerStyle={styles.modalMainCont1}>
              <View style={styles.modalMainCont}>
                <CustomText
                  label={t('grantingAccess')}
                  marginBottom={verticalScale(8)}
                  fontSize={16}
                  fontFamily={fonts.LatoBold}
                  color={colors.black}
                />
                <CustomText
                  textStyle={{textAlign: 'center', lineHeight: 24}}
                  label={t('grantingAccessDetails')}
                  marginBottom={verticalScale(15)}
                  fontSize={15}
                  fontFamily={fonts.LatoMedium}
                  color={colors.black}
                />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <CustomText
                    fontSize={15}
                    fontFamily={fonts.LatoMedium}
                    color={colors.black}
                    label={t('adminsCan')}
                  />
                  <CustomText
                    label="att1,att1,att1,att1"
                    fontSize={15}
                    fontFamily={fonts.LatoMedium}
                    color={colors.black}
                  />
                </View>
                <View style={{height: verticalScale(5)}} />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <CustomText
                    fontSize={15}
                    fontFamily={fonts.LatoMedium}
                    color={colors.black}
                    label={t('adminsCannot')}
                  />
                  <CustomText
                    label="att1,att1,att1,att1"
                    fontSize={15}
                    fontFamily={fonts.LatoMedium}
                    color={colors.black}
                  />
                </View>
                <View style={{height: verticalScale(40)}} />

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <CustomText
                    fontSize={15}
                    fontFamily={fonts.LatoMedium}
                    color={colors.black}
                    label={t('adminsCan')}
                  />
                  <CustomText
                    label="att1,att1,att1,att1"
                    fontSize={15}
                    fontFamily={fonts.LatoMedium}
                    color={colors.black}
                  />
                </View>
                <View style={{height: verticalScale(5)}} />

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <CustomText
                    fontSize={15}
                    fontFamily={fonts.LatoMedium}
                    color={colors.black}
                    label={t('adminsCannot')}
                  />
                  <CustomText
                    label="att1,att1,att1,att1"
                    fontSize={15}
                    fontFamily={fonts.LatoMedium}
                    color={colors.black}
                  />
                </View>
                <View style={styles.noteContainer}>
                  <Text style={[styles.noteText]}>
                    {t('noteFromSilal')}
                    <Text style={{color: colors.mehndi50}}>
                      {t('noteFromSilalDetail')}
                    </Text>
                  </Text>
                </View>
                <CustomButton
                  onPress={() => setGrantModal(false)}
                  textStyle={{fontSize: verticalScale(15)}}
                  text={t('Ok')}
                  containerStyle={styles.okBtn}
                />
              </View>
            </ScrollView>
          </CustomModal>
        )}
      </View>
      {revokeModal && (
        <CustomModal
          isModalVisible={revokeModal}
          setModalVisible={setRevokeModal}
          modalWrapperStyle={{
            marginHorizontal: width(IsTablet ? 25 : 3),
            marginVertical: height(IsTablet ? 27 : 38),
          }}>
          <View style={styles.modalMainCont}>
            <CustomText
              label={t('areyouSure')}
              fontSize={16}
              fontFamily={fonts.bold}
              color={colors.black}
              marginBottom={verticalScale(5)}
            />
            <View style={{marginHorizontal: scale(20)}}>
              <CustomText
                label={t('areyouSureDetail')}
                marginBottom={verticalScale(3)}
                fontSize={15}
                fontFamily={fonts.LatoMedium}
                color={colors.black}
                textStyle={{textAlign: 'center', lineHeight: 24}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View style={{width: '48%'}}>
                <CustomButton
                  onPress={() => setRevokeModal(false)}
                  textStyle={{fontSize: verticalScale(13)}}
                  text={t('Cancel')}
                  containerStyle={styles.cancelBtn}
                />
              </View>
              <View style={{width: '48%'}}>
                <CustomButton
                  onPress={() => setRevokeModal(false)}
                  textStyle={{fontSize: verticalScale(13), color: colors.red10}}
                  text={t('yes')}
                  containerStyle={[
                    styles.cancelBtn,
                    {backgroundColor: colors.redLight},
                  ]}
                />
              </View>
            </View>
          </View>
        </CustomModal>
      )}
    </ScrollView>
  );
};

export default InviteWorkforce;

const styles = ScaledSheet.create({
  mainContainer: {
    padding: '15@vs',
    backgroundColor: colors.background,
  },
  modalMainCont: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5@s',
  },
  modalMainCont1: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5@s',
  },
  noteContainer: {
    backgroundColor: colors.Primary20,
    elevation: 1,
    padding: '10@vs',
    borderRadius: '5@vs',
    width: '100%',
    marginTop: '12@vs',
  },
  noteText: {
    fontFamily: fonts.LatoBold,
    fontSize: '12@vs',
    color: colors.primary,
    lineHeight: 22,
  },
  okBtn: {
    width: '100%',
    height: '40@vs',
    marginTop: '8@vs',
  },
  cancelBtn: {
    width: '100%',
    height: '40@vs',
    borderRadius: '10@vs',
    marginTop: '15@vs',
  },
});
