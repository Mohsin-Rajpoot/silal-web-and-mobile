import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import images from '../../Assets';
import {useTranslation} from 'react-i18next';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
const Customisation_Templete = () => {
  const {t} = useTranslation();
  const data = [
    {
      id: '1',
    },

    {
      id: '2',
    },
    {
      id: '3',
    },
  ];

  return (
    <View style={{backgroundColor:colors.backgroundColor }}>
      <FlatList
        data={data}
        numColumns={1}
        style={{paddingBottom: 10, height: 780}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.WhiteView}>
            <View style={styles.ViewHeading}>
              <Text style={styles.headingText}>
                <Text
               style={styles.styleUser}>
                  {t('topping')}:
                </Text>{' '}
                {t('Lettuce')}, {t('Cheese')}, {t('Tomatoes')}, {t('Pickle')}
              </Text>
              <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
                <Text style={styles.Code}>#542399</Text>
                <TouchableOpacity>
                  <Image
                    source={images.pencil}
                    style={{height: 30, width: 30, borderRadius: 5}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
              <View style={{marginHorizontal: 10, marginVertical: 2}}>
                <TouchableOpacity style={styles.HeadingButton}>
                  <Text style={styles.headingTextButton}>{t('Lettuce')}</Text>
                </TouchableOpacity>
                <TextInput placeholder="$ 2.00" style={styles.TextInputView} />
              </View>

              <View style={{marginHorizontal: 10, marginVertical: 2}}>
                <TouchableOpacity style={styles.HeadingButton}>
                  <Text style={styles.headingTextButton}>Lettuce</Text>
                </TouchableOpacity>
                <TextInput placeholder="$ 2.00" style={styles.TextInputView} />
              </View>
              <View style={{marginHorizontal: 10, marginVertical: 2}}>
                <TouchableOpacity style={styles.HeadingButton}>
                  <Text style={styles.headingTextButton}>Lettuce</Text>
                </TouchableOpacity>
                <TextInput placeholder="$ 2.00" style={styles.TextInputView} />
              </View>
              <View style={{marginHorizontal: 10, marginVertical: 2}}>
                <TouchableOpacity style={styles.HeadingButton}>
                  <Text style={styles.headingTextButton}>Lettuce</Text>
                </TouchableOpacity>
                <TextInput placeholder="$ 2.00" style={styles.TextInputView} />
              </View>
              <View style={{marginHorizontal: 10, marginVertical: 2}}>
                <TouchableOpacity style={styles.HeadingButton}>
                  <Text style={styles.headingTextButton}>Lettuce</Text>
                </TouchableOpacity>
                <Text style={styles.Unavaiable}>{t('unavailable')}</Text>
              </View>
            </View>
            <View
              style={[
                styles.ViewHeading,
                {
                  position: 'absolute',
                  bottom: 1,
                  width: '95%',
                  marginVertical: 0,
                },
              ]}>
              <Text style={[styles.headingText, {paddingTop: 5}]}>
                {' '}
                <Text
                  style={styles.styleUser}>
                  {t('Use_for')}:
                </Text>{' '}
                Sandwiches: Burger, Deli
              </Text>
              <View style={styles.ButtonsView}>
                <TouchableOpacity style={styles.TertiaryButton}>
                  <Text style={styles.TertiaryButtonText}>
                    {t('Customise_new_verison')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.PrimaryButton, {paddingHorizontal: 15}]}>
                  <Text style={[styles.TertiaryButtonText,{color:colors.primary}]}>
                    {t('Add_template_as')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={styles.CreateButton}>
        <Entypo name="plus" style={{fontSize: 20, color: colors.textWhite}} />
        <Text style={styles.CreatebuttonText}>{t('create_new')} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Customisation_Templete;