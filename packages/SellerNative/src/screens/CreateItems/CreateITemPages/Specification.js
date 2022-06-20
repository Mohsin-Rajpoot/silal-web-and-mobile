import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import CustomText from '@SilalApp/common/components/CustomText';
import {useTranslation} from 'react-i18next';
import fonts from '@SilalApp/common/assets/fonts';
import {Icon} from 'react-native-elements';
import {CustomButton} from '@SilalApp/common/components/native';
import DropDown from '@SilalApp/common/components/native/DropDown';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import MultiSelectDropDown from '@SilalApp/common/components/native/MultipleSelectDrop';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Specification = ({moveForward, goPrev}) => {
  const {t} = useTranslation();

  const [active, setActive] = useState(false);
  const [customField, setCustomField] = useState(false);
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <>
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.headerTitleContainer}>
            {!IsTablet ? (
              <View style={styles.HeaderMainViewMobile}>
                <View style={styles.greenCircleMobile}>
                  <Text style={styles.greenCircleTextMobile}>2</Text>
                </View>
                <CustomText
                  label={t('specification')}
                  textStyle={styles.SecondaryHeadingTitle}
                />
              </View>
            ) : (
              <View style={{flexDirection: 'row'}}>
                <CustomText
                  label={t('specification')}
                  textStyle={styles.headerTitle}
                />
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.questionInActive}>
                  <Icon
                    name="question"
                    type="antdesign"
                    size={16}
                    color={colors.primary}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          {IsTablet ? <View style={styles.divider} /> : null}
          <View style={styles.InnerContainer}>
            <CustomText
              label={t('Category_Required')}
              textStyle={styles.categoryRequired}
            />
            <CustomText label={t('Brand')} textStyle={styles.inputTitle} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={
                  IsTablet ? {width: '90%'} : styles.SpecificationMobileDrop
                }>
                <DropDown placeholder="Apple" />
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('CustomValue')}
                style={
                  IsTablet ? styles.plusContainer : styles.plusContainerMobile
                }>
                <Icon name="plus" type="antdesign" color={colors.primary} />
              </TouchableOpacity>
            </View>
            <CustomText label={t('Color')} textStyle={styles.inputTitle} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={IsTablet ? {width: '90%'} : styles.ColorMobileView}>
                <MultiSelectDropDown
                  CustomDropdownStyle={
                    !IsTablet ? styles.DropDownMobileCustom : null
                  }
                />
                {/* <DropDown multiple={true}/> */}
                {/* <CustomDropDown multiple={true}  /> */}
              </View>

              <TouchableOpacity
              onPress={() => navigation.navigate('CustomValue')}
                style={
                  IsTablet ? styles.plusContainer : [styles.plusContainerMobile]
                }>
                <Icon name="plus" type="antdesign" color={colors.primary} />
              </TouchableOpacity>
            </View>

            <CustomText label={t('Capacity')} textStyle={styles.inputTitle} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={IsTablet ? {width: '90%'} : styles.ColorMobileView}>
                <MultiSelectDropDown
                  CustomDropdownStyle={
                    !IsTablet ? styles.DropDownMobileCustom : null
                  }
                />
                {/* <DropDown multiple={true}/> */}
                {/* <CustomDropDown multiple={true}  /> */}
              </View>
              <TouchableOpacity
              onPress={() => navigation.navigate('CustomValue')}
                style={
                  IsTablet ? styles.plusContainer : styles.plusContainerMobile
                }>
                <Icon name="plus" type="antdesign" color={colors.primary} />
              </TouchableOpacity>
            </View>
            <CustomText
              label={t('Screen_size')}
              textStyle={styles.inputTitle}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={IsTablet ? {width: '90%'} : styles.ColorMobileView}>
                <DropDown
                  DropDownCustomStyle={!IsTablet ? styles.dropSSd : null}
                  placeholder="15.3"
                />
              </View>

              <TouchableOpacity
              onPress={() => navigation.navigate('CustomValue')}
                style={
                  IsTablet
                    ? styles.plusContainer
                    : [styles.plusContainerMobile, {marginTop: '3%'}]
                }>
                <Icon name="plus" type="antdesign" color={colors.primary} />
              </TouchableOpacity>
            </View>
            <CustomText
              label={t('StorageType')}
              textStyle={styles.inputTitle}
            />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={IsTablet ? {width: '90%'} : styles.ColorMobileView}>
                <DropDown
                  DropDownCustomStyle={!IsTablet ? styles.dropSSd : null}
                  placeholder="SSD"
                />
              </View>

              <TouchableOpacity
              onPress={() => navigation.navigate('CustomValue')}
                style={
                  IsTablet
                    ? styles.plusContainer
                    : [styles.plusContainerMobile, {marginTop: 10}]
                }>
                <Icon name="plus" type="antdesign" color={colors.primary} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <CustomText label={t('display')} textStyle={styles.inputTitle} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.customRadioOne} />
                <CustomText label={t('yes')} textStyle={styles.yesText} />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.customRadioInActive} />
                <CustomText label={t('no')} textStyle={styles.yesText} />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.customRadioInActive} />
                <CustomText label={t('Both')} textStyle={styles.yesText} />
              </View>
            </View>

            <CustomText label={t('Capacity')} textStyle={styles.inputTitle} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={IsTablet ? {width: '90%'} : styles.ColorMobileView}>
                <MultiSelectDropDown
                  CustomDropdownStyle={
                    !IsTablet ? styles.DropDownMobileCustom : null
                  }
                />
                {/* <DropDown multiple={true}/> */}
                {/* <CustomDropDown multiple={true}  /> */}
              </View>

              <TouchableOpacity
              onPress={() => navigation.navigate('CustomValue')}
                style={
                  IsTablet ? styles.plusContainer : styles.plusContainerMobile
                }>
                <Icon name="plus" type="antdesign" color={colors.primary} />
              </TouchableOpacity>
            </View>
            {!IsTablet ? (
              <TouchableOpacity
                onPress={() => setCustomField(!customField)}
                style={{
                  backgroundColor: colors.blurPrimary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 40,
                  marginVertical: '5%',
                  borderRadius: 5,
                  overflow: 'hidden',
                }}>
                <Icon
                  name="plus"
                  type="antdesign"
                  size={24}
                  color={colors.primary}
                />
                <CustomText
                  label={t('Add_custom_field')}
                  textStyle={styles.customTextMobile}
                />
              </TouchableOpacity>
            ) : null}
          </View>
          {IsTablet ? (
            <View style={styles.buttonContainer}>
              <CustomButton
                text={t('back')}
                containerStyle={
                  IsTablet ? styles.backContainer : styles.backContainerMobile
                }
                textStyle={styles.backText}
                onPress={goPrev}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.addCustomField}
                  onPress={() => setCustomField(!customField)}>
                  <Icon
                    name="plus"
                    type="antdesign"
                    size={24}
                    color={colors.primary}
                  />
                  <CustomText
                    label={t('Add_custom_field')}
                    textStyle={styles.customText}
                  />
                </TouchableOpacity>

                <CustomButton
                  text={t('Next_step')}
                  textStyle={styles.nextStep}
                  onPress={moveForward}
                />
              </View>
            </View>
          ) : null}
          {!IsTablet ? <View style={styles.divider} /> : null}
          {!IsTablet ? (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={goPrev}
                style={styles.BackbottomButtonContainerMobile}>
                <Ionicons
                  name="arrow-back"
                  style={styles.BackbottomButtonIconMobile}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={moveForward}
                style={styles.ForwordbottomButtonContainerMobile}>
                <CustomButton
                  text={t('Next_step')}
                  textStyle={styles.nextStepMobile}
                  onPress={moveForward}
                />
              </TouchableOpacity>
            </View>
          ) : null}
          <View style={{height: 20, width: '100%'}} />
        </View>
      </ScrollView>
      <CustomModal
        isModalVisible={customField}
        setModalVisible={setCustomField}
        modalWrapperStyle={
          IsTablet ? styles.ModalContainer : styles.ModalContainerMobile
        }>
        <View style={styles.barCodeModalContainer}>
          {IsTablet ? (
            <View style={styles.barcodeModalHeader}>
              <CustomText
                label={t('Custom_field')}
                textStyle={styles.borderCodeHeaderText}
              />
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setCustomField(false)}>
                <Icon name="cross" type="entypo" size={30} />
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <View style={styles.barcodeModalHeaderMobile}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.HeaderMobile}>
                  <Ionicons name="chevron-back" style={styles.HeaderBackIcon} />
                </TouchableOpacity>
              </View>
              <CustomText
                label={t('Custom_field')}
                textStyle={styles.borderCodeHeaderTextMobile}
              />
            </View>
          )}

          <CustomText
            label={t('ChooseWays')}
            textStyle={IsTablet ? styles.chooseWays : styles.chooseWaysMobile}
          />
          <View style={{height: 25}} />
          <CustomText
            label={t('the_filed_will_be')}
            textStyle={styles.chooseWays1}
          />
          <DropDown placeholder={t('boolean')} setActive={setActive} />

          <View style={{height: 10}} />
          {active ? (
            <>
              <View style={styles.customRadioContainer}>
                <View style={styles.customRadio} />
                <CustomText
                  label="Add the 1-st option"
                  textStyle={styles.optionText}
                />
              </View>
              <View style={styles.customRadioContainer}>
                <View style={styles.customRadio} />
                <CustomText
                  label="Add the 1-st option"
                  textStyle={styles.optionText}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.addCustomField1}
                onPress={() => setCustomField(!customField)}>
                <Icon
                  name="plus"
                  type="antdesign"
                  size={24}
                  color={colors.primary}
                />
                <CustomText
                  label={t('Add_custom_field')}
                  textStyle={styles.customText}
                />
              </TouchableOpacity>
            </>
          ) : (
            <View />
          )}
        </View>

        <View style={{alignSelf: 'flex-end', marginRight: 10}}>
          <CustomButton text={t('add_field')} />
        </View>
      </CustomModal>
    </>
  );
};

export default Specification;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: IsTablet ? colors.textWhite : colors.profileBackground,
    marginLeft: '5@s',
    width: IsTablet ? '65%' : '93%',
    borderRadius: '4@s',
    marginBottom: '10@s',
  },
  HeaderMainViewMobile: {
    backgroundColor: colors.textWhite,
    height: '40@vs',
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: '2@s',
    elevation: 5,
    flexDirection: 'row',
    // justifyContent:'center'
    alignItems: 'center',
    marginTop: 10,
  },
  greenCircleMobile: {
    backgroundColor: colors.primary,
    width: 26,
    height: 26,
    marginHorizontal: '5@s',
    borderRadius: 13,
  },
  greenCircleTextMobile: {
    color: colors.textWhite,
    fontFamily: fonts.bold,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '15@s',
  },
  SecondaryHeadingTitle: {
    fontFamily: fonts.LatoRegular,
    color: colors.black,
    paddingHorizontal: '5@s',
  },
  customRadioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '4@s',
    borderColor: colors.borderColor,
    borderWidth: '1@s',
    padding: '5@s',
    marginVertical: '5@s',
  },
  customRadio: {
    borderColor: colors.primary,
    borderWidth: '4@s',
    padding: '4@s',
    borderRadius: '99@s',
    marginRight: '5@s',
  },
  yesText: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  customRadioOne: {
    borderColor: colors.primary,
    borderWidth: '3@s',
    padding: '3@s',
    borderRadius: '99@s',
    marginRight: '5@s',
    marginLeft: '7@s',
  },
  customRadioInActive: {
    borderColor: colors.borderColor3,
    borderWidth: '1@s',
    padding: '5@s',
    borderRadius: '99@s',
    marginRight: '5@s',
    marginLeft: '7@s',
  },
  optionText: {
    fontSize: '14@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textColorPrime,
  },
  InnerContainer: {
    paddingHorizontal: '10@s',
    paddingVertical: '5@s',
  },
  headerTitleContainer: {
    margin: '10@s',
  },
  headerTitle: {
    fontSize: '13@ms',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  questionInActive: {
    backgroundColor: colors.primaryBlur,
    borderRadius: '99@s',
    padding: '5@s',
    marginLeft: '8@s',
  },
  divider: {
    backgroundColor: colors.underLine,
    width: '100%',
    height: '1@s',
  },
  categoryRequired: {
    fontFamily: fonts.LatoSemiBold,
    fontSize: '10@ms',
    color: colors.textPrime,
    textTransform: 'uppercase',
  },
  inputTitle: {
    fontSize: '10@ms',
    fontFamily: fonts.bold,
    color: colors.textPrime,
    marginTop: '10@s',
    marginBottom: '3@s',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '10@s',
  },
  backContainer: {
    borderRadius: '3@s',
    borderColor: colors.primary,
    borderWidth: '0.5@s',
    backgroundColor: 'transparent',
  },
  backContainerMobile: {
    borderRadius: '3@s',
    borderColor: colors.primary,
    borderWidth: '0.5@s',
    backgroundColor: 'transparent',
    width: '50%',
  },
  plusContainer: {
    backgroundColor: colors.blurPrimary,
    marginHorizontal: '10@s',
    padding: '8@s',
    borderRadius: '4@s',
  },
  plusContainerMobile: {
    backgroundColor: colors.blurPrimary,
    marginHorizontal: '10@s',
    // padding: '8@s',
    borderRadius: '4@s',
    height: '45@s',
    width: '43@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
  },
  barcodeModalHeader: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '5@s',
    // backgroundColor:'red'
  },

  HeaderBackIcon: {
    fontSize: '19@s',
    color: colors.black,
    fontFamily: fonts.bold,
  },
  addCustomField: {
    backgroundColor: colors.blurPrimary,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '3@s',
    paddingHorizontal: '10@s',
    marginRight: '10@s',
    paddingVertical: '3@s',
  },
  addCustomFieldMobile: {
    backgroundColor: colors.blurPrimary,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '3@s',
    // paddingHorizontal: '10@s',
    // marginRight: '10@s',
    // paddingVertical: '3@s',
    width: '100%',
    textAlign: 'center',
    // justifyContent:'center'
    height: 40,
    marginVertical: 20,
  },
  addCustomField1: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '3@s',
    paddingHorizontal: '10@s',
    marginRight: '10@s',
    paddingVertical: '5@s',
    borderColor: colors.primary,
    borderWidth: '1@s',
    width: '100%',
    marginTop: '5@s',
  },
  chooseWays: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textColorSec,
  },
  chooseWaysMobile: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textColorSec,
    marginTop: '20@s',
  },
  customText: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
  },
  customTextMobile: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: '5@s',
  },
  nextStep: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,
  },
  nextStepMobile: {
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,
    fontSize: '12@ms',
    width: '87%',
    height: '38@s',
    //  backgroundColor:'blue',
    //  justifyContent:'center',
    //  alignItems:'center',
    textAlign: 'center',
    paddingVertical: '12@s',
  },
  ForwordbottomButtonContainerMobile: {
    // alignContent:'center',
    // backgroundColor:'red'
  },
  barCodeModalContainer: {
    width: '100%',
    padding: '5@s',
    height: '91%',
    marginTop: '10@s',
  },
  barcodeContainer: {
    borderColor: colors.borderColor,
    borderWidth: '1@s',
    borderRadius: '4@s',
    padding: '5@s',
  },
  borderCodeHeaderText: {
    fontSize: '16@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
  },
  chooseWays1: {
    fontSize: '9@ms',
    fontFamily: fonts.bold,
    color: colors.textPrime,
    marginBottom: '3@s',
  },
  SpecificationMobileDrop: {
    backgroundColor: colors.dullWhite,
    width: '85%',
    height: '45@s',
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ColorMobileView: {
    height: '60%',
    width: '85%',
  },
  DropDownMobileCustom: {
    height: '45@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dullWhite,
  },
  dropSSd: {
    backgroundColor: colors.dullWhite,
    height: '10@s',
  },
  BackbottomButtonContainerMobile: {
    backgroundColor: colors.blurPrimary,
    height: '40@s',
    width: '40@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10@s',
    marginLeft: '10@s',
    borderRadius: '5@s',
    overflow: 'hidden',
  },
  BackbottomButtonIconMobile: {
    fontSize: '17@s',
    color: colors.primary,
  },
  ModalContainer: {
    marginHorizontal: 0,
    marginVertical: 0,
    marginLeft: '65%',
    justifyContent: 'flex-start',
  },
  ModalContainerMobile: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
  borderCodeHeaderTextMobile: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -24,
    color: colors.black,
    fontSize: '15@s',
    fontFamily: fonts.bold,
  },
});
