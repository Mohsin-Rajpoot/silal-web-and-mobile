import React, {useState, useRef} from 'react';
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
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import fonts from '@SilalApp/common/assets/fonts';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
import CustomText from '@SilalApp/common/components/CustomText';
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
const tagData = [
  {id: 1, title: 'Nulla Lorem '},
  {id: 2, title: 'Nulla Lorem '},
  {id: 3, title: 'Nulla Lorem '},
  {id: 4, title: 'Nulla Lorem '},
  {id: 5, title: 'Nulla Lorem '},
  {id: 6, title: 'Nulla Lorem '},
];
const Reviews = () => {
  const {t} = useTranslation();
  const [isReply, setisReply] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState('');
  const ref = useRef(null);
  return (
    <>
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
              <CustomModal
                isModalVisible={visible}
                setModalVisible={setVisible}
                modalWrapperStyle={{
                  marginHorizontal: width(0),
                  marginVertical: height(0),
                  marginTop: '40%',
                  justifyContent: 'flex-start',
                }}
                modalContainerStyle={{
                  borderRadius: 2,
                  backgroundColor: 'white',
                }}>
                <ScrollView contentContainerStyle={{flexGrow: 1, width: '85%'}}>
                  <View style={{flexDirection: 'column', flex: 1}}>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          width: '85%',
                          marginHorizontal: verticalScale(10),
                        }}>
                        <CustomText
                          label={t('Reply_to_review')}
                          textStyle={styles.replyTo_Review}
                        />
                        <CustomText
                          label={t('Reply_to_Customer')}
                          textStyle={styles.replyTo_Review_Detail}
                        />
                      </View>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => setVisible(false)}>
                        <Icon
                          name="cross"
                          type="entypo"
                          size={22}
                          color={colors.black}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                      }}>
                      <View style={styles.FlatListParagraphTitleMobile}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: !IsTablet ? '100%' : '70%',
                          }}>
                          <Text style={styles.ReviewsFlatListSecondaryMain}>
                            {modalData.Title}
                          </Text>
                          {!IsTablet ? (
                            <Text style={styles.timeDuration}>
                              {modalData.time}
                            </Text>
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
                              }}></View>
                          ) : (
                            <View />
                          )}
                        </View>
                        {!IsTablet ? (
                          <View style={{marginHorizontal: 10, marginTop: 4}}>
                            <Raiting />
                          </View>
                        ) : (
                          <View />
                        )}
                      </View>
                    </View>
                    <View style={styles.TextParagraphFlatMobile}>
                      <Text style={styles.FirstParagraphContent}>
                        {modalData.Paragraph}
                      </Text>
                      <Text style={styles.ParagraphSecondMobile1}>
                        {' '}
                        <Text
                          style={{
                            fontFamily: fonts.LatoMedium,
                            color: colors.black,
                            fontSize: verticalScale(12),
                          }}>
                          Order :{' '}
                        </Text>{' '}
                        {modalData.aboutOrder}
                      </Text>
                    </View>

                    <View
                      style={{
                        borderRadius: 8,
                        width: '95%',
                        backgroundColor: colors.dropDownBackground,
                        alignSelf: 'center',
                      }}>
                      <TextInput
                        placeholder={t('Type_here')}
                        multiline={true}
                        textAlignVertical="top"
                        placeholderTextColor={colors.textPrimaryBlur}
                        style={{
                          height: verticalScale(100),
                          width: '100%',
                          alignSelf: 'center',
                        }}
                      />
                    </View>
                    <View>
                      <CustomText
                        label={t('suggestions')}
                        textStyle={styles.suggestion}
                      />
                      <View
                        style={{
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          width: '100%',
                          marginHorizontal: verticalScale(10),
                        }}>
                        {tagData.map((item, index) => {
                          return (
                            <View style={styles.tagContainer}>
                              <CustomText
                                label={item.title}
                                textStyle={styles.tagTitle}
                              />
                            </View>
                          );
                        })}
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: !IsTablet ? 'column' : 'row',
                        justifyContent: 'space-between',
                        marginVertical: 5,
                        width: !IsTablet ? '90%' : '80%',
                        alignSelf: !IsTablet ? 'center' : 'flex-end',
                        marginRight: scale(10),
                      }}>
                      <CustomButton
                        text={t('reply')}
                        containerStyle={
                          !IsTablet ? styles.submitBtnMobile : styles.submitBtn
                        }
                        onPress={() => setVisible(false)}
                      />
                      <TouchableOpacity style={styles.cancelBtn}>
                        <Text style={styles.CancelButtonMobile}>
                          {t('Cancel')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {/* <View style={styles.BorderLine} /> */}
                    <View style={{height: 40}} />
                  </View>
                </ScrollView>
              </CustomModal>
              <View>
              <FlatList
                data={data2}
                numColumns={1}
                nestedScrollEnabled={true}
                style={{marginBottom: 5,}}
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
                            width: !IsTablet ? '100%' : '80%',
                          }}>
                          <Text style={styles.ReviewsFlatListSecondaryMain}>
                            {item.Title}
                          </Text>
                          {!IsTablet ? (
                            <Text style={styles.timeDuration}>{item.time}</Text>
                          ) : null}
                          {IsTablet ? (
                            <View
                              style={{
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}>
                              {IsTablet && (
                                <View style={{width: '32%'}}>
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
                          width: '74%',
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
                        flexDirection: !IsTablet ? 'column' : 'row',
                        justifyContent: 'space-between',
                        marginVertical: '3%',
                        width: !IsTablet ? '85%' : '73%',
                        alignSelf: !IsTablet ? 'center' : 'flex-end',
                        marginRight: scale(10),
                        // marginHorizontal: IsTablet? '50%': null,
                      }}>
                      <CustomButton
                        text={isReply == true ? 'Submit' : 'Reply'}
                        containerStyle={
                          !IsTablet ? styles.submitBtnMobile : styles.submitBtn
                        }
                        onPress={() => {
                          setModalData(item);
                          setVisible(!IsTablet ? !visible : false);
                          setisReply(!isReply);
                        }}
                      />
                      <TouchableOpacity
                        style={
                          !IsTablet ? styles.contactBtn : styles.contactBtnTab
                        }>
                        <Text
                          style={
                            !IsTablet
                              ? styles.ContactButtonMobile
                              : styles.ContactButton
                          }>
                          {t('contact_support')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.BorderLine} />
                    <View style={{height: 100}} />
                  </View>
                )}
                keyExtractor={item => item.id}
              />
              </View>
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
    </>
  );
};

export default Reviews;
