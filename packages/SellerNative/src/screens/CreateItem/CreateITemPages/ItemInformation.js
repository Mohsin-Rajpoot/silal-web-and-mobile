import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import CustomText from '@SilalApp/common/components/CustomText';
import {useTranslation} from 'react-i18next';
import fonts from '@SilalApp/common/assets/fonts';
import CustomTextInput from '@SilalApp/common/components/native/TextInput';
import {Icon} from 'react-native-elements';
import {CustomButton} from '@SilalApp/common/components/native';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
const ItemInformation = ({onPress}) => {
  const {t} = useTranslation();
  const [active, setActive] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [barcodeModal, setBarCodeModal] = useState(false);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const data1 = [1, 2, 3, 4];
  return (
    <>
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.headerTitleContainer}>
            <CustomText
              label={t('item_information')}
              textStyle={styles.headerTitle}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.informationContainer}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <CustomText
                  label={t('item_name')}
                  textStyle={styles.formTextHeading}
                />
                <CustomText label="*" textStyle={styles.star} />
              </View>
              <View>
                <CustomText
                  label={52 + ' ' + t('Character_left')}
                  textStyle={styles.formTextHeading1}
                />
              </View>
            </View>
            <View style={styles.textInputContainer}>
              <CustomTextInput />
              <TouchableOpacity
                activeOpacity={0.6}
                style={active ? styles.questionActive : styles.questionInActive}
                onPress={() => setActive(!active)}>
                <Icon
                  name="question"
                  type="antdesign"
                  size={16}
                  color={active ? colors.textWhite : colors.primary}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 13,
                marginBottom: 8,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <CustomText
                  label={t('ItemSecondLanguage')}
                  textStyle={styles.formTextHeading}
                />
              </View>
              <View>
                <CustomText
                  label={80 + ' ' + t('Character_left')}
                  textStyle={styles.formTextHeading1}
                />
              </View>
            </View>
            <CustomTextInput placeholderText={t('item_name')} />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <CustomText
                  label={t('Category')}
                  textStyle={styles.formTextHeading}
                />
                <CustomText label="*" textStyle={styles.star} />
              </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.chooseCatgegoryContainer}
                activeOpacity={0.6}
                onPress={() => setCategoryModal(!categoryModal)}>
                <CustomText
                  label={t('Choosecategory')}
                  textStyle={styles.chooseText}
                />
                <Icon name="caretdown" type="antdesign" size={16} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={active ? styles.questionActive : styles.questionInActive}
                onPress={() => setActive(!active)}>
                <Icon
                  name="question"
                  type="antdesign"
                  size={16}
                  color={active ? colors.textWhite : colors.primary}
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <CustomText
                label={t('Barcode')}
                textStyle={styles.formTextHeading}
              />
              <CustomText label="*" textStyle={styles.star} />
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setBarCodeModal(!barcodeModal)}>
              <View style={styles.barcodeContainer}>
                <CustomText
                  label={t('Barcode')}
                  textStyle={styles.barcodeText}
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <CustomText
                  label={t('About_this_item')}
                  textStyle={styles.formTextHeading}
                />
                <CustomText label="*" textStyle={styles.star} />
              </View>
              <View>
                <CustomText
                  label={1000 + ' ' + t('Character_left')}
                  textStyle={styles.formTextHeading1}
                />
              </View>
            </View>
          </View>
          <View style={{alignSelf: 'flex-end', margin: 20, marginBottom: 20}}>
            <CustomButton text={t('Next_step')} onPress={onPress} />
          </View>
        </View>
      </ScrollView>
      <CustomModal
        isModalVisible={categoryModal}
        setModalVisible={setCategoryModal}
        modalWrapperStyle={{
          marginHorizontal: 0,
          marginVertical: 0,
          marginLeft: '25%',
          justifyContent: 'flex-start',
        }}>
        <View style={{width: '100%', marginTop:10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <CustomText
              label={t('select_item_category')}
              textStyle={styles.textSelectCategory}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setCategoryModal(false)}>
              <Icon name="cross" type="entypo" />
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 10, marginBottom: 20}}>
            <CustomText
              label={t('Select_item_detial')}
              textStyle={styles.selectItemDetail}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomText
                label={t('SearchBy')}
                textStyle={styles.selectItemDetail}
              />
              <CustomText
                label={' ' + t('SlectItemDeail')}
                textStyle={styles.selectItemDetail1}
              />
            </View>
          </View>
          <View style={{marginHorizontal: 10}}>
            <CustomText
              label={t('Search_by_category')}
              textStyle={styles.searchbyCategory}
            />
            <CustomTextInput
              search={true}
              placeholderText={'Electronics > Computers > Laptops'}
            />
          </View>
          <View style={styles.ScrollViewMainContainer}>
            <ScrollView style={styles.scrollViewCon}>
              <FlatList
                data={data}
                keyExtractor={(item, index) => item + index.toString()}
                renderItem={({item}) => (
                  <View style={styles.catContainer}>
                    <CustomText
                      label={'Some category'}
                      textStyle={styles.categroyText}
                    />
                    <Icon
                      name="right"
                      type="antdesign"
                      size={18}
                      color={colors.textPrime}
                    />
                  </View>
                )}
              />
            </ScrollView>
            <ScrollView style={styles.scrollViewCon}>
              <FlatList
                data={data}
                keyExtractor={(item, index) => item + index.toString()}
                renderItem={({item}) => (
                  <View style={styles.catContainer}>
                    <CustomText
                      label={'Some category'}
                      textStyle={styles.categroyText}
                    />
                    <Icon
                      name="right"
                      type="antdesign"
                      size={18}
                      color={colors.textPrime}
                    />
                  </View>
                )}
              />
            </ScrollView>
            <ScrollView style={styles.scrollViewCon1}>
              <FlatList
                data={data1}
                keyExtractor={(item, index) => item + index.toString()}
                renderItem={({item}) => (
                  <View style={styles.catContainer}>
                    <CustomText
                      label={'Some category'}
                      textStyle={styles.categroyText}
                    />
                    <Icon
                      name="right"
                      type="antdesign"
                      size={18}
                      color={colors.textPrime}
                    />
                  </View>
                )}
              />
            </ScrollView>
          </View>
          <View style={{alignSelf: 'flex-end', marginTop: 10}}>
            <CustomButton text={t('Confirm')} />
          </View>
        </View>
      </CustomModal>
      <CustomModal
        isModalVisible={barcodeModal}
        setModalVisible={setBarCodeModal}
        modalWrapperStyle={{
          marginHorizontal: 0,
          marginVertical: 0,
          marginLeft: '65%',
          justifyContent: 'flex-start',
          
        }}>
        <View style={styles.barCodeModalContainer}>
          <View style={styles.barcodeModalHeader}>
            <CustomText
              label={t('add_barcode')}
              textStyle={styles.borderCodeHeaderText}
            />
            <TouchableOpacity activeOpacity={0.6} onPress={()=>setBarCodeModal(false)}>
            <Icon name="cross" type="entypo" size={30} />
            </TouchableOpacity>

          </View>

          <CustomText label={t('ChooseWays')} textStyle={styles.chooseWays} />
          <View style={{height: 25}} />
          <CustomText
            label={t('manually')}
            textStyle={styles.borderCodeHeaderText}
          />
          <CustomText label={t('Barcode')} textStyle={styles.chooseWays} />
          <View style={{height: 10}} />
          <View style={styles.barcodeContainer}>
            <CustomText label={t('Barcode')} textStyle={styles.barcodeText} />
          </View>
          <View style={{height: 20}} />
          <CustomText
            label={t('Scan')}
            textStyle={styles.borderCodeHeaderText}
          />
          <View style={styles.click_to_ScanContainer}>
            <CustomText
              label={t('Click_to_Scan')}
              textStyle={styles.click_to_Scan_text}
            />
          </View>
        </View>
      </CustomModal>
    </>
  );
};

export default ItemInformation;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.textWhite,
    marginLeft: '5@s',
    width: '65%',
    borderRadius: '4@s',
    marginBottom: '10@s',
  },
  ScrollViewMainContainer: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    width: '98%',
    marginTop: '10@s',
    alignSelf: 'center',
    height: '53%',
    borderRadius: '4@s',
    borderColor: colors.background2,
    borderWidth: '1@s',
  },
  catContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.background2,
    paddingHorizontal: '5@s',
    paddingVertical: '10@s',
    borderBottomWidth: '1@s',
  },
  categroyText: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  chooseWays: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textColorSec,
    marginTop:"5@s"
  },
  barcodeModalHeader: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  barCodeModalContainer: {
    width: '100%',
    padding: '5@s',
    marginTop:"10@s"
  },
  barcodeContainer: {
    borderColor: colors.borderColor,
    borderWidth: '0.7@s',
    borderRadius: '3@s',
    padding: '5@s',
  },
  borderCodeHeaderText: {
    fontSize: '16@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
  },
  barcodeText: {
    fontSize: '14@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.borderColor,
  },
  click_to_ScanContainer: {
    borderColor: colors.primary,
    borderWidth: '0.5@s',
    borderRadius: '3@s',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5@s',
    marginTop:"5@s"
  },
  click_to_Scan_text: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
  },
  scrollViewCon: {
    width: '32%',
    borderRightColor: colors.background2,
    borderRightWidth: '1@s',
  },
  scrollViewCon1: {
    width: '32%',
  },
  searchbyCategory: {
    fontSize: '10@ms',
    fontFamily: fonts.LatoBold,
    color: colors.textPrime,
    marginBottom: '5@s',
  },
  textSelectCategory: {
    fontSize: '16@ms',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  headerTitleContainer: {
    margin: '10@s',
  },
  headerTitle: {
    fontSize: '13@ms',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  divider: {
    backgroundColor: colors.underLine,
    width: '100%',
    height: '1@s',
  },
  selectItemDetail: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
    lineHeight: '16@s',
  },
  selectItemDetail1: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.primary,
  },
  formTextHeading: {
    fontSize: '10@ms',
    fontFamily: fonts.LatoBold,
    color: colors.textPrime,
    paddingHorizontal: '2@s',
    marginVertical: '5@s',
  },
  star: {
    color: colors.red,

    flexDirection: 'column',
  },
  informationContainer: {
    marginHorizontal: '10@s',
    marginVertical: '5@s',
    width: '90%',
  },
  formTextHeading1: {
    fontSize: '10@ms',
    fontFamily: fonts.LatoBold,
    color: colors.textColorPrime,
    paddingHorizontal: '2@s',
    marginVertical: '5@s',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionInActive: {
    backgroundColor: colors.primaryBlur,
    borderRadius: '99@s',
    padding: '3@s',
    marginLeft: '5@s',
  },
  questionActive: {
    backgroundColor: colors.primary,
    borderRadius: '99@s',
    padding: '3@s',
    marginLeft: '5@s',
  },
  chooseCatgegoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: '4@s',
    borderColor: colors.borderColor,
    borderWidth: '1@s',
    padding: '8@s',
    justifyContent: 'space-between',
    marginBottom: '5@s',
    width: '100%',
  },
  chooseText: {
    fontSize: '13@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textColorPrime,
  },
});
