import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {useTranslation} from 'react-i18next';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import {
  scale,
  ScaledSheet,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
import colors from '@SilalApp/common/assets/colors';
import CustomText from '@SilalApp/common/components/CustomText';
import TotalDetails from './Molecules/TotalDetails';
import Item from './Molecules/Item';
import fonts from '@SilalApp/common/assets/fonts';
import images from '../../../assets/images';
import CustomInput from '../../../../common/components/native/TextInput/index';
import CustomButton from '@SilalApp/common/components/native/CustomButton';
import {Icon} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

const RenewOffer = () => {
  const {t} = useTranslation();
  const [modal, setModal] = useState(false);
  const [sModal, setSModal] = useState(false);
  const [mobileModal, setMobileModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [freezeModal, setFreezeModal] = useState(false);
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
    <ScrollView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header
          rightPress={() => setMobileModal(!mobileModal)}
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
                label={t(sModal ? 'add_a_new_item' : 'mainItem')}
                fontFamily={fonts.LatoBold}
                fontSize={verticalScale(15)}
                marginBottom={verticalScale(15)}
                alignSelf="center"
              />
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setModal(!modal)}
                style={{position: 'absolute', right: 0}}>
                <Icon type="entypo" name="cross" />
              </TouchableOpacity>
              <View style={styles.modalContainer}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.modalImgContainer}>
                  <Image
                    source={sModal ? images.upload : images.borger}
                    style={styles.modalImg}
                  />
                </TouchableOpacity>
                <View style={{width: '50%'}}>
                  <View style={{height: 10}} />
                  <CustomText
                    color={colors.textPrimary}
                    fontFamily={fonts.LatoMedium}
                    marginBottom={verticalScale(4)}
                    fontSize={verticalScale(10)}
                    label={t('initialPrice')}
                  />

                  <CustomInput
                    placeholderText={sModal ? '$ 0.00' : '$ 1.50'}
                    inputStyle={{
                      backgroundColor: colors.dullWhite,
                      marginBottom: verticalScale(12),
                    }}
                    inputTextStyle={styles.modalInput}
                    placeholderTextColor={
                      sModal ? colors.textColor : colors.black
                    }
                  />
                  <CustomText
                    color={colors.textPrimary}
                    fontFamily={fonts.LatoMedium}
                    marginBottom={verticalScale(4)}
                    fontSize={verticalScale(10)}
                    label={t('NewPrice')}
                  />
                  <CustomInput
                    placeholderText="$ 1.00"
                    inputStyle={{
                      backgroundColor: colors.dullWhite,
                      marginBottom: verticalScale(12),
                    }}
                    inputTextStyle={styles.modalInput}
                    placeholderTextColor={
                      sModal ? colors.textColor : colors.black
                    }
                  />
                </View>
              </View>
              <CustomText
                color={colors.textPrimary}
                fontFamily={fonts.LatoMedium}
                marginBottom={verticalScale(4)}
                fontSize={verticalScale(10)}
                label={t('Item')}
              />
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={t(
                  sModal ? 'choose_item' : 'Chicken & Cheese Burger',
                )}
                style={styles.dropDownStyle}
                placeholderStyle={[
                  styles.dropDownPlaceHolder,
                  {color: sModal ? colors.textColor : colors.black},
                ]}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '66%'}}>
                  <CustomText
                    color={colors.textPrimary}
                    fontFamily={fonts.LatoMedium}
                    marginBottom={verticalScale(4)}
                    fontSize={verticalScale(10)}
                    label={t('priceEffect')}
                  />
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={
                      sModal ? 'Cash discount' : 'Percentage discount'
                    }
                    style={styles.dropDownStyle}
                    placeholderStyle={[
                      styles.dropDownPlaceHolder,
                      {color: colors.black},
                    ]}
                  />
                </View>
                <View style={{width: '30%'}}>
                  <CustomText
                    color={colors.textPrimary}
                    fontFamily={fonts.LatoMedium}
                    marginBottom={verticalScale(4)}
                    fontSize={verticalScale(10)}
                    label={t('of')}
                  />
                  <View
                    style={{
                      width: '100%',
                      height: verticalScale(50),
                      flexDirection: 'row',
                    }}>
                    <CustomInput
                      placeholderText={sModal ? '0.00' : '33'}
                      inputStyle={{
                        borderColor: colors.dullWhite,
                        marginBottom: verticalScale(12),
                        borderWidth: 2,
                        backgroundColor: 'transparent',
                        borderRadius: 10,
                      }}
                      inputTextStyle={[styles.modalInput, {width: '100%'}]}
                      placeholderTextColor={
                        sModal ? colors.textColor : colors.black
                      }
                      withLabel={t('of')}
                    />
                    <View style={styles.persontageCont}>
                      <CustomText
                        color={colors.textPrimary}
                        fontSize={verticalScale(15)}
                        label={sModal ? '$' : '%'}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <CustomText
                color={colors.textPrimary}
                fontFamily={fonts.LatoMedium}
                marginBottom={verticalScale(4)}
                fontSize={verticalScale(10)}
                label={t('MinQuantity')}
              />
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={sModal ? '1' : '2'}
                style={styles.dropDownStyle}
                placeholderStyle={[
                  styles.dropDownPlaceHolder,
                  {color: sModal ? colors.textColor : colors.black},
                ]}
              />
              <CustomButton
                textStyle={{fontSize: verticalScale(13)}}
                containerStyle={styles.modalBtn}
                text={t(sModal ? 'AddItemToOffer' : 'SaveChanges')}
              />
            </View>
          </ScrollView>
        </CustomModal>
      )}
      <View style={styles.buttonContainer}>
        <View style={{width: '19%'}}>
          <View style={styles.plusIcon}>
            <TouchableOpacity
              onPress={() => {
                setSModal(!sModal);
                setModal(!modal);
              }}
              activeOpacity={0.6}>
              <Icon
                name="plus"
                type="antdesign"
                size={22}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: '81%'}}>
          <CustomButton
            textStyle={{fontSize: verticalScale(12)}}
            containerStyle={styles.btnContainer}
            text={t('Apply')}
          />
        </View>
      </View>
      {mobileModal && (
        <CustomModal
          isModalVisible={mobileModal}
          setModalVisible={setMobileModal}
          modalWrapperStyle={{
            marginHorizontal: 0,
            marginTop: height('80%'),
            marginVertical: 0,
            borderTopRightRadius: 20,
          }}>
          <TouchableOpacity
            style={styles.menuModalContainer}
            activeOpacity={0.6}
            onPress={() => console.log('Preview')}>
            <Icon
              name="device-mobile"
              type="octicon"
              size={moderateScale(22)}
              color={colors.dullWhite}
            />

            <CustomText label={t('Preview')} textStyle={styles.menuTextTitle} />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={[styles.menuModalContainer, {marginTop: verticalScale(15)}]}
            activeOpacity={0.6}
            onPress={() => setFreezeModal(!freezeModal)}>
            <Image
              source={images.freezeIcon}
              style={{
                tintColor: colors.dullWhite,
                resizeMode: 'center',
                width: verticalScale(20),
                height: verticalScale(20),
              }}
            />

            <CustomText
              label={t('freeze_offer')}
              textStyle={styles.menuTextTitle}
            />
          </TouchableOpacity>
        </CustomModal>
      )}
      {freezeModal && (
        <CustomModal
          isModalVisible={freezeModal}
          setModalVisible={setFreezeModal}
          modalWrapperStyle={{
            marginHorizontal: 0,
            marginVertical: height('30%'),
            borderTopRightRadius: 20,
          }}>
          <Image
            source={images.freezeIcon}
            style={{
              width: moderateScale(70),
              height: moderateScale(70),
              resizeMode: 'contain',
            }}
          />
          <CustomText
            label={t('offer_is_freezed')}
            fontFamily={fonts.LatoBold}
            fontSize={verticalScale(14)}
            marginBottom={verticalScale(15)}
            marginTop={verticalScale(10)}
          />
          <CustomText label={t("freezeDetails")} />
        </CustomModal>
      )}
    </ScrollView>
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
  buttonContainer: {
    backgroundColor: colors.textWhite,
    borderTopColor: colors.borderColor,
    borderTopWidth: 1,
    paddingTop: '10@vs',
    marginTop: '30@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '40@vs',
  },
  btnContainer: {
    width: '100%',
    height: '45@vs',
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
  plusIcon: {
    backgroundColor: colors.blurPrimary,
    width: '45@vs',
    height: '45@vs',
    justifyContent: 'center',
    borderRadius: '10@s',
  },
  dropDownStyle: {
    width: '100%',
    borderColor: colors.dullWhite,
    marginBottom: '12@ms',
    backgroundColor: colors.dullWhite,
  },
  dropDownPlaceHolder: {
    fontSize: '16@ms',
    fontFamily: fonts.LatoRegular,
  },
  persontageCont: {
    width: '40%',
    height: '40@vs',
    backgroundColor: colors.borderColor,
    marginLeft: '-35@vs',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuModalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingTop: '10@vs',
    paddingBottom: '25@vs',
    paddingHorizontal: '10@s',
  },
  menuTextTitle: {
    fontSize: '14@vs',
    fontFamily: fonts.LatoMedium,
    color: colors.black,
    marginLeft: '10@s',
  },
  divider: {
    height: '1@s',
    width: '100%',
    backgroundColor: colors.dullWhite,
  },
});
