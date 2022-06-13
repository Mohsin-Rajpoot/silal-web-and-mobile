import {View, TouchableOpacity,} from 'react-native';
import React, {useState} from 'react';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import TextWithIconCompo from './TextWithIconCompo';
import {useTranslation} from 'react-i18next';
import Header from '../../../components/Header';
import fonts from '@SilalApp/common/assets/fonts';
import images from '../../../../assets/images';
import CustomText from '@SilalApp/common/components/CustomText';
import {Icon, CheckBox} from 'react-native-elements';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import TimerMobile from '../../../components/TimerMobile';
import {CustomButton} from '@SilalApp/common/components/native';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';

const SellerToolScreen = ({navigation}) => {
  const {t} = useTranslation();
  const [contactModal, setContactModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [noteModal, setNoteModal] = useState(false);
  const [addNote, setAddNote] = useState(2);
  const [check, setcheck] = useState(0);

  const dataArray = [
    {
      id: 1,
      text: t('Start_shift'),
      toggle: true,
      iconPath: images.flagIcon,
    },
    {
      id: 2,
      text: t('Notes'),
      iconPath: images.noteIcon,
      onPress: () => navigation.navigate('Notes'),
    },
    {
      id: 3,
      text: t('delivery_estimation_time'),
      iconPath: images.clockIcon,
      time: '40 Mint',
      onPress: () => setModal(true),
    },
    {
      id: 4,
      text: t('contact_info'),
      iconPath: images.infoIcon,
      onPress: () => setContactModal(true),
    },
  ];
 

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header title={t('sellers_tool')} dostIcon={true} showIcon treeDot />
      </View>
      {dataArray.map((item, index) => {
        return (
          <TextWithIconCompo
            key={item.id}
            iconPath={item.iconPath}
            text={item.text}
            time={item.time}
            toggle={item.toggle}
            onPress={item.onPress}
          />
        );
      })}
      {contactModal && (
        <CustomModal
          isModalVisible={contactModal}
          setModalVisible={setContactModal}
          modalWrapperStyle={{
            marginHorizontal: scale(15),
            marginVertical: height(31),
          }}
          modalContainerStyle={{
            borderRadius: 2,
            backgroundColor: 'white',
          }}>
          <View style={{marginHorizontal: scale(10)}}>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
              }}
              activeOpacity={0.6}
              onPress={() => setContactModal(false)}>
              <Icon name="cross" type="entypo" size={24} />
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <CustomText
                label={t('Customer_Support')}
                fontSize={18}
                fontFamily={fonts.bold}
                marginBottom={verticalScale(5)}
              />
              <CustomText
                label={t('Customer_SupportDetail')}
                fontSize={16}
                fontFamily={fonts.LatoMedium}
                textStyle={{textAlign: 'center'}}
                color={colors.textPrimary}
              />
            </View>
            <View>
              <View style={{flexDirection: 'row', marginTop: 25}}>
                <View style={styles.maiLContainer}>
                  <Icon
                    name="mail"
                    type="entypo"
                    size={26}
                    color={colors.primary}
                  />
                </View>
                <View>
                  <CustomText label={t('email')} textStyle={styles.mailText} />
                  <CustomText
                    label={'customer.suppor@silal.com'}
                    textStyle={styles.mail}
                  />
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row', marginTop: 25}}>
                  <View style={styles.maiLContainer}>
                    <Icon
                      name="phone"
                      type="fontawesome"
                      size={26}
                      color={colors.primary}
                    />
                  </View>
                  <View>
                    <CustomText
                      label={t('Contact_number')}
                      textStyle={styles.mailText}
                    />
                    <CustomText
                      label={'(202) 398 0202'}
                      textStyle={styles.mail}
                    />
                    <CustomText
                      label={'(202) 398 0202'}
                      textStyle={styles.mail}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </CustomModal>
      )}
      
    </View>
  );
};

export default SellerToolScreen;

const styles = ScaledSheet.create({
  mainContainer: {
    padding: '15@vs',
    backgroundColor: colors.background,
    flex: 1,
  },
  headerContainer: {
    paddingVertical: '10@vs',
  },
  headingCustomerSupport: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  headingCustomerSupportDetail: {
    fontSize: 16,
    fontFamily: fonts.LatoMedium,
    color: colors.black,
  },
  maiLContainer: {
    width: '45@vs',
    height: '45@vs',
    backgroundColor: colors.primaryBlur,
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: '10@s',
  },
  mailText: {
    fontSize: 13,
    fontFamily: fonts.bold,
    color: colors.black,
    textTransform: 'uppercase',
  },
  mail: {
    fontSize: 13,
    fontFamily: fonts.LatoMedium,
    color: colors.sidebar,
  },
  
});
