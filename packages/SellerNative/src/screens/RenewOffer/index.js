import {View, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {useTranslation} from 'react-i18next';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import CustomText from '@SilalApp/common/components/CustomText';
import TotalDetails from './Molecules/TotalDetails';
import Item from './Molecules/Item';
import fonts from '@SilalApp/common/assets/fonts';
import images from '../../../assets/images';
import CustomInput from '../../../../common/components/native/TextInput/index';
import CustomButton from '@SilalApp/common/components/native/CustomButton';

const RenewOffer = () => {
  const {t} = useTranslation();
  const [modal, setModal] = useState(false);
  const totalDataArray = [
    {
      id: 1,
      detail: 'Old total:',
      total: '$3.75',
    },
    {
      id: 2,
      detail: 'New total will be:',
      total: '$2.50',
      marginVertical: verticalScale(5),
    },
    {
      id: 3,
      detail: 'Customer will save:',
      total: '$1.25',
    },
  ];
  const itemDataArray = [
    {
      id: 1,
      withLabel: 'MAIN ITEM',
      heading: 'Chicken & Cheese Burger',
      text1: 'Percentage discount of 33%',
      text2: 'New price: $ 1.00',
      imgPath: images.borger,
      onPress: () => setModal(!modal),
    },
    {
      id: 2,
      withLabel: 'ADDITIONAL ITEM',
      heading: 'Soft Drinks',
      text1: 'Percentage discount of 33%',
      text2: 'New price: $ 1.00',
      imgPath: images.borger,
      onPress: () => setModal(!modal),
    },
    {
      id: 3,
      heading: 'Desserts',
      text1: 'Percentage discount of 33%',
      text2: 'New price: $ 1.00',
      imgPath: images.borger,
      onPress: () => setModal(!modal),
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header
          showIcon
          title={t('renewOffer')}
          dostIcon={true}
          goBack={() => navigation.pop()}
        />
      </View>
      <View style={styles.totalContainer}>
        {totalDataArray.map((item, index) => {
          return (
            <TotalDetails
              key={item.id}
              marginVertical={item.marginVertical}
              firstText={item.detail}
              secondText={item.total}
            />
          );
        })}
      </View>

      {itemDataArray.map((item, index) => {
        return (
          <Item
            key={item.id}
            imgPath={item.imgPath}
            withLabel={item.withLabel}
            heading={item.heading}
            text1={item.text1}
            text2={item.text2}
            editPress={item.onPress}
          />
        );
      })}
      {modal && (
        <CustomModal
          isModalVisible={modal}
          setModalVisible={setModal}
          modalWrapperStyle={styles.modalWrapper}>
          <ScrollView
            style={styles.modalMainContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View>
              <CustomText
                label={t("mainItem")}
                fontFamily={fonts.LatoBold}
                fontSize={verticalScale(15)}
                marginBottom={verticalScale(15)}
                alignSelf="center"
              />
              <View style={styles.modalContainer}>
                <View style={styles.modalImgContainer}>
                  <Image source={images.borger} style={styles.modalImg} />
                </View>
                <View style={{width: '50%'}}>
                  <View style={{height: 10}} />
                  <CustomInput
                    placeholderText="$ 1.50"
                    inputStyle={{
                      backgroundColor: colors.dullWhite,
                      marginBottom: verticalScale(12),
                    }}
                    inputTextStyle={styles.modalInput}
                    placeholderTextColor={colors.black}
                    withLabel={t("initialPrice")}
                  />
                  <CustomInput
                    placeholderText="$ 1.00"
                    inputStyle={{
                      backgroundColor: colors.dullWhite,
                      marginBottom: verticalScale(12),
                    }}
                    inputTextStyle={styles.modalInput}
                    placeholderTextColor={colors.black}
                    withLabel={t("NewPrice")}
                  />
                </View>
              </View>
              <CustomInput
                placeholderText="$ 1.00"
                inputStyle={{
                  backgroundColor: colors.dullWhite,
                  marginBottom: verticalScale(12),
                }}
                inputTextStyle={styles.modalInput}
                placeholderTextColor={colors.black}
                withLabel={t("Item")}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '66%'}}>
                  <CustomInput
                    placeholderText="Percentage discount"
                    inputStyle={{
                      backgroundColor: colors.dullWhite,
                      marginBottom: verticalScale(12),
                    }}
                    inputTextStyle={styles.modalInput}
                    placeholderTextColor={colors.black}
                    withLabel={t("priceEffect")}
                  />
                </View>
                <View style={{width: '30%'}}>
                  <CustomInput
                    placeholderText="33"
                    inputStyle={{
                      borderColor: colors.dullWhite,
                      marginBottom: verticalScale(12),
                      borderWidth: 2,
                      backgroundColor:'transparent',
                    }}
                    inputTextStyle={styles.modalInput}
                    placeholderTextColor={colors.black}
                    withLabel={t("of")}
                  />
                </View>
              </View>
              <CustomInput
                placeholderText="3"
                inputStyle={{
                  backgroundColor: colors.dullWhite,
                  marginBottom: verticalScale(12),
                }}
                inputTextStyle={styles.modalInput}
                placeholderTextColor={colors.black}
                withLabel={t("MinQuantity")}
              />
              <CustomButton
                textStyle={{fontSize: verticalScale(13)}}
                containerStyle={styles.modalBtn}
                text={t("SaveChanges")}
              />
            </View>
          </ScrollView>
        </CustomModal>
      )}
    </View>
  );
};

export default RenewOffer;

const styles = ScaledSheet.create({
  mainContainer: {
    padding: '10@msr',
  },
  headerContainer: {
    padding: '2@msr',
  },
  totalContainer: {
    backgroundColor: colors.primary,
    width: '100%',
    borderRadius: '8@vs',
    paddingVertical: '10@vs',
    paddingHorizontal: '15@s',
    marginTop: '10@vs',
    marginBottom: '20@vs',
  },
  modalMainContainer: {
    width: '95%',
    height: '100%',
    marginTop: '10@s',
  },
  modalImgContainer: {
    width: '45%',
    height: '150@msr',
    borderRadius: '8@vs',
    marginRight: '10@s',
    overflow: 'hidden',
  },
  modalWrapper: {
    marginHorizontal: 0,
    marginVertical: 0,
    marginTop: '63%',
    justifyContent: 'flex-start',
    borderRadius: '12@vs',
    width: '100%',
    paddingBottom: '20@vs',
  },
  modalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20@vs',
  },
  modalImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },

  modalInput: {
    fontSize: '15@vs',
    paddingHorizontal: '12@s',
  },
  modalBtn: {
    width: '100%',
    height: '45@vs',
  },
});
