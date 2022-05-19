import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {
  Calender,
  CustomButton,
  Raiting,
  TitleHeading,
} from '@SilalApp/common/components/native';
import styles from './Styles';
import {useTranslation} from 'react-i18next';
import colors from '@SilalApp/common/assets/colors';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import {Icon} from 'react-native-elements';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
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

const Reviews = () => {
  const {t} = useTranslation();
  const [isReply, setisReply] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{backgroundColor: colors.backgroundColor, flex: 1}}
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -75 : 120}
      enabled>
      <ScrollView>
        <TitleHeading />
        <View style={!IsTablet ? styles.DividerRowMobile : styles.DividerRow}>
          <View
            style={
              !IsTablet
                ? styles.DividerFirstViewMobile
                : styles.DividerFirstView
            }>
            <View
              style={
                !IsTablet
                  ? styles.firstViewInerStyleMobile
                  : styles.firstViewInerStyle
              }>
              <Text style={styles.firstViewTitle}>{t('reviews')}</Text>
              <Calender />
            </View>
            <FlatList
              data={data2}
              numColumns={1}
              nestedScrollEnabled={true}
              style={{marginBottom: 5, height: 400}}
              renderItem={({item}) => (
                <View style={{flexDirection: 'column'}}>
                  <View
                    style={{
                      flexDirection: !IsTablet ? 'column' : 'row',
                    }}>
                    <View
                      style={
                        !IsTablet
                          ? styles.FlatListParagraphTitleMobile
                          : styles.FlatListParagraphTitle
                      }>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: !IsTablet ? '100%' : '70%',
                        }}>
                        <Text style={styles.ReviewsFlatListSecondaryMain}>
                          {item.Title}
                        </Text>
                        {!IsTablet ? (
                          <Text style={styles.timeDuration}>{item.time}</Text>
                        ) : (
                          <View />
                        )}
                        {IsTablet ? (
                          <View
                            style={{
                              width: '100%',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}>
                            {IsTablet && (
                              <View style={{width: '30%'}}>
                                <Raiting />
                              </View>
                            )}

                            {IsTablet ? (
                              <Text style={styles.timeDuration}>
                                {item.time}
                              </Text>
                            ) : (
                              <View />
                            )}
                          </View>
                        ) : (
                          <View />
                        )}
                      </View>
                      <View style={{}}></View>
                      {!IsTablet ? (
                        <View style={{marginHorizontal: 10, marginTop: 10}}>
                          <Raiting />
                        </View>
                      ) : (
                        <View />
                      )}
                    </View>
                  </View>
                  <View
                    style={
                      !IsTablet
                        ? styles.TextParagraphFlatMobile
                        : styles.TextParagraphFlat
                    }>
                    <Text style={styles.FirstParagraphContent}>
                      {item.Paragraph}
                    </Text>
                    <Text
                      style={
                        !IsTablet
                          ? styles.ParagraphSecondMobile
                          : styles.ParagraphSecond
                      }>
                      {' '}
                      <Text
                        style={{
                          fontFamily: fonts.LatoMedium,
                          color: colors.black,
                          fontSize: verticalScale(12),
                        }}>
                        Order :{' '}
                      </Text>{' '}
                      {item.aboutOrder}
                    </Text>
                  </View>
                  {!IsTablet ? (
                    <View />
                  ) : IsTablet && isReply == true ? (
                    <View
                      style={{
                        borderColor: '#E8E8E8',
                        borderWidth: 1,
                        borderRadius: 5,
                        width: '80%',
                        alignSelf: 'flex-end',
                        marginHorizontal: verticalScale(12),
                        marginVertical: moderateScale(8),
                      }}>
                      <TextInput
                        placeholder="Type here"
                        multiline={true}
                        textAlignVertical="top"
                        style={{height: 80}}
                      />
                    </View>
                  ) : null}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 5,
                      width: '80%',
                      alignItems: 'center',
                      alignSelf: 'flex-end',
                      marginRight: verticalScale(10),
                    }}>
                    <CustomButton
                      text={isReply == true ? 'Submit' : 'Reply'}
                      onPress={() => setisReply(true)}
                    />
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.ContactButton}>Contact support</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.BorderLine} />
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View
            style={
              !IsTablet
                ? styles.SecondViewMainContainerMobile
                : styles.SecondViewMainContainer
            }>
            <Text
              style={
                !IsTablet
                  ? styles.SecondViewTitleMobile
                  : styles.SecondViewTitle
              }>
              {t('review_overview')}
            </Text>
            <View style={styles.LineSecondView}>
              <Text
                style={!IsTablet ? styles.TitleViewMobile : styles.TitleView}>
                {t('Total')}
              </Text>
              <Text style={styles.oneEightNine}>189</Text>
            </View>
            <View style={styles.SecondViewBorderLine} />
            <View style={styles.LineSecondView}>
              <Text
                style={!IsTablet ? styles.TitleViewMobile : styles.TitleView}>
                {t('Answered')}{' '}
              </Text>
              <Text style={styles.oneEightNine}>160</Text>
            </View>
            <View style={styles.SecondViewBorderLine} />
            <View style={styles.LineSecondView}>
              <Text
                style={!IsTablet ? styles.TitleViewMobile : styles.TitleView}>
                {t('total-rating')}{' '}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {!IsTablet ? (
                  <Icon
                    name="star"
                    type="antdesign"
                    size={14}
                    color={colors.yellow}
                  />
                ) : (
                  <View />
                )}
                <View style={{width: 5}} />
                <Text style={styles.oneEightNine}>4.8</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Reviews;
