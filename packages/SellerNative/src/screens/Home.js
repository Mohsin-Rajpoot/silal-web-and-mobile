import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  CustomButton,
  TitleHeading,
  StatisticWhiteBoxTitle,
  LockOnLandscape,
  Graph,
  Raiting,
  Calender,
} from '@SilalApp/common/components/native';
import Svg, {Path, Rect} from 'react-native-svg';
import {CheckBox} from 'react-native-elements';
import {useTranslation} from 'react-i18next';
const {width, height} = Dimensions.get('window');

const data = [
  {
    id: '1',
    Identity: '12',
    image: require('../Assets/image8.png'),
    Text: 'Udon tom yum with shrimps and mussels',
    price: '$ 2.90',
  },

  {
    id: '2',
    Identity: '9',
    image: require('../Assets/image11.png'),
    Text: 'Chicken burger in cheese sauce',
    price: '$ 3.10',
  },
  {
    id: '3',
    Identity: '9',
    image: require('../Assets/image13.png'),
    Text: 'Cheesecakes with sour cream and fresh stra...',
    price: '$ 2.50',
  },
  {
    id: '4',
    Identity: '7',
    image: require('../Assets/image12.png'),
    Text: 'Cheesecakes with sour cream and fresh stra...',
    price: '$ 2.50',
  },
];

const data2 = [
  {
    id: '1',

    Title: 'Ursula Landerskape',
    time: '14:38',
    Paragraph:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud.',
    aboutOrder:
      'Big Tasty Big McCombo, Chicken McNuggets (18 pcs.), Chicken Wings (3 pcs.), Shrimp Roll, Cheese Sauce, Coca-Cola Zero, Cherry Pie',
  },
  {
    id: '2',
    Title: 'Ursula Landerskape',
    time: '14:38',
    Paragraph:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud.',
    aboutOrder:
      'Big Tasty Big McCombo, Chicken McNuggets (18 pcs.), Chicken Wings (3 pcs.), Shrimp Roll, Cheese Sauce, Coca-Cola Zero, Cherry Pie',
  },
  {
    id: '3',
    Title: 'Ursula Landerskape',
    time: '14:38',
    Paragraph:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud.',
    aboutOrder:
      'Big Tasty Big McCombo, Chicken McNuggets (18 pcs.), Chicken Wings (3 pcs.), Shrimp Roll, Cheese Sauce, Coca-Cola Zero, Cherry Pie',
  },
];

const data3 = [
  {
    id: '1',
    // Photo:
    Item_name: "Man's T-shirt",
    Category: 'Clothing',
    Remaining: '0',
    Variant: '2',
    Status: 'Out of stock',
    Price: '$ 120',
  },
  {
    id: '2',
    // Photo:
    Item_name: "Man's T-shirt",
    Category: 'Clothing',
    Remaining: '0',
    Variant: '2',
    Status: 'Out of stock',
    Price: '$ 120',
  },
  {
    id: '3',
    // Photo:
    Item_name: "Man's T-shirt",
    Category: 'Clothing',
    Remaining: '0',
    Variant: '2',
    Status: 'Out of stock',
    Price: '$ 120',
    Action: 'ttt',
  },
];

const Home = ({navigation}) => {
  const {t} = useTranslation();
  const [Statistic, setStatistic] = useState(true);
  const [Reviews, setReviews] = useState(false);
  const [Outofstock, setOutofstack] = useState(false);
  const [checked, setchecked] = useState(false);

  const onCurrentOrder = index => {
    console.log(index);
    if (index == 0) {
      setStatistic(true);
      setReviews(false);
      setOutofstack(false);
    } else if (index == 1) {
      setStatistic(false);
      setReviews(true);
      setOutofstack(false);
    } else if (index == 2) {
      setStatistic(false);
      setReviews(false);
      setOutofstack(true);
    }
  };
  return (
    <SafeAreaView>
      <LockOnLandscape />
      <View style={{flexDirection: 'row'}}>
        <View style={{padding: 15}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons
              name="reorder-horizontal"
              size={20}
              style={{marginLeft: 10, marginTop: 10}}
              color={'#000000'}
            />
          </TouchableOpacity>
        </View>
        <View style={{padding: 15, flexDirection: 'row'}}>
          <CustomButton
            onPress={() => onCurrentOrder(0)}
            text={t('Statistics')}
            type={Statistic ? 'PRIMARY' : 'TERTIARY'}
          />
          <CustomButton
            onPress={() => onCurrentOrder(1)}
            text="Reviews"
            type={Reviews ? 'PRIMARY' : 'TERTIARY'}
          />
          <CustomButton
            onPress={() => onCurrentOrder(2)}
            text="Out-of-stock"
            type={Outofstock ? 'PRIMARY' : 'TERTIARY'}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            right: 22,
            marginVertical: 30,
            marginHorizontal: 20,
          }}>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Rect width="24" height="24" fill="#F4F7F8" />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.48502 17.67C6.67074 17.8558 6.89126 18.0032 7.13396 18.1038C7.37667 18.2043 7.6368 18.2561 
            7.89952 18.2561C8.16223 18.2561 8.42237 18.2043 8.66507 18.1038C8.90777 18.0032 9.12829 17.8558 9.31402 
            17.67L6.48502 14.84C6.29906 15.0257 6.15155 15.2463 6.0509 15.4891C5.95025 15.7319 5.89844 15.9922 5.89844 
            16.255C5.89844 16.5178 5.95025 16.7781 6.0509 17.0209C6.15155 17.2637 6.29906 17.4843 6.48502 17.67ZM11.382 
            5.479L10.657 6.204C9.87502 6.986 8.44702 8.017 7.45102 8.515L4.43402 10.024C3.93902 10.272 3.85002 10.798 
            4.24702 11.195L12.803 19.751C13.201 20.147 13.725 20.064 13.974 19.563L15.484 16.547C15.978 15.559 17.01 
            14.127 17.795 13.341L18.52 12.615C19.3432 11.7918 19.8567 10.7094 19.9733 9.55112C20.0899 8.3928 19.8026 
            7.22976 19.16 6.259C19.2676 6.17284 19.3563 6.06558 19.4209 5.94382C19.4854 5.82206 19.5243 5.68839 19.5353 
            5.55103C19.5462 5.41366 19.5289 5.27551 19.4845 5.14507C19.44 5.01463 19.3694 4.89467 19.2768 4.79256C19.1843 
            4.69046 19.0719 4.60837 18.9464 4.55134C18.821 4.49432 18.6852 4.46357 18.5474 4.46099C18.4096 4.45841 18.2728 
            4.48405 18.1453 4.53633C18.0178 4.58862 17.9023 4.66644 17.806 4.765C17.783 4.79 17.76 4.814 17.74 4.84C16.9135 
            4.29196 15.9437 3.99978 14.952 4C14.289 3.99921 13.6323 4.12937 13.0196 4.383C12.407 4.63663 11.8505 5.00875 11.382 
            5.478V5.479Z"
              fill="#4C6870"
            />
          </Svg>
        </View>
      </View>
      {Statistic ? (
        <View>
          <TitleHeading />
          <View style={styles.MainWhiteDiv}>
            <View style={styles.One}>
              <View style={styles.WhiteDive}>
                <View style={styles.ImgeViewBKG}>
                  <Image
                    source={require('../Assets/Currency.png')}
                    style={styles.CurrencyImage}
                  />
                </View>
                <StatisticWhiteBoxTitle Title="Total Sales" />
                <View
                  style={[
                    styles.PercentageBkgGreen,
                    {backgroundColor: '#E3FCEF'},
                  ]}>
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
            {/* ///////Second */}
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
                  style={[
                    styles.PercentageBkgGreen,
                    {backgroundColor: '#FFEBE6'},
                  ]}>
                  <View style={styles.TextInGreenDiv}>
                    <Text
                      style={[styles.PercentageTextColor, {color: '#FF5630'}]}>
                      - 4 %
                    </Text>
                    <Ionicons name="arrow-down" style={styles.VectorIconView} />
                  </View>
                </View>
              </View>
              <Text style={styles.DollorSign}>398</Text>
            </View>
            {/* Third */}
            <View style={styles.One}>
              <View style={styles.WhiteDive}>
                <View style={styles.ImgeViewBKG}>
                  <Image
                    source={require('../Assets/Bellicon.png')}
                    style={styles.CurrencyImage}
                  />
                </View>
                <StatisticWhiteBoxTitle Title="Out-of-stock items" />
              </View>
              <Text style={styles.DollorSign}>6</Text>
            </View>
            {/* Four */}
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
                  style={[
                    styles.PercentageBkgGreen,
                    {backgroundColor: '#E3FCEF'},
                  ]}>
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
                <Fontisto
                  name="star"
                  style={{fontSize: 22, color: '#FFC400'}}
                />
                4.8
              </Text>
            </View>
          </View>
          {/* ****************************************Hot Products And OverView************************************ */}
          <View style={{flexDirection: 'row', marginHorizontal: 30}}>
            <View style={styles.HotproductMainContainer}>
              <Text style={styles.headerTitleSecondary}>Hot products</Text>
              <View style={{}}>
                <FlatList
                  data={data}
                  numColumns={1}
                  style={{marginBottom: 10, height: 350}}
                  // showsVerticalScrollIndicator={true}
                  renderItem={({item}) => (
                    <View style={styles.FlatListMainView}>
                      <View>
                        <Image
                          source={item.image}
                          style={styles.FlatListImage}
                        />
                      </View>
                      <View style={{paddingVertical: 10}}>
                        <Text style={styles.FlatListHeadinText}>
                          {item.Text}
                        </Text>
                        <Text style={styles.FlatListPrice}>{item.price}</Text>
                      </View>
                      <View style={styles.FlatListSecondaryView}>
                        <Text style={styles.FlatListBadge}>
                          {item.Identity}
                        </Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
            <View style={{width: '70%'}}>
              <Graph />
            </View>
          </View>
        </View>
      ) : null}
      <View>
        {Reviews ? (
          <View>
            <View style={{flexDirection: 'row', marginHorizontal: 25}}>
              <View>
                <Text style={styles.Title}>{t('RestaurantName')}</Text>
                <Text style={styles.subTitle}>8502 Preston Rd. Inglewood</Text>
              </View>
              <View style={styles.PeackTimeBackground}>
                <Text style={styles.TextPeackTime}>
                  PEAK HOURS 12 AM - 14 PM
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginVertical: 10,
              }}>
              <View
                style={{
                  width: '68%',
                  backgroundColor: '#fff',
                  elevation: 5,
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginVertical: 20,
                    paddingHorizontal: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'Poppins-Bold',
                      color: '#002733',
                      left: -8,
                    }}>
                    Reviews
                  </Text>
                  <Calender />
                </View>
                <FlatList
                  data={data2}
                  numColumns={1}
                  style={{marginBottom: 100, height: 450}}
                  renderItem={({item}) => (
                    <View>
                      <View
                        style={{
                          height: 50,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.ReviewsFlatListSecondaryMain}>
                          {item.Title}
                        </Text>
                        <View
                          style={{
                            marginLeft: -20,
                            marginTop: -3,
                          }}>
                          <Text style={{paddingRight: 20}}>{item.time}</Text>
                        </View>
                      </View>
                      <View style={{marginHorizontal: 138, marginTop: -50}}>
                        <Raiting />
                      </View>
                      <View
                        style={{
                          marginHorizontal: 30,
                          marginLeft: 150,
                          marginVertical: 1,
                        }}>
                        <Text
                          style={{
                            color: '#002733',
                            fontSize: 13,
                            fontFamily: 'Lato-Regular',
                            paddingVertical: 10,
                          }}>
                          {item.Paragraph}
                        </Text>
                        <Text
                          style={{
                            fontSize: 13,
                            paddingVertical: 5,
                            backgroundColor: '#F2F2F2',
                            borderRadius: 5,
                            padding: 4,
                            marginTop: 5,
                            paddingVertical: 10,
                          }}>
                          {' '}
                          <Text
                            style={{
                              fontFamily: 'Poppins-Medium',
                              color: '#002733',
                            }}>
                            Order :{' '}
                          </Text>{' '}
                          {item.aboutOrder}
                        </Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <CustomButton text="Reply" />
                          <TouchableOpacity
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text
                              style={{
                                color: '#4C6870',
                                fontFamily: 'Poppins-SemiBold',
                                fontSize: 13,
                              }}>
                              Contact support
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View
                        style={{
                          borderBottomWidth: 1,
                          marginHorizontal: 20,
                          marginVertical: 10,
                          borderBottomColor: '#809399',
                          opacity: 0.1,
                        }}
                      />
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
              <View
                style={{
                  width: '25%',
                  backgroundColor: '#fff',
                  elevation: 5,
                  borderRadius: 5,
                  height: '26.5%',
                }}>
                <Text
                  style={{
                    color: '#002733',
                    fontFamily: 'Poppins-Bold',
                    textAlign: 'center',
                    fontSize: 18,
                    paddingVertical: 15,
                  }}>
                  Reviews overview
                </Text>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lato-Regular',
                      color: '#002733',
                      fontSize: 13,
                    }}>
                    Total{' '}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Lato-Bold',
                      color: '#002733',
                      fontSize: 13,
                    }}>
                    189
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomWidth: 0.2,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    borderBottomColor: '#809399',
                    opacity: 0.1,
                  }}
                />

                {/* 2 */}
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lato-Regular',
                      color: '#002733',
                      fontSize: 13,
                    }}>
                    Answered{' '}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Lato-Bold',
                      color: '#002733',
                      fontSize: 13,
                    }}>
                    160
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    borderBottomColor: '#809399',
                    opacity: 0.1,
                  }}
                />
                {/* 3 */}
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lato-Regular',
                      color: '#002733',
                      fontSize: 13,
                    }}>
                    Total raiting{' '}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Lato-Bold',
                      color: '#002733',
                      fontSize: 13,
                    }}>
                    4.8
                  </Text>
                </View>
              </View>
            </View>

            {/* //////// */}
          </View>
        ) : null}
      </View>
      {Outofstock ? (
        <View>
          <View
            style={{
              width: (width / 100) * 95,
              elevation: 1,
              borderRadius: 5,
              height: (height / 100) * 75,
              backgroundColor: '#fff',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <View
              style={{
                backgroundColor: '#F2F4F5',
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: 40,
                alignItems: 'center',
                marginHorizontal: 10,
                marginVertical: 10,
                elevation: 1,
              }}>
              <View />
              <Text style={styles.HeadingOutofStack}>Photo</Text>
              <Text style={styles.HeadingOutofStack}>Item name</Text>
              <Text style={styles.HeadingOutofStack}>Category</Text>
              <Text style={styles.HeadingOutofStack}>Remaining</Text>
              <Text style={styles.HeadingOutofStack}>Variant</Text>
              <Text style={styles.HeadingOutofStack}>Status</Text>
              <Text style={styles.HeadingOutofStack}>Price</Text>
              <Text style={styles.HeadingOutofStack}>Action</Text>
            </View>

            {/* //////////////////////// */}

            <View>
              <FlatList
                data={data3}
                numColumns={1}
                style={{marginBottom: 10}}
                showsVerticalScrollIndicator={true}
                renderItem={({item}) => (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginLeft: -15,
                        paddingVertical: 15,
                      }}>
                      <View style={{marginTop: -15}}>
                        <CheckBox
                          checked={checked}
                          onPress={() => setchecked(!checked)}
                          checkedColor="#5AB3A8"
                          uncheckedColor="#CCD4D6"
                        />
                      </View>
                      <Text style={{marginLeft: -80}}>{item.Status}</Text>
                      <Text style={{marginLeft: -40}}>{item.Item_name}</Text>
                      <Text style={{marginLeft: -23}}>{item.Category}</Text>
                      <Text style={{marginLeft: -20}}>{item.Item_name}</Text>
                      <Text>{item.Remaining}</Text>
                      <View style={{flexDirection: 'column'}}>
                        <Text>{item.Variant}</Text>
                        <Text style={{fontSize: 8}}>
                          Variants on: Size, Color{' '}
                        </Text>
                      </View>
                      <Text style={{}}>{item.Price}</Text>
                      <Text>{item.Variant}</Text>
                    </View>
                    <View
                      style={{
                        borderBottomWidth: (width / 100) * 0.09,
                        marginHorizontal: 20,
                        marginVertical: 2,
                        borderBottomColor: '#809399',
                        opacity: 0.1,
                      }}
                    />
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
          {/* /////////////////// */}
          <CheckBox
            checked={checked}
            onPress={() => setchecked(!checked)}
            checkedColor="#5AB3A8"
            uncheckedColor="#CCD4D6"
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  WhiteDive: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  ImgeViewBKG: {
    height: 50,
    width: 50,
    backgroundColor: '#E3FCEF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CurrencyImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  titleInWhiteDiv: {
    fontFamily: 'Poppins-Medium',
    color: '#4C6870',
    paddingTop: 10,
  },
  PercentageBkgGreen: {
    height: 21,
    // width: 60,
    borderRadius: 5,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    // marginHorizontal:5
  },
  VectorIconView: {
    color: '#FF5630',
    textAlign: 'center',
    paddingHorizontal: 2,
  },

  PercentageTextColor: {
    color: '#36B37E',
    textAlign: 'center',
  },
  TextInGreenDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainWhiteDiv: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    marginHorizontal: 3,
  },
  One: {
    backgroundColor: '#fff',
    width: '24%',
    elevation: 2,
    borderRadius: 5,
    marginVertical: 15,
  },
  DollorSign: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#002733',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 23,
    marginTop: -20,
  },
  FlatListMainView: {
    width: '91%',
    backgroundColor: '#F4F7F8',
    alignSelf: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    marginVertical: 10,
  },
  FlatListImage: {
    height: 64,
    width: 96,
    resizeMode: 'contain',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  FlatListHeadinText: {
    width: 150,
    color: '#002733',
    fontFamily: 'Lato-Regular',
  },
  FlatListPrice: {
    width: 150,
    color: '#002733',
    paddingTop: 10,
    fontFamily: 'Poppins-SemiBold',
  },
  FlatListSecondaryView: {
    height: 38,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#5AB3A8',
    marginVertical: 30,
  },
  FlatListBadge: {
    color: '#FFFFFF',
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 8,
    fontFamily: 'Poppins-SemiBold',
  },
  headerTitleSecondary: {
    fontSize: 18,
    color: '#002733',
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  Title: {
    color: '#002733',
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    lineHeight: 35,
  },
  subTitle: {
    fontFamily: 'Lato-Light',
    fontSize: 25,
    color: '#809399',
    fontSize: 13,
  },
  PeackTimeBackground: {
    backgroundColor: '#8777D9',
    width: 171,
    height: 34,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextPeackTime: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#fff',
  },
  HotproductMainContainer: {
    width: '35%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 5,
  },
  ReviewsFlatListSecondaryMain: {
    paddingHorizontal: 10,
    color: '#002733',
    fontFamily: 'Lato-Bold',
    paddingTop: 4,
  },
  HeadingOutofStack: {
    color: '#002733',
    fontFamily: 'Lato-Bold',
    fontSize: 13,
  },
});
