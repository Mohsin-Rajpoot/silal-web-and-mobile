import React, {useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  TitleHeading,
  StatisticWhiteBoxTitle,
  CustomGraph,
} from '@SilalApp/common/components/native';
import images from '../../Assets';
import styles from './Styles';
const Statistics = () => {
  const data = [
    {
      id: '1',
      Identity: '12',
      image: images.image12,
      Text: 'Udon tom yum with shrimps and mussels',
      price: '$ 2.90',
    },

    {
      id: '2',
      Identity: '9',
      image: images.image11,
      Text: 'Chicken burger in cheese sauce',
      price: '$ 3.10',
    },
    {
      id: '3',
      Identity: '9',
      image: images.image13,
      Text: 'Cheesecakes with sour cream and fresh stra...',
      price: '$ 2.50',
    },
    {
      id: '4',
      Identity: '7',
      image: images.image13,
      Text: 'Cheesecakes with sour cream and fresh stra...',
      price: '$ 2.50',
    },
  ];

  return (
    <View>
      <TitleHeading />
      <View style={styles.MainWhiteDiv}>
        <View style={styles.One}>
          <View style={styles.WhiteDive}>
            <View style={styles.ImgeViewBKG}>
              <Image
                source={images.currency}
                style={styles.CurrencyImage}
              />
            </View>
            <StatisticWhiteBoxTitle Title="Total Sales" />
            <View
              style={[styles.PercentageBkgGreen, {backgroundColor: '#E3FCEF'}]}>
              <View style={styles.TextInGreenDiv}>
                <Text style={{color: '#36B37E', textAlign: 'center'}}>
                  +11.7%{' '}
                </Text>
                <Ionicons
                  name="arrow-up"
                  style={{color: '#36B37E', textAlign: 'center'}}
                />
              </View>
            </View>
          </View>
          <Text style={styles.DollorSign}>$ 6 810.28</Text>
        </View>

        <View style={styles.One}>
          <View style={styles.WhiteDive}>
            <View style={styles.ImgeViewBKG}>
              <Ionicons
                name="cart-outline"
                style={{fontSize: 30, color: '#5AB3A8'}}
              />
            </View>
            <StatisticWhiteBoxTitle Title="Total Orders" />
            <View
              style={[styles.PercentageBkgGreen, {backgroundColor: '#FFEBE6'}]}>
              <View style={styles.TextInGreenDiv}>
                <Text style={[styles.PercentageTextColor, {color: '#FF5630'}]}>
                  - 4 %
                </Text>
                <Ionicons name="arrow-down" style={styles.VectorIconView} />
              </View>
            </View>
          </View>
          <Text style={styles.DollorSign}>398</Text>
        </View>

        <View style={styles.One}>
          <View style={styles.WhiteDive}>
            <View style={styles.ImgeViewBKG}>
              <Image
                source={images.bellIcon}
                style={styles.CurrencyImage}
              />
            </View>
            <StatisticWhiteBoxTitle Title="Out-of-stock items" />
          </View>
          <Text style={styles.DollorSign}>6</Text>
        </View>

        <View style={[styles.One, {paddingHorizontal: 8}]}>
          <View style={styles.WhiteDive}>
            <View style={styles.ImgeViewBKG}>
              <MaterialCommunityIcons
                name="medal-outline"
                style={{fontSize: 30, color: '#5AB3A8'}}
              />
            </View>
            <StatisticWhiteBoxTitle Title="Total Rating" />
            <View
              style={[styles.PercentageBkgGreen, {backgroundColor: '#E3FCEF'}]}>
              <View style={styles.TextInGreenDiv}>
                <Text style={{color: '#36B37E', textAlign: 'center'}}>
                  +11.7%{' '}
                </Text>
                <Ionicons
                  name="arrow-up"
                  style={{color: '#36B37E', textAlign: 'center'}}
                />
              </View>
            </View>
          </View>
          <Text style={[styles.DollorSign]}>
            <Fontisto name="star" style={{fontSize: 22, color: '#FFC400'}} />
            4.8
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginHorizontal: 30}}>
        <View style={styles.HotproductMainContainer}>
          <Text style={styles.headerTitleSecondary}>Hot products</Text>
          <View style={{}}>
            <FlatList
              data={data}
              numColumns={1}
              style={{marginBottom: 10, height: 350}}
              renderItem={({item}) => (
                <View style={styles.FlatListMainView}>
                  <View>
                    <Image source={item.image} style={styles.FlatListImage} />
                  </View>
                  <View style={{paddingVertical: 10}}>
                    <Text style={styles.FlatListHeadinText}>{item.Text}</Text>
                    <Text style={styles.FlatListPrice}>{item.price}</Text>
                  </View>
                  <View style={styles.FlatListSecondaryView}>
                    <Text style={styles.FlatListBadge}>{item.Identity}</Text>
                  </View>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        <View
          style={{
            width: '64%',
            backgroundColor: '#fff',
            elevation: 2,
            marginHorizontal: 10,
          }}>
          <CustomGraph />
        </View>
      </View>
    </View>
  );
};

export default Statistics;
