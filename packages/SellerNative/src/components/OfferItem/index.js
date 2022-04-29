import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import CustomText from '@SilalApp/common/components/CustomText';
import fonts from '@SilalApp/common/assets/fonts';
import colors from '@SilalApp/common/assets/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import TextInput from '@SilalApp/common/components/native/TextInput';
import {useTranslation} from 'react-i18next';
import images from '../../Assets';
const index = () => {
  const {t} = useTranslation();
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <View style={styles.outerMainContainer}>
      <CustomText label={t('mainItem')} textStyle={styles.title} />
      <View style={styles.itemMainContainer}>
        <Image
          source={images.image12}
          style={styles.itemImage}
          resizeMode="cover"
        />

        <View>
          <View style={styles.itemSelection}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Burger Cheese Burger"
              style={styles.dropDownStyle}
              placeholderStyle={styles.dropDownPlaceHolder}
              dropDownContainerStyle={styles.dropdownContainer}
              iconContainerStyle={{backgroundColor: 'red'}}
            />
            <CustomText label="$ 1.00" textStyle={styles.price} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.quantityContainer}>
              <CustomText
                label={t('MinQuantity')}
                textStyle={styles.quantity}
              />
              <TextInput
                inputStyle={styles.input}
                placeholderText={'2'}
                placeholderTextColor={colors.black}
              />
            </View>
            <View style={styles.quantityContainer}>
              <CustomText
                label={t('initialPrice')}
                textStyle={styles.quantity}
              />
              <TextInput
                inputStyle={styles.input1}
                placeholderText={'$ 1.50'}
                placeholderTextColor={colors.black}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.quantityContainer}>
              <CustomText
                label={t('priceEffect')}
                textStyle={styles.quantity}
              />
              <TextInput
                inputStyle={styles.input}
                placeholderText={'-33%'}
                placeholderTextColor={colors.black}
              />
            </View>
            <View style={styles.quantityContainer}>
              <CustomText label={t('NewPrice')} textStyle={styles.quantity} />
              <TextInput
                inputStyle={styles.input1}
                placeholderText={'$ 1.00'}
                placeholderTextColor={colors.black}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = ScaledSheet.create({
  outerMainContainer: {
    borderBottomColor: colors.light_grey,
    borderBottomWidth: '0.6@s',
  },
  itemMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
    margin: '5@s',
  },
  itemImage: {
    borderRadius: '3@s',
    height: '180@ms',
    width: '25%',
    alignSelf: 'center',
  },
  quantityContainer: {
    marginHorizontal: '10@ms',
    marginVertical: '5@ms',
    width: '40%',
  },
  dropDownStyle: {
    borderBottomColor: colors.light_grey,
    borderBottomWidth: '0.5@ms',
    borderColor: 'transparent',
    borderRadius: '0@s',
    width: '50%',
    margin: '5@ms',
    marginHorizontal: '10@ms',
  },
  dropdownContainer: {
    width: '40%',
    margin: '5@ms',
    marginHorizontal: '10@ms',
  },
  itemSelection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
  },
  price: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoBold,
    color: colors.black,
  },
  quantity: {
    fontSize: '9@ms',
    fontFamily: fonts.LatoSemiBold,
    color: colors.black,
  },
  input: {
    width: '100%',
    alignSelf: 'flex-start',
    marginVertical: '10@ms',
    height: '40@ms',
  },
  input1: {
    width: '100%',
    alignSelf: 'flex-start',
    marginVertical: '10@ms',
    height: '40@ms',
    backgroundColor: colors.dropDownBackground,
  },
});
