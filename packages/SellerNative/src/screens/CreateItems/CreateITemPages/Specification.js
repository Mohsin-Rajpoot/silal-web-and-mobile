import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Tooltip from 'react-native-walkthrough-tooltip';
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
import {CheckBox} from 'react-native-elements';
const Specification = ({moveForward, goPrev}) => {
  const {t} = useTranslation();

  const [active, setActive] = useState(false);
  const [customField, setCustomField] = useState(false);
  const navigation = useNavigation();
  const [showTip1, setTip1] = useState(false);
  const [showTip, setTip] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selected_index, set_selected_index] = useState('');
  const [CombinationModal, setCombinationModal] = useState(false);
  const setcheck = index => {
    console.log(index, 'Harris Saleem');
    const val = data[index];
    val.checked = !val.checked;
    data[index] = val;
    setTimeout(() => {
      setData(data);
      setTimeout(() => {
        setLoader(!loader);
      }, 100);
    }, 200);
  };

  const ModelData = [
    {id: 0},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
  ];
  var [data, setData] = useState([
    {
      id: '1',
      Title: 'Embedded Software Engineer',
      SubTitle: 'Newyork',
      year: '22/03/2022',
      image: require('../../../Assets/image8.png'),
      checked: false,
    },
    {
      id: '2',
      Title: 'Web Developer',
      SubTitle: 'Lahore',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '3',
      Title: 'Embedded Software Engineer',
      SubTitle: 'USA',
      year: '22/03 /2022',
      checked: false,
    },
    {
      id: '4',
      Title: 'Embedded Software Engineer',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '5',
      Title: 'Embedded Software last',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '6',
      Title: 'Embedded Software last',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '7',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '8',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '9',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
    {
      id: '10',
      Title: 'Embedded Software full last',
      SubTitle: 'USA',
      year: '22/03/2022',
      checked: false,
    },
  ]);

  const header_alloredrs = () => {
    return (
      <View style={styles.all_orders_header}>
        <View style={[styles.all_orders, {width: '5%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('Valid')}</Text>
        </View>
        <View style={[styles.all_orders, {width: '20%'}]}>
          <Text style={[styles.all_orders_heading_txt, {marginLeft: '15%'}]}>
            {t('Capacity')}
          </Text>
        </View>
        <View style={[styles.all_orders, {width: '14%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('Color')}</Text>
        </View>
        <View style={[styles.all_orders, {width: '14%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('HDR')}</Text>
        </View>
        <View
          style={[
            styles.all_orders,
            {
              width: '16%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingLeft: '5%',
            },
          ]}>
          <Text style={[styles.all_orders_heading_txt]}>{t('Price')}</Text>
          {/* ToolTip Start */}

          <Tooltip
            contentStyle={styles.ContainerToolTip}
            isVisible={showTip}
            content={
              <Text
                style={{
                  color: fonts.textWhite,
                  fontSize: 13,
                  fontFamily: fonts.LatoRegular,
                  color: colors.textWhite,
                }}>
                Didn’t find an appropriate Item Name? Contact us and we'll add
                it! and we'll add it!
              </Text>
            }
            onClose={() => setTip(false)}
            placement="bottom"
            showChildInTooltip={false}
            accessible={false}>
            <TouchableOpacity
              style={[
                styles.TooltipButton,
                {
                  backgroundColor:
                    showTip == true ? colors.primary : colors.blurPrimary,
                },
              ]}
              onPress={() => setTip(true)}>
              <AntDesign
                name="question"
                style={[
                  styles.TooltipText,
                  {
                    color: showTip == true ? colors.textWhite : colors.primary,
                  },
                ]}
              />
            </TouchableOpacity>
          </Tooltip>
          {/* /////Tol Tip End */}
        </View>
        <View style={[styles.all_orders, {width: '15%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('Image')}</Text>
        </View>
        <View style={[styles.all_orders, {width: '12%', paddingRight: '2%'}]}>
          <Text style={styles.all_orders_heading_txt}>{t('In Stock')}</Text>
        </View>
      </View>
    );
  };

  const render_all_oredrs = (item, index) => {
    return (
      <View>
        <View
          style={[
            styles.render_all_orders,
            {
              backgroundColor:
                index == selected_index ? colors.blurPrimary : colors.textWhite,
            },
          ]}>
          <View style={{right: 25}}>
            <CheckBox
              checked={
                item.checked == true || item.checked == 'true' ? true : false
              }
              onPress={() => setcheck(index)}
              checkedColor={colors.primary}
              uncheckedColor={colors.light_grey}
            />
          </View>

          <View
            style={[
              styles.render_all_order_single,
              {
                justifyContent: 'flex-start',
                flexDirection: 'row',
                right: 20,
              },
            ]}>
            <Text style={{fontFamily: fonts.LatoRegular}}>256GB</Text>
          </View>

          <View
            style={[
              styles.render_all_order_single,
              {
                width: '10%',
                justifyContent: 'flex-start',
                flexDirection: 'row',
              },
            ]}>
            <Text style={{}}>Space Gray</Text>
          </View>

          <View style={[styles.render_all_order_single, styles.HdrText]}>
            <Text style={{fontFamily: fonts.LatoRegular, fontSize: 15}}>
              Yes
            </Text>
          </View>

          <View
            style={[
              styles.render_all_order_single,
              {
                width: '10%',
                backgroundColor: colors.textWhite,
                borderRadius: 5,
              },
            ]}>
            <Text style={{fontFamily: fonts.LatoRegular, color: colors.black}}>
              1000 $
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setCombinationModal(true)}
            style={[styles.render_all_order_single, styles.ImageViewInTable]}>
            <Image
              source={require('../../../Assets/Dress.png')}
              style={{height: 40, width: 40, resizeMode: 'contain'}}
            />
          </TouchableOpacity>

          <View style={{}}>
            <CheckBox
              checked={
                item.checked == true || item.checked == 'true' ? true : false
              }
              onPress={() => setcheck(index)}
              checkedColor={colors.primary}
              uncheckedColor={colors.light_grey}
            />
          </View>
        </View>
      </View>
    );
  };

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
                  label={IsTablet ? t('Combination Table') : t('specification')}
                  textStyle={styles.headerTitle}
                  container={{flexDirection: 'column', alignItems: 'center'}}
                />
                {/* ToolTip Start */}

                <Tooltip
                  contentStyle={styles.ContainerToolTip}
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
                    style={[
                      styles.TooltipButton,
                      {
                        backgroundColor:
                          showTip1 == true
                            ? colors.primary
                            : colors.blurPrimary,
                      },
                    ]}
                    onPress={() => setTip1(true)}>
                    <AntDesign
                      name="question"
                      style={[
                        styles.TooltipText,
                        {
                          color:
                            showTip1 == true
                              ? colors.textWhite
                              : colors.primary,
                        },
                      ]}
                    />
                  </TouchableOpacity>
                </Tooltip>
                {/* /////Tol Tip End */}
              </View>
            )}
          </View>
          {IsTablet ? <View style={styles.divider} /> : null}
          <View style={styles.InnerContainer}>
            <CustomText
              label={
                IsTablet
                  ? t(
                      'All Combinations of attributes that have multiple values',
                    )
                  : t('Category_Required')
              }
              textStyle={styles.categoryRequired}
              container={{marginVertical: '2%'}}
            />

            {!IsTablet ? (
              <View>
                <CustomText label={t('Brand')} textStyle={styles.inputTitle} />
                <View style={{zIndex: 1}}>
                  <View style={styles.MainRowContainer}>
                    <View
                      style={
                        IsTablet ? {width: '90%'} : styles.ColorMobileView
                      }>
                      <DropDown
                        CustomtextStyle={{zIndex: 10}}
                        multiple={true}
                        DropDownCustomStyle={styles.dropSSd}
                        placeholder="Apple"
                      />
                    </View>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('CustomValue')}
                      style={styles.plusContainerMobile}>
                      <Icon
                        name="plus"
                        type="antdesign"
                        color={colors.primary}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <CustomText label={t('Color')} textStyle={styles.inputTitle} />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.ColorMobileView}>
                    <MultiSelectDropDown
                      CustomDropdownStyle={styles.DropDownMobileCustom}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CustomValue')}
                    style={styles.plusContainerMobile1}>
                    <Icon name="plus" type="antdesign" color={colors.primary} />
                  </TouchableOpacity>
                </View>
                <View style={{zIndex: 1}}>
                  <CustomText
                    label={t('Screen_size')}
                    textStyle={styles.inputTitle1}
                  />
                  <View style={styles.MainRowContainer}>
                    <View style={styles.ColorMobileView}>
                      <DropDown
                        CustomtextStyle={{zIndex: 10}}
                        multiple={true}
                        DropDownCustomStyle={styles.dropSSd}
                        placeholder="15.3"
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('CustomValue')}
                      style={[styles.plusContainerMobile]}>
                      <Icon
                        name="plus"
                        type="antdesign"
                        color={colors.primary}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <CustomText
                  label={t('Capacity')}
                  textStyle={styles.inputTitle}
                />
                <View style={styles.MainRowContainer}>
                  <View
                    style={IsTablet ? {width: '90%'} : styles.ColorMobileView}>
                    <MultiSelectDropDown
                      CustomDropdownStyle={styles.DropDownMobileCustom}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CustomValue')}
                    style={styles.plusContainerMobile1}>
                    <Icon name="plus" type="antdesign" color={colors.primary} />
                  </TouchableOpacity>
                </View>
                <View style={{zIndex: 1}}>
                  <CustomText
                    label={t('StorageType')}
                    textStyle={styles.inputTitle}
                  />
                  <View style={styles.MainRowContainer}>
                    <View style={styles.ColorMobileView}>
                      <DropDown
                        DropDownCustomStyle={styles.dropSSd}
                        placeholder="SSD"
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('CustomValue')}
                      style={[styles.plusContainerMobile, {marginTop: 10}]}>
                      <Icon
                        name="plus"
                        type="antdesign"
                        color={colors.primary}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <CustomText
                    label={t('display')}
                    textStyle={styles.inputTitle}
                  />
                  <View style={styles.MainRowContainer}>
                    <View style={styles.customRadioOne} />
                    <CustomText label={t('yes')} textStyle={styles.yesText} />
                  </View>
                  <View style={styles.MainRowContainer}>
                    <View style={styles.customRadioInActive} />
                    <CustomText label={t('no')} textStyle={styles.yesText} />
                  </View>
                  <View style={styles.MainRowContainer}>
                    <View style={styles.customRadioInActive} />
                    <CustomText label={t('Both')} textStyle={styles.yesText} />
                  </View>
                </View>

                <CustomText
                  label={t('Capacity')}
                  textStyle={styles.inputTitle}
                />
                <View style={styles.MainRowContainer}>
                  <View style={styles.ColorMobileView}>
                    <MultiSelectDropDown
                      CustomDropdownStyle={styles.DropDownMobileCustom}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CustomValue')}
                    style={styles.plusContainerMobile2}>
                    <Icon name="plus" type="antdesign" color={colors.primary} />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  onPress={() => setCustomField(!customField)}
                  style={styles.CreateFieldsContainer}>
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
              </View>
            ) : (
              <View>
                {header_alloredrs()}
                <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={data}
                  renderItem={({item, index}) => render_all_oredrs(item, index)}
                />
              </View>
            )}
          </View>

          <View style={!IsTablet ? styles.divider : null} />
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
          ) : (
            <View style={styles.buttonContainer}>
              <CustomButton
                text={t('back')}
                containerStyle={styles.backContainer}
                textStyle={styles.backText}
                onPress={goPrev}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CustomButton
                  text={t('Next_step')}
                  textStyle={styles.nextStep}
                  onPress={moveForward}
                />
              </View>
            </View>
          )}

          <View style={{height: 20, width: '100%'}} />
        </View>
      </ScrollView>
      {/* Tab Image Modal Start */}
      <CustomModal
        isModalVisible={CombinationModal}
        setModalVisible={setCombinationModal}
        modalWrapperStyle={styles.CombinationModal_ModalContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '30%'}}>
            <Image
              style={{height: 200, width: 200}}
              resizeMode={'contain'}
              source={require('../../../Assets/download.png')}
            />
          </View>
          <View style={{}}>
          <FlatList
            data={ModelData}
            numColumns={4}
            renderItem={({item}) => (
              <View style={styles.FlatListMainView}>
                <TouchableOpacity style={{borderColor:'red',borderWidth:2,backgroundColor:colors.ImageBack}}>
                <Image
                  style={{height: 90, width: 80}}
                  source={require('../../../Assets/download.png')}
                />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
          </View>
        </View>
      </CustomModal>

      {/* tab Image Modal End */}
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
    width: IsTablet ? '97%' : '93%',
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
  },
  headerTitleContainer: {
    margin: '10@s',
    paddingTop: '5@s',
  },
  headerTitle: {
    fontSize: '13@ms',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  questionInActive: {
    backgroundColor: colors.blurPrimary,
    marginLeft: '5@s',
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
  inputTitle1: {
    fontSize: '10@ms',
    fontFamily: fonts.bold,
    color: colors.textPrime,
    paddingBottom: '5@s',
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
    marginVertical: '10@s',
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
  backText: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
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
    borderRadius: '4@s',
    height: '45@s',
    width: '43@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusContainerMobile2: {
    backgroundColor: colors.blurPrimary,
    marginHorizontal: '10@s',
    borderRadius: '4@s',
    height: '45@s',
    width: '43@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15@s',
  },
  plusContainerMobile1: {
    backgroundColor: colors.blurPrimary,
    marginHorizontal: '10@s',
    // padding: '8@s',
    borderRadius: '4@s',
    height: '45@s',
    width: '43@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '16@s',
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
    marginVertical: 10,
  },
  barCodeModalContainer: {
    width: '100%',
    padding: '5@s',
    height: '91%',
    marginTop: '10@s',
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

  ColorMobileView: {
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
    height: '20@vs',
    marginBottom: '17@s',
    // zIndex:1
  },
  BackbottomButtonContainerMobile: {
    backgroundColor: colors.blurPrimary,
    height: '43@s',
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
  CombinationModal_ModalContainer: {
    marginHorizontal: 0,
    marginVertical: 0,
    marginLeft: '38%',
    justifyContent: 'flex-start',
    paddingVertical: '1%',
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
  MainRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CreateFieldsContainer: {
    backgroundColor: colors.blurPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    marginVertical: '5%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  // ///////
  render_all_orders: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  render_all_order_single: {
    height: '30@vs',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  all_orders_header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 50,
    backgroundColor: '#F2F4F5',
    padding: 10,
    marginVertical: 8,
  },
  all_orders: {
    backgroundColor: '#F2F4F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  all_orders_heading_txt: {
    fontFamily: fonts.LatoBold,
    color: colors.black,
    fontSize: '9@vs',
  },
  ContainerToolTip: {
    flex: 1,
    backgroundColor: colors.primary,
    width: '100@s',
  },
  TooltipButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  TooltipText: {
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 2,
  },
  ImageViewInTable: {
    width: 55,
    height: 55,
    marginTop: 5,
    borderColor: colors.black,
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 20,
  },
  HdrText: {
    width: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  FlatListMainView:{
    paddingHorizontal:'2%',
    paddingVertical:'1%'
  }
});
