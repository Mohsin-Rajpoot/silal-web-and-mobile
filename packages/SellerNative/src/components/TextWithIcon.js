import {Image, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '@SilalApp/common/components/CustomText';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import images from '../Assets';
import Svg,{Rect,Path} from 'react-native-svg';
const TextWithIcon = ({
  label,
  iconDelete,
  textStyle,
  onPress,
  iconStyle,
  customStyle,
}) => {
  return (
    <View style={[customStyle ? customStyle : styles.mainContainer]}>
      <View style={styles.container}>
        {iconDelete && (
          <Image style={styles.icon} source={require('../Assets/remove.png')} />
        )}
         {/* <Svg width="24" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Rect width="24" height="24" fill="white" fill-opacity="0.01"/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M6.485 17.669C6.67073 17.8548 6.89124 18.0022 7.13395 18.1028C7.37665 18.2033 7.63679 18.2551 7.8995 18.2551C8.16221 18.2551 8.42235 18.2033 8.66506 18.1028C8.90776 18.0022 9.12827 17.8548 9.314 17.669L6.485 14.839C6.29905 15.0247 6.15153 15.2453 6.05088 15.4881C5.95023 15.7309 5.89843 15.9912 5.89843 16.254C5.89843 16.5168 5.95023 16.7771 6.05088 17.0199C6.15153 17.2627 6.29905 17.4833 6.485 17.669ZM11.382 5.478L10.657 6.203C9.875 6.985 8.447 8.016 7.451 8.514L4.434 10.023C3.939 10.271 3.85 10.797 4.247 11.194L12.803 19.75C13.201 20.146 13.725 20.063 13.974 19.562L15.484 16.546C15.978 15.558 17.01 14.126 17.795 13.34L18.52 12.614C19.3432 11.7908 19.8566 10.7084 19.9733 9.55011C20.0899 8.39179 19.8026 7.22876 19.16 6.258C19.2675 6.17183 19.3563 6.06457 19.4208 5.94281C19.4854 5.82106 19.5243 5.68738 19.5353 5.55002C19.5462 5.41265 19.5289 5.2745 19.4845 5.14406C19.44 5.01363 19.3694 4.89366 19.2768 4.79156C19.1843 4.68945 19.0718 4.60736 18.9464 4.55034C18.8209 4.49331 18.6851 4.46257 18.5474 4.45999C18.4096 4.4574 18.2727 4.48304 18.1452 4.53533C18.0177 4.58761 17.9023 4.66543 17.806 4.764C17.783 4.789 17.76 4.813 17.74 4.839C16.9135 4.29096 15.9437 3.99877 14.952 3.999C14.2889 3.9982 13.6322 4.12836 13.0196 4.38199C12.407 4.63563 11.8505 5.00775 11.382 5.477V5.478Z" fill="#42526E"/>
</Svg> */}
        <CustomText textStyle={[styles.text, textStyle]} label={label} />
      </View>
      {iconDelete ? (
        <View />
      ) : (
        <TouchableOpacity onPress={onPress}>
          <Entypo
            style={[iconStyle ? iconStyle : styles.rightIcon]}
            name="chevron-right"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextWithIcon;

const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20@vs',
    backgroundColor: colors.textWhite,
    padding: '10@ms',
    borderRadius: '5@ms',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: '22@ms',
    height: '22@ms',
    resizeMode: 'contain',
    borderRadius: '100@ms',
  },
  text: {
    fontSize: '15@ms',
    fontWeight: '400',
    color: colors.black,
    paddingLeft: '5@s',
    fontFamily: fonts.LatoRegular,
  },
  rightIcon: {
    fontSize: '18@ms',
    color: colors.black,
  },
});
