import {View, Image} from 'react-native';
import React from 'react';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import colors from '@SilalApp/common/assets/colors';
import CustomButton from '@SilalApp/common/components/native/CustomButton';
import fonts from '@SilalApp/common/assets/fonts';
const Item = ({heading, withLabel, text1, text2, editPress, imgPath}) => {
  return (
    <View style={styles.mainContainer}>
      <CustomText
        label={withLabel}
        fontSize={verticalScale(11)}
        fontFamily={fonts.LatoBold}
        color={colors.textPrime}
        marginBottom={verticalScale(5)}
      />
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={imgPath} />
        </View>
        <View>
          <CustomText label={heading} textStyle={styles.heading} />
          <CustomText label={text1} textStyle={styles.detail} />
          <CustomText label={text2} textStyle={styles.detail} />
          <CustomButton
            onPress={editPress}
            containerStyle={styles.btn}
            textStyle={styles.btnText}
            text="Edit"
          />
        </View>
      </View>
    </View>
  );
};

export default Item;

const styles = ScaledSheet.create({
  mainContainer: {
    marginBottom: '20@vs',
  },
  container: {
    backgroundColor: colors.textWhite,
    elevation: 1,
    borderRadius: '8@vs',
    padding: '12@vs',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgContainer: {
    width: '100@vs',
    height: '100@vs',
    borderRadius: '6@vs',
    marginRight: '15@s',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  heading: {
    fontSize: '12@vs',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
  },
  detail: {
    fontSize: '11@vs',
    color: colors.textPrimary,
    fontFamily: fonts.LatoMedium,
    marginTop: '4@vs',
  },
  btn: {
    width: '90@s',
    height: '25@vs',
    borderRadius: '100@vs',
    backgroundColor: colors.blurPrimary,
    alignSelf: 'flex-start',
    marginTop: '10@vs',
  },
  btnText: {
    color: colors.primary,
    fontSize: '13@vs',
    marginTop: -2,
  },
});
