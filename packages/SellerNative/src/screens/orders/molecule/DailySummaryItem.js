import {Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '@SilalApp/common/assets/colors';
import CustomText from '@SilalApp/common/components/CustomText';
import CustomButton from '@SilalApp/common/components/native/CustomButton';
import fonts from '@SilalApp/common/assets/fonts';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {CheckBox} from 'react-native-elements';

const DailySummaryItem = ({
  withLabel,
  firstViewText1,
  firstViewText2,
  secondViewText1,
  secondViewText2,
  firstBtnText,
  secondBtnText,
  firstCheckBoxText,
  secondCheckBoxText,
  thirdCheckBoxText,
}) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <View style={styles.mainContainer}>
      {withLabel && (
        <CustomText
          label={withLabel}
          marginBottom={verticalScale(5)}
          fontFamily={fonts.LatoBold}
          fontSize={16}
        />
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {firstViewText1 && (
          <View style={styles.firstView}>
            <CustomText
              label={firstViewText1}
              fontSize={18}
              fontFamily={fonts.LatoBold}
            />
            <CustomText
              label={firstViewText2}
              fontSize={15}
              color={colors.textPrimeColor}
            />
          </View>
        )}
        {secondViewText1 && (
          <View style={styles.firstView}>
            <CustomText
              label={secondViewText1}
              fontSize={18}
              fontFamily={fonts.LatoBold}
            />
            <CustomText
              label={secondViewText2}
              fontSize={15}
              color={colors.textPrimeColor}
            />
          </View>
        )}
      </View>
      {firstBtnText && (
        <CustomButton
          textStyle={styles.btnText}
          text={firstBtnText}
          containerStyle={styles.firstBtn}
        />
      )}
      {secondBtnText && (
        <CustomButton
          textStyle={[styles.btnText, {color: colors.primary}]}
          text="Go to the out of stock table"
          containerStyle={[
            styles.firstBtn,
            {backgroundColor: colors.primaryGreen},
          ]}
        />
      )}
      {firstCheckBoxText && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginLeft: scale(-15)}}>
            <CheckBox
              checked={checked1}
              onPress={() => setChecked1(!checked1)}
              checkedColor="#5AB3A8"
              uncheckedColor="#CCD4D6"
            />
          </View>
          <CustomText
            fontSize={15}
            fontFamily={fonts.LatoMedium}
            marginLeft={scale(-8)}
            label={firstCheckBoxText}
            textStyle={{width: scale(250)}}
          />
        </View>
      )}
      {secondCheckBoxText && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginLeft: scale(-15)}}>
            <CheckBox
              checked={checked2}
              onPress={() => setChecked2(!checked2)}
              checkedColor="#5AB3A8"
              uncheckedColor="#CCD4D6"
            />
          </View>
          <CustomText
            fontSize={15}
            fontFamily={fonts.LatoMedium}
            marginLeft={scale(-8)}
            label={secondCheckBoxText}
            textStyle={{width: scale(250)}}
          />
        </View>
      )}
      {thirdCheckBoxText && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginLeft: scale(-15)}}>
            <CheckBox
              checked={checked3}
              onPress={() => setChecked3(!checked3)}
              checkedColor="#5AB3A8"
              uncheckedColor="#CCD4D6"
            />
          </View>
          <CustomText
            fontSize={15}
            fontFamily={fonts.LatoMedium}
            marginLeft={scale(-8)}
            label={thirdCheckBoxText}
            textStyle={{width: scale(250)}}
          />
        </View>
      )}
    </View>
  );
};

export default DailySummaryItem;

const styles = ScaledSheet.create({
  mainContainer: {
    padding: '15@vs',
    backgroundColor: colors.textWhite,
    elevation: 0.5,
    borderRadius: '12@vs',
    marginBottom: '15@vs',
  },
  firstView: {
    width: '48%',
    height: '64@vs',
    backgroundColor: colors.background,
    borderRadius: '8@vs',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '8@vs',
  },
  firstBtn: {
    width: '100%',
    height: '45@vs',
    marginBottom: 0,
    marginTop: '10@vs',
    borderRadius: '8@vs',
  },
  btnText: {
    fontSize: '12@vs',
  },
  checkBox: {
    width: '15@vs',
    height: '15@vs',
    backgroundColor: 'red',
    borderRadius: 4,
    marginRight: '12@s',
  },
});
