import {View, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
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
      onPress: () => console.log('revoke'),
    },
    {
      id: 2,
      sellerId: ' #4983241 -- PENDING',
      sellerName: ' Ali Muhammad',
      registerBy: ' #894230',
      registerOn: ' 10/06/2022',
      onPress: () => console.log('revoke'),
    },
    {
      id: 3,
      sellerId: ' #4983241',
      sellerName: ' Ali Muhammad',
      registerBy: ' #894230',
      registerOn: ' 10/06/2022',
      onPress: () => console.log('revoke'),
    },
  ];
  const {t} = useTranslation();

  return (
    <ScrollView style={styles.mainContainer}>
      <SettingHeader
        backPress={() => navigation.goBack()}
        title={t('addNewWorkforce')}
      />
      <View style={{height: verticalScale(15)}} />
      <GrantAccessComp grantPress={() => setGrantModal(true)} />
      <CustomText
        label={t('currentWorkforce')}
        fontSize={14}
        fontFamily={fonts.LatoBold}
        color={colors.black}
        marginBottom={verticalScale(10)}
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
      {grantModal && (
        <CustomModal
          isModalVisible={grantModal}
          setModalVisible={setGrantModal}
          modalWrapperStyle={{
            marginHorizontal: width(3),
            marginVertical: height(20),
          }}>
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
        </CustomModal>
      )}
       {revokeModal && (
        <CustomModal
          isModalVisible={revokeModal}
          setModalVisible={setRevokeModal}
          modalWrapperStyle={{
            marginHorizontal: width(3),
            marginVertical: height(20),
          }}>
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
        </CustomModal>
      )}
    </ScrollView>
  );
};

export default InviteWorkforce;

const styles = ScaledSheet.create({
  mainContainer: {
    padding: '15@vs',
    flex: 1,
    backgroundColor: colors.background,
  },
  modalMainCont: {
    width: '100%',
    height: '100%',
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
});
