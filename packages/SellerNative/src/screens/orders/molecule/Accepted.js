import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import fonts from '@SilalApp/common/assets/fonts';
import colors from '@SilalApp/common/assets/colors';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';

const Accepted = ({change, setActiveTab, activeTab}) => {
  const {t} = useTranslation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() =>
        change
          ? setActiveTab(1)
          : activeTab == 2
          ? setActiveTab(0)
          : setActiveTab(2)
      }
      style={[
        styles.mainContainer,
        {backgroundColor: change ? colors.textPrimeColor : colors.boxBg},
      ]}>
      <View style={styles.headerTextCont}>
        <CustomText
          label={
            change
              ? t('Ready')
              : activeTab == 0
              ? t('received')
              : t('Accepted')
          }
          fontSize={verticalScale(14)}
          fontFamily={fonts.LatoBold}
          color={change ? colors.textWhite : colors.black}
        />
        <View style={styles.headerNumberCont}>
          <CustomText
            label="4"
            fontSize={verticalScale(12)}
            fontFamily={fonts.LatoBold}
            color={colors.textWhite}
          />
        </View>
      </View>
      <View
        style={[
          styles.clockCont,
          {backgroundColor: change ? colors.primary : colors.textWhite},
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            type="feather"
            size={verticalScale(16)}
            name="clock"
            color={change ? colors.textWhite : colors.textColor}
          />
          <CustomText
            fontSize={verticalScale(13)}
            fontFamily={fonts.LatoBold}
            color={change ? colors.textWhite : colors.textColor}
            marginLeft={scale(5)}
            label="19:43 min"
          />
        </View>
        <CustomText
          fontSize={verticalScale(13)}
          fontFamily={change ? fonts.LatoRegular : fonts.LatoBold}
          color={change ? colors.gray70 : colors.black}
          label="#247hw9"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Accepted;

const styles = ScaledSheet.create({
  mainContainer: {
    width: '48%',
    borderRadius: '12@vs',
    padding: '12@vs',
    marginVertical: '10@vs',
  },
  headerTextCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10@vs',
  },
  headerNumberCont: {
    width: '28@vs',
    height: '28@vs',
    backgroundColor: colors.red20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100@vs',
  },
  clockCont: {
    height: '65@vs',
    borderRadius: '8@vs',
    padding: '10@vs',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
