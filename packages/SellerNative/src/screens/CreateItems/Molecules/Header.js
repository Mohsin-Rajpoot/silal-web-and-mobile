import {View, Text} from 'react-native';
import React from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import styles from '../style';
import {useTranslation} from 'react-i18next';
const Header = ({
  label,
  textStyle,
  active,
  page,
  textStyleInActive,
  pageNumber,
}) => {
  const {t} = useTranslation();
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.tabTitleContainer}>
        <View
          style={[
            active >= page
              ? styles.numberContainer
              : styles.numberContainerInactive,
          ]}>
          <CustomText label={pageNumber} textStyle={styles.numberText} />
        </View>
        <CustomText
          label={t(label)}
          textStyle={[
            active >= page ? styles.textStyle : styles.textStyleInActive,
          ]}
        />
      </View>
      {page == 4 ? (
        <View />
      ) : (
        <View
          style={[
            active >= page
              ? styles.SignformHeader
              : styles.SignUpHeaderInactive,
          ]}
        />
      )}
    </View>
  );
};

export default Header;
