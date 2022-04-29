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
import { CustomButton } from '@SilalApp/common/components/native';
const Shipping = ({moveForward, goPrev}) => {
  const {t} = useTranslation();
  const [active, setActive] = useState(false);
  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.headerTitleContainer}>
          <CustomText label={t('Shipping')} textStyle={styles.headerTitle} />
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
        <View style={styles.divider} />
        <View style={{margin: 20}}>
          <CustomText
            label={t('packageDimension')}
            textStyle={styles.categoryRequired}
          />
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
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
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Checkbox color={'green.600'}>
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
        </View>
        <View style={styles.divider} />
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View style={{width: '25%'}}>
              <CustomText
                label={t('Delivery_time')}
                textStyle={styles.categoryRequired}
              />
            </View>

            <View style={{width: '25%'}}>
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
            <View style={{width: '25%'}}>
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

            <View style={{width: '25%'}}>
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
    borderRadius: '4@s',
    borderColor: colors.primary,
    borderWidth: '1@s',
    backgroundColor: 'transparent',
  },
  backText: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
  },
});
