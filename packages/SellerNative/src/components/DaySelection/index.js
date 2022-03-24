import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import ToggleSwitch from 'toggle-switch-react-native';
import fonts from '@SilalApp/common/assets/fonts';
import colors from '@SilalApp/common/assets/colors';
import { ScaledSheet } from 'react-native-size-matters';
const index = ({day}) => {
  const [active, setActive] = useState(false);
  return (
    <View style={styles.daySelectContainer}>
      <CustomText label={day} textStyle={[active ? styles.dayTextActive : styles.dayText]} />
      <ToggleSwitch
        isOn={active}
        onColor={colors.light_green}
        offColor={colors.light_grey}
        labelStyle={{color: 'black', fontWeight: '900'}}
        size="large"
        onToggle={() => setActive(!active)}
      />
    </View>
  );
};

export default index;

const styles = ScaledSheet.create({
  daySelectContainer: {
    flexDirection: 'row',
    alignItems:'flex-start',
    width:'45%',
    margin:10,
    justifyContent:'space-between',
   
  },
  dayText: {
    fontSize: '13@ms',
    fontFamily: fonts.LatoMedium,
    color: colors.light_grey,
    marginHorizontal:15
  },
  dayTextActive: {
    fontSize: '13@ms',
    fontFamily: fonts.LatoMedium,
    color: colors.black,
    marginHorizontal:15
  },
});
