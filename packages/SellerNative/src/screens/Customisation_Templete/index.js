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
const Customisation_Templete = () => {
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
    <View style={{backgroundColor: '#f1f1f1'}}>
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
                  style={{
                    fontSize: 17,
                    color: '#002733',
                    fontFamily: 'Lato-Regular',
                  }}>
                  Toppings:
                </Text>{' '}
                Lettuce, Cheese, Tomatoes, Pickle
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
                <TextInput placeholder="$ 2.00" style={styles.TextInputView} />
              </View>
              <View style={{marginHorizontal: 10, marginVertical: 2}}>
                <TouchableOpacity style={styles.HeadingButton}>
                  <Text style={styles.headingTextButton}>Lettuce</Text>
                </TouchableOpacity>
                <Text style={styles.Unavaiable}>Unavailable</Text>
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
                  style={{
                    fontSize: 17,
                    color: '#002733',
                    fontFamily: 'Lato-Regular',
                  }}>
                  Use for:
                </Text>{' '}
                Sandwiches: Burger, Deli
              </Text>
              <View style={styles.ButtonsView}>
                <TouchableOpacity style={styles.TertiaryButton}>
                  <Text style={styles.TertiaryButtonText}>
                    Customise new version
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.PrimaryButton, {paddingHorizontal: 15}]}>
                  <Text style={styles.TertiaryButtonText}>
                    Add template as is
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={styles.CreateButton}>
        <Entypo name="plus" style={{fontSize: 20, color: '#fff'}} />
        <Text style={styles.CreatebuttonText}>Create new </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Customisation_Templete;
