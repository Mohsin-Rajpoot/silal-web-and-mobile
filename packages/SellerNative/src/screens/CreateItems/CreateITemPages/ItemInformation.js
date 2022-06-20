import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import CustomText from '@SilalApp/common/components/CustomText';
import {useTranslation} from 'react-i18next';
import fonts from '@SilalApp/common/assets/fonts';
import CustomTextInput from '@SilalApp/common/components/native/TextInput';
import {Icon, SearchBar} from 'react-native-elements';
import {CustomButton, SearchBox} from '@SilalApp/common/components/native';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tooltip from 'react-native-walkthrough-tooltip';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RBSheet from 'react-native-raw-bottom-sheet';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { useNavigation } from '@react-navigation/native';
var windowWidth = Dimensions.get('window').width;

const ItemInformation = ({onPress}) => {
  const {t} = useTranslation();
  const [active, setActive] = useState(false);
  const [Second, setSecond] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [barcodeModal, setBarCodeModal] = useState(false);
  const [showTip, setTip] = useState(false);
  const [showTip1, setTip1] = useState(false);

  const [selectedColor, setselectedColor] = useState('');
  const [SubCategory, setSubCategory] = useState('');
  const navigation = useNavigation(); 


  const Sheet = useRef();
  const Sheet_Header = useRef();
  const [data1, setdata] = useState([
    {
      id: '1',
      Category: 'First Some Category',

      selectedColor: false,
    },
    {
      id: '2',
      Category: 'First Some Category',

      selectedColor: false,
    },
    {
      id: '3',
      Category: 'First Some Category',

      selectedColor: false,
    },
    {
      id: '4',
      Category: 'First Some Category',

      selectedColor: false,
    },
    {
      id: '5',
      Category: 'First Some Category',

      selectedColor: false,
    },
  ]);
  const data = [
    {
      id: '01',
      selectedColor: false,
      Category: 'Second Some Category',
    },
    {
      id: '02',
      Category: 'Second Some Category',

      selectedColor: false,
    },
    {
      id: '03',
      Category: 'Second Some Category',
      selectedColor: false,
    },
    {
      id: '04',
      Category: 'Second Some Category',
      selectedColor: false,
    },
    {
      id: '05',
      Category: 'Second Some Category',
      selectedColor: false,
    },
  ];
  const data2 = [
    {
      id: '10',
      Category: 'Second Some Category',
      selectedColor: false,
    },
    {
      id: '20',
      Category: 'Second Some Category',
      selectedColor: false,
    },
    {
      id: '30',
      Category: 'Second Some Category',
      selectedColor: false,
    },
    {
      id: '06',
      selectedColor: false,
      Category: 'Second Some Category',
    },
    {
      id: '07',
      Category: 'Second Some Category',

      selectedColor: false,
    },
    {
      id: '08',
      Category: 'Second Some Category',

      selectedColor: false,
    },
    {
      id: '09',
      Category: 'Second Some Category',

      selectedColor: false,
    },
  ];
  const data3 = [
    {
      id: '10',
      Category: 'Some Category',
      selectedColor: false,
    },
    {
      id: '20',
      Category: 'Some category',
      selectedColor: false,
    },
    {
      id: '30',
      Category: 'Computers',
      selectedColor: false,
    },
  ];
 
  return (
    <>
      {/* <KeyboardAwareScrollView> */}
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.headerTitleContainer}>
            {IsTablet ? (
              <CustomText
                label={t('item_information' )}
                textStyle={styles.headerTitle}
              />
            ) : (
              <View style={styles.HeaderMainViewMobile}>
                <View style={styles.greenCircleMobile}>
                  <Text style={styles.greenCircleTextMobile}>1</Text>
                </View>
                <CustomText
                  label={t('item_information')}
                  textStyle={styles.SecondaryHeadingTitle}
                />
              </View>
            )}
          </View>
          {IsTablet ? <View style={styles.divider} /> : null}
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
                {IsTablet ? (
                  <CustomText
                    label={52 + ' ' + t('Character_left')}
                    textStyle={styles.formTextHeading1}
                  />
                ) : null}
              </View>
            </View>
            <View style={styles.textInputContainer}>
              <CustomTextInput inputStyle={!IsTablet? styles.InputCntainerMobile : null } />
              {/* ToolTip Start */}

              <Tooltip
                contentStyle={
                  IsTablet
                    ? styles.ContainerToolTip
                    : styles.ContainerToolTipMobile
                }
                isVisible={showTip}
                content={
                  <Text
                    style={{
                      color: fonts.textWhite,
                      fontSize: 13,
                      fontFamily: fonts.LatoRegular,
                      color: colors.textWhite,
                    }}>
                    Didn’t find an appropriate Item Name? Contact us and we'll
                    add it! and we'll add it!
                  </Text>
                }
                onClose={() => setTip(false)}
                placement="bottom"
                showChildInTooltip={false}
                accessible={false}>
                <TouchableOpacity
                  style={
                    IsTablet
                      ? [
                          styles.TooltipButton,
                          {
                            backgroundColor:
                              showTip == true
                                ? colors.primary
                                : colors.blurPrimary,
                          },
                        ]
                      : [
                          styles.TooltipButtonMobile,
                          {
                            backgroundColor:
                              showTip == true
                                ? colors.primary
                                : colors.blurPrimary,
                          },
                        ]
                  }
                  onPress={() => setTip(true)}>
                  <AntDesign
                    name="question"
                    style={
                      IsTablet
                        ? [
                            styles.TooltipText,
                            {
                              color:
                                showTip == true
                                  ? colors.textWhite
                                  : colors.primary,
                            },
                          ]
                        : [
                            styles.TooltipTextMobile,
                            {
                              color:
                                showTip == true
                                  ? colors.textWhite
                                  : colors.primary,
                            },
                          ]
                    }
                  />
                </TouchableOpacity>
              </Tooltip>

              {/* ToolTip End */}
         
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
            <CustomTextInput inputTextStyle={{paddingHorizontal:2}} inputStyle={!IsTablet? styles.InputCntainerMobile : null } placeholderText={t('item_name')} />
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
            {/* RB Sheet Start */}

            <RBSheet
              ref={Sheet}
              animationType="slide"
              closeOnPressMask={true}
              closeOnDragDown={false}
              dragFromTopOnly
              height={windowWidth * 1.9}
              openDuration={250}
              customStyles={{
                container: {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  backgroundColor: colors.background,
                },
              }}>
              <View>
                <View style={styles.ContainerRbSheet}>
                  <TouchableOpacity onPress={() => setActive(false)}>
                    <Ionicons
                      name="ios-chevron-back-outline"
                      style={styles.BackRBSheet}
                    />
                  </TouchableOpacity>
                  <Text style={styles.TitleRBSheet}>
                    {active == false ? 'Category' : 'Second Category'}
                  </Text>
                  <TouchableOpacity onPress={() => Sheet.current.close()}>
                    <Text style={styles.cancelRBSheet}>Cancel</Text>
                  </TouchableOpacity>
                </View>
                <SearchBox
                  SearchBoxContainerCustomStyle={{width: '96%'}}
                  customStyle={{marginLeft: '2%', paddingVertical: '1%'}}
                />
                <View style={{marginVertical: '2%'}}>
                  {active == false ? (
                    <FlatList
                      data={data1}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          onPress={() => setActive(!active)}
                          style={[styles.catContainer, styles.RBSheetData]}>
                          <CustomText
                            label={item.Category}
                            textStyle={styles.categroyText}
                          />
                          <Icon
                            name="right"
                            type="antdesign"
                            size={18}
                            color={colors.textPrime}
                          />
                        </TouchableOpacity>
                      )}
                    />
                  ) : null}
                  {active == true ? (
                    <FlatList
                      data={data2}
                      keyExtractor={(item, index) =>index.toString()}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          onPress={() => setActive(!active)}
                          style={[styles.catContainer, styles.RBSheetData]}>
                          <CustomText
                            label={item.Category}
                            textStyle={styles.categroyText}
                          />
                          <Icon
                            name="right"
                            type="antdesign"
                            size={18}
                            color={colors.textPrime}
                          />
                        </TouchableOpacity>
                      )}
                    />
                  ) : null}
                </View>
              </View>
            </RBSheet>

            {/* RB Sheet End */}
            


            <View style={!IsTablet ? styles.Categorymobile : null}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  style={
                    IsTablet
                      ? styles.chooseCatgegoryContainer
                      : styles.chooseCatgegoryContainerMobile
                  }
                  activeOpacity={0.6}
                  onPress={() => {
                    IsTablet
                      ? setCategoryModal(!categoryModal)
                      : Sheet.current.open();
                  }}>
                  <CustomText
                    label={t('Choosecategory')}
                    textStyle={styles.chooseText}
                  />
                  <Icon name="caretdown" type="antdesign" size={16} />
                </TouchableOpacity>
               {/* ToolTip Start */}

                <Tooltip
                 contentStyle={
                 IsTablet
                    ? styles.ContainerToolTip
                    : styles.ContainerToolTipMobile
                }
                isVisible={showTip1}
                content={
                  <Text
                    style={{
                      color: fonts.textWhite,
                      fontSize: 13,
                      fontFamily: fonts.LatoRegular,
                      color: colors.textWhite,
                    }}>
                    Didn’t find an appropriate Item Name? Contact us and we'll
                    add it! and we'll add it!
                  </Text>
                }
                onClose={() => setTip1(false)}
                placement="bottom"
                showChildInTooltip={false}
                accessible={false}>
                <TouchableOpacity
                  style={
                    IsTablet
                      ? [
                          styles.TooltipButton,
                          {
                            backgroundColor:
                              showTip1 == true
                                ? colors.primary
                                : colors.blurPrimary,
                          },
                        ]
                      : [
                          styles.TooltipButtonMobile,
                          {
                            backgroundColor:
                              showTip1 == true
                                ? colors.primary
                                : colors.blurPrimary,
                          },
                        ]
                  }
                  onPress={() => setTip1(true)}>
                  <AntDesign
                    name="question"
                    style={
                      IsTablet
                        ? [
                            styles.TooltipText,
                            {
                              color:
                                showTip1 == true
                                  ? colors.textWhite
                                  : colors.primary,
                            },
                          ]
                        : [
                            styles.TooltipTextMobile,
                            {
                              color:
                                showTip1 == true
                                  ? colors.textWhite
                                  : colors.primary,
                            },
                          ]
                    }
                  />
                </TouchableOpacity>
              </Tooltip>
                 {/* /////Tol Tip End */}
              </View>
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
              onPress={() =>{IsTablet ? setBarCodeModal(!barcodeModal):  navigation.navigate('BarCodeScane');}}
              >
              <View style={IsTablet ? styles.barcodeContainer: styles.barcodeContainerMobile}>
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
            {!IsTablet ? 
            <CustomTextInput multiline={true}
             numberOfLines={5} inputStyle={!IsTablet? styles.InputCntainerMobile1 : null } />
        : null  }
          </View>
          {IsTablet ? (
            <View style={styles.nextButton}>
              <CustomButton text={t('Next_step')} onPress={onPress} />
            </View>
          ) : null}
        </View>
      </ScrollView>
      {!IsTablet ? (
      <CustomButton
        containerStyle={!IsTablet ? {height: 40, width: '90%'} : null}
        text={t('Next_step')}
        onPress={onPress}
      />
      ) : null}
      <CustomModal
        isModalVisible={categoryModal}
        setModalVisible={setCategoryModal}
        modalWrapperStyle={{
          marginHorizontal: 0,
          marginVertical: 0,
          marginLeft: '25%',
          justifyContent: 'flex-start',
        }}>
        <View style={{width: '100%', marginTop: 10}}>
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
                keyExtractor={(item, index) =>index.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => [setActive(true), setselectedColor(item.id)]}
                    style={[
                      styles.catContainer,
                      {
                        backgroundColor:
                          selectedColor == item.id
                            ? colors.primaryBlur
                            : colors.textWhite,
                      },
                    ]}>
                    <CustomText
                      label={item.Category}
                      textStyle={styles.categroyText}
                    />
                    <Icon
                      name="right"
                      type="antdesign"
                      size={18}
                      color={colors.textPrime}
                    />
                  </TouchableOpacity>
                )}
              />
            </ScrollView>
            <ScrollView style={styles.scrollViewCon}>
              {active == true ? (
                <FlatList
                  data={data1}
                  keyExtractor={(item, index) =>index.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => [
                        setSecond(!Second),
                        setSubCategory(item.id),
                      ]}
                      style={[
                        styles.catContainer,
                        {
                          backgroundColor:
                            SubCategory == item.id
                              ? colors.primaryBlur
                              : colors.textWhite,
                        },
                      ]}>
                      <CustomText
                        label={item.Category}
                        textStyle={styles.categroyText}
                      />
                      <Icon
                        name="right"
                        type="antdesign"
                        size={18}
                        color={colors.textPrime}
                      />
                    </TouchableOpacity>
                  )}
                />
              ) : null}
            </ScrollView>
            <ScrollView style={styles.scrollViewCon1}>
              {Second == true ? (
                <FlatList
                  data={data2}
                  keyExtractor={(item, index) =>index.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      // onPress={() => setThirdcategory()}
                      style={styles.catContainer}>
                      <CustomText
                        label={item.Category}
                        textStyle={styles.categroyText}
                      />
                      <Icon
                        name="right"
                        type="antdesign"
                        size={18}
                        color={colors.textPrime}
                      />
                    </TouchableOpacity>
                  )}
                />
              ) : (
                <View />
              )}
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
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setBarCodeModal(false)}>
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
    backgroundColor: IsTablet ? colors.textWhite : colors.profileBackground,
    marginLeft: '5@s',
    width: IsTablet ? '65%' : '99%',
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
    marginTop: '5@s',
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
    marginTop: '10@s',
  },
  barcodeContainer: {
    borderColor: colors.borderColor,
    borderWidth: '0.7@s',
    borderRadius: '3@s',
    padding: '5@s',
  },
  barcodeContainerMobile: {
    borderColor: colors.borderColor,
    borderWidth: '0.7@s',
    borderRadius: '3@s',
    padding: '5@s',
    padding: '7@s',
    height:'33@s',

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
    marginTop: '5@s',
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
    paddingHorizontal: IsTablet ? '2@s' : '5@s',
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
  chooseCatgegoryContainerMobile: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'transparent',
    // borderColor: colors.borderColor,
    // borderWidth: IsTablet ? '1@s': null,
    padding: '8@s',
    justifyContent: 'space-between',
    marginBottom: '5@s',
    width: '90%',
  },
  Categorymobile: {
    overflow: 'hidden',
    borderRadius: '4@s',
    backgroundColor: colors.dullWhite,
  },
  chooseText: {
    fontSize: '13@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textColorPrime,
  },
  HeaderMainViewMobile: {
    backgroundColor: colors.textWhite,
    height: '40@vs',
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: '10@s',
    elevation: 5,
    flexDirection: 'row',
    // justifyContent:'center'
    alignItems: 'center',
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
  ContainerToolTip: {
    flex: 1,
    backgroundColor: colors.primary,
    width: '100@s',
  },
  ContainerToolTipMobile: {
    flex: 1,
    backgroundColor: colors.primary,
    width: '170@s',
  },
  TooltipButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  TooltipButtonMobile: {
    height: '20@s',
    width: '20@s',
    borderRadius: 15,
    marginHorizontal: 4,
  },
  TooltipText: {
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 2,
  },
  TooltipTextMobile: {
    fontSize: '16@s',
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 2,
  },
  nextButton: {
    alignSelf: 'flex-end',
    margin: 20,
    marginBottom: 20,
  },
  ContainerRbSheet: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  BackRBSheet: {
    color: colors.black,
    fontSize: '20@s',
  },
  TitleRBSheet: {
    color: colors.black,
    fontSize: '17@s',
    fontFamily: fonts.LatoSemiBold,
  },
  cancelRBSheet: {
    color: colors.primary,
    fontSize: '16@s',
    fontFamily: fonts.LatoRegular,
  },
  RBSheetData: {
    marginHorizontal: '5%',
  },
  InputCntainerMobile:{
    // backgroundColor:'red',
    // paddingBottom:'4@s'
    height:'35@s'
  },
  InputCntainerMobile1:{
    // backgroundColor:'red',
    // paddingBottom:'4@s'
    height:'80@s',
    alignItems:'flex-start',
    padding:"5@s"
    
  },
  
});
