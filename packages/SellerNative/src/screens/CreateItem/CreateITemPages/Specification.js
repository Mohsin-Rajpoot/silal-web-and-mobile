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
import TagInput from 'react-native-tags-input';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import MultiSelectDropDown from '@SilalApp/common/components/native/MultipleSelectDrop';

const Specification = ({moveForward, goPrev}) => {
  const {t} = useTranslation();

  const [active, setActive] = useState(false);
  const [customField, setCustomField] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'Apple', value: 'apple'},
  //   {label: 'Banana', value: 'banana'},
  // ]);
  return (
    <>
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.headerTitleContainer}>
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
          </View>
          <View style={styles.divider} />
          <View style={styles.InnerContainer}>
            <CustomText
              label={t('Category_Required')}
              textStyle={styles.categoryRequired}
            />
            <CustomText label={t('Brand')} textStyle={styles.inputTitle} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: '90%'}}>
                <DropDown placeholder="Apple" />
              </View>

              <View style={styles.plusContainer}>
                <Icon
                  name="plus"
                  type="antdesign"
                  size={26}
                  color={colors.primary}
                />
              </View>
            </View>
            <CustomText label={t('Color')} textStyle={styles.inputTitle} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: '90%'}}>
                <MultiSelectDropDown />
                {/* <DropDown multiple={true}/> */}
                {/* <CustomDropDown multiple={true}  /> */}
              </View>

              <View style={styles.plusContainer}>
                <Icon
                  name="plus"
                  type="antdesign"
                  size={26}
                  color={colors.primary}
                />
              </View>
            </View>

            <CustomText label={t('Capacity')} textStyle={styles.inputTitle} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: '90%'}}>
                <MultiSelectDropDown />
                {/* <DropDown multiple={true}/> */}
                {/* <CustomDropDown multiple={true}  /> */}
              </View>

              <View style={styles.plusContainer}>
                <Icon
                  name="plus"
                  type="antdesign"
                  size={26}
                  color={colors.primary}
                />
              </View>
            </View>
            <CustomText
              label={t('Screen_size')}
              textStyle={styles.inputTitle}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: '90%'}}>
                <DropDown placeholder="15.3" />
              </View>

              <View style={styles.plusContainer}>
                <Icon
                  name="plus"
                  type="antdesign"
                  size={26}
                  color={colors.primary}
                />
              </View>
            </View>
            <CustomText
              label={t('StorageType')}
              textStyle={styles.inputTitle}
            />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: '90%'}}>
                <DropDown placeholder="SSD" />
              </View>

              <View style={styles.plusContainer}>
                <Icon
                  name="plus"
                  type="antdesign"
                  size={26}
                  color={colors.primary}
                />
              </View>
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
              <View style={{width: '90%', marginTop: 3}}>
                <MultiSelectDropDown />
                {/* <DropDown multiple={true}/> */}
                {/* <CustomDropDown multiple={true}  /> */}
              </View>

              <View style={styles.plusContainer}>
                <Icon
                  name="plus"
                  type="antdesign"
                  size={26}
                  color={colors.primary}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              text={t('back')}
              containerStyle={styles.backContainer}
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
          <View style={{height: 20, width: '100%'}} />
        </View>
      </ScrollView>
      <CustomModal
        isModalVisible={customField}
        setModalVisible={setCustomField}
        modalWrapperStyle={{
          marginHorizontal: 0,
          marginVertical: 0,
          marginLeft: '65%',
          justifyContent: 'flex-start',
        }}>
        <View style={styles.barCodeModalContainer}>
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

          <CustomText label={t('ChooseWays')} textStyle={styles.chooseWays} />
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
    backgroundColor: colors.textWhite,
    marginLeft: '5@s',
    width: '65%',
    borderRadius: '4@s',
    marginBottom: '10@s',
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
  plusContainer: {
    backgroundColor: colors.primaryBlur,
    marginHorizontal: '10@s',
    padding: '8@s',
    borderRadius: '4@s',
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
  },
  addCustomField: {
    backgroundColor: colors.primaryBlur,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '3@s',
    paddingHorizontal: '10@s',
    marginRight: '10@s',
    paddingVertical: '3@s',
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
  customText: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
  },
  nextStep: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,
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
});
