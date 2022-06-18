import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
import CustomTextInput from '@SilalApp/common/components/native/TextInput';
import {Checkbox} from 'native-base';
import {CheckBox} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {CustomButton} from '@SilalApp/common/components/native';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import Tooltip from 'react-native-walkthrough-tooltip';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Shipping = ({moveForward, goPrev}) => {
  const {t} = useTranslation();
  const [active, setActive] = useState(false);
  const [checked, setchecked] = useState(false);
  return (
    <ScrollView
      style={IsTablet ? styles.mainContainer : styles.mainContainerMobile}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.headerTitleContainer}>
          {!IsTablet ? (
            <View style={styles.HeaderMainViewMobile}>
              <View style={styles.greenCircleMobile}>
                <Text style={styles.greenCircleTextMobile}>4</Text>
              </View>
              <CustomText
                label={t('Shipping')}
                textStyle={styles.SecondaryHeadingTitle}
              />
            </View>
          ) : (
            <CustomText label={t('Shipping')} textStyle={styles.headerTitle} />
          )}
        </View>
        <View style={styles.divider} />
        <View style={styles.textInputContainer}>
          <View style={{width: '90%', marginTop: 20}}>
            <CustomTextInput
              placeholderText={
                'Macbook Pro M1, Type-C Wall Charger, Type-C to Type-C Cable'
              }
              multiLine={true}
              inputTextStyle={styles.inputStyle}
              inputStyle={styles.mainStyleInput}
            />
          </View>

          <Tooltip
                contentStyle={
                  IsTablet
                    ? styles.ContainerToolTip
                    : styles.ContainerToolTipMobile
                }
                isVisible={active}
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
                onClose={() => setActive(false)}
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
                            active == true
                                ? colors.primary
                                : colors.blurPrimary,
                          },
                        ]
                      : [
                          styles.TooltipButtonMobile,
                          {
                            backgroundColor:
                            active == true
                                ? colors.primary
                                : colors.blurPrimary,
                          },
                        ]
                  }
                  onPress={() => setActive(true)}>
                  <AntDesign
                    name="question"
                    style={
                      IsTablet
                        ? [
                            styles.TooltipText,
                            {
                              color:
                              active == true
                                  ? colors.textWhite
                                  : colors.primary,
                            },
                          ]
                        : [
                            styles.TooltipTextMobile,
                            {
                              color:
                              active == true
                                  ? colors.textWhite
                                  : colors.primary,
                            },
                          ]
                    }
                  />
                </TouchableOpacity>
              </Tooltip>
                 {/* /////Tol Tip End */}
          {/* <TouchableOpacity
            activeOpacity={0.6}
            style={active ? styles.questionActive : styles.questionInActive}
            onPress={() => setActive(!active)}>
            <Icon
              name="question"
              type="antdesign"
              size={16}
              color={active ? colors.textWhite : colors.primary}
            />
          </TouchableOpacity> */}
        </View>
        <View style={styles.divider} />
        <View style={{margin: 20}}>
          <CustomText
            label={t('packageDimension')}
            textStyle={styles.categoryRequired}
          />
          <View
            style={IsTablet ?{flexDirection: 'row', alignItems: 'center', marginTop: 10}: {flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:'5%'}}>
            <View style={{width: '25%'}}>
              <CustomText
                label={t('Width')}
                textStyle={styles.categoryRequired}
              />
              <View style={{width: '90%', marginTop: 10}}>
                <CustomTextInput
                  placeholderText={'300'}
                  placeholderTextColor={colors.black}
                  keyboardType={'numeric'}
                />
              </View>
            </View>
            <View style={{width: '25%'}}>
              <CustomText
                label={t('Depth')}
                textStyle={styles.categoryRequired}
              />
              <View style={{width: '90%', marginTop: 10}}>
                <CustomTextInput
                  placeholderText={'300'}
                  placeholderTextColor={colors.black}
                  keyboardType={'numeric'}
                />
              </View>
            </View>
            <View style={{width: '25%'}}>
              <CustomText
                label={t('height')}
                textStyle={styles.categoryRequired}
              />
              <View style={{width: '90%', marginTop: 10, marginRight: 10}}>
                <CustomTextInput
                  placeholderText={'300'}
                  placeholderTextColor={colors.black}
                  keyboardType={'numeric'}
                />
              </View>
            </View>
          </View>
          <View style={{height: 25}} />
        </View>
        <View style={styles.divider} />

        <View style={styles.checkBoxContainer}>
          <CustomText
            label={t('item_qualities')}
            textStyle={styles.categoryRequired}
          />
          {!IsTablet ? (
            <View>
            <View style={styles.CheckBoxMobile}>
            <CheckBox
              checked={checked}
              onPress={() => setchecked(!checked)}
              checkedColor={colors.primary}
              uncheckedColor={colors.gray}
            />
             <CustomText
                  label={t('BreakAble')}
                  textStyle={styles.checkboxDetail}
                />
            </View>
             <View style={styles.CheckBoxMobile}>
             <CheckBox
               checked={checked}
               onPress={() => setchecked(!checked)}
               checkedColor={colors.primary}
               uncheckedColor={colors.gray}
             />
              <CustomText
                   label={t('FlameAble')}
                   textStyle={styles.checkboxDetail}
                 />
             </View>
              <View style={styles.CheckBoxMobile}>
              <CheckBox
                checked={checked}
                onPress={() => setchecked(!checked)}
                checkedColor={colors.primary}
                uncheckedColor={colors.gray}
              />
               <CustomText
                    label={t('Contain_liquid')}
                    textStyle={styles.checkboxDetail}
                  />
              </View>
              </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Checkbox
                tintColors={{true: '#F15927', false: 'black'}}
                color={'green.600'}>
                <CustomText
                  label={t('BreakAble')}
                  textStyle={styles.checkboxDetail}
                />
              </Checkbox>
              <Checkbox color={'green.600'}>
                <CustomText
                  label={t('FlameAble')}
                  textStyle={styles.checkboxDetail}
                />
              </Checkbox>
              <Checkbox color={'green.600'}>
                <CustomText
                  label={t('Contain_liquid')}
                  textStyle={styles.checkboxDetail}
                />
              </Checkbox>
            </View>
          )}
        </View>
        <View style={styles.divider} />
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View style={IsTablet ?{width: '25%'}: {width: '50%'}}>
              <CustomText
                label={t('Delivery_time')}
                textStyle={styles.categoryRequired}
              />
            </View>

            <View  style={IsTablet ?{width: '25%'}: {width: '50%'}}>
              <CustomText
                label={t('Package_weight')}
                textStyle={styles.categoryRequired}
              />
            </View>
          </View>
        </View>
        <View style={{margin: 20}}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View  style={IsTablet ?{width: '25%'}: {width: '50%'}}>
              <CustomText
                label={t('days')}
                textStyle={styles.categoryRequired}
              />
              <View style={{width: '90%', marginTop: 10}}>
                <CustomTextInput
                  placeholderText={'300'}
                  placeholderTextColor={colors.black}
                  keyboardType={'numeric'}
                />
              </View>
            </View>

            <View  style={IsTablet ?{width: '25%'}: {width: '50%'}}>
              <CustomText label={t('Kg')} textStyle={styles.categoryRequired} />
              <View style={{width: '90%', marginTop: 10, marginRight: 10}}>
                <CustomTextInput
                  placeholderText={'300'}
                  placeholderTextColor={colors.black}
                  keyboardType={'numeric'}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
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
          ) : 
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
      }
    </ScrollView>
  );
};

export default Shipping;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.textWhite,
    marginLeft: '5@s',
    width: '65%',
    borderRadius: '4@s',
    marginBottom: '10@s',
  },
  mainContainerMobile: {
    backgroundColor: colors.profileBackground,
    marginLeft: '5@s',
    width: '97%',
    // borderRadius: '4@s',
    marginBottom: '10@s',
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
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    margin: '10@s',
  },
  checkboxDetail: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
    marginLeft: '5@ms',
    marginRight: '10@ms',
  },
  inputStyle: {
    fontSize: '14@ms',
  },
  mainStyleInput: {
    height: '60@s',
    alignItems: 'flex-start',
  },
  questionInActive: {
    backgroundColor: colors.primaryBlur,
    borderRadius: '99@s',
    padding: '3@s',
    marginLeft: '5@s',
  },
  checkBoxContainer: {
    margin: '10@s',
  },
  questionActive: {
    backgroundColor: colors.primary,
    borderRadius: '99@s',
    padding: '3@s',
    marginLeft: '5@s',
  },
  categoryRequired: {
    fontFamily: fonts.LatoSemiBold,
    fontSize: '10@ms',
    color: colors.textPrime,
    textTransform: 'uppercase',
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
  backText: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
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
  CheckBoxMobile:{
    flexDirection:'row',alignItems:'center'
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
});
