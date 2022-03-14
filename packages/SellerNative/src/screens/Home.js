import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LockOnLandscape from '../Components/LockOnLandscape';
import Graph from '../../../common/components/native/Graph';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Calender from '../../../common/components/native/Calender';
import Raiting from '../../../common/components/native/Raiting';
import { CustomButton, TitleHeading, StatisticWhiteBoxTitle, } from '@SilalApp/common/components/native';

const { width, height } = Dimensions.get("window");

const data = [
  {
    id: '1',
    Identity: '12',
    image: require('../../../common/assets/images/image8.png'),
    Text: 'Udon tom yum with shrimps and mussels',
    price: '$ 2.90',
  },

  {
    id: '2',
    Identity: '9',
    image: require('../../../common/assets/images/image13.png'),
    Text: 'Chicken burger in cheese sauce',
    price: '$ 3.10',
  },
  {
    id: '3',
    Identity: '9',
    image: require('../../../common/assets/images/image12.png'),
    Text: 'Cheesecakes with sour cream and fresh stra...',
    price: '$ 2.50',
  },
  {
    id: '4',
    Identity: '7',
    image: require('../../../common/assets/images/image11.png'),
    Text: 'Cheesecakes with sour cream and fresh stra...',
    price: '$ 2.50',
  },
];

const data2 = [
  {
    id: '1',

    Title: 'Ursula Landerskape',
    time: '14:38',
    Paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud.',
    aboutOrder: 'Big Tasty Big McCombo, Chicken McNuggets (18 pcs.), Chicken Wings (3 pcs.), Shrimp Roll, Cheese Sauce, Coca-Cola Zero, Cherry Pie'

  },
  {
    id: '2',
    Title: 'Ursula Landerskape',
    time: '14:38',
    Paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud.',
    aboutOrder: 'Big Tasty Big McCombo, Chicken McNuggets (18 pcs.), Chicken Wings (3 pcs.), Shrimp Roll, Cheese Sauce, Coca-Cola Zero, Cherry Pie'

  },
  {
    id: '3',
    Title: 'Ursula Landerskape',
    time: '14:38',
    Paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud.',
    aboutOrder: 'Big Tasty Big McCombo, Chicken McNuggets (18 pcs.), Chicken Wings (3 pcs.), Shrimp Roll, Cheese Sauce, Coca-Cola Zero, Cherry Pie'


  },
];

const Home = ({ navigation }) => {

  const [Statistic, setStatistic] = useState(true);
  const [Reviews, setReviews] = useState(false);
  const [Outofstock, setOutofstack] = useState(false);




  const onCurrentOrder = index => {
    console.log(index);
    if (index == 0) {
      setStatistic(true);
      setReviews(false);
      setOutofstack(false)
    } else if (index == 1) {
      setStatistic(false);
      setReviews(true);
      setOutofstack(false)
    } else if (index == 2) {
      setStatistic(false);
      setReviews(false);
      setOutofstack(true)
    }

  };
  return (
    <SafeAreaView>
      <LockOnLandscape />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ padding: 15 }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="reorder-horizontal"
              size={20}
              style={{ marginLeft: 10, marginTop: 10 }}
              color={'#000000'}
            />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 15, flexDirection: 'row' }}>
          <CustomButton
            onPress={() => onCurrentOrder(0)}
            text="Statistic"
            type={Statistic ? "PRIMARY" : "TERTIARY"}
          />
          <CustomButton
            onPress={() => onCurrentOrder(1)}
            text="Reviews"
            type={Reviews ? "PRIMARY" : "TERTIARY"}
          />
          <CustomButton
            onPress={() => onCurrentOrder(2)}
            text="Out-of-stock"
            type={Outofstock ? "PRIMARY" : "TERTIARY"}
          />
        </View>
      </View>
      {Statistic ?


        <ScrollView>

          <View>
            <TitleHeading />
            <View style={styles.MainWhiteDiv}>
              <View style={styles.One}>
                <View style={styles.WhiteDive}>
                  <View style={styles.ImgeViewBKG}>
                    <Image source={require("../../../common/assets/images/Currency.png")} style={styles.CurrencyImage} />
                  </View>
                  <StatisticWhiteBoxTitle Title="Total Sales" />
                  <View style={[styles.PercentageBkgGreen, { backgroundColor: '#E3FCEF', }]}>
                    <View style={styles.TextInGreenDiv}>
                      <Text style={{ color: '#36B37E', textAlign: 'center' }}>+11.7% </Text>
                      <Ionicons name='arrow-up' style={{ color: '#36B37E', textAlign: 'center' }} />
                    </View>
                  </View>
                </View>
                <Text style={styles.DollorSign}>
                  $ 6 810.28
                </Text>
              </View>
              {/* ///////Second */}
              <View style={styles.One}>
                <View style={styles.WhiteDive}>
                  <View style={styles.ImgeViewBKG}>
                    <Ionicons name='cart-outline' style={{ fontSize: 30, color: '#5AB3A8' }} />
                  </View>
                  <StatisticWhiteBoxTitle Title="Total Orders" />
                  <View style={[styles.PercentageBkgGreen, { backgroundColor: '#FFEBE6', }]}>
                    <View style={styles.TextInGreenDiv}>
                      <Text style={[styles.PercentageTextColor, { color: '#FF5630', }]}>- 4 %</Text>
                      <Ionicons name='arrow-down' style={styles.VectorIconView} />
                    </View>
                  </View>
                </View>
                <Text style={styles.DollorSign}>
                  398
                </Text>
              </View>
              {/* Third */}
              <View style={styles.One}>
                <View style={styles.WhiteDive}>
                  <View style={styles.ImgeViewBKG}>
                    <MaterialCommunityIcons name='bell-ring-outline' style={{ fontSize: 30, color: '#5AB3A8' }} />

                  </View>
                  <StatisticWhiteBoxTitle Title="Out-of-stock items" />

                </View>
                <Text style={styles.DollorSign}>
                  6
                </Text>
              </View>
              {/* Four */}
              <View style={[styles.One, { paddingHorizontal: 5 }]}>
                <View style={styles.WhiteDive}>
                  <View style={styles.ImgeViewBKG}>
                    <MaterialCommunityIcons name='medal-outline' style={{ fontSize: 30, color: '#5AB3A8' }} />
                  </View>
                  <StatisticWhiteBoxTitle Title="Total Raiting" />
                  <View style={[styles.PercentageBkgGreen, { backgroundColor: '#E3FCEF', }]}>
                    <View style={styles.TextInGreenDiv}>
                      <Text style={{ color: '#36B37E', textAlign: 'center' }}>+11.7% </Text>
                      <Ionicons name='arrow-up' style={{ color: '#36B37E', textAlign: 'center' }} />
                    </View>
                  </View>
                </View>

                <Text style={[styles.DollorSign]}>
                  <Fontisto name="star" style={{ fontSize: 22, color: '#FFC400', }} />
                  4.8
                </Text>
              </View>
            </View>
            {/* ****************************************Hot Products And OverView************************************ */}
            <View style={{ flexDirection: 'row', marginHorizontal: 30 }}>
              <View style={{
                width: width / 100 * 35,
                backgroundColor: '#FFFFFF',
                borderRadius: 5,
                elevation: 5,
              }}>
                <Text
                  style={styles.headerTitleSecondary}>
                  Hot products
                </Text>
                <View style={{ flex: 1 }}>
                  <FlatList
                    data={data}
                    numColumns={1}
                    style={{ marginBottom: 10 }}
                    showsVerticalScrollIndicator={true}
                    renderItem={({ item }) => (
                      <View
                        style={styles.FlatListMainView}>
                        <View>
                          <Image
                            source={item.image}
                            style={styles.FlatListImage}
                          />
                        </View>
                        <View style={{ paddingVertical: 10 }}>
                          <Text style={styles.FlatListHeadinText}>
                            {item.Text}
                          </Text>
                          <Text style={styles.FlatListPrice}>
                            {item.price}
                          </Text>
                        </View>
                        <View
                          style={styles.FlatListSecondaryView}>
                          <Text
                            style={styles.FlatListBadge}>
                            {item.Identity}
                          </Text>
                        </View>
                      </View>
                    )}
                    keyExtractor={item => item.id}
                  />
                </View>
              </View>
              <View>
                <Graph />
              </View>
            </View>

          </View>
        </ScrollView>

        : null
      }
      <View>
        {Reviews ?
          <View>

            <TitleHeading />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <View style={{ width: width / 100 * 65, backgroundColor: '#fff', elevation: 5, borderRadius: 5, }}>
                <View style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginVertical: 20,
                }}>
                  <Text style={{ paddingHorizontal: 20, fontSize: 18, fontFamily: 'Poppins-Bold', color: '#002733' }} >Reviews</Text>
                  <Calender />
                </View>
                <FlatList
                  data={data2}
                  numColumns={1}
                  style={{ marginBottom: 190 }}
                  renderItem={({ item }) => (
                    <View>
                      <View style={{ height: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ paddingHorizontal: 20, color: '#002733', fontFamily: 'Lato-Bold', paddingTop: 4 }}>{item.Title}</Text>
                        <View style={{
                          marginLeft: -20,
                          marginTop: -3,
                        }}>
                          <Text style={{ paddingRight: 20 }}>{item.time}</Text>
                        </View>
                      </View>
                      <View style={{ marginHorizontal: 138, marginTop: -50 }}>
                        <Raiting />
                      </View>
                      <View style={{ marginHorizontal: 30, marginLeft: 150, marginVertical: 1 }}>
                        <Text style={{ color: '#002733', fontSize: 13, fontFamily: 'Lato-Regular', paddingVertical: 10 }}>{item.Paragraph}</Text>
                        <Text style={{ fontSize: 13, paddingVertical: 5, backgroundColor: '#F2F2F2', borderRadius: 5, padding: 4, marginTop: 5, paddingVertical: 10 }}> <Text style={{ fontFamily: 'Poppins-Medium', color: '#002733' }}>Order : </Text> {item.aboutOrder}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginHorizontal: 150, justifyContent: 'space-between', width: 430, marginVertical: 10 }}>
                        <CustomButton text="Search" />
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }}>
                          <Text style={{ color: '#4C6870', fontFamily: 'Poppins-SemiBold', fontSize: 13 }}>Contact support</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ borderBottomWidth: width / 100 * 0.09, marginHorizontal: 20, marginVertical: 10, borderBottomColor: '#809399', opacity: 0.1 }} />
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />

              </View>
              <View style={{ width: width / 100 * 25, backgroundColor: '#fff', elevation: 5, borderRadius: 5, height: height / 100 * 25 }}>
                <Text style={{ color: '#002733', fontFamily: 'Poppins-Bold', textAlign: 'center', fontSize: 18, paddingVertical: 15 }}>Reviews overview</Text>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
                  <Text style={{ fontFamily: 'Lato-Regular', color: '#002733', fontSize: 13 }}>Total </Text>
                  <Text style={{ fontFamily: 'Lato-Bold', color: '#002733', fontSize: 13 }}>189</Text>
                </View>
                <View style={{ borderBottomWidth: width / 100 * 0.09, marginHorizontal: 20, marginVertical: 10, borderBottomColor: '#809399', opacity: 0.1 }} />

                {/* 2 */}
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
                  <Text style={{ fontFamily: 'Lato-Regular', color: '#002733', fontSize: 13 }}>Answered </Text>
                  <Text style={{ fontFamily: 'Lato-Bold', color: '#002733', fontSize: 13 }}>160</Text>
                </View>
                <View style={{ borderBottomWidth: width / 100 * 0.09, marginHorizontal: 20, marginVertical: 10, borderBottomColor: '#809399', opacity: 0.1 }} />
                {/* 3 */}
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
                  <Text style={{ fontFamily: 'Lato-Regular', color: '#002733', fontSize: 13 }}>Total raiting </Text>
                  <Text style={{ fontFamily: 'Lato-Bold', color: '#002733', fontSize: 13 }}>4.8</Text>
                </View>



              </View>
            </View>



            {/* //////// */}
          </View>
          : null
        }
      </View>
      {Outofstock ?
        <View>
          <Text>Outofstock</Text>
        </View>
        : null
      }
    </SafeAreaView>
  )
}

export default Home
const styles = StyleSheet.create({
  WhiteDive: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-evenly',
    paddingTop: 10
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
    resizeMode: 'contain'
  },
  titleInWhiteDiv: {
    fontFamily: 'Poppins-Medium',
    color: '#4C6870',
    paddingTop: 10
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
    paddingHorizontal: 2
  },


  PercentageTextColor: {
    color: '#36B37E',
    textAlign: 'center'
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
    width: width / 100 * 23,
    elevation: 2,
    borderRadius: 5,
    marginVertical: 15
  },
  DollorSign: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#002733',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 23,
    marginTop: -20
  },
  FlatListMainView: {
    width: width / 100 * 29,
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
    color: '#002733'
  },
  FlatListPrice: {
    width: 150,
    color: '#002733',
    paddingTop: 10
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
  },
  headerTitleSecondary: {
    fontSize: 18,
    color: '#002733',
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 30,
    paddingVertical: 15,
  }



})