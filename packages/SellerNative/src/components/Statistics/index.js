import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
import colors from '@SilalApp/common/assets/colors';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {LockOnLandscape} from '@SilalApp/common/components/native';
import CustomText from '@SilalApp/common/components/CustomText';
var {width} = Dimensions.get('screen');
const Statistics = ({}) => {
  const [screenWidth, setScreenWidth] = useState(width);
  const navigation = useNavigation();
  const {t} = useTranslation();
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
  const DetailData = [
    {
      id: 1,
      image: require('../../Assets/Currency.png'),
      title: 'Total_sales',
      percentage: '11.1%',
      Amount: '$ 6 810.28',
      lowOrders: 0,
      rating: false,
    },
    {
      id: 2,
      image: require('../../Assets/CartHome.png'),
      title: 'Total_orders',
      percentage: '-4%',
      Amount: '398',
      lowOrders: 1,
      rating: false,
    },
    {
      id: 3,
      image: require('../../Assets/Bellicon.png'),
      title: !IsTablet ? 'out_of_stock_item' : 'outOfStock',
      // percentage: '11.1%',
      Amount: '6',
      lowOrders: 2,
      rating: false,
    },
    {
      id: 4,
      image: require('../../Assets/madal.png'),
      title: 'Total_rating',
      percentage: '0.8%',
      Amount: '4.8',
      lowOrders: 0,
      rating: true,
    },
  ];
  return (
    <ScrollView contentContainerStyle={{width: '100%', flexGrow: 1}}>
      <LockOnLandscape
        onPress={() => console.log('Harris')}
        width={screenWidth}
        setWidth={setScreenWidth}
      />
      <View style={{zIndex: 1}}>
        <TitleHeading Date="Date" />
      </View>
      <View style={!IsTablet ? styles.MainWhiteDivMobile : styles.MainWhiteDiv}>
        {DetailData.map((item, index) => {
          return (
            <View style={!IsTablet ? styles.OneMobile : styles.One}>
              <View
                style={!IsTablet ? styles.WhiteDiveMobile : styles.WhiteDive}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.ImgeViewBKG}>
                    <Image
                      source={item.image}
                      style={
                        !IsTablet
                          ? styles.CurrencyImageMobile
                          : styles.CurrencyImage
                      }
                    />
                  </View>

                  <StatisticWhiteBoxTitle Title={t(item.title)} />
                </View>
                {!IsTablet ? (
                  <View />
                ) : item.lowOrders == 2 ? (
                  <View style={{width: '10%'}} />
                ) : (
                  <View
                    style={[
                      styles.PercentageBkgGreen,
                      IsTablet && item.lowOrders == 1
                        ? styles.colorred
                        : styles.colorgreen,
                    ]}>
                    <View style={styles.TextInGreenDiv}>
                      <Text
                        style={
                          item.lowOrders == 1
                            ? styles.TotalDataInactive
                            : styles.TotalData
                        }>
                        {item.percentage}{' '}
                      </Text>
                      <Ionicons
                        name={item.lowOrders == 1 ? 'arrow-down' : 'arrow-up'}
                        style={
                          item.lowOrders == 1
                            ? styles.TotalDataInactive
                            : styles.TotalData
                        }
                      />
                    </View>
                  </View>
                )}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {item.rating ? (
                  <Fontisto name="star" style={styles.raitingIcon} />
                ) : (
                  <View />
                )}
                <Text
                  style={
                    !IsTablet ? styles.DollorSignMobile : styles.DollorSign
                  }>
                  {item.Amount}
                </Text>
              </View>
              {!IsTablet && item.lowOrders == 2 ? (
                <CustomText
                  label={t('RenewItem')}
                  textStyle={styles.renewItem}
                />
              ) : !IsTablet && (item.lowOrders == 1 || item.lowOrders == 0) ? (
                <View
                  style={[
                    !IsTablet
                      ? styles.PercentageBkgGreenMobile
                      : styles.PercentageBkgGreen,
                    !IsTablet && item.lowOrders == 1
                      ? styles.colorred
                      : styles.colorgreen,
                  ]}>
                  <View style={!IsTablet ? styles.TextInGreenDivMobile : null}>
                    <Text
                      style={
                        item.lowOrders == 1
                          ? styles.TotalDataInactive
                          : styles.TotalData
                      }>
                      {' '}
                      {item.percentage}
                    </Text>
                    <Ionicons
                      name={item.lowOrders == 1 ? 'arrow-down' : 'arrow-up'}
                      style={
                        item.lowOrders == 1
                          ? styles.TotalDataInactive
                          : styles.TotalData
                      }
                    />
                  </View>
                </View>
              ) : (
                <View />
              )}
            </View>
          );
        })}
      </View>

      <View
        style={{
          flexDirection: !IsTablet ? 'column' : 'row',
          marginHorizontal: !IsTablet ? verticalScale(15) : 30,
        }}>
        <View
          style={
            !IsTablet
              ? styles.HotproductMainContainerMobile
              : styles.HotproductMainContainer
          }>
          <View
            style={
              !IsTablet ? styles.HotProductPartMobile : styles.HotProductPart
            }>
            <Text
              style={
                !IsTablet
                  ? styles.headerTitleSecondaryMobile
                  : styles.headerTitleSecondary
              }>
              {t('Hot_products')}
            </Text>
            <View>
              <Calender bg_Calender="done" />
            </View>
          </View>
          <View>
            <FlatList
              data={data}
              numColumns={1}
              nestedScrollEnabled={true}
              style={{marginBottom: 10, height: 460}}
              renderItem={({item}) => (
                <View style={styles.FlatListMainView}>
                  <View>
                    <Image source={item.image} style={styles.FlatListImage} />
                  </View>
                  <View
                    style={{
                      width: !IsTablet ? '55%' : '46%',
                      marginVertical: verticalScale(2),
                    }}>
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
        <View style={!IsTablet ? styles.graphViewMobile : styles.graphView}>
          <View style={styles.GraphHeaderView}>
            <Text style={styles.GraphHeading}>{t('Revenue_overView')}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailedAnalytics')}
              style={styles.GraphButton}>
              <Text style={styles.GraphButtonText}>{t('Detail_infor')}</Text>
              {!IsTablet ? (
                <Icon
                  name="right"
                  type="antdesign"
                  color={colors.primary}
                  size={10}
                />
              ) : (
                <View />
              )}
            </TouchableOpacity>
          </View>
          <CustomGraph />
        </View>
      </View>
      <View style={{height: verticalScale(95)}} />
    </ScrollView>
  );
};

export default Statistics;
