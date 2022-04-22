import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  TitleHeading,
  StatisticWhiteBoxTitle,
  CustomGraph,
  Calender,
} from '@SilalApp/common/components/native';
import styles from './Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const Statistics = ({  }) => {

    const navigation = useNavigation(); 
  // const [orientation, setOrientation] = useState('LANDSCAPE');

  // const determineAndSetOrientation = () => {
  //     let width = Dimensions.get('window').width;
  //     let height = Dimensions.get('window').height;

  //     if (width < height) {
  //         setOrientation('LANDSCAPE');
  //         console.log(orientation,"orientation");
  //       } else {
  //         setOrientation('LANDSCAPE');
  //         console.log(orientation,'LANDSCAPE');
  //       }
  //   }

  //   useEffect(() => {

  //     determineAndSetOrientation();
  //     Dimensions.addEventListener('change', determineAndSetOrientation);

  //     return () => {
  //       Dimensions.addEventListener('change', determineAndSetOrientation)
  //     }
  //   }, []);

  const data = [
    {
      id: '1',
      Identity: '12',
      image: require('../../Assets/image8.png'),
      Text: 'Udon tom yum with shrimps and mussels',
      price: '$ 2.90',
    },

    {
      id: '2',
      Identity: '9',
      image: require('../../Assets/image11.png'),
      Text: 'Chicken burger in cheese sauce',
      price: '$ 3.10',
    },
    {
      id: '3',
      Identity: '9',
      image: require('../../Assets/image13.png'),
      Text: 'Cheesecakes with sour cream and fresh stra...',
      price: '$ 2.50',
    },
    {
      id: '4',
      Identity: '7',
      image: require('../../Assets/image12.png'),
      Text: 'Cheesecakes with sour cream and fresh stra...',
      price: '$ 2.50',
    },
  ];

  return (
    <View>
      <View style={{zIndex: 1}}>
        <TitleHeading Date="Date" />
      </View>
      <View style={styles.MainWhiteDiv}>
        <View style={styles.One}>
          <View style={styles.WhiteDive}>
            <View style={styles.ImgeViewBKG}>
              <Image
                source={require('../../Assets/Currency.png')}
                style={styles.CurrencyImage}
              />
            </View>
            <StatisticWhiteBoxTitle Title="Total Sales" />
            <View style={[styles.PercentageBkgGreen, styles.colorgreen]}>
              <View style={styles.TextInGreenDiv}>
                <Text style={styles.TotalData}>+11.7% </Text>
                <Ionicons name="arrow-up" style={styles.TotalData} />
              </View>
            </View>
          </View>
          <Text style={styles.DollorSign}>$ 6 810.28</Text>
        </View>

        <View style={styles.One}>
          <View style={styles.WhiteDive}>
            <View style={styles.ImgeViewBKG}>
              <Ionicons name="cart-outline" style={styles.WhihteDiveIcon} />
            </View>
            <StatisticWhiteBoxTitle Title="Total Orders" />
            <View
              style={[styles.PercentageBkgGreen, styles.BackgroundLightRed]}>
              <View style={styles.TextInGreenDiv}>
                <Text
                  style={[styles.PercentageTextColor, styles.VectorIconView]}>
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
                source={require('../../Assets/Bellicon.png')}
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
                style={styles.WhihteDiveIcon}
              />
            </View>
            <StatisticWhiteBoxTitle Title="Total Rating" />
            <View style={[styles.PercentageBkgGreen, styles.colorgreen]}>
              <View style={styles.TextInGreenDiv}>
                <Text style={styles.TotalData}>+11.7% </Text>
                <Ionicons name="arrow-up" style={styles.TotalData} />
              </View>
            </View>
          </View>
          <Text style={[styles.DollorSign]}>
            <Fontisto name="star" style={styles.raitingIcon} />
            4.8
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginHorizontal: 30}}>
        <View style={styles.HotproductMainContainer}>
          <View style={styles.HotProductPart}>
            <Text style={styles.headerTitleSecondary}>Hot products</Text>
            <View>
              <Calender bg_Calender="done" />
            </View>
          </View>
          <View>
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
        <View style={styles.graphView}>
          <View style={styles.GraphHeaderView}>
            <Text style={styles.GraphHeading}>Revenue overview</Text>
            <TouchableOpacity
                 onPress={() => navigation.navigate('DetailedAnalytics')}
              style={styles.GraphButton}>
              <Text style={styles.GraphButtonText}>Detailed info</Text>
            </TouchableOpacity>
          </View>
          <CustomGraph />
        </View>
      </View>
    </View>
  );
};

export default Statistics;
